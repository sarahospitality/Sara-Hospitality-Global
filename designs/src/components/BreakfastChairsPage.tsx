import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ArrowRight, ZoomIn, X, Factory, Package, Globe, CheckCircle, User, Heart, Clock, Award, Quote, ChevronLeft, ChevronRight, Star, ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";
import exampleImage from 'figma:asset/59242a7ed4014c79f79d47c7bbd7c7be4c461611.png';
import baymontLogo from 'figma:asset/65e2b4ed424723dae6731b7df90d808c1d793105.png';
import bestWesternLogo from 'figma:asset/d3e30d7d50aff6f76bb0916c50dc15aa2919a066.png';
import daysInnLogo from 'figma:asset/61636d64a66e87acc43f2e63f91829fa6b8f0dea.png';
import laQuintaLogo from 'figma:asset/f31b2dfb28307640a195a389e2838f1c2a7dc156.png';
import holidayInnLogo from 'figma:asset/6e7b3d1f8e168548d6b65e7dd7fb4691d792ff17.png';
import qualityInnLogo from 'figma:asset/1a36f52dfb717910963752bf97e84ab00d9f89e9.png';

interface BreakfastChairsPageProps {
  onNavigate: (page: string) => void;
}

export default function BreakfastChairsPage({ onNavigate }: BreakfastChairsPageProps) {
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

  // Breakfast Chairs Products Data
  const breakfastChairs = [
    {
      id: "bc-121",
      name: "BC-121",
      category: "Modern Dining Chair",
      description: "Contemporary breakfast chair with sleek design, perfect for hotel dining areas and breakfast rooms. Features durable construction and comfortable seating.",
      features: ["Modern Design", "Durable Frame", "Easy Maintenance", "Comfortable Padding"],
      image: "https://images.unsplash.com/photo-1749751234375-8bdc2697e4a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2Zhc3QlMjBjaGFpciUyMGRpbmluZyUyMG1vZGVybnxlbnwxfHx8fDE3NTc1OTcwMjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Modern", "Dining", "Commercial"]
    },
    {
      id: "bc-122",
      name: "BC-122",
      category: "Wooden Classic Chair",
      description: "Traditional wooden breakfast chair with timeless appeal. Crafted from premium wood with excellent durability for high-traffic hotel environments.",
      features: ["Premium Wood", "Classic Design", "High Durability", "Natural Finish"],
      image: "https://images.unsplash.com/photo-1721989516639-e051c83c2bd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaW5pbmclMjBjaGFpciUyMHdvb2RlbiUyMGhvdGVsfGVufDF8fHx8MTc1NzU5NzAyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Wooden", "Classic", "Premium"]
    },
    {
      id: "bc-123",
      name: "BC-123",
      category: "Upholstered Comfort Chair",
      description: "Luxurious upholstered breakfast chair offering superior comfort for extended dining experiences. Premium fabric with stain-resistant treatment.",
      features: ["Luxury Upholstery", "Superior Comfort", "Stain Resistant", "Premium Fabric"],
      image: "https://images.unsplash.com/photo-1720731307398-86de801fe49a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cGhvbHN0ZXJlZCUyMGRpbmluZyUyMGNoYWlyJTIwaG90ZWx8ZW58MXx8fHwxNTc1OTcwMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Upholstered", "Luxury", "Comfort"]
    },
    {
      id: "bc-124",
      name: "BC-124",
      category: "Stackable Dining Chair",
      description: "Space-efficient stackable breakfast chair designed for easy storage and flexible seating arrangements. Ideal for conference rooms and banquet areas.",
      features: ["Stackable Design", "Space Efficient", "Flexible Seating", "Easy Storage"],
      image: "https://images.unsplash.com/photo-1640938776314-4d303f8a1380?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFja2FibGUlMjBkaW5pbmclMjBjaGFpciUyMGNvbW1lcmNpYWx8ZW58MXx8fHwxNzU3NTk3MDMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Stackable", "Commercial", "Efficient"]
    },
    {
      id: "bc-125",
      name: "BC-125",
      category: "Metal Frame Chair",
      description: "Industrial-style breakfast chair with robust metal frame construction. Perfect for contemporary hotel designs with a modern aesthetic appeal.",
      features: ["Metal Frame", "Industrial Style", "Robust Construction", "Modern Aesthetic"],
      image: "https://images.unsplash.com/photo-1729446886782-12732a683a1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMGZyYW1lJTIwZGluaW5nJTIwY2hhaXJ8ZW58MXx8fHwxNzU3NTk3MDM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Metal Frame", "Industrial", "Contemporary"]
    },
    {
      id: "bc-126",
      name: "BC-126",
      category: "Executive Dining Chair",
      description: "Premium executive-style breakfast chair designed for upscale hotel dining rooms. Features elegant design with superior craftsmanship and materials.",
      features: ["Executive Style", "Premium Materials", "Elegant Design", "Superior Craftsmanship"],
      image: "https://images.unsplash.com/photo-1703565426315-4209c2e88eea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBkaW5pbmclMjBjaGFpciUyMGhvdGVsJTIwcmVzdGF1cmFudHxlbnwxfHx8fDE3NTc1OTcwMzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Executive", "Premium", "Elegant"]
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
            src="https://images.unsplash.com/photo-1708493449638-be3ffd051472?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaW5pbmclMjByb29tJTIwcmVzdGF1cmFudCUyMGludGVyaW9yfGVufDF8fHx8MTc1NzU5NzA0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Breakfast Chairs Collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h1 className="text-3xl lg:text-4xl mb-4 text-white">
                Breakfast Chairs Collection
              </h1>
              <p className="text-lg lg:text-xl mb-6 opacity-90 text-white">
                Premium breakfast chairs designed for hotel dining areas, combining comfort, durability, and style
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
          {/* Stats Grid - matching original design */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
            {/* Hotels Served */}
            <div className="text-center">
              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-2xl border border-white/20">
                <div className="text-3xl text-primary mb-1">150+</div>
                <div className="text-sm text-muted-foreground">Canadian Hotels</div>
              </div>
            </div>

            {/* Provinces Served */}
            <div className="text-center">
              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-2xl border border-white/20">
                <div className="text-3xl text-primary mb-1">10</div>
                <div className="text-sm text-muted-foreground">Provinces Served</div>
              </div>
            </div>

            {/* Eco-Friendly */}
            <div className="text-center">
              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-2xl border border-white/20">
                <div className="text-3xl text-primary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Eco-Friendly</div>
              </div>
            </div>

            {/* Avg Rating */}
            <div className="text-center">
              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-2xl border border-white/20">
                <div className="text-3xl text-primary mb-1">4.9★</div>
                <div className="text-sm text-muted-foreground">Avg. Rating</div>
              </div>
            </div>
          </div>

          {/* Brand Logos Section - Clean white background */}
          <div className="pt-8 border-t border-gray-200">
            <div className="text-center mb-8">
              <h3 className="text-3xl lg:text-4xl text-foreground mb-2">Trusted by Canada's Leading Hotel Brands</h3>
              <p className="text-muted-foreground">Premium brands choose Sara Global for their Canadian properties</p>
            </div>
            
            <div className="overflow-hidden py-4">
              <div className="flex animate-scroll-logos gap-16 items-center">
                {/* Duplicate the logos for seamless loop */}
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
            <h2 className="text-3xl lg:text-4xl mb-4">Our Breakfast Chairs</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our comprehensive range of breakfast chairs, each designed with unique features to meet your hospitality furniture needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {breakfastChairs.map((chair) => (
              <Card key={chair.id} className="group overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <div 
                    className="relative cursor-pointer group/image"
                    onClick={() => handleImageClick(chair.image, chair.name)}
                  >
                    <ImageWithFallback
                      src={chair.image}
                      alt={chair.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/20 transition-colors duration-200 flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover/image:opacity-100 transition-opacity duration-200" />
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-lg">{chair.name}</h3>
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
                  Transform Your Hotel with Premium Seating Solutions
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Discover our comprehensive range of soft seating options designed to elevate your guests' comfort and enhance your hotel's aesthetic appeal. From elegant lounge chairs to custom manufactured sofas, we have everything you need.
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
                  src="https://images.unsplash.com/photo-1713192707527-13b598f4adca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBzb2ZhJTIwaG90ZWwlMjBmdXJuaXR1cmV8ZW58MXx8fHwxNTc2NzE2Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Modern luxury sofa for hotel furniture"
                  className="w-full h-full object-cover"
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
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl leading-tight mb-6">
              Why Hotels Choose Sara Global Hospitality
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover what makes us the preferred partner for hospitality furniture solutions worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Box 1: Hospitality-grade furniture manufacturer */}
            <div className="group relative">
              <div className="bg-primary rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 min-h-[280px] flex flex-col">
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

            {/* Box 2: Bulk order capabilities with customizations */}
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
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                  <Package className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>

            {/* Box 3: Experience with international hotel chains */}
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
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                  <Globe className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>

            {/* Box 4: Strict quality checks and timely delivery */}
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
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                  <CheckCircle className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Breakfast Chairs Collection Info Section */}
      <section className="relative py-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Dynamic Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute top-10 right-1/4 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
          <div className="absolute bottom-10 left-1/4 w-48 h-48 bg-purple-400/10 rounded-full blur-2xl animate-pulse delay-1500"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-4xl mb-8 text-white bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Breakfast Chairs Collection: Where Comfort Meets Culinary Excellence
            </h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Transform your hotel's dining experience with our meticulously crafted breakfast chairs collection, designed specifically for the hospitality industry's demanding requirements. Each chair combines ergonomic excellence with aesthetic sophistication, ensuring your guests begin their day in absolute comfort and style.
              </p>
              <p>
                Our breakfast chairs feature premium-grade materials, including commercial-grade upholstery that withstands daily use while maintaining luxurious appeal. The carefully engineered seat heights and back support promote proper posture during extended breakfast service, allowing guests to truly savor their morning meals without discomfort.
              </p>
              <p>
                From intimate boutique hotels to grand resort dining rooms, our collection offers versatile designs that seamlessly integrate with any hospitality aesthetic. Whether you prefer modern minimalism, classic elegance, or contemporary sophistication, our breakfast chairs enhance your dining ambiance while delivering the durability and functionality essential for commercial hospitality environments.
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
              <h2 className="text-3xl lg:text-4xl mb-8">Why Choose Our Hotel Breakfast Chairs</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg mb-2">Built for high-traffic hospitality use</h3>
                    <p className="text-muted-foreground">Engineered specifically for commercial hotel environments, our chairs withstand continuous daily use while maintaining structural integrity and comfort standards.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg mb-2">Durable materials with easy maintenance</h3>
                    <p className="text-muted-foreground">Premium-grade materials combined with stain-resistant finishes ensure longevity while simplifying housekeeping operations and reducing maintenance costs.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg mb-2">Customizable designs for hotel branding</h3>
                    <p className="text-muted-foreground">Tailor our furniture to perfectly align with your hotel's unique brand identity through customizable finishes, fabrics, colors, and design elements.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg mb-2">Bulk supply with on-time delivery worldwide</h3>
                    <p className="text-muted-foreground">Scalable production capacity ensures large-volume orders are fulfilled efficiently with reliable global logistics and on-schedule delivery to any location.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - Chair Image */}
            <div className="flex-1 flex justify-center items-start">
              <div className="relative w-full max-w-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1690740548374-df4075dd79b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZGluaW5nJTIwY2hhaXIlMjBob3RlbCUyMGx1eHVyeXxlbnwxfHx8fDE3NTc1OTgwNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Premium Breakfast Chair"
                  className="w-full h-[590px] object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comfort & Ergonomics Section */}
      <section className="py-8 bg-gradient-to-r from-accent via-white to-accent/50 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-1/4 w-24 h-24 bg-secondary/20 rounded-full blur-lg"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl mb-3 text-foreground">
              Comfort & Ergonomics in Hotel Breakfast Chairs
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Where science meets hospitality to create the perfect dining experience
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {/* Ergonomic Support */}
            <div className="group text-center">
              <div className="relative inline-block mb-4">
                <div className="bg-white rounded-2xl p-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <User className="w-8 h-8 text-primary mx-auto" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-primary to-orange-500 rounded-full"></div>
              </div>
              <h3 className="mb-2 text-foreground">Ergonomic Support</h3>
              <p className="text-sm text-muted-foreground">Scientifically designed contours provide optimal support for extended dining comfort</p>
            </div>

            {/* Guest Satisfaction */}
            <div className="group text-center">
              <div className="relative inline-block mb-4">
                <div className="bg-white rounded-2xl p-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <Heart className="w-8 h-8 text-primary mx-auto" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-full"></div>
              </div>
              <h3 className="mb-2 text-foreground">Guest Satisfaction</h3>
              <p className="text-sm text-muted-foreground">Enhanced dining experience leads to improved guest satisfaction and positive reviews</p>
            </div>

            {/* Durability Testing */}
            <div className="group text-center">
              <div className="relative inline-block mb-4">
                <div className="bg-white rounded-2xl p-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <Clock className="w-8 h-8 text-primary mx-auto" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
              </div>
              <h3 className="mb-2 text-foreground">Long-lasting Design</h3>
              <p className="text-sm text-muted-foreground">Rigorous testing ensures chairs maintain comfort and appearance for years of service</p>
            </div>

            {/* Industry Standards */}
            <div className="group text-center">
              <div className="relative inline-block mb-4">
                <div className="bg-white rounded-2xl p-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <Award className="w-8 h-8 text-primary mx-auto" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
              </div>
              <h3 className="mb-2 text-foreground">Industry Standards</h3>
              <p className="text-sm text-muted-foreground">Meets and exceeds hospitality industry standards for commercial furniture quality</p>
            </div>
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