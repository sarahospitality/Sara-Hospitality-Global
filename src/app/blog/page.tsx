import { Metadata } from 'next';
import { generateMetadata as generateSiteMetadata, siteConfig, generateBreadcrumbSchema, createJsonLd } from '@/lib/metadata';
import BlogPageClient from './BlogPageClient';

// ============================================
// METADATA CONFIGURATION
// ============================================
export const metadata: Metadata = generateSiteMetadata({
  title: 'Hospitality Furniture Blog | Industry Insights & Design Trends',
  description: 'Expert insights on hotel furniture design, hospitality trends, and industry best practices. Learn from Sara Global Hospitality\'s 25+ years of experience in manufacturing premium furniture for hotels and resorts worldwide.',
  keywords: [
    'hospitality furniture blog',
    'hotel design trends',
    'hotel furniture tips',
    'hospitality industry insights',
    'furniture design articles',
    'hotel interior design blog',
    'commercial furniture guides',
  ],
  canonical: `${siteConfig.url}/blog`,
});

// ============================================
// BLOG PAGE (Server Component)
// ============================================
export default function BlogPage() {
  // Breadcrumb Schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
  ]);

  // Blog Schema
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Sara Global Hospitality Blog',
    description: metadata.description,
    url: `${siteConfig.url}/blog`,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.png`,
      },
    },
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={createJsonLd(breadcrumbSchema)}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={createJsonLd(blogSchema)}
      />
      <BlogPageClient />
    </>
  );
}
