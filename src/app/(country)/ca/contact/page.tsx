import { Metadata } from 'next';
import { generateMetadata as generateSiteMetadata, siteConfig, generateBreadcrumbSchema, createJsonLd } from '@/lib/metadata';
import ContactPageClient from '@/app/contact/ContactPageClient';

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
  canonical: `${siteConfig.url}/ca/contact`,
});

export default function CanadaContactPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/ca' },
    { name: 'Contact Us', url: '/ca/contact' },
  ]);

  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Sara Global Hospitality',
    description: metadata.description,
    url: `${siteConfig.url}/ca/contact`,
    mainEntity: {
      '@type': 'Organization',
      name: siteConfig.name,
      telephone: siteConfig.phone,
      email: siteConfig.email,
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={createJsonLd(breadcrumbSchema)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={createJsonLd(contactPageSchema)} />
      <ContactPageClient />
    </>
  );
}


