import { supabase } from './supabase';

// Blog post data structure
export interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  author: {
    name: string;
    title: string;
    avatar: string;
    bio: string;
  };
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  views: number;
  likes: number;
  shares: number;
}

// Database blog post structure
export interface BlogPostDB {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  author: string | null;
  reading_time: string | null;
  created_at: string;
  category: string;
  tags: string | null;
  banner_image_url: string;
  content: string;
  updated_at: string;
  og_title: string | null;
  og_description: string | null;
  og_image: string | null;
  og_url: string | null;
  keywords: string | null;
  faqs: Array<{ question: string; answer: string }> | string | null;
  image_url_1: string | null;
}

// Blog post for listing page
export interface BlogPostListing {
  id: number;
  slug: string;
  title: string;
  description: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  featured: boolean;
  tags: string[];
}

// Mock blog post data - Replace with database/CMS when available
export const blogPosts: Record<string, BlogPost> = {
  "modern-hotel-furniture-trends-2024": {
    id: "modern-hotel-furniture-trends-2024",
    title: "Modern Hotel Furniture Trends for 2024: Sustainability Meets Luxury",
    subtitle: "Sustainable Luxury: The Future of Hotel Furniture Design",
    author: {
      name: "Sarah Mitchell",
      title: "Senior Interior Designer",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGJ1c2luZXNzJTIwaGVhZHNob3R8ZW58MXx8fHwxNzU2OTk4MzIxfDA&ixlib=rb-4.1.0&q=80&w=400",
      bio: "Sarah has over 12 years of experience in hospitality interior design, specializing in sustainable luxury furniture solutions."
    },
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "Design Trends",
    tags: ["Sustainability", "Modern Design", "Hotel Decor", "2024 Trends", "Eco-Friendly"],
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3RlbCUyMGZ1cm5pdHVyZXxlbnwxfHx8fDE3NTY5OTgzMjF8MA&ixlib=rb-4.1.0&q=80&w=1200",
    views: 2340,
    likes: 127,
    shares: 45,
  },
  "choosing-right-furniture-hotel-rooms": {
    id: "choosing-right-furniture-hotel-rooms",
    title: "How to Choose the Right Furniture for Different Hotel Room Types",
    subtitle: "A comprehensive guide to selecting appropriate furniture for various hotel accommodations",
    author: {
      name: "Michael Chen",
      title: "Hotel Design Consultant",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBidXNpbmVzcyUyMGhlYWRzaG90fGVufDF8fHwxNzU2OTk4MzIxfDA&ixlib=rb-4.1.0&q=80&w=400",
      bio: "Michael is a seasoned hotel design consultant with 15 years of experience in hospitality interior design and furniture selection."
    },
    date: "December 12, 2024",
    readTime: "6 min read",
    category: "Buying Guide",
    tags: ["Hotel Rooms", "Furniture Selection", "Interior Design"],
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTY5OTgzMjF8MA&ixlib=rb-4.1.0&q=80&w=1200",
    views: 1890,
    likes: 95,
    shares: 32,
  },
  "custom-furniture-guest-experience": {
    id: "custom-furniture-guest-experience",
    title: "The Impact of Custom Furniture on Guest Experience",
    subtitle: "Learn how personalized furniture solutions can enhance guest satisfaction",
    author: {
      name: "Emma Rodriguez",
      title: "Guest Experience Specialist",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGJ1c2luZXNzJTIwaGVhZHNob3R8ZW58MXx8fHwxNzU2OTk4MzIxfDA&ixlib=rb-4.1.0&q=80&w=400",
      bio: "Emma specializes in guest experience optimization and has helped over 200 hotels improve their guest satisfaction scores through strategic furniture choices."
    },
    date: "December 10, 2024",
    readTime: "5 min read",
    category: "Guest Experience",
    tags: ["Custom Furniture", "Guest Satisfaction", "Hospitality"],
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTY5OTgzMjF8MA&ixlib=rb-4.1.0&q=80&w=1200",
    views: 1456,
    likes: 78,
    shares: 28,
  }
};

export function getBlogPost(slug: string): BlogPost | null {
  return blogPosts[slug] || null;
}

export function getAllBlogPosts(): BlogPost[] {
  return Object.values(blogPosts);
}

// Format date helper
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  return date.toLocaleDateString('en-US', options);
}

