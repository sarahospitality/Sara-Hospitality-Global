import { Metadata } from 'next';
import { generateMetadata as generateSiteMetadata, siteConfig, generateBreadcrumbSchema, createJsonLd } from '@/lib/metadata';
import AboutPageClient from './AboutPageClient';

// ============================================
// METADATA CONFIGURATION
// ============================================
export const metadata: Metadata = generateSiteMetadata({
  title: `About Sara Global | ${siteConfig.yearsInBusiness} Years Hospitality Furniture Excellence`,
  description: `Discover Sara Global Hospitality's story - ${siteConfig.yearsInBusiness} years of expertise in manufacturing premium hotel furniture. ${siteConfig.projectsCompleted} projects completed across ${siteConfig.countriesServed} countries. Learn about our mission, vision, and commitment to excellence.`,
  keywords: [
    'about Sara Global Hospitality',
    'hotel furniture manufacturer history',
    'hospitality furniture company',
    'commercial furniture experts',
    'furniture manufacturing experience',
    'global furniture supplier',
    'B2B furniture company',
  ],
  canonical: `${siteConfig.url}/about`,
});

// ============================================
// ABOUT PAGE (Server Component)
// ============================================
export default function AboutPage() {
  // Breadcrumb Schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'About Us', url: '/about' },
  ]);

  // AboutPage Schema
  const aboutPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Sara Global Hospitality',
    description: metadata.description,
    url: `${siteConfig.url}/about`,
    mainEntity: {
      '@type': 'Organization',
      name: siteConfig.name,
      foundingDate: siteConfig.foundedYear,
      description: siteConfig.description,
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
        dangerouslySetInnerHTML={createJsonLd(aboutPageSchema)}
      />
      <AboutPageClient />
    </>
  );
}
