"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/Accordion';
import { ArrowRight, ZoomIn, X, Factory, Package, Globe, CheckCircle, User, Heart, Clock, Award, Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

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

const testimonials = [
  {
    name: "Marc Dubois",
    title: "General Manager",
    company: "Fairmont Chateau Frontenac, QC",
    avatar: "/api/placeholder/64/64",
    rating: 5,
    text: "Sara Global's commitment to quality and Canadian craftsmanship is evident in every piece. Our guests love that the furniture tells a story of local heritage and sustainability. It has truly redefined our suite experience."
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

const loungeChairs = [
  {
    id: "lc-101",
    name: "LC-101",
    category: "Classic Lounge Chair",
    description: "Timeless lounge chair with elegant design, perfect for hotel lobbies and relaxation areas. Features premium upholstery and exceptional comfort.",
    features: ["Classic Design", "Premium Upholstery", "Deep Seating", "Solid Frame"],
    image: "https://images.unsplash.com/photo-1688741663046-d4b95efb3bd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb3VuZ2UlMjBjaGFpcnMlMjBob3RlbCUyMGxvYmJ5fGVufDF8fHx8MTc1NzU5MTAyNnww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Classic", "Lobby", "Premium"]
  },
  {
    id: "lc-102",
    name: "LC-102",
    category: "Modern Accent Chair",
    description: "Contemporary lounge chair with bold lines and modern aesthetics. Ideal for creating statement pieces in upscale hotel spaces.",
    features: ["Modern Design", "Bold Aesthetics", "Luxury Fabric", "Accent Piece"],
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80",
    tags: ["Modern", "Accent", "Luxury"]
  },
  {
    id: "lc-103",
    name: "LC-103",
    category: "Recliner Lounge Chair",
    description: "Luxurious reclining lounge chair offering ultimate comfort for guests. Features smooth reclining mechanism and plush cushioning.",
    features: ["Reclining Function", "Plush Cushioning", "Premium Comfort", "Durable Mechanism"],
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80",
    tags: ["Recliner", "Luxury", "Comfort"]
  },
  {
    id: "lc-104",
    name: "LC-104",
    category: "Wingback Lounge Chair",
    description: "Sophisticated wingback design providing privacy and comfort. Perfect for hotel reading nooks and quiet relaxation spaces.",
    features: ["Wingback Design", "High Back Support", "Privacy Panel", "Classic Elegance"],
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80",
    tags: ["Wingback", "Classic", "Privacy"]
  },
  {
    id: "lc-105",
    name: "LC-105",
    category: "Swivel Lounge Chair",
    description: "Functional swivel lounge chair combining comfort with versatility. Smooth 360-degree rotation for dynamic hotel lobby areas.",
    features: ["360° Swivel", "Smooth Rotation", "Modern Base", "Versatile Design"],
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80",
    tags: ["Swivel", "Functional", "Modern"]
  },
  {
    id: "lc-106",
    name: "LC-106",
    category: "Ottoman Lounge Set",
    description: "Complete lounge chair set with matching ottoman for elevated guest comfort. Premium materials and coordinated design.",
    features: ["Chair + Ottoman", "Coordinated Set", "Premium Materials", "Ultimate Comfort"],
    image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80",
    tags: ["Set", "Ottoman", "Premium"]
  }
];

export default function LoungeChairsPage() {
  const [zoomedImage, setZoomedImage] = useState<{ src: string; alt: string } | null>(null);
  const [currentTestimonialSlide, setCurrentTestimonialSlide] = useState(0);
  
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

  const handleImageClick = (src: string, alt: string) => {
    setZoomedImage({ src, alt });
  };

  const closeModal = () => {
    setZoomedImage(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920&q=80"
            alt="Lounge Chairs Collection"
            className="w-full h-full object-cover"
            width={1920}
            height={600}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-3 md:px-4 text-center">
            <div className="max-w-2xl mx-auto px-3">
              <h1 className="text-xl md:text-xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-3 md:mb-4 text-white line-clamp-2 md:line-clamp-none">
                Lounge Chairs Collection
              </h1>
              <p className="text-sm md:text-sm md:text-lg lg:text-xl mb-5 md:mb-6 opacity-90 text-white">
                Elegant lounge chairs designed for hotel lobbies and relaxation areas, combining luxury aesthetics with superior comfort
              </p>
              <div className="flex justify-center">
                <Link href="/ca/contact" className="w-full sm:w-auto">
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white"
                  >
                    Get Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2" style={{ animation: 'arrowMove 2s ease-in-out infinite' }} />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats and Brand Logos Section */}
      <section className="py-6 bg-background">
        <div className="container mx-auto px-3 md:px-4">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-2 sm:mb-4 md:mb-6">
            <div className="text-center">
              <div className="bg-white/95 backdrop-blur-sm p-3 sm:p-4 md:p-6 rounded-xl shadow-2xl border border-white/20">
                <div className="text-xl md:text-3xl font-bold text-primary mb-1">100+</div>
                <div className="text-sm text-muted-foreground">Canadian Hotels</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/95 backdrop-blur-sm p-3 sm:p-4 md:p-6 rounded-xl shadow-2xl border border-white/20">
                <div className="text-xl md:text-3xl font-bold text-primary mb-1">10</div>
                <div className="text-sm text-muted-foreground">Provinces Served</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/95 backdrop-blur-sm p-3 sm:p-4 md:p-6 rounded-xl shadow-2xl border border-white/20">
                <div className="text-xl md:text-3xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Eco-Friendly</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/95 backdrop-blur-sm p-3 sm:p-4 md:p-6 rounded-xl shadow-2xl border border-white/20">
                <div className="text-xl md:text-3xl font-bold text-primary mb-1">4.9★</div>
                <div className="text-sm text-muted-foreground">Avg. Rating</div>
              </div>
            </div>
          </div>

          {/* Brand Logos Section */}
          <div className="pt-6 sm:pt-8 border-t border-gray-200">
            <div className="text-center mb-6 sm:mb-4 md:mb-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground mb-2">Trusted by Canada&apos;s Leading Hotel Brands</h3>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                Premium hospitality groups across the nation choose Sara Global Hospitality for sustainable,
                <br className="hidden sm:block" />
                high-performance Canadian furniture solutions.
              </p>
            </div>
            
            <div className="overflow-hidden py-4">
              <div className="flex animate-scroll-logos gap-8 sm:gap-16 items-center">
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

      {/* Our Lounge Chairs - Products Grid */}
      <section className="py-6 md:py-8 bg-background">
        <div className="container mx-auto px-3 md:px-4">
          <div className="text-center mb-4 md:mb-8 px-3">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 line-clamp-2 md:line-clamp-none">Our Lounge Chairs</h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              Discover our comprehensive range of lounge chairs, each designed with unique features to meet your hospitality furniture needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loungeChairs.map((chair) => (
              <Card key={chair.id} className="group overflow-hidden hover:shadow-lg transition-shadow duration-300 p-0">
                <div 
                  className="relative cursor-pointer group/image overflow-hidden m-0"
                  onClick={() => handleImageClick(chair.image, chair.name)}
                >
                  <ImageWithFallback
                    src={chair.image}
                    alt={chair.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 block"
                    width={400}
                    height={256}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/20 transition-colors duration-200 flex items-center justify-center">
                    <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover/image:opacity-100 transition-opacity duration-200" />
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-lg">{chair.name}</h3>
                    <Button 
                      className="bg-primary hover:bg-primary/90"
                      onClick={(e) => {
                        e.preventDefault();
                        if (typeof window !== 'undefined') {
                          window.openQuotePopup?.();
                        }
                      }}
                    >
                      Enquire
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Transform Your Hotel CTA Section */}
      <section className="py-6 md:py-8 bg-background">
        <div className="container mx-auto px-3 md:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 md:space-y-6">
              <div>
                <h2 className="text-xl md:text-3xl lg:text-4xl font-bold leading-tight text-center md:text-left line-clamp-2 md:line-clamp-none">
                  Transform Your Hotel with Premium Seating Solutions
                </h2>
                <p className="text-sm md:text-lg text-muted-foreground mb-6 md:mb-8 text-center md:text-left">
                  Discover our comprehensive range of soft seating options designed to elevate your guests&apos; comfort and enhance your hotel&apos;s aesthetic appeal.
                </p>
              </div>
              <div className="flex justify-center md:justify-start">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    if (typeof window !== 'undefined') {
                      window.openQuotePopup?.();
                    }
                  }}
                >
                  Request a Quote
                  <ArrowRight className="w-5 h-5 ml-2" style={{ animation: 'arrowMove 2s ease-in-out infinite' }} />
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80"
                  alt="Modern luxury lounge chair for hotel furniture"
                  className="w-full h-full object-cover"
                  width={800}
                  height={600}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Hotels Choose Sara Global Hospitality Section */}
      <section className="py-6 md:py-10 bg-gray-50">
        <div className="container mx-auto px-3 md:px-4">
          <div className="text-center mb-4 md:mb-8 px-3">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold leading-tight mb-3 md:mb-6 line-clamp-2 md:line-clamp-none">
              Why Hotels Choose Sara Global Hospitality
            </h2>
            <p className="text-sm md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover what makes us the preferred partner for hospitality furniture solutions worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group relative h-full">
              <div className="bg-primary rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                <div className="bg-white/20 rounded-xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Factory className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-4 leading-tight">
                  Hospitality-grade furniture manufacturer
                </h3>
                <p className="text-white/90 leading-relaxed text-sm flex-grow">
                  Specialized manufacturing expertise focused exclusively on commercial hospitality environments, ensuring every piece meets industry standards.
                </p>
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                  <Factory className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>

            <div className="group relative h-full">
              <div className="bg-primary rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                <div className="bg-white/20 rounded-xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Package className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-4 leading-tight">
                  Bulk order capabilities with customizations
                </h3>
                <p className="text-white/90 leading-relaxed text-sm flex-grow">
                  Scalable production capacity to handle large hotel projects while offering personalized design solutions for unique brand requirements.
                </p>
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                  <Package className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>

            <div className="group relative h-full">
              <div className="bg-primary rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                <div className="bg-white/20 rounded-xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-4 leading-tight">
                  Experience with international hotel chains
                </h3>
                <p className="text-white/90 leading-relaxed text-sm flex-grow">
                  Proven track record serving major hotel brands across USA, UAE, and UK markets with comprehensive understanding of global hospitality standards.
                </p>
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                  <Globe className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>

            <div className="group relative h-full">
              <div className="bg-primary rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                <div className="bg-white/20 rounded-xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-4 leading-tight">
                  Strict quality checks and timely delivery
                </h3>
                <p className="text-white/90 leading-relaxed text-sm flex-grow">
                  Rigorous quality control processes at every manufacturing stage combined with reliable logistics to ensure projects stay on schedule and budget.
                </p>
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                  <CheckCircle className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Lounge Chairs Collection Info Section */}
      <section className="relative py-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute top-10 right-1/4 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 left-1/4 w-48 h-48 bg-purple-400/10 rounded-full blur-2xl animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-3 md:px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-8 text-white bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Lounge Chairs Collection: Where Comfort Meets Luxury
            </h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Transform your hotel&apos;s common areas with our meticulously crafted lounge chairs collection, designed specifically for the hospitality industry&apos;s demanding requirements. Each chair combines ergonomic excellence with aesthetic sophistication, ensuring your guests experience unparalleled comfort and style.
              </p>
              <p>
                Our lounge chairs feature premium-grade materials, including commercial-grade upholstery that withstands daily use while maintaining luxurious appeal. The carefully engineered designs provide optimal support and comfort for extended relaxation, allowing guests to truly unwind in your hotel&apos;s lobby, lounge areas, and private spaces.
              </p>
              <p>
                From intimate boutique hotels to grand resort lobbies, our collection offers versatile designs that seamlessly integrate with any hospitality aesthetic. Whether you prefer modern minimalism, classic elegance, or contemporary sophistication, our lounge chairs enhance your space&apos;s ambiance while delivering the durability and functionality essential for commercial hospitality environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-6 md:py-10 bg-background">
        <div className="container mx-auto px-3 md:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="flex-1">
              <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-8">Why Choose Our Hotel Lounge Chairs</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Built for high-traffic hospitality use</h3>
                    <p className="text-muted-foreground">Engineered specifically for commercial hotel environments, our lounge chairs withstand continuous daily use while maintaining structural integrity and comfort standards.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Durable materials with easy maintenance</h3>
                    <p className="text-muted-foreground">Premium-grade materials combined with stain-resistant finishes ensure longevity while simplifying housekeeping operations and reducing maintenance costs.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Customizable designs for hotel branding</h3>
                    <p className="text-muted-foreground">Tailor our furniture to perfectly align with your hotel&apos;s unique brand identity through customizable finishes, fabrics, colors, and design elements.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Bulk supply with on-time delivery worldwide</h3>
                    <p className="text-muted-foreground">Scalable production capacity ensures large-volume orders are fulfilled efficiently with reliable global logistics and on-schedule delivery to any location.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 flex justify-center items-start">
              <div className="relative w-full max-w-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80"
                  alt="Premium Lounge Chair"
                  className="w-full h-[260px] md:h-[590px] object-cover rounded-lg shadow-lg"
                  width={600}
                  height={590}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comfort & Ergonomics Section */}
      <section className="py-6 md:py-8 relative overflow-hidden" style={{ backgroundColor: '#f9fafb' }}>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-1/4 w-24 h-24 bg-secondary/20 rounded-full blur-lg"></div>
        </div>
        
        <div className="container mx-auto px-3 md:px-4 relative z-10">
          <div className="text-center mb-4 md:mb-4 md:mb-8 px-3">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-3 text-foreground">
              Comfort & Ergonomics in Hotel Lounge Chairs
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Where science meets hospitality to create the perfect relaxation experience
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="group text-center">
              <div className="relative inline-block mb-4">
                <div className="bg-white rounded-2xl p-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <User className="w-8 h-8 text-primary mx-auto" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-primary to-orange-500 rounded-full"></div>
              </div>
              <h3 className="font-bold mb-2 text-foreground">Ergonomic Support</h3>
              <p className="text-sm text-muted-foreground">Scientifically designed contours provide optimal support for extended relaxation comfort</p>
            </div>

            <div className="group text-center">
              <div className="relative inline-block mb-4">
                <div className="bg-white rounded-2xl p-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <Heart className="w-8 h-8 text-primary mx-auto" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-primary to-orange-500 rounded-full"></div>
              </div>
              <h3 className="font-bold mb-2 text-foreground">Guest Satisfaction</h3>
              <p className="text-sm text-muted-foreground">Enhanced relaxation experience leads to improved guest satisfaction and positive reviews</p>
            </div>

            <div className="group text-center">
              <div className="relative inline-block mb-4">
                <div className="bg-white rounded-2xl p-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <Clock className="w-8 h-8 text-primary mx-auto" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-primary to-orange-500 rounded-full"></div>
              </div>
              <h3 className="font-bold mb-2 text-foreground">Long-lasting Design</h3>
              <p className="text-sm text-muted-foreground">Rigorous testing ensures chairs maintain comfort and appearance for years of service</p>
            </div>

            <div className="group text-center">
              <div className="relative inline-block mb-4">
                <div className="bg-white rounded-2xl p-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <Award className="w-8 h-8 text-primary mx-auto" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-primary to-orange-500 rounded-full"></div>
              </div>
              <h3 className="font-bold mb-2 text-foreground">Industry Standards</h3>
              <p className="text-sm text-muted-foreground">Meets and exceeds hospitality industry standards for commercial furniture quality</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section - Same as breakfast chairs */}
      <section className="py-6 md:py-8 bg-white">
        <div className="container mx-auto px-6 sm:px-4">
          <div className="text-center mb-4">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-6 leading-relaxed">
              What Canadian Hoteliers
              <span className="text-[#f26d35] block mt-0 sm:mt-2">Say About Our Work</span>
            </h2>
            <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto">
              From coast to coast, Canadian hospitality leaders trust Sara Global Hospitality for sustainable furniture solutions.
            </p>
          </div>

          <div className="relative mb-4 md:mb-8">
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

            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out sm:hidden"
                style={{ transform: `translateX(-${currentTestimonialSlide * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="px-1">
                      <Card className="border-0 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-4px_rgba(0,0,0,0.15)] hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full">
                        <CardContent className="p-6 flex flex-col h-full">
                          <div className="w-10 h-10 bg-[#f26d35]/10 rounded-full flex items-center justify-center mb-4">
                            <Quote className="w-5 h-5 text-[#f26d35]" />
                          </div>

                          <div className="flex gap-1 mb-3">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>

                          <p className="text-sm text-gray-600 mb-4 leading-relaxed flex-1">
                            &quot;{testimonial.text}&quot;
                          </p>

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
                              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#f26d35]/10 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                                <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-[#f26d35]" />
                              </div>

                              <div className="flex gap-1 mb-3 sm:mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                  <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                              </div>

                              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-3 md:mb-6 leading-relaxed flex-1">
                                &quot;{testimonial.text}&quot;
                              </p>

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

      {/* CTA Section */}
      <section className="py-6 md:py-10 md:py-16 bg-primary text-white">
        <div className="container mx-auto px-3 md:px-4 text-center">
          <h2 className="text-xl md:text-3xl font-bold mb-4">Ready to Transform Your Hospitality Space?</h2>
          <p className="text-xl mb-4 md:mb-8 opacity-90">
            Let&apos;s discuss how Sara Global Hospitality can bring your vision to life with our expert furniture<br />
            solutions and global experience.
          </p>
          <div className="flex justify-center">
            <Link href="/ca/contact">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-primary hover:bg-white/90"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" style={{ animation: 'arrowMove 2s ease-in-out infinite' }} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-6 md:py-12 bg-slate-50">
        <div className="container mx-auto px-3 md:px-4">
          <div className="text-center mb-4 md:mb-4 md:mb-8 px-3">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-6 leading-tight">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about our lounge chairs solutions
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium">What makes hotel lounge chairs different from residential furniture?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Hotel lounge chairs are specifically designed for commercial use with enhanced durability, stain-resistant commercial-grade fabrics, reinforced frames, and easy maintenance features. Our pieces undergo rigorous testing to withstand continuous guest use while maintaining their aesthetic appeal.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium">Can you customize lounge chairs to match our hotel&apos;s brand identity?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Absolutely! We offer extensive customization options including fabric selection from over 200 commercial-grade materials, custom finishes, brand color matching, and design modifications. Our design team works closely with you to create lounge chairs that perfectly align with your hotel&apos;s aesthetic and brand identity.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium">How do I maintain hotel lounge chairs for longevity?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Our lounge chairs feature commercial-grade, stain-resistant upholstery that requires minimal maintenance. Regular vacuuming, spot cleaning with mild detergent, and professional deep cleaning annually will keep them looking pristine. We provide detailed care instructions and can recommend professional cleaning services.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium">What are your delivery timeframes for large hotel lounge chair orders in Canada?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  For Canadian hotel orders, standard lounge chair collections typically ship within 6-8 weeks. Custom orders may require 10-14 weeks depending on specifications and quantity. We offer expedited production for urgent projects and provide detailed delivery schedules during the quotation process. All shipments include professional logistics coordination across Canada.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Image Zoom Modal */}
      {zoomedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative w-full max-w-5xl">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Close image zoom"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <div className="relative w-full bg-black rounded-lg overflow-hidden" style={{ paddingBottom: '66.67%' }}>
              <ImageWithFallback
                src={zoomedImage.src}
                alt={zoomedImage.alt}
                className="absolute inset-0 w-full h-full object-contain"
                width={1200}
                height={800}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}



