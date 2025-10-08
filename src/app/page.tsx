import { Metadata } from 'next';
import { generateMetadata as generateSiteMetadata, siteConfig, generateBreadcrumbSchema, createJsonLd } from '@/lib/metadata';
import HomePage from './HomePage';

// ============================================
// METADATA CONFIGURATION
// ============================================
export const metadata: Metadata = generateSiteMetadata({
  title: 'Premium Hospitality Furniture Manufacturer',
  description: `Leading B2B furniture manufacturer for hotels, resorts & senior living communities. ${siteConfig.yearsInBusiness} years of expertise, ${siteConfig.projectsCompleted} projects completed across ${siteConfig.countriesServed} countries. Custom hospitality furniture solutions with premium quality and global delivery.`,
  keywords: [
    'hospitality furniture manufacturer',
    'hotel furniture supplier',
    'custom hotel furniture',
    'resort furniture',
    'senior living furniture',
    'commercial furniture B2B',
    'luxury hotel furniture',
    'hospitality casegoods',
    'hotel bedroom furniture packages',
    'lobby furniture manufacturer',
  ],
  canonical: siteConfig.url,
});

// ============================================
// HOME PAGE (Server Component)
// ============================================
export default function Page() {
  // Breadcrumb Schema for Home Page
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
  ]);

  return (
    <>
      {/* JSON-LD Structured Data - Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={createJsonLd(breadcrumbSchema)}
      />
      <HomePage />
    </>
  );
}