// Mock blog posts for fallback
function getMockBlogPosts(): BlogPostListing[] {
  return [
    {
      id: 1,
      slug: "modern-hotel-furniture-trends-2024",
      title: "Modern Hotel Furniture Trends for 2024: Sustainability Meets Luxury",
      description: "Discover the latest trends in hotel furniture design that balance environmental responsibility with guest comfort and aesthetic appeal.",
      author: "Sarah Mitchell",
      date: "December 15, 2024",
      readTime: "8 min read",
      category: "Design Trends",
      image: "/blog/outdoor furniture for hotels/outdoor-furniture.webp",
      featured: false,
      tags: ["Sustainability", "Modern Design", "Hotel Decor"]
    },
    {
      id: 2,
      slug: "how-to-choose-right-hotel-casegoods-manufacturers-partner",
      title: "How to Choose the Right Hotel Casegoods Manufacturers Partner",
      description: "A comprehensive guide to selecting the right hotel casegoods manufacturers partner for your hospitality business needs.",
      author: "Michael Chen",
      date: "December 12, 2024",
      readTime: "6 min read",
      category: "Manufacturing",
      image: "/blog/hotel casegoods manufacturers partner/hotel casegoods.webp",
      featured: false,
      tags: ["Hotel Casegoods", "Manufacturing", "Partnership"]
    },
    {
      id: 3,
      slug: "custom-furniture-guest-experience",
      title: "The Impact of Custom Furniture on Guest Experience",
      description: "Learn how personalized furniture solutions can enhance guest satisfaction and create memorable hospitality experiences.",
      author: "Emma Rodriguez",
      date: "December 10, 2024",
      readTime: "5 min read",
      category: "Guest Experience",
      image: "/blog/outdoor furniture for hotels/outdoor-furniture.webp",
      featured: false,
      tags: ["Custom Furniture", "Guest Satisfaction", "Hospitality"]
    },
    {
      id: 4,
      slug: "small-hotel-spaces-smart-solutions",
      title: "Maximizing Small Hotel Spaces with Smart Furniture Solutions",
      description: "Innovative furniture ideas and space-saving techniques to make the most of compact hotel rooms without compromising comfort.",
      author: "David Thompson",
      date: "December 8, 2024",
      readTime: "7 min read",
      category: "Space Planning",
      image: "/blog/outdoor furniture for hotels/outdoor-furniture.webp",
      featured: false,
      tags: ["Small Spaces", "Smart Design", "Efficiency"]
    }
  ];
}

// Fetch all blog posts from database
export async function getAllBlogPostsFromDB(): Promise<BlogPostListing[]> {
  // Check if Supabase is properly configured
  if (!supabase) {
    return getMockBlogPosts();
  }
  
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching blog posts:', error);
      return getMockBlogPosts();
    }

    if (!data || data.length === 0) {
      return getMockBlogPosts();
    }


    // Map database fields to listing format
    const posts: BlogPostListing[] = data.map((post: BlogPostDB, index: number) => {
      console.log(`📝 Processing post ${index + 1}:`, {
        title: post.title,
        slug: post.slug,
        banner_image_url: post.banner_image_url,
        excerpt: post.excerpt,
        author: post.author,
        category: post.category,
        tags: post.tags
      });
      
      // Extract slug from URL if it's a full URL, and clean up leading slash
      let processedSlug = post.slug;
      if (post.slug && post.slug.includes('www.sara-hospitality-global.com/')) {
        processedSlug = post.slug.split('www.sara-hospitality-global.com/')[1];
      }
      
      // Remove leading slash if present (for URL routing)
      if (processedSlug && processedSlug.startsWith('/')) {
        processedSlug = processedSlug.substring(1);
      }
      
      // Determine image based on post title
      let postImage = post.banner_image_url;
      if (!postImage) {
        if (post.title && post.title.toLowerCase().includes('hotel casegoods')) {
          postImage = '/blog/hotel casegoods manufacturers partner/hotel casegoods.webp';
        } else {
          postImage = '/blog/outdoor furniture for hotels/outdoor-furniture.webp';
        }
      }

      return {
        id: index + 1,
        slug: processedSlug,
        title: post.title,
        description: post.excerpt || 'No description available',
        author: post.author || 'Sara Global Team',
        date: formatDate(post.created_at),
        readTime: post.reading_time || '5 min read',
        category: post.category || 'General',
        image: postImage,
        featured: index === 0, // First post is featured
        tags: post.tags ? post.tags.split(',').map(tag => tag.trim()) : []
      };
    });

    console.log('✅ Final processed posts:', posts);

    return posts;
  } catch (error) {
    console.error('Unexpected error fetching blog posts:', error);
    return getMockBlogPosts();
  }
}

// Full blog post structure from database
export interface BlogPostDetail {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string | null;
  author: string | null;
  reading_time: string | null;
  created_at: string;
  updated_at: string;
  category: string;
  tags: string[];
  image_url: string;
  og_title: string | null;
  og_description: string | null;
  og_image: string | null;
  og_url: string | null;
  keywords: string | null;
  faqs: Array<{ question: string; answer: string }> | null;
}

