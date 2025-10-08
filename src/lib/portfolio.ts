import { supabase } from './supabase';

export interface PortfolioItem {
  id: number;
  title: string | null;
  subtitle: string | null;
  heading_1: string | null;
  description: string | null;
  hero_image: string | null;
  main_image: string | null;
  old_image_1: string | null;
  new_image_1: string | null;
  old_image_2: string | null;
  new_image_2: string | null;
  old_image_3: string | null;
  new_image_3: string | null;
  project_challenge: string | null;
  project_challenge_image: string | null;
  how_we_delivered: string | null;
  delivered_image: string | null;
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
  brandName: string | null;
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
        message: error?.message || 'No error message available',
        details: error?.details || 'No details available',
        hint: error?.hint || 'No hint available',
        code: error?.code || 'No error code',
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
          acc[key] = (error as unknown as Record<string, unknown>)[key];
          return acc;
        }, {} as Record<string, unknown>)
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

export async function getPortfolioItemsByIds(ids: number[]): Promise<PortfolioItem[]> {
  try {
    console.log('🔍 Fetching portfolio items by IDs:', ids);
    
    const { data, error } = await supabase
      .from('portfolio')
      .select('*')
      .in('id', ids);
    
    if (error) {
      console.error('❌ Error fetching portfolio items by IDs:', error);
      return [];
    }

    if (!data || data.length === 0) {
      console.warn('⚠️  No portfolio items found for IDs:', ids);
      return [];
    }

    // Sort the results to match the order of requested IDs
    const sortedData = ids
      .map(id => data.find(item => item.id === id))
      .filter((item): item is PortfolioItem => item !== undefined);

    console.log('✅ Successfully fetched', sortedData.length, 'portfolio items by IDs');
    return sortedData;
  } catch (error) {
    const errorInfo = {
      type: error?.constructor?.name || typeof error,
      message: error instanceof Error ? error.message : String(error),
    };
    console.error('❌ Unexpected error fetching portfolio items by IDs:', errorInfo);
    return [];
  }
}

export async function getPortfolioItemBySlug(slug: string): Promise<PortfolioItem | null> {
  try {
    // Clean the slug in case it contains URL parts
    let cleanSlug = slug;
    if (slug.includes('http://') || slug.includes('https://')) {
      const parts = slug.split('/');
      cleanSlug = parts[parts.length - 1] || parts[parts.length - 2];
    }
    if (cleanSlug.includes(' ')) {
      const parts = cleanSlug.split(' ');
      cleanSlug = parts[parts.length - 1];
    }
    
    // Try to find by matching the end of the slug field
    const { data: allData, error: fetchError } = await supabase
      .from('portfolio')
      .select('*');
    
    if (fetchError) {
      console.error('Error fetching all portfolio items:', fetchError);
      return null;
    }
    
    // Find the matching item by checking if slug field ends with cleanSlug
    const matchedItem = allData?.find(item => {
      if (!item.slug) return false;
      const itemSlug = item.slug.toLowerCase();
      const searchSlug = cleanSlug.toLowerCase();
      return itemSlug.endsWith(searchSlug) || itemSlug === searchSlug || itemSlug.includes(searchSlug);
    });
    
    if (!matchedItem) {
      console.log(`Portfolio item not found for slug: ${cleanSlug}`);
      return null;
    }
    
    console.log(`✅ Successfully fetched portfolio item: ${cleanSlug}`);
    return matchedItem;
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

// Helper function to extract clean slug from URL or mixed string
export function extractSlug(slugOrUrl: string): string {
  let cleanSlug = slugOrUrl;
  
  // Remove URL protocol and domain
  if (cleanSlug.includes('http://') || cleanSlug.includes('https://')) {
    const parts = cleanSlug.split('/');
    cleanSlug = parts[parts.length - 1] || parts[parts.length - 2];
  }
  
  // Handle space-separated strings
  if (cleanSlug.includes(' ')) {
    const parts = cleanSlug.split(' ');
    cleanSlug = parts[parts.length - 1];
  }
  
  // Remove any trailing slashes or special characters
  cleanSlug = cleanSlug.replace(/\/+$/, '').trim();
  
  return cleanSlug;
}

// Helper function to get portfolio image URL
// Supports: filename.webp, subfolder/filename.webp, full URLs
export function getPortfolioImageUrl(
  imageValue: string | null, 
  fallback: string = "https://images.unsplash.com/photo-1590490359854-dfba19688d70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHN1aXRlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU2OTE4Njk1fDA&ixlib=rb-4.1.0&q=80&w=1080"
): string {
  // Return fallback if no image value provided
  if (!imageValue) {
    return fallback;
  }
  
  // Trim whitespace from the image value
  const trimmedValue = imageValue.trim();
  
  // Return fallback if empty after trimming
  if (!trimmedValue) {
    return fallback;
  }
  
  // If already a full URL (http:// or https://), return as-is
  if (trimmedValue.startsWith('http://') || trimmedValue.startsWith('https://')) {
    return trimmedValue;
  }
  
  // If starts with /, return as-is (absolute path)
  if (trimmedValue.startsWith('/')) {
    return trimmedValue;
  }
  
  // Otherwise, it's a relative path (supports subfolders)
  // Examples:
  //   "filename.webp" -> "/Portfolio/filename.webp"
  //   "best_western/filename.webp" -> "/Portfolio/best_western/filename.webp"
  return `/Portfolio/${trimmedValue}`;
}

// Note: No fallback data - using database only
