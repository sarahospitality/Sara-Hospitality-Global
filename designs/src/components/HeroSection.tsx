import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, CheckCircle, MapPin, Leaf, Snowflake, Award } from "lucide-react";

interface HeroSectionProps {
  selectedCountry?: string;
  onNavigate?: (page: string) => void;
}
export default function HeroSection({ selectedCountry, onNavigate }: HeroSectionProps) {
  // Canadian-specific content
  const isCanada = selectedCountry === "canada-toronto";
  
  if (isCanada) {
    return (
      <section id="home" className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          {/* Mobile Layout - Content First, Image Second */}
          <div className="lg:hidden space-y-8">
            {/* Content for Mobile */}
            <div className="space-y-8 text-white flex flex-col justify-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 bg-primary/20 backdrop-blur-sm text-primary px-6 py-3 rounded-full border border-primary/30">
                  <Leaf className="w-5 h-5" />
                  <span className="font-medium">Canadian Hotel Furniture Excellence</span>
                </div>
                
                <h1 className="text-4xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Sustainable Hotel
                  </span>
                  <span className="text-primary block mt-2">Furniture</span>
                </h1>
                
                <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                  Experience premium Canadian hospitality furniture design with eco-friendly materials.
                </p>
              </div>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 h-auto shadow-lg shadow-primary/25"
                  onClick={() => onNavigate?.("portfolio")}
                >
                  View Portfolio
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  className="border-2 border-white bg-white/10 text-white hover:bg-white/20 hover:text-white px-8 py-4 h-auto backdrop-blur-sm font-semibold shadow-lg"
                  onClick={() => onNavigate?.("contact")}
                >
                  Request Quote
                </Button>
              </div>
            </div>

            {/* Image for Mobile */}
            <div className="relative">
              <div className="relative z-10">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1725623831897-fb009acfe742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5hZGlhbiUyMGhvdGVsJTIwbHV4dXJ5JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU3NTAwODI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Canadian luxury hotel interior"
                    className="w-full h-[450px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout - Hidden on mobile */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-6 lg:gap-16 items-center">
            {/* Content */}
            <div className="space-y-8 text-white flex flex-col justify-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 bg-primary/20 backdrop-blur-sm text-primary px-6 py-3 rounded-full border border-primary/30">
                  <Leaf className="w-5 h-5" />
                  <span className="font-medium">Canadian Hotel Furniture Excellence</span>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Sustainable Hotel
                  </span>
                  <span className="text-primary block mt-2">Furniture</span>
                </h1>
                
                <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                  Experience premium Canadian hospitality furniture design with eco-friendly materials.
                </p>
              </div>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 h-auto shadow-lg shadow-primary/25"
                  onClick={() => onNavigate?.("portfolio")}
                >
                  View Portfolio
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  className="border-2 border-white bg-white/10 text-white hover:bg-white/20 hover:text-white px-8 py-4 h-auto backdrop-blur-sm font-semibold shadow-lg"
                  onClick={() => onNavigate?.("contact")}
                >
                  Request Quote
                </Button>
              </div>
            </div>

            {/* Hero Image with Modern Design */}
            <div className="relative">
              <div className="relative z-10">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1725623831897-fb009acfe742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5hZGlhbiUyMGhvdGVsJTIwbHV4dXJ5JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU3NTAwODI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Canadian luxury hotel interior"
                    className="w-full h-[450px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 py-4 lg:py-12">
        {/* Mobile Layout - Clean Design with Content First */}
        <div className="lg:hidden space-y-12">
          {/* Content Section - First */}
          <div className="space-y-8">
            {/* Badge - At the top */}
            <div className="flex justify-center pt-8">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
                {isCanada ? <Leaf className="w-4 h-4" /> : <CheckCircle className="w-4 h-4" />}
                <span className="text-sm font-medium">
                  {isCanada ? "Canadian Hotel Furniture Excellence" : "Premium Hospitality Furniture Manufacturer"}
                </span>
              </div>
            </div>
            
            {/* Main Heading */}
            <div className="text-center space-y-3">
              <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
                {isCanada ? (
                  <>
                    Sustainable Canadian
                    <span className="text-primary block">Hotel Furniture</span>
                    Craftsmanship
                  </>
                ) : (
                  <>
                    Leading Hospitality Furniture
                    <span className="text-primary block">Hotel Furniture</span>
                    Since 1995
                  </>
                )}
              </h1>
              
              {/* Description */}
              <p className="text-base text-muted-foreground leading-relaxed max-w-md mx-auto px-4">
                {isCanada ? (
                  "Experience the finest in Canadian hospitality furniture design. Our eco-friendly, " +
                  "winter-ready solutions combine traditional Canadian craftsmanship with modern luxury."
                ) : (
                  "Transform your hospitality spaces with our premium furniture solutions. " +
                  "We manufacture and supply world-class hotel furniture that combines " +
                  "luxury, durability, and timeless design."
                )}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 px-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white shadow-lg w-full"
                onClick={() => onNavigate?.("portfolio")}
              >
                {isCanada ? "Explore Canadian Projects" : "View Our Portfolio"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/10 w-full"
                onClick={() => onNavigate?.("contact")}
              >
                {isCanada ? "Canadian Collection" : "Get Free Consultation"}
              </Button>
            </div>

            {/* Key Features - 2x2 Grid */}
            <div className="grid grid-cols-2 gap-4 px-4">
              {isCanada ? (
                <>
                  <div className="text-center p-4 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-primary/20">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Leaf className="w-6 h-6 text-primary" />
                    </div>
                    <div className="font-semibold text-sm mb-1">100% Sustainable</div>
                    <div className="text-xs text-muted-foreground">Materials</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-primary/20">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Snowflake className="w-6 h-6 text-primary" />
                    </div>
                    <div className="font-semibold text-sm mb-1">Winter-Ready</div>
                    <div className="text-xs text-muted-foreground">Designs</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-primary/20">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div className="font-semibold text-sm mb-1">Canadian</div>
                    <div className="text-xs text-muted-foreground">Craftsmanship</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-primary/20">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div className="font-semibold text-sm mb-1">Coast-to-Coast</div>
                    <div className="text-xs text-muted-foreground">Service</div>
                  </div>
                </>
              ) : (
                <>
                  <div className="text-center p-4 rounded-xl border border-orange-200" style={{ backgroundColor: '#faece7' }}>
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: '#faece7' }}>
                      <CheckCircle className="w-6 h-6" style={{ color: '#f26d35' }} />
                    </div>
                    <div className="font-semibold text-sm mb-1">25+ Years</div>
                    <div className="text-xs text-muted-foreground">Experience</div>
                  </div>
                  <div className="text-center p-4 rounded-xl border border-orange-200" style={{ backgroundColor: '#faece7' }}>
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: '#faece7' }}>
                      <CheckCircle className="w-6 h-6" style={{ color: '#f26d35' }} />
                    </div>
                    <div className="font-semibold text-sm mb-1">500+ Hotels</div>
                    <div className="text-xs text-muted-foreground">Furnished</div>
                  </div>
                  <div className="text-center p-4 rounded-xl border border-orange-200" style={{ backgroundColor: '#faece7' }}>
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: '#faece7' }}>
                      <CheckCircle className="w-6 h-6" style={{ color: '#f26d35' }} />
                    </div>
                    <div className="font-semibold text-sm mb-1">Custom Design</div>
                    <div className="text-xs text-muted-foreground">Solutions</div>
                  </div>
                  <div className="text-center p-4 rounded-xl border border-orange-200" style={{ backgroundColor: '#faece7' }}>
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: '#faece7' }}>
                      <CheckCircle className="w-6 h-6" style={{ color: '#f26d35' }} />
                    </div>
                    <div className="font-semibold text-sm mb-1">Global</div>
                    <div className="text-xs text-muted-foreground">Shipping</div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Hero Image Section - Below Content */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <ImageWithFallback
                src={isCanada ? 
                  "https://images.unsplash.com/photo-1725623831897-fb009acfe742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5hZGlhbiUyMGhvdGVsJTIwbHV4dXJ5JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU3NTAwODI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" :
                  "https://images.unsplash.com/photo-1590490359854-dfba19688d70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb20lMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzU2OTk4MzIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                }
                alt={isCanada ? "Canadian luxury hotel interior" : "Luxury hotel bedroom furniture"}
                className="w-full h-64 sm:h-80 object-cover"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-2 -left-2 w-16 h-16 bg-primary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-accent/30 rounded-full blur-xl"></div>
          </div>

        </div>

        {/* Desktop Layout - Hidden on mobile */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-6 lg:gap-12 items-start lg:items-start">
          {/* Content */}
          <div className="space-y-6 lg:-mt-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
                {isCanada ? <Leaf className="w-4 h-4" /> : <CheckCircle className="w-4 h-4" />}
                <span>{isCanada ? "Canadian Hotel Furniture Excellence" : "Premium Hospitality Furniture Manufacturer"}</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                {isCanada ? (
                  <>
                    Sustainable Canadian
                    <span className="text-primary block">Hotel Furniture</span>
                    Craftsmanship
                  </>
                ) : (
                  <>
                    Leading Hospitality Furniture
                    <span className="text-primary block">Hotel Furniture</span>
                    Since 1995
                  </>
                )}
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                {isCanada ? (
                  "Experience the finest in Canadian hospitality furniture design. Our eco-friendly, " +
                  "winter-ready solutions combine traditional Canadian craftsmanship with modern luxury, " +
                  "built to withstand the elements while maintaining elegance."
                ) : (
                  "Transform your hospitality spaces with our premium furniture solutions. " +
                  "We manufacture and supply world-class hotel furniture that combines " +
                  "luxury, durability, and timeless design."
                )}
              </p>
            </div>

            {/* Key Points */}
            <div className="grid sm:grid-cols-2 gap-4">
              {isCanada ? (
                <>
                  <div className="flex items-center gap-3">
                    <Leaf className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>100% Sustainable Materials</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Snowflake className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Winter-Ready Designs</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Canadian Craftsmanship</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Coast-to-Coast Service</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>25+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>500+ Hotels Furnished</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Custom Design Solutions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Global Shipping</span>
                  </div>
                </>
              )}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => onNavigate?.("portfolio")}
              >
                {isCanada ? "Explore Canadian Projects" : "View Our Portfolio"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/10"
                onClick={() => onNavigate?.("contact")}
              >
                {isCanada ? "Canadian Collection" : "Get free Consultation"}
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <ImageWithFallback
                src={isCanada ? 
                  "https://images.unsplash.com/photo-1725623831897-fb009acfe742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5hZGlhbiUyMGhvdGVsJTIwbHV4dXJ5JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU3NTAwODI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" :
                  "https://images.unsplash.com/photo-1590490359854-dfba19688d70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb20lMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzU2OTk4MzIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                }
                alt={isCanada ? "Canadian luxury hotel interior" : "Luxury hotel bedroom furniture"}
                className="w-full h-[600px] object-cover rounded-lg shadow-2xl"
              />
              
              {/* Stats positioned inside the image */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                <div className="grid grid-cols-3 gap-4">
                  {isCanada ? (
                    <>
                      <div className="text-center">
                        <div className="text-xl font-bold text-primary">150+</div>
                        <div className="text-xs text-muted-foreground">Canadian Hotels</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-primary">10</div>
                        <div className="text-xs text-muted-foreground">Provinces Served</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-primary">100%</div>
                        <div className="text-xs text-muted-foreground">Eco-Friendly</div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="text-center">
                        <div className="text-xl font-bold text-primary">500+</div>
                        <div className="text-xs text-muted-foreground">Projects Completed</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-primary">50+</div>
                        <div className="text-xs text-muted-foreground">Countries Served</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-primary">25+</div>
                        <div className="text-xs text-muted-foreground">Years Experience</div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/30 rounded-full blur-xl"></div>
            
            {/* Quality Badge */}
            <div className="absolute top-6 right-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="text-center">
                {isCanada ? (
                  <>
                    <div className="text-2xl">🍁</div>
                    <div className="text-xs text-muted-foreground">Canadian Made</div>
                  </>
                ) : (
                  <>
                    <div className="text-2xl font-bold text-primary">A+</div>
                    <div className="text-xs text-muted-foreground">Quality Rating</div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}