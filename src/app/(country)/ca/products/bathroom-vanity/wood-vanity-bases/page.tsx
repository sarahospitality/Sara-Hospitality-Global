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

const woodVanityBases = [
  {
    id: "wv-601",
    name: "WV-601",
    category: "Oak Vanity Base",
    description: "Classic solid oak vanity base with rich grain patterns. Features moisture-resistant finish and ample storage for hotel bathroom essentials.",
    features: ["Solid Oak", "Rich Grain", "Moisture Resistant", "Ample Storage"],
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80",
    tags: ["Oak", "Classic", "Storage"]
  },
  {
    id: "wv-602",
    name: "WV-602",
    category: "Walnut Vanity Base",
    description: "Luxurious walnut vanity base with deep brown tones. Combines elegant aesthetics with robust construction for upscale hotels.",
    features: ["Premium Walnut", "Deep Brown", "Elegant", "Robust"],
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80",
    tags: ["Walnut", "Luxury", "Brown"]
  },
  {
    id: "wv-603",
    name: "WV-603",
    category: "Maple Vanity Base",
    description: "Light maple vanity base creating bright, airy bathroom spaces. Features fine grain and contemporary design perfect for modern hotels.",
    features: ["Light Maple", "Fine Grain", "Bright Finish", "Contemporary"],
    image: "https://images.unsplash.com/photo-1565183997392-2f5d9f2f7f4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80",
    tags: ["Maple", "Light", "Modern"]
  },
  {
    id: "wv-604",
    name: "WV-604",
    category: "Espresso Wood Vanity",
    description: "Rich espresso-finished wood vanity offering sophisticated dark tones. Ideal for creating dramatic, elegant hotel bathroom aesthetics.",
    features: ["Espresso Finish", "Dark Tones", "Sophisticated", "Dramatic"],
    image: "https://images.unsplash.com/photo-1603357841205-6e91466d1e91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80",
    tags: ["Espresso", "Dark", "Elegant"]
  },
  {
    id: "wv-605",
    name: "WV-605",
    category: "Floating Vanity Base",
    description: "Modern floating vanity base with wall-mount design. Creates spacious feel while providing easy floor cleaning for hotels.",
    features: ["Wall Mount", "Floating Design", "Space Saving", "Easy Cleaning"],
    image: "https://images.unsplash.com/photo-1556912173-46c336c7fd55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80",
    tags: ["Floating", "Modern", "Space-Saving"]
  },
  {
    id: "wv-606",
    name: "WV-606",
    category: "Rustic Reclaimed Wood",
    description: "Unique rustic vanity base crafted from reclaimed wood. Brings authentic character and sustainability story to boutique hotel bathrooms.",
    features: ["Reclaimed Wood", "Rustic Character", "Sustainable", "Unique"],
    image: "https://images.unsplash.com/photo-1560449752-c449e7adb0eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80",
    tags: ["Rustic", "Reclaimed", "Eco-Friendly"]
  }
];