// Fetch single blog post from database by slug
export async function getBlogPostFromDB(slug: string): Promise<BlogPostDetail | null> {
  console.log('🔍 Fetching blog post with slug:', slug);
  
  // Check if Supabase is properly configured
  if (!supabase) {
    console.error('❌ Supabase client not available');
    return null;
  }
  
  try {
    // Clean the slug - remove leading slash if present
    const cleanSlug = slug.startsWith('/') ? slug.substring(1) : slug;
    
    // First try exact slug match (with leading slash)
    let { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', `/${cleanSlug}`)
      .single();

    // If not found, try without leading slash
    if (error && error.code === 'PGRST116') {
      console.log('🔄 Slug not found with leading slash, trying without...');
      
      const altResult = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', cleanSlug)
        .single();
      
      if (altResult.data) {
        data = altResult.data;
        error = null;
        console.log('✅ Found with clean slug:', cleanSlug);
      }
    }

    // If still not found, try some common variations
    if (error && error.code === 'PGRST116') {
      console.log('🔄 Slug not found, trying variations...');
      
      // Try with 'manufacturers' instead of 'manufacturer'
      if (cleanSlug.includes('manufacturer-partner') && !cleanSlug.includes('manufacturers')) {
        const altSlug = cleanSlug.replace('manufacturer-partner', 'manufacturers-partner');
        console.log('🔄 Trying alternative slug:', altSlug);
        
        // Try both with and without leading slash
        const variations = [`/${altSlug}`, altSlug];
        
        for (const variation of variations) {
          const altResult = await supabase
            .from('blog_posts')
            .select('*')
            .eq('slug', variation)
            .single();
          
          if (altResult.data) {
            data = altResult.data;
            error = null;
            console.log('✅ Found with alternative slug:', variation);
            break;
          }
        }
      }
    }

    if (error) {
      console.error('❌ Error fetching blog post:', {
        slug,
        error: error.message,
        code: error.code,
        details: error.details
      });
      return null;
    }

    if (!data) {
      console.log('❌ No blog post found for slug:', slug);
      return null;
    }

    console.log('✅ Blog post fetched successfully:', data.title);

    // Process tags - handle both string and array formats
    let processedTags: string[] = [];
    if (data.tags) {
      if (typeof data.tags === 'string') {
        processedTags = data.tags.split(',').map((tag: string) => tag.trim());
      } else if (Array.isArray(data.tags)) {
        processedTags = data.tags;
      }
    }

    // Process FAQs - handle JSONB format
    let processedFaqs: Array<{ question: string; answer: string }> | null = null;
    if (data.faqs) {
      try {
        if (typeof data.faqs === 'string') {
          processedFaqs = JSON.parse(data.faqs);
        } else if (Array.isArray(data.faqs)) {
          processedFaqs = data.faqs;
        }
      } catch (e) {
        console.error('Error parsing FAQs:', e);
      }
    }

    // Determine image using same logic as listing page
    let postImage = data.banner_image_url || data.image_url;
    if (!postImage) {
      if (data.title && data.title.toLowerCase().includes('hotel casegoods')) {
        postImage = '/blog/hotel casegoods manufacturers partner/hotel casegoods.webp';
      } else {
        postImage = '/blog/outdoor furniture for hotels/outdoor-furniture.webp';
      }
    }

    const blogPost: BlogPostDetail = {
      id: data.id,
      title: data.title,
      slug: data.slug,
      content: data.content || '',
      excerpt: data.excerpt,
      author: data.author,
      reading_time: data.reading_time,
      created_at: data.created_at,
      updated_at: data.updated_at,
      category: data.category,
      tags: processedTags,
      image_url: postImage,
      og_title: data.og_title,
      og_description: data.og_description,
      og_image: data.og_image,
      og_url: data.og_url,
      keywords: data.keywords,
      faqs: processedFaqs
    };

    return blogPost;
  } catch (error) {
    console.error('❌ Unexpected error fetching blog post:', error);
    return null;
  }
}

// Debug function to list all available slugs in database
export async function getAllBlogSlugs(): Promise<string[]> {
  if (!supabase) {
    console.error('❌ Supabase client not available');
    return [];
  }
  
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('slug, title')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('❌ Error fetching blog slugs:', error);
      return [];
    }

    if (!data || data.length === 0) {
      console.log('❌ No blog posts found in database');
      return [];
    }

    console.log('📋 Available blog posts in database:');
    data.forEach((post, index) => {
      console.log(`  ${index + 1}. Slug: "${post.slug}" | Title: "${post.title}"`);
    });

    return data.map(post => post.slug);
  } catch (error) {
    console.error('❌ Unexpected error fetching blog slugs:', error);
    return [];
  }
}

