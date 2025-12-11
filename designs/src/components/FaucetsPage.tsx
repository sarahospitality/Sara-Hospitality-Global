import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ArrowRight, ZoomIn, X, Factory, Package, Globe, CheckCircle, User, Heart, Clock, Award, Quote, ChevronLeft, ChevronRight, Star, ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";
import baymontLogo from 'figma:asset/65e2b4ed424723dae6731b7df90d808c1d793105.png';
import bestWesternLogo from 'figma:asset/d3e30d7d50aff6f76bb0916c50dc15aa2919a066.png';
import daysInnLogo from 'figma:asset/61636d64a66e87acc43f2e63f91829fa6b8f0dea.png';
import laQuintaLogo from 'figma:asset/f31b2dfb28307640a195a389e2838f1c2a7dc156.png';
import holidayInnLogo from 'figma:asset/6e7b3d1f8e168548d6b65e7dd7fb4691d792ff17.png';
import qualityInnLogo from 'figma:asset/1a36f52dfb717910963752bf97e84ab00d9f89e9.png';

interface FaucetsPageProps {
  onNavigate: (page: string) => void;
}

export default function FaucetsPage({ onNavigate }: FaucetsPageProps) {
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

  // Faucets Products Data
  const faucets = [
    {
      id: "fc-101",
      name: "FC-101",
      category: "Modern Basin Faucet",
      description: "Contemporary basin faucet with sleek design, perfect for hotel bathroom sinks. Features water-efficient technology and durable chrome finish.",
      features: ["Modern Design", "Water Efficient", "Chrome Finish", "Easy Installation"],
      image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRocm9vbSUyMGZhdWNldCUyMG1vZGVybnxlbnwxfHx8fDE3NTc1OTEwODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Modern", "Basin", "Commercial"]
    },
    {
      id: "fc-102",
      name: "FC-102",
      category: "Luxury Waterfall Faucet",
      description: "Premium waterfall-style faucet offering elegant water flow and sophisticated design. Ideal for upscale hotel bathrooms with contemporary aesthetics.",
      features: ["Waterfall Design", "Premium Quality", "Elegant Flow", "Luxury Finish"],
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXVjZXQlMjBiYXRocm9vbXxlbnwxfHx8fDE3NTc1OTEwODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Luxury", "Waterfall", "Premium"]
    },
    {
      id: "fc-103",
      name: "FC-103",
      category: "Wall-Mount Faucet",
      description: "Space-saving wall-mounted faucet designed for modern hotel bathrooms. Provides clean aesthetic with easy countertop maintenance.",
      features: ["Wall Mounted", "Space Saving", "Modern Style", "Easy Clean"],
      image: "https://images.unsplash.com/photo-1604709177225-055f99402ea3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YWxsJTIwbW91bnQlMjBmYXVjZXQlMjBiYXRocm9vbXxlbnwxfHx8fDE3NTc1OTEwODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Wall Mount", "Modern", "Compact"]
    },
    {
      id: "fc-104",
      name: "FC-104",
      category: "Touchless Sensor Faucet",
      description: "Hygienic touchless faucet with motion sensor technology. Perfect for high-traffic hotel bathrooms requiring enhanced sanitation standards.",
      features: ["Touchless Technology", "Motion Sensor", "Hygienic", "Water Saving"],
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5zb3IlMjBmYXVjZXQlMjBjb21tZXJjaWFsfGVufDF8fHx8MTc1NzU5MTA5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Touchless", "Sensor", "Hygienic"]
    },
    {
      id: "fc-105",
      name: "FC-105",
      category: "Kitchen Faucet Pro",
      description: "Commercial-grade kitchen faucet with pull-down sprayer. Designed for hotel food preparation areas with heavy-duty construction.",
      features: ["Pull-Down Sprayer", "Commercial Grade", "Heavy Duty", "Flexible Hose"],
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwZmF1Y2V0JTIwY29tbWVyY2lhbHxlbnwxfHx8fDE3NTc1OTEwOTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Kitchen", "Commercial", "Professional"]
    },
    {
      id: "fc-106",
      name: "FC-106",
      category: "Classic Traditional Faucet",
      description: "Timeless traditional faucet design perfect for heritage and classic hotel properties. Premium brass construction with vintage-inspired aesthetics.",
      features: ["Traditional Design", "Brass Construction", "Classic Style", "Premium Quality"],
      image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGZhdWNldCUyMGJyYXNzfGVufDF8fHx8MTc1NzU5MTA5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Traditional", "Classic", "Premium"]
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
            src="https://images.unsplash.com/photo-1620626011761-996317b8d101?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRocm9vbSUyMGZhdWNldCUyMGhvdGVsJTIwbHV4dXJ5fGVufDF8fHx8MTc1NzU5MTEwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Faucets Collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h1 className="text-3xl lg:text-4xl mb-4 text-white">
                Hotel Faucets Collection
              </h1>
              <p className="text-lg lg:text-xl mb-6 opacity-90 text-white">
                Premium faucets designed for hotel bathrooms, combining style, efficiency, and durability
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" style={{ animation: 'arrowMove 2s ease-in-out infinite', display: 'inline-block' }} />
              </Button>
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
                <div className="text-sm text-muted-foreground">Water Efficient</div>
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
            <h2 className="text-3xl lg:text-4xl mb-4">Our Hotel Faucets</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our comprehensive range of hotel faucets, each designed with unique features to meet your hospitality fixture needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faucets.map((faucet) => (
              <Card key={faucet.id} className="group overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <div 
                    className="relative cursor-pointer group/image"
                    onClick={() => handleImageClick(faucet.image, faucet.name)}
                  >
                    <ImageWithFallback
                      src={faucet.image}
                      alt={faucet.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/20 transition-colors duration-200 flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover/image:opacity-100 transition-opacity duration-200" />
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-lg">{faucet.name}</h3>
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
            {/* Left side - Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl lg:text-4xl leading-tight">
                  Transform Your Hotel with Premium Faucet Solutions
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Discover our comprehensive range of hotel faucets designed to elevate your bathrooms' functionality and aesthetic appeal. From modern touchless designs to classic traditional styles, we have everything you need.
                </p>
              </div>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white"
                onClick={() => onNavigate("contact")}
              >
                Request a Quote
                <ArrowRight className="w-5 h-5 ml-2" style={{ animation: 'arrowMove 2s ease-in-out infinite', display: 'inline-block' }} />
              </Button>
            </div>

            {/* Right side - Image */}
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1615874959474-d609969a20ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGJhdGhyb29tJTIwZmF1Y2V0JTIwbHV4dXJ5fGVufDF8fHx8MTU3NjcxNjM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Luxury hotel bathroom faucet"
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
              Discover what makes us the preferred partner for hospitality fixture solutions worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group relative">
              <div className="bg-primary rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 min-h-[280px] flex flex-col">
                <div className="bg-white/20 rounded-xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Factory className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-4 leading-tight">
                  Commercial-grade fixture manufacturer
                </h3>
                <p className="text-white/90 leading-relaxed text-sm flex-grow">
                  Specialized manufacturing expertise focused exclusively on commercial hospitality environments, ensuring every faucet meets industry standards.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="bg-primary rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 min-h-[280px] flex flex-col">
                <div className="bg-white/20 rounded-xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Package className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-4 leading-tight">
                  Bulk order capabilities with customizations
                </h3>
                <p className="text-white/90 leading-relaxed text-sm flex-grow">
                  Scalable production capacity to handle large hotel projects while offering personalized design solutions for unique brand requirements.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="bg-primary rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 min-h-[280px] flex flex-col">
                <div className="bg-white/20 rounded-xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-4 leading-tight">
                  Experience with international hotel chains
                </h3>
                <p className="text-white/90 leading-relaxed text-sm flex-grow">
                  Proven track record serving major hotel brands across USA, UAE, and UK markets with comprehensive understanding of global hospitality standards.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="bg-primary rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 min-h-[280px] flex flex-col">
                <div className="bg-white/20 rounded-xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-4 leading-tight">
                  Strict quality checks and timely delivery
                </h3>
                <p className="text-white/90 leading-relaxed text-sm flex-grow">
                  Rigorous quality control processes at every manufacturing stage combined with reliable logistics to ensure projects stay on schedule and budget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Faucets Collection Info Section */}
      <section className="relative py-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Dynamic Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-4xl mb-8 text-white bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Premium Hotel Faucets: Where Innovation Meets Elegance
            </h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Transform your hotel's bathrooms with our meticulously crafted faucet collection, designed specifically for the hospitality industry's demanding requirements. Each faucet combines water-efficient technology with aesthetic sophistication, ensuring your guests experience both luxury and sustainability.
              </p>
              <p>
                Our hotel faucets feature commercial-grade construction, including solid brass bodies, ceramic disc valves, and premium finishes that withstand daily use while maintaining their lustrous appeal. The carefully engineered flow rates and aerators promote water conservation without compromising performance, supporting your property's environmental initiatives.
              </p>
              <p>
                From intimate boutique hotels to grand resort properties, our collection offers versatile designs that seamlessly integrate with any hospitality aesthetic. Whether you prefer modern touchless technology, contemporary minimalism, or classic elegance, our faucets enhance your bathroom ambiance while delivering the durability and functionality essential for commercial hospitality environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left side - Benefits */}
            <div className="flex-1">
              <h2 className="text-3xl lg:text-4xl mb-8">Why Choose Our Hotel Faucets</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg mb-2">Built for commercial hospitality use</h3>
                    <p className="text-muted-foreground">Engineered specifically for hotel environments, our faucets withstand continuous daily use while maintaining structural integrity and aesthetic standards.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg mb-2">Water-efficient technology</h3>
                    <p className="text-muted-foreground">Advanced aerators and flow control systems reduce water consumption by up to 30% while maintaining excellent pressure and performance.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg mb-2">Multiple finishes for brand alignment</h3>
                    <p className="text-muted-foreground">Choose from chrome, brushed nickel, oil-rubbed bronze, matte black, and gold finishes to perfectly match your hotel's design aesthetic.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg mb-2">Easy installation and maintenance</h3>
                    <p className="text-muted-foreground">Standard mounting configurations and accessible components simplify installation and routine maintenance, reducing operational costs.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - Faucet Image */}
            <div className="flex-1 flex justify-center items-start">
              <div className="relative w-full max-w-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1620626011761-996317b8d101?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxlbGVnYW50JTIwZmF1Y2V0JTIwaG90ZWwlMjBsdXh1cnl8ZW58MXx8fHwxNzU3NTk4MDYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Premium Hotel Faucet"
                  className="w-full h-[590px] object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Performance Section */}
      <section className="py-8 bg-gradient-to-r from-accent via-white to-accent/50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-1/4 w-24 h-24 bg-secondary/20 rounded-full blur-lg"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl mb-3 text-foreground">
              Quality & Performance in Hotel Faucets
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Where engineering excellence meets hospitality design standards
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
              <h3 className="mb-2 text-foreground">Premium Materials</h3>
              <p className="text-sm text-muted-foreground">Solid brass construction ensures durability and corrosion resistance for years of reliable service</p>
            </div>

            <div className="group text-center">
              <div className="relative inline-block mb-4">
                <div className="bg-white rounded-2xl p-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <Heart className="w-8 h-8 text-primary mx-auto" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-full"></div>
              </div>
              <h3 className="mb-2 text-foreground">Guest Satisfaction</h3>
              <p className="text-sm text-muted-foreground">Smooth operation and elegant design enhance guest experience and positive reviews</p>
            </div>

            <div className="group text-center">
              <div className="relative inline-block mb-4">
                <div className="bg-white rounded-2xl p-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <Clock className="w-8 h-8 text-primary mx-auto" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
              </div>
              <h3 className="mb-2 text-foreground">Long-lasting Design</h3>
              <p className="text-sm text-muted-foreground">Ceramic disc valves and quality finishes maintain performance and appearance for decades</p>
            </div>

            <div className="group text-center">
              <div className="relative inline-block mb-4">
                <div className="bg-white rounded-2xl p-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <Award className="w-8 h-8 text-primary mx-auto" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
              </div>
              <h3 className="mb-2 text-foreground">Industry Certified</h3>
              <p className="text-sm text-muted-foreground">Meets and exceeds hospitality industry standards for commercial plumbing fixtures</p>
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
              Quick answers to common questions about our hotel faucet solutions
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium">How durable are your hotel faucets for high-traffic use?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Our hotel faucets are specifically engineered for commercial environments with solid brass construction, ceramic disc valves, and premium finishes. Each faucet undergoes rigorous testing to withstand continuous daily use while maintaining performance and appearance for years.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium">Can you customize faucets to match our hotel's design?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Absolutely! We offer extensive customization options including multiple finish selections (chrome, brushed nickel, matte black, gold), custom mounting configurations, and specialized features like touchless operation. Our team works closely with you to ensure perfect brand alignment.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium">Are these faucets water-efficient and eco-friendly?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Yes! Our faucets feature advanced aerators and flow control technology that reduce water consumption by up to 30% compared to standard models, while maintaining excellent pressure and performance. They meet or exceed WaterSense and other environmental certification standards.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium">What are the delivery timeframes for faucet orders in Canada?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  For Canadian hotel orders, standard faucet collections typically ship within 4-6 weeks. Custom finish or configuration orders may require 8-10 weeks depending on specifications and quantity. We offer expedited production for urgent projects and provide detailed delivery schedules during the quotation process.
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

