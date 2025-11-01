"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';
import { 
  ArrowRight, 
  Star, 
  Users, 
  MapPin, 
  Leaf,
  Mountain,
  Snowflake,
  Recycle,
  ChevronLeft,
  ChevronRight,
  Bath,
  Coffee,
  Box,
  Award,
  Shield,
  Clock,
  Wrench,
  Globe,
  Headphones,
  Zap,
  Target,
  Truck,
  ExternalLink,
  Quote,
  BookOpen,
  Calendar,
  Eye,
  TrendingUp
} from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useHydrationSafe } from '@/hooks/useHydrationSafe';
import { ContactSection } from '@/components/ContactSection';
import { getPortfolioItems, getPortfolioImageUrl, PortfolioItem, extractSlug } from '@/lib/portfolio';
import { getAllBlogPostsFromDB, BlogPostListing } from '@/lib/blog-data';

declare global {
  interface Window {
    openQuotePopup?: () => void;
  }
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function CanadaHomepage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonialSlide, setCurrentTestimonialSlide] = useState(0);
  const itemsPerPage = 3;
  const isMounted = useHydrationSafe();
  const [featuredProjects, setFeaturedProjects] = useState<PortfolioItem[]>([]);
  const [featuredBlog, setFeaturedBlog] = useState<BlogPostListing | null>(null);
  const [recentBlogs, setRecentBlogs] = useState<BlogPostListing[]>([]);

  const brandLogos = [
    {
      name: "La Quinta by Wyndham",
      src: "/assets/laquinta-5.png"
    },
    {
      name: "Best Western Plus",
      src: "/assets/bestwesternplus-3.png"
    },
    {
      name: "Quality Inn",
      src: "/assets/qualityinn-1.png"
    },
    {
      name: "Baymont by Wyndham",
      src: "/assets/baymont-2.png"
    },
    {
      name: "Days Inn & Suites",
      src: "/assets/daysinn-4.png"
    },
    {
      name: "La Quinta by Wyndham",
      src: "/assets/laquinta-6.png"
    }
  ];

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
      metric: "300+ Hotels",
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

  // Function to generate slug from project title
  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  useEffect(() => {
    const fetchFeaturedProjects = async () => {
      try {
        const items = await getPortfolioItems();
        if (items && items.length) {
          const canadianMatches = items.filter((item) => {
            const location = item.location?.toLowerCase() || '';
            return location.includes('canada') || location.includes('toronto') || location.includes('vancouver') || location.includes('calgary') || location.includes('montreal');
          });

          const prioritized = (canadianMatches.length >= 2 ? canadianMatches : items)
            .filter((item) => (item.main_image || item.hero_image) && item.title)
            .slice(0, 2);

          setFeaturedProjects(prioritized);
        }
      } catch (error) {
        console.error('Error loading featured Canadian portfolio projects:', error);
      }
    };

    fetchFeaturedProjects();
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const posts = await getAllBlogPostsFromDB();
        if (posts && posts.length) {
          const filtered = posts.filter((post) => post.slug.toLowerCase().includes('canada'));
          const prioritized = filtered.length ? filtered : posts;
          const [first, ...rest] = prioritized;
          setFeaturedBlog(first || null);
          setRecentBlogs(rest.slice(0, 3));
        } else {
          setFeaturedBlog(null);
          setRecentBlogs([]);
        }
      } catch (error) {
        console.error('Error fetching blog posts for Canada homepage:', error);
        setFeaturedBlog(null);
        setRecentBlogs([]);
      }
    };

    fetchBlogs();
  }, []);

  const canadianProjects = [
    {
      title: "Banff Mountain Resort",
      location: "Banff, Alberta",
      year: "2023",
      type: "Mountain Resort",
      rooms: "280 Rooms",
      description: "Sustainable furniture collection for Canada's premier mountain resort, featuring locally-sourced Canadian maple and eco-friendly finishes.",
      image: "https://images.unsplash.com/photo-1739907549777-6ff7cd3921fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5hZGlhbiUyMG1vdW50YWluJTIwaG90ZWwlMjBsb2RnZXxlbnwxfHx8fDE3NTc1MDI0MTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Sustainable", "Mountain Resort", "Canadian Maple"],
      featured: true,
      sustainability: "100% FSC Certified Wood"
    },
    {
      title: "Vancouver Waterfront Hotel",
      location: "Vancouver, BC",
      year: "2023",
      type: "Urban Luxury",
      rooms: "350 Rooms",
      description: "Modern coastal design with reclaimed materials from BC forests, creating a unique Pacific Northwest hospitality experience.",
      image: "https://images.unsplash.com/photo-1725623831897-fb009acfe742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YW5jb3V2ZXIlMjBsdXh1cnklMjBob3RlbCUyMGludGVyaW9yfGVufDF8fHwxNzU3NTAyNDE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Coastal Design", "Reclaimed Materials", "BC Forests"],
      sustainability: "90% Recycled Content"
    }
  ];

  const resolvedPortfolioProjects = (() => {
    const cards = [] as Array<{
      title: string;
      location?: string | null;
      description?: string | null;
      image: string;
      slug: string;
      badgeLabel?: string;
      year?: string;
    }>;

    for (let i = 0; i < 2; i += 1) {
      const project = featuredProjects[i];
      const fallback = canadianProjects[i];

      if (!project) {
        cards.push({
          title: fallback.title,
          location: fallback.location,
          description: fallback.description,
          image: fallback.image,
          slug: generateSlug(fallback.title),
          badgeLabel: 'Featured',
          year: fallback.year,
        });
        continue;
      }

      const title = project.title?.trim() || fallback.title;
      const location = project.location?.trim() || fallback.location;
      const description = project.description?.trim() || project.subtitle?.trim() || fallback.description;
      const image = getPortfolioImageUrl(project.main_image || project.hero_image || null, fallback.image);
      const cleanedSlug = extractSlug(project.slug || title);

      cards.push({
        title,
        location,
        description,
        image,
        slug: cleanedSlug,
        badgeLabel: project.tags ? project.tags.split(',')[0] || 'Featured' : 'Featured',
        year: project.subtitle?.match(/20\d{2}/)?.[0] || undefined,
      });
    }

    return cards;
  })();

  const canadianStats = [
    { number: "100+", label: "Canadian Hotels" },
    { number: "10", label: "Provinces Served" },
    { number: "500+", label: "Custom Designs" },
    { number: "100%", label: "Eco-Friendly" }
  ];

  const testimonials = [
    {
      name: "Marc Dubois",
      title: "General Manager",
      company: "Fairmont Chateau Frontenac, QC",
      avatar: "/api/placeholder/64/64",
      rating: 5,
      text: "Sara Global’s commitment to quality and Canadian craftsmanship is evident in every piece. Our guests love that the furniture tells a story of local heritage and sustainability. It has truly redefined our suite experience."
    },
    {
      name: "James MacLeod",
      title: "Operations Director",
      company: "Whistler Mountain Resort, BC", 
      avatar: "/api/placeholder/64/64",
      rating: 5,
      text: "The new collection handles our harsh Alberta winters without issue. The climate-ready engineering exceeded all our expectations for durability and longevity, maintaining its pristine condition year after year."
    },
    {
      name: "Sarah Thompson",
      title: "Sustainability Officer",
      company: "Hotel Arts Calgary, AB",
      avatar: "/api/placeholder/64/64", 
      rating: 5,
      text: "Partnering with Sara Global aligned perfectly with our corporate zero-waste goals. Their circular economy approach and use of FSC-certified wood helped us achieve our sustainability targets ahead of schedule."
    },
    {
      name: "Robert Chen",
      title: "Property Owner",
      company: "Boutique Inn Toronto, ON",
      avatar: "/api/placeholder/64/64",
      rating: 5,
      text: "The local sourcing and authentic Canadian maple pieces resonate so well with our guests. Sara Global didn't just supply furniture; they helped us create a truly authentic Canadian hospitality experience."
    },
    {
      name: "Eleanor Vance",
      title: "Procurement Manager", 
      company: "Northern Lights Hotel, YT",
      avatar: "/api/placeholder/64/64",
      rating: 5,
      text: "From initial consultation to on-time delivery and installation in the Yukon, Sara Global was professional and flawless. The quality is exceptional, and their team made a complex project feel simple."
    },
    {
      name: "David Kim",
      title: "Director of Development",
      company: "Urban Suites Vancouver, BC",
      avatar: "/api/placeholder/64/64",
      rating: 5,
      text: "We needed a unique, custom-designed collection for our new hotel concept. Sara Global's design and engineering team delivered a truly bespoke, stunning product that perfectly captures our brand identity."
    }
  ];

  const totalTestimonialSlides = Math.ceil(testimonials.length / 3);
  const totalTestimonialSlidesMobile = testimonials.length;

  const nextTestimonialSlide = () => {
    setCurrentTestimonialSlide((prev) => (prev + 1) % totalTestimonialSlides);
  };

  const prevTestimonialSlide = () => {
    setCurrentTestimonialSlide((prev) => (prev - 1 + totalTestimonialSlides) % totalTestimonialSlides);
  };

  const nextTestimonialSlideMobile = () => {
    setCurrentTestimonialSlide((prev) => (prev + 1) % totalTestimonialSlidesMobile);
  };

  const prevTestimonialSlideMobile = () => {
    setCurrentTestimonialSlide((prev) => (prev - 1 + totalTestimonialSlidesMobile) % totalTestimonialSlidesMobile);
  };

  // Canadian Blog Data
  const blogFallback = {
    featured: {
      title: "The Canadian Advantage: How Local Sourcing Transforms Hotel Sustainability",
      excerpt: "Discover how Canadian hotels are leading the sustainability revolution by partnering with local craftsmen and using FSC-certified Canadian hardwoods.",
      image: "https://images.unsplash.com/photo-1668628422941-a8e5315441c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5hZGlhbiUyMHN1c3RhaW5hYmxlJTIwZnVybml0dXJlJTIwd29ya3Nob3B8ZW58MXx8fHwxNzU3NTAyNTI2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Canadian Sustainability",
      date: "March 15, 2024",
      readTime: "8 min read",
      author: "Marie Dubois",
      views: "3.2k",
      slug: 'the-canadian-advantage-local-sourcing-transforms-hotel-sustainability'
    },
    posts: [
      {
        title: "Winter-Ready Hotel Furniture: Engineering for Canadian Climates",
        excerpt: "How our furniture is specifically designed to withstand Canada's harsh winters while maintaining luxury aesthetics.",
        image: "https://images.unsplash.com/photo-1739907549777-6ff7cd3921fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5hZGlhbiUyMG1vdW50YWluJTIwaG90ZWwlMjBsb2RnZXxlbnwxfHx8fDE3NTc1MDI0MTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
        category: "Climate Solutions",
        date: "March 12, 2024",
        readTime: "6 min read",
        author: "James MacLeod",
        location: "Whistler, BC",
        slug: 'winter-ready-hotel-furniture-engineering-for-canadian-climates'
      },
      {
        title: "From Forest to Hotel: Our Canadian Supply Chain Story",
        excerpt: "An inside look at how we partner with Canadian forest cooperatives to create sustainable furniture solutions.",
        image: "https://images.unsplash.com/photo-1664423556803-e986b9124f15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMHdvb2QlMjBmdXJuaXR1cmUlMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NTc1MDE4MjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
        category: "Local Sourcing",
        date: "March 10, 2024",
        readTime: "7 min read",
        author: "Robert Thompson",
        location: "Toronto, ON",
        slug: 'from-forest-to-hotel-our-canadian-supply-chain-story'
      },
      {
        title: "Indigenous Design Influences in Modern Canadian Hospitality",
        excerpt: "How traditional Indigenous craftsmanship techniques are inspiring contemporary hotel furniture design across Canada.",
        image: "https://images.unsplash.com/photo-1725623831897-fb009acfe742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YW5jb3V2ZXIlMjBsdXh1cnklMjBob3RlbCUyMGludGVyaW9yfGVufDF8fHwxNzU3NTAyNDE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
        category: "Cultural Heritage",
        date: "March 8, 2024",
        readTime: "9 min read",
        author: "Sarah Blackbird",
        location: "Vancouver, BC",
        slug: 'indigenous-design-influences-modern-canadian-hospitality'
      },
    ]
  };

  const resolveBlogSummary = <T extends { description?: string | null; excerpt?: string | null }>(post: T): string => {
    const value = post.description ?? post.excerpt ?? '';
    return value?.trim() ?? '';
  };

  const featuredBlogSource = featuredBlog ?? blogFallback.featured;

  const featuredBlogCard = {
    title: featuredBlogSource.title,
    excerpt: resolveBlogSummary(featuredBlogSource),
    image: featuredBlogSource.image,
    category: featuredBlogSource.category,
    date: featuredBlogSource.date,
    readTime: featuredBlogSource.readTime,
    author: featuredBlogSource.author,
    slug: featuredBlogSource.slug,
  };

  const recentBlogCards = (recentBlogs.length ? recentBlogs : blogFallback.posts)
    .slice(0, 3)
    .map((post) => ({
      title: post.title,
      excerpt: resolveBlogSummary(post),
      image: post.image,
      category: post.category,
      date: post.date,
      readTime: post.readTime,
      author: post.author,
      location: 'location' in post && post.location ? post.location : 'Canada',
      slug: post.slug,
    }));

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner - Canada Specific Dark Design */}
      <section id="home" className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          {/* Mobile Layout - Content First, Image Second */}
          <div className="lg:hidden space-y-8 text-center flex flex-col items-center">
            {/* Content for Mobile */}
            <div className="space-y-6 text-white flex flex-col justify-center items-center w-full">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm text-primary px-4 py-2 rounded-full border border-primary/30 text-xs font-medium">
                  <Leaf className="w-4 h-4" />
                  <span className="whitespace-nowrap">Canadian Hotel Furniture Excellence</span>
                </div>
                
                <h1 className="text-2xl sm:text-4xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Hospitality Furniture
                  </span>
                  <span className="text-primary block mt-2">Manufacturer In Canada</span>
                </h1>
                
                <p className="text-base text-gray-300 max-w-2xl leading-relaxed">
                  Elevate your property with premium furniture design, crafted using eco-conscious and sustainably sourced Canadian materials. Our pieces seamlessly blend luxury, durability, and environmental responsibility for the modern Canadian traveler.
                </p>
              </div>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col gap-3 px-4 w-full">
                <Link href="/ca/portfolio">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-white shadow-lg w-full"
                  >
                    View Our Portfolio
                    <ArrowRight className="w-4 h-4 ml-2 animate-pulse" style={{ animation: 'arrowMove 2s ease-in-out infinite' }} />
                  </Button>
                </Link>
                <Link href="/ca/contact">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-2 border-white bg-white/10 text-white hover:bg-white/20 hover:text-white w-full"
                  >
                    Get Free Consultation
                  </Button>
                </Link>
              </div>
            </div>

            {/* Image for Mobile */}
            <div className="relative w-full max-w-md mx-auto">
              <div className="relative z-10">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <ImageWithFallback
                    src="/canada/canada_hero.webp"
                    alt="Canadian luxury hotel interior"
                    className="w-full h-48 sm:h-64 object-cover"
                    width={1080}
                    height={450}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout - Hidden on mobile */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-6 lg:gap-16 items-center">
            {/* Content */}
            <div className="space-y-8 text-white flex flex-col justify-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 bg-primary/20 backdrop-blur-sm text-primary px-6 py-3 rounded-full border border-primary/30">
                  <Leaf className="w-5 h-5" />
                  <span className="font-medium">Canadian Hotel Furniture Excellence</span>
                </div>
                
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Hospitality Furniture
                  </span>
                  <span className="text-primary block mt-2">Manufacturer In Canada</span>
                </h1>
                
                <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed">
                  Elevate your property with premium furniture design, crafted using eco-conscious and sustainably sourced Canadian materials. Our pieces seamlessly blend luxury, durability, and environmental responsibility for the modern Canadian traveler.
                </p>
              </div>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link href="/ca/portfolio">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto py-4 sm:py-3 text-base sm:text-sm font-medium"
                  >
                    View Our Portfolio
                    <ArrowRight className="w-4 h-4 ml-2 animate-pulse" style={{ animation: 'arrowMove 2s ease-in-out infinite' }} />
                  </Button>
                </Link>
                <Link href="/ca/contact">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-2 border-white bg-white/10 text-white hover:bg-white/20 hover:text-white w-full sm:w-auto py-4 sm:py-3 text-base sm:text-sm font-medium"
                  >
                    Get Free Consultation
                  </Button>
                </Link>
              </div>
            </div>

            {/* Hero Image with Modern Design */}
            <div className="relative">
              <div className="relative z-10">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <ImageWithFallback
                    src="/canada/canada_hero.webp"
                    alt="Canadian luxury hotel interior"
                    className="w-full h-[450px] object-cover"
                    width={1080}
                    height={450}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - White Card Boxes */}
      <section className="py-8 sm:py-10 md:py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats Grid - matching design */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-2 sm:mb-6 md:mb-8 lg:mb-10">
            {/* Canadian Hotels */}
            <div className="text-center">
              <div className="bg-white/95 backdrop-blur-sm p-3 sm:p-4 md:p-6 rounded-xl shadow-2xl border border-white/20">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-1">100+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Canadian Hotels</div>
              </div>
            </div>

            {/* Provinces Served */}
            <div className="text-center">
              <div className="bg-white/95 backdrop-blur-sm p-3 sm:p-4 md:p-6 rounded-xl shadow-2xl border border-white/20">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-1">10</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Provinces Served</div>
              </div>
            </div>

            {/* Eco-Friendly */}
            <div className="text-center">
              <div className="bg-white/95 backdrop-blur-sm p-3 sm:p-4 md:p-6 rounded-xl shadow-2xl border border-white/20">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-1">100%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Eco-Friendly</div>
              </div>
            </div>

            {/* Avg Rating */}
            <div className="text-center">
              <div className="bg-white/95 backdrop-blur-sm p-3 sm:p-4 md:p-6 rounded-xl shadow-2xl border border-white/20">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-1">4.9★</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Avg. Rating</div>
              </div>
            </div>
          </div>

          {/* Brand Logos Section - Clean white background */}
          <div className="pt-6 sm:pt-8 border-t border-gray-200">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground mb-2">Trusted by Canada&apos;s Leading Hotel Brands</h3>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                Premium hospitality groups across the nation choose Sara Global Hospitality for sustainable,
                <br className="hidden sm:block" />
                high-performance Canadian furniture solutions.
              </p>
            </div>
            
            <div className="overflow-hidden py-4">
              <div className="flex animate-scroll-logos gap-8 sm:gap-16 items-center">
                {/* Duplicate the logos for seamless loop */}
                {[...Array(2)].map((_, setIndex) => (
                  <div key={setIndex} className="flex gap-8 sm:gap-16 items-center flex-shrink-0">
                    {brandLogos.map((logo, index) => (
                      <div key={`${setIndex}-${index}`} className="flex-shrink-0">
                        <ImageWithFallback
                          src={logo.src}
                          alt={`${logo.name} logo`}
                          className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain transition-all duration-300 hover:scale-105"
                          width={300}
                          height={120}
                          quality={100}
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Sara Global Canada Section */}
      <section id="about" className="py-8 sm:py-10 md:py-12 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-2 sm:px-4 rounded-full mb-4 text-xs sm:text-sm">
              <Leaf className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>About Sara Global Canada</span>
            </div>
            <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-2 sm:mb-4 leading-relaxed">
              Canadian Heritage Meets
              <span className="text-primary block mt-0 sm:mt-1">Modern Innovation</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Our collections are sustainable, durable solutions that embody the spirit of authentic Canadian craftsmanship and great environmental stewardship.
            </p>
          </div>

          {/* Two-Column Layout - Image Left, Values Right */}
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Left - Image */}
            <motion.div
              initial={isMounted ? "hidden" : undefined}
              whileInView={isMounted ? "visible" : undefined}
              viewport={{ once: true }}
              variants={isMounted ? itemVariants : undefined}
              className="relative order-1 lg:order-1"
              suppressHydrationWarning
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg h-full">
                <ImageWithFallback
                  src="/canada/canada_about.webp"
                  alt="Canadian furniture manufacturing facility"
                  className="w-full h-48 sm:h-64 md:h-72 lg:h-full object-cover"
                  width={1080}
                  height={600}
                />
              </div>
            </motion.div>

            {/* Right - Our Canadian Values */}
            <motion.div
              initial={isMounted ? "hidden" : undefined}
              whileInView={isMounted ? "visible" : undefined}
              viewport={{ once: true }}
              variants={isMounted ? containerVariants : undefined}
              className="flex flex-col justify-between space-y-4 sm:space-y-6 order-2 lg:order-2 text-center lg:text-left items-center lg:items-stretch"
              suppressHydrationWarning
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-900">Our Canadian Values</h3>
                
                <div className="space-y-3 sm:space-y-4 w-full max-w-xl">
                  {/* Environmental Stewardship */}
                  <motion.div
                    initial={isMounted ? "hidden" : undefined}
                    variants={isMounted ? itemVariants : undefined}
                    className="flex items-start gap-3 p-3 sm:p-4 bg-white rounded-xl border border-gray-100 shadow-sm text-left"
                    suppressHydrationWarning
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Leaf className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-sm sm:text-base">Environmental Stewardship</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">100% locally and sustainably sourced materials.</p>
                    </div>
                  </motion.div>

                  {/* Climate Resilience */}
                  <motion.div
                    initial={isMounted ? "hidden" : undefined}
                    variants={isMounted ? itemVariants : undefined}
                    className="flex items-start gap-3 p-3 sm:p-4 bg-white rounded-xl border border-gray-100 shadow-sm text-left"
                    suppressHydrationWarning
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Snowflake className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-sm sm:text-base">Climate Resilience</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">Engineered and rigorously tested to thrive in Canada&apos;s diverse and demanding climates.</p>
                    </div>
                  </motion.div>

                  {/* Heritage Craftsmanship */}
                  <motion.div
                    initial={isMounted ? "hidden" : undefined}
                    variants={isMounted ? itemVariants : undefined}
                    className="flex items-start gap-3 p-3 sm:p-4 bg-white rounded-xl border border-gray-100 shadow-sm text-left"
                    suppressHydrationWarning
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mountain className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-sm sm:text-base">Heritage Craftsmanship</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">Traditional techniques fused with modern applications to ensure lasting quality.</p>
                    </div>
                  </motion.div>

                  {/* Circular Economy */}
                  <motion.div
                    initial={isMounted ? "hidden" : undefined}
                    variants={isMounted ? itemVariants : undefined}
                    className="flex items-start gap-3 p-3 sm:p-4 bg-white rounded-xl border border-gray-100 shadow-sm text-left"
                    suppressHydrationWarning
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Recycle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-sm sm:text-base">Circular Economy</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">Zero-waste manufacturing and end-of-life recycling processes to minimize impact.</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* View More Button */}
              <div className="pt-4 w-full max-w-xl">
                <Link href="/ca/about">
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                  >
                    View More About Us
                    <ArrowRight className="w-4 h-4 ml-2 animate-pulse" style={{ animation: 'arrowMove 2s ease-in-out infinite' }} />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section id="products" className="py-8 sm:py-10 md:py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-2 sm:px-4 rounded-full mb-4 text-sm">
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 animate-pulse" style={{ animation: 'arrowMove 2s ease-in-out infinite' }} />
              <span>Product Categories</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-relaxed">
              Sustainable Solutions
              <span className="text-primary block mt-0 sm:mt-1">Crafted in Canada</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Honoring the natural beauty and rugged resilience of our homeland, our Canadian collections meet the most demanding standards of modern hospitality. Each piece is a testament to environmental responsibility and authentic heritage craftsmanship.
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
                  aria-label="Previous product categories"
                  className="rounded-full border-2 hover:bg-primary hover:text-white transition-colors w-8 h-8 sm:w-10 sm:h-10 p-0"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextSlide}
                  aria-label="Next product categories"
                  className="rounded-full border-2 hover:bg-primary hover:text-white transition-colors w-8 h-8 sm:w-10 sm:h-10 p-0"
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
                      index === currentSlide ? 'bg-primary' : 'bg-gray-300'
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
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg">
                                    <IconComponent className="w-6 h-6 text-primary" />
                                  </div>
                                </div>
                                
                                <div className="p-6 pb-4">
                                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{category.title}</h3>
                                  <p className="text-gray-600 mb-4 line-clamp-2">{category.description}</p>
                                  
                                  <div className="grid grid-cols-2 gap-2 mb-3">
                                    {category.features.slice(0, 4).map((feature, featureIndex) => (
                                      <div key={featureIndex} className="flex items-start gap-2 text-sm">
                                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-1.5"></div>
                                        <span className="flex-1 break-words">{feature}</span>
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
        </div>
      </section>

      {/* Our Canadian Commitment CTA Section */}
      <section className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden">
            {/* Background Image with Dark Overlay */}
            <div className="absolute inset-0">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1717500252709-05a73fc4f1da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGZ1cm5pdHVyZSUyMG1hbnVmYWN0dXJpbmclMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NTc1ODU0MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Canadian furniture manufacturing workshop"
                className="w-full h-full object-cover"
                width={1920}
                height={1080}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/85 to-slate-900/90"></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 p-8 sm:p-10 md:p-12 text-white text-center">
              <h2 className="text-2xl sm:text-4xl font-bold mb-4 leading-tight">
                Our Canadian Commitment
              </h2>
              <p className="text-slate-200 text-base sm:text-lg max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed">
                Sara Global&apos;s unwavering commitment is rooted in environmental stewardship and fostering local craftsmanship. Our Canadian collections proudly support local communities while delivering exceptional, high-quality hospitality furniture solutions made specifically for the domestic market.
              </p>
              <div className="flex justify-center">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    if (typeof window !== 'undefined') {
                      window.openQuotePopup?.();
                    }
                  }}
                  className="bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-3 h-auto shadow-lg shadow-primary/25 font-semibold text-sm sm:text-base rounded-md"
                >
                  Request A Quote
                  <ArrowRight className="w-4 h-4 ml-2 inline animate-pulse" style={{ animation: 'arrowMove 2s ease-in-out infinite' }} />
                </button>
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

      {/* Canadian Portfolio Section */}
      <section id="portfolio" className="py-8 sm:py-10 md:py-12 bg-gradient-to-b from-slate-900 to-slate-800 text-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Canadian Header */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm text-primary px-4 py-2 rounded-full mb-4 border border-primary/30">
              <ExternalLink className="w-4 h-4" />
              <span>Our Portfolio</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 leading-relaxed">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Discover Our Canada&apos;s
              </span>
              <span className="text-primary block mt-0 sm:mt-1">Hospitality Portfolio</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
              We deliver sustainable, custom furniture solutions for Canada&apos;s most prestigious and ecologically conscious hotels, resorts, and hospitality spaces.
            </p>
          </div>

          {/* Featured Projects Grid - Two Cards */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {resolvedPortfolioProjects.map((project, index) => (
              <div key={`${project.slug}-${index}`} className="relative bg-slate-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50">
                <div className="relative">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 sm:h-80 object-cover"
                    width={800}
                    height={400}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Featured Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-primary/90 text-white px-3 py-1 rounded-full flex items-center gap-2">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span className="text-sm font-medium">{project.badgeLabel || 'Featured'}</span>
                    </div>
                  </div>

                  {/* Project Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{project.title}</h3>
                    {(project.location || project.year) && (
                      <div className="flex items-center gap-4 text-white/80 text-sm mb-3">
                        <span>
                          {[project.location, project.year].filter(Boolean).join(' • ')}
                        </span>
                      </div>
                    )}
                    {project.description && (
                      <p className="text-white/90 text-sm mb-4 line-clamp-2">{project.description}</p>
                    )}
                    <Link href={`/ca/portfolio/${project.slug}`}>
                      <Button className="bg-primary hover:bg-primary/90 text-white text-sm sm:text-base">
                        View Details
                        <ArrowRight className="w-4 h-4 ml-2 animate-pulse" style={{ animation: 'arrowMove 2s ease-in-out infinite' }} />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Canadian Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {canadianStats.map((stat, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-slate-700/50 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Explore All Projects Button */}
          <div className="text-center">
            <Link href="/ca/portfolio">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold"
              >
                Explore All Projects
                <ArrowRight className="w-4 h-4 ml-2 animate-pulse" style={{ animation: 'arrowMove 2s ease-in-out infinite' }} />
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
              What Canadian Hoteliers
              <span className="text-[#f26d35] block mt-0 sm:mt-2">Say About Our Work</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From coast to coast, Canadian hospitality leaders trust Sara Global Hospitality for sustainable furniture solutions.
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
                    onClick={() => setCurrentTestimonialSlide(index)}
                    className={`w-0.5 h-0.5 sm:w-2 sm:h-2 rounded-full transition-colors ${
                      index === currentTestimonialSlide ? 'bg-[#f26d35]' : 'bg-gray-300'
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
                style={{ transform: `translateX(-${currentTestimonialSlide * 100}%)` }}
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
                style={{ transform: `translateX(-${currentTestimonialSlide * 100}%)` }}
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
              Ready to Transform Your Canadian Hospitality Space?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let&apos;s discuss how Sara Global Hospitality can bring your vision to life with our 
              sustainable Canadian furniture solutions and expert craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 justify-center">
              <Link href="/ca/contact" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="bg-[#f26d35] text-white hover:bg-[#f26d35]/90 w-full sm:w-auto"
                >
                  Get Free Consultation
                  <ArrowRight className="w-4 h-4 ml-2 animate-pulse" style={{ animation: 'arrowMove 2s ease-in-out infinite' }} />
                </Button>
              </Link>
              <Link href="/ca/portfolio" className="w-full sm:w-auto">
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
      <section id="blogs" className="py-6 sm:py-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-4 sm:mb-6">
            <div className="inline-flex items-center gap-2 bg-[#f26d35]/10 text-[#f26d35] px-4 py-2 rounded-full mb-3 sm:mb-4">
              <BookOpen className="w-4 h-4" />
              <span>Industry Insights</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-2 sm:mb-4 leading-relaxed">
              Stories from Canada&apos;s
              <span className="text-[#f26d35] block mt-0 sm:mt-1">Hospitality Leaders</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto">
              Exclusive insights and sustainability stories from across Canada&apos;s hospitality landscape.
            </p>
            <div className="h-4 sm:h-6" />
          </div>

          {/* Blog Layout - Featured Article Left, Articles List Right */}
          <div className="grid lg:grid-cols-5 gap-4 sm:gap-6 mb-4 sm:mb-6">
            {/* Featured Article - takes 2 columns */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-xl overflow-hidden bg-gradient-to-r from-white to-gray-50/50 h-full flex flex-col">
                <div className="relative">
                  <ImageWithFallback
                    src={featuredBlogCard.image}
                    alt={featuredBlogCard.title}
                    className="w-full h-48 sm:h-56 object-cover"
                    width={800}
                    height={320}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                    <div className="bg-[#f26d35] text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium shadow-lg flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      <span>Featured</span>
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 right-3 sm:right-4">
                    <div className="flex items-center gap-3 sm:gap-4 text-white text-xs sm:text-sm">
                      <div className="flex items-center gap-1">
                        <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{featuredBlogCard.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{featuredBlogCard.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-3 sm:p-4 flex flex-col flex-1">
                  <div className="bg-gray-100 text-gray-700 px-2 sm:px-3 py-1 rounded-full text-xs w-fit mb-2 sm:mb-3">{featuredBlogCard.category}</div>
                  <h3 className="text-base sm:text-lg font-bold mb-2 leading-tight line-clamp-2">{featuredBlogCard.title}</h3>
                  <p className="text-gray-600 mb-3 text-xs sm:text-sm leading-relaxed line-clamp-2 flex-1">{featuredBlogCard.excerpt}</p>
                  
                  <div className="flex items-center gap-3 sm:gap-4 text-xs text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      <span>{featuredBlogCard.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{featuredBlogCard.date}</span>
                    </div>
                  </div>
                  
                  <Link href={`/ca/blog/${featuredBlogCard.slug}`} className="block">
                    <Button size="sm" className="w-full bg-[#f26d35] hover:bg-[#f26d35]/90 text-white text-xs sm:text-sm py-2">
                      Read Article
                            <ArrowRight className="w-3 h-3 ml-2 animate-pulse" style={{ animation: 'arrowMove 2s ease-in-out infinite' }} />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            {/* Article Grid - takes 3 columns */}
            <div className="lg:col-span-3 flex flex-col justify-between">
              <div className="grid grid-cols-1 gap-3 sm:gap-4">
                {recentBlogCards.map((post, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm overflow-hidden">
                    <div className="flex gap-3 sm:gap-4 p-3 sm:p-4">
                      <div className="relative flex-shrink-0">
                        <ImageWithFallback
                          src={post.image}
                          alt={post.title}
                          className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                          width={96}
                          height={96}
                        />
                        <div className="absolute -top-1 -right-1">
                          <div className="bg-white/90 text-gray-700 px-2 py-0.5 rounded-full text-xs shadow-sm">
                            {post.category}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold mb-1 sm:mb-2 group-hover:text-[#f26d35] transition-colors line-clamp-2 text-xs sm:text-sm leading-snug">
                          {post.title}
                        </h3>
                        
                        <p className="text-xs text-gray-600 mb-2 line-clamp-2 leading-relaxed">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between text-xs text-gray-600">
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1">
                              <Users className="w-3 h-3" />
                              <span className="hidden sm:inline">{post.author}</span>
                            </div>
                            <div className="flex items-center gap-1 text-[#f26d35]">
                              <MapPin className="w-3 h-3" />
                          <span className="hidden sm:inline">{post.location}</span>
                            </div>
                          </div>
                          
                          <Link href={`/ca/blog/${post.slug}`} className="flex items-center gap-1 text-[#f26d35] hover:gap-2 transition-all group/btn">
                            <span className="text-xs font-medium">Read</span>
                            <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform duration-300 animate-pulse" style={{ animation: 'arrowMove 2s ease-in-out infinite' }} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* View All CTA */}
          <div className="text-center">
            <Link href="/ca/blog">
              <Button variant="outline" className="border-[#f26d35] text-[#f26d35] hover:bg-[#f26d35] hover:text-white text-sm sm:text-base">
                View All Articles
                <ArrowRight className="w-4 h-4 ml-2 animate-pulse" style={{ animation: 'arrowMove 2s ease-in-out infinite' }} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section - Get In Touch */}
      <ContactSection />
    </div>
  );
}
