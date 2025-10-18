# Manual Database Cleanup Guide

## Text to Remove from Blog Posts

You need to **edit the database directly** in Supabase to remove this unwanted text.

---

## 🎯 Text to Remove

### Blog 1: "How to Choose Hotel Furniture?"
**Remove this text:**
```
How to Choose Hotel Furniture
Updated October 17, 2025 by Sara Global Hospitality
```

### Blog 2: "Hotel Furniture Buying Tips for Beginners"
**Remove this text:**
```
Hotel Furniture Buying Tips for Beginners
Updated October 17, 2025 by Sara Global Hospitality
```

### Blog 3: "Why Choose Sara Global Hospitality for your Hotel Furniture?"
**Remove this text:**
```
Published by Sara Global Hospitality

Why Choose Sara Global Hospitality for Your Hotel Furniture
```

---

## 📋 Manual Steps (Supabase Dashboard)

### Option 1: Use Supabase Dashboard

1. **Go to Supabase Dashboard**
   - Visit: https://supabase.com/dashboard
   - Select your project

2. **Open Table Editor**
   - Click on "Table Editor" in left sidebar
   - Select `blog_posts` table

3. **Find Each Blog Post**
   - Search for the blog by title
   - Click to edit the row

4. **Edit Content Field**
   - Find the `content` field
   - Look for the unwanted text at the beginning
   - Delete ONLY the unwanted text
   - Save the changes

5. **Repeat for All 3 Blogs**

---

## 🚀 Automated Solution (Run Script)

### If you want to automate this:

1. **Install dependencies** (if not already installed):
   ```bash
   npm install
   ```

2. **Run the cleanup script**:
   ```bash
   node scripts/clean-blog-content.js
   ```

This script will:
- ✅ Connect to your Supabase database
- ✅ Find all blog posts
- ✅ Remove the unwanted text patterns
- ✅ Update the database automatically

---

## ⚠️ Important Notes

1. **Backup First**: Before running the script, export your blog_posts table as backup
2. **Test Mode**: The script shows what it will do before making changes
3. **Safe**: Only removes the specific text patterns, nothing else

---

## 🔍 SQL Alternative (Advanced)

If you prefer SQL, run this in Supabase SQL Editor:

```sql
-- Blog 1: How to Choose Hotel Furniture?
UPDATE blog_posts 
SET content = REPLACE(content, 'How to Choose Hotel Furniture
Updated October 17, 2025 by Sara Global Hospitality', '')
WHERE title ILIKE '%How to Choose Hotel Furniture%';

-- Blog 2: Hotel Furniture Buying Tips for Beginners
UPDATE blog_posts 
SET content = REPLACE(content, 'Hotel Furniture Buying Tips for Beginners
Updated October 17, 2025 by Sara Global Hospitality', '')
WHERE title ILIKE '%Hotel Furniture Buying Tips%';

-- Blog 3: Why Choose Sara Global Hospitality
UPDATE blog_posts 
SET content = REPLACE(content, 'Published by Sara Global Hospitality

Why Choose Sara Global Hospitality for Your Hotel Furniture', '')
WHERE title ILIKE '%Why Choose Sara Global%';

-- General cleanup for any remaining instances
UPDATE blog_posts 
SET content = REPLACE(content, 'Updated October 17, 2025 by Sara Global Hospitality', '');

UPDATE blog_posts 
SET content = REPLACE(content, 'Published by Sara Global Hospitality', '');
```

---

## ✅ After Cleanup

Once you've removed the text, refresh your website and the unwanted text will be gone!

---

## 📝 Summary

**The HTML template files are clean** - they don't contain this text.

**The text is in your database** - in the `content` field of the `blog_posts` table.

**You need to edit the database** to remove it using one of the methods above.

