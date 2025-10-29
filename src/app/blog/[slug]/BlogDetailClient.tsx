"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Separator } from "@/components/ui/Separator";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { 
  ArrowLeft,
  ArrowRight, 
  Calendar, 
  Clock, 
  Tag,
  Share2,
  ChevronRight,
  Quote,
  ExternalLink,
  Loader2,
  User,
  HelpCircle
} from "lucide-react";
import Link from "next/link";
import { getBlogPostFromDB, getAllBlogPostsFromDB, getAllBlogSlugs, BlogPostDetail, BlogPostListing } from "@/lib/blog-data";

interface BlogDetailClientProps {
  slug: string;
}

export default function BlogDetailClient({ slug }: BlogDetailClientProps) {
  const [currentPost, setCurrentPost] = useState<BlogPostDetail | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostListing[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBlogPost() {
      try {
        console.log('🔍 BlogDetailClient: Fetching blog post with slug:', slug);
        setLoading(true);
        setError(null);
        
        // First, let's see what slugs are available in the database
        await getAllBlogSlugs();
        
        const post = await getBlogPostFromDB(slug);
        
        if (!post) {
          console.error('❌ BlogDetailClient: Blog post not found for slug:', slug);
          setError(`Blog post not found. Please check if the slug "${slug}" exists in the database.`);
          setLoading(false);
          return;
        }
        
        console.log('✅ BlogDetailClient: Blog post loaded:', post.title);
        setCurrentPost(post);
        
        // Fetch related posts
        const allPosts = await getAllBlogPostsFromDB();
        // Filter out current post and get up to 3 related posts from same category
        const related = allPosts
          .filter(p => p.slug !== slug)
          .filter(p => p.category === post.category)
          .slice(0, 3);
        
        // If not enough posts in same category, add other posts
        if (related.length < 3) {
          const otherPosts = allPosts
            .filter(p => p.slug !== slug && p.category !== post.category)
            .slice(0, 3 - related.length);
          related.push(...otherPosts);
        }
        
        setRelatedPosts(related);
      } catch (err) {
        console.error('❌ BlogDetailClient: Error loading blog post:', err);
        setError('Failed to load blog post. Please try again later.');
      } finally {
        setLoading(false);
      }
    }

    fetchBlogPost();
  }, [slug]);

  // Format date helper
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return date.toLocaleDateString('en-US', options);
  };

  // Sanitize HTML content to fix empty href attributes
  const sanitizeHtml = (html: string): string => {
    if (!html) return '';
    
    // Process HTML to fix invalid anchor tags
    // We'll handle both opening and closing tags by processing in order
    let sanitized = html;
    let spanDepth = 0;
    
    // Replace all anchor tags - check each one
    sanitized = sanitized.replace(/<\/?a\b[^>]*>/gi, (match) => {
      // Handle closing tags
      if (match.startsWith('</a')) {
        if (spanDepth > 0) {
          spanDepth--;
          return '</span>';
        }
        return match; // Keep as </a> if not part of converted span
      }
      
      // Handle opening tags
      const attrsMatch = match.match(/<a\s+([^>]*)>/i);
      if (!attrsMatch) return match;
      
      const attrs = attrsMatch[1];
      const hrefMatch = attrs.match(/href=["']([^"']*)["']/i);
      
      // Check if href is missing or invalid
      if (!hrefMatch) {
        // No href - convert to span
        const cleanAttrs = attrs.trim();
        spanDepth++;
        return `<span${cleanAttrs ? ' ' + cleanAttrs : ''}>`;
      }
      
      const hrefValue = hrefMatch[1].trim();
      
      // Check if href is empty or just #
      if (!hrefValue || hrefValue === '#' || hrefValue === '') {
        // Invalid href - convert to span
        const cleanAttrs = attrs.replace(/href=["'][^"']*["']/gi, '').trim();
        spanDepth++;
        return `<span${cleanAttrs ? ' ' + cleanAttrs : ''}>`;
      }
      
      // Valid href - keep as anchor
      return match;
    });
    
    return sanitized;
  };

  // Render HTML content safely
  const renderContent = (content: string) => {
    if (!content) {
      return <p className="text-gray-500">No content available.</p>;
    }

    // Check if content contains HTML tags
    const hasHTMLTags = /<[^>]+>/.test(content);
    
    // Debug logging to see what we're working with
    console.log('🔍 Content rendering:', {
      hasHTMLTags,
      contentLength: content.length,
      contentPreview: content.substring(0, 200)
    });
    
    if (hasHTMLTags) {
      // Sanitize HTML before rendering
      const sanitizedContent = sanitizeHtml(content);
      console.log('✅ Rendering as HTML');
      return (
        <div 
          className="blog-content-html"
          dangerouslySetInnerHTML={{ __html: sanitizedContent }}
        />
      );
    }
    
    // Otherwise, render as markdown-style content (existing logic)
    console.log('📝 Rendering as markdown-style');
    const paragraphs = content.split('\n\n').filter(p => p.trim());
    
    return paragraphs.map((paragraph, index) => {
      // Check if it's a heading
      if (paragraph.startsWith('# ')) {
        return (
          <h2 key={index} className="text-3xl font-bold mb-6 mt-8 text-gray-900">
            {paragraph.replace('# ', '')}
          </h2>
        );
      } else if (paragraph.startsWith('## ')) {
        return (
          <h3 key={index} className="text-2xl font-bold mb-4 mt-6 text-gray-900">
            {paragraph.replace('## ', '')}
          </h3>
        );
      } else if (paragraph.startsWith('### ')) {
        return (
          <h4 key={index} className="text-xl font-bold mb-3 mt-4 text-gray-900">
            {paragraph.replace('### ', '')}
          </h4>
        );
      } else if (paragraph.startsWith('- ') || paragraph.startsWith('* ')) {
        // List item
        const items = paragraph.split('\n').filter(item => item.trim());
        return (
          <ul key={index} className="list-disc list-inside mb-6 space-y-2">
            {items.map((item, i) => (
              <li key={i} className="text-lg text-gray-700">
                {item.replace(/^[-*]\s/, '')}
              </li>
            ))}
          </ul>
        );
      } else {
        // Regular paragraph
        return (
          <p key={index} className="text-lg leading-relaxed text-gray-700 mb-6">
            {paragraph}
          </p>
        );
      }
    });
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-[#f26d35] animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading blog post...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error || !currentPost) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">
            {error || 'Blog Post Not Found'}
          </h1>
          <p className="text-gray-600 mb-6">
            The blog post you&apos;re looking for doesn&apos;t exist or has been removed.
          </p>
          <Link href="/blog">
            <Button className="bg-[#f26d35] hover:bg-[#f26d35]/90">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="w-full max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-12 py-4">
            <div className="flex items-center gap-2 text-sm text-gray-600 overflow-x-auto">
              <Link href="/" className="hover:text-[#f26d35] transition-colors whitespace-nowrap">
                Home
              </Link>
              <ChevronRight className="w-4 h-4 flex-shrink-0" />
              <Link href="/blog" className="hover:text-[#f26d35] transition-colors whitespace-nowrap">
                Blog
              </Link>
              <ChevronRight className="w-4 h-4 flex-shrink-0" />
              <span className="text-gray-900 truncate">{currentPost.category}</span>
            </div>
          </div>
        </div>

        {/* Hero Image and Title */}
        <div className="relative h-96 lg:h-[500px]">
          <ImageWithFallback
            src={currentPost.image_url}
            alt={currentPost.title}
            className="w-full h-full object-cover"
            width={1920}
            height={500}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8">
            <div className="w-full max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-12">
              <div className="max-w-none pr-8 sm:pr-0">
                <Badge className="bg-[#f26d35] text-white mb-3 sm:mb-4 text-xs sm:text-sm">
                  {currentPost.category}
                </Badge>
                <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-4 leading-tight break-words">
                  {currentPost.title}
                </h1>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <div className="absolute top-4 left-0 right-0">
            <div className="w-full max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-12">
              <Link href="/blog">
                <Button variant="outline" size="sm" className="bg-white/90 hover:bg-white text-gray-900 text-xs sm:text-sm">
                  <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  Back to Blog
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Article Meta - Below Banner */}
        <div className="bg-white border-b">
          <div className="w-full max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-12 py-4 sm:py-6">
            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-gray-600 text-sm">
              <div className="flex items-center gap-2">
                <User className="w-8 h-8 sm:w-10 sm:h-10 text-[#f26d35] flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="text-gray-900 font-medium text-sm sm:text-base">
                    {currentPost.author || 'Sara Global Team'}
                  </span>
                  <span className="text-xs sm:text-sm">Content Writer</span>
                </div>
              </div>
              <div className="flex items-center gap-2 whitespace-nowrap">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="text-xs sm:text-base">{formatDate(currentPost.created_at)}</span>
              </div>
              <div className="flex items-center gap-2 whitespace-nowrap">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="text-xs sm:text-base">{currentPost.reading_time || '5 min read'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-6 sm:py-10">
        <div className="w-full max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-10">
            {/* Article Content */}
            <div className="lg:col-span-8 pr-4 sm:pr-0">
              <div className="w-full max-w-none overflow-x-hidden">
                {/* Excerpt/Introduction */}
                {currentPost.excerpt && (
                  <div className="mb-8 sm:mb-12">
                    <div className="bg-[#f26d35]/5 border-l-4 border-[#f26d35] p-4 sm:p-6 rounded-r-lg mb-6 sm:mb-8">
                      <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-[#f26d35] mb-3 sm:mb-4" />
                      <p className="text-base sm:text-lg italic leading-relaxed text-gray-700 break-words">
                        {currentPost.excerpt}
                      </p>
                    </div>
                  </div>
                )}

                {/* Main Content */}
                <div className="mb-12">
                  {renderContent(currentPost.content)}
                </div>

                {/* FAQs Section */}
                {currentPost.faqs && currentPost.faqs.length > 0 && (
                  <div className="mb-12">
                    <Card className="border-0 shadow-lg">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <HelpCircle className="w-5 h-5 text-[#f26d35]" />
                          Frequently Asked Questions
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        {currentPost.faqs.map((faq, index) => (
                          <div key={index}>
                            <h3 className="text-lg font-bold mb-2 text-gray-900">
                              {faq.question}
                            </h3>
                            <p className="text-gray-700">
                              {faq.answer}
                            </p>
                            {index < currentPost.faqs!.length - 1 && (
                              <Separator className="mt-6" />
                            )}
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </div>
                )}

                {/* Call to Action */}
                <div className="mb-8 sm:mb-12">
                  <div className="bg-gradient-to-r from-[#f26d35]/5 to-orange-50 p-4 sm:p-8 rounded-lg">
                    <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 text-gray-700 break-words">
                      Ready to transform your hospitality space with quality furniture? Our team of experts can help you create spaces that delight guests while meeting your business goals.
                    </p>
                    <div className="flex gap-3 sm:gap-4 mt-3 sm:mt-4 flex-wrap">
                      <Link href="/portfolio">
                        <Button className="bg-[#f26d35] hover:bg-[#f26d35]/90 text-white text-xs sm:text-sm px-3 sm:px-4 py-2">
                          View Our Portfolio
                          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
                        </Button>
                      </Link>
                      <Link href="/contact">
                        <Button variant="outline" className="text-xs sm:text-sm px-3 sm:px-4 py-2">
                          Contact Our Experts
                          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                {currentPost.tags && currentPost.tags.length > 0 && (
                  <div className="mb-12">
                    <h3 className="text-xl font-bold mb-4">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {currentPost.tags.map((tag, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="cursor-pointer hover:bg-[#f26d35] hover:text-white transition-colors"
                        >
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Share Section */}
                <div className="mb-8 sm:mb-12">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-4 p-4 sm:p-6 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Share2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#f26d35] flex-shrink-0" />
                      <span className="font-medium text-sm sm:text-base">Share this article</span>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      <Button variant="outline" size="sm" className="text-xs sm:text-sm">
                        Twitter
                      </Button>
                      <Button variant="outline" size="sm" className="text-xs sm:text-sm">
                        LinkedIn
                      </Button>
                      <Button variant="outline" size="sm" className="text-xs sm:text-sm">
                        Facebook
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-8 space-y-6">
                {/* Article Info */}
                <Card className="border shadow-sm">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base font-semibold">Article Info</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 pt-0">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">Published</span>
                      </div>
                      <span className="text-sm font-medium text-gray-900 text-right">{formatDate(currentPost.created_at)}</span>
                    </div>
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">Reading Time</span>
                      </div>
                      <span className="text-sm font-medium text-gray-900">{currentPost.reading_time || '5 min'}</span>
                    </div>
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <Tag className="w-4 h-4 text-gray-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">Category</span>
                      </div>
                      <Badge variant="outline" className="text-xs">{currentPost.category}</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-6 sm:py-10 bg-gray-50">
          <div className="w-full max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-12">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Related Articles</h2>
              <p className="text-base sm:text-lg text-gray-600">
                Continue exploring our hospitality insights
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
              {relatedPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <Card className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                    <div className="relative overflow-hidden h-48">
                      <ImageWithFallback
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        width={400}
                        height={200}
                      />
                      <Badge className="absolute top-4 left-4 bg-[#f26d35]/90 text-white">
                        {post.category}
                      </Badge>
                    </div>
                    
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-3 group-hover:text-[#f26d35] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                        <div className="flex items-center gap-1 text-[#f26d35]">
                          <span className="text-sm">Read More</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
