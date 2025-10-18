# Quick Fix Instructions - Remove Unwanted Text

## ⚡ Fastest Method: Run SQL in Supabase

### Step 1: Open Supabase SQL Editor

1. Go to: https://supabase.com/dashboard
2. Select your project
3. Click **"SQL Editor"** in the left sidebar
4. Click **"New Query"**

### Step 2: Copy and Paste This SQL

```sql
-- Remove all unwanted text patterns
UPDATE blog_posts 
SET content = REGEXP_REPLACE(
  REGEXP_REPLACE(
    REGEXP_REPLACE(
      REGEXP_REPLACE(
        content,
        'How to Choose Hotel Furniture[\s\n]*Updated October \d+, \d+ by Sara Global Hospitality',
        '', 'gi'
      ),
      'Hotel Furniture Buying Tips for Beginners[\s\n]*Updated October \d+, \d+ by Sara Global Hospitality',
      '', 'gi'
    ),
    'Published by Sara Global Hospitality[\s\n]*Why Choose Sara Global Hospitality for Your Hotel Furniture',
    '', 'gi'
  ),
  'Updated October \d+, \d+ by Sara Global Hospitality',
  '', 'gi'
)
WHERE 
  content ~* 'Updated October.*by Sara Global Hospitality'
  OR content ~* 'Published by Sara Global Hospitality';
```

### Step 3: Click "Run"

The SQL will automatically remove all unwanted text from all blog posts!

### Step 4: Verify

```sql
-- Check if cleanup worked
SELECT title, substring(content, 1, 150) as preview
FROM blog_posts
WHERE title IN (
  'How to Choose Hotel Furniture?',
  'Hotel Furniture Buying Tips for Beginners',
  'Why Choose Sara Global Hospitality for your Hotel Furniture?'
);
```

---

## ✅ What This Removes

- ❌ "How to Choose Hotel Furniture\nUpdated October 17, 2025 by Sara Global Hospitality"
- ❌ "Hotel Furniture Buying Tips for Beginners\nUpdated October 17, 2025 by Sara Global Hospitality"
- ❌ "Published by Sara Global Hospitality\n\nWhy Choose Sara Global Hospitality for Your Hotel Furniture"
- ❌ Any other "Updated October..." or "Published by..." text

---

## 🎉 Done!

After running the SQL:
1. Refresh your website
2. The unwanted text will be gone
3. All blog posts will be clean!

---

## 📝 Alternative: Manual Edit

If you prefer manual editing:

1. Go to Supabase Dashboard
2. Click "Table Editor"
3. Select `blog_posts` table
4. Find each blog by title
5. Click to edit the row
6. Delete the unwanted text from the `content` field
7. Save

---

**Recommendation:** Use the SQL method - it's faster and removes all instances automatically!

