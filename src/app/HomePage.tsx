"use client";

import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';
import { 
  Globe, 
  ArrowRight, 
  Star, 
  Quote, 
  MapPin,
  Clock,
  BookOpen,
  Calendar,
  User,
  Eye,
  Box,
  Coffee,
  Users,
  Bath,
  ChevronLeft,
  ChevronRight,
  Award,
  Shield,
  Truck,
  Wrench,
  Headphones,
  Zap,
  Target,
  ExternalLink,
  TrendingUp
} from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ContactSection } from '@/components/ContactSection';
import { getPortfolioItemsByIds, PortfolioItem, getPortfolioImageUrl, extractSlug } from '@/lib/portfolio';
import { getBlogPostFromDB, BlogPostDetail } from '@/lib/blog-data';

// ============================================
// PORTFOLIO CONFIGURATION
// Update these IDs to change which portfolios display on the home page
// ============================================
const FEATURED_PORTFOLIO_ID = 1;        // Main featured portfolio (large display)
const GRID_PORTFOLIO_IDS = [5, 6, 7];   // Portfolio items in grid (3 cards below featured)

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerPage = 3;
  
  // Portfolio state management
  const [portfolioLoading, setPortfolioLoading] = useState(true);
  const [featuredPortfolio, setFeaturedPortfolio] = useState<PortfolioItem | null>(null);
  const [gridPortfolios, setGridPortfolios] = useState<PortfolioItem[]>([]);

  // Blog state management
  const [featuredBlogPost, setFeaturedBlogPost] = useState<BlogPostDetail | null>(null);
  const [gridBlogPost1, setGridBlogPost1] = useState<BlogPostDetail | null>(null);
  const [gridBlogPost2, setGridBlogPost2] = useState<BlogPostDetail | null>(null);
  const [gridBlogPost3, setGridBlogPost3] = useState<BlogPostDetail | null>(null);
  const [gridBlogPost4, setGridBlogPost4] = useState<BlogPostDetail | null>(null);

  // Fetch portfolio data on component mount
  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        setPortfolioLoading(true);
        
        // Fetch all required portfolio items in one call
        const allIds = [FEATURED_PORTFOLIO_ID, ...GRID_PORTFOLIO_IDS];
        const portfolioData = await getPortfolioItemsByIds(allIds);
        
        // Separate featured and grid portfolios
        const featured = portfolioData.find(item => item.id === FEATURED_PORTFOLIO_ID);
        const grid = GRID_PORTFOLIO_IDS
          .map(id => portfolioData.find(item => item.id === id))
          .filter((item): item is PortfolioItem => item !== undefined);
        
        setFeaturedPortfolio(featured || null);
        setGridPortfolios(grid);
        
        if (!featured) {
          console.warn(`âš ï¸  Featured portfolio with ID ${FEATURED_PORTFOLIO_ID} not found`);
        }
        if (grid.length < GRID_PORTFOLIO_IDS.length) {
          console.warn(`âš ï¸  Some grid portfolio items not found. Expected ${GRID_PORTFOLIO_IDS.length}, got ${grid.length}`);
        }
      } catch (error) {
        console.error('âŒ Error loading portfolio data for home page:', error);
      } finally {
        setPortfolioLoading(false);
      }
    };

    fetchPortfolioData();
  }, []);

  // Fetch blog data on component mount
  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        // Static URLs - can be easily updated later
        const FEATURED_BLOG_SLUG = "how-to-choose-right-hotel-casegoods-manufacturer-partner";
        
        // Grid blog URLs - currently using same URL, can be updated individually later
        const GRID_BLOG_SLUG_1 = "the-guide-to-modern-hospitality-outdoor-furniture-for-hotels-resorts";
        const GRID_BLOG_SLUG_2 = "the-guide-to-modern-hospitality-outdoor-furniture-for-hotels-resorts";
        const GRID_BLOG_SLUG_3 = "the-guide-to-modern-hospitality-outdoor-furniture-for-hotels-resorts";
        const GRID_BLOG_SLUG_4 = "the-guide-to-modern-hospitality-outdoor-furniture-for-hotels-resorts";
        
        // Fetch featured blog post
        const featuredPost = await getBlogPostFromDB(FEATURED_BLOG_SLUG);
        if (featuredPost) {
          setFeaturedBlogPost(featuredPost);
        }
        
        // Fetch grid blog posts individually
        const [gridPost1, gridPost2, gridPost3, gridPost4] = await Promise.all([
          getBlogPostFromDB(GRID_BLOG_SLUG_1),
          getBlogPostFromDB(GRID_BLOG_SLUG_2),
          getBlogPostFromDB(GRID_BLOG_SLUG_3),
          getBlogPostFromDB(GRID_BLOG_SLUG_4)
        ]);
        
        if (gridPost1) setGridBlogPost1(gridPost1);
        if (gridPost2) setGridBlogPost2(gridPost2);
        if (gridPost3) setGridBlogPost3(gridPost3);
        if (gridPost4) setGridBlogPost4(gridPost4);
        
      } catch (error) {
        console.error('❌ Error loading blog data for home page:', error);
      }
    };

    fetchBlogData();
  }, []);
  
  const categories = [
    {
      icon: Bath,
      title: "Bathroom Vanities",
      description: "Custom vanities, mirrors, and storage solutions for hotel bathrooms with premium finishes",
      image: "/home/Bathroom-Vanities.webp",
      features: ["Water-resistant materials", "Custom sizing options", "Integrated storage", "LED lighting systems"]
    },
    {
      icon: Coffee,
      title: "Soft Seating",
      description: "Comfortable sofas, chairs, and lounge furniture for lobbies, guest rooms, and common areas",
      image: "/home/Soft-Seating.webp",
      features: ["Premium upholstery", "Modular designs", "Ergonomic support", "Easy maintenance"]
    },
    {
      icon: Users,
      title: "Countertops & Cabinets",
      description: "High-quality countertops, cabinets, and storage solutions for kitchens, bars, and workspaces",
      image: "/home/Countertops.webp",
      features: ["Durable materials", "Custom configurations", "Space optimization", "Modern finishes"]
    },
    {
      icon: Box,
      title: "Hospitality Casegoods",
      description: "Premium bedroom furniture including beds, nightstands, dressers, and wardrobes for guest rooms",
      image: "/home/Hospitality-Casegoods.webp",
      features: ["Solid wood construction", "Custom headboards", "Integrated storage", "Luxury finishes"]
    },
    {
      icon: Coffee,
      title: "Outdoor Furniture",
      description: "Weather-resistant patio, poolside, and garden furniture designed for hospitality environments",
      image: "/home/Outdoor-Furniture.webp",
      features: ["All-weather materials", "UV resistant finishes", "Pool furniture sets", "Garden seating"]
    },
    {
      icon: Users,
      title: "Fixture & Equipment",
      description: "Professional fixtures, lighting, and specialized equipment for hospitality environments",
      image: "/home/Fixture-&-Equipment.webp",
      features: ["LED lighting systems", "Specialized fixtures", "Commercial equipment", "Energy efficient"]
    }
  ];

  const totalSlides = Math.ceil(categories.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const reasons = [
    {
      icon: Award,
      title: "25+ Years Expertise",
      description: "Decades of experience in hotel furniture manufacturing with deep industry knowledge.",
      metric: "500+ Hotels",
      color: "bg-gray-100 text-[#f26d35]"
    },
    {
      icon: Shield,
      title: "Premium Quality",
      description: "Rigorous quality control and premium materials ensure long-lasting durability.",
      metric: "99.8% Quality Rate",
      color: "bg-gray-100 text-[#f26d35]"
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "Reliable delivery schedules with real-time tracking and project management.",
      metric: "98% On-Time",
      color: "bg-gray-100 text-[#f26d35]"
    },
    {
      icon: Wrench,
      title: "Custom Design",
      description: "Bespoke solutions tailored to your brand identity and space requirements.",
      metric: "1000+ Designs",
      color: "bg-gray-100 text-[#f26d35]"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Worldwide shipping and installation services with local support teams.",
      metric: "50+ Countries",
      color: "bg-gray-100 text-[#f26d35]"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Dedicated customer service and post-installation support whenever you need it.",
      metric: "4.9/5 Rating",
      color: "bg-gray-100 text-[#f26d35]"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Countries Served" },
    { number: "100k+", label: "Rooms Furnished" },
    { number: "98%", label: "Client Satisfaction" }
  ];

  const testimonials = [
    {
      name: "Lena Petrova",
      title: "Resort Director",
      company: "Azure Coast Resorts (Croatia)",
      avatar: "/api/placeholder/64/64",
      rating: 5,
      text: "The dedication to superior quality from Sara Global is evident in every piece...... They flawlessly captured the exclusive essence of our resort, and the comprehensive service, from design to delivery, was flawless...... Our client satisfaction scores have improved significantly."
    },
    {
      name: "David Kim",
      title: "Chief Procurement Officer",
      company: "Global Stay Properties", 
      avatar: "/api/placeholder/64/64",
      rating: 5,
      text: "For an international group like ours, consistent quality and on-time global logistics are non-negotiable...... Sara Global has become our trusted B2B partner, managing vast orders across three continents with unmatched reliability and excellence...... A truly global solution."
    },
    {
      name: "Javier Morales",
      title: "Principal Designer",
      company: "Horizon Design Studio (London)",
      avatar: "/api/placeholder/64/64", 
      rating: 5,
      text: "Sara Global didn't just provide furniture...... they executed our complex design schematics with stunning precision...... Their team acted as a true extension of our studio, ensuring every custom detail aligned perfectly with our creative vision...... Absolutely world-class manufacturing."
    },
    {
      name: "Aisha Rahman",
      title: "Facilities Manager",
      company: "Harmony Senior Living (Canada)",
      avatar: "/api/placeholder/64/64",
      rating: 5,
      text: "We needed durable, beautiful furniture for our high-traffic senior living facilities...... Sara Global understood the unique blend of residential comfort and commercial strength required...... The residents love the design, and the furniture is holding up exceptionally well."
    },
    {
      name: "Ben Carter",
      title: "VP of Brand Development", 
      company: "The EcoLuxe Hotel Group",
      avatar: "/api/placeholder/64/64",
      rating: 5,
      text: "What impressed us most was their commitment to sustainability - Sara Global provided eco-friendly options without compromising on the luxury look we demand...... It allowed us to meet our corporate responsibility goals while outfitting our new flagship hotel."
    },
    {
      name: "Kenji Tanaka",
      title: "Project Manager",
      company: "Tokyo Grand Hotels",
      avatar: "/api/placeholder/64/64",
      rating: 5,
      text: "From the initial consultation to final installation, the support from Sara Global was exceptional...... Their ability to customize materials and finishes to meet our regional fire and safety codes was a huge relief...... They made a complicated international project feel simple."
    }
  ];

  const totalTestimonialSlides = Math.ceil(testimonials.length / 3);
  const totalTestimonialSlidesMobile = testimonials.length;

  const nextTestimonialSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalTestimonialSlides);
  };

  const prevTestimonialSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalTestimonialSlides) % totalTestimonialSlides);
  };

  const nextTestimonialSlideMobile = () => {
    setCurrentSlide((prev) => (prev + 1) % totalTestimonialSlidesMobile);
  };

  const prevTestimonialSlideMobile = () => {
    setCurrentSlide((prev) => (prev - 1 + totalTestimonialSlidesMobile) % totalTestimonialSlidesMobile);
  };


  const featuredPost = {
    slug: "future-hospitality-design-sustainable-luxury-hotel-furniture",
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
      slug: "hotel-room-furniture-maximizing-space-comfort",
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
      slug: "behind-scenes-furniture-manufacturing-process",
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
      slug: "2024-hospitality-design-trends-whats-hot-not",
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
      slug: "maintenance-made-easy-caring-hotel-furniture-investment",
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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-0 sm:py-8 md:py-12">
          {/* Mobile Layout - Clean Design with Content First */}
          <div className="lg:hidden space-y-12">
            {/* Content Section - First */}
            <div className="space-y-8">
              {/* Badge - At the top */}
              <div className="flex justify-center pt-8">
                <div className="inline-flex items-center gap-2 bg-[#f26d35]/10 text-[#f26d35] px-4 py-2 rounded-full">
                  <Star className="w-4 h-4" />
                  <span className="text-sm font-medium">Premium Hospitality Furniture Manufacturer</span>
                </div>
              </div>
              
              {/* Main Heading */}
              <div className="text-center space-y-3">
                <h1 className="text-2xl sm:text-4xl font-bold leading-tight">
                  <div className="block">Leading Hospitality Furniture</div>
                  <div className="text-[#f26d35] block mt-0 sm:mt-1 text-lg sm:text-4xl">Manufacturer & Suppliers Globally</div>
                </h1>
                
                {/* Description */}
                <p className="text-base text-gray-600 leading-relaxed max-w-md mx-auto px-4">
                We partner with hospitality businesses to create unforgettable guest experiences through premium, durable, and elegantly designed furniture, manufactured and supplied globally, professionally by us.

                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-3 px-4">
                <Link href="/portfolio">
                  <Button 
                    size="lg" 
                    className="bg-[#f26d35] hover:bg-[#f26d35]/90 text-white shadow-lg w-full"
                  >
                    View Our Portfolio
                    <ArrowRight className="w-4 h-4 ml-2 animate-pulse" style={{ animation: 'arrowMove 2s ease-in-out infinite' }} />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-[#f26d35] text-[#f26d35] hover:bg-[#f26d35]/10 w-full"
                  >
                    Get Free Consultation
                  </Button>
                </Link>
              </div>

              {/* Key Features - 2x2 Grid */}
              <div className="grid grid-cols-2 gap-4 px-4">
                <div className="text-center p-4 rounded-xl border border-orange-200" style={{ backgroundColor: '#faece7' }}>
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: '#faece7' }}>
                    <Star className="w-6 h-6" style={{ color: '#f26d35' }} />
                  </div>
                  <div className="font-semibold text-sm mb-1">Over 25 Years</div>
                  <div className="text-xs text-muted-foreground">of Expertise</div>
                </div>
                <div className="text-center p-4 rounded-xl border border-orange-200" style={{ backgroundColor: '#faece7' }}>
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: '#faece7' }}>
                    <Star className="w-6 h-6" style={{ color: '#f26d35' }} />
                  </div>
                  <div className="font-semibold text-sm mb-1">Bespoke Design</div>
                  <div className="text-xs text-muted-foreground">Capabilities</div>
                </div>
                <div className="text-center p-4 rounded-xl border border-orange-200" style={{ backgroundColor: '#faece7' }}>
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: '#faece7' }}>
                    <Star className="w-6 h-6" style={{ color: '#f26d35' }} />
                  </div>
                  <div className="font-semibold text-sm mb-1">Furnished 500+</div>
                  <div className="text-xs text-muted-foreground">Hotels</div>
                </div>
                <div className="text-center p-4 rounded-xl border border-orange-200" style={{ backgroundColor: '#faece7' }}>
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: '#faece7' }}>
                    <Star className="w-6 h-6" style={{ color: '#f26d35' }} />
                  </div>
                  <div className="font-semibold text-sm mb-1">Worldwide</div>
                  <div className="text-xs text-muted-foreground">Logistics & Shipping</div>
                </div>
              </div>
            </div>

            {/* Hero Image Section - Below Content */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <ImageWithFallback
                  src="/home/home_hero.webp"
                  alt="Luxury hotel bedroom furniture"
                  className="w-full h-64 sm:h-80 object-cover"
                  width={1080}
                  height={600}
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-2 -left-2 w-16 h-16 bg-[#f26d35]/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-blue-500/30 rounded-full blur-xl"></div>
            </div>

          </div>

          {/* Desktop Layout - Hidden on mobile */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <div className="space-y-3 sm:space-y-4 order-2 lg:order-1 -mt-4">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-[#f26d35]/10 text-[#f26d35] px-3 py-2 sm:px-4 rounded-full text-xs sm:text-sm">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm">Premium Hospitality Furniture Manufacturer</span>
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  <div className="block">Leading Hospitality Furniture</div>
                  <div className="text-[#f26d35] block mt-0 sm:mt-1 text-lg sm:text-2xl md:text-3xl lg:text-4xl">Manufacturer & Suppliers Globally</div>
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-lg leading-relaxed">
                  We partner with hospitality businesses to create unforgettable guest experiences through premium, durable, and elegantly designed furniture, manufactured and supplied globally, professionally by us.
                </p>
              </div>

              {/* Key Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                  <span className="text-xs sm:text-sm md:text-base">Over 25 Years of Expertise</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                  <span className="text-xs sm:text-sm md:text-base">Bespoke Design Capabilities</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                  <span className="text-xs sm:text-sm md:text-base">Furnished 500+ Hotels</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                  <span className="text-xs sm:text-sm md:text-base">Worldwide Logistics & Shipping</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link href="/portfolio">
                  <Button 
                    size="lg" 
                    className="bg-[#f26d35] hover:bg-[#f26d35]/90 text-white w-full sm:w-auto py-4 sm:py-3 text-base sm:text-sm font-medium"
                  >
                    View Our Portfolio
                    <ArrowRight className="w-4 h-4 ml-2 animate-pulse" style={{ animation: 'arrowMove 2s ease-in-out infinite' }} />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-[#f26d35] text-[#f26d35] hover:bg-[#f26d35]/10 w-full sm:w-auto py-4 sm:py-3 text-base sm:text-sm font-medium"
                  >
                    Get free Consultation
                  </Button>
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative order-1 lg:order-2">
              <div className="relative z-10">
                <ImageWithFallback
                  src="/home/home_hero.webp"
                  alt="Luxury hotel bedroom furniture"
                  className="w-full h-48 sm:h-64 md:h-80 lg:h-[600px] object-cover rounded-lg shadow-2xl"
                  width={1080}
                  height={600}
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-12 h-12 sm:w-16 md:w-24 sm:h-16 md:h-24 bg-[#f26d35]/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-16 h-16 sm:w-20 md:w-32 sm:h-20 md:h-32 bg-blue-500/30 rounded-full blur-xl"></div>
              
              {/* Quality Badge */}
              <div className="absolute top-2 right-2 sm:top-3 md:top-6 sm:right-3 md:right-6 bg-white p-2 sm:p-3 md:p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-sm sm:text-lg md:text-2xl font-bold text-[#f26d35]">A+</div>
                  <div className="text-xs text-gray-600">Quality Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Brands Section */}
      <section className="py-2 sm:py-6 md:py-8 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-2 sm:mb-6 md:mb-8 lg:mb-10">
            <div className="text-center">
              <div className="bg-white/95 backdrop-blur-sm p-3 sm:p-4 md:p-6 rounded-xl shadow-2xl border border-white/20">
                <div className="text-xl sm:text-2xl md:text-3xl text-[#f26d35] mb-1">500+</div>
                <div className="text-xs sm:text-sm text-gray-600">Hotels Served</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/95 backdrop-blur-sm p-3 sm:p-4 md:p-6 rounded-xl shadow-2xl border border-white/20">
                <div className="text-xl sm:text-2xl md:text-3xl text-[#f26d35] mb-1">50+</div>
                <div className="text-xs sm:text-sm text-gray-600">Countries</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/95 backdrop-blur-sm p-3 sm:p-4 md:p-6 rounded-xl shadow-2xl border border-white/20">
                <div className="text-xl sm:text-2xl md:text-3xl text-[#f26d35] mb-1">25+</div>
                <div className="text-xs sm:text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/95 backdrop-blur-sm p-3 sm:p-4 md:p-6 rounded-xl shadow-2xl border border-white/20">
                <div className="text-xl sm:text-2xl md:text-3xl text-[#f26d35] mb-1">4.9★</div>
                <div className="text-xs sm:text-sm text-gray-600">Global Rating</div>
              </div>
            </div>
          </div>

          {/* Brand Logos Section */}
          <div className="pt-6 sm:pt-8 border-t border-gray-200">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-900 mb-2">Preferred Furniture Partner for Global Hotel Brands</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600">Leading international hotel chains rely on Sara Global for dependable quality and premium furniture solutions.</p>
            </div>
            
            <div className="overflow-hidden py-4">
              <div className="flex animate-scroll-logos gap-8 sm:gap-16 items-center">
                {/* Duplicate the logos for seamless loop */}
                {[...Array(2)].map((_, setIndex) => (
                  <div key={setIndex} className="flex gap-8 sm:gap-16 items-center flex-shrink-0">
                    <div className="flex-shrink-0">
                      <ImageWithFallback
                        src="/assets/f31b2dfb28307640a195a389e2838f1c2a7dc156.png"
                        alt="La Quinta by Wyndham logo"
                        className="h-6 sm:h-8 md:h-12 w-auto object-contain transition-all duration-300 hover:scale-105"
                        width={120}
                        height={48}
                      />
                    </div>
                    <div className="flex-shrink-0">
                      <ImageWithFallback
                        src="/assets/6e7b3d1f8e168548d6b65e7dd7fb4691d792ff17.png"
                        alt="Holiday Inn Express & Suites logo"
                        className="h-6 sm:h-8 md:h-12 w-auto object-contain transition-all duration-300 hover:scale-105"
                        width={120}
                        height={48}
                      />
                    </div>
                    <div className="flex-shrink-0">
                      <ImageWithFallback
                        src="/assets/1a36f52dfb717910963752bf97e84ab00d9f89e9.png"
                        alt="Quality Inn logo"
                        className="h-6 sm:h-8 md:h-12 w-auto object-contain transition-all duration-300 hover:scale-105"
                        width={120}
                        height={48}
                      />
                    </div>
                    <div className="flex-shrink-0">
                      <ImageWithFallback
                        src="/assets/65e2b4ed424723dae6731b7df90d808c1d793105.png"
                        alt="Baymont by Wyndham logo"
                        className="h-6 sm:h-8 md:h-12 w-auto object-contain transition-all duration-300 hover:scale-105"
                        width={120}
                        height={48}
                      />
                    </div>
                    <div className="flex-shrink-0">
                      <ImageWithFallback
                        src="/assets/d3e30d7d50aff6f76bb0916c50dc15aa2919a066.png"
                        alt="Best Western Plus logo"
                        className="h-6 sm:h-8 md:h-12 w-auto object-contain transition-all duration-300 hover:scale-105"
                        width={120}
                        height={48}
                      />
                    </div>
                    <div className="flex-shrink-0">
                      <ImageWithFallback
                        src="/assets/61636d64a66e87acc43f2e63f91829fa6b8f0dea.png"
                        alt="Days Inn & Suites logo"
                        className="h-6 sm:h-8 md:h-12 w-auto object-contain transition-all duration-300 hover:scale-105"
                        width={120}
                        height={48}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="pt-6 sm:pt-8 pb-4 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 bg-[#f26d35]/10 text-[#f26d35] px-3 py-2 sm:px-4 rounded-full mb-4 text-xs sm:text-sm">
              <Star className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>About Sara Global Hospitality</span>
            </div>
            <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-relaxed">
              Building Excellence in
              <span className="text-[#f26d35] block mt-0 sm:mt-1">Hospitality Furniture</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              For more than two decades, Sara Global Hospitality has been a leader in hotel furniture 
              manufacturing, delivering exceptional pieces that define guest experiences around the world.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-8 sm:mb-12">
            {/* Content */}
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-base sm:text-xl md:text-2xl font-bold">Our Story</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                  Sara Hospitality Global is a bespoke, complete furniture, fixture, and equipment 
                  package supplier for the hospitality industry globally. We have been at the 
                  forefront of designing and manufacturing quality furniture.
                </p>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                  Founded in 1995, we began with a clear mission: to elevate hospitality spaces 
                  through superior furniture design and manufacturing. Today, we are a trusted 
                  global supplier known for our commitment to quality and a deep understanding 
                  of the industry&apos;s needs. We have successfully furnished over 500 hotels 
                  across 50 countries, building our reputation as a reliable partner for 
                  hospitality professionals.
                </p>
              </div>

              {/* Values */}
              <div className="space-y-4">
                <h4 className="font-bold text-base sm:text-lg md:text-xl">Our Core Values</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#f26d35] mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-medium text-sm sm:text-sm md:text-base">Excellence</h5>
                      <p className="text-sm sm:text-sm text-gray-600">Uncompromising quality in every detail.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#f26d35] mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-medium text-sm sm:text-sm md:text-base">Partnership</h5>
                      <p className="text-sm sm:text-sm text-gray-600">Building strong, lasting client relationships.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#f26d35] mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-medium text-sm sm:text-sm md:text-base">Innovation</h5>
                      <p className="text-sm sm:text-sm text-gray-600">Advanced design and manufacturing techniques.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#f26d35] mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-medium text-sm sm:text-sm md:text-base">Global Reach</h5>
                      <p className="text-sm sm:text-sm text-gray-600">Serving the hospitality industry worldwide.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative order-1 lg:order-2">
              <ImageWithFallback
                src="/home/home_about.webp"
                alt="Furniture manufacturing facility"
                  className="w-full h-48 sm:h-64 md:h-80 lg:h-[500px] object-cover rounded-lg shadow-lg"
                width={1080}
                height={500}
              />
              
              {/* Overlay Card */}
              <div className="absolute -bottom-2 -left-2 sm:-bottom-3 md:-bottom-6 sm:-left-3 md:-left-6 bg-white p-2 sm:p-3 md:p-6 rounded-lg shadow-xl border">
                <div className="text-center">
                  <div className="text-lg sm:text-2xl md:text-3xl font-bold text-[#f26d35]">25+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section id="products" className="pt-4 pb-6 sm:pb-8 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 bg-[#f26d35]/10 text-[#f26d35] px-3 py-2 sm:px-4 rounded-full mb-4 text-sm">
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 animate-pulse" style={{ animation: 'arrowMove 2s ease-in-out infinite' }} />
              <span>Product Categories</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-relaxed">
              Complete Furniture Solutions
              <span className="text-[#f26d35] block mt-0 sm:mt-1">For Every Space</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              From luxurious guest rooms to sophisticated lobbies, we provide comprehensive 
              furniture solutions that meet the highest standards of hospitality design.
            </p>
          </div>

          {/* Categories Carousel */}
          <div className="relative mb-6 sm:mb-8">
            {/* Navigation Arrows */}
            <div className="flex justify-center sm:justify-between items-center mb-4">
              <div className="flex gap-2 sm:gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevSlide}
                  className="rounded-full border-2 hover:bg-[#f26d35] hover:text-white transition-colors w-8 h-8 sm:w-10 sm:h-10 p-0"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextSlide}
                  className="rounded-full border-2 hover:bg-[#f26d35] hover:text-white transition-colors w-8 h-8 sm:w-10 sm:h-10 p-0"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </div>
              
              {/* Slide Indicators */}
              <div className="hidden sm:flex gap-1 sm:gap-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-0.5 h-0.5 sm:w-2 sm:h-2 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-[#f26d35]' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Carousel Content */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-1">
                      {categories
                        .slice(slideIndex * itemsPerPage, (slideIndex + 1) * itemsPerPage)
                        .map((category, index) => {
                          const IconComponent = category.icon;
                          return (
                            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-4px_rgba(0,0,0,0.15)] hover:-translate-y-1">
                              <CardContent className="p-0">
                                <div className="relative overflow-hidden rounded-t-lg">
                                  <ImageWithFallback
                                    src={category.image}
                                    alt={category.title}
                                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                                    width={400}
                                    height={224}
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg">
                                    <IconComponent className="w-6 h-6 text-[#f26d35]" />
                                  </div>
                                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="bg-[#f26d35] text-white px-3 py-1 rounded-full text-sm">
                                      Explore
                                    </div>
                                  </div>
                                </div>
                                
                                <div className="p-6 pb-4">
                                  <h3 className="text-2xl font-bold mb-3 group-hover:text-[#f26d35] transition-colors">{category.title}</h3>
                                  <p className="text-gray-600 mb-4 line-clamp-2">{category.description}</p>
                                  
                                  <div className="grid grid-cols-2 gap-2 mb-3">
                                    {category.features.slice(0, 4).map((feature, featureIndex) => (
                                      <div key={featureIndex} className="flex items-center gap-2 text-sm">
                                        <div className="w-1.5 h-1.5 bg-[#f26d35] rounded-full flex-shrink-0"></div>
                                        <span className="truncate">{feature}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          );
                        })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Custom Solutions CTA */}
          <div className="relative bg-gradient-to-br from-[#f26d35]/5 via-white to-[#f26d35]/5 rounded-2xl p-1">
            <div className="bg-white rounded-2xl p-8 lg:p-12 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#f26d35]/5 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#f26d35]/5 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center gap-2 bg-[#f26d35]/10 text-[#f26d35] px-4 py-2 rounded-full mb-6">
                  <ArrowRight className="w-4 h-4 animate-pulse" style={{ animation: 'arrowMove 2s ease-in-out infinite' }} />
                  <span>Custom Solutions</span>
                </div>
                
                <h3 className="text-2xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-[#f26d35] bg-clip-text text-transparent">
                  Transform Your Vision Into Reality
                </h3>
                
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
                  Our award-winning design team specializes in creating bespoke furniture solutions 
                  that perfectly align with your hotel&apos;s brand identity and guest experience goals.
                </p>
                
                {/* Features grid */}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-10">
                  <div className="flex flex-col items-center p-2 sm:p-4">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 bg-[#f26d35]/10 rounded-xl flex items-center justify-center mb-2 sm:mb-3">
                      <Box className="w-4 h-4 sm:w-6 sm:h-6 text-[#f26d35]" />
                    </div>
                    <h4 className="font-bold mb-1 sm:mb-2 text-xs sm:text-base">3D Design</h4>
                    <p className="text-xs sm:text-sm text-gray-600 text-center">Visualize before you invest</p>
                  </div>
                  <div className="flex flex-col items-center p-2 sm:p-4">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 bg-[#f26d35]/10 rounded-xl flex items-center justify-center mb-2 sm:mb-3">
                      <Users className="w-4 h-4 sm:w-6 sm:h-6 text-[#f26d35]" />
                    </div>
                    <h4 className="font-bold mb-1 sm:mb-2 text-xs sm:text-base">Expert Team</h4>
                    <p className="text-xs sm:text-sm text-gray-600 text-center">15+ years of experience</p>
                  </div>
                  <div className="flex flex-col items-center p-2 sm:p-4">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 bg-[#f26d35]/10 rounded-xl flex items-center justify-center mb-2 sm:mb-3">
                      <Award className="w-4 h-4 sm:w-6 sm:h-6 text-[#f26d35]" />
                    </div>
                    <h4 className="font-bold mb-1 sm:mb-2 text-xs sm:text-base">Premium Quality</h4>
                    <p className="text-xs sm:text-sm text-gray-600 text-center">Luxury materials & finishes</p>
                  </div>
                  <div className="flex flex-col items-center p-2 sm:p-4">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 bg-[#f26d35]/10 rounded-xl flex items-center justify-center mb-2 sm:mb-3">
                      <Globe className="w-4 h-4 sm:w-6 sm:h-6 text-[#f26d35]" />
                    </div>
                    <h4 className="font-bold mb-1 sm:mb-2 text-xs sm:text-base">Global Sourcing</h4>
                    <p className="text-xs sm:text-sm text-gray-600 text-center">Worldwide supply chain</p>
                  </div>
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-[#f26d35] hover:bg-[#f26d35]/90 shadow-lg hover:shadow-xl transition-all duration-300 group px-6 sm:px-8 py-4 sm:py-3 w-full sm:w-auto"
                  >
                    Request A Quote
                    <ArrowRight className="w-4 h-4 ml-2 animate-pulse" style={{ animation: 'arrowMove 2s ease-in-out infinite' }} />
                  </Button>
                  <Link href="/portfolio" className="w-full sm:w-auto">
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="border-2 hover:bg-[#f26d35]/5 hover:border-[#f26d35] transition-all duration-300 px-6 sm:px-8 py-4 sm:py-3 w-full sm:w-auto"
                    >
                      View Portfolio
                    </Button>
                  </Link>
                </div>
                
                {/* Trust indicator */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    âœ¨ <span className="font-semibold">500+ successful projects</span> â€¢ <span className="font-semibold">98% client satisfaction</span> â€¢ <span className="font-semibold">Award-winning designs</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-8 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#f26d35]/5 rounded-full -translate-x-36 -translate-y-36"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f26d35]/5 rounded-full translate-x-48 translate-y-48"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Why Choose Us - Compact Showcase */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-[#f26d35]/10 text-[#f26d35] px-4 py-2 rounded-full mb-4">
              <Star className="w-4 h-4" />
              <span>Why Choose Sara Global</span>
            </div>
            <h2 className="text-2xl lg:text-5xl font-bold mb-6 leading-relaxed">
              Industry Leaders in
              <span className="text-[#f26d35] block mt-0 sm:mt-2">Hospitality Furniture</span>
            </h2>
          </div>

          {/* Compact Stats Display */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
            {reasons.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <div key={index} className="group text-center hover:-translate-y-2 transition-all duration-300">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col justify-between min-h-[140px]">
                    <div className={`w-14 h-14 ${reason.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="flex-1 flex flex-col justify-end">
                      <div className="text-lg font-bold text-[#f26d35] mb-2">{reason.metric}</div>
                      <h4 className="font-medium text-sm text-gray-900">{reason.title}</h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Modern Process Section */}
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 bg-[#f26d35]/10 text-[#f26d35] px-4 py-2 rounded-full mb-4">
                <Zap className="w-4 h-4" />
                <span>Our Process</span>
              </div>
              <h3 className="text-2xl lg:text-4xl font-bold mb-2">
                From Vision to
                <span className="text-[#f26d35]"> Reality</span>
              </h3>
            </div>

            {/* Interactive Process Timeline */}
            <div className="relative">
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#f26d35]/20 via-[#f26d35] to-[#f26d35]/20 transform -translate-y-1/2"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    step: "01",
                    icon: Target,
                    title: "Discovery & Planning",
                    description: "Understanding your vision and requirements",
                    color: "bg-[#f26d35]"
                  },
                  {
                    step: "02", 
                    icon: Wrench,
                    title: "Design & Engineering",
                    description: "Creating detailed designs and prototypes",
                    color: "bg-[#f26d35]"
                  },
                  {
                    step: "03",
                    icon: Shield,
                    title: "Manufacturing",
                    description: "Precision crafting with quality control",
                    color: "bg-[#f26d35]"
                  },
                  {
                    step: "04",
                    icon: Truck,
                    title: "Delivery & Setup",
                    description: "Professional installation and support",
                    color: "bg-[#f26d35]"
                  }
                ].map((process, index) => {
                  const IconComponent = process.icon;
                  return (
                    <div key={index} className="relative group">
                      {/* Connector line for mobile */}
                      {index < 3 && (
                        <div className="lg:hidden absolute top-20 left-1/2 w-0.5 h-16 bg-[#f26d35]/20 transform -translate-x-1/2"></div>
                      )}
                      
                      <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:-translate-y-2">
                        <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 ${process.color} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                          {process.step}
                        </div>
                        
                        <div className="pt-4 text-center">
                          <div className={`w-16 h-16 ${process.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>
                          
                          <h4 className="font-bold mb-3 text-lg whitespace-nowrap sm:whitespace-normal">{process.title}</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">{process.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-10 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-4">
          {/* Section Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-[#f26d35]/10 text-[#f26d35] px-4 py-2 rounded-full mb-4">
              <ExternalLink className="w-4 h-4" />
              <span>Our Portfolio</span>
            </div>
            <h2 className="text-2xl lg:text-5xl font-bold mb-6 leading-relaxed">
              <div className="block text-lg sm:text-2xl lg:text-5xl">Transforming Hospitality Spaces</div>
              <div className="text-[#f26d35] block mt-0 sm:mt-2 text-lg sm:text-2xl lg:text-5xl">Worldwide</div>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our diverse portfolio of completed projects spanning luxury resorts, 
              boutique hotels, and business centers across the globe.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#f26d35] mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Featured Project */}
          {portfolioLoading ? (
            <div className="mb-16">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="grid lg:grid-cols-2">
                  <div className="relative overflow-hidden">
                    <div className="w-full h-64 sm:h-80 lg:h-96 bg-gray-200 animate-pulse"></div>
                  </div>
                  <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <div className="w-20 h-6 bg-gray-200 rounded-full animate-pulse"></div>
                      <div className="w-24 h-6 bg-gray-200 rounded-full animate-pulse"></div>
                    </div>
                    <div className="w-3/4 h-8 bg-gray-200 rounded animate-pulse mb-4"></div>
                    <div className="flex gap-4 mb-4">
                      <div className="w-32 h-5 bg-gray-200 rounded animate-pulse"></div>
                      <div className="w-28 h-5 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                    <div className="w-full h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
                    <div className="w-full h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
                    <div className="w-2/3 h-4 bg-gray-200 rounded animate-pulse mb-6"></div>
                    <div className="w-32 h-10 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          ) : featuredPortfolio ? (
            <div className="mb-16">
              <Link href={`/portfolio/${extractSlug(featuredPortfolio.slug || '')}`} className="block">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <div className="grid lg:grid-cols-2">
                    <div className="relative overflow-hidden">
                      <ImageWithFallback
                        src={getPortfolioImageUrl(featuredPortfolio.main_image)}
                        alt={featuredPortfolio.title || 'Featured Project'}
                        className="w-full h-64 sm:h-80 lg:h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                        width={800}
                        height={500}
                      />
                      <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                        <div className="bg-[#f26d35] text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium">Featured Project</div>
                      </div>
                    </div>
                    <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                      {featuredPortfolio.tags && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {featuredPortfolio.tags.split(',').map((tag, index) => (
                            <div key={index} className="bg-gray-100 text-gray-700 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm">{tag.trim()}</div>
                          ))}
                        </div>
                      )}
                      <h3 className="text-base sm:text-2xl lg:text-3xl font-bold mb-4">{featuredPortfolio.title}</h3>
                      {featuredPortfolio.location && (
                        <div className="flex flex-row sm:flex-row sm:items-center gap-2 sm:gap-6 text-xs sm:text-sm text-gray-600 mb-4">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>{featuredPortfolio.location}</span>
                          </div>
                          {featuredPortfolio.brandName && (
                            <div className="flex items-center gap-1">
                              <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                              <span>{featuredPortfolio.brandName}</span>
                            </div>
                          )}
                        </div>
                      )}
                      {(featuredPortfolio.subtitle || featuredPortfolio.description) && (
                        <p className="text-sm sm:text-base text-gray-600 mb-6">
                          {featuredPortfolio.subtitle || featuredPortfolio.description}
                        </p>
                      )}
                      <div className="inline-flex">
                        <Button 
                          className="w-full sm:w-fit bg-[#f26d35] hover:bg-[#f26d35]/90 py-3 sm:py-2"
                        >
                          View Details
                          <ArrowRight className="w-4 h-4 ml-2 animate-pulse" style={{ animation: 'arrowMove 2s ease-in-out infinite' }} />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ) : null}

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {portfolioLoading ? (
              // Loading skeletons
              [...Array(3)].map((_, index) => (
                <Card key={index} className="border-0 shadow-md overflow-hidden h-full">
                  <div className="relative">
                    <div className="w-full h-40 sm:h-48 bg-gray-200 animate-pulse"></div>
                  </div>
                  <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                    <div className="flex flex-wrap gap-1 mb-3">
                      <div className="w-16 h-5 bg-gray-200 rounded-full animate-pulse"></div>
                      <div className="w-20 h-5 bg-gray-200 rounded-full animate-pulse"></div>
                    </div>
                    <div className="w-3/4 h-6 bg-gray-200 rounded animate-pulse mb-3"></div>
                    <div className="w-32 h-4 bg-gray-200 rounded animate-pulse mb-3"></div>
                    <div className="w-full h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
                    <div className="w-full h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
                    <div className="w-2/3 h-4 bg-gray-200 rounded animate-pulse mb-4"></div>
                    <div className="w-24 h-4 bg-gray-200 rounded animate-pulse mt-auto"></div>
                  </CardContent>
                </Card>
              ))
            ) : (
              gridPortfolios.map((project) => (
                <Link key={project.id} href={`/portfolio/${extractSlug(project.slug || '')}`} className="block h-full">
                  <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md overflow-hidden h-full cursor-pointer">
                    <div className="relative">
                      <ImageWithFallback
                        src={getPortfolioImageUrl(project.main_image)}
                        alt={project.title || 'Portfolio Project'}
                        className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                        width={400}
                        height={192}
                      />
                      {project.brandName && (
                        <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                          <div className="bg-white/90 text-gray-700 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm">{project.brandName}</div>
                        </div>
                      )}
                    </div>
                    
                    <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                      {project.tags && (
                        <div className="flex flex-wrap gap-1 mb-3">
                          {project.tags.split(',').slice(0, 3).map((tag, tagIndex) => (
                            <div key={tagIndex} className="border border-gray-300 text-gray-600 px-2 py-1 rounded-full text-xs">{tag.trim()}</div>
                          ))}
                        </div>
                      )}
                      
                      <h3 className="font-bold mb-2 text-base sm:text-lg">{project.title}</h3>
                      
                      {project.location && (
                        <div className="flex flex-row sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600 mb-3">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            <span>{project.location}</span>
                          </div>
                        </div>
                      )}
                      
                      {(project.subtitle || project.description) && (
                        <p className="text-xs sm:text-sm text-gray-600 mb-4 line-clamp-3 flex-1">
                          {project.subtitle || project.description}
                        </p>
                      )}
                      
                      <div className="mt-auto inline-flex">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="p-0 h-auto hover:bg-transparent w-full sm:w-auto"
                        >
                          <span className="text-[#f26d35] text-sm sm:text-base">View Details</span>
                          <ArrowRight className="w-3 h-3 ml-2 text-[#f26d35] animate-pulse" style={{ animation: 'arrowMove 2s ease-in-out infinite' }} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))
            )}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link href="/portfolio">
              <Button 
                size="lg" 
                className="bg-[#f26d35] hover:bg-[#f26d35]/90"
              >
                View All Projects
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-6 sm:px-4">
          {/* Section Header */}
          <div className="text-center mb-4">
            <div className="inline-flex items-center gap-2 bg-[#f26d35]/10 text-[#f26d35] px-4 py-2 rounded-full mb-4">
              <Star className="w-4 h-4" />
              <span>Client Testimonials</span>
            </div>
            <h2 className="text-2xl lg:text-5xl font-bold mb-6 leading-relaxed">
              What Our Clients Say
              <span className="text-[#f26d35] block mt-0 sm:mt-2">About Our Work</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what hospitality professionals 
              around the world say about their experience with Sara Global.
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative mb-8">
            {/* Navigation Controls */}
            <div className="flex justify-center sm:justify-between items-center mb-4 sm:mb-6">
              <div className="flex gap-2 sm:gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevTestimonialSlideMobile}
                  className="rounded-full border-2 hover:bg-[#f26d35] hover:text-white transition-colors w-8 h-8 sm:w-10 sm:h-10 p-0 sm:hidden"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextTestimonialSlideMobile}
                  className="rounded-full border-2 hover:bg-[#f26d35] hover:text-white transition-colors w-8 h-8 sm:w-10 sm:h-10 p-0 sm:hidden"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevTestimonialSlide}
                  className="hidden sm:flex rounded-full border-2 hover:bg-[#f26d35] hover:text-white transition-colors w-8 h-8 sm:w-10 sm:h-10 p-0"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextTestimonialSlide}
                  className="hidden sm:flex rounded-full border-2 hover:bg-[#f26d35] hover:text-white transition-colors w-8 h-8 sm:w-10 sm:h-10 p-0"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </div>
              
              {/* Slide Indicators */}
              <div className="hidden sm:flex gap-1 sm:gap-2">
                {Array.from({ length: totalTestimonialSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-0.5 h-0.5 sm:w-2 sm:h-2 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-[#f26d35]' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Carousel Content */}
            <div className="overflow-hidden">
              {/* Mobile View - One testimonial per slide */}
              <div 
                className="flex transition-transform duration-500 ease-in-out sm:hidden"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="px-1">
                      <Card className="border-0 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-4px_rgba(0,0,0,0.15)] hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full">
                        <CardContent className="p-6 flex flex-col h-full">
                          {/* Quote Icon */}
                          <div className="w-10 h-10 bg-[#f26d35]/10 rounded-full flex items-center justify-center mb-4">
                            <Quote className="w-5 h-5 text-[#f26d35]" />
                          </div>

                          {/* Rating */}
                          <div className="flex gap-1 mb-3">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>

                          {/* Testimonial Text */}
                          <p className="text-sm text-gray-600 mb-4 leading-relaxed flex-1">
                            &quot;{testimonial.text}&quot;
                          </p>

                          {/* Author Info */}
                          <div className="flex items-center gap-3 mt-auto">
                            <div className="w-10 h-10 bg-[#f26d35] text-white rounded-full flex items-center justify-center font-bold text-sm">
                              {testimonial.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                              <h4 className="font-bold text-sm">{testimonial.name}</h4>
                              <p className="text-xs text-gray-600">{testimonial.title}</p>
                              <p className="text-xs text-[#f26d35] font-medium">{testimonial.company}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop View - Three testimonials per slide */}
              <div 
                className="hidden sm:flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: totalTestimonialSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-1">
                      {testimonials
                        .slice(slideIndex * 3, (slideIndex + 1) * 3)
                        .map((testimonial, index) => (
                          <Card key={index} className="border-0 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-4px_rgba(0,0,0,0.15)] hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full">
                            <CardContent className="p-6 sm:p-8 flex flex-col h-full">
                              {/* Quote Icon */}
                              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#f26d35]/10 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                                <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-[#f26d35]" />
                              </div>

                              {/* Rating */}
                              <div className="flex gap-1 mb-3 sm:mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                  <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                              </div>

                              {/* Testimonial Text */}
                              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed flex-1">
                                &quot;{testimonial.text}&quot;
                              </p>

                              {/* Author Info */}
                              <div className="flex items-center gap-3 sm:gap-4 mt-auto">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#f26d35] text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base">
                                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div>
                                  <h4 className="font-bold text-sm sm:text-base">{testimonial.name}</h4>
                                  <p className="text-xs sm:text-sm text-gray-600">{testimonial.title}</p>
                                  <p className="text-xs sm:text-sm text-[#f26d35] font-medium">{testimonial.company}</p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-4 sm:py-10 bg-white">
        <div className="container mx-auto px-6 sm:px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl lg:text-4xl font-bold mb-3 sm:mb-6">
              Ready to Transform Your Hospitality Space?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let&apos;s discuss how Sara Global Hospitality can bring your vision to life with our 
              expert furniture solutions and global experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 justify-center">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="bg-[#f26d35] text-white hover:bg-[#f26d35]/90 w-full sm:w-auto"
                >
                  Get Free Consultation
                  <ArrowRight className="w-4 h-4 ml-2 animate-pulse" style={{ animation: 'arrowMove 2s ease-in-out infinite' }} />
                </Button>
              </Link>
              <Link href="/portfolio" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 hover:bg-[#f26d35]/5 hover:border-[#f26d35] transition-all duration-300 w-full sm:w-auto"
                >
                  View Our Portfolio
                  <ArrowRight className="w-4 h-4 ml-2 animate-pulse" style={{ animation: 'arrowMove 2s ease-in-out infinite' }} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Insights Blog Section */}
      <section id="blogs" className="py-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6 sm:px-4">
          {/* Section Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-[#f26d35]/10 text-[#f26d35] px-4 py-2 rounded-full mb-4">
              <BookOpen className="w-4 h-4" />
              <span>Industry Insights</span>
            </div>
            <h2 className="text-2xl lg:text-5xl font-bold mb-6 leading-relaxed">
              Latest from Our
              <span className="text-[#f26d35] block mt-0 sm:mt-2">Blog & Resources</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest trends, insights, and best practices in hospitality furniture design.
            </p>
          </div>

          {/* Featured Article in Hero Layout */}
          <div className="mb-6">
            <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-r from-white to-gray-50/50">
              <div className="grid lg:grid-cols-5 gap-0">
                <div className="lg:col-span-3 relative">
                  <ImageWithFallback
                    src={featuredBlogPost?.image_url || featuredPost.image}
                    alt={featuredBlogPost?.title || featuredPost.title}
                    className="w-full h-64 lg:h-80 object-cover"
                    width={600}
                    height={320}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="bg-[#f26d35] text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                      <TrendingUp className="w-3 h-3 mr-1 inline" />
                      Featured Article
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-4 text-white text-sm">
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>2.3k</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{featuredBlogPost?.reading_time || featuredPost.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-2 p-6 lg:p-8 flex flex-col justify-center">
                  <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm w-fit mb-3">{featuredBlogPost?.category || featuredPost.category}</div>
                  <h3 className="text-sm lg:text-2xl font-bold mb-3 leading-tight">{featuredBlogPost?.title || featuredPost.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{featuredBlogPost?.excerpt || featuredPost.excerpt}</p>
                  
                  <div className="flex items-center gap-4 text-xs text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{featuredBlogPost?.author || featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{featuredBlogPost?.created_at ? new Date(featuredBlogPost.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : featuredPost.date}</span>
                    </div>
                  </div>
                  
                  <Link href={`/blog/${featuredBlogPost?.slug || featuredPost.slug}`}>
                    <Button size="sm" className="w-fit bg-[#f26d35] hover:bg-[#f26d35]/90">
                      Read Article
                      <ArrowRight className="w-3 h-3 ml-2 animate-pulse" style={{ animation: 'arrowMove 2s ease-in-out infinite' }} />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>

          {/* Compact Article Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              { post: gridBlogPost1, fallback: blogPosts[0] },
              { post: gridBlogPost2, fallback: blogPosts[1] },
              { post: gridBlogPost3, fallback: blogPosts[2] },
              { post: gridBlogPost4, fallback: blogPosts[3] }
            ].map((item, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm overflow-hidden h-full">
                <div className="flex gap-4 p-4">
                  <div className="relative flex-shrink-0">
                    <ImageWithFallback
                      src={item.post?.image_url || item.fallback?.image}
                      alt={item.post?.title || item.fallback?.title}
                      className="w-24 h-24 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                      width={96}
                      height={96}
                    />
                    <div className="absolute -top-1 -right-1">
                      <div className="bg-white/90 text-gray-700 px-2 py-0.5 rounded-full text-xs shadow-sm">
                        {item.post?.category || item.fallback?.category}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold mb-2 group-hover:text-[#f26d35] transition-colors line-clamp-2 text-sm leading-snug">
                      {item.post?.title || item.fallback?.title}
                    </h3>
                    
                    <p className="text-xs text-gray-600 mb-3 line-clamp-2 leading-relaxed">
                      {item.post?.excerpt || item.fallback?.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-600">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          <span>{item.post?.author || item.fallback?.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{item.post?.reading_time || item.fallback?.readTime}</span>
                        </div>
                      </div>
                      
                      <Link href={`/blog/${item.post?.slug || item.fallback?.slug}`}>
                        <Button variant="ghost" size="sm" className="p-0 h-auto hover:bg-transparent group/btn text-xs">
                          <span className="text-[#f26d35]">Read</span>
                          <ArrowRight className="w-3 h-3 ml-1 text-[#f26d35] group-hover/btn:translate-x-1 transition-transform duration-300 animate-pulse" style={{ animation: 'arrowMove 2s ease-in-out infinite' }} />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* View All CTA */}
          <div className="text-center">
            <Link href="/blog">
              <Button variant="outline" className="border-[#f26d35] text-[#f26d35] hover:bg-[#f26d35] hover:text-white">
                View All Articles
                <ArrowRight className="w-4 h-4 ml-2 animate-pulse" style={{ animation: 'arrowMove 2s ease-in-out infinite' }} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

    </div>
  );
}
