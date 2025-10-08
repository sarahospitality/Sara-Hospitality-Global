import { Metadata } from 'next';
import { generateMetadata as generateSiteMetadata, siteConfig, generateBreadcrumbSchema, createJsonLd } from '@/lib/metadata';
import PortfolioPageClient from './PortfolioPageClient';

// ============================================
// METADATA CONFIGURATION
// ============================================
export const metadata: Metadata = generateSiteMetadata({
  title: 'Our Portfolio | Hotel Furniture Projects Worldwide',
  description: `Explore Sara Global Hospitality's portfolio of ${siteConfig.projectsCompleted} completed hotel furniture projects across ${siteConfig.countriesServed} countries. View our luxury hotel furniture installations, custom designs for resorts, boutique hotels, and senior living communities.`,
  keywords: [
    'hotel furniture portfolio',
    'hospitality furniture projects',
    'hotel furniture case studies',
    'luxury hotel furniture examples',
    'custom furniture installations',
    'resort furniture portfolio',
    'hotel renovation projects',
    'hospitality furniture gallery',
  ],
  canonical: `${siteConfig.url}/portfolio`,
});

// ============================================
// PORTFOLIO PAGE (Server Component)
// ============================================
export default function PortfolioPage() {
  // Breadcrumb Schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Portfolio', url: '/portfolio' },
  ]);

  // Collection Page Schema
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Hotel Furniture Portfolio',
    description: metadata.description,
    url: `${siteConfig.url}/portfolio`,
    isPartOf: {
      '@type': 'WebSite',
      name: siteConfig.name,
      url: siteConfig.url,
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
        dangerouslySetInnerHTML={createJsonLd(collectionSchema)}
      />
      <PortfolioPageClient />
    </>
  );
}
