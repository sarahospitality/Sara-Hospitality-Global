import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  ArrowRight, 
  Calendar, 
  User, 
  Clock, 
  Tag,
  TrendingUp,
  MessageCircle,
  Share2,
  Bookmark,
  ChevronRight,
  Hash,
  FolderOpen,
  Star
} from "lucide-react";

interface BlogPageProps {
  onNavigate?: (page: string) => void;
}

export default function BlogPage({ onNavigate }: BlogPageProps) {
  const blogPosts = [
    {
      id: 1,
      slug: "modern-hotel-furniture-trends-2024",
      title: "Modern Hotel Furniture Trends for 2024: Sustainability Meets Luxury",
      description: "Discover the latest trends in hotel furniture design that balance environmental responsibility with guest comfort and aesthetic appeal.",
      author: "Sarah Mitchell",
      date: "December 15, 2024",
      readTime: "8 min read",
      category: "Design Trends",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3RlbCUyMGZ1cm5pdHVyZXxlbnwxfHx8fDE3NTY5OTgzMjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      featured: true,
      tags: ["Sustainability", "Modern Design", "Hotel Decor"]
    },
    {
      id: 2,
      slug: "choosing-right-furniture-hotel-rooms",
      title: "How to Choose the Right Furniture for Different Hotel Room Types",
      description: "A comprehensive guide to selecting appropriate furniture for various hotel accommodations, from standard rooms to luxury suites.",
      author: "Michael Chen",
      date: "December 12, 2024",
      readTime: "6 min read",
      category: "Buying Guide",
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTY5OTgzMjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      featured: false,
      tags: ["Hotel Rooms", "Furniture Selection", "Interior Design"]
    },
    {
      id: 3,
      slug: "custom-furniture-guest-experience",
      title: "The Impact of Custom Furniture on Guest Experience",
      description: "Learn how personalized furniture solutions can enhance guest satisfaction and create memorable hospitality experiences.",
      author: "Emma Rodriguez",
      date: "December 10, 2024",
      readTime: "5 min read",
      category: "Guest Experience",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTY5OTgzMjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      featured: false,
      tags: ["Custom Furniture", "Guest Satisfaction", "Hospitality"]
    },
    {
      id: 4,
      slug: "small-hotel-spaces-smart-solutions",
      title: "Maximizing Small Hotel Spaces with Smart Furniture Solutions",
      description: "Innovative furniture ideas and space-saving techniques to make the most of compact hotel rooms without compromising comfort.",
      author: "David Thompson",
      date: "December 8, 2024",
      readTime: "7 min read",
      category: "Space Planning",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTY5OTgzMjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      featured: false,
      tags: ["Small Spaces", "Smart Design", "Efficiency"]
    },
    {
      id: 5,
      slug: "restaurant-bar-furniture-dining-atmosphere",
      title: "Restaurant and Bar Furniture: Creating the Perfect Dining Atmosphere",
      description: "Essential tips for selecting restaurant and bar furniture that enhances dining experiences and complements your hotel's brand.",
      author: "Lisa Wang",
      date: "December 5, 2024",
      readTime: "6 min read",
      category: "Restaurant Design",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTY5OTgzMjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      featured: false,
      tags: ["Restaurant Furniture", "Bar Design", "Dining Experience"]
    },
    {
      id: 6,
      slug: "maintenance-tips-long-lasting-hotel-furniture",
      title: "Maintenance Tips for Long-lasting Hotel Furniture",
      description: "Expert advice on maintaining and extending the lifespan of your hotel furniture investment with proper care and maintenance protocols.",
      author: "James Wilson",
      date: "December 3, 2024",
      readTime: "4 min read",
      category: "Maintenance",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTY5OTgzMjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      featured: false,
      tags: ["Maintenance", "Furniture Care", "Longevity"]
    }
  ];

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

  const recentPosts = [
    {
      title: "2024 Hotel Design Awards Winners",
      date: "Dec 18, 2024",
      image: "https://images.unsplash.com/photo-1590490359854-dfba19688d70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTY5OTgzMjF8MA&ixlib=rb-4.1.0&q=80&w=300"
    },
    {
      title: "Eco-Friendly Furniture Materials Guide",
      date: "Dec 16, 2024",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTY5OTgzMjF8MA&ixlib=rb-4.1.0&q=80&w=300"
    },
    {
      title: "Budget Planning for Hotel Renovations",
      date: "Dec 14, 2024",
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTY5OTgzMjF8MA&ixlib=rb-4.1.0&q=80&w=300"
    },
    {
      title: "Color Psychology in Hotel Interiors",
      date: "Dec 11, 2024",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTY5OTgzMjF8MA&ixlib=rb-4.1.0&q=80&w=300"
    },
    {
      title: "Outdoor Furniture Trends for 2024",
      date: "Dec 9, 2024",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTY5OTgzMjF8MA&ixlib=rb-4.1.0&q=80&w=300"
    }
  ];

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

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <TrendingUp className="w-4 h-4" />
              <span>Industry Insights</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Sara Global
              <span className="text-primary block">Hospitality Blog</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Expert insights, design trends, and practical advice for the hospitality furniture industry. 
              Stay informed with the latest developments in hotel furniture and interior design.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <Badge 
              variant="default"
              className="px-4 py-2 cursor-pointer bg-primary text-primary-foreground hover:bg-primary/90"
            >
              All Posts
            </Badge>
            {categories.slice(0, 6).map((category, index) => (
              <Badge 
                key={index} 
                variant="outline"
                className="px-4 py-2 cursor-pointer transition-colors hover:bg-primary/10 hover:text-primary hover:border-primary"
              >
                {category.name}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <Badge className="bg-primary text-primary-foreground mb-4">
                Featured Article
              </Badge>
            </div>
            
            <Card className="overflow-hidden border-0 shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-80 lg:h-full">
                  <ImageWithFallback
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary/90 text-primary-foreground">
                      {featuredPost.category}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div className="flex flex-wrap gap-2">
                      {featuredPost.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <h2 className="text-2xl lg:text-3xl font-bold leading-tight">
                      {featuredPost.title}
                    </h2>
                    
                    <p className="text-lg text-muted-foreground">
                      {featuredPost.description}
                    </p>
                    
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <Button 
                        size="lg" 
                        onClick={() => onNavigate?.("blog-detail", featuredPost.slug)}
                        className="bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        Read Full Article
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                      <Button size="lg" variant="outline" className="flex items-center gap-2">
                        <Share2 className="w-4 h-4" />
                        Share
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Main Content with Sidebar */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content Area */}
            <div className="lg:col-span-3">
              <div className="mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">Latest Articles</h2>
                <p className="text-lg text-muted-foreground">
                  Explore our collection of expert insights and industry knowledge
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {regularPosts.map((post) => (
                  <Card key={post.id} className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="relative overflow-hidden">
                      <ImageWithFallback
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-primary/90 text-primary-foreground">
                          {post.category}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button size="sm" variant="secondary" className="p-2">
                          <Bookmark className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-1">
                          {post.tags.slice(0, 2).map((tag, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        
                        <p className="text-muted-foreground line-clamp-3">
                          {post.description}
                        </p>
                        
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between pt-4 border-t border-border">
                          <span className="text-sm text-muted-foreground">{post.date}</span>
                          <Button 
                            onClick={() => onNavigate?.("blog-detail", post.slug)}
                            className="bg-primary hover:bg-primary/90 text-primary-foreground"
                          >
                            Read More
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Categories */}
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FolderOpen className="w-5 h-5 text-primary" />
                    Categories
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {categories.map((category, index) => (
                    <div key={index}>
                      <button className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-primary/5 transition-colors group">
                        <span className={`${category.active ? 'text-primary font-medium' : 'text-foreground'} group-hover:text-primary transition-colors`}>
                          {category.name}
                        </span>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">
                            {category.count}
                          </Badge>
                          <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                      </button>
                      {index < categories.length - 1 && <Separator className="my-1" />}
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Recent Posts */}
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-primary" />
                    Recent Posts
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentPosts.map((post, index) => (
                    <div key={index} className="group">
                      <div className="flex gap-3 cursor-pointer">
                        <div className="w-16 h-16 flex-shrink-0 overflow-hidden rounded-lg">
                          <ImageWithFallback
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm leading-tight mb-1 group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                          </h4>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar className="w-3 h-3" />
                            <span>{post.date}</span>
                          </div>
                        </div>
                      </div>
                      {index < recentPosts.length - 1 && <Separator className="mt-4" />}
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Popular Tags */}
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Hash className="w-5 h-5 text-primary" />
                    Popular Tags
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="cursor-pointer hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                      >
                        {tag.name}
                        <span className="ml-1 text-xs opacity-70">({tag.count})</span>
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card className="border-0 shadow-md bg-gradient-to-br from-primary/5 to-accent/50">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <MessageCircle className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h3 className="font-bold mb-2">Stay Updated</h3>
                    <p className="text-sm text-muted-foreground">
                      Get the latest insights delivered to your inbox
                    </p>
                  </div>
                  <div className="space-y-3">
                    <input 
                      type="email" 
                      placeholder="Your email address"
                      className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                    <Button size="sm" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Subscribe
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Hotel?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Get expert advice on your hospitality furniture project. Our team is here to help 
            you create exceptional spaces that delight your guests.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => onNavigate?.("portfolio")} className="bg-primary hover:bg-primary/90 text-primary-foreground">
              View Our Portfolio
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => onNavigate?.("contact")}>
              Contact Our Experts
              <MessageCircle className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}