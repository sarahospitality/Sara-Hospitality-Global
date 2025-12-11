"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/Accordion';
import { ArrowRight, ZoomIn, X, Factory, Package, Globe, CheckCircle, User, Heart, Clock, Award, Star, Quote, ChevronLeft, ChevronRight, Lamp } from 'lucide-react';
import Link from 'next/link';

const brandLogos = [
  { name: "La Quinta by Wyndham", src: "/assets/laquinta-5.png" },
  { name: "Best Western Plus", src: "/assets/bestwesternplus-3.png" },
  { name: "Quality Inn", src: "/assets/qualityinn-1.png" },
  { name: "Baymont by Wyndham", src: "/assets/baymont-2.png" },
  { name: "Days Inn & Suites", src: "/assets/daysinn-4.png" },
  { name: "La Quinta by Wyndham", src: "/assets/laquinta-6.png" }
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

const lighting = [
  {
    id: "lt-201",
    name: "LT-201",
    category: "Modern LED Pendant",
    description: "Contemporary LED pendant lighting perfect for hotel lobbies and dining areas. Features energy-efficient technology with elegant design and adjustable brightness.",
    features: ["LED Technology", "Energy Efficient", "Adjustable Brightness", "Modern Design"],
    image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHBlbmRhbnQlMjBsaWdodGluZ3xlbnwxfHx8fDE3NTc1OTExMTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Modern", "LED", "Pendant"]
  },
  {
    id: "lt-202",
    name: "LT-202",
    category: "Crystal Chandelier",
    description: "Luxurious crystal chandelier designed for upscale hotel spaces. Premium materials with stunning light refraction creating elegant ambiance.",
    features: ["Crystal Design", "Premium Quality", "Elegant Ambiance", "Luxury Appeal"],
    image: "https://images.unsplash.com/photo-1565183997392-2f6f122e5912?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjaGFuZGVsaWVyJTIwaG90ZWx8ZW58MXx8fHwxNzU3NTkxMTE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Luxury", "Crystal", "Chandelier"]
  },
  {
    id: "lt-203",
    name: "LT-203",
    category: "Wall Sconce Lighting",
    description: "Elegant wall sconces ideal for hotel corridors and guest rooms. Provides ambient lighting with sophisticated style and easy installation.",
    features: ["Wall Mount", "Ambient Lighting", "Easy Installation", "Sophisticated Style"],
    image: "https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YWxsJTIwc2NvbmNlJTIwaG90ZWx8ZW58MXx8fHwxNzU3NTkxMTE3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Wall Sconce", "Ambient", "Corridor"]
  },
  {
    id: "lt-204",
    name: "LT-204",
    category: "Smart Bedside Lamp",
    description: "Innovative smart bedside lamps with touch controls and USB charging ports. Perfect for modern hotel guest rooms requiring tech integration.",
    features: ["Smart Controls", "USB Charging", "Touch Sensor", "Tech Integration"],
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWRzaWRlJTIwbGFtcCUyMGhvdGVsfGVufDF8fHx8MTc1NzU5MTEyMHww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Smart", "Bedside", "Tech"]
  },
  {
    id: "lt-205",
    name: "LT-205",
    category: "Recessed LED Downlight",
    description: "Energy-efficient recessed LED downlights for hotel ceilings. Provides even illumination with minimal visual intrusion and long lifespan.",
    features: ["Recessed Design", "LED Efficiency", "Even Illumination", "Long Lifespan"],
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWNlc3NlZCUyMGxpZ2h0aW5nJTIwY2VpbGluZ3xlbnwxfHx8fDE3NTc1OTExMjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Recessed", "LED", "Ceiling"]
  },
  {
    id: "lt-206",
    name: "LT-206",
    category: "Task Lighting Desk Lamp",
    description: "Professional task lighting designed for hotel business centers and work desks. Adjustable arm with focused illumination for productivity.",
    features: ["Task Lighting", "Adjustable Arm", "Focused Light", "Professional Grade"],
    image: "https://images.unsplash.com/photo-1550985616-10810253b84d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNrJTIwbGFtcCUyMGhvdGVsJTIwb2ZmaWNlfGVufDF8fHx8MTc1NzU5MTEyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Task", "Desk", "Professional"]
  }
];

