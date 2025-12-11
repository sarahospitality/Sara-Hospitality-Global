"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/Accordion';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';
import { ArrowRight, ZoomIn, X, Users, Palette, Shield, Zap, TrendingUp, Heart, Lightbulb, Factory, Settings, Globe, Award, CheckCircle, Truck, Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
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

const buyingGuideContent = {
  1: {
    title: "How to Choose the Right Hotel Countertops & Cabinets Design",
    subtitle: "Design Selection Excellence",
    content: [
      "Consider your hotel's kitchen and service area requirements to select countertops and cabinets that align with operational needs and aesthetic standards.",
      "Evaluate space constraints and workflow patterns to ensure optimal cabinet placement that enhances staff efficiency and food service operations.",
      "Choose durable materials that can withstand commercial kitchen demands - from heat resistance to easy cleaning - maximizing your investment's longevity."
    ]
  },
  2: {
    title: "Bulk Order vs. Custom Manufacturing",
    subtitle: "Procurement Strategy Guide",
    content: [
      "Bulk orders offer cost-effectiveness and faster delivery times, making them ideal for large-scale hotel projects with standardized kitchen designs across multiple locations.",
      "Custom manufacturing provides unique cabinet designs tailored to your specific operational requirements, allowing for specialized storage solutions and space optimization.",
      "Consider hybrid approaches where standard cabinets are customized with your preferred countertop materials and finishes, balancing cost efficiency with functionality."
    ]
  },
  3: {
    title: "Key Considerations: Durability, Heat Resistance, Hygiene & Budget",
    subtitle: "Comprehensive Evaluation Framework",
    content: [
      "Durability assessment should focus on commercial-grade materials, heat-resistant surfaces, and solid construction that can withstand intensive kitchen use.",
      "Hygiene requirements must include non-porous countertops, antimicrobial finishes, and easy-to-clean surfaces that support health and safety standards.",
      "Balance budget constraints with long-term value by evaluating total cost of ownership, including maintenance, replacement frequency, and operational efficiency gains."
    ]
  }
};

const products = [
  {
    id: "kitchen-cabinets",
    name: "Kitchen Cabinets",
    category: "kitchen-cabinets",
    description: "Premium commercial kitchen cabinets designed for hotel kitchens and food service areas, featuring durable construction, efficient storage solutions, and easy-clean surfaces.",
    features: ["Commercial Grade", "Efficient Storage", "Easy Clean", "Durable Construction"],
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwY2FiaW5ldHMlMjBjb21tZXJjaWFsfGVufDB8fHx8MTczMDc0MTIwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Commercial", "Storage", "Professional"]
  },
  {
    id: "kitchen-countertops",
    name: "Kitchen Countertops",
    category: "kitchen-countertops",
    description: "High-performance kitchen countertops featuring heat-resistant materials, stain-proof surfaces, and hygienic non-porous finishes perfect for commercial hotel kitchens.",
    features: ["Heat Resistant", "Stain Proof", "Hygienic", "Non-Porous"],
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwY291bnRlcnRvcCUyMGdyYW5pdGV8ZW58MHx8fHwxNzMwNzQxMjAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Premium", "Heat Safe", "Hygienic"]
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

export default function CountertopsCabinetsPage() {
  const [zoomedImage, setZoomedImage] = useState<{ src: string; alt: string } | null>(null);
  const [selectedGuidePoint, setSelectedGuidePoint] = useState<number>(1);
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
            src="https://images.unsplash.com/photo-1556911220-bff31c812dba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwa2l0Y2hlbiUyMGNvdW50ZXJ0b3BzfGVufDB8fHx8MTczMDc0MTIwMHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Countertops & Cabinets Collection Showroom"
            className="w-full h-full object-cover"
            width={1920}
            height={600}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h1 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 leading-tight text-white text-center line-clamp-2 md:line-clamp-none">
                Countertops & Cabinets Collection
              </h1>
              <p className="text-sm md:text-lg lg:text-xl mb-4 md:mb-6 opacity-90 text-white text-center">
                Premium countertops and cabinets designed for durability, style, and hospitality excellence
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center w-full max-w-sm sm:max-w-none mx-auto">
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
                  Request A Quote
                  <ArrowRight className="w-5 h-5 ml-2" style={{ animation: 'arrowMove 2s ease-in-out infinite' }} />
                </Button>
                <Link href="/ca/portfolio" className="w-full sm:w-auto">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary bg-transparent"
                  >
                    View Portfolio
                    <ArrowRight className="w-5 h-5 ml-2" style={{ animation: 'arrowMove 2s ease-in-out infinite' }} />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 sm:py-10 md:py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-2 sm:mb-6 md:mb-8 lg:mb-10">
            <div className="text-center">
              <div className="bg-white/95 backdrop-blur-sm p-3 sm:p-4 md:p-6 rounded-xl shadow-2xl border border-white/20">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-1">100+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Canadian Hotels</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/95 backdrop-blur-sm p-3 sm:p-4 md:p-6 rounded-xl shadow-2xl border border-white/20">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-1">10</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Provinces Served</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/95 backdrop-blur-sm p-3 sm:p-4 md:p-6 rounded-xl shadow-2xl border border-white/20">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-1">100%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Eco-Friendly</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/95 backdrop-blur-sm p-3 sm:p-4 md:p-6 rounded-xl shadow-2xl border border-white/20">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-1">4.9★</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Avg. Rating</div>
              </div>
            </div>
          </div>

          {/* Brand Logos Section */}
          <div className="pt-4 sm:pt-8 border-t border-gray-200">
            <div className="text-center mb-4 sm:mb-8 px-2">
              <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-foreground mb-2 line-clamp-2 md:line-clamp-none">Trusted by Canada&apos;s Leading Hotel Brands</h3>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                Premium hospitality groups across the nation choose Sara Global Hospitality for sustainable,
                <br className="hidden sm:block" />
                high-performance Canadian furniture solutions.
              </p>
            </div>
            
            <div className="overflow-hidden py-3 sm:py-4">
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

      {/* Products Grid */}
      <section className="py-6 md:py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="group overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <div 
                    className="relative cursor-pointer group/image"
                    onClick={() => handleImageClick(product.image, product.name)}
                  >
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      width={400}
                      height={256}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/20 transition-colors duration-200 flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover/image:opacity-100 transition-opacity duration-200" />
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="mb-3">
                    <h3 className="font-bold text-lg">{product.name}</h3>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex gap-1 flex-wrap">
                      {product.features.map((feature) => (
                        <Badge 
                          key={feature} 
                          variant="outline" 
                          className="text-[10px] px-1.5 py-0.5 text-gray-900 border-gray-900 hover:bg-primary hover:text-white hover:border-primary transition-colors cursor-pointer whitespace-nowrap leading-tight"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex">
                      <Link href={`/ca/products/countertops-cabinets/${product.id}`} className="flex-1">
                        <Button 
                          className="flex-1 w-full"
                        >
                          View All
                          <ArrowRight className="w-4 h-4 ml-2" style={{ animation: 'arrowMove 2s ease-in-out infinite' }} />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modern CTA Section with Image */}
      <section className="py-6 md:py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            {/* Left side - Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 leading-tight text-center md:text-left line-clamp-2 md:line-clamp-none">
                  Transform Your Hotel Kitchen with Premium Countertops & Cabinets
                </h2>
                <p className="text-sm md:text-lg text-muted-foreground mb-6 md:mb-8 text-center md:text-left">
                  Discover our comprehensive range of countertops and cabinet options designed to elevate your hotel kitchen&apos;s functionality and aesthetic appeal. From heat-resistant surfaces to efficient storage solutions, we have everything you need.
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

            {/* Right side - Image */}
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwY291bnRlcnRvcHN8ZW58MHx8fHwxNzMwNzQxMjAwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Modern kitchen countertops and cabinets"
                  className="w-full h-full object-cover"
                  width={800}
                  height={600}
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Hotel Countertops & Cabinets Matter Section */}
      <section className="py-6 md:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 px-2">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 leading-tight line-clamp-2 md:line-clamp-none">
              Why Hotel Countertops & Cabinets Matter
            </h2>
            <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the key factors that make quality countertops and cabinets essential for modern hospitality success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Operational Efficiency */}
            <div className="bg-white rounded-2xl p-6 text-black shadow-lg border">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary rounded-xl p-3">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1">60%</div>
                  <div className="text-sm text-gray-600 font-semibold">Improved Operational<br/>Efficiency</div>
                </div>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                Smart kitchen solutions streamline food service operations and storage, reducing prep time and improving staff productivity.
              </p>
            </div>

            {/* Hygiene & Safety */}
            <div className="bg-white rounded-2xl p-6 text-black shadow-lg border">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary rounded-xl p-3">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1">100%</div>
                  <div className="text-sm text-gray-600 font-semibold">Hygiene &<br/>Safety Standards</div>
                </div>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                Non-porous, antimicrobial surfaces meet the highest hygiene standards for commercial food service environments.
              </p>
            </div>

            {/* Durability */}
            <div className="bg-white rounded-2xl p-6 text-black shadow-lg border">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary rounded-xl p-3">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1">20+</div>
                  <div className="text-sm text-gray-600 font-semibold">Years Durability &<br/>Performance</div>
                </div>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                Commercial-grade materials withstand heat, stains, and heavy use while maintaining their appearance and functionality.
              </p>
            </div>

            {/* Design Consistency */}
            <div className="bg-white rounded-2xl p-6 text-black shadow-lg border">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary rounded-xl p-3">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1">95%</div>
                  <div className="text-sm text-gray-600 font-semibold">Design<br/>Consistency</div>
                </div>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                Coordinated designs create a unified aesthetic across all hotel kitchen and service areas.
              </p>
            </div>

            {/* ROI */}
            <div className="bg-white rounded-2xl p-6 text-black shadow-lg border">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary rounded-xl p-3">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1">250%</div>
                  <div className="text-sm text-gray-600 font-semibold">Return on<br/>Investment</div>
                </div>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                Premium kitchen solutions reduce maintenance costs and improve operational efficiency, delivering significant ROI.
              </p>
            </div>

            {/* Functionality */}
            <div className="bg-white rounded-2xl p-6 text-black shadow-lg border">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary rounded-xl p-3">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1">Perfect</div>
                  <div className="text-sm text-gray-600 font-semibold">Blends Style &<br/>Functionality</div>
                </div>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                Modern designs perfectly balance aesthetic appeal with practical performance for commercial kitchen environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Buying Guide Section */}
      <section className="py-8 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12 px-2">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 leading-tight line-clamp-2 md:line-clamp-none">
              Hospitality Countertops & Cabinets Buying Guide for Hotel Owners
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - 3 Interactive Points */}
              <div className="space-y-6">
                <div 
                  className={`flex items-start gap-6 p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                    selectedGuidePoint === 1 
                      ? 'bg-white shadow-lg border-2 border-primary' 
                      : 'bg-white/50 hover:bg-white hover:shadow-md'
                  }`}
                  onClick={() => setSelectedGuidePoint(1)}
                >
                  <div className={`rounded-full p-4 flex-shrink-0 transition-colors duration-300 ${
                    selectedGuidePoint === 1 ? 'bg-primary' : 'bg-gray-400'
                  }`}>
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">How to choose the right hotel Countertops & Cabinets design</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Strategic design selection that aligns with your operational needs and aesthetic requirements.
                    </p>
                  </div>
                </div>

                <div 
                  className={`flex items-start gap-6 p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                    selectedGuidePoint === 2 
                      ? 'bg-white shadow-lg border-2 border-primary' 
                      : 'bg-white/50 hover:bg-white hover:shadow-md'
                  }`}
                  onClick={() => setSelectedGuidePoint(2)}
                >
                  <div className={`rounded-full p-4 flex-shrink-0 transition-colors duration-300 ${
                    selectedGuidePoint === 2 ? 'bg-primary' : 'bg-gray-400'
                  }`}>
                    <Factory className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">Bulk order vs. custom manufacturing</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Understanding procurement strategies to balance cost-effectiveness with customization.
                    </p>
                  </div>
                </div>

                <div 
                  className={`flex items-start gap-6 p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                    selectedGuidePoint === 3 
                      ? 'bg-white shadow-lg border-2 border-primary' 
                      : 'bg-white/50 hover:bg-white hover:shadow-md'
                  }`}
                  onClick={() => setSelectedGuidePoint(3)}
                >
                  <div className={`rounded-full p-4 flex-shrink-0 transition-colors duration-300 ${
                    selectedGuidePoint === 3 ? 'bg-primary' : 'bg-gray-400'
                  }`}>
                    <Settings className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">Key considerations: durability, heat resistance, hygiene, budget</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Comprehensive evaluation framework for successful kitchen investment decisions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Dynamic Content */}
              <div className="bg-white rounded-2xl p-8 shadow-lg sticky top-6">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">{buyingGuideContent[selectedGuidePoint as keyof typeof buyingGuideContent].title}</h3>
                <p className="text-lg text-primary font-medium mb-6">{buyingGuideContent[selectedGuidePoint as keyof typeof buyingGuideContent].subtitle}</p>
                
                <div className="space-y-6">
                  {buyingGuideContent[selectedGuidePoint as keyof typeof buyingGuideContent].content.map((paragraph, index) => (
                    <p key={index} className="text-gray-600 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <Link href="/ca/contact">
                    <Button 
                      className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-medium w-full sm:w-auto"
                    >
                      Get Expert Consultation
                      <ArrowRight className="w-5 h-5 ml-2" style={{ animation: 'arrowMove 2s ease-in-out infinite' }} />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Sara Hospitality Section */}
      <section className="pt-12 md:pt-16 pb-16 md:pb-[116px] bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221.5%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8 px-2">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent line-clamp-2 md:line-clamp-none">
              Why Choose Sara Hospitality as Your Supplier
            </h2>
            <p className="text-sm md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Experience excellence in hospitality furniture manufacturing with our comprehensive solutions and global expertise
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:h-[591px]">
            <div className="flex flex-col justify-between space-y-6">
              <div className="group bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="bg-primary rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                    <Factory className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl mb-2">In-house Manufacturing Capabilities</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Complete control over quality, timelines, and customization processes for all kitchen solutions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="bg-primary rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl mb-2">Global Supply Experience</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Trusted suppliers serving clients across multiple continents with proven track record.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="bg-primary rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl mb-2">Quality Assurance & Compliance</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Rigorous quality control and food-safe certifications ensure premium results every time.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="bg-primary rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl mb-2">Customization & Bulk Order Benefits</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Flexible customization with competitive bulk pricing to meet your specific hospitality requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-6 h-full">
              <div className="relative rounded-2xl overflow-hidden flex-1">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwa2l0Y2hlbiUyMGRlc2lnbnxlbnwwfHx8fDE3MzA3NDEyMDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Commercial Kitchen Design"
                  className="w-full h-[260px] md:h-[405px] object-cover"
                  width={800}
                  height={405}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white backdrop-blur-lg border border-white rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold mb-2 text-primary">500+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="bg-white backdrop-blur-lg border border-white rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold mb-2 text-primary">50+</div>
                  <div className="text-sm text-gray-600">Countries Served</div>
                </div>
                <div className="bg-white backdrop-blur-lg border border-white rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold mb-2 text-primary">98%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
                <div className="bg-white backdrop-blur-lg border border-white rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold mb-2 text-primary">25+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* From Design to Delivery Section */}
      <section className="py-6 md:py-12 relative overflow-hidden" style={{ backgroundColor: '#f9fafb' }}>
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8 px-2">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 leading-tight line-clamp-2 md:line-clamp-none">
              From Design to Delivery <span className="text-primary">Excellence at Every Step</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1674065719169-5ba77e617e60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmUlMjB3b3Jrc2hvcCUyMGNyYWZ0c21hbiUyMGRlc2lnbnxlbnwxfHx8fDE3NTc2ODA5MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Furniture Workshop Craftsman Design"
                  className="w-full h-[250px] md:h-[500px] object-cover rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                  width={800}
                  height={500}
                />
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Discover how we transform your vision into premium hospitality solutions through our meticulous 
                four-stage process, ensuring quality, precision, and timely delivery.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-accent/30 transition-all duration-300">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Design Consultation</h3>
                    <p className="text-muted-foreground text-sm">Collaborative design sessions to understand your vision.</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-accent/30 transition-all duration-300">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
                    <Factory className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Precision Manufacturing</h3>
                    <p className="text-muted-foreground text-sm">State-of-the-art manufacturing with quality materials.</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-accent/30 transition-all duration-300">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Quality Assurance</h3>
                    <p className="text-muted-foreground text-sm">Rigorous quality checks and testing standards.</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-accent/30 transition-all duration-300">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
                    <Truck className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Global Delivery</h3>
                    <p className="text-muted-foreground text-sm">Secure packaging and timely delivery worldwide.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-6 sm:px-4">
          <div className="text-center mb-4 px-2">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 leading-relaxed line-clamp-2 md:line-clamp-none">
              What Canadian Hoteliers
              <span className="text-[#f26d35] block mt-0 sm:mt-2">Say About Our Work</span>
            </h2>
            <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto">
              From coast to coast, Canadian hospitality leaders trust Sara Global Hospitality for sustainable furniture solutions.
            </p>
          </div>

          <div className="relative mb-8">
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
                              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed flex-1">
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
      <section className="py-10 md:py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl md:text-3xl font-bold mb-3 md:mb-4 line-clamp-2 md:line-clamp-none">Ready to Transform Your Hospitality Space?</h2>
          <p className="text-sm md:text-xl mb-6 md:mb-8 opacity-90">
            Let&apos;s discuss how Sara Global Hospitality can bring your vision to life with our expert countertop<br />
            and cabinet solutions and global experience.
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
          <div className="text-center mb-4 md:mb-8 px-3">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-6 leading-tight">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about our countertop and cabinet solutions
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium">What materials do you offer for kitchen countertops?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  We offer a range of commercial-grade materials including granite, quartz, stainless steel, and solid surface options. All materials are selected for their durability, heat resistance, and hygiene properties suitable for commercial hotel kitchens.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium">Are your kitchen cabinets suitable for commercial use?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Yes! All our kitchen cabinets are commercial-grade with reinforced construction, moisture-resistant finishes, and heavy-duty hardware designed to withstand the demands of hotel kitchen operations. They meet all health and safety standards for food service environments.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium">Can you customize cabinet configurations for our kitchen layout?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Absolutely! We specialize in custom cabinet configurations designed specifically for your hotel kitchen layout. Our design team will work with you to optimize storage, workflow, and space utilization based on your operational needs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium">What warranty do you provide on countertops and cabinets?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  We provide a comprehensive 10-year structural warranty on cabinets and 15-year warranty on countertop materials. This includes coverage for manufacturing defects and normal commercial wear under proper care and maintenance.
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

