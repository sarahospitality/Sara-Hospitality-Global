import { Metadata } from 'next';

// ============================================
// SITE CONFIGURATION
// ============================================
export const siteConfig = {
  name: 'Sara Global Hospitality',
  shortName: 'Sara Global',
  tagline: 'Premium Hospitality Furniture Manufacturer',
  description: 'Leading B2B furniture manufacturer for hotels, resorts & senior living. 25+ years expertise, 500+ projects, 50+ countries. Custom hospitality furniture solutions worldwide.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://sara-hospitality-global.vercel.app',
  ogImage: '/og-image.jpg',
  twitterHandle: '@saraglobal',
  
  // Contact Information
  phone: '+1-678-431-9041',
  email: 'info@saraglobal.com',
  
  // Business Information
  foundedYear: '1995',
  yearsInBusiness: '25+',
  projectsCompleted: '500+',
  countriesServed: '50+',
  
  // Social Media
  social: {
    facebook: 'https://facebook.com/saraglobal',
    linkedin: 'https://linkedin.com/company/sara-global-hospitality',
    instagram: 'https://instagram.com/saraglobal',
    twitter: 'https://twitter.com/saraglobal',
    youtube: 'https://youtube.com/@saraglobal',
  },
  
  // Keywords
  keywords: [
    'hospitality furniture manufacturer',
    'hotel furniture supplier',
    'custom hotel furniture',
    'commercial furniture manufacturer',
    'resort furniture supplier',
    'senior living furniture',
    'hospitality casegoods',
    'hotel bedroom furniture',
    'lobby furniture manufacturer',
    'custom hospitality solutions',
    'B2B furniture supplier',
    'hotel furniture packages',
    'luxury hotel furniture',
    'boutique hotel furniture',
    'hospitality furniture solutions',
  ],
};

// ============================================
// METADATA GENERATORS
// ============================================

/**
 * Generate base metadata for the site
 */
export function generateMetadata({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  noIndex = false,
  type = 'website',
}: {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
  type?: 'website' | 'article';
}): Metadata {
  const pageTitle = title 
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} | ${siteConfig.tagline}`;
  
  const pageDescription = description || siteConfig.description;
  const pageKeywords = keywords || siteConfig.keywords;
  const pageImage = ogImage || `${siteConfig.url}${siteConfig.ogImage}`;
  const pageUrl = canonical || siteConfig.url;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: pageKeywords.join(', '),
    
    // Robots
    robots: noIndex ? 'noindex, nofollow' : 'index, follow',
    
    // Canonical
    alternates: {
      canonical: pageUrl,
    },
    
    // Open Graph
    openGraph: {
      type: type,
      locale: 'en_US',
      url: pageUrl,
      siteName: siteConfig.name,
      title: pageTitle,
      description: pageDescription,
      images: [
        {
          url: pageImage,
          width: 1200,
          height: 630,
          alt: title || siteConfig.name,
        },
      ],
    },
    
    // Twitter
    twitter: {
      card: 'summary_large_image',
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
      title: pageTitle,
      description: pageDescription,
      images: [pageImage],
    },
    
    // Additional
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    
    // Verification (add your codes when available)
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
      yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
      // Note: Bing verification is done via meta tag in head, not through Metadata API
    },
  };
}

/**
 * Generate Organization JSON-LD Schema
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    foundingDate: siteConfig.foundedYear,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.phone,
      email: siteConfig.email,
      contactType: 'Sales',
      availableLanguage: ['English'],
    },
    sameAs: Object.values(siteConfig.social),
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
      addressLocality: 'Global',
    },
  };
}

/**
 * Generate Breadcrumb JSON-LD Schema
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };
}

/**
 * Generate Product JSON-LD Schema
 */
export function generateProductSchema({
  name,
  description,
  image,
  brand = siteConfig.name,
}: {
  name: string;
  description: string;
  image: string;
  brand?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image,
    brand: {
      '@type': 'Brand',
      name: brand,
    },
    manufacturer: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
  };
}

/**
 * Generate Article JSON-LD Schema (for Blog posts)
 */
export function generateArticleSchema({
  title,
  description,
  image,
  datePublished,
  dateModified,
  author = siteConfig.name,
}: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    image,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Organization',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.png`,
      },
    },
  };
}

/**
 * Generate FAQ JSON-LD Schema
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Helper to inject JSON-LD script
 */
export function createJsonLd(data: Record<string, unknown>) {
  return {
    __html: JSON.stringify(data),
  };
}

