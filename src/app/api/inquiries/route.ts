import { NextRequest, NextResponse } from 'next/server';
import { supabase, supabaseAdmin } from '@/lib/supabase';
import { InquiryData, InquiryCategory } from '@/types/inquiries';

// Simple in-memory rate limiting (for production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX_REQUESTS = 5; // 5 requests per 15 minutes per IP

export async function POST(request: NextRequest) {
  try {
    console.log('Inquiries API: Request received');
    
    // Rate limiting
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';
    
    const now = Date.now();
    const clientKey = ip;
    const clientData = rateLimitMap.get(clientKey);
    
    if (clientData) {
      if (now < clientData.resetTime) {
        if (clientData.count >= RATE_LIMIT_MAX_REQUESTS) {
          return NextResponse.json(
            { error: 'Too many requests. Please try again later.' },
            { status: 429 }
          );
        }
        clientData.count++;
      } else {
        rateLimitMap.set(clientKey, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
      }
    } else {
      rateLimitMap.set(clientKey, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    }
    
    const body = await request.json();
    console.log('Inquiries API: Request body:', { ...body, message: body.message?.substring(0, 50) + '...' });
    
    // Validate required fields
    const { full_name, email, phone, location, message, category } = body;
    
    if (!full_name || !email || !phone || !location || !message) {
      return NextResponse.json(
        { error: 'All required fields must be provided' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Additional validation and sanitization
    if (full_name.length > 255) {
      return NextResponse.json(
        { error: 'Name is too long' },
        { status: 400 }
      );
    }

    if (email.length > 255) {
      return NextResponse.json(
        { error: 'Email is too long' },
        { status: 400 }
      );
    }

    if (phone.length > 50) {
      return NextResponse.json(
        { error: 'Phone number is too long' },
        { status: 400 }
      );
    }

    if (location.length > 255) {
      return NextResponse.json(
        { error: 'Location is too long' },
        { status: 400 }
      );
    }

    if (message.length > 2000) {
      return NextResponse.json(
        { error: 'Message is too long' },
        { status: 400 }
      );
    }

    // Check for duplicate submissions (same email within last hour)
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();
    const { data: recentInquiries } = await supabase
      .from('inquiries')
      .select('id')
      .eq('email', email.toLowerCase().trim())
      .gte('created_at', oneHourAgo);

    if (recentInquiries && recentInquiries.length > 0) {
      return NextResponse.json(
        { error: 'You have already submitted an inquiry recently. Please wait before submitting again.' },
        { status: 429 }
      );
    }

    // Get user agent (ip is already declared above for rate limiting)
    const userAgent = request.headers.get('user-agent') || 'unknown';

    // Prepare data for insertion
    const inquiryData: Partial<InquiryData> = {
      full_name: full_name.trim(),
      email: email.toLowerCase().trim(),
      phone: phone.trim(),
      location: location.trim(),
      message: message.trim(),
      source: 'web',
      ip: ip,
      user_agent: userAgent,
      status: 'new'
    };

    // Handle category - if multiple categories, we'll store the first one
    // or create a comma-separated string for multiple selections
    if (category && category.length > 0) {
      inquiryData.category = Array.isArray(category) ? category[0] as InquiryCategory : category;
    }

    // Insert into Supabase using admin client (bypasses RLS temporarily)
    console.log('Inquiries API: Attempting to insert data:', inquiryData);
    
    // Use admin client to bypass RLS for now (temporary solution)
    if (!supabaseAdmin) {
      console.error('Inquiries API: Admin client not available');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }
    
    const { data, error } = await supabaseAdmin
      .from('inquiries')
      .insert([inquiryData])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      console.error('Supabase error details:', {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code
      });
      return NextResponse.json(
        { error: 'Failed to submit inquiry. Please try again.' },
        { status: 500 }
      );
    }

    console.log('Inquiries API: Successfully inserted data:', data);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Inquiry submitted successfully',
        id: data.id 
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
