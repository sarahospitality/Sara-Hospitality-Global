# ✅ Corrected Blog Image Mapping

## Correct Image Assignment

| Blog Post Title | Image File | Full Path |
|----------------|------------|-----------|
| **Why Choose Sara Global Hospitality for your Hotel Furniture?** | `how-to-choose-hotel-furniture.webp` | `/blog/outdoor furniture for hotels/how-to-choose-hotel-furniture.webp` |
| **Hotel Furniture Buying Tips for Beginners** | `furniture-buying-tips.webp` | `/blog/outdoor furniture for hotels/furniture-buying-tips.webp` |
| **How to Choose Hotel Furniture?** | `hotel-furniture.webp` | `/blog/outdoor furniture for hotels/hotel-furniture.webp` |

---

## 🚀 How to Update Images in Database

### Option 1: Run SQL (Fastest)

1. Go to **Supabase Dashboard** → **SQL Editor**
2. Copy and paste this SQL:

```sql
-- Update Blog 1: Why Choose Sara Global
UPDATE blog_posts
SET 
  banner_image_url = '/blog/outdoor furniture for hotels/how-to-choose-hotel-furniture.webp',
  og_image = '/blog/outdoor furniture for hotels/how-to-choose-hotel-furniture.webp'
WHERE title ILIKE '%Why Choose Sara Global Hospitality%';

-- Update Blog 2: Buying Tips (already correct, but ensuring)
UPDATE blog_posts
SET 
  banner_image_url = '/blog/outdoor furniture for hotels/furniture-buying-tips.webp',
  og_image = '/blog/outdoor furniture for hotels/furniture-buying-tips.webp'
WHERE title ILIKE '%Hotel Furniture Buying Tips%';

-- Update Blog 3: How to Choose
UPDATE blog_posts
SET 
  banner_image_url = '/blog/outdoor furniture for hotels/hotel-furniture.webp',
  og_image = '/blog/outdoor furniture for hotels/hotel-furniture.webp'
WHERE title ILIKE '%How to Choose Hotel Furniture%';
```

3. Click **"Run"**
4. Verify with:

```sql
SELECT title, banner_image_url, og_image
FROM blog_posts
WHERE 
  title ILIKE '%Why Choose%'
  OR title ILIKE '%Buying Tips%'
  OR title ILIKE '%How to Choose Hotel Furniture%';
```

---

### Option 2: Manual Update in Supabase

1. Go to **Supabase Dashboard** → **Table Editor**
2. Select `blog_posts` table
3. Find each blog post by title
4. Click to edit the row
5. Update `banner_image_url` and `og_image` fields with correct paths
6. Save

---

## 📁 All Images in Public Folder

Verify these files exist in `/public/blog/outdoor furniture for hotels/`:

- ✅ `how-to-choose-hotel-furniture.webp`
- ✅ `furniture-buying-tips.webp`
- ✅ `hotel-furniture.webp`
- ✅ `outdoor-furniture.webp`
- ✅ `outdoor-inner.webp`

---

## 🎯 Summary

**Changed:**
- "Why Choose Sara Global" → NOW uses `how-to-choose-hotel-furniture.webp` ✅
- "How to Choose Hotel Furniture" → NOW uses `hotel-furniture.webp` ✅

**Unchanged:**
- "Buying Tips for Beginners" → STAYS with `furniture-buying-tips.webp` ✅

After running the SQL, each blog will show its unique, appropriate image!

