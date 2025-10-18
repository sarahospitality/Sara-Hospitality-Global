-- ===================================================================
-- SQL Script to Remove Unwanted Text from Blog Posts
-- Run this in Supabase SQL Editor
-- ===================================================================

-- STEP 1: Preview what will be changed (SAFE - just shows data)
-- ===================================================================
SELECT 
  id,
  title,
  substring(content, 1, 200) as content_preview
FROM blog_posts
WHERE 
  content LIKE '%Updated October%by Sara Global Hospitality%'
  OR content LIKE '%Published by Sara Global Hospitality%';

-- ===================================================================
-- STEP 2: Remove unwanted text patterns (RUN THIS TO FIX)
-- ===================================================================

-- Remove: "How to Choose Hotel Furniture\nUpdated October 17, 2025 by Sara Global Hospitality"
UPDATE blog_posts 
SET content = REGEXP_REPLACE(
  content, 
  'How to Choose Hotel Furniture[\s\n]*Updated October \d+, \d+ by Sara Global Hospitality',
  '',
  'gi'
)
WHERE content ~* 'How to Choose Hotel Furniture[\s\n]*Updated October';

-- Remove: "Hotel Furniture Buying Tips for Beginners\nUpdated October 17, 2025 by Sara Global Hospitality"
UPDATE blog_posts 
SET content = REGEXP_REPLACE(
  content,
  'Hotel Furniture Buying Tips for Beginners[\s\n]*Updated October \d+, \d+ by Sara Global Hospitality',
  '',
  'gi'
)
WHERE content ~* 'Hotel Furniture Buying Tips for Beginners[\s\n]*Updated October';

-- Remove: "Published by Sara Global Hospitality\n\nWhy Choose Sara Global Hospitality for Your Hotel Furniture"
UPDATE blog_posts 
SET content = REGEXP_REPLACE(
  content,
  'Published by Sara Global Hospitality[\s\n]*Why Choose Sara Global Hospitality for Your Hotel Furniture',
  '',
  'gi'
)
WHERE content ~* 'Published by Sara Global Hospitality[\s\n]*Why Choose';

-- General cleanup: Remove any remaining "Updated October... by Sara Global Hospitality"
UPDATE blog_posts 
SET content = REGEXP_REPLACE(
  content,
  'Updated October \d+, \d+ by Sara Global Hospitality',
  '',
  'gi'
)
WHERE content ~* 'Updated October.*by Sara Global Hospitality';

-- General cleanup: Remove any remaining "Published by Sara Global Hospitality"
UPDATE blog_posts 
SET content = REGEXP_REPLACE(
  content,
  'Published by Sara Global Hospitality',
  '',
  'gi'
)
WHERE content ~* 'Published by Sara Global Hospitality';

-- ===================================================================
-- STEP 3: Verify the cleanup worked
-- ===================================================================
SELECT 
  id,
  title,
  CASE 
    WHEN content LIKE '%Updated October%by Sara Global%' THEN '❌ Still has unwanted text'
    WHEN content LIKE '%Published by Sara Global%' THEN '❌ Still has unwanted text'
    ELSE '✅ Clean'
  END as status
FROM blog_posts;

