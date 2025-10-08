import { Metadata } from 'next';
import { generateMetadata as generateSiteMetadata, siteConfig, generateBreadcrumbSchema, createJsonLd } from '@/lib/metadata';
import ContactPageClient from './ContactPageClient';

// ============================================
// METADATA CONFIGURATION
// ============================================
export const metadata: Metadata = generateSiteMetadata({
  title: 'Contact Us | Get Quote for Hotel Furniture',
  description: `Contact Sara Global Hospitality for premium hotel furniture solutions. Call ${siteConfig.phone} or email ${siteConfig.email}. Get free consultation, custom quotes, and expert advice for your hospitality furniture project. 24-hour response time guaranteed.`,
  keywords: [
    'contact hotel furniture supplier',
    'request furniture quote',
    'hospitality furniture consultation',
    'hotel furniture inquiry',
    'custom furniture request',
    'B2B furniture contact',
    'hotel furniture quote',
  ],
  canonical: `${siteConfig.url}/contact`,
});

// ============================================
// CONTACT PAGE (Server Component)
// ============================================
export default function ContactPage() {
  // Breadcrumb Schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Contact Us', url: '/contact' },
  ]);

  // ContactPage Schema
  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Sara Global Hospitality',
    description: metadata.description,
    url: `${siteConfig.url}/contact`,
    mainEntity: {
      '@type': 'Organization',
      name: siteConfig.name,
      telephone: siteConfig.phone,
      email: siteConfig.email,
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
        dangerouslySetInnerHTML={createJsonLd(contactPageSchema)}
      />
      <ContactPageClient />
    </>
  );
}
