import { Metadata } from 'next';
import { generateMetadata as generateSiteMetadata, siteConfig, generateBreadcrumbSchema, createJsonLd } from '@/lib/metadata';
import TermsAndConditionsClient from './TermsAndConditionsClient';

// ============================================
// METADATA CONFIGURATION
// ============================================
export const metadata: Metadata = generateSiteMetadata({
  title: 'Terms & Conditions | Sara Global Hospitality',
  description: 'Sara Hospitality LLC Terms & Conditions - Learn about our terms of service, privacy practices, and how we handle your information.',
  keywords: [
    'terms and conditions',
    'terms of service',
    'user agreement',
    'Sara Hospitality terms',
    'website terms',
  ],
  canonical: `${siteConfig.url}/terms`,
});

// ============================================
// TERMS & CONDITIONS PAGE (Server Component)
// ============================================
export default function TermsAndConditionsPage() {
  // Breadcrumb Schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Terms & Conditions', url: '/terms' },
  ]);

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={createJsonLd(breadcrumbSchema)}
      />
      <TermsAndConditionsClient />
    </>
  );
}

