import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Award, Users, Globe, Zap, Leaf, Mountain, Snowflake, Recycle, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

interface AboutSectionProps {
  selectedCountry?: string;
  onNavigate?: (page: string) => void;
}

export default function AboutSection({ selectedCountry, onNavigate }: AboutSectionProps) {
  const isCanada = selectedCountry === "canada-toronto";

  if (isCanada) {
    return (
      <section id="about" className="pt-8 pb-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          {/* Simple Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <Leaf className="w-4 h-4" />
              <span>About Sara Global Canada</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-2">
              Canadian Heritage Meets
              <span className="text-primary block">Modern Innovation</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Sustainable furniture solutions that embody Canadian craftsmanship and environmental stewardship.
            </p>
          </div>

          {/* Simplified Layout - Image Left, Values Right */}
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Left - Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-lg h-full">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1710828865631-6fea9948a71b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmUlMjBmYWN0b3J5JTIwcHJvZHVjdGlvbnxlbnwxfHx8fDE3NTcwMDI5MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Canadian furniture manufacturing facility"
                  className="w-full h-full object-cover min-h-[450px]"
                />
              </div>
            </div>

            {/* Right - Canadian Values (Compact) */}
            <div className="flex flex-col justify-between space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-6">Our Canadian Values</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Leaf className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Environmental Stewardship</h4>
                      <p className="text-sm text-muted-foreground">100% sustainable materials from Canadian forests</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Snowflake className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Climate Resilience</h4>
                      <p className="text-sm text-muted-foreground">Engineered for Canada's extreme weather</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mountain className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Heritage Craftsmanship</h4>
                      <p className="text-sm text-muted-foreground">Traditional techniques, modern applications</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Recycle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Circular Economy</h4>
                      <p className="text-sm text-muted-foreground">Zero-waste manufacturing processes</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* View More Button */}
              <div className="pt-4">
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                  onClick={() => onNavigate?.("about")}
                >
                  View More About Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="about" className="pt-8 pb-4 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Award className="w-4 h-4" />
            <span>About Sara Global Hospitality</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-2">
            Pioneering Excellence in
            <span className="text-primary block">Hotel Furniture Manufacturing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            For over 25 years, Sara Global Hospitality has been at the forefront of hotel furniture 
            manufacturing, creating exceptional pieces that define luxury hospitality experiences worldwide.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Our Story</h3>
              <p className="text-muted-foreground">
                Founded in 1995, Sara Global Hospitality began as a small family business with a 
                vision to transform the hospitality industry through exceptional furniture design 
                and manufacturing. Today, we're proud to be a leading global supplier of premium 
                hotel furniture solutions.
              </p>
              <p className="text-muted-foreground">
                Our journey has been marked by continuous innovation, unwavering commitment to 
                quality, and deep understanding of the hospitality industry's evolving needs. 
                We've furnished over 500 hotels across 50 countries, establishing ourselves as 
                a trusted partner for hospitality professionals worldwide.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-4">
              <h4 className="font-bold">Our Core Values</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">Excellence</h5>
                    <p className="text-sm text-muted-foreground">Uncompromising quality in every piece</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">Innovation</h5>
                    <p className="text-sm text-muted-foreground">Cutting-edge design and manufacturing</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">Partnership</h5>
                    <p className="text-sm text-muted-foreground">Building lasting relationships</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">Global Reach</h5>
                    <p className="text-sm text-muted-foreground">Serving clients worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1710828865631-6fea9948a71b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmUlMjBmYWN0b3J5JTIwcHJvZHVjdGlvbnxlbnwxfHx8fDE3NTcwMDI5MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Furniture manufacturing facility"
              className="w-full h-[500px] object-cover rounded-lg shadow-lg"
            />
            
            {/* Overlay Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl border">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">25+</div>
                <div className="text-sm text-muted-foreground">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}