import { Metadata } from 'next';
import { getBlogPostFromDB } from '@/lib/blog-data';
import { siteConfig } from '@/lib/metadata';

interface BlogDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// ============================================
// DYNAMIC METADATA GENERATION
// ============================================
export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostFromDB(slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found | Sara Global Hospitality',
      description: 'The requested blog post could not be found.',
    };
  }

  // Use og_title if available, otherwise use title
  const metaTitle = post.og_title || post.title;
  const metaDescription = post.og_description || post.excerpt || 'Read our latest blog post about hospitality furniture and design.';
  const metaImage = post.og_image || post.image_url;
  const metaUrl = post.og_url || `${siteConfig.url}/blog/${slug}`;

  return {
    title: `${metaTitle} | Sara Global Blog`,
    description: metaDescription,
    keywords: post.keywords || post.tags.join(', '),
    
    alternates: {
      canonical: metaUrl,
    },
    
    openGraph: {
      type: 'article',
      title: metaTitle,
      description: metaDescription,
      images: [{ url: metaImage }],
      url: metaUrl,
    },
    
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
    },
  };
}

// ============================================
// BLOG DETAIL PAGE
// ============================================
export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const BlogDetailClient = (await import('./BlogDetailClient')).default;
  
  return <BlogDetailClient slug={slug} />;
}
