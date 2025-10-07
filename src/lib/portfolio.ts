import { supabase } from './supabase';

export interface PortfolioItem {
  id: number;
  title: string | null;
  subtitle: string | null;
  heading_1: string | null;
  description: string | null;
  old_image_1: string | null;
  new_image_1: string | null;
  old_image_2: string | null;
  new_image_2: string | null;
  old_image_3: string | null;
  new_image_3: string | null;
  project_challenge: string | null;
  how_we_delivered: string | null;
  vision: string | null;
  comfort_convenience: string | null;
  faq_1: string | null;
  answer_1: string | null;
  faq_2: string | null;
  answer_2: string | null;
  faq_3: string | null;
  answer_3: string | null;
  faq_4: string | null;
  answer_4: string | null;
  faq_5: string | null;
  answer_5: string | null;
  faq_6: string | null;
  answer_6: string | null;
  faq_7: string | null;
  answer_7: string | null;
  faq_8: string | null;
  answer_8: string | null;
  faq_9: string | null;
  answer_9: string | null;
  faq_10: string | null;
  answer_10: string | null;
  og_title: string | null;
  og_description: string | null;
  og_image: string | null;
  og_url: string | null;
  og_keywords: string | null;
  slug: string | null;
  tags: string | null;
  location: string | null;
  main_image: string | null;
}

export async function getPortfolioItems(): Promise<PortfolioItem[]> {
  try {
    // Log Supabase connection status
    console.log('🔍 Attempting to fetch portfolio items from database...');
    console.log('🔍 Supabase client initialized:', !!supabase);
    
    const { data, error } = await supabase
      .from('portfolio')
      .select('*')
      .order('id', { ascending: false });
    
    console.log('🔍 Query completed - Has error:', !!error, '| Has data:', !!data, '| Data length:', data?.length || 0);

    if (error) {
      // Log the raw error first to see its actual structure
      console.error('❌ Raw Supabase Error Object:', error);
      console.error('❌ Error Object Keys:', Object.keys(error || {}));
      console.error('❌ Error Object Values:', Object.values(error || {}));
      
      // Safely extract error information with defensive checks
      const errorInfo = {
        message: error?.message || error?.msg || 'No error message available',
        details: error?.details || error?.detail || 'No details available',
        hint: error?.hint || 'No hint available',
        code: error?.code || error?.status || 'No error code',
        // Try multiple serialization methods
        rawError: (() => {
          try {
            return JSON.stringify(error, null, 2);
          } catch {
            try {
              return JSON.stringify(error, Object.getOwnPropertyNames(error), 2);
            } catch {
              return String(error);
            }
          }
        })(),
        // Get all enumerable properties
        allProperties: Object.getOwnPropertyNames(error || {}).reduce((acc, key) => {
          acc[key] = (error as any)[key];
          return acc;
        }, {} as Record<string, any>)
      };
      
      console.error('❌ Error fetching portfolio items from database:', errorInfo);
      console.warn('⚠️  Returning empty portfolio list due to database error');
      
      return [];
    }

    // If no data from database, return empty array
    if (!data || data.length === 0) {
      console.info('ℹ️  No portfolio items found in database');
      return [];
    }

    console.log('✅ Successfully fetched', data.length, 'portfolio items from database');
    return data;
  } catch (error) {
    // Enhanced error logging for unexpected errors with safe serialization
    const errorInfo = {
      type: error?.constructor?.name || typeof error,
      name: error instanceof Error ? error.name : 'Unknown',
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
      // Attempt to safely stringify the entire error
      rawError: (() => {
        try {
          return JSON.stringify(error, Object.getOwnPropertyNames(error), 2);
        } catch {
          return String(error);
        }
      })()
    };
    
    console.error('❌ Unexpected database error:', errorInfo);
    console.warn('⚠️  Returning empty portfolio list due to unexpected error');
    
    return [];
  }
}

export async function getPortfolioItemBySlug(slug: string): Promise<PortfolioItem | null> {
  try {
    const { data, error } = await supabase
      .from('portfolio')
      .select('*')
      .eq('slug', slug)
      .single();

    if (error) {
      // Safely extract error information with defensive checks
      const errorInfo = {
        message: error?.message || 'No error message available',
        details: error?.details || 'No details available',
        hint: error?.hint || 'No hint available',
        code: error?.code || 'No error code',
        slug,
        rawError: JSON.stringify(error, null, 2)
      };
      
      console.error(`❌ Error fetching portfolio item "${slug}" from database:`, errorInfo);
      console.warn(`⚠️  Portfolio item "${slug}" not found due to error`);
      
      return null;
    }

    // If no data found, return null
    if (!data) {
      console.info(`ℹ️  Portfolio item "${slug}" not found in database`);
      return null;
    }

    console.log(`✅ Successfully fetched portfolio item: ${slug}`);
    return data;
  } catch (error) {
    // Enhanced error logging for unexpected errors with safe serialization
    const errorInfo = {
      type: error?.constructor?.name || typeof error,
      name: error instanceof Error ? error.name : 'Unknown',
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
      slug,
      rawError: (() => {
        try {
          return JSON.stringify(error, Object.getOwnPropertyNames(error), 2);
        } catch {
          return String(error);
        }
      })()
    };
    
    console.error(`❌ Unexpected database error fetching portfolio item "${slug}":`, errorInfo);
    console.warn(`⚠️  Returning null due to unexpected error`);
    
    return null;
  }
}

// Note: No fallback data - using database only
