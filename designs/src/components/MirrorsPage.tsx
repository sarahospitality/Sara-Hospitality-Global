import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ArrowRight, ZoomIn, X, Factory, Package, Globe, CheckCircle, User, Heart, Clock, Award } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";
import baymontLogo from 'figma:asset/65e2b4ed424723dae6731b7df90d808c1d793105.png';
import bestWesternLogo from 'figma:asset/d3e30d7d50aff6f76bb0916c50dc15aa2919a066.png';
import daysInnLogo from 'figma:asset/61636d64a66e87acc43f2e63f91829fa6b8f0dea.png';
import laQuintaLogo from 'figma:asset/f31b2dfb28307640a195a389e2838f1c2a7dc156.png';
import holidayInnLogo from 'figma:asset/6e7b3d1f8e168548d6b65e7dd7fb4691d792ff17.png';
import qualityInnLogo from 'figma:asset/1a36f52dfb717910963752bf97e84ab00d9f89e9.png';

interface MirrorsPageProps {
  onNavigate: (page: string) => void;
}

export default function MirrorsPage({ onNavigate }: MirrorsPageProps) {
  const [zoomedImage, setZoomedImage] = useState<{ src: string; alt: string } | null>(null);

  const brandLogos = [
    { name: "La Quinta by Wyndham", src: laQuintaLogo },
    { name: "Holiday Inn Express & Suites", src: holidayInnLogo },
    { name: "Quality Inn", src: qualityInnLogo },
    { name: "Baymont by Wyndham", src: baymontLogo },
    { name: "Best Western Plus", src: bestWesternLogo },
    { name: "Days Inn & Suites", src: daysInnLogo }
  ];

  const mirrors = [
    {
      id: "mr-301",
      name: "MR-301",
      category: "LED Backlit Mirror",
      description: "Modern LED backlit mirror perfect for hotel bathrooms. Features anti-fog technology, touch controls, and energy-efficient illumination for a luxury guest experience.",
      features: ["LED Backlight", "Anti-Fog", "Touch Controls", "Energy Efficient"],
      image: "https://images.unsplash.com/photo-1631889992457-f4cf52f0ee5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRocm9vbSUyMG1pcnJvciUyMExFRCUyMGhvdGVsfGVufDF8fHx8MTc1NzU5MTE0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["LED", "Modern", "Luxury"]
    },
    {
      id: "mr-302",
      name: "MR-302",
      category: "Frameless Wall Mirror",
      description: "Elegant frameless wall mirror designed for contemporary hotel spaces. Premium glass with polished edges creating a sleek, minimalist appearance.",
      features: ["Frameless Design", "Premium Glass", "Polished Edges", "Minimalist"],
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmFtZWxlc3MlMjBtaXJyb3IlMjBiYXRocm9vbXxlbnwxfHx8fDE3NTc1OTExNDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Frameless", "Contemporary", "Elegant"]
    },
    {
      id: "mr-303",
      name: "MR-303",
      category: "Magnifying Makeup Mirror",
      description: "Dual-sided magnifying mirror ideal for hotel vanity areas. Features standard and magnified views with adjustable positioning for guest convenience.",
      features: ["Dual-Sided", "Magnifying", "Adjustable", "Vanity Mirror"],
      image: "https://images.unsplash.com/photo-1585128903994-3cfabb986cbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWtldXAlMjBtaXJyb3IlMjBiYXRocm9vbXxlbnwxfHx8fDE3NTc1OTExNDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Magnifying", "Vanity", "Functional"]
    },
    {
      id: "mr-304",
      name: "MR-304",
      category: "Smart Mirror with Display",
      description: "Innovative smart mirror featuring integrated display for weather, news, and hotel information. Combines functionality with modern technology.",
      features: ["Smart Display", "Information Screen", "Touch Interface", "Tech Integration"],
      image: "https://images.unsplash.com/photo-1605296867424-35fc25c9212a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMG1pcnJvciUyMGRpc3BsYXl8ZW58MXx8fHwxNzU3NTkxMTUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Smart", "Tech", "Display"]
    },
    {
      id: "mr-305",
      name: "MR-305",
      category: "Full-Length Mirror",
      description: "Stylish full-length mirror perfect for hotel guest rooms and dressing areas. Premium quality glass with sturdy mounting for safety and durability.",
      features: ["Full Length", "Premium Quality", "Sturdy Mount", "Safety Backing"],
      image: "https://images.unsplash.com/photo-1604709177595-c90acbddc2c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdWxsJTIwbGVuZ3RoJTIwbWlycm9yJTIwaG90ZWx8ZW58MXx8fHwxNzU3NTkxMTU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Full Length", "Guest Room", "Premium"]
    },
    {
      id: "mr-306",
      name: "MR-306",
      category: "Decorative Frame Mirror",
      description: "Elegant decorative framed mirror adding sophistication to hotel spaces. Available in multiple frame finishes to match your interior design.",
      features: ["Decorative Frame", "Multiple Finishes", "Sophisticated", "Design Accent"],
      image: "https://images.unsplash.com/photo-1618220179428-22790b461013?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWNvcmF0aXZlJTIwbWlycm9yJTIwaG90ZWx8ZW58MXx8fHwxNzU3NTkxMTU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Decorative", "Framed", "Elegant"]
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
            src="https://images.unsplash.com/photo-1631889992457-f4cf52f0ee5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxob3RlbCUyMGJhdGhyb29tJTIwbWlycm9yJTIwbHV4dXJ5fGVufDF8fHx8MTc1NzU5MTE2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Mirrors Collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h1 className="text-3xl lg:text-4xl mb-4 text-white">
                Hotel Mirrors Collection
              </h1>
              <p className="text-lg lg:text-xl mb-6 opacity-90 text-white">
                Premium mirrors designed for hotel bathrooms, combining functionality, elegance, and innovation
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats and Brand Logos Section */}
      <section className="py-6 bg-background">
        <div className="container mx-auto px-4">
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
                <div className="text-sm text-muted-foreground">Premium Glass</div>
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
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl mb-4">Our Hotel Mirrors</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our comprehensive range of hotel mirrors, each designed with unique features to enhance your bathroom spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mirrors.map((mirror) => (
              <Card key={mirror.id} className="group overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <div 
                    className="relative cursor-pointer group/image"
                    onClick={() => handleImageClick(mirror.image, mirror.name)}
                  >
                    <ImageWithFallback
                      src={mirror.image}
                      alt={mirror.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/20 transition-colors duration-200 flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover/image:opacity-100 transition-opacity duration-200" />
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-lg">{mirror.name}</h3>
                    <Button className="bg-primary hover:bg-primary/90">
                      Enquire
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Transform Your Hotel CTA Section */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl lg:text-4xl leading-tight">
                  Transform Your Hotel with Premium Mirror Solutions
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Discover our comprehensive range of hotel mirrors designed to elevate your bathroom aesthetics and functionality. From LED backlit designs to smart mirrors with displays, we have everything you need.
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

            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1631889992457-f4cf52f0ee5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxob3RlbCUyMGJhdGhyb29tJTIwbWlycm9yJTIwbHV4dXJ5fGVufDF8fHx8MTU3NjcxNjM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Luxury hotel bathroom mirror"
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
              Discover what makes us the preferred partner for hospitality mirror solutions worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group relative">
              <div className="bg-primary rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 min-h-[280px] flex flex-col">
                <div className="bg-white/20 rounded-xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Factory className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-4 leading-tight">
                  Premium glass manufacturer
                </h3>
                <p className="text-white/90 leading-relaxed text-sm flex-grow">
                  Specialized manufacturing expertise in premium glass products for hospitality environments, ensuring perfect clarity and durability.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="bg-primary rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 min-h-[280px] flex flex-col">
                <div className="bg-white/20 rounded-xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Package className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-4 leading-tight">
                  Custom sizes and shapes
                </h3>
                <p className="text-white/90 leading-relaxed text-sm flex-grow">
                  Flexible customization options including custom dimensions, shapes, and integrated features to match your specific requirements.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="bg-primary rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 min-h-[280px] flex flex-col">
                <div className="bg-white/20 rounded-xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-4 leading-tight">
                  International hotel experience
                </h3>
                <p className="text-white/90 leading-relaxed text-sm flex-grow">
                  Proven track record serving major hotel brands across global markets with comprehensive understanding of hospitality standards.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="bg-primary rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 min-h-[280px] flex flex-col">
                <div className="bg-white/20 rounded-xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-4 leading-tight">
                  Quality assurance and safe delivery
                </h3>
                <p className="text-white/90 leading-relaxed text-sm flex-grow">
                  Rigorous quality control with specialized packaging and logistics ensuring safe delivery of all mirror products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Mirrors Collection Info Section */}
      <section className="relative py-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-4xl mb-8 text-white bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Premium Hotel Mirrors: Where Reflection Meets Innovation
            </h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Transform your hotel's bathrooms with our meticulously crafted mirror collection, designed specifically for the hospitality industry's demanding requirements. Each mirror combines premium glass quality with innovative features, ensuring your guests experience both clarity and functionality in their daily routines.
              </p>
              <p>
                Our hotel mirrors feature commercial-grade construction, including high-quality glass, anti-corrosion backing, and advanced coatings that resist moisture and maintain pristine clarity. The carefully engineered designs incorporate modern technologies like LED lighting, anti-fog systems, and smart displays, supporting your property's commitment to guest comfort and convenience.
              </p>
              <p>
                From intimate boutique hotels to grand resort properties, our collection offers versatile designs that seamlessly integrate with any hospitality aesthetic. Whether you prefer minimalist frameless styles, elegant decorative frames, or cutting-edge smart mirror technology, our products enhance your bathroom ambiance while delivering the durability and performance essential for commercial hospitality environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="flex-1">
              <h2 className="text-3xl lg:text-4xl mb-8">Why Choose Our Hotel Mirrors</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg mb-2">Premium quality glass construction</h3>
                    <p className="text-muted-foreground">High-grade glass with superior clarity and minimal distortion ensures guests see their true reflection every time.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg mb-2">Anti-fog and moisture-resistant</h3>
                    <p className="text-muted-foreground">Advanced coatings prevent fogging and resist moisture damage, maintaining crystal-clear reflections in humid bathroom environments.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg mb-2">Integrated LED lighting options</h3>
                    <p className="text-muted-foreground">Optional LED backlighting provides perfect illumination for grooming while adding a touch of modern luxury to bathroom spaces.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg mb-2">Custom sizing and shapes available</h3>
                    <p className="text-muted-foreground">Flexible customization options ensure perfect fit for any bathroom design, from standard rectangles to unique custom shapes.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 flex justify-center items-start">
              <div className="relative w-full max-w-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1631889992457-f4cf52f0ee5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxlbGVnYW50JTIwbWlycm9yJTIwaG90ZWwlMjBsdXh1cnl8ZW58MXx8fHwxNzU3NTk4MDYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Premium Hotel Mirror"
                  className="w-full h-[590px] object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Innovation Section */}
      <section className="py-8 bg-gradient-to-r from-accent via-white to-accent/50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-1/4 w-24 h-24 bg-secondary/20 rounded-full blur-lg"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl mb-3 text-foreground">
              Quality & Innovation in Hotel Mirrors
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Where craftsmanship meets modern technology
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
              <h3 className="mb-2 text-foreground">Crystal Clarity</h3>
              <p className="text-sm text-muted-foreground">Premium glass ensures distortion-free reflections for authentic guest experience</p>
            </div>

            <div className="group text-center">
              <div className="relative inline-block mb-4">
                <div className="bg-white rounded-2xl p-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <Heart className="w-8 h-8 text-primary mx-auto" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-full"></div>
              </div>
              <h3 className="mb-2 text-foreground">Guest Satisfaction</h3>
              <p className="text-sm text-muted-foreground">Superior quality and innovative features enhance guest comfort and positive reviews</p>
            </div>

            <div className="group text-center">
              <div className="relative inline-block mb-4">
                <div className="bg-white rounded-2xl p-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <Clock className="w-8 h-8 text-primary mx-auto" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
              </div>
              <h3 className="mb-2 text-foreground">Long-lasting Quality</h3>
              <p className="text-sm text-muted-foreground">Corrosion-resistant backing and quality materials ensure years of pristine performance</p>
            </div>

            <div className="group text-center">
              <div className="relative inline-block mb-4">
                <div className="bg-white rounded-2xl p-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <Award className="w-8 h-8 text-primary mx-auto" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
              </div>
              <h3 className="mb-2 text-foreground">Industry Certified</h3>
              <p className="text-sm text-muted-foreground">Meets and exceeds hospitality industry standards for bathroom fixtures</p>
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
              Quick answers to common questions about our hotel mirror solutions
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium">How durable are your hotel mirrors for high-humidity environments?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Our hotel mirrors are specifically engineered for bathroom environments with anti-corrosion backing, moisture-resistant coatings, and sealed edges. Each mirror undergoes rigorous testing to withstand continuous humidity exposure while maintaining clarity and structural integrity for years.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium">Can you provide custom-sized mirrors for unique bathroom layouts?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Absolutely! We specialize in custom mirror fabrication including non-standard sizes, unique shapes, and special configurations. Our team works with your specifications to create perfectly fitted mirrors for any bathroom design, including curved walls and irregular spaces.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium">Do your LED mirrors include anti-fog features?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Yes! Most of our LED mirror models include integrated anti-fog heating pads that activate automatically when the lights are turned on. This ensures guests always have a clear reflection even in steamy bathroom conditions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium">What are the delivery timeframes for mirror orders in Canada?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Standard mirror collections typically ship within 4-6 weeks for Canadian hotels. Custom-sized or specialty mirrors may require 8-10 weeks depending on specifications. We use specialized packaging and logistics partners to ensure safe delivery of all glass products across Canada.
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

