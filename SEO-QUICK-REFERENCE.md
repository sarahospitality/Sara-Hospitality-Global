# 🚀 SEO QUICK REFERENCE GUIDE
## Sara Global Hospitality - SEO Cheat Sheet

---

## ⚡ QUICK ACTIONS

###  **GO LIVE CHECKLIST** (Do this before production!)

```typescript
// 1. Enable Search Engine Indexing
// File: src/app/layout.tsx (line 19)
noIndex: false,  // ← Change from true to false

// 2. Update Site URL (if custom domain)
// File: src/lib/metadata.ts (line 16)
url: 'https://saraglobalhospitality.com',  // ← Your production domain

// 3. Add to .env.local
NEXT_PUBLIC_SITE_URL=https://saraglobalhospitality.com
NEXT_PUBLIC_GOOGLE_VERIFICATION=your_google_code
NEXT_PUBLIC_BING_VERIFICATION=your_bing_code
```

---

## 📝 COMMON TASKS

### **Update Homepage Keywords**
```typescript
// File: src/app/page.tsx (lines 11-22)
keywords: [
  'your',
  'new',
  'keywords',
]
```

### **Change Featured Portfolio on Home**
```typescript
// File: src/app/HomePage.tsx (lines 49-50)
const FEATURED_PORTFOLIO_ID = 2;        // ← Change ID
const GRID_PORTFOLIO_IDS = [3, 4, 8];   // ← Change IDs
```

### **Update Portfolio SEO** (Database)
```sql
UPDATE portfolio
SET 
  og_title = 'Best Western Nashville Furniture Project',
  og_description = 'Custom hotel furniture installation...',
  og_keywords = 'best western, nashville, hotel furniture',
  og_image = '/Portfolio/best_western/banner_image.webp'
WHERE id = 1;
```

---

## 🔍 SEO TESTING

### **Test Locally:**
```bash
# Start dev server
npm run dev

# Visit:
http://localhost:3000
http://localhost:3000/sitemap.xml
http://localhost:3000/robots.txt

# View page source (Ctrl+U) and check for:
# - <title> tags
# - <meta name="description">
# - <script type="application/ld+json">
```

### **Test Production:**
```bash
# Build
npm run build

# Test tools:
1. https://search.google.com/test/rich-results (Paste your URL)
2. https://validator.schema.org/ (Paste page source)
3. https://www.opengraphcheck.com/ (Test social sharing)
```

---

## 📂 KEY FILES

| Purpose | File Location |
|---------|---------------|
| Global SEO Config | `src/lib/metadata.ts` |
| Remove NoIndex | `src/app/layout.tsx` (line 19) |
| Home Page Meta | `src/app/page.tsx` |
| Portfolio IDs | `src/app/HomePage.tsx` (lines 49-50) |
| Sitemap | `src/app/sitemap.ts` (auto-generated) |
| Robots.txt | `src/app/robots.ts` (auto-generated) |

---

## 🎯 SEO BY PAGE

### **Home Page**
- **Title:** "Premium Hospitality Furniture Manufacturer | Sara Global"
- **Focus:** Manufacturer, supplier, B2B furniture
- **Schema:** Organization + Breadcrumb

### **About Page**
- **Title:** "About Sara Global | 25+ Years Excellence"
- **Focus:** Company history, expertise, trust
- **Schema:** AboutPage + Organization

### **Portfolio Listing**
- **Title:** "Our Portfolio | Hotel Furniture Projects Worldwide"
- **Focus:** Project showcase, case studies
- **Schema:** CollectionPage + Breadcrumb

### **Portfolio Details** (Dynamic)
- **Title:** Uses database `og_title` field
- **Focus:** Specific hotel project
- **Schema:** ImageGallery + FAQ + Breadcrumb

### **Contact**
- **Title:** "Contact Us | Get Quote for Hotel Furniture"
- **Focus:** Lead generation, inquiry
- **Schema:** ContactPage + Organization

### **Blog**
- **Title:** "Hospitality Furniture Blog | Industry Insights"
- **Focus:** Content marketing, thought leadership
- **Schema:** Blog + BlogPosting

---

## 🆘 TROUBLESHOOTING

### **Pages Not Indexing?**
1. Check `src/app/layout.tsx` - `noIndex` should be `false`
2. Submit sitemap to Google Search Console
3. Wait 2-4 weeks for initial indexing

### **Social Sharing Not Working?**
1. Check OG image exists: `public/og-image.jpg`
2. Image must be 1200x630px
3. Clear social media cache:
   - Facebook: https://developers.facebook.com/tools/debug/
   - Twitter: Tweet the URL to refresh

### **Structured Data Errors?**
1. Test with: https://search.google.com/test/rich-results
2. Fix validation errors shown
3. Common issues:
   - Missing required fields
   - Wrong data types
   - Invalid URLs

---

## 💡 PRO TIPS

1. **Update Portfolio OG Fields:** Always fill `og_title`, `og_description`, `og_image` for best SEO
2. **Use Real Images:** Replace placeholder images with actual project photos
3. **Monitor GSC:** Check Google Search Console weekly for indexing issues
4. **Internal Linking:** Link between related portfolio projects
5. **Fresh Content:** Add new blog posts monthly for SEO boost

---

## 📞 EMERGENCY CONTACTS

If you need to quickly:

**Disable Indexing:**
```typescript
// src/app/layout.tsx (line 19)
noIndex: true,
```

**Enable Indexing:**
```typescript
// src/app/layout.tsx (line 19)
noIndex: false,
```

**Block Specific Page:**
```typescript
// In that page's metadata
export const metadata = generateSiteMetadata({
  // ... other fields
  noIndex: true,  // ← Add this
});
```

---

**Happy Ranking! 🚀📈**

