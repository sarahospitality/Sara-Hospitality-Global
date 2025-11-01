import { Metadata } from 'next';
import { generateMetadata as generateSiteMetadata, siteConfig, generateBreadcrumbSchema, createJsonLd } from '@/lib/metadata';
import AboutPageClient from '@/app/about/AboutPageClient';

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
  canonical: `${siteConfig.url}/ca/about`,
});

export default function CanadaAboutPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/ca' },
    { name: 'About Us', url: '/ca/about' },
  ]);

  const aboutPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Sara Global Hospitality',
    description: metadata.description,
    url: `${siteConfig.url}/ca/about`,
    mainEntity: {
      '@type': 'Organization',
      name: siteConfig.name,
      foundingDate: siteConfig.foundedYear,
      description: siteConfig.description,
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={createJsonLd(breadcrumbSchema)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={createJsonLd(aboutPageSchema)} />
      <AboutPageClient />
    </>
  );
}


