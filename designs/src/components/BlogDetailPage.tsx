import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  ArrowLeft,
  ArrowRight, 
  Calendar, 
  User, 
  Clock, 
  Tag,
  Share2,
  Bookmark,
  Heart,
  MessageCircle,
  ChevronRight,
  Quote,
  CheckCircle,
  Lightbulb,
  TrendingUp,
  Eye,
  ThumbsUp,
  Download,
  Printer,
  ExternalLink
} from "lucide-react";

interface BlogDetailPageProps {
  blogId: string;
  onNavigate?: (page: string, id?: string) => void;
}

export default function BlogDetailPage({ blogId, onNavigate }: BlogDetailPageProps) {
  // Mock data for different blog posts
  const blogPosts = {
    "modern-hotel-furniture-trends-2024": {
      id: "modern-hotel-furniture-trends-2024",
      title: "Modern Hotel Furniture Trends for 2024: Sustainability Meets Luxury",
      subtitle: "",
      author: {
        name: "Sarah Mitchell",
        title: "Senior Interior Designer",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRob3J8ZW58MXx8fHwxNzU2OTk4MzIxfDA&ixlib=rb-4.1.0&q=80&w=150",
        bio: "Sarah has over 12 years of experience in hospitality interior design, specializing in sustainable luxury furniture solutions."
      },
      date: "December 15, 2024",
      readTime: "8 min read",
      category: "Design Trends",
      tags: ["Sustainability", "Modern Design", "Hotel Decor", "2024 Trends", "Eco-Friendly"],
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3RlbCUyMGZ1cm5pdHVyZXxlbnwxfHx8fDE3NTY5OTgzMjF8MA&ixlib=rb-4.1.0&q=80&w=1200",
      views: 2340,
      likes: 127,
      shares: 45,
      content: {
        introduction: "The hospitality industry is experiencing a revolutionary shift towards sustainable luxury. As we enter 2024, hotel furniture design is no longer just about aesthetics—it's about creating spaces that are both environmentally responsible and exceptionally comfortable for guests.",
        keyPoints: [
          "Sustainable materials are becoming the standard, not the exception",
          "Biophilic design elements enhance guest wellness and satisfaction",
          "Modular furniture systems offer flexibility and longevity",
          "Smart technology integration creates seamless guest experiences"
        ],
        sections: [
          {
            heading: "The Rise of Sustainable Materials",
            content: "In 2024, sustainability isn't just a buzzword—it's a business imperative. Hotels are increasingly choosing furniture made from reclaimed wood, recycled metals, and innovative bio-based materials. These choices not only reduce environmental impact but also tell a compelling story that resonates with conscious travelers.",
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTY5OTgzMjF8MA&ixlib=rb-4.1.0&q=80&w=800"
          },
          {
            heading: "Biophilic Design: Bringing Nature Indoors",
            content: "The integration of natural elements into hotel furniture design is more than an aesthetic choice—it's a wellness strategy. From live-edge wood tables to furniture featuring organic shapes and earth-toned upholstery, biophilic design creates spaces that reduce stress and enhance guest comfort.",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTY5OTgzMjF8MA&ixlib=rb-4.1.0&q=80&w=800"
          },
          {
            heading: "Modular Systems for Future-Proof Design",
            content: "Hotels are investing in modular furniture systems that can be reconfigured as needs change. This approach not only maximizes space efficiency but also extends the lifespan of furniture investments, aligning with both sustainability goals and budget considerations.",
            image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTY5OTgzMjF8MA&ixlib=rb-4.1.0&q=80&w=800"
          },
          {
            heading: "Technology Integration Done Right",
            content: "The modern hotel guest expects seamless technology integration. Furniture pieces now incorporate wireless charging stations, USB ports, and smart lighting controls—all while maintaining clean, elegant aesthetics that don't compromise the overall design vision.",
            image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTY5OTgzMjF8MA&ixlib=rb-4.1.0&q=80&w=800"
          }
        ],
        conclusion: "As we progress through 2024, the most successful hotels will be those that embrace these sustainable luxury trends. By choosing furniture that combines environmental responsibility with exceptional design and functionality, hoteliers can create spaces that not only attract conscious travelers but also contribute to a more sustainable future for the hospitality industry.",
        callToAction: "Ready to transform your hotel with sustainable luxury furniture? Our team of experts can help you navigate these trends and create spaces that delight guests while supporting your sustainability goals."
      }
    },
    // Add more blog posts here...
  };

  const relatedPosts = [
    {
      id: "choosing-right-furniture-hotel-rooms",
      title: "How to Choose the Right Furniture for Different Hotel Room Types",
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTY5OTgzMjF8MA&ixlib=rb-4.1.0&q=80&w=400",
      category: "Buying Guide",
      readTime: "6 min read"
    },
    {
      id: "custom-furniture-guest-experience",
      title: "The Impact of Custom Furniture on Guest Experience",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTY5OTgzMjF8MA&ixlib=rb-4.1.0&q=80&w=400",
      category: "Guest Experience",
      readTime: "5 min read"
    },
    {
      id: "small-hotel-spaces-smart-solutions",
      title: "Maximizing Small Hotel Spaces with Smart Furniture Solutions",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTY5OTgzMjF8MA&ixlib=rb-4.1.0&q=80&w=400",
      category: "Space Planning",
      readTime: "7 min read"
    }
  ];

  const currentPost = blogPosts[blogId as keyof typeof blogPosts];

  if (!currentPost) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
          <Button onClick={() => onNavigate?.("blog")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <button 
                onClick={() => onNavigate?.("home")}
                className="hover:text-primary transition-colors"
              >
                Home
              </button>
              <ChevronRight className="w-4 h-4" />
              <button 
                onClick={() => onNavigate?.("blog")}
                className="hover:text-primary transition-colors"
              >
                Blog
              </button>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground">{currentPost.category}</span>
            </div>
          </div>
        </div>

        {/* Hero Image and Title */}
        <div className="relative h-96 lg:h-[500px]">
          <ImageWithFallback
            src={currentPost.image}
            alt={currentPost.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto">
              <div className="max-w-4xl">
                <Badge className="bg-primary text-primary-foreground mb-4">
                  {currentPost.category}
                </Badge>
                <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4 leading-tight line-clamp-2">
                  {currentPost.title}
                </h1>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <div className="absolute top-4 left-4">
            <Button 
              variant="secondary" 
              size="sm"
              onClick={() => onNavigate?.("blog")}
              className="bg-white/90 hover:bg-white text-foreground"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </div>
        </div>

        {/* Article Meta - Below Banner */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Sustainable Luxury: The Future of Hotel Furniture Design
              </h2>
              
              {/* Article Meta */}
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <ImageWithFallback
                    src={currentPost.author.avatar}
                    alt={currentPost.author.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex flex-col">
                    <span className="text-foreground font-medium">{currentPost.author.name}</span>
                    <span className="text-sm">{currentPost.author.title}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{currentPost.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{currentPost.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  <span>{currentPost.views.toLocaleString()} views</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Article Content */}
            <div className="lg:col-span-3">
              <div className="max-w-none prose-lg">
                {/* Article Actions */}
                <div className="flex items-center justify-between mb-8 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-4">
                    <Button size="sm" variant="outline" className="flex items-center gap-2">
                      <Heart className="w-4 h-4" />
                      <span>{currentPost.likes}</span>
                    </Button>
                    <Button size="sm" variant="outline" className="flex items-center gap-2">
                      <Share2 className="w-4 h-4" />
                      Share
                    </Button>
                    <Button size="sm" variant="outline" className="flex items-center gap-2">
                      <Bookmark className="w-4 h-4" />
                      Save
                    </Button>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="ghost">
                      <Printer className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Introduction */}
                <div className="mb-12">
                  <div className="bg-accent/50 border-l-4 border-primary p-6 rounded-r-lg mb-8">
                    <Quote className="w-8 h-8 text-primary mb-4" />
                    <p className="text-lg italic leading-relaxed">
                      {currentPost.content.introduction}
                    </p>
                  </div>
                </div>

                {/* Key Points */}
                <Card className="mb-12 border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-primary" />
                      Key Takeaways
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {currentPost.content.keyPoints.map((point, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-lg">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Article Sections */}
                {currentPost.content.sections.map((section, index) => (
                  <div key={index} className="mb-16">
                    <h2 className="text-3xl font-bold mb-6 text-foreground">
                      {section.heading}
                    </h2>
                    
                    <div className="grid lg:grid-cols-2 gap-8 items-center mb-8">
                      <div>
                        <p className="text-lg leading-relaxed text-muted-foreground">
                          {section.content}
                        </p>
                      </div>
                      <div className="relative">
                        <ImageWithFallback
                          src={section.image}
                          alt={section.heading}
                          className="w-full h-64 object-cover rounded-lg shadow-lg"
                        />
                      </div>
                    </div>
                    
                    {index < currentPost.content.sections.length - 1 && (
                      <Separator className="mt-12" />
                    )}
                  </div>
                ))}

                {/* Conclusion */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold mb-6">Conclusion</h2>
                  <div className="bg-gradient-to-r from-primary/5 to-accent/50 p-8 rounded-lg">
                    <p className="text-lg leading-relaxed mb-6">
                      {currentPost.content.conclusion}
                    </p>
                    <div className="border-t pt-6">
                      <p className="text-lg font-medium text-primary">
                        {currentPost.content.callToAction}
                      </p>
                      <div className="flex gap-4 mt-4">
                        <Button 
                          onClick={() => onNavigate?.("portfolio")}
                          className="bg-primary hover:bg-primary/90 text-primary-foreground"
                        >
                          View Our Portfolio
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                        <Button 
                          variant="outline"
                          onClick={() => onNavigate?.("contact")}
                        >
                          Contact Our Experts
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="mb-12">
                  <h3 className="text-xl font-bold mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {currentPost.tags.map((tag, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Author Bio */}
                <Card className="mb-12 border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <ImageWithFallback
                        src={currentPost.author.avatar}
                        alt={currentPost.author.name}
                        className="w-20 h-20 rounded-full flex-shrink-0"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-1">{currentPost.author.name}</h3>
                        <p className="text-primary font-medium mb-3">{currentPost.author.title}</p>
                        <p className="text-muted-foreground leading-relaxed">
                          {currentPost.author.bio}
                        </p>
                        <div className="flex gap-2 mt-4">
                          <Button size="sm" variant="outline">
                            Follow
                          </Button>
                          <Button size="sm" variant="outline">
                            More Articles
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                {/* Table of Contents */}
                <Card className="border-0 shadow-md">
                  <CardHeader>
                    <CardTitle className="text-lg">Table of Contents</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <a href="#introduction" className="block p-2 text-sm hover:bg-primary/5 hover:text-primary rounded transition-colors">
                      Introduction
                    </a>
                    {currentPost.content.sections.map((section, index) => (
                      <a 
                        key={index}
                        href={`#section-${index}`}
                        className="block p-2 text-sm hover:bg-primary/5 hover:text-primary rounded transition-colors"
                      >
                        {section.heading}
                      </a>
                    ))}
                    <a href="#conclusion" className="block p-2 text-sm hover:bg-primary/5 hover:text-primary rounded transition-colors">
                      Conclusion
                    </a>
                  </CardContent>
                </Card>

                {/* Article Stats */}
                <Card className="border-0 shadow-md">
                  <CardHeader>
                    <CardTitle className="text-lg">Article Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Eye className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">Views</span>
                      </div>
                      <span className="font-medium">{currentPost.views.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <ThumbsUp className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">Likes</span>
                      </div>
                      <span className="font-medium">{currentPost.likes}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Share2 className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">Shares</span>
                      </div>
                      <span className="font-medium">{currentPost.shares}</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Newsletter */}
                <Card className="border-0 shadow-md bg-gradient-to-br from-primary/5 to-accent/50">
                  <CardContent className="p-6 text-center">
                    <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-bold mb-2">Stay Updated</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Get the latest hospitality insights
                    </p>
                    <input 
                      type="email" 
                      placeholder="Your email"
                      className="w-full px-3 py-2 border border-border rounded-lg text-sm mb-3"
                    />
                    <Button size="sm" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Subscribe
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Related Articles</h2>
            <p className="text-lg text-muted-foreground">
              Continue exploring our hospitality insights
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((post) => (
              <Card 
                key={post.id} 
                className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                onClick={() => onNavigate?.("blog-detail", post.id)}
              >
                <div className="relative overflow-hidden h-48">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                    {post.category}
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                    <Button size="sm" variant="ghost" className="p-0 h-auto">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comments Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-8">
              <MessageCircle className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">Comments & Discussion</h2>
            </div>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <MessageCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Join the Conversation</h3>
                <p className="text-muted-foreground mb-6">
                  Share your thoughts and insights with our community of hospitality professionals.
                </p>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Start Discussion
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}