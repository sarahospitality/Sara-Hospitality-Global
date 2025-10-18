-- ===================================================================
-- SQL Script to Update Blog Post Images
-- Run this in Supabase SQL Editor
-- ===================================================================

-- Update Blog 1: "Why Choose Sara Global Hospitality for your Hotel Furniture?"
-- Change image from hotel-furniture.webp to how-to-choose-hotel-furniture.webp
UPDATE blog_posts
SET 
  banner_image_url = '/blog/outdoor furniture for hotels/how-to-choose-hotel-furniture.webp',
  og_image = '/blog/outdoor furniture for hotels/how-to-choose-hotel-furniture.webp'
WHERE 
  title ILIKE '%Why Choose Sara Global Hospitality%'
  OR slug ILIKE '%why-choose-sara-global%';

-- Update Blog 2: "Hotel Furniture Buying Tips for Beginners"
-- Image stays as furniture-buying-tips.webp (already correct)
UPDATE blog_posts
SET 
  banner_image_url = '/blog/outdoor furniture for hotels/furniture-buying-tips.webp',
  og_image = '/blog/outdoor furniture for hotels/furniture-buying-tips.webp'
WHERE 
  title ILIKE '%Hotel Furniture Buying Tips%'
  OR title ILIKE '%Buying Tips for Beginners%'
  OR slug ILIKE '%buying-tips%';

-- Update Blog 3: "How to Choose Hotel Furniture?"
-- Change image from how-to-choose-hotel-furniture.webp to hotel-furniture.webp
UPDATE blog_posts
SET 
  banner_image_url = '/blog/outdoor furniture for hotels/hotel-furniture.webp',
  og_image = '/blog/outdoor furniture for hotels/hotel-furniture.webp'
WHERE 
  title ILIKE '%How to Choose Hotel Furniture%'
  OR slug ILIKE '%how-to-choose-hotel-furniture%';

-- ===================================================================
-- Verification Query
-- ===================================================================
SELECT 
  title,
  banner_image_url,
  og_image
FROM blog_posts
WHERE 
  title ILIKE '%Why Choose Sara Global%'
  OR title ILIKE '%Buying Tips%'
  OR title ILIKE '%How to Choose Hotel Furniture%'
ORDER BY title;