export default function LightingPage() {
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
            src="https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxob3RlbCUyMGxpZ2h0aW5nJTIwbHV4dXJ5fGVufDF8fHx8MTc1NzU5MTEzMHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Lighting Collection"
            className="w-full h-full object-cover"
            width={1920}
            height={600}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <div className="max-w-2xl mx-auto px-2 sm:px-0">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-white leading-tight">
                Lighting Collection
              </h1>
              <p className="text-sm sm:text-lg lg:text-xl mb-4 sm:mb-6 opacity-90 text-white px-2 sm:px-0">
                Premium lighting solutions designed to illuminate hotel spaces with style and efficiency
              </p>
              <div className="flex justify-center w-full">
                <Link href="/ca/contact" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white text-sm sm:text-base">
                  Get Free Consultation
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" style={{ animation: 'arrowMove 2s ease-in-out infinite' }} />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats and Brand Logos Section */}
      <section className="py-4 sm:py-6 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-10">
            {/* Hotels Served */}
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

            {/* Energy Savings */}
            <div className="text-center">
              <div className="bg-white/95 backdrop-blur-sm p-3 sm:p-4 md:p-6 rounded-xl shadow-2xl border border-white/20">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-1">80%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Energy Savings</div>
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

          {/* Brand Logos Section */}
          <div className="pt-4 sm:pt-6 md:pt-8 border-t border-gray-200">
            <div className="text-center mb-4 sm:mb-6 md:mb-8 px-4 sm:px-0">
              <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-foreground mb-2 leading-tight">Trusted by Canada&apos;s Leading Hotel Brands</h3>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground px-2 sm:px-0">
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

      {/* Products Grid */}
      <section className="py-5 sm:py-8 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 sm:mb-8 px-4 sm:px-0">
            <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 leading-tight">Our Lighting Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our comprehensive range of lighting fixtures, each designed with unique features to meet your hospitality lighting needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {lighting.map((light) => (
              <Card key={light.id} className="group overflow-hidden hover:shadow-lg transition-shadow duration-300 p-0">
                <div 
                  className="relative cursor-pointer group/image overflow-hidden m-0"
                  onClick={() => handleImageClick(light.image, light.name)}
                >
                  <ImageWithFallback
                    src={light.image}
                    alt={light.name}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300 block"
                    width={400}
                    height={256}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/20 transition-colors duration-200 flex items-center justify-center">
                    <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover/image:opacity-100 transition-opacity duration-200" />
                  </div>
                </div>
                
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-bold text-base sm:text-lg">{light.name}</h3>
                    <Button className="bg-primary hover:bg-primary/90" onClick={(e) => {
                      e.preventDefault();
                      if (typeof window !== 'undefined') {
                        window.openQuotePopup?.();
                      }
                    }}>
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
      <section className="py-5 sm:py-8 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div className="space-y-4 sm:space-y-6 px-2 sm:px-0">
              <div>
                <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold leading-tight mb-3 sm:mb-4 text-center lg:text-left">
                  Illuminate Your Hotel with Premium Lighting Solutions
                </h2>
                <p className="text-sm sm:text-lg text-muted-foreground mb-4 sm:mb-8 text-center lg:text-left">
                  Discover our comprehensive range of hotel lighting designed to create perfect ambiance while reducing energy costs. From elegant chandeliers to smart LED solutions, we have everything you need.
                </p>
              </div>
              <div className="flex justify-center lg:justify-start w-full lg:w-auto">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white text-sm sm:text-base"
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
                  src="https://images.unsplash.com/photo-1713192707527-13b598f4adca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBzb2ZhJTIwaG90ZWwlMjBmdXJuaXR1cmV8ZW58MXx8fHwxNTc2NzE2Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Modern luxury lighting"
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

      {/* Why Hotels Choose Sara Global Hospitality Section */}
      <section className="py-5 sm:py-10 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 sm:mb-8 px-4 sm:px-0">
            <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold leading-tight mb-3 sm:mb-6">
              Why Hotels Choose Sara Global Hospitality
            </h2>
            <p className="text-sm sm:text-lg text-muted-foreground max-w-3xl mx-auto px-2 sm:px-0">
              Discover what makes us the preferred partner for hospitality lighting solutions worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Box 1: Commercial-grade lighting specialist */}
            <div className="group relative h-full">
              <div className="bg-primary rounded-2xl p-6 sm:p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                <div className="bg-white/20 rounded-xl p-3 sm:p-4 w-fit mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Factory className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl mb-3 sm:mb-4 leading-tight">
                  Commercial-grade lighting specialist
                </h3>
                <p className="text-white/90 leading-relaxed text-xs sm:text-sm flex-grow">
                  Specialized expertise in hospitality lighting environments, ensuring every fixture meets commercial standards for performance and longevity.
                </p>
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                  <Factory className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>

            {/* Box 2: Bulk orders with custom designs */}
            <div className="group relative h-full">
              <div className="bg-primary rounded-2xl p-6 sm:p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                <div className="bg-white/20 rounded-xl p-3 sm:p-4 w-fit mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Package className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl mb-3 sm:mb-4 leading-tight">
                  Bulk orders with custom designs
                </h3>
                <p className="text-white/90 leading-relaxed text-xs sm:text-sm flex-grow">
                  Scalable production capacity to handle large hotel projects while offering customized lighting solutions for unique brand aesthetics.
                </p>
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                  <Package className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>

            {/* Box 3: International hotel chain experience */}
            <div className="group relative h-full">
              <div className="bg-primary rounded-2xl p-6 sm:p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                <div className="bg-white/20 rounded-xl p-3 sm:p-4 w-fit mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl mb-3 sm:mb-4 leading-tight">
                  International hotel chain experience
                </h3>
                <p className="text-white/90 leading-relaxed text-xs sm:text-sm flex-grow">
                  Proven track record serving major hotel brands across global markets with comprehensive understanding of hospitality lighting standards.
                </p>
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                  <Globe className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>

            {/* Box 4: Quality assurance and timely delivery */}
            <div className="group relative h-full">
              <div className="bg-primary rounded-2xl p-6 sm:p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                <div className="bg-white/20 rounded-xl p-3 sm:p-4 w-fit mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl mb-3 sm:mb-4 leading-tight">
                  Quality assurance and timely delivery
                </h3>
                <p className="text-white/90 leading-relaxed text-xs sm:text-sm flex-grow">
                  Rigorous quality control processes combined with reliable logistics to ensure projects stay on schedule and within budget.
                </p>
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                  <CheckCircle className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Lighting Collection Info Section */}
      <section className="relative py-6 sm:py-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Dynamic Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute top-10 right-1/4 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
          <div className="absolute bottom-10 left-1/4 w-48 h-48 bg-purple-400/10 rounded-full blur-2xl animate-pulse delay-1500"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-5xl mx-auto px-4 sm:px-0">
            <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-8 text-white bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight">
              Lighting Collection: Where Illumination Meets Innovation
            </h2>
            <div className="space-y-4 sm:space-y-6 text-gray-300 text-sm sm:text-lg leading-relaxed">
              <p>
                Transform your hotel&apos;s atmosphere with our meticulously curated lighting collection, designed specifically for the hospitality industry&apos;s unique requirements. Each fixture combines energy-efficient LED technology with aesthetic sophistication, ensuring your guests experience perfect illumination while reducing operational costs.
              </p>
              <p>
                Our hotel lighting solutions feature commercial-grade construction, including premium materials, advanced LED drivers, and sophisticated controls that withstand continuous operation while maintaining consistent performance. The carefully engineered light distribution and color temperatures create welcoming ambiance throughout your property, from intimate guest rooms to grand public spaces.
              </p>
              <p>
                From boutique hotels to international resort chains, our collection offers versatile designs that seamlessly integrate with any hospitality aesthetic. Whether you prefer modern minimalism, classic elegance, or contemporary innovation, our lighting enhances your property&apos;s ambiance while delivering the energy efficiency and durability essential for commercial hospitality environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-5 sm:py-10 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div className="flex-1 px-2 sm:px-0">
              <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 leading-tight text-center lg:text-left">Why Choose Our Hotel Lighting</h2>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2">Energy-efficient LED technology</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">Advanced LED systems reduce energy consumption by up to 80% compared to traditional lighting while providing superior illumination quality.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2">Long lifespan reduces maintenance</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">Premium LED fixtures last 50,000+ hours, significantly reducing replacement frequency and maintenance costs in hospitality environments.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2">Customizable ambiance control</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">Dimmable options and color temperature control allow precise atmosphere adjustment for different spaces and times of day.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2">Wide range of styles and applications</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">From elegant chandeliers to functional task lighting, our collection covers every hotel lighting need with coordinated design options.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - Lighting Image */}
            <div className="flex-1 flex justify-center items-start">
              <div className="relative w-full max-w-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1690740548374-df4075dd79b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZGluaW5nJTIwY2hhaXIlMjBob3RlbCUyMGx1eHVyeXxlbnwxfHx8fDE3NTc1OTgwNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Premium Lighting"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[590px] object-cover rounded-lg shadow-lg"
                  width={600}
                  height={590}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Performance Section */}
      <section className="py-8 relative overflow-hidden" style={{ backgroundColor: '#f9fafb' }}>
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-1/4 w-24 h-24 bg-secondary/20 rounded-full blur-lg"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold mb-3 text-foreground">
              Efficiency & Design in Hotel Lighting
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Where energy savings meet aesthetic excellence
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {/* LED Innovation */}
            <div className="group text-center">
              <div className="relative inline-block mb-4">
                <div className="bg-white rounded-2xl p-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <Lamp className="w-8 h-8 text-primary mx-auto" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-primary to-orange-500 rounded-full"></div>
              </div>
              <h3 className="font-bold mb-2 text-foreground">LED Innovation</h3>
              <p className="text-sm text-muted-foreground">Latest LED technology provides brilliant illumination with minimal energy consumption</p>
            </div>

            {/* Guest Comfort */}
            <div className="group text-center">
              <div className="relative inline-block mb-4">
                <div className="bg-white rounded-2xl p-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <Heart className="w-8 h-8 text-primary mx-auto" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-primary to-orange-500 rounded-full"></div>
              </div>
              <h3 className="font-bold mb-2 text-foreground">Guest Comfort</h3>
              <p className="text-sm text-muted-foreground">Perfect lighting creates welcoming ambiance that enhances guest satisfaction and reviews</p>
            </div>

            {/* Long Lifespan */}
            <div className="group text-center">
              <div className="relative inline-block mb-4">
                <div className="bg-white rounded-2xl p-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <Clock className="w-8 h-8 text-primary mx-auto" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-primary to-orange-500 rounded-full"></div>
              </div>
              <h3 className="font-bold mb-2 text-foreground">Long Lifespan</h3>
              <p className="text-sm text-muted-foreground">50,000+ hour rated life reduces maintenance frequency and replacement costs significantly</p>
            </div>

            {/* Industry Certified */}
            <div className="group text-center">
              <div className="relative inline-block mb-4">
                <div className="bg-white rounded-2xl p-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <Award className="w-8 h-8 text-primary mx-auto" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-primary to-orange-500 rounded-full"></div>
              </div>
              <h3 className="font-bold mb-2 text-foreground">Industry Certified</h3>
              <p className="text-sm text-muted-foreground">Meets hospitality standards including UL, DLC, and Energy Star certifications</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-5 sm:py-8 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-4 sm:mb-6 px-4 sm:px-0">
            <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-6 leading-tight">
              What Canadian Hoteliers
              <span className="text-[#f26d35] block mt-1 sm:mt-2">Say About Our Work</span>
            </h2>
            <p className="text-sm sm:text-lg text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
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

      {/* CTA Section */}
      <section className="py-8 sm:py-16 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 leading-tight px-4 sm:px-0">Ready to Transform Your Hospitality Space?</h2>
          <p className="text-sm sm:text-xl mb-6 sm:mb-8 opacity-90 px-2 sm:px-0">
            Let&apos;s discuss how Sara Global Hospitality can bring your vision to life with our expert lighting<br className="hidden sm:block" />
            solutions and global experience.
          </p>
          <div className="flex justify-center w-full px-4 sm:px-0">
            <Link href="/ca/contact" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                variant="secondary" 
                className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 text-sm sm:text-base"
              >
                Get Free Consultation
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" style={{ animation: 'arrowMove 2s ease-in-out infinite' }} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-6 sm:py-12 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 sm:mb-8 px-4 sm:px-0">
            <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-6 leading-tight">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
              Quick answers to common questions about our lighting solutions
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium">How much energy can hotels save with LED lighting?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Our LED lighting solutions can reduce energy consumption by 70-80% compared to traditional incandescent or halogen lighting. This translates to significant cost savings over time, with most hotels seeing ROI within 2-3 years through reduced electricity bills and maintenance costs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium">Can you customize lighting designs for our hotel brand?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Absolutely! We offer extensive customization including custom finishes, sizes, color temperatures, and smart controls. Our design team works closely with you to create lighting solutions that perfectly align with your brand identity and aesthetic vision.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium">What is the lifespan of your hotel lighting fixtures?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Our LED fixtures are rated for 50,000+ hours of operation, which typically translates to 15-20 years of hotel use. This extended lifespan significantly reduces replacement frequency and maintenance costs compared to traditional lighting solutions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium">What are the delivery timeframes for lighting orders in Canada?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Standard lighting collections typically ship within 6-8 weeks for Canadian hotels. Custom designs may require 10-12 weeks depending on specifications. We offer expedited production for urgent projects and provide detailed delivery schedules during the quotation process. All shipments include professional logistics coordination across Canada.
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
