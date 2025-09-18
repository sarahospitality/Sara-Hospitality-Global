import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Calendar, Clock, ArrowRight, BookOpen, User, Eye, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";


interface BlogSectionProps {
  selectedCountry?: string;
}

export default function BlogSection({ selectedCountry }: BlogSectionProps) {
  const isCanada = selectedCountry === "canada-toronto";
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  const featuredPost = {
    title: "The Future of Hospitality Design: Sustainable Luxury in Hotel Furniture",
    excerpt: "Discover how leading hotels are embracing sustainable furniture solutions without compromising on luxury and guest experience.",
    image: "https://images.unsplash.com/photo-1593589279419-7da07fd2148d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGZ1cm5pdHVyZSUyMG1hdGVyaWFsc3xlbnwxfHx8fDE3NTcwMDMxNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Sustainability",
    date: "March 15, 2024",
    readTime: "8 min read",
    author: "Sarah Mitchell",
    views: "2.3k"
  };

  const blogPosts = [
    {
      title: "Hotel Room Furniture: Maximizing Space Without Compromising Comfort",
      excerpt: "Space optimization strategies for boutique hotels and urban properties where every square foot matters.",
      image: "https://images.unsplash.com/photo-1590490359854-dfba19688d70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb20lMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzU2OTk4MzIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Design Tips",
      date: "March 12, 2024",
      readTime: "6 min read",
      author: "Michael Chen",
      featured: false
    },
    {
      title: "Behind the Scenes: Our Furniture Manufacturing Process",
      excerpt: "Take a virtual tour of our state-of-the-art manufacturing facility and learn about our quality control processes.",
      image: "https://images.unsplash.com/photo-1653971858625-9cb23d0dca80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmUlMjBkZXNpZ24lMjBwcm9jZXNzfGVufDF8fHx8MTc1NzAwMzE1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Manufacturing",
      date: "March 10, 2024",
      readTime: "7 min read",
      author: "David Thompson",
      featured: false
    },
    {
      title: "2024 Hospitality Design Trends: What's Hot and What's Not",
      excerpt: "Explore the latest design trends influencing hotel interiors and guest preferences in the post-pandemic era.",
      image: "https://images.unsplash.com/photo-1647336811715-d7c7837c50d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGludGVyaW9yJTIwZGVzaWduJTIwdHJlbmRzfGVufDF8fHx8MTc1NzAwMzE1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Trends",
      date: "March 8, 2024", 
      readTime: "5 min read",
      author: "Emily Rodriguez",
      featured: false
    },
    {
      title: "Maintenance Made Easy: Caring for Your Hotel Furniture Investment",
      excerpt: "Essential maintenance tips to extend the life of your hotel furniture and keep it looking pristine for years.",
      image: "https://images.unsplash.com/photo-1755644046048-989506b73a5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3RlbCUyMGxvYmJ5JTIwZnVybml0dXJlfGVufDF8fHx8MTc1NzAwMjkwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Maintenance",
      date: "March 5, 2024",
      readTime: "4 min read", 
      author: "Lisa Wang",
      featured: false
    }
  ];



  if (isCanada) {
    const canadianFeaturedPost = {
      title: "The Canadian Advantage: How Local Sourcing Transforms Hotel Sustainability",
      excerpt: "Discover how Canadian hotels are leading the sustainability revolution by partnering with local craftsmen and using FSC-certified Canadian hardwoods.",
      image: "https://images.unsplash.com/photo-1668628422941-a8e5315441c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5hZGlhbiUyMHN1c3RhaW5hYmxlJTIwZnVybml0dXJlJTIwd29ya3Nob3B8ZW58MXx8fHwxNzU3NTAyNTI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "🍁 Canadian Sustainability",
      date: "March 15, 2024",
      readTime: "8 min read",
      author: "Marie Dubois",
      views: "3.2k",
      highlight: "Featured in Canadian Hospitality Magazine"
    };

    const canadianPosts = [
      {
        title: "Winter-Ready Hotel Furniture: Engineering for Canadian Climates",
        excerpt: "How our furniture is specifically designed to withstand Canada's harsh winters while maintaining luxury aesthetics.",
        image: "https://images.unsplash.com/photo-1739907549777-6ff7cd3921fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5hZGlhbiUyMG1vdW50YWluJTIwaG90ZWwlMjBsb2RnZXxlbnwxfHx8fDE3NTc1MDI0MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        category: "❄️ Climate Solutions",
        date: "March 12, 2024",
        readTime: "6 min read",
        author: "James MacLeod",
        location: "Whistler, BC"
      },
      {
        title: "From Forest to Hotel: Our Canadian Supply Chain Story",
        excerpt: "An inside look at how we partner with Canadian forest cooperatives to create sustainable furniture solutions.",
        image: "https://images.unsplash.com/photo-1664423556803-e986b9124f15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMHdvb2QlMjBmdXJuaXR1cmUlMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NTc1MDE4MjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        category: "🌲 Local Sourcing",
        date: "March 10, 2024",
        readTime: "7 min read",  
        author: "Robert Thompson",
        location: "Toronto, ON"
      },
      {
        title: "Indigenous Design Influences in Modern Canadian Hospitality",
        excerpt: "How traditional Indigenous craftsmanship techniques are inspiring contemporary hotel furniture design across Canada.",
        image: "https://images.unsplash.com/photo-1725623831897-fb009acfe742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YW5jb3V2ZXIlMjBsdXh1cnklMjBob3RlbCUyMGludGVyaW9yfGVufDF8fHx8MTc1NzUwMjQxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        category: "🎨 Cultural Heritage",
        date: "March 8, 2024",
        readTime: "9 min read",
        author: "Sarah Blackbird",
        location: "Vancouver, BC"
      },
      {
        title: "Zero Waste Manufacturing: Sara Global's Canadian Facility",
        excerpt: "How our Toronto facility achieved 100% material utilization and carbon-neutral manufacturing processes.",
        image: "https://images.unsplash.com/photo-1661777997156-ccac1c9876e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY28lMjBmcmllbmRseSUyMGhvdGVsJTIwcm9vbXxlbnwxfHx8fDE3NTc1MDE4Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        category: "♻️ Zero Waste",
        date: "March 5, 2024",
        readTime: "5 min read",
        author: "Dr. Emily Chen",
        location: "Toronto, ON"
      }
    ];

    return (
      <section id="blogs" className="py-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          {/* Canadian Header - Consistent with other sections */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <BookOpen className="w-4 h-4" />
              <span>Canadian Industry Insights</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-2">
              Stories from Canada's
              <span className="text-primary block">Hospitality Leaders</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Exclusive insights and sustainability stories from across Canada's hospitality landscape.
            </p>
          </div>

          {/* Enhanced Blog Navigation with Controls */}
          <div className="relative">
            {/* Navigation Controls */}
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-slate-800">Latest Insights</h3>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={scrollLeft}
                  className="rounded-full border-primary/30 hover:bg-primary hover:text-white transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={scrollRight}
                  className="rounded-full border-primary/30 hover:bg-primary hover:text-white transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Enhanced Layout for Better Space Utilization */}
            <div className="grid lg:grid-cols-5 gap-6 mb-6">
              {/* Featured Article - takes 2 columns */}
              <div className="lg:col-span-2">
                <Card className="border-0 shadow-xl overflow-hidden bg-gradient-to-r from-white to-gray-50/50 h-full">
                  <div className="relative">
                    <ImageWithFallback
                      src={canadianFeaturedPost.image}
                      alt={canadianFeaturedPost.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-primary-foreground shadow-lg">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-4 text-white text-sm">
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          <span>{canadianFeaturedPost.views}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{canadianFeaturedPost.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <Badge variant="secondary" className="w-fit mb-2 text-xs">{canadianFeaturedPost.category}</Badge>
                    <h3 className="font-bold mb-2 leading-tight line-clamp-2">{canadianFeaturedPost.title}</h3>
                    <p className="text-muted-foreground mb-3 text-sm leading-relaxed line-clamp-2">{canadianFeaturedPost.excerpt}</p>
                    
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        <span>{canadianFeaturedPost.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{canadianFeaturedPost.date}</span>
                      </div>
                    </div>
                    
                    <Button size="sm" className="w-full">
                      Read Article
                      <ArrowRight className="w-3 h-3 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Article Grid - takes 3 columns */}
              <div className="lg:col-span-3">
                <div className="grid grid-cols-1 gap-4">
                  {canadianPosts.map((post, index) => (
                    <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm overflow-hidden">
                      <div className="flex gap-4 p-4">
                        <div className="relative flex-shrink-0">
                          <ImageWithFallback
                            src={post.image}
                            alt={post.title}
                            className="w-20 h-20 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute -top-1 -right-1">
                            <Badge variant="secondary" className="text-xs px-2 py-0.5 bg-white/90 shadow-sm">
                              {post.category}
                            </Badge>
                          </div>
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2 text-sm leading-snug">
                            {post.title}
                          </h3>
                          
                          <p className="text-xs text-muted-foreground mb-2 line-clamp-2 leading-relaxed">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-1">
                                <User className="w-3 h-3" />
                                <span>{post.author}</span>
                              </div>
                              <span className="text-primary">📍 {post.location}</span>
                            </div>
                            
                            <Button variant="ghost" size="sm" className="p-0 h-auto hover:bg-transparent group/btn text-xs">
                              <span className="text-primary">Read</span>
                              <ArrowRight className="w-3 h-3 ml-1 text-primary group-hover/btn:translate-x-0.5 transition-transform" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="blogs" className="py-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <BookOpen className="w-4 h-4" />
            <span>Industry Insights</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-2">
            Latest from Our
            <span className="text-primary block">Blog & Resources</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest trends, insights, and best practices in hospitality furniture design.
          </p>
        </div>

        {/* Featured Article in Hero Layout */}
        <div className="mb-6">
          <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-r from-white to-gray-50/50">
            <div className="grid lg:grid-cols-5 gap-0">
              <div className="lg:col-span-3 relative">
                <ImageWithFallback
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 lg:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground shadow-lg">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    Featured Article
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-4 text-white text-sm">
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>{featuredPost.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2 p-6 lg:p-8 flex flex-col justify-center">
                <Badge variant="secondary" className="w-fit mb-3">{featuredPost.category}</Badge>
                <h3 className="text-xl lg:text-2xl font-bold mb-3 leading-tight">{featuredPost.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{featuredPost.excerpt}</p>
                
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{featuredPost.date}</span>
                  </div>
                </div>
                
                <Button size="sm" className="w-fit">
                  Read Article
                  <ArrowRight className="w-3 h-3 ml-2" />
                </Button>
              </div>
            </div>
          </Card>
        </div>



        {/* Compact Article Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {blogPosts.slice(0, 4).map((post, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm overflow-hidden h-full">
              <div className="flex gap-4 p-4">
                <div className="relative flex-shrink-0">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-24 h-24 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute -top-1 -right-1">
                    <Badge variant="secondary" className="text-xs px-2 py-0.5 bg-white/90 shadow-sm">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2 text-sm leading-snug">
                    {post.title}
                  </h3>
                  
                  <p className="text-xs text-muted-foreground mb-3 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <Button variant="ghost" size="sm" className="p-0 h-auto hover:bg-transparent group/btn text-xs">
                      <span className="text-primary">Read</span>
                      <ArrowRight className="w-3 h-3 ml-1 text-primary group-hover/btn:translate-x-0.5 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Articles
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}