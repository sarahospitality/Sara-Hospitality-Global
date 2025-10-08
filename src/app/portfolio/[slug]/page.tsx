import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PortfolioDetailClient from "@/components/PortfolioDetailClient";
import { getPortfolioItemBySlug, extractSlug, getPortfolioImageUrl } from '@/lib/portfolio';
import { siteConfig, generateBreadcrumbSchema, createJsonLd } from '@/lib/metadata';

interface PortfolioDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// ============================================
// DYNAMIC METADATA GENERATION
// ============================================
export async function generateMetadata({ params }: PortfolioDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const cleanSlug = extractSlug(slug);
  const portfolio = await getPortfolioItemBySlug(cleanSlug);

  if (!portfolio) {
    return {
      title: 'Portfolio Not Found | Sara Global Hospitality',
      description: 'The requested portfolio project could not be found.',
    };
  }

  // Use portfolio data for SEO
  const title = portfolio.og_title || portfolio.title || 'Hotel Furniture Project';
  const description = portfolio.og_description || portfolio.subtitle || portfolio.description || `View ${portfolio.title} furniture project by Sara Global Hospitality`;
  const keywords = portfolio.og_keywords || `${portfolio.title}, ${portfolio.brandName || ''}, ${portfolio.location || ''}, hotel furniture project`;
  const image = portfolio.og_image || getPortfolioImageUrl(portfolio.main_image);

  return {
    title: `${title} | Sara Global Hospitality`,
    description: description || undefined,
    keywords: keywords || undefined,
    
    alternates: {
      canonical: portfolio.og_url || `${siteConfig.url}/portfolio/${cleanSlug}`,
    },
    
    openGraph: {
      type: 'article',
      locale: 'en_US',
      url: `${siteConfig.url}/portfolio/${cleanSlug}`,
      siteName: siteConfig.name,
      title: title,
      description: description || undefined,
      images: [
        {
          url: image?.startsWith('http') ? image : `${siteConfig.url}${image}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    
    twitter: {
      card: 'summary_large_image',
      site: siteConfig.twitterHandle,
      title: title,
      description: description || undefined,
      images: [image?.startsWith('http') ? image : `${siteConfig.url}${image}`],
    },
  };
}

// ============================================
// PORTFOLIO DETAIL PAGE (Server Component)
// ============================================
export default async function PortfolioDetailPage({ params }: PortfolioDetailPageProps) {
  const { slug } = await params;
  const cleanSlug = extractSlug(slug);
  const portfolio = await getPortfolioItemBySlug(cleanSlug);

  if (!portfolio) {
    notFound();
  }

  // Breadcrumb Schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Portfolio', url: '/portfolio' },
    { name: portfolio.title || 'Project', url: `/portfolio/${cleanSlug}` },
  ]);

  // ImageGallery Schema
  const imageGallerySchema = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: portfolio.title,
    description: portfolio.description,
    image: [
      portfolio.hero_image,
      portfolio.main_image,
      portfolio.old_image_1,
      portfolio.old_image_2,
      portfolio.old_image_3,
      portfolio.new_image_1,
      portfolio.new_image_2,
      portfolio.new_image_3,
    ].filter(Boolean).map(img => getPortfolioImageUrl(img)),
  };

  // FAQPage Schema (if FAQs exist)
  const faqs = [];
  for (let i = 1; i <= 10; i++) {
    const question = portfolio[`faq_${i}` as keyof typeof portfolio];
    const answer = portfolio[`answer_${i}` as keyof typeof portfolio];
    if (question && answer) {
      faqs.push({ question: String(question), answer: String(answer) });
    }
  }

  const faqSchema = faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  } : null;

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={createJsonLd(breadcrumbSchema)}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={createJsonLd(imageGallerySchema)}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={createJsonLd(faqSchema)}
        />
      )}
      <PortfolioDetailClient slug={slug} />
    </>
  );
}

