import { useState, useRef } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { ArrowRight, ZoomIn, X, Users, Palette, Shield, Zap, TrendingUp, Heart, Check, Factory, Globe, Award, Settings, Lightbulb, Cog, Truck, CheckCircle, Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";
import SoftSeatingStatsSection from "./SoftSeatingStatsSection";

interface SoftSeatingPageProps {
  onNavigate: (page: string) => void;
}

export default function SoftSeatingPage({ onNavigate }: SoftSeatingPageProps) {
  const [zoomedImage, setZoomedImage] = useState<{ src: string; alt: string } | null>(null);
  const [selectedGuidePoint, setSelectedGuidePoint] = useState<number>(1);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Soft Seating Products Data
  const products = [
    {
      id: "breakfast-chairs",
      name: "Breakfast Chairs",
      category: "breakfast-chairs",
      description: "Comfortable and stylish breakfast chairs designed for hotel dining areas, featuring durable construction and easy maintenance upholstery perfect for high-traffic environments.",
      features: ["Durable Construction", "Easy Maintenance", "Comfortable Seating", "Stackable Design"],
      image: "https://images.unsplash.com/photo-1650844269539-e7ddf8fcb44b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2Zhc3QlMjBjaGFpcnMlMjBkaW5pbmclMjBob3RlbHxlbnwxfHx8fDE3NTc1OTEwMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Dining", "Stackable", "Commercial"]
    },
    {
      id: "lounge-chairs",
      name: "Lounge Chairs",
      category: "lounge-chairs",
      description: "Elegant lounge chairs perfect for hotel lobbies and relaxation areas, combining luxury aesthetics with superior comfort and commercial-grade durability.",
      features: ["Luxury Design", "Superior Comfort", "Commercial Grade", "Multiple Fabrics"],
      image: "https://images.unsplash.com/photo-1688741663046-d4b95efb3bd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb3VuZ2UlMjBjaGFpcnMlMjBob3RlbCUyMGxvYmJ5fGVufDF8fHx8MTc1NzU5MTAyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Luxury", "Lobby", "Comfort"]
    },
    {
      id: "ergonomic-chairs",
      name: "Ergonomic Chairs",
      category: "ergonomic-chairs",
      description: "Professional ergonomic chairs designed for hotel business centers and workspaces, featuring adjustable components and superior support for extended use.",
      features: ["Adjustable Components", "Superior Support", "Professional Grade", "Health Focused"],
      image: "https://images.unsplash.com/photo-1659277318898-9562d00c3b49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlcmdvbm9taWMlMjBjaGFpcnMlMjBvZmZpY2UlMjBob3RlbHxlbnwxfHx8fDE3NTc1OTEwMzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Ergonomic", "Professional", "Adjustable"]
    },
    {
      id: "sofa-manufacturers",
      name: "Sofa Manufacturers",
      category: "sofa-manufacturers",
      description: "Custom manufactured sofas and sectionals for hotels, offering bespoke designs, premium materials, and expert craftsmanship to match your unique hospitality vision.",
      features: ["Custom Manufacturing", "Premium Materials", "Expert Craftsmanship", "Bespoke Designs"],
      image: "https://images.unsplash.com/photo-1687180498602-5a1046defaa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2ZhJTIwbWFudWZhY3R1cmVycyUyMGhvdGVsJTIwbHV4dXJ5fGVufDF8fHx8MTc1NzU5MTAzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Custom", "Manufacturing", "Luxury"]
    }
  ];

  // Buying Guide Content Data
  const buyingGuideContent = {
    1: {
      title: "How to Choose the Right Hotel Soft Seating Design",
      subtitle: "Design Selection Excellence",
      content: [
        "Consider your hotel's brand identity and target guest demographics to select seating that aligns with your overall aesthetic vision and guest expectations.",
        "Evaluate space constraints and traffic patterns to ensure optimal furniture placement that enhances guest flow and comfort throughout your property.",
        "Choose versatile designs that can adapt to different spaces - from intimate conversation areas to large gatherings - maximizing your investment's functionality."
      ]
    },
    2: {
      title: "Bulk Order vs. Custom Manufacturing",
      subtitle: "Procurement Strategy Guide",
      content: [
        "Bulk orders offer cost-effectiveness and faster delivery times, making them ideal for large-scale projects with standardized design requirements across multiple spaces.",
        "Custom manufacturing provides unique designs tailored to your specific brand requirements, allowing for specialized dimensions, fabrics, and finishes that perfectly match your vision.",
        "Consider hybrid approaches where standard pieces are customized with your preferred fabrics and finishes, balancing cost efficiency with brand personalization."
      ]
    },
    3: {
      title: "Key Considerations: Durability, Cleaning, Guest Experience & Budget",
      subtitle: "Comprehensive Evaluation Framework",
      content: [
        "Durability assessment should focus on commercial-grade materials, reinforced frames, and high-traffic upholstery that can withstand 24/7 hospitality use while maintaining appearance.",
        "Cleaning requirements must align with your housekeeping operations - consider stain-resistant fabrics, antimicrobial treatments, and easy-maintenance designs that support operational efficiency.",
        "Balance budget constraints with long-term value by evaluating total cost of ownership, including maintenance, replacement frequency, and impact on guest satisfaction scores."
      ]
    }
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
            src="https://images.unsplash.com/photo-1629646526507-84ea50bb16e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmUlMjBzaG93cm9vbSUyMG1vZGVybnxlbnwxfHx8fDE3NTc1MzM0NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Soft Seating Collection Showroom"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h1 className="text-3xl lg:text-4xl font-medium mb-6 leading-tight text-white">
                Soft Seating Collection
              </h1>
              <p className="text-lg lg:text-xl mb-6 opacity-90 text-white">
                Premium seating solutions designed for comfort, style, and hospitality excellence
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

      {/* Stats and Trusted Brands Section */}
      <SoftSeatingStatsSection />

      {/* Products Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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
                          if (product.id === 'breakfast-chairs') {
                            onNavigate('breakfast-chairs');
                          }
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
                <h2 className="text-3xl lg:text-4xl font-medium mb-6 leading-tight">
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

      {/* Why Hotel Soft Seating Matter Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-medium mb-6 leading-tight">
              Why Hotel Soft Seating Matter
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the key factors that make quality soft seating essential for modern hospitality success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Guest Experience & First Impressions */}
            <div className="bg-white rounded-2xl p-6 text-black shadow-lg border">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary rounded-xl p-3">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1">100%</div>
                  <div className="text-sm text-gray-600 font-semibold">Guest Experience &<br/>First Impressions</div>
                </div>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                Quality soft seating creates memorable first impressions and enhances overall guest satisfaction throughout their stay at your hotel.
              </p>
            </div>

            {/* Brand Identity & Design Consistency */}
            <div className="bg-white rounded-2xl p-6 text-black shadow-lg border">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary rounded-xl p-3">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1">95%</div>
                  <div className="text-sm text-gray-600 font-semibold">Brand Identity &<br/>Design Consistency</div>
                </div>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                Cohesive furniture design reinforces your hotel brand identity and creates a unified aesthetic experience across all guest areas.
              </p>
            </div>

            {/* Durability & Maintenance */}
            <div className="bg-white rounded-2xl p-6 text-black shadow-lg border">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary rounded-xl p-3">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1">10+</div>
                  <div className="text-sm text-gray-600 font-semibold">Years Durability &<br/>Maintenance</div>
                </div>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                Commercial-grade soft seating withstands heavy daily use while requiring minimal maintenance, protecting your long-term investment.
              </p>
            </div>

            {/* Operational Efficiency */}
            <div className="bg-white rounded-2xl p-6 text-black shadow-lg border">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary rounded-xl p-3">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1">50%</div>
                  <div className="text-sm text-gray-600 font-semibold">Improved Operational<br/>Efficiency</div>
                </div>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                Smart seating solutions streamline housekeeping processes and space management, reducing operational costs and improving staff productivity.
              </p>
            </div>

            {/* Return on Investment (ROI) */}
            <div className="bg-white rounded-2xl p-6 text-black shadow-lg border">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary rounded-xl p-3">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1">300%</div>
                  <div className="text-sm text-gray-600 font-semibold">Return on Investment<br/>(ROI)</div>
                </div>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                Premium soft seating increases guest satisfaction scores, repeat bookings, and positive reviews, delivering significant returns on your furniture investment.
              </p>
            </div>

            {/* Blends Style & Comfort Form */}
            <div className="bg-white rounded-2xl p-6 text-black shadow-lg border">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary rounded-xl p-3">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1">Perfect</div>
                  <div className="text-sm text-gray-600 font-semibold">Blends Style &<br/>Comfort Form</div>
                </div>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                Modern soft seating perfectly balances aesthetic appeal with ergonomic comfort, creating inviting spaces that guests love to use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hospitality Soft Seating Buying Guide Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-medium mb-6 leading-tight">
              Hospitality Soft Seating Buying Guide for Hotel Owners
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - 3 Interactive Points */}
              <div className="space-y-6">
                {/* Point 1: How to choose the right hotel Soft Seating design */}
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
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">How to choose the right hotel Soft Seating design</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Strategic design selection that aligns with your brand identity and guest expectations for optimal hospitality experience.
                    </p>
                  </div>
                </div>

                {/* Point 2: Bulk order vs. custom manufacturing */}
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
                      Understanding procurement strategies to balance cost-effectiveness with customization for your unique requirements.
                    </p>
                  </div>
                </div>

                {/* Point 3: Key considerations */}
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
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">Key considerations: durability, cleaning, guest experience, budget</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Comprehensive evaluation framework covering all critical factors for successful furniture investment decisions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Dynamic Content Based on Selection */}
              <div className="bg-white rounded-2xl p-8 shadow-lg sticky top-6">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">{buyingGuideContent[selectedGuidePoint].title}</h3>
                <p className="text-lg text-primary font-medium mb-6">{buyingGuideContent[selectedGuidePoint].subtitle}</p>
                
                <div className="space-y-6">
                  {buyingGuideContent[selectedGuidePoint].content.map((paragraph, index) => (
                    <p key={index} className="text-gray-600 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <Button 
                    onClick={() => onNavigate('contact')}
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-medium w-full sm:w-auto"
                  >
                    Get Expert Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Sara Hospitality Section */}
      <section className="pt-16 pb-[116px] bg-gray-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221.5%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-medium mb-6 leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Why Choose Sara Hospitality as Your Supplier
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Experience excellence in hospitality furniture manufacturing with our comprehensive solutions and global expertise
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:h-[591px]">
            {/* Left Column - Feature Cards */}
            <div className="flex flex-col justify-between space-y-6">
              {/* In-house Manufacturing */}
              <div className="group bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="bg-primary rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                    <Factory className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl mb-2">In-house Manufacturing Capabilities</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Hospitality Vanity Manufacturers with complete control over quality, timelines, and customization processes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Global Supply Experience */}
              <div className="group bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="bg-primary rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl mb-2">Global Supply Experience</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Trusted Hospitality Vanity Suppliers serving clients across multiple continents with proven track record.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quality Assurance */}
              <div className="group bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="bg-primary rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl mb-2">Quality Assurance & Compliance</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Rigorous quality control processes and international compliance standards ensure premium results every time.
                    </p>
                  </div>
                </div>
              </div>

              {/* Customization & Bulk Orders */}
              <div className="group bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="bg-primary rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl mb-2">Customization & Bulk Order Benefits</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Flexible customization options with competitive bulk pricing to meet your specific hospitality requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Image and Stats */}
            <div className="flex flex-col space-y-6 h-full">
              {/* Soft Seating Furniture Image */}
              <div className="relative rounded-2xl overflow-hidden flex-1">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1675273440569-1350adecb26c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHNvZnQlMjBzZWF0aW5nJTIwZnVybml0dXJlfGVufDF8fHx8MTc1NzY4MDA5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Luxury Hotel Soft Seating Furniture"
                  className="w-full h-[405px] object-cover"
                />
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white backdrop-blur-lg border border-white rounded-xl p-4 text-center">
                  <div className="text-3xl mb-2 text-black">500+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="bg-white backdrop-blur-lg border border-white rounded-xl p-4 text-center">
                  <div className="text-3xl mb-2 text-black">50+</div>
                  <div className="text-sm text-gray-600">Countries Served</div>
                </div>
                <div className="bg-white backdrop-blur-lg border border-white rounded-xl p-4 text-center">
                  <div className="text-3xl mb-2 text-black">98%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
                <div className="bg-white backdrop-blur-lg border border-white rounded-xl p-4 text-center">
                  <div className="text-3xl mb-2 text-black">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* From Design to Delivery Section */}
      <section className="py-12 bg-gradient-to-br from-background via-accent/20 to-background relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Centered Heading */}
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-medium mb-6 leading-tight">
              From Design to Delivery <span className="text-primary">Excellence at Every Step</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image (Clean) */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1674065719169-5ba77e617e60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmUlMjB3b3Jrc2hvcCUyMGNyYWZ0c21hbiUyMGRlc2lnbnxlbnwxfHx8fDE3NTc2ODA5MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Furniture Workshop Craftsman Design"
                  className="w-full h-[500px] object-cover rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Right Column - Reduced Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Discover how we transform your vision into premium hospitality furniture through our meticulous 
                four-stage process, ensuring quality, precision, and timely delivery.
              </p>

              {/* Process Steps - Simplified */}
              <div className="space-y-4">
                {/* Step 1 */}
                <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-accent/30 transition-all duration-300">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg mb-1">Design Consultation</h3>
                    <p className="text-muted-foreground text-sm">Collaborative design sessions to understand your vision.</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-accent/30 transition-all duration-300">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
                    <Factory className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg mb-1">Precision Manufacturing</h3>
                    <p className="text-muted-foreground text-sm">State-of-the-art manufacturing with quality materials.</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-accent/30 transition-all duration-300">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg mb-1">Quality Assurance</h3>
                    <p className="text-muted-foreground text-sm">Rigorous quality checks and testing standards.</p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-accent/30 transition-all duration-300">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
                    <Truck className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg mb-1">Global Delivery</h3>
                    <p className="text-muted-foreground text-sm">Secure packaging and timely delivery worldwide.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Canadian Hoteliers Say About Us Section */}
      <section className="py-12 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          {/* Canadian Header - Consistent with other sections */}
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-medium mb-6 leading-tight">
              What Canadian Hoteliers
              <span className="text-primary block">Say About Us</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From coast to coast, Canadian hospitality leaders trust Sara Global for sustainable furniture solutions.
            </p>
          </div>

          {/* Enhanced Testimonials Carousel with Controls */}
          <div className="mb-12">
            <div className="relative">
              {/* Navigation Controls */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-slate-800">Client Testimonials</h3>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => {
                      if (scrollContainerRef.current) {
                        scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
                      }
                    }}
                    className="rounded-full border-primary/30 hover:bg-primary hover:text-white transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => {
                      if (scrollContainerRef.current) {
                        scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
                      }
                    }}
                    className="rounded-full border-primary/30 hover:bg-primary hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Testimonials Scroll Container */}
              <div 
                ref={scrollContainerRef}
                className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
                style={{ scrollSnapType: 'x mandatory' }}
              >
                {/* Testimonial 1 */}
                <Card className="flex-shrink-0 w-80 border-0 shadow-lg overflow-hidden bg-white hover:shadow-xl transition-all duration-300" style={{ scrollSnapAlign: 'start' }}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Quote className="w-6 h-6 text-primary" />
                      </div>
                      <div className="bg-primary/10 px-2 py-1 rounded-full">
                        <span className="text-xs font-medium text-primary">🍁 Heritage Craftsmanship</span>
                      </div>
                    </div>

                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>

                    <p className="text-slate-700 mb-4 leading-relaxed text-sm">
                      "Sara Global's sustainable furniture perfectly embodies our commitment to environmental stewardship. The Canadian maple pieces are not only beautiful but tell the story of our heritage. Our guests are constantly impressed by the craftsmanship."
                    </p>

                    <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                      <div className="w-12 h-12 bg-primary text-primary-foreground text-sm rounded-full flex items-center justify-center">
                        MD
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-sm text-slate-800">Marie Dubois</h4>
                        <p className="text-xs text-muted-foreground">General Manager</p>
                        <p className="text-xs text-primary font-semibold">Fairmont Château Frontenac</p>
                        <p className="text-xs text-muted-foreground">📍 Quebec City, QC</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Testimonial 2 */}
                <Card className="flex-shrink-0 w-80 border-0 shadow-lg overflow-hidden bg-white hover:shadow-xl transition-all duration-300" style={{ scrollSnapAlign: 'start' }}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Quote className="w-6 h-6 text-primary" />
                      </div>
                      <div className="bg-primary/10 px-2 py-1 rounded-full">
                        <span className="text-xs font-medium text-primary">❄️ Climate Resilient</span>
                      </div>
                    </div>

                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>

                    <p className="text-slate-700 mb-4 leading-relaxed text-sm">
                      "The winter-ready furniture from Sara Global has exceeded all expectations. After three harsh mountain winters, everything still looks pristine. Their understanding of Canadian climate challenges is unparalleled."
                    </p>

                    <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                      <div className="w-12 h-12 bg-primary text-primary-foreground text-sm rounded-full flex items-center justify-center">
                        JM
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-sm text-slate-800">James MacLeod</h4>
                        <p className="text-xs text-muted-foreground">Operations Director</p>
                        <p className="text-xs text-primary font-semibold">Whistler Mountain Resort</p>
                        <p className="text-xs text-muted-foreground">📍 Whistler, BC</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Testimonial 3 */}
                <Card className="flex-shrink-0 w-80 border-0 shadow-lg overflow-hidden bg-white hover:shadow-xl transition-all duration-300" style={{ scrollSnapAlign: 'start' }}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Quote className="w-6 h-6 text-primary" />
                      </div>
                      <div className="bg-primary/10 px-2 py-1 rounded-full">
                        <span className="text-xs font-medium text-primary">♻️ Zero Waste Achievement</span>
                      </div>
                    </div>

                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>

                    <p className="text-slate-700 mb-4 leading-relaxed text-sm">
                      "Working with Sara Global aligned perfectly with our zero-waste goals. Their circular economy approach and use of 100% FSC-certified Canadian wood helped us achieve our sustainability targets ahead of schedule."
                    </p>

                    <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                      <div className="w-12 h-12 bg-primary text-primary-foreground text-sm rounded-full flex items-center justify-center">
                        ST
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-sm text-slate-800">Sarah Thompson</h4>
                        <p className="text-xs text-muted-foreground">Sustainability Officer</p>
                        <p className="text-xs text-primary font-semibold">Hotel Arts Calgary</p>
                        <p className="text-xs text-muted-foreground">📍 Calgary, AB</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Testimonial 4 */}
                <Card className="flex-shrink-0 w-80 border-0 shadow-lg overflow-hidden bg-white hover:shadow-xl transition-all duration-300" style={{ scrollSnapAlign: 'start' }}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Quote className="w-6 h-6 text-primary" />
                      </div>
                      <div className="bg-primary/10 px-2 py-1 rounded-full">
                        <span className="text-xs font-medium text-primary">🇨🇦 Authentic Canadian Experience</span>
                      </div>
                    </div>

                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>

                    <p className="text-slate-700 mb-4 leading-relaxed text-sm">
                      "The local sourcing and Canadian craftsmanship story resonates deeply with our guests. Sara Global didn't just furnish our space; they helped us create an authentic Canadian hospitality experience."
                    </p>

                    <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                      <div className="w-12 h-12 bg-primary text-primary-foreground text-sm rounded-full flex items-center justify-center">
                        RC
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-sm text-slate-800">Robert Chen</h4>
                        <p className="text-xs text-muted-foreground">Property Owner</p>
                        <p className="text-xs text-primary font-semibold">Boutique Inn Toronto</p>
                        <p className="text-xs text-muted-foreground">📍 Toronto, ON</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-medium mb-6 leading-tight">Ready to Enhance Your Hotel's Seating?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get a custom quote for your soft seating needs
          </p>
          <div className="flex justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Get Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-medium mb-6 leading-tight">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about our soft seating solutions
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium">What makes hotel soft seating different from regular furniture?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Hotel soft seating is specifically designed for high-traffic commercial use with enhanced durability, stain-resistant fabrics, reinforced frames, and easy maintenance features. Our pieces undergo rigorous testing to meet hospitality industry standards.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium">How long does delivery typically take?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Standard soft seating collections ship within 4-6 weeks. Custom pieces may take 8-12 weeks depending on specifications. We provide detailed timelines during the quotation process and offer rush delivery options when needed.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium">Do you offer fabric customization options?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Yes! We offer over 200 fabric options including performance fabrics, leather, and eco-friendly materials. Our design team can help you select the perfect fabric that matches your hotel's aesthetic and durability requirements.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium">What warranty do you provide on soft seating?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  We provide a comprehensive 5-year structural warranty and 3-year fabric warranty. This includes free repairs or replacements for manufacturing defects and normal commercial wear under proper care and maintenance.
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