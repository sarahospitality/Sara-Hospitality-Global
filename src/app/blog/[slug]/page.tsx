import { Metadata } from 'next';
import { getBlogPost } from '@/lib/blog-data';
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
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found | Sara Global Hospitality',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: `${post.title} | Sara Global Blog`,
    description: post.subtitle,
    keywords: post.tags.join(', '),
    
    alternates: {
      canonical: `${siteConfig.url}/blog/${slug}`,
    },
    
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.subtitle,
      images: [{ url: post.image }],
    },
    
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.subtitle,
      images: [post.image],
    },
  };
}

// ============================================
// BLOG DETAIL PAGE
// Note: Uses client component from original implementation
// TODO: Separate into client component in future refactor
// ============================================
export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  
  // For now, return a simple message
  // The original blog detail component can be restored later
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Blog Post: {slug}</h1>
        <p className="text-gray-600">
          Blog detail page with metadata configured. Content component to be integrated.
        </p>
      </div>
    </div>
  );
}
