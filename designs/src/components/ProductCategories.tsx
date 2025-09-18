import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, Bed, Coffee, Users, Bath, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface ProductCategoriesProps {
  selectedCountry?: string;
  onNavigate?: (page: string) => void;
}

export default function ProductCategories({ selectedCountry, onNavigate }: ProductCategoriesProps) {
  const isCanada = selectedCountry === "canada-toronto";
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerPage = 3;
  
  const categories = [
    {
      icon: Bed,
      title: "Bedroom Furniture",
      description: "Luxury beds, nightstands, wardrobes, and seating for guest rooms",
      image: "https://images.unsplash.com/photo-1590490359854-dfba19688d70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb20lMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzU2OTk4MzIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Custom headboards", "Storage solutions", "Premium materials", "Ergonomic design"]
    },
    {
      icon: Coffee,
      title: "Lobby & Lounge",
      description: "Sophisticated seating, tables, and reception furniture for common areas",
      image: "https://images.unsplash.com/photo-1755644046048-989506b73a5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3RlbCUyMGxvYmJ5JTIwZnVybml0dXJlfGVufDF8fHx8MTc1NzAwMjkwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Modular seating", "Reception desks", "Coffee tables", "Accent pieces"]
    },
    {
      icon: Users,
      title: "Dining & Restaurant",
      description: "Durable and elegant dining tables, chairs, and bar furniture",
      image: "https://images.unsplash.com/photo-1720139290958-d8676702c3ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJlc3RhdXJhbnQlMjBkaW5pbmclMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzU3MDAyOTA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Commercial grade", "Various seating options", "Bar furniture", "Buffet stations"]
    },
    {
      icon: Bath,
      title: "Bathroom Vanities",
      description: "Custom vanities, mirrors, and storage solutions for hotel bathrooms",
      image: "https://images.unsplash.com/photo-1658595148900-c77873724e98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGJhdGhyb29tJTIwdmFuaXR5JTIwZnVybml0dXJlfGVufDF8fHx8MTc1NzAwMjk2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Water-resistant", "Custom sizing", "Integrated storage", "LED lighting"]
    },
    {
      icon: Coffee,
      title: "Outdoor Furniture",
      description: "Weather-resistant patio and poolside furniture collections",
      image: "https://images.unsplash.com/photo-1661024768242-5fd7c8f1e3c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMG91dGRvb3IlMjBwYXRpbyUyMGZ1cm5pdHVyZXxlbnwxfHx8fDE3NTcwMDI5Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["All-weather materials", "UV resistant", "Pool furniture", "Garden seating"]
    },
    {
      icon: Users,
      title: "Conference & Business",
      description: "Professional furniture for meeting rooms and business centers",
      image: "https://images.unsplash.com/photo-1595695162612-1d7fc11e46ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGNvbmZlcmVuY2UlMjByb29tJTIwZnVybml0dXJlfGVufDF8fHx8MTc1NzAwMjk3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Conference tables", "Executive seating", "Storage cabinets", "Tech integration"]
    }
  ];

  const totalSlides = Math.ceil(categories.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentItems = () => {
    const startIndex = currentSlide * itemsPerPage;
    return categories.slice(startIndex, startIndex + itemsPerPage);
  };

  if (isCanada) {
    const canadianCategories = [
      {
        icon: Bed,
        title: "Sustainable Bedroom Collection",
        description: "Eco-friendly beds and wardrobes crafted from Canadian hardwoods",
        image: "https://images.unsplash.com/photo-1661777997156-ccac1c9876e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY28lMjBmcmllbmRseSUyMGhvdGVsJTIwcm9vbXxlbnwxfHx8fDE3NTc1MDE4Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        features: ["FSC Certified Wood", "Non-toxic Finishes", "Climate Resistant", "100% Recyclable"],
        sustainability: "🍁 100% Canadian Maple"
      },
      {
        icon: Coffee,
        title: "Heritage Lodge Collection",
        description: "Rustic-modern lobby furniture inspired by Canadian wilderness",
        image: "https://images.unsplash.com/photo-1728734530275-357fa345d696?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5hZGlhbiUyMG1vdW50YWluJTIwbG9kZ2UlMjBkaW5pbmd8ZW58MXx8fHwxNzU3NTAxODMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        features: ["Reclaimed Wood", "Artisan Craftsmanship", "Weather Resistant", "Local Sourcing"],
        sustainability: "♻️ 90% Recycled Materials"
      },
      {
        icon: Users,
        title: "Arctic Dining Series",
        description: "Durable dining furniture built for Canada's hospitality demands",
        image: "https://images.unsplash.com/photo-1664423556803-e986b9124f15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMHdvb2QlMjBmdXJuaXR1cmUlMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NTc1MDE4MjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        features: ["Temperature Stable", "Commercial Grade", "Easy Maintenance", "Ergonomic Design"],
        sustainability: "🌲 Sustainably Harvested"
      },
      {
        icon: Bath,
        title: "Northern Spa Collection",
        description: "Wellness-focused bathroom and spa furniture for Canadian resorts",
        image: "https://images.unsplash.com/photo-1658595148900-c77873724e98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGJhdGhyb29tJTIwdmFuaXR5JTIwZnVybml0dXJlfGVufDF8fHx8MTc1NzAwMjk2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        features: ["Moisture Resistant", "Natural Materials", "Relaxation Focus", "Custom Sizing"],
        sustainability: "🌿 Zero VOC Finishes"
      },
      {
        icon: Coffee,
        title: "All-Season Outdoor",
        description: "Weather-resistant outdoor furniture for Canadian climate extremes",
        image: "https://images.unsplash.com/photo-1661024768242-5fd7c8f1e3c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMG91dGRvb3IlMjBwYXRpbyUyMGZ1cm5pdHVyZXxlbnwxfHx8fDE3NTcwMDI5Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        features: ["Winter-Proof", "UV Protection", "Snow Load Tested", "Quick Drainage"],
        sustainability: "❄️ Arctic-Grade Materials"
      },
      {
        icon: Users,
        title: "Business Suites",
        description: "Executive furniture for Canadian business and conference centers",
        image: "https://images.unsplash.com/photo-1595695162612-1d7fc11e46ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGNvbmZlcmVuY2UlMjByb29tJTIwZnVybml0dXJlfGVufDF8fHx8MTc1NzAwMjk3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        features: ["Tech Integration", "Power Solutions", "Flexible Layouts", "Sound Dampening"],
        sustainability: "⚡ Energy Efficient"
      }
    ];

    return (
      <section id="products" className="pt-4 pb-8 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          {/* Enhanced Canadian Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <ArrowRight className="w-4 h-4" />
              <span>Canadian Furniture Collections</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-2">
              Sustainable Solutions
              <span className="text-primary block">Crafted in Canada</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our Canadian collections honor the natural beauty of our homeland while meeting 
              the demanding standards of modern hospitality. Every piece tells a story of 
              environmental responsibility and heritage craftsmanship.
            </p>
          </div>

          {/* Canadian Categories Grid with Carousel Controls */}
          <div className="relative mb-6">
            {/* Navigation Controls */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-slate-800">Explore Our Collections</h3>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => {
                    const container = document.getElementById('canadian-carousel');
                    if (container) container.scrollBy({ left: -400, behavior: 'smooth' });
                  }}
                  className="rounded-full border-primary/30 hover:bg-primary hover:text-white transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => {
                    const container = document.getElementById('canadian-carousel');
                    if (container) container.scrollBy({ left: 400, behavior: 'smooth' });
                  }}
                  className="rounded-full border-primary/30 hover:bg-primary hover:text-white transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div id="canadian-carousel" className="flex gap-6 overflow-x-auto scrollbar-hide pb-4" style={{ scrollSnapType: 'x mandatory' }}>
              {canadianCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden bg-white border-0 shadow-lg flex-shrink-0 w-96" style={{ scrollSnapAlign: 'start' }}>
                  <div className="relative overflow-hidden">
                    <ImageWithFallback
                      src={category.image}
                      alt={category.title}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    
                    {/* Floating Icon */}
                    <div className="absolute top-6 left-6 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    
                    {/* Sustainability Badge */}
                    <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full">
                      <span className="text-sm font-medium text-primary">{category.sustainability}</span>
                    </div>
                    
                    {/* Title Overlay */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-white text-2xl font-bold mb-2">{category.title}</h3>
                      <p className="text-white/80 text-sm">{category.description}</p>
                    </div>
                  </div>
                  
                  <CardContent className="p-8">
                    {/* Features */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg mb-4">Key Features</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {category.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
                      Explore Collection
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
            </div>
          </div>

          {/* Canadian Commitment Section with Background Image */}
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background Image with Dark Overlay */}
            <div className="absolute inset-0">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1717500252709-05a73fc4f1da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGZ1cm5pdHVyZSUyMG1hbnVmYWN0dXJpbmclMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NTc1ODU0MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Canadian furniture manufacturing workshop"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/85 to-slate-900/90"></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 p-12 text-white">
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-4">Our Canadian Commitment</h3>
                <p className="text-slate-300 text-lg max-w-3xl mx-auto">
                  Every piece in our Canadian collections represents our unwavering commitment to 
                  environmental stewardship and local craftsmanship. We take pride in supporting Canadian 
                  communities while delivering exceptional hospitality furniture solutions.
                </p>
              </div>
              
              <div className="text-center mt-12">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white px-12 py-4 h-auto shadow-lg shadow-primary/25"
                >
                  Request A Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="products" className="pt-4 pb-8 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <ArrowRight className="w-4 h-4" />
            <span>Product Categories</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-2">
            Complete Furniture Solutions
            <span className="text-primary block">For Every Space</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
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
                size="icon"
                onClick={prevSlide}
                className="rounded-full border-2 hover:bg-primary hover:text-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="rounded-full border-2 hover:bg-primary hover:text-white transition-colors"
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
                    index === currentSlide ? 'bg-primary' : 'bg-gray-300'
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
                                <ImageWithFallback
                                  src={category.image}
                                  alt={category.title}
                                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg">
                                  <IconComponent className="w-6 h-6 text-primary" />
                                </div>
                                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  <div className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                                    Explore
                                  </div>
                                </div>
                              </div>
                              
                              <div className="p-6">
                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{category.title}</h3>
                                <p className="text-muted-foreground mb-4 line-clamp-2">{category.description}</p>
                                
                                <div className="grid grid-cols-2 gap-2 mb-6">
                                  {category.features.slice(0, 4).map((feature, featureIndex) => (
                                    <div key={featureIndex} className="flex items-center gap-2 text-sm">
                                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                                      <span className="truncate">{feature}</span>
                                    </div>
                                  ))}
                                </div>
                                
                                <Button variant="ghost" className="group/btn w-full justify-center p-0 h-auto hover:bg-primary/5 py-2 rounded-lg">
                                  <span className="text-primary group-hover/btn:text-primary/80">View Collection</span>
                                  <ArrowRight className="w-4 h-4 ml-2 text-primary group-hover/btn:translate-x-1 transition-transform" />
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
        <div className="relative bg-gradient-to-br from-primary/5 via-white to-accent/30 rounded-2xl p-1">
          <div className="bg-white rounded-2xl p-8 lg:p-12 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/50 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <ArrowRight className="w-4 h-4" />
                <span>Custom Solutions</span>
              </div>
              
              <h3 className="text-2xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Transform Your Vision Into Reality
              </h3>
              
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
                Our award-winning design team specializes in creating bespoke furniture solutions 
                that perfectly align with your hotel's brand identity and guest experience goals.
              </p>
              
              {/* Features grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="flex flex-col items-center p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                    <Bed className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-bold mb-2">3D Design</h4>
                  <p className="text-sm text-muted-foreground">Visualize before you invest</p>
                </div>
                <div className="flex flex-col items-center p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-bold mb-2">Expert Team</h4>
                  <p className="text-sm text-muted-foreground">15+ years of experience</p>
                </div>
                <div className="flex flex-col items-center p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                    <Coffee className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-bold mb-2">Premium Quality</h4>
                  <p className="text-sm text-muted-foreground">Luxury materials & finishes</p>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 group px-8"
                >
                  <Bath className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                  Start Custom Project
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 hover:bg-primary/5 hover:border-primary transition-all duration-300"
                >
                  View Portfolio
                </Button>
              </div>
              
              {/* Trust indicator */}
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  ✨ <span className="font-semibold">500+ successful projects</span> • <span className="font-semibold">98% client satisfaction</span> • <span className="font-semibold">Award-winning designs</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}