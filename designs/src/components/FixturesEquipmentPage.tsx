import { useState, useRef } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { ArrowRight, ZoomIn, X, Users, Palette, Shield, Zap, TrendingUp, Heart, Check, Factory, Globe, Award, Settings, Lightbulb, Cog, Truck, CheckCircle, Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";
import baymontLogo from 'figma:asset/65e2b4ed424723dae6731b7df90d808c1d793105.png';
import bestWesternLogo from 'figma:asset/d3e30d7d50aff6f76bb0916c50dc15aa2919a066.png';
import daysInnLogo from 'figma:asset/61636d64a66e87acc43f2e63f91829fa6b8f0dea.png';
import laQuintaLogo from 'figma:asset/f31b2dfb28307640a195a389e2838f1c2a7dc156.png';
import holidayInnLogo from 'figma:asset/6e7b3d1f8e168548d6b65e7dd7fb4691d792ff17.png';
import qualityInnLogo from 'figma:asset/1a36f52dfb717910963752bf97e84ab00d9f89e9.png';

interface FixturesEquipmentPageProps {
  onNavigate: (page: string) => void;
}

export default function FixturesEquipmentPage({ onNavigate }: FixturesEquipmentPageProps) {
  const [zoomedImage, setZoomedImage] = useState<{ src: string; alt: string } | null>(null);

  // Brand logos data
  const brandLogos = [
    {
      name: "La Quinta by Wyndham",
      src: laQuintaLogo
    },
    {
      name: "Holiday Inn Express & Suites",
      src: holidayInnLogo
    },
    {
      name: "Quality Inn",
      src: qualityInnLogo
    },
    {
      name: "Baymont by Wyndham",
      src: baymontLogo
    },
    {
      name: "Best Western Plus",
      src: bestWesternLogo
    },
    {
      name: "Days Inn & Suites",
      src: daysInnLogo
    }
  ];

  // Fixtures & Equipment Products Data
  const products = [
    {
      id: "faucets",
      name: "Faucets",
      category: "faucets",
      description: "Premium hotel faucets designed for durability and style. Commercial-grade fixtures featuring water-efficient technology, elegant finishes, and long-lasting performance for bathroom and kitchen applications.",
      features: ["Water Efficient", "Commercial Grade", "Multiple Finishes", "Long Lasting"],
      image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGZhdWNldCUyMGJhdGhyb29tJTIwbHV4dXJ5fGVufDF8fHx8MTc1NzU5MTA1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Bathroom", "Kitchen", "Commercial"]
    },
    {
      id: "lighting",
      name: "Lighting",
      category: "lighting",
      description: "Contemporary hotel lighting solutions including ambient, task, and accent lighting. Energy-efficient LED fixtures with customizable designs to enhance guest comfort and create the perfect atmosphere.",
      features: ["LED Technology", "Energy Efficient", "Customizable Design", "Ambient Control"],
      image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGxpZ2h0aW5nJTIwZml4dHVyZSUyMGx1eHVyeXxlbnwxfHx8fDE3NTc1OTEwNTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["LED", "Decorative", "Efficient"]
    },
    {
      id: "mirrors",
      name: "Mirrors",
      category: "mirrors",
      description: "Hotel bathroom mirrors featuring anti-fog technology, LED backlighting, and premium glass. Available in various sizes and styles to complement any bathroom design aesthetic.",
      features: ["Anti-Fog Technology", "LED Backlight", "Premium Glass", "Custom Sizes"],
      image: "https://images.unsplash.com/photo-1631889992457-f4cf52f0ee5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRocm9vbSUyMG1pcnJvciUyMGhvdGVsJTIwbHV4dXJ5fGVufDF8fHx8MTc1NzU5MTA1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Bathroom", "LED", "Premium"]
    },
    {
      id: "artworks",
      name: "Artworks",
      category: "artworks",
      description: "Curated artwork collections for hotel spaces including original pieces, prints, and custom commissions. Professional framing and installation services to enhance your property's visual appeal.",
      features: ["Curated Collections", "Custom Commission", "Professional Framing", "Installation Service"],
      image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGFydHdvcmslMjBkZWNvciUyMGxvYmJ5fGVufDF8fHx8MTc1NzU5MTA2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Decorative", "Custom", "Professional"]
    },
    {
      id: "sinks",
      name: "Sinks",
      category: "sinks",
      description: "Commercial-grade hotel sinks crafted from premium materials. Featuring modern designs, easy maintenance surfaces, and exceptional durability for high-traffic bathroom applications.",
      features: ["Premium Materials", "Modern Design", "Easy Maintenance", "High Durability"],
      image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxiYXRocm9vbSUyMHNpbmslMjBob3RlbCUyMGx1eHVyeXxlbnwxfHx8fDE3NTc1OTEwNjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Bathroom", "Commercial", "Durable"]
    },
    {
      id: "tub-shower-surround",
      name: "Tub & Shower Surround",
      category: "tub-shower-surround",
      description: "Premium tub and shower surrounds featuring waterproof materials, contemporary designs, and easy installation. Durable solutions that resist mold and maintain beauty over time.",
      features: ["Waterproof", "Contemporary Design", "Easy Installation", "Mold Resistant"],
      image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNob3dlciUyMGJhdGhyb29tJTIwbHV4dXJ5fGVufDF8fHx8MTc1NzU5MTA2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Bathroom", "Waterproof", "Modern"]
    },
    {
      id: "lobby-items",
      name: "Lobby Items",
      category: "lobby-items",
      description: "Complete lobby fixture solutions including reception counters, decorative elements, signage, and specialized equipment. Create welcoming, functional spaces that make lasting first impressions.",
      features: ["Reception Counters", "Decorative Elements", "Custom Signage", "Functional Design"],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGxvYmJ5JTIwcmVjZXB0aW9uJTIwbHV4dXJ5fGVufDF8fHx8MTc1NzU5MTA3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Lobby", "Reception", "Decorative"]
    }
  ];

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
            src="https://images.unsplash.com/photo-1657411737752-eb9f9cbe2823?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGZpeHR1cmVzJTIwZXF1aXBtZW50JTIwY29tbWVyY2lhbHxlbnwxfHx8fDE3NTc1ODg4Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Fixtures & Equipment Collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h1 className="text-3xl lg:text-4xl mb-4 text-white">
                Fixtures & Equipment Collection
              </h1>
              <p className="text-lg lg:text-xl mb-6 opacity-90 text-white">
                Premium fixtures and equipment solutions for complete hotel room installations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white"
                  onClick={() => onNavigate("contact")}
                >
                  Request A Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
                  onClick={() => onNavigate("portfolio")}
                >
                  View Portfolio
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats and Brand Logos Section */}
      <section className="py-6 bg-background">
        <div className="container mx-auto px-4">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
            <div className="text-center">
              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-2xl border border-white/20">
                <div className="text-3xl text-primary mb-1">150+</div>
                <div className="text-sm text-muted-foreground">Canadian Hotels</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-2xl border border-white/20">
                <div className="text-3xl text-primary mb-1">10</div>
                <div className="text-sm text-muted-foreground">Provinces Served</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-2xl border border-white/20">
                <div className="text-3xl text-primary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Quality Certified</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-2xl border border-white/20">
                <div className="text-3xl text-primary mb-1">4.9★</div>
                <div className="text-sm text-muted-foreground">Avg. Rating</div>
              </div>
            </div>
          </div>

          {/* Brand Logos Section */}
          <div className="pt-8 border-t border-gray-200">
            <div className="text-center mb-8">
              <h3 className="text-3xl lg:text-4xl text-foreground mb-2">Trusted by Canada's Leading Hotel Brands</h3>
              <p className="text-muted-foreground">Premium brands choose Sara Global for their Canadian properties</p>
            </div>
            
            <div className="overflow-hidden py-4">
              <div className="flex animate-scroll-logos gap-16 items-center">
                {[...Array(2)].map((_, setIndex) => (
                  <div key={setIndex} className="flex gap-16 items-center flex-shrink-0">
                    {brandLogos.map((logo, index) => (
                      <div key={`${setIndex}-${index}`} className="flex-shrink-0">
                        <img
                          src={logo.src as unknown as string}
                          alt={`${logo.name} logo`}
                          className="h-12 w-auto object-contain transition-all duration-300 hover:scale-105"
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
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl mb-4">Our Fixtures & Equipment Categories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive range of fixtures and equipment, each designed to meet the highest standards of quality and functionality for hospitality environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/20 transition-colors duration-200 flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover/image:opacity-100 transition-opacity duration-200" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <div className="flex flex-wrap gap-1">
                      {product.tags.slice(0, 2).map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
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
                    <div className="flex flex-wrap gap-1">
                      {product.features.map((feature) => (
                        <Badge key={feature} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex">
                      <Button 
                        className="flex-1"
                        onClick={() => {
                          onNavigate(product.id);
                        }}
                      >
                        View All
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modern CTA Section with Image */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl lg:text-4xl mb-6 leading-tight">
                  Complete Your Hotel with Premium Fixtures & Equipment
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  From elegant faucets to sophisticated lighting solutions, our fixtures and equipment collection provides everything you need for a complete hotel installation. Quality, durability, and style in every piece.
                </p>
              </div>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white"
                onClick={() => onNavigate("contact")}
              >
                Request a Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Right side - Image */}
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1615874959474-d609969a20ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGJhdGhyb29tJTIwZml4dHVyZXMlMjBsdXh1cnl8ZW58MXx8fHwxNTc2NzE2Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Hotel bathroom fixtures luxury"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Hotels Choose Sara Global Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl leading-tight mb-6">
              Why Hotels Choose Sara Global Hospitality
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover what makes us the preferred partner for hospitality fixtures and equipment solutions worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group relative">
              <div className="bg-primary rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 min-h-[280px] flex flex-col">
                <div className="bg-white/20 rounded-xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Factory className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-4 leading-tight">
                  Commercial-grade quality manufacturer
                </h3>
                <p className="text-white/90 leading-relaxed text-sm flex-grow">
                  Specialized manufacturing expertise focused exclusively on commercial hospitality environments, ensuring every fixture meets industry standards.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="bg-primary rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 min-h-[280px] flex flex-col">
                <div className="bg-white/20 rounded-xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-4 leading-tight">
                  Bulk orders with customizations
                </h3>
                <p className="text-white/90 leading-relaxed text-sm flex-grow">
                  Scalable production capacity to handle large hotel projects while offering personalized solutions for unique brand requirements.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="bg-primary rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 min-h-[280px] flex flex-col">
                <div className="bg-white/20 rounded-xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-4 leading-tight">
                  International hotel chain experience
                </h3>
                <p className="text-white/90 leading-relaxed text-sm flex-grow">
                  Proven track record serving major hotel brands across USA, UAE, and UK markets with comprehensive understanding of global standards.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="bg-primary rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 min-h-[280px] flex flex-col">
                <div className="bg-white/20 rounded-xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-4 leading-tight">
                  Quality assurance and timely delivery
                </h3>
                <p className="text-white/90 leading-relaxed text-sm flex-grow">
                  Rigorous quality control processes combined with reliable logistics to ensure projects stay on schedule and budget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl mb-6 leading-tight">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about our fixtures and equipment solutions
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium">What types of fixtures and equipment do you provide for Canadian hotels?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  We provide a comprehensive range including premium faucets, energy-efficient lighting solutions, anti-fog mirrors with LED backlighting, curated artwork collections, commercial-grade sinks, waterproof tub and shower surrounds, and complete lobby fixture solutions including reception counters and decorative elements.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium">Are your fixtures suitable for high-traffic hotel environments?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Absolutely! All our fixtures and equipment are commercial-grade and specifically engineered for hospitality environments. They undergo rigorous testing to withstand continuous daily use while maintaining performance and aesthetic appeal for years.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium">Can you customize fixtures to match our hotel's design aesthetic?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Yes! We offer extensive customization options including custom finishes for faucets and hardware, tailored lighting solutions, custom-sized mirrors, commissioned artwork, and personalized lobby elements. Our team works closely with you to ensure perfect brand alignment.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium">What are the delivery timeframes for fixture orders in Canada?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Standard fixture collections typically ship within 6-8 weeks for Canadian hotels. Custom orders may require 10-14 weeks depending on specifications and quantity. We offer expedited production for urgent projects and provide detailed delivery schedules during quotation.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Image Zoom Modal */}
      {zoomedImage && (
        <Dialog open={!!zoomedImage} onOpenChange={closeModal}>
          <DialogContent className="max-w-4xl max-h-[90vh] p-0 bg-transparent border-0 shadow-none">
            <DialogTitle className="sr-only">
              Zoomed view of {zoomedImage.alt}
            </DialogTitle>
            <DialogDescription className="sr-only">
              A full-size view of the selected product image. Click the X button or press Escape to close.
            </DialogDescription>
            <div className="relative">
              <button
                onClick={closeModal}
                className="absolute -top-10 right-0 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Close image zoom"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              <ImageWithFallback
                src={zoomedImage.src}
                alt={zoomedImage.alt}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

