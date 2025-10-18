// Script to clean unwanted text from blog posts in Supabase
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase credentials');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Text patterns to remove
const patternsToRemove = [
  // Pattern 1: "How to Choose Hotel Furniture\nUpdated October 17, 2025 by Sara Global Hospitality"
  /How to Choose Hotel Furniture\s*Updated October \d+, \d+ by Sara Global Hospitality/gi,
  
  // Pattern 2: "Hotel Furniture Buying Tips for Beginners\nUpdated October 17, 2025 by Sara Global Hospitality"
  /Hotel Furniture Buying Tips for Beginners\s*Updated October \d+, \d+ by Sara Global Hospitality/gi,
  
  // Pattern 3: "Published by Sara Global Hospitality\n\nWhy Choose Sara Global Hospitality for Your Hotel Furniture"
  /Published by Sara Global Hospitality\s*Why Choose Sara Global Hospitality for Your Hotel Furniture/gi,
  
  // General patterns
  /Updated October \d+, \d+ by Sara Global Hospitality/gi,
  /Published by Sara Global Hospitality/gi,
  
  // Title repetitions (if title appears at the start of content)
  /<h1>How to Choose Hotel Furniture\?<\/h1>/gi,
  /<h1>Hotel Furniture Buying Tips for Beginners<\/h1>/gi,
  /<h1>Why Choose Sara Global Hospitality for your Hotel Furniture\?<\/h1>/gi,
];

async function cleanBlogContent() {
  try {
    console.log('🔍 Fetching all blog posts...');
    
    // Fetch all blog posts
    const { data: posts, error: fetchError } = await supabase
      .from('blog_posts')
      .select('id, title, content, slug');

    if (fetchError) {
      console.error('❌ Error fetching posts:', fetchError);
      return;
    }

    if (!posts || posts.length === 0) {
      console.log('❌ No blog posts found');
      return;
    }

    console.log(`✅ Found ${posts.length} blog posts\n`);

    let updatedCount = 0;

    // Process each post
    for (const post of posts) {
      let cleanedContent = post.content;
      let hasChanges = false;

      console.log(`📝 Processing: "${post.title}"`);
      
      // Apply all removal patterns
      for (const pattern of patternsToRemove) {
        const beforeLength = cleanedContent.length;
        cleanedContent = cleanedContent.replace(pattern, '');
        
        if (cleanedContent.length !== beforeLength) {
          hasChanges = true;
          console.log(`   ✓ Removed pattern: ${pattern.source.substring(0, 50)}...`);
        }
      }

      // Update if changes were made
      if (hasChanges) {
        const { error: updateError } = await supabase
          .from('blog_posts')
          .update({ content: cleanedContent })
          .eq('id', post.id);

        if (updateError) {
          console.error(`   ❌ Error updating post "${post.title}":`, updateError);
        } else {
          console.log(`   ✅ Successfully cleaned and updated`);
          updatedCount++;
        }
      } else {
        console.log(`   ℹ️  No changes needed`);
      }
      
      console.log('');
    }

    console.log(`\n🎉 Cleanup complete! Updated ${updatedCount} of ${posts.length} posts`);
    
  } catch (error) {
    console.error('❌ Unexpected error:', error);
  }
}

// Run the cleanup
cleanBlogContent();

