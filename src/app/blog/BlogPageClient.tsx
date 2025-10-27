"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { Badge } from "@/components/ui/Badge";
import { getAllBlogPostsFromDB, BlogPostListing } from "@/lib/blog-data";
import { 
  ArrowRight, 
  Calendar, 
  User, 
  Clock, 
  TrendingUp,
  Bookmark,
  Hash,
  FolderOpen,
  Loader2
} from "lucide-react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};


// Separator component
const Separator = ({ className = "" }: { className?: string }) => (
  <div className={`h-px bg-gray-200 ${className}`} />
);

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [blogPosts, setBlogPosts] = useState<BlogPostListing[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPostListing[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch blog posts from database
  useEffect(() => {
    async function fetchBlogPosts() {
      try {
        console.log('🚀 BlogPageClient: Starting to fetch blog posts...');
        setLoading(true);
        setError(null);
        
        const posts = await getAllBlogPostsFromDB();
        console.log('📝 BlogPageClient: Received posts:', posts);
        console.log('📊 BlogPageClient: Posts count:', posts.length);
        setBlogPosts(posts);
        setFilteredPosts(posts);
      } catch (err) {
        console.error('❌ BlogPageClient: Error loading blog posts:', err);
        setError('Failed to load blog posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    }

    fetchBlogPosts();
  }, []);

  // Filter blog posts based on search query
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredPosts(blogPosts);
      return;
    }

    const query = searchQuery.toLowerCase().trim();
    const filtered = blogPosts.filter(post => {
      // Search in title
      const titleMatch = post.title.toLowerCase().includes(query);
      
      // Search in description
      const descriptionMatch = post.description.toLowerCase().includes(query);
      
      // Search in category
      const categoryMatch = post.category.toLowerCase().includes(query);
      
      // Search in tags
      const tagsMatch = post.tags.some(tag => tag.toLowerCase().includes(query));
      
      // Search in author
      const authorMatch = post.author.toLowerCase().includes(query);
      
      return titleMatch || descriptionMatch || categoryMatch || tagsMatch || authorMatch;
    });

    setFilteredPosts(filtered);
  }, [searchQuery, blogPosts]);

  const handleSearch = () => {
    // Search is handled automatically by useEffect
    console.log("Searching for:", searchQuery);
  };

  const handleReset = () => {
    setSearchQuery("");
  };

  const categories = [
    { name: "Design Trends", count: 12, active: true },
    { name: "Buying Guide", count: 8, active: false },
    { name: "Guest Experience", count: 15, active: false },
    { name: "Space Planning", count: 6, active: false },
    { name: "Restaurant Design", count: 9, active: false },
    { name: "Maintenance", count: 7, active: false },
    { name: "Industry News", count: 11, active: false },
    { name: "Sustainability", count: 5, active: false }
  ];

  // Popular posts from fetched data (first 5 posts)
  const popularPosts = blogPosts.slice(0, 5).map(post => ({
    title: post.title,
    date: post.date.split(',')[0], // Extract short date
    image: post.image,
    slug: post.slug
  }));

  const popularTags = [
    { name: "Modern Design", count: 24 },
    { name: "Sustainability", count: 18 },
    { name: "Hotel Decor", count: 32 },
    { name: "Custom Furniture", count: 15 },
    { name: "Guest Experience", count: 28 },
    { name: "Restaurant Design", count: 12 },
    { name: "Space Planning", count: 20 },
    { name: "Maintenance", count: 14 },
    { name: "Interior Design", count: 35 },
    { name: "Luxury Hotels", count: 22 },
    { name: "Budget Design", count: 8 },
    { name: "Eco-Friendly", count: 16 }
  ];

  const allPosts = filteredPosts;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-4 sm:py-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6 sm:px-4">
          <motion.div 
            className="text-center mb-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 bg-[#f26d35]/10 text-[#f26d35] px-4 py-2 rounded-full mb-4">
                <TrendingUp className="w-4 h-4" />
                <span>Industry Insights</span>
              </div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Sara Global
                <span className="text-[#f26d35] block">Hospitality Blog</span>
              </h1>
            </motion.div>
            <motion.div variants={itemVariants}>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-6">
                Expert insights, design trends, and practical advice for the hospitality furniture industry. 
                Stay informed with the latest developments in hotel furniture and interior design.
              </p>
            </motion.div>
          </motion.div>

          {/* Modern Search Bar */}
          <motion.div 
            className="max-w-[18rem] sm:max-w-2xl mx-auto z-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex bg-white rounded-lg shadow-lg overflow-hidden border-2 border-[#f26d35]">
              <input
                type="text"
                placeholder="Search blog articles (e.g., hotel furniture, design, trends)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSearch();
                  }
                }}
                className="flex-1 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f26d35]/20"
              />
              <button
                onClick={handleSearch}
                className="px-3 sm:px-6 py-2 sm:py-3 bg-[#f26d35] text-white text-xs sm:text-base font-medium hover:bg-[#f26d35]/90 transition-colors flex items-center justify-center text-center min-w-[72px] sm:min-w-0 shrink-0"
              >
                Search
              </button>
              {searchQuery && (
                <button
                  onClick={handleReset}
                  className="px-3 sm:px-6 py-2 sm:py-3 bg-gray-200 text-gray-700 text-xs sm:text-base font-medium hover:bg-gray-300 transition-colors flex items-center justify-center text-center min-w-[72px] sm:min-w-0 shrink-0"
                >
                  Reset
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-4 sm:py-8 bg-white border-b">
        <div className="container mx-auto px-6 sm:px-4">
          <motion.div 
            className="text-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Browse by Category</h2>
            <p className="text-sm sm:text-base text-gray-600">Explore our content by topic</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {categories.map((category, index) => (
              <button 
                key={index}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 hover:scale-105 ${
                  category.active 
                    ? 'bg-[#f26d35] text-white border-[#f26d35] shadow-lg' 
                    : 'bg-white text-gray-700 border-gray-300 hover:border-[#f26d35] hover:text-[#f26d35] hover:bg-[#f26d35]/5'
                }`}
              >
                <FolderOpen className="w-4 h-4" />
                <span className="font-medium">{category.name}</span>
                <Badge 
                  variant="outline" 
                  className={`text-xs ${
                    category.active 
                      ? 'bg-white/20 text-white border-white/30' 
                      : 'bg-gray-100 text-gray-600 border-gray-200'
                  }`}
                >
                  {category.count}
                </Badge>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="py-4 sm:py-8 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-3">
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Latest Articles</h2>
                <p className="text-base sm:text-lg text-gray-600">
                  Explore our collection of expert insights and industry knowledge
                </p>
              </motion.div>

              
              {/* Loading State */}
              {loading && (
                <div className="flex items-center justify-center py-20">
                  <div className="text-center">
                    <Loader2 className="w-12 h-12 text-[#f26d35] animate-spin mx-auto mb-4" />
                    <p className="text-gray-600">Loading blog posts...</p>
                  </div>
                </div>
              )}

              {/* Error State */}
              {error && !loading && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
                  <p className="text-red-600 mb-4">{error}</p>
                  <Button 
                    onClick={() => window.location.reload()} 
                    className="bg-[#f26d35] hover:bg-[#f26d35]/90 text-white"
                  >
                    Retry
                  </Button>
                </div>
              )}

              {/* Empty State - No Posts */}
              {!loading && !error && blogPosts.length === 0 && (
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-12 text-center">
                  <p className="text-gray-600 text-lg mb-2">No blog posts available</p>
                  <p className="text-gray-500 text-sm">Check back soon for new content!</p>
                </div>
              )}

              {/* Empty State - No Search Results */}
              {!loading && !error && blogPosts.length > 0 && filteredPosts.length === 0 && searchQuery && (
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-12 text-center">
                  <p className="text-gray-600 text-lg mb-2">No results found for &quot;{searchQuery}&quot;</p>
                  <p className="text-gray-500 text-sm mb-4">Try searching with different keywords</p>
                  <Button 
                    onClick={handleReset}
                    className="bg-[#f26d35] hover:bg-[#f26d35]/90 text-white"
                  >
                    Clear Search
                  </Button>
                </div>
              )}

              {/* Search Results Count */}
              {!loading && !error && searchQuery && filteredPosts.length > 0 && (
                <div className="mb-6 p-4 bg-[#f26d35]/10 rounded-lg border border-[#f26d35]/20">
                  <p className="text-sm text-gray-700">
                    Found <span className="font-bold text-[#f26d35]">{filteredPosts.length}</span> article{filteredPosts.length !== 1 ? 's' : ''} matching &quot;<span className="font-semibold">{searchQuery}</span>&quot;
                  </p>
                </div>
              )}

              {/* Blog Posts Grid */}
              {!loading && !error && filteredPosts.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  {allPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full"
                  >
                    <Link href={`/blog/${post.slug}`} className="h-full block">
                      <Card className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer h-full flex flex-col">
                        <div className="relative overflow-hidden flex-shrink-0">
                          <ImageWithFallback
                            src={post.image}
                            alt={post.title}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                            width={400}
                            height={192}
                          />
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-[#f26d35]/90 text-white">
                              {post.category}
                            </Badge>
                          </div>
                          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Button size="sm" variant="secondary" className="p-2">
                              <Bookmark className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                        
                        <CardContent className="p-4 sm:p-6 flex-1 flex flex-col">
                        <div className="space-y-4 flex-1 flex flex-col">
                          <div className="flex flex-wrap gap-1">
                            {post.tags.slice(0, 2).map((tag, tagIndex) => (
                              <Badge key={tagIndex} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          
                          <h3 className="text-lg sm:text-xl font-bold leading-tight group-hover:text-[#f26d35] transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          
                          <p className="text-sm sm:text-base text-gray-600 line-clamp-3 flex-1">
                            {post.description}
                          </p>
                          
                          <div className="flex items-center justify-between text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                              <User className="w-4 h-4" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                            <span className="text-sm text-gray-600">{post.date}</span>
                            <Link href={`/blog/${post.slug}`}>
                              <Button 
                                className="bg-[#f26d35] hover:bg-[#f26d35]/90 text-white"
                              >
                                Read More
                                <ArrowRight className="w-4 h-4 ml-2 animate-pulse" style={{ animation: 'arrowMove 2s ease-in-out infinite' }} />
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    </Link>
                  </motion.div>
                ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-4 sm:space-y-6">
              {/* Popular Posts */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-md">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-[#f26d35]" />
                      Popular Posts
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 sm:space-y-4">
                    {popularPosts.map((post, index) => (
                      <div key={index} className="group">
                        <Link href={`/blog/${post.slug}`} className="flex gap-3 cursor-pointer">
                          <div className="w-16 h-16 flex-shrink-0 overflow-hidden rounded-lg">
                            <ImageWithFallback
                              src={post.image}
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              width={64}
                              height={64}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-xs sm:text-sm leading-tight mb-1 group-hover:text-[#f26d35] transition-colors line-clamp-2">
                              {post.title}
                            </h4>
                            <div className="flex items-center gap-1 text-xs text-gray-600">
                              <Calendar className="w-3 h-3" />
                              <span>{post.date}</span>
                            </div>
                          </div>
                        </Link>
                        {index < popularPosts.length - 1 && <Separator className="mt-3 sm:mt-4" />}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Popular Tags */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-md">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Hash className="w-5 h-5 text-[#f26d35]" />
                      Popular Tags
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {popularTags.map((tag, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="cursor-pointer hover:bg-[#f26d35] hover:text-white hover:border-[#f26d35] transition-colors"
                        >
                          {tag.name}
                          <span className="ml-1 text-xs opacity-70">({tag.count})</span>
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
