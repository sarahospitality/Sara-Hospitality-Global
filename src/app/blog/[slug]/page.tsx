"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
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

// Badge component
const Badge = ({ children, variant = "default", className = "", ...props }: { children: React.ReactNode; variant?: "default" | "outline" | "secondary"; className?: string; [key: string]: unknown }) => {
  const baseClasses = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium";
  const variantClasses = {
    default: "bg-[#f26d35] text-white",
    outline: "border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50",
    secondary: "bg-gray-100 text-gray-900"
  };
  
  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </span>
  );
};

// Separator component
const Separator = ({ className = "" }: { className?: string }) => (
  <div className={`h-px bg-gray-200 ${className}`} />
);


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


export default function BlogDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  // Mock data for different blog posts
  const blogPosts = {
    "modern-hotel-furniture-trends-2024": {
      id: "modern-hotel-furniture-trends-2024",
      title: "Modern Hotel Furniture Trends for 2024: Sustainability Meets Luxury",
      subtitle: "Sustainable Luxury: The Future of Hotel Furniture Design",
      author: {
        name: "Sarah Mitchell",
        title: "Senior Interior Designer",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGJ1c2luZXNzJTIwaGVhZHNob3R8ZW58MXx8fHwxNzU2OTk4MzIxfDA&ixlib=rb-4.1.0&q=80&w=400",
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
    "choosing-right-furniture-hotel-rooms": {
      id: "choosing-right-furniture-hotel-rooms",
      title: "How to Choose the Right Furniture for Different Hotel Room Types",
      subtitle: "A comprehensive guide to selecting appropriate furniture for various hotel accommodations",
      author: {
        name: "Michael Chen",
        title: "Hotel Design Consultant",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBidXNpbmVzcyUyMGhlYWRzaG90fGVufDF8fHwxNzU2OTk4MzIxfDA&ixlib=rb-4.1.0&q=80&w=400",
        bio: "Michael is a seasoned hotel design consultant with 15 years of experience in hospitality interior design and furniture selection."
      },
      date: "December 12, 2024",
      readTime: "6 min read",
      category: "Buying Guide",
      tags: ["Hotel Rooms", "Furniture Selection", "Interior Design"],
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTY5OTgzMjF8MA&ixlib=rb-4.1.0&q=80&w=1200",
      views: 1890,
      likes: 95,
      shares: 32,
      content: {
        introduction: "Selecting the right furniture for different hotel room types is crucial for creating memorable guest experiences. This comprehensive guide will help you make informed decisions that balance aesthetics, functionality, and budget considerations.",
        keyPoints: [
          "Understand the specific needs of each room type",
          "Consider guest demographics and preferences",
          "Balance style with durability and maintenance",
          "Plan for future flexibility and upgrades"
        ],
        sections: [
          {
            heading: "Standard Room Furniture Essentials",
            content: "Standard rooms require furniture that maximizes space while providing comfort. Focus on multi-functional pieces like storage beds, compact desks, and space-saving wardrobes that enhance the guest experience without overwhelming the room.",
            image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTY5OTgzMjF8MA&ixlib=rb-4.1.0&q=80&w=800"
          },
          {
            heading: "Suite and Luxury Room Considerations",
            content: "Luxury suites demand premium furniture that reflects the hotel's brand and provides exceptional comfort. Invest in high-quality materials, custom pieces, and sophisticated design elements that create an unforgettable experience.",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTY5OTgzMjF8MA&ixlib=rb-4.1.0&q=80&w=800"
          }
        ],
        conclusion: "Choosing the right furniture for different hotel room types requires careful consideration of guest needs, brand positioning, and operational requirements. By following these guidelines, you can create spaces that delight guests and support your business goals.",
        callToAction: "Need help selecting furniture for your hotel rooms? Our design experts can provide personalized recommendations based on your specific requirements and budget."
      }
    },
    "custom-furniture-guest-experience": {
      id: "custom-furniture-guest-experience",
      title: "The Impact of Custom Furniture on Guest Experience",
      subtitle: "Learn how personalized furniture solutions can enhance guest satisfaction",
      author: {
        name: "Emma Rodriguez",
        title: "Guest Experience Specialist",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGJ1c2luZXNzJTIwaGVhZHNob3R8ZW58MXx8fHwxNzU2OTk4MzIxfDA&ixlib=rb-4.1.0&q=80&w=400",
        bio: "Emma specializes in guest experience optimization and has helped over 200 hotels improve their guest satisfaction scores through strategic furniture choices."
      },
      date: "December 10, 2024",
      readTime: "5 min read",
      category: "Guest Experience",
      tags: ["Custom Furniture", "Guest Satisfaction", "Hospitality"],
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTY5OTgzMjF8MA&ixlib=rb-4.1.0&q=80&w=1200",
      views: 1456,
      likes: 78,
      shares: 28,
      content: {
        introduction: "Custom furniture plays a pivotal role in creating unique guest experiences that set your hotel apart from the competition. This article explores how personalized furniture solutions can significantly impact guest satisfaction and loyalty.",
        keyPoints: [
          "Custom furniture creates unique brand experiences",
          "Personalized solutions improve guest comfort",
          "Quality custom pieces increase guest loyalty",
          "Strategic furniture choices boost online reviews"
        ],
        sections: [
          {
            heading: "Creating Memorable First Impressions",
            content: "The moment guests enter their room, custom furniture sets the tone for their entire stay. Unique pieces that reflect your brand's personality create lasting impressions and encourage guests to share their experience on social media.",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTY5OTgzMjF8MA&ixlib=rb-4.1.0&q=80&w=800"
          },
          {
            heading: "Enhancing Comfort and Functionality",
            content: "Custom furniture allows you to address specific guest needs and preferences. From ergonomic workstations for business travelers to comfortable seating for leisure guests, personalized solutions ensure every guest feels valued and comfortable.",
            image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTY5OTgzMjF8MA&ixlib=rb-4.1.0&q=80&w=800"
          }
        ],
        conclusion: "Investing in custom furniture is an investment in guest satisfaction and brand differentiation. Hotels that prioritize personalized furniture solutions consistently achieve higher guest satisfaction scores and stronger brand loyalty.",
        callToAction: "Ready to enhance your guest experience with custom furniture? Our team can help you design and implement personalized solutions that reflect your brand and delight your guests."
      }
    }
  };

  // All available blog posts for related articles
  const allBlogPosts = [
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
    },
    {
      id: "restaurant-bar-furniture-dining-atmosphere",
      title: "Restaurant and Bar Furniture: Creating the Perfect Atmosphere",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTY5OTgzMjF8MA&ixlib=rb-4.1.0&q=80&w=400",
      category: "Restaurant Design",
      readTime: "6 min read"
    },
    {
      id: "maintenance-tips-long-lasting-hotel-furniture",
      title: "Maintenance Tips for Long-lasting Hotel Furniture",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTY5OTgzMjF8MA&ixlib=rb-4.1.0&q=80&w=400",
      category: "Maintenance",
      readTime: "4 min read"
    },
    {
      id: "luxury-hotel-furniture-trends-2024",
      title: "Luxury Hotel Furniture Trends: Elevating Guest Experience",
      image: "https://images.unsplash.com/photo-1590490359854-dfba19688d70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTY5OTgzMjF8MA&ixlib=rb-4.1.0&q=80&w=400",
      category: "Design Trends",
      readTime: "5 min read"
    },
    // Additional posts for better related article coverage
    {
      id: "sustainable-hotel-design-guide",
      title: "Complete Guide to Sustainable Hotel Design Practices",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTY5OTgzMjF8MA&ixlib=rb-4.1.0&q=80&w=400",
      category: "Design Trends",
      readTime: "7 min read"
    },
    {
      id: "hotel-room-furniture-buying-guide",
      title: "Hotel Room Furniture Buying Guide: What to Consider",
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTY5OTgzMjF8MA&ixlib=rb-4.1.0&q=80&w=400",
      category: "Buying Guide",
      readTime: "8 min read"
    },
    {
      id: "enhancing-guest-satisfaction-furniture",
      title: "Enhancing Guest Satisfaction Through Strategic Furniture Choices",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTY5OTgzMjF8MA&ixlib=rb-4.1.0&q=80&w=400",
      category: "Guest Experience",
      readTime: "6 min read"
    },
    {
      id: "compact-hotel-room-solutions",
      title: "Compact Hotel Room Solutions: Maximizing Every Square Foot",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTY5OTgzMjF8MA&ixlib=rb-4.1.0&q=80&w=400",
      category: "Space Planning",
      readTime: "5 min read"
    },
    {
      id: "restaurant-furniture-selection-tips",
      title: "Restaurant Furniture Selection: Tips for Creating the Perfect Ambiance",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTY5OTgzMjF8MA&ixlib=rb-4.1.0&q=80&w=400",
      category: "Restaurant Design",
      readTime: "6 min read"
    },
    {
      id: "hotel-furniture-maintenance-schedule",
      title: "Hotel Furniture Maintenance Schedule: Keep Your Investment Looking New",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTY5OTgzMjF8MA&ixlib=rb-4.1.0&q=80&w=400",
      category: "Maintenance",
      readTime: "4 min read"
    }
  ];

  const currentPost = blogPosts[slug as keyof typeof blogPosts];

  // Filter related posts based on current post's category
  const relatedPosts = allBlogPosts
    .filter(post => post.category === currentPost?.category && post.id !== slug)
    .slice(0, 3); // Show maximum 3 related articles

  if (!currentPost) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
          <Link href="/blog">
            <Button className="bg-[#f26d35] hover:bg-[#f26d35]/90 text-white">
              <ArrowLeft className="w-4 h-4 mr-2 animate-pulse" style={{ animation: 'arrowMoveBack 2s ease-in-out infinite' }} />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-6 sm:px-4 py-2 sm:py-4">
            <motion.div 
              className="flex items-center gap-2 text-sm text-gray-600"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <Link href="/" className="hover:text-[#f26d35] transition-colors">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/blog" className="hover:text-[#f26d35] transition-colors">
                Blog
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Hero Image and Title */}
        <div className="relative h-64 sm:h-96 lg:h-[500px]">
          <ImageWithFallback
            src={currentPost.image}
            alt={currentPost.title}
            className="w-full h-full object-cover"
            width={800}
            height={500}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto">
              <div className="max-w-4xl">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                  {currentPost.title}
                </h1>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <div className="absolute top-4 left-4">
            <Link href="/blog">
              <Button 
                variant="secondary" 
                size="sm"
                className="bg-white/90 hover:bg-white text-gray-900"
              >
                <ArrowLeft className="w-4 h-4 mr-2 animate-pulse" style={{ animation: 'arrowMoveBack 2s ease-in-out infinite' }} />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>

        {/* Article Meta - Below Banner */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-6 sm:px-4 py-4 sm:py-8">
            <div className="max-w-4xl">
              
              {/* Article Meta */}
              <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-4 sm:gap-6 text-gray-600">
                <div className="flex items-center gap-3">
                  <ImageWithFallback
                    src={currentPost.author.avatar}
                    alt={currentPost.author.name}
                    className="w-12 h-12 rounded-full border-2 border-[#f26d35]/20"
                    width={48}
                    height={48}
                  />
                  <div className="flex flex-col">
                    <span className="text-gray-900 font-semibold text-lg">{currentPost.author.name}</span>
                    <span className="text-sm text-[#f26d35] font-medium">{currentPost.author.title}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm sm:text-base">
                  <Calendar className="w-4 h-4" />
                  <span>{currentPost.date}</span>
                  <span className="text-gray-400">|</span>
                  <Clock className="w-4 h-4" />
                  <span>{currentPost.readTime}</span>
                  <span className="text-gray-400">|</span>
                  <Eye className="w-4 h-4" />
                  <span>{currentPost.views.toLocaleString()} views</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-6 sm:py-12">
        <div className="container mx-auto px-6 sm:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Article Content */}
            <div className="lg:col-span-3">
              <div className="max-w-none prose-lg">

                {/* Introduction */}
                <div className="mb-12">
                  <div className="bg-[#f26d35]/5 border-l-4 border-[#f26d35] p-4 sm:p-6 rounded-r-lg mb-6 sm:mb-8">
                    <Quote className="w-8 h-8 text-[#f26d35] mb-4" />
                    <p className="text-base sm:text-lg italic leading-relaxed">
                      {currentPost.content.introduction}
                    </p>
                  </div>
                </div>

                {/* Key Points */}
                <Card className="mb-8 sm:mb-12 border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-[#f26d35]" />
                      Key Takeaways
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {currentPost.content.keyPoints.map((point, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-[#f26d35] mt-0.5 flex-shrink-0" />
                          <span className="text-base sm:text-lg">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Article Sections */}
                {currentPost.content.sections.map((section, index) => (
                  <motion.div 
                    key={index} 
                    className="mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-900">
                      {section.heading}
                    </h2>
                    
                    {/* Content first */}
                    <div className="mb-8">
                      <p className="text-base sm:text-lg leading-relaxed text-gray-600 mb-4 sm:mb-6">
                        {section.content}
                      </p>
                      
                      {/* Additional content for each section */}
                      <div className="prose prose-lg max-w-none">
                        {index === 0 && (
                          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 sm:p-6 rounded-r-lg mb-4 sm:mb-6">
                            <h4 className="text-base sm:text-lg font-semibold text-blue-900 mb-2 sm:mb-3">Why This Matters</h4>
                            <p className="text-sm sm:text-base text-blue-800 leading-relaxed">
                              Sustainable materials not only benefit the environment but also create unique selling points for hotels. 
                              Guests increasingly value properties that demonstrate environmental responsibility, leading to higher 
                              satisfaction scores and positive reviews.
                            </p>
                          </div>
                        )}
                        
                        {index === 1 && (
                          <div className="bg-green-50 border-l-4 border-green-400 p-4 sm:p-6 rounded-r-lg mb-4 sm:mb-6">
                            <h4 className="text-base sm:text-lg font-semibold text-green-900 mb-2 sm:mb-3">Implementation Tips</h4>
                            <p className="text-sm sm:text-base text-green-800 leading-relaxed">
                              Start small by incorporating natural textures in accent pieces. Consider using reclaimed wood for 
                              headboards or live-edge tables in common areas. These elements create visual interest while 
                              maintaining the sophisticated aesthetic guests expect.
                            </p>
                          </div>
                        )}
                        
                        {index === 2 && (
                          <div className="bg-purple-50 border-l-4 border-purple-400 p-4 sm:p-6 rounded-r-lg mb-4 sm:mb-6">
                            <h4 className="text-base sm:text-lg font-semibold text-purple-900 mb-2 sm:mb-3">Cost Considerations</h4>
                            <p className="text-sm sm:text-base text-purple-800 leading-relaxed">
                              While modular systems may have higher upfront costs, they offer long-term savings through 
                              reduced replacement needs and increased flexibility. Many hotels see ROI within 3-5 years 
                              through reduced maintenance and reconfiguration costs.
                            </p>
                          </div>
                        )}
                        
                        {index === 3 && (
                          <div className="bg-orange-50 border-l-4 border-orange-400 p-4 sm:p-6 rounded-r-lg mb-4 sm:mb-6">
                            <h4 className="text-base sm:text-lg font-semibold text-orange-900 mb-2 sm:mb-3">Future Trends</h4>
                            <p className="text-sm sm:text-base text-orange-800 leading-relaxed">
                              Technology integration is evolving rapidly. Look for furniture with built-in wireless charging, 
                              smart lighting controls, and even voice-activated features. These innovations enhance guest 
                              convenience while maintaining elegant design aesthetics.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Image below content */}
                    <div className="relative mb-8">
                      <ImageWithFallback
                        src={section.image}
                        alt={section.heading}
                        className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-lg"
                        width={800}
                        height={320}
                      />
                      <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm">
                        {section.heading}
                      </div>
                    </div>
                    
                    {index < currentPost.content.sections.length - 1 && (
                      <Separator className="mt-12" />
                    )}
                  </motion.div>
                ))}

                {/* Conclusion */}
                <div className="mb-8 sm:mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Conclusion</h2>
                  <div className="bg-gradient-to-r from-[#f26d35]/5 to-gray-100 p-4 sm:p-8 rounded-lg">
                    <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                      {currentPost.content.conclusion}
                    </p>
                    <div className="border-t pt-6">
                      <p className="text-base sm:text-lg font-medium text-[#f26d35]">
                        {currentPost.content.callToAction}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4">
                        <Link href="/portfolio" className="w-full sm:w-auto">
                          <Button className="bg-[#f26d35] hover:bg-[#f26d35]/90 text-white w-full sm:w-auto text-base sm:text-sm py-3 sm:py-2">
                            View Our Portfolio
                            <ArrowRight className="w-4 h-4 ml-2 animate-pulse" style={{ animation: 'arrowMove 2s ease-in-out infinite' }} />
                          </Button>
                        </Link>
                        <Link href="/contact" className="w-full sm:w-auto">
                          <Button variant="outline" className="border-[#f26d35] text-[#f26d35] hover:bg-[#f26d35]/10 w-full sm:w-auto text-base sm:text-sm py-3 sm:py-2">
                            Contact Our Experts
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="mb-8 sm:mb-12">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Tags</h3>
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

                {/* Author Bio */}
                <Card className="mb-8 sm:mb-12 border-0 shadow-lg bg-gradient-to-r from-[#f26d35]/5 to-gray-50">
                  <CardContent className="p-4 sm:p-8">
                    <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                      <div className="relative">
                        <ImageWithFallback
                          src={currentPost.author.avatar}
                          alt={currentPost.author.name}
                          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex-shrink-0 border-4 border-[#f26d35]/20"
                          width={96}
                          height={96}
                        />
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#f26d35] rounded-full flex items-center justify-center">
                          <User className="w-3 h-3 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="mb-3 sm:mb-4">
                          <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900">{currentPost.author.name}</h3>
                          <p className="text-[#f26d35] font-semibold text-base sm:text-lg mb-2 sm:mb-3">{currentPost.author.title}</p>
                        </div>
                        <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-4 sm:mb-6">
                          {currentPost.author.bio}
                        </p>
                        <div className="flex gap-3">
                          <Button size="sm" className="bg-[#f26d35] hover:bg-[#f26d35]/90 text-white">
                            <User className="w-4 h-4 mr-2" />
                            Follow Author
                          </Button>
                          <Button size="sm" variant="outline" className="border-[#f26d35] text-[#f26d35] hover:bg-[#f26d35]/10">
                            <MessageCircle className="w-4 h-4 mr-2" />
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
              <div className="sm:sticky sm:top-8 space-y-4 sm:space-y-6">
                {/* Table of Contents */}
                <Card className="border-0 shadow-md">
                  <CardHeader>
                    <CardTitle className="text-base sm:text-lg">Table of Contents</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <a href="#introduction" className="block p-2 text-sm hover:bg-[#f26d35]/5 hover:text-[#f26d35] rounded transition-colors">
                      Introduction
                    </a>
                    {currentPost.content.sections.map((section, index) => (
                      <a 
                        key={index}
                        href={`#section-${index}`}
                        className="block p-2 text-sm hover:bg-[#f26d35]/5 hover:text-[#f26d35] rounded transition-colors"
                      >
                        {section.heading}
                      </a>
                    ))}
                    <a href="#conclusion" className="block p-2 text-sm hover:bg-[#f26d35]/5 hover:text-[#f26d35] rounded transition-colors">
                      Conclusion
                    </a>
                  </CardContent>
                </Card>

                {/* Article Stats */}
                <Card className="border-0 shadow-md">
                  <CardHeader>
                    <CardTitle className="text-base sm:text-lg">Article Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Eye className="w-4 h-4 text-gray-500" />
                        <span className="text-sm">Views</span>
                      </div>
                      <span className="font-medium">{currentPost.views.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <ThumbsUp className="w-4 h-4 text-gray-500" />
                        <span className="text-sm">Likes</span>
                      </div>
                      <span className="font-medium">{currentPost.likes}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Share2 className="w-4 h-4 text-gray-500" />
                        <span className="text-sm">Shares</span>
                      </div>
                      <span className="font-medium">{currentPost.shares}</span>
                    </div>
                  </CardContent>
                </Card>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-6 sm:py-12 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-4">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Related Articles</h2>
            <p className="text-base sm:text-lg text-gray-600">
              Continue exploring our hospitality insights
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {relatedPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/blog/${post.id}`}>
                  <Card className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                    <div className="relative overflow-hidden h-48">
                      <ImageWithFallback
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        width={300}
                        height={192}
                      />
                      <Badge className="absolute top-4 left-4 bg-[#f26d35]/90 text-white">
                        {post.category}
                      </Badge>
                    </div>
                    
                    <CardContent className="p-4 sm:p-6">
                      <h3 className="font-bold text-base sm:text-lg mb-3 group-hover:text-[#f26d35] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                        <Button size="sm" variant="ghost" className="p-0 h-auto">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1 animate-pulse" style={{ animation: 'arrowMove 2s ease-in-out infinite' }} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