export default function WoodVanityBasesPage() {
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
            src="https://images.unsplash.com/photo-1620626011761-996317b8d101?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920&q=80"
            alt="Wood Vanity Bases Collection"
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
                Wood Vanity Bases Collection
              </h1>
              <p className="text-sm sm:text-lg lg:text-xl mb-4 sm:mb-6 opacity-90 text-white px-2 sm:px-0">
                Solid wood vanity bases featuring expert craftsmanship, moisture-resistant finishes, and elegant storage solutions for hotel bathrooms
              </p>
              <div className="flex justify-center w-full">
                <Link href="/ca/contact" className="w-full sm:w-auto">
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white text-sm sm:text-base"
                  >
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

      {/* Our Wood Vanity Bases - Products Grid */}
      <section className="py-5 sm:py-8 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 sm:mb-8 px-4 sm:px-0">
            <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 leading-tight">Our Wood Vanity Bases</h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
              Discover our comprehensive range of solid wood vanity bases, each crafted with expert craftsmanship to meet your hospitality bathroom needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {woodVanityBases.map((vanity) => (
              <Card key={vanity.id} className="group overflow-hidden hover:shadow-lg transition-shadow duration-300 p-0">
                <div 
                  className="relative cursor-pointer group/image overflow-hidden m-0"
                  onClick={() => handleImageClick(vanity.image, vanity.name)}
                >
                  <ImageWithFallback
                    src={vanity.image}
                    alt={vanity.name}
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
                    <h3 className="font-bold text-base sm:text-lg">{vanity.name}</h3>
                    <Button 
                      className="bg-primary hover:bg-primary/90 text-sm sm:text-base whitespace-nowrap"
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
      <section className="py-5 sm:py-8 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div className="space-y-4 sm:space-y-6 px-2 sm:px-0">
              <div>
                <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold leading-tight mb-3 sm:mb-4 text-center lg:text-left">
                  Transform Your Hotel Bathrooms with Premium Wood Vanities
                </h2>
                <p className="text-sm sm:text-lg text-muted-foreground mb-4 sm:mb-8 text-center lg:text-left">
                  Discover our comprehensive range of solid wood vanity bases designed to elevate your hotel bathrooms with timeless warmth and expert craftsmanship.
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
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" style={{ animation: 'arrowMove 2s ease-in-out infinite' }} />
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1620626011761-996317b8d101?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80"
                  alt="Premium wood vanity base for hotel bathroom"
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
      <section className="py-5 sm:py-10 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 sm:mb-8 px-4 sm:px-0">
            <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold leading-tight mb-3 sm:mb-6">
              Why Hotels Choose Sara Global Hospitality
            </h2>
            <p className="text-sm sm:text-lg text-muted-foreground max-w-3xl mx-auto px-2 sm:px-0">
              Discover what makes us the preferred partner for hospitality furniture solutions worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="group relative h-full">
              <div className="bg-primary rounded-2xl p-6 sm:p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                <div className="bg-white/20 rounded-xl p-3 sm:p-4 w-fit mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Factory className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl mb-3 sm:mb-4 leading-tight">
                  Hospitality-grade furniture manufacturer
                </h3>
                <p className="text-white/90 leading-relaxed text-xs sm:text-sm flex-grow">
                  Specialized manufacturing expertise focused exclusively on commercial hospitality environments, ensuring every piece meets industry standards.
                </p>
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                  <Factory className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>

            <div className="group relative h-full">
              <div className="bg-primary rounded-2xl p-6 sm:p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                <div className="bg-white/20 rounded-xl p-3 sm:p-4 w-fit mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Package className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl mb-3 sm:mb-4 leading-tight">
                  Bulk order capabilities with customizations
                </h3>
                <p className="text-white/90 leading-relaxed text-xs sm:text-sm flex-grow">
                  Scalable production capacity to handle large hotel projects while offering personalized design solutions for unique brand requirements.
                </p>
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                  <Package className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>

            <div className="group relative h-full">
              <div className="bg-primary rounded-2xl p-6 sm:p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                <div className="bg-white/20 rounded-xl p-3 sm:p-4 w-fit mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl mb-3 sm:mb-4 leading-tight">
                  Experience with international hotel chains
                </h3>
                <p className="text-white/90 leading-relaxed text-xs sm:text-sm flex-grow">
                  Proven track record serving major hotel brands across USA, UAE, and UK markets with comprehensive understanding of global hospitality standards.
                </p>
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                  <Globe className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>

            <div className="group relative h-full">
              <div className="bg-primary rounded-2xl p-6 sm:p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                <div className="bg-white/20 rounded-xl p-3 sm:p-4 w-fit mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl mb-3 sm:mb-4 leading-tight">
                  Strict quality checks and timely delivery
                </h3>
                <p className="text-white/90 leading-relaxed text-xs sm:text-sm flex-grow">
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

      {/* Enhanced Wood Vanity Bases Collection Info Section */}
      <section className="relative py-6 sm:py-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute top-10 right-1/4 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 left-1/4 w-48 h-48 bg-purple-400/10 rounded-full blur-2xl animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-5xl mx-auto px-4 sm:px-0">
            <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-8 text-white bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight">
              Wood Vanity Bases: Where Craftsmanship Meets Functionality
            </h2>
            <div className="space-y-4 sm:space-y-6 text-gray-300 text-sm sm:text-lg leading-relaxed">
              <p>
                Transform your hotel&apos;s bathroom spaces with our expertly crafted wood vanity bases, combining traditional woodworking artistry with modern moisture-resistant technology. Each piece showcases natural wood beauty while delivering the durability and functionality essential for commercial hospitality bathrooms.
              </p>
              <p>
                Our wood vanity bases feature solid construction with advanced moisture-resistant finishes that protect against bathroom humidity and water exposure. The integrated storage solutions maximize functionality while maintaining elegant aesthetics, and the variety of wood species and finishes allows perfect coordination with your hotel&apos;s bathroom design vision.
              </p>
              <p>
                From intimate boutique hotels to grand luxury resorts, our wood vanity collection offers diverse styles ranging from classic to contemporary. Whether you prefer rich walnut tones, light maple brightness, or rustic reclaimed character, our vanity bases bring warmth and sophistication to your hotel bathrooms while providing the storage and durability required for commercial hospitality environments.
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
              <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 leading-tight text-center lg:text-left">Why Choose Our Hotel Wood Vanity Bases</h2>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2">Expert craftsmanship and natural beauty</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">Each vanity base showcases superior woodworking craftsmanship with natural wood grain patterns that add warmth and character to hotel bathrooms.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2">Moisture-resistant finishes for bathrooms</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">Advanced moisture-resistant treatments and sealants protect wood from bathroom humidity while maintaining natural beauty and structural integrity.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2">Integrated storage solutions</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">Thoughtfully designed drawers, shelves, and cabinets maximize bathroom storage while maintaining elegant aesthetics and easy access for guests.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2">Customizable wood species and finishes</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">Choose from multiple wood species and finishes to perfectly match your hotel&apos;s design aesthetic, from classic to contemporary styles.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 flex justify-center items-start">
              <div className="relative w-full max-w-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80"
                  alt="Premium Wood Vanity Base"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[590px] object-cover rounded-lg shadow-lg"
                  width={600}
                  height={590}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Features Section */}
      <section className="py-5 sm:py-8 relative overflow-hidden" style={{ backgroundColor: '#f9fafb' }}>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-1/4 w-24 h-24 bg-secondary/20 rounded-full blur-lg"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-6 sm:mb-8 px-4 sm:px-0">
            <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 text-foreground leading-tight">
              Premium Wood Vanity Features for Hotels
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
              Where traditional craftsmanship meets modern hospitality needs
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
            <div className="group text-center">
              <div className="relative inline-block mb-4">
                <div className="bg-white rounded-2xl p-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <User className="w-8 h-8 text-primary mx-auto" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-primary to-orange-500 rounded-full"></div>
              </div>
              <h3 className="font-bold mb-2 text-foreground">Natural Wood</h3>
              <p className="text-sm text-muted-foreground">Authentic solid wood with unique grain patterns</p>
            </div>

            <div className="group text-center">
              <div className="relative inline-block mb-4">
                <div className="bg-white rounded-2xl p-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <Heart className="w-8 h-8 text-primary mx-auto" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-primary to-orange-500 rounded-full"></div>
              </div>
              <h3 className="font-bold mb-2 text-foreground">Guest Appeal</h3>
              <p className="text-sm text-muted-foreground">Warm wood tones create inviting bathroom atmosphere</p>
            </div>

            <div className="group text-center">
              <div className="relative inline-block mb-4">
                <div className="bg-white rounded-2xl p-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <Clock className="w-8 h-8 text-primary mx-auto" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-primary to-orange-500 rounded-full"></div>
              </div>
              <h3 className="font-bold mb-2 text-foreground">Lasting Quality</h3>
              <p className="text-sm text-muted-foreground">Solid construction ensures decades of reliable service</p>
            </div>

            <div className="group text-center">
              <div className="relative inline-block mb-4">
                <div className="bg-white rounded-2xl p-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <Award className="w-8 h-8 text-primary mx-auto" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-primary to-orange-500 rounded-full"></div>
              </div>
              <h3 className="font-bold mb-2 text-foreground">Expert Crafted</h3>
              <p className="text-sm text-muted-foreground">Skilled artisans ensure superior quality in every detail</p>
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
      <section className="py-8 sm:py-16 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 leading-tight px-4 sm:px-0">Ready to Transform Your Hospitality Space?</h2>
          <p className="text-sm sm:text-xl mb-6 sm:mb-8 opacity-90 px-2 sm:px-0">
            Let&apos;s discuss how Sara Global Hospitality can bring your vision to life with our expert furniture<br className="hidden sm:block" />
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
              Quick answers to common questions about our wood vanity bases
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium">Can wood vanity bases withstand hotel bathroom moisture?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Absolutely! Our wood vanity bases are specially treated with advanced moisture-resistant finishes and sealants designed for commercial bathroom environments. The solid wood construction combined with proper sealing protects against humidity, water splashes, and daily hotel use while maintaining structural integrity and beauty.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium">What wood species are available for hotel vanity bases?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  We offer multiple premium wood species including oak, walnut, maple, cherry, and reclaimed wood. Each species brings unique grain patterns and color tones. Our design team can help you select the perfect wood species and finish that complements your hotel&apos;s bathroom aesthetic and durability requirements.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium">Can wood vanity bases be customized for different bathroom sizes?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Yes! We specialize in custom sizing to fit any bathroom layout. Whether you need compact vanities for standard rooms or expansive bases for luxury suites, we can customize dimensions, drawer configurations, shelf layouts, and storage options to perfectly match your hotel&apos;s specific bathroom requirements.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium">What are the lead times for wood vanity base orders in Canada?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  For Canadian hotel projects, standard wood vanity bases typically ship within 6-8 weeks. Custom designs may require 10-12 weeks depending on wood species, finish selections, and order quantity. We provide detailed production and delivery timelines during quotation and can accommodate expedited schedules for urgent projects.
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

