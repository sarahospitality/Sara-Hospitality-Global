import { Metadata } from 'next';
import { generateMetadata as generateSiteMetadata, siteConfig, generateBreadcrumbSchema, createJsonLd } from '@/lib/metadata';
import PrivacyPolicyClient from './PrivacyPolicyClient';

// ============================================
// METADATA CONFIGURATION
// ============================================
export const metadata: Metadata = generateSiteMetadata({
  title: 'Privacy Policy | Sara Global Hospitality',
  description: 'Sara Hospitality LLC Privacy Policy - Learn how we collect, use, and protect your personal information when you visit our website.',
  keywords: [
    'privacy policy',
    'data protection',
    'personal information',
    'Sara Hospitality privacy',
    'website privacy',
  ],
  canonical: `${siteConfig.url}/privacy`,
});

// ============================================
// PRIVACY POLICY PAGE (Server Component)
// ============================================
export default function PrivacyPolicyPage() {
  // Breadcrumb Schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Privacy Policy', url: '/privacy' },
  ]);

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={createJsonLd(breadcrumbSchema)}
      />
      <PrivacyPolicyClient />
    </>
  );
}

