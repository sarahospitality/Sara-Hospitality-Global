import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ArrowRight, ZoomIn, X, Factory, Package, Globe, CheckCircle, User, Heart, Clock, Award, Lightbulb } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";
import baymontLogo from 'figma:asset/65e2b4ed424723dae6731b7df90d808c1d793105.png';
import bestWesternLogo from 'figma:asset/d3e30d7d50aff6f76bb0916c50dc15aa2919a066.png';
import daysInnLogo from 'figma:asset/61636d64a66e87acc43f2e63f91829fa6b8f0dea.png';
import laQuintaLogo from 'figma:asset/f31b2dfb28307640a195a389e2838f1c2a7dc156.png';
import holidayInnLogo from 'figma:asset/6e7b3d1f8e168548d6b65e7dd7fb4691d792ff17.png';
import qualityInnLogo from 'figma:asset/1a36f52dfb717910963752bf97e84ab00d9f89e9.png';

interface LightingPageProps {
  onNavigate: (page: string) => void;
}

export default function LightingPage({ onNavigate }: LightingPageProps) {
  const [zoomedImage, setZoomedImage] = useState<{ src: string; alt: string } | null>(null);

  // Brand logos data
  const brandLogos = [
    { name: "La Quinta by Wyndham", src: laQuintaLogo },
    { name: "Holiday Inn Express & Suites", src: holidayInnLogo },
    { name: "Quality Inn", src: qualityInnLogo },
    { name: "Baymont by Wyndham", src: baymontLogo },
    { name: "Best Western Plus", src: bestWesternLogo },
    { name: "Days Inn & Suites", src: daysInnLogo }
  ];

  // Lighting Products Data
  const lighting = [
    {
      id: "lt-201",
      name: "LT-201",
      category: "Modern LED Pendant",
      description: "Contemporary LED pendant lighting perfect for hotel lobbies and dining areas. Features energy-efficient technology with elegant design and adjustable brightness.",
      features: ["LED Technology", "Energy Efficient", "Adjustable Brightness", "Modern Design"],
      image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHBlbmRhbnQlMjBsaWdodGluZ3xlbnwxfHx8fDE3NTc1OTExMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Modern", "LED", "Pendant"]
    },
    {
      id: "lt-202",
      name: "LT-202",
      category: "Crystal Chandelier",
      description: "Luxurious crystal chandelier designed for upscale hotel spaces. Premium materials with stunning light refraction creating elegant ambiance.",
      features: ["Crystal Design", "Premium Quality", "Elegant Ambiance", "Luxury Appeal"],
      image: "https://images.unsplash.com/photo-1565183997392-2f6f122e5912?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjaGFuZGVsaWVyJTIwaG90ZWx8ZW58MXx8fHwxNzU3NTkxMTE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Luxury", "Crystal", "Chandelier"]
    },
    {
      id: "lt-203",
      name: "LT-203",
      category: "Wall Sconce Lighting",
      description: "Elegant wall sconces ideal for hotel corridors and guest rooms. Provides ambient lighting with sophisticated style and easy installation.",
      features: ["Wall Mount", "Ambient Lighting", "Easy Installation", "Sophisticated Style"],
      image: "https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YWxsJTIwc2NvbmNlJTIwaG90ZWx8ZW58MXx8fHwxNzU3NTkxMTE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Wall Sconce", "Ambient", "Corridor"]
    },
    {
      id: "lt-204",
      name: "LT-204",
      category: "Smart Bedside Lamp",
      description: "Innovative smart bedside lamps with touch controls and USB charging ports. Perfect for modern hotel guest rooms requiring tech integration.",
      features: ["Smart Controls", "USB Charging", "Touch Sensor", "Tech Integration"],
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWRzaWRlJTIwbGFtcCUyMGhvdGVsfGVufDF8fHx8MTc1NzU5MTEyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Smart", "Bedside", "Tech"]
    },
    {
      id: "lt-205",
      name: "LT-205",
      category: "Recessed LED Downlight",
      description: "Energy-efficient recessed LED downlights for hotel ceilings. Provides even illumination with minimal visual intrusion and long lifespan.",
      features: ["Recessed Design", "LED Efficiency", "Even Illumination", "Long Lifespan"],
      image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWNlc3NlZCUyMGxpZ2h0aW5nJTIwY2VpbGluZ3xlbnwxfHx8fDE3NTc1OTExMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Recessed", "LED", "Ceiling"]
    },
    {
      id: "lt-206",
      name: "LT-206",
      category: "Task Lighting Desk Lamp",
      description: "Professional task lighting designed for hotel business centers and work desks. Adjustable arm with focused illumination for productivity.",
      features: ["Task Lighting", "Adjustable Arm", "Focused Light", "Professional Grade"],
      image: "https://images.unsplash.com/photo-1550985616-10810253b84d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNrJTIwbGFtcCUyMGhvdGVsJTIwb2ZmaWNlfGVufDF8fHx8MTc1NzU5MTEyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Task", "Desk", "Professional"]
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
            src="https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxob3RlbCUyMGxpZ2h0aW5nJTIwbHV4dXJ5fGVufDF8fHx8MTc1NzU5MTEzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Lighting Collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h1 className="text-3xl lg:text-4xl mb-4 text-white">
                Hotel Lighting Collection
              </h1>
              <p className="text-lg lg:text-xl mb-6 opacity-90 text-white">
                Premium lighting solutions designed to illuminate hotel spaces with style and efficiency
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
                <div className="text-3xl text-primary mb-1">80%</div>
                <div className="text-sm text-muted-foreground">Energy Savings</div>
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
            <h2 className="text-3xl lg:text-4xl mb-4">Our Hotel Lighting Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our comprehensive range of lighting fixtures, each designed to create the perfect ambiance for your hospitality environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lighting.map((light) => (
              <Card key={light.id} className="group overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <div 
                    className="relative cursor-pointer group/image"
                    onClick={() => handleImageClick(light.image, light.name)}
                  >
                    <ImageWithFallback
                      src={light.image}
                      alt={light.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/20 transition-colors duration-200 flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover/image:opacity-100 transition-opacity duration-200" />
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-lg">{light.name}</h3>
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
                  Illuminate Your Hotel with Premium Lighting Solutions
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Discover our comprehensive range of hotel lighting designed to create perfect ambiance while reducing energy costs. From elegant chandeliers to smart LED solutions, we have everything you need.
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
                  src="https://images.unsplash.com/photo-1565183997392-2f6f122e5912?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxob3RlbCUyMGxpZ2h0aW5nJTIwbHV4dXJ5fGVufDF8fHx8MTU3NjcxNjM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Luxury hotel lighting"
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
              Discover what makes us the preferred partner for hospitality lighting solutions worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group relative">
              <div className="bg-primary rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 min-h-[280px] flex flex-col">
                <div className="bg-white/20 rounded-xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Factory className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-4 leading-tight">
                  Commercial-grade lighting specialist
                </h3>
                <p className="text-white/90 leading-relaxed text-sm flex-grow">
                  Specialized expertise in hospitality lighting environments, ensuring every fixture meets commercial standards for performance and longevity.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="bg-primary rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 min-h-[280px] flex flex-col">
                <div className="bg-white/20 rounded-xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Package className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-4 leading-tight">
                  Bulk orders with custom designs
                </h3>
                <p className="text-white/90 leading-relaxed text-sm flex-grow">
                  Scalable production capacity to handle large hotel projects while offering customized lighting solutions for unique brand aesthetics.
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
                  Proven track record serving major hotel brands across global markets with comprehensive understanding of hospitality lighting standards.
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
                  Rigorous quality control processes combined with reliable logistics to ensure projects stay on schedule and within budget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Lighting Collection Info Section */}
      <section className="relative py-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-4xl mb-8 text-white bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Hotel Lighting: Where Illumination Meets Innovation
            </h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Transform your hotel's atmosphere with our meticulously curated lighting collection, designed specifically for the hospitality industry's unique requirements. Each fixture combines energy-efficient LED technology with aesthetic sophistication, ensuring your guests experience perfect illumination while reducing operational costs.
              </p>
              <p>
                Our hotel lighting solutions feature commercial-grade construction, including premium materials, advanced LED drivers, and sophisticated controls that withstand continuous operation while maintaining consistent performance. The carefully engineered light distribution and color temperatures create welcoming ambiance throughout your property, from intimate guest rooms to grand public spaces.
              </p>
              <p>
                From boutique hotels to international resort chains, our collection offers versatile designs that seamlessly integrate with any hospitality aesthetic. Whether you prefer modern minimalism, classic elegance, or contemporary innovation, our lighting enhances your property's ambiance while delivering the energy efficiency and durability essential for commercial hospitality environments.
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
              <h2 className="text-3xl lg:text-4xl mb-8">Why Choose Our Hotel Lighting</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg mb-2">Energy-efficient LED technology</h3>
                    <p className="text-muted-foreground">Advanced LED systems reduce energy consumption by up to 80% compared to traditional lighting while providing superior illumination quality.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg mb-2">Long lifespan reduces maintenance</h3>
                    <p className="text-muted-foreground">Premium LED fixtures last 50,000+ hours, significantly reducing replacement frequency and maintenance costs in hospitality environments.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg mb-2">Customizable ambiance control</h3>
                    <p className="text-muted-foreground">Dimmable options and color temperature control allow precise atmosphere adjustment for different spaces and times of day.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg mb-2">Wide range of styles and applications</h3>
                    <p className="text-muted-foreground">From elegant chandeliers to functional task lighting, our collection covers every hotel lighting need with coordinated design options.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 flex justify-center items-start">
              <div className="relative w-full max-w-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1565183997392-2f6f122e5912?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxlbGVnYW50JTIwbGlnaHRpbmclMjBob3RlbCUyMGx1eHVyeXxlbnwxfHx8fDE3NTc1OTgwNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Premium Hotel Lighting"
                  className="w-full h-[590px] object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Efficiency & Design Section */}
      <section className="py-8 bg-gradient-to-r from-accent via-white to-accent/50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-1/4 w-24 h-24 bg-secondary/20 rounded-full blur-lg"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl mb-3 text-foreground">
              Efficiency & Design in Hotel Lighting
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Where energy savings meet aesthetic excellence
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="group text-center">
              <div className="relative inline-block mb-4">
                <div className="bg-white rounded-2xl p-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <Lightbulb className="w-8 h-8 text-primary mx-auto" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-primary to-orange-500 rounded-full"></div>
              </div>
              <h3 className="mb-2 text-foreground">LED Innovation</h3>
              <p className="text-sm text-muted-foreground">Latest LED technology provides brilliant illumination with minimal energy consumption</p>
            </div>

            <div className="group text-center">
              <div className="relative inline-block mb-4">
                <div className="bg-white rounded-2xl p-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <Heart className="w-8 h-8 text-primary mx-auto" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-full"></div>
              </div>
              <h3 className="mb-2 text-foreground">Guest Comfort</h3>
              <p className="text-sm text-muted-foreground">Perfect lighting creates welcoming ambiance that enhances guest satisfaction and reviews</p>
            </div>

            <div className="group text-center">
              <div className="relative inline-block mb-4">
                <div className="bg-white rounded-2xl p-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <Clock className="w-8 h-8 text-primary mx-auto" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
              </div>
              <h3 className="mb-2 text-foreground">Long Lifespan</h3>
              <p className="text-sm text-muted-foreground">50,000+ hour rated life reduces maintenance frequency and replacement costs significantly</p>
            </div>

            <div className="group text-center">
              <div className="relative inline-block mb-4">
                <div className="bg-white rounded-2xl p-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <Award className="w-8 h-8 text-primary mx-auto" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
              </div>
              <h3 className="mb-2 text-foreground">Industry Certified</h3>
              <p className="text-sm text-muted-foreground">Meets hospitality standards including UL, DLC, and Energy Star certifications</p>
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
              Quick answers to common questions about our hotel lighting solutions
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
                  Standard lighting collections typically ship within 6-8 weeks for Canadian hotels. Custom designs may require 10-12 weeks depending on specifications. We offer expedited production for urgent projects and provide detailed delivery schedules during the quotation process.
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

