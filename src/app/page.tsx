"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { COUNTRIES } from '@/lib/constants';
import { 
  Globe, 
  ArrowRight, 
  Star, 
  Building, 
  Quote, 
  MessageSquare, 
  Send,
  Phone,
  Mail,
  MapPin,
  Clock,
  Download,
  BookOpen,
  Calendar,
  User,
  Eye,
  Bed,
  Coffee,
  Users,
  Bath,
  ChevronLeft,
  ChevronRight,
  Award,
  Shield,
  Truck,
  Wrench,
  CheckCircle,
  AlertCircle,
  Headphones,
  Zap,
  Target,
  ExternalLink,
  TrendingUp
} from 'lucide-react';
import Link from 'next/link';
import { useHydrationSafe } from '@/hooks/useHydrationSafe';
import { useState } from 'react';
import { useInquiryForm } from '@/hooks/useInquiryForm';

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

export default function CommonHomepage() {
  const isMounted = useHydrationSafe();
  const [currentSlide, setCurrentSlide] = useState(0);
  const {
    formData,
    errors,
    submissionState,
    updateField,
    toggleCategory,
    submitForm
  } = useInquiryForm();
  const itemsPerPage = 3;
  
  const categories = [
    {
      icon: Bath,
      title: "Bathroom Vanities",
      description: "Custom vanities, mirrors, and storage solutions for hotel bathrooms with premium finishes",
      image: "https://images.unsplash.com/photo-1658595148900-c77873724e98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGJhdGhyb29tJTIwdmFuaXR5JTIwZnVybml0dXJlfGVufDF8fHx8MTc1NzAwMjk2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Water-resistant materials", "Custom sizing options", "Integrated storage", "LED lighting systems"]
    },
    {
      icon: Coffee,
      title: "Soft Seating",
      description: "Comfortable sofas, chairs, and lounge furniture for lobbies, guest rooms, and common areas",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzb2Z0JTIwc2VhdGluZyUyMGZ1cm5pdHVyZXxlbnwxfHx8fDE3NTcwMDMxNTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Premium upholstery", "Modular designs", "Ergonomic support", "Easy maintenance"]
    },
    {
      icon: Users,
      title: "Countertops & Cabinets",
      description: "High-quality countertops, cabinets, and storage solutions for kitchens, bars, and workspaces",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGtpdGNoZW4lMjBjYWJpbmV0cyUyMGNvdW50ZXJ0b3BzfGVufDF8fHx8MTc1NzAwMzE1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Durable materials", "Custom configurations", "Space optimization", "Modern finishes"]
    },
    {
      icon: Bed,
      title: "Hospitality Casegoods",
      description: "Premium bedroom furniture including beds, nightstands, dressers, and wardrobes for guest rooms",
      image: "https://images.unsplash.com/photo-1590490359854-dfba19688d70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb20lMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzU2OTk4MzIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Solid wood construction", "Custom headboards", "Integrated storage", "Luxury finishes"]
    },
    {
      icon: Coffee,
      title: "Outdoor Furniture",
      description: "Weather-resistant patio, poolside, and garden furniture designed for hospitality environments",
      image: "https://images.unsplash.com/photo-1661024768242-5fd7c8f1e3c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMG91dGRvb3IlMjBwYXRpbyUyMGZ1cm5pdHVyZXxlbnwxfHx8fDE3NTcwMDI5Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["All-weather materials", "UV resistant finishes", "Pool furniture sets", "Garden seating"]
    },
    {
      icon: Users,
      title: "Fixture & Equipment",
      description: "Professional fixtures, lighting, and specialized equipment for hospitality environments",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGZpeHR1cmVzJTIwZXF1aXBtZW50JTIwbGlnaHRpbmd8ZW58MXx8fHwxNzU3MDAzMTU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
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

  const projects = [
    {
      slug: "grand-palace-hotel-dubai",
      title: "Grand Palace Hotel Dubai",
      location: "Dubai, UAE",
      year: "2023",
      type: "Luxury Resort",
      rooms: "450 Rooms",
      description: "Complete furniture solution for a 5-star luxury resort featuring custom-designed bedroom sets, lobby furniture, and dining collections.",
      image: "https://images.unsplash.com/photo-1590490359854-dfba19688d70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHN1aXRlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU2OTE4Njk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Luxury", "Custom Design", "Complete Furnishing"],
      featured: true
    },
    {
      slug: "wellness-spa-resort",
      title: "Wellness Spa Resort",
      location: "Bali, Indonesia",
      year: "2023",
      type: "Spa Resort",
      rooms: "120 Rooms",
      description: "Sustainable furniture solutions for an eco-luxury spa resort with focus on natural materials and wellness-oriented design.",
      image: "https://images.unsplash.com/photo-1582533568805-78a15dcb01b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNwYSUyMHJlbGF4YXRpb24lMjBhcmVhfGVufDF8fHwxNzU3MDAzMDM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Eco-Friendly", "Spa Design", "Wellness"]
    },
    {
      slug: "metropolitan-boutique-hotel",
      title: "Metropolitan Boutique Hotel",
      location: "New York, USA",
      year: "2022",
      type: "Boutique Hotel",
      rooms: "95 Rooms",
      description: "Modern urban design with space-efficient solutions for a trendy boutique hotel in Manhattan's financial district.",
      image: "https://images.unsplash.com/photo-1718104717529-0059a1a860fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3V0aXF1ZSUyMGhvdGVsJTIwcmVjZXB0aW9ufGVufDF8fHx8MTc1NzAwMzAzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Urban Design", "Space Efficient", "Modern"]
    },
    {
      slug: "royal-heritage-hotel",
      title: "Royal Heritage Hotel",
      location: "London, UK",
      year: "2022",
      type: "Heritage Hotel",
      rooms: "200 Rooms",
      description: "Classic elegance meets modern comfort in this restored Victorian hotel with period-appropriate custom furniture.",
      image: "https://images.unsplash.com/photo-1755644046048-989506b73a5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3RlbCUyMGxvYmJ5JTIwZnVybml0dXJlfGVufDF8fHx8MTc1NzAwMjkwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Heritage", "Classic Design", "Restoration"]
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
      name: "Sarah Johnson",
      title: "General Manager",
      company: "Grand Palace Hotel Dubai",
      avatar: "/api/placeholder/64/64",
      rating: 5,
      text: "Sara Global delivered exceptional quality furniture that perfectly matched our luxury brand. Their attention to detail and project management made the entire process seamless. Our guests constantly compliment the beautiful interiors."
    },
    {
      name: "Michael Chen",
      title: "Head of Operations",
      company: "Metropolitan Hotels Group", 
      avatar: "/api/placeholder/64/64",
      rating: 5,
      text: "Working with Sara Global has been a game-changer for our hotel chain. Their ability to deliver consistent quality across multiple properties while meeting tight deadlines is remarkable. Highly recommended!"
    },
    {
      name: "Emily Rodriguez",
      title: "Interior Design Director",
      company: "Boutique Hotels International",
      avatar: "/api/placeholder/64/64", 
      rating: 5,
      text: "The custom furniture solutions from Sara Global brought our design vision to life perfectly. Their team understood our unique requirements and delivered beyond expectations. The craftsmanship is outstanding."
    },
    {
      name: "David Thompson",
      title: "Property Owner",
      company: "Seaside Resort Miami",
      avatar: "/api/placeholder/64/64",
      rating: 5,
      text: "Sara Global's weather-resistant outdoor furniture has exceeded our expectations. After two years of coastal exposure, everything still looks brand new. Their warranty and support service is excellent."
    },
    {
      name: "Lisa Wang",
      title: "Procurement Manager", 
      company: "Asia Pacific Hotels",
      avatar: "/api/placeholder/64/64",
      rating: 5,
      text: "The most reliable furniture supplier we've worked with. Sara Global consistently delivers on time, within budget, and with superior quality. Their global logistics capabilities are impressive."
    },
    {
      name: "Robert Mitchell",
      title: "Development Director",
      company: "Heritage Hotels UK",
      avatar: "/api/placeholder/64/64",
      rating: 5,
      text: "Sara Global's expertise in heritage hotel furnishing is unmatched. They created period-appropriate furniture that maintains historical authenticity while meeting modern comfort standards."
    }
  ];

  const totalTestimonialSlides = Math.ceil(testimonials.length / 3);

  const nextTestimonialSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalTestimonialSlides);
  };

  const prevTestimonialSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalTestimonialSlides) % totalTestimonialSlides);
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

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1-678-431-9041", "+1-678-431-9041"],
      description: "Mon-Fri 8AM-6PM EST"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@saraglobal.com", "sales@saraglobal.com"],
      description: "24/7 Email Support"
    },
    {
      icon: MapPin,
      title: "Headquarters",
      details: ["Sara Global Hospitality", "2600 Pleasantdale Rd. Ste 12, Atlanta, GA 30340"],
      description: "Visit our showroom"
    },
    {
      icon: Globe,
      title: "Global Offices",
      details: ["Dubai • London • Singapore", "Mumbai • Shanghai • Toronto"],
      description: "Worldwide presence"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 bg-[#f26d35]/10 text-[#f26d35] px-4 py-2 rounded-full">
                  <Star className="w-4 h-4" />
                  <span>Premium Hotel Furniture Manufacturer</span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Crafting Exceptional
                  <span className="text-[#f26d35] block">Hotel Furniture</span>
                  Since 1995
                </h1>
                <p className="text-lg text-gray-600 max-w-lg">
                  Transform your hospitality spaces with our premium furniture solutions. 
                  We manufacture and supply world-class hotel furniture that combines 
                  luxury, durability, and timeless design.
                </p>
              </div>

              {/* Key Points */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>25+ Years Experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>500+ Hotels Furnished</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Custom Design Solutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Global Shipping</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/portfolio">
                  <Button 
                    size="lg" 
                    className="bg-[#f26d35] hover:bg-[#f26d35]/90 text-white"
                  >
                    View Our Portfolio
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-[#f26d35] text-[#f26d35] hover:bg-[#f26d35]/10"
                  >
                    Get free Consultation
                  </Button>
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1590490359854-dfba19688d70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb20lMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzU2OTk4MzIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Luxury hotel bedroom furniture"
                  className="w-full h-[600px] object-cover rounded-lg shadow-2xl"
                />
                
                {/* Stats positioned inside the image */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-xl font-bold text-[#f26d35]">500+</div>
                      <div className="text-xs text-gray-600">Projects Completed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-[#f26d35]">50+</div>
                      <div className="text-xs text-gray-600">Countries Served</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-[#f26d35]">25+</div>
                      <div className="text-xs text-gray-600">Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#f26d35]/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500/30 rounded-full blur-xl"></div>
              
              {/* Quality Badge */}
              <div className="absolute top-6 right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#f26d35]">A+</div>
                  <div className="text-xs text-gray-600">Quality Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Brands Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
            <div className="text-center">
              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-2xl border border-white/20">
                <div className="text-3xl text-[#f26d35] mb-1">500+</div>
                <div className="text-sm text-gray-600">Hotels Served</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-2xl border border-white/20">
                <div className="text-3xl text-[#f26d35] mb-1">50+</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-2xl border border-white/20">
                <div className="text-3xl text-[#f26d35] mb-1">25+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-2xl border border-white/20">
                <div className="text-3xl text-[#f26d35] mb-1">4.9★</div>
                <div className="text-sm text-gray-600">Global Rating</div>
              </div>
            </div>
          </div>

          {/* Brand Logos Section */}
          <div className="pt-8 border-t border-gray-200">
            <div className="text-center mb-8">
              <h3 className="text-3xl lg:text-4xl text-gray-900 mb-2">Trusted by Leading Hotel Chains Worldwide</h3>
              <p className="text-gray-600">International hotel chains trust Sara Global for premium furniture solutions</p>
            </div>
            
            <div className="overflow-hidden py-4">
              <div className="flex animate-scroll-logos gap-16 items-center">
                {/* Duplicate the logos for seamless loop */}
                {[...Array(2)].map((_, setIndex) => (
                  <div key={setIndex} className="flex gap-16 items-center flex-shrink-0">
                    <div className="flex-shrink-0">
                      <img
                        src="/assets/f31b2dfb28307640a195a389e2838f1c2a7dc156.png"
                        alt="La Quinta by Wyndham logo"
                        className="h-12 w-auto object-contain transition-all duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="flex-shrink-0">
                      <img
                        src="/assets/6e7b3d1f8e168548d6b65e7dd7fb4691d792ff17.png"
                        alt="Holiday Inn Express & Suites logo"
                        className="h-12 w-auto object-contain transition-all duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="flex-shrink-0">
                      <img
                        src="/assets/1a36f52dfb717910963752bf97e84ab00d9f89e9.png"
                        alt="Quality Inn logo"
                        className="h-12 w-auto object-contain transition-all duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="flex-shrink-0">
                      <img
                        src="/assets/65e2b4ed424723dae6731b7df90d808c1d793105.png"
                        alt="Baymont by Wyndham logo"
                        className="h-12 w-auto object-contain transition-all duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="flex-shrink-0">
                      <img
                        src="/assets/d3e30d7d50aff6f76bb0916c50dc15aa2919a066.png"
                        alt="Best Western Plus logo"
                        className="h-12 w-auto object-contain transition-all duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="flex-shrink-0">
                      <img
                        src="/assets/61636d64a66e87acc43f2e63f91829fa6b8f0dea.png"
                        alt="Days Inn & Suites logo"
                        className="h-12 w-auto object-contain transition-all duration-300 hover:scale-105"
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
      <section id="about" className="pt-8 pb-4 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-[#f26d35]/10 text-[#f26d35] px-4 py-2 rounded-full mb-4">
              <Star className="w-4 h-4" />
              <span>About Sara Global Hospitality</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-2">
              Pioneering Excellence in
              <span className="text-[#f26d35] block">Hotel Furniture Manufacturing</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              For over 25 years, Sara Global Hospitality has been at the forefront of hotel furniture 
              manufacturing, creating exceptional pieces that define luxury hospitality experiences worldwide.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Our Story</h3>
                <p className="text-gray-600">
                  Founded in 1995, Sara Global Hospitality began as a small family business with a 
                  vision to transform the hospitality industry through exceptional furniture design 
                  and manufacturing. Today, we&apos;re proud to be a leading global supplier of premium 
                  hotel furniture solutions.
                </p>
                <p className="text-gray-600">
                  Our journey has been marked by continuous innovation, unwavering commitment to 
                  quality, and deep understanding of the hospitality industry&apos;s evolving needs. 
                  We&apos;ve furnished over 500 hotels across 50 countries, establishing ourselves as 
                  a trusted partner for hospitality professionals worldwide.
                </p>
              </div>

              {/* Values */}
              <div className="space-y-4">
                <h4 className="font-bold">Our Core Values</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-[#f26d35] mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-medium">Excellence</h5>
                      <p className="text-sm text-gray-600">Uncompromising quality in every piece</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-[#f26d35] mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-medium">Innovation</h5>
                      <p className="text-sm text-gray-600">Cutting-edge design and manufacturing</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-[#f26d35] mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-medium">Partnership</h5>
                      <p className="text-sm text-gray-600">Building lasting relationships</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-[#f26d35] mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-medium">Global Reach</h5>
                      <p className="text-sm text-gray-600">Serving clients worldwide</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1710828865631-6fea9948a71b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmUlMjBmYWN0b3J5JTIwcHJvZHVjdGlvbnxlbnwxfHx8fDE3NTcwMDI5MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Furniture manufacturing facility"
                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              />
              
              {/* Overlay Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl border">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#f26d35]">25+</div>
                  <div className="text-sm text-gray-600">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section id="products" className="pt-4 pb-8 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-[#f26d35]/10 text-[#f26d35] px-4 py-2 rounded-full mb-4">
              <ArrowRight className="w-4 h-4" />
              <span>Product Categories</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-2">
              Complete Furniture Solutions
              <span className="text-[#f26d35] block">For Every Space</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From luxurious guest rooms to sophisticated lobbies, we provide comprehensive 
              furniture solutions that meet the highest standards of hospitality design.
            </p>
          </div>

          {/* Categories Carousel */}
          <div className="relative mb-8">
            {/* Navigation Arrows */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevSlide}
                  className="rounded-full border-2 hover:bg-[#f26d35] hover:text-white transition-colors w-10 h-10 p-0"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextSlide}
                  className="rounded-full border-2 hover:bg-[#f26d35] hover:text-white transition-colors w-10 h-10 p-0"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
              
              {/* Slide Indicators */}
              <div className="flex gap-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
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
                                  <img
                                    src={category.image}
                                    alt={category.title}
                                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
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
                                
                                <div className="p-6">
                                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#f26d35] transition-colors">{category.title}</h3>
                                  <p className="text-gray-600 mb-4 line-clamp-2">{category.description}</p>
                                  
                                  <div className="grid grid-cols-2 gap-2 mb-6">
                                    {category.features.slice(0, 4).map((feature, featureIndex) => (
                                      <div key={featureIndex} className="flex items-center gap-2 text-sm">
                                        <div className="w-1.5 h-1.5 bg-[#f26d35] rounded-full flex-shrink-0"></div>
                                        <span className="truncate">{feature}</span>
                                      </div>
                                    ))}
                                  </div>
                                  
                                  <Button variant="ghost" className="group/btn w-full justify-center p-0 h-auto hover:bg-[#f26d35]/5 py-2 rounded-lg">
                                    <span className="text-[#f26d35] group-hover/btn:text-[#f26d35]/80">View Collection</span>
                                    <ArrowRight className="w-4 h-4 ml-2 text-[#f26d35] group-hover/btn:translate-x-1 transition-transform" />
                                  </Button>
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
                  <ArrowRight className="w-4 h-4" />
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
                <div className="grid md:grid-cols-3 gap-6 mb-10">
                  <div className="flex flex-col items-center p-4">
                    <div className="w-12 h-12 bg-[#f26d35]/10 rounded-xl flex items-center justify-center mb-3">
                      <Bed className="w-6 h-6 text-[#f26d35]" />
                    </div>
                    <h4 className="font-bold mb-2">3D Design</h4>
                    <p className="text-sm text-gray-600">Visualize before you invest</p>
                  </div>
                  <div className="flex flex-col items-center p-4">
                    <div className="w-12 h-12 bg-[#f26d35]/10 rounded-xl flex items-center justify-center mb-3">
                      <Users className="w-6 h-6 text-[#f26d35]" />
                    </div>
                    <h4 className="font-bold mb-2">Expert Team</h4>
                    <p className="text-sm text-gray-600">15+ years of experience</p>
                  </div>
                  <div className="flex flex-col items-center p-4">
                    <div className="w-12 h-12 bg-[#f26d35]/10 rounded-xl flex items-center justify-center mb-3">
                      <Coffee className="w-6 h-6 text-[#f26d35]" />
                    </div>
                    <h4 className="font-bold mb-2">Premium Quality</h4>
                    <p className="text-sm text-gray-600">Luxury materials & finishes</p>
                  </div>
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-[#f26d35] hover:bg-[#f26d35]/90 shadow-lg hover:shadow-xl transition-all duration-300 group px-8"
                  >
                    <Bath className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                    Start Custom Project
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Link href="/portfolio">
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="border-2 hover:bg-[#f26d35]/5 hover:border-[#f26d35] transition-all duration-300"
                    >
                      View Portfolio
                    </Button>
                  </Link>
                </div>
                
                {/* Trust indicator */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    ✨ <span className="font-semibold">500+ successful projects</span> • <span className="font-semibold">98% client satisfaction</span> • <span className="font-semibold">Award-winning designs</span>
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
            <h2 className="text-3xl lg:text-5xl font-bold mb-2">
              Industry Leaders in
              <span className="text-[#f26d35] block">Hospitality Furniture</span>
            </h2>
          </div>

          {/* Compact Stats Display */}
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
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
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                          
                          <h4 className="font-bold mb-3 text-lg">{process.title}</h4>
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
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-[#f26d35]/10 text-[#f26d35] px-4 py-2 rounded-full mb-4">
              <ExternalLink className="w-4 h-4" />
              <span>Our Portfolio</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-2">
              Transforming Hospitality Spaces
              <span className="text-[#f26d35] block">Worldwide</span>
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
          <div className="mb-16">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="grid lg:grid-cols-2">
                <div className="relative">
                  <img
                    src={projects[0].image}
                    alt={projects[0].title}
                    className="w-full h-80 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-[#f26d35] text-white px-3 py-1 rounded-full text-sm font-medium">Featured Project</div>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {projects[0].tags.map((tag, index) => (
                      <div key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">{tag}</div>
                    ))}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4">{projects[0].title}</h3>
                  <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{projects[0].location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{projects[0].year}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{projects[0].rooms}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">{projects[0].description}</p>
                  <Link href="/portfolio">
                    <Button 
                      className="w-fit bg-[#f26d35] hover:bg-[#f26d35]/90"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.slice(1).map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md overflow-hidden">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/90 text-gray-700 px-3 py-1 rounded-full text-sm">{project.type}</div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tags.map((tag, tagIndex) => (
                      <div key={tagIndex} className="border border-gray-300 text-gray-600 px-2 py-1 rounded-full text-xs">{tag}</div>
                    ))}
                  </div>
                  
                  <h3 className="font-bold mb-2">{project.title}</h3>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{project.year}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                  
                  <Link href="/portfolio">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="p-0 h-auto hover:bg-transparent"
                    >
                      <span className="text-[#f26d35]">View Details</span>
                      <ArrowRight className="w-3 h-3 ml-2 text-[#f26d35]" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
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
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-4">
            <div className="inline-flex items-center gap-2 bg-[#f26d35]/10 text-[#f26d35] px-4 py-2 rounded-full mb-4">
              <Star className="w-4 h-4" />
              <span>Client Testimonials</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-2">
              What Our Clients Say
              <span className="text-[#f26d35] block">About Our Work</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what hospitality professionals 
              around the world say about their experience with Sara Global.
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative mb-8">
            {/* Navigation Controls */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevTestimonialSlide}
                  className="rounded-full border-2 hover:bg-[#f26d35] hover:text-white transition-colors w-10 h-10 p-0"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextTestimonialSlide}
                  className="rounded-full border-2 hover:bg-[#f26d35] hover:text-white transition-colors w-10 h-10 p-0"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
              
              {/* Slide Indicators */}
              <div className="flex gap-2">
                {Array.from({ length: totalTestimonialSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
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
                {Array.from({ length: totalTestimonialSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-1">
                      {testimonials
                        .slice(slideIndex * 3, (slideIndex + 1) * 3)
                        .map((testimonial, index) => (
                          <Card key={index} className="border-0 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-4px_rgba(0,0,0,0.15)] hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full">
                            <CardContent className="p-8 flex flex-col h-full">
                              {/* Quote Icon */}
                              <div className="w-12 h-12 bg-[#f26d35]/10 rounded-full flex items-center justify-center mb-6">
                                <Quote className="w-6 h-6 text-[#f26d35]" />
                              </div>

                              {/* Rating */}
                              <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                              </div>

                              {/* Testimonial Text */}
                              <p className="text-gray-600 mb-6 leading-relaxed flex-1">
                                &quot;{testimonial.text}&quot;
                              </p>

                              {/* Author Info */}
                              <div className="flex items-center gap-4 mt-auto">
                                <div className="w-12 h-12 bg-[#f26d35] text-white rounded-full flex items-center justify-center font-bold">
                                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div>
                                  <h4 className="font-bold">{testimonial.name}</h4>
                                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                                  <p className="text-sm text-[#f26d35] font-medium">{testimonial.company}</p>
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
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Transform Your Hospitality Space?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let&apos;s discuss how Sara Global Hospitality can bring your vision to life with our 
              expert furniture solutions and global experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-[#f26d35] text-white hover:bg-[#f26d35]/90"
                >
                  Get Free Consultation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 hover:bg-[#f26d35]/5 hover:border-[#f26d35] transition-all duration-300"
                >
                  View Our Portfolio
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Insights Blog Section */}
      <section id="blogs" className="py-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-[#f26d35]/10 text-[#f26d35] px-4 py-2 rounded-full mb-4">
              <BookOpen className="w-4 h-4" />
              <span>Industry Insights</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-2">
              Latest from Our
              <span className="text-[#f26d35] block">Blog & Resources</span>
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
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-80 object-cover"
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
                  <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm w-fit mb-3">{featuredPost.category}</div>
                  <h3 className="text-xl lg:text-2xl font-bold mb-3 leading-tight">{featuredPost.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{featuredPost.excerpt}</p>
                  
                  <div className="flex items-center gap-4 text-xs text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{featuredPost.date}</span>
                    </div>
                  </div>
                  
                  <Link href={`/blog/${featuredPost.slug}`}>
                    <Button size="sm" className="w-fit bg-[#f26d35] hover:bg-[#f26d35]/90">
                      Read Article
                      <ArrowRight className="w-3 h-3 ml-2" />
                    </Button>
                  </Link>
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
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-24 h-24 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute -top-1 -right-1">
                      <div className="bg-white/90 text-gray-700 px-2 py-0.5 rounded-full text-xs shadow-sm">
                        {post.category}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold mb-2 group-hover:text-[#f26d35] transition-colors line-clamp-2 text-sm leading-snug">
                      {post.title}
                    </h3>
                    
                    <p className="text-xs text-gray-600 mb-3 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-600">
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
                      
                      <Link href={`/blog/${post.slug}`}>
                        <Button variant="ghost" size="sm" className="p-0 h-auto hover:bg-transparent group/btn text-xs">
                          <span className="text-[#f26d35]">Read</span>
                          <ArrowRight className="w-3 h-3 ml-1 text-[#f26d35] group-hover/btn:translate-x-0.5 transition-transform" />
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
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Get In Touch Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#f26d35]/10 text-[#f26d35] px-4 py-2 rounded-full mb-4">
              <MessageSquare className="w-4 h-4" />
              <span>Get In Touch</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-3">
              Start Your Project
              <span className="text-[#f26d35] block">With Sara Global</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ready to transform your hospitality space? Contact our team of experts 
              for a consultation and discover how we can bring your vision to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div key={index} className="flex gap-4">
                        <div className="w-12 h-12 bg-[#f26d35]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-[#f26d35]" />
                        </div>
                        <div>
                          <h4 className="font-bold mb-1">{info.title}</h4>
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-gray-600">
                              {detail}
                            </p>
                          ))}
                          <p className="text-sm text-[#f26d35] mt-1">{info.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle>Project Inquiry Form</CardTitle>
                  <p className="text-gray-600">
                    Tell us about your project and we&apos;ll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6 p-8">
                  {/* Success Message */}
                  {submissionState.isSuccess && (
                    <div className="bg-green-50 border border-green-200 rounded-md p-4 flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <p className="text-green-800 font-medium">
                        Thank you! Your inquiry has been submitted successfully. We'll get back to you within 24 hours.
                      </p>
                    </div>
                  )}

                  {/* Error Message */}
                  {submissionState.isError && (
                    <div className="bg-red-50 border border-red-200 rounded-md p-4 flex items-center space-x-2">
                      <AlertCircle className="w-5 h-5 text-red-600" />
                      <p className="text-red-800 font-medium">
                        {submissionState.errorMessage || 'Failed to submit inquiry. Please try again.'}
                      </p>
                    </div>
                  )}

                  <form onSubmit={(e) => { e.preventDefault(); submitForm(); }} className="space-y-6">
                    {/* Name and Email - Side by side */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">Name *</label>
                        <input 
                          id="name" 
                          value={formData.full_name}
                          onChange={(e) => updateField('full_name', e.target.value)}
                          placeholder="Enter your full name"
                          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#f26d35] focus:border-transparent ${
                            errors.full_name ? 'border-red-300' : 'border-gray-300'
                          }`}
                        />
                        {errors.full_name && <p className="text-red-600 text-sm">{errors.full_name}</p>}
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">Email Address *</label>
                        <input 
                          id="email" 
                          type="email" 
                          value={formData.email}
                          onChange={(e) => updateField('email', e.target.value)}
                          placeholder="your@email.com"
                          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#f26d35] focus:border-transparent ${
                            errors.email ? 'border-red-300' : 'border-gray-300'
                          }`}
                        />
                        {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
                      </div>
                    </div>

                    {/* Phone and Location - Side by side */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium">Phone Number *</label>
                        <input 
                          id="phone" 
                          type="tel" 
                          value={formData.phone}
                          onChange={(e) => updateField('phone', e.target.value)}
                          placeholder="+1-678-431-9041"
                          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#f26d35] focus:border-transparent ${
                            errors.phone ? 'border-red-300' : 'border-gray-300'
                          }`}
                        />
                        {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="location" className="text-sm font-medium">Location *</label>
                        <input 
                          id="location" 
                          value={formData.location}
                          onChange={(e) => updateField('location', e.target.value)}
                          placeholder="City, State, Country"
                          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#f26d35] focus:border-transparent ${
                            errors.location ? 'border-red-300' : 'border-gray-300'
                          }`}
                        />
                        {errors.location && <p className="text-red-600 text-sm">{errors.location}</p>}
                      </div>
                    </div>

                    {/* Message Field */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">Message from the Client *</label>
                      <textarea 
                        id="message" 
                        value={formData.message}
                        onChange={(e) => updateField('message', e.target.value)}
                        placeholder="Please describe your project, specific furniture needs, timeline, and any special requirements..."
                        className={`min-h-[120px] w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#f26d35] focus:border-transparent ${
                          errors.message ? 'border-red-300' : 'border-gray-300'
                        }`}
                      />
                      {errors.message && <p className="text-red-600 text-sm">{errors.message}</p>}
                    </div>

                    {/* Interested In Checkboxes */}
                    <div className="space-y-4">
                      <label className="text-sm font-medium">Interested In *</label>
                      <div className="grid md:grid-cols-3 gap-4">
                        {[
                          "Casegoods",
                          "FF&E",
                          "Reception Items",
                          "Bedroom Furniture",
                          "Restaurant Furniture",
                          "Lobby Items",
                          "Outdoor Furniture",
                          "Custom Solutions"
                        ].map((item, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <input 
                              type="checkbox" 
                              id={`interest-${index}`} 
                              checked={formData.category.includes(item as any)}
                              onChange={() => toggleCategory(item as any)}
                              className="rounded border-gray-300 text-[#f26d35] focus:ring-[#f26d35]" 
                            />
                            <label htmlFor={`interest-${index}`} className="text-sm cursor-pointer">{item}</label>
                          </div>
                        ))}
                      </div>
                      {errors.category && <p className="text-red-600 text-sm">{errors.category}</p>}
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center pt-4">
                      <Button 
                        type="submit"
                        size="lg" 
                        disabled={submissionState.isSubmitting}
                        className={`bg-[#f26d35] hover:bg-[#f26d35]/90 ${submissionState.isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        <Send className="w-4 h-4 mr-2" />
                        {submissionState.isSubmitting ? 'Submitting...' : 'Send Inquiry'}
                      </Button>
                    </div>
                  </form>

                  <p className="text-sm text-gray-600 text-center">
                    We&apos;ll review your inquiry and respond within 24 hours with next steps.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
