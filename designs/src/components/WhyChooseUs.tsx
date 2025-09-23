import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { 
  Award, 
  Clock, 
  Shield, 
  Truck, 
  Users, 
  Wrench, 
  Globe, 
  CheckCircle,
  Star,
  Headphones,
  ArrowRight,
  Zap,
  Target
} from "lucide-react";

interface WhyChooseUsProps {
  selectedCountry?: string;
}

export default function WhyChooseUs({ selectedCountry }: WhyChooseUsProps) {
  const reasons = [
    {
      icon: Award,
      title: "25+ Years Expertise",
      description: "Decades of experience in hotel furniture manufacturing with deep industry knowledge.",
      metric: "500+ Hotels",
      color: "bg-gray-100 text-primary"
    },
    {
      icon: Shield,
      title: "Premium Quality",
      description: "Rigorous quality control and premium materials ensure long-lasting durability.",
      metric: "99.8% Quality Rate",
      color: "bg-gray-100 text-primary"
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "Reliable delivery schedules with real-time tracking and project management.",
      metric: "98% On-Time",
      color: "bg-gray-100 text-primary"
    },
    {
      icon: Wrench,
      title: "Custom Design",
      description: "Bespoke solutions tailored to your brand identity and space requirements.",
      metric: "1000+ Designs",
      color: "bg-gray-100 text-primary"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Worldwide shipping and installation services with local support teams.",
      metric: "50+ Countries",
      color: "bg-gray-100 text-primary"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Dedicated customer service and post-installation support whenever you need it.",
      metric: "4.9/5 Rating",
      color: "bg-gray-100 text-primary"
    }
  ];

  const certifications = [
    "ISO 9001 Certified",
    "FSC Certified Wood",
    "GREENGUARD Gold",
    "BIFMA Standards",
    "Fire Retardant",
    "Anti-Microbial"
  ];

  return (
    <section className="py-8 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full -translate-x-36 -translate-y-36"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/30 rounded-full translate-x-48 translate-y-48"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Why Choose Us - Compact Showcase */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Star className="w-4 h-4" />
            <span>Why Choose Sara Global</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-2">
            Industry Leaders in
            <span className="text-primary block">Hospitality Furniture</span>
          </h2>
        </div>

        {/* Compact Stats Display */}
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div key={index} className="group text-center hover:-translate-y-2 transition-all duration-300">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col justify-between min-h-[140px]">
                  <div className={`w-14 h-14 ${reason.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="flex-1 flex flex-col justify-end">
                    <div className="text-lg font-bold text-primary mb-2">{reason.metric}</div>
                    <h4 className="font-medium text-sm text-foreground">{reason.title}</h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modern Process Section */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <Zap className="w-4 h-4" />
              <span>Our Process</span>
            </div>
            <h3 className="text-2xl lg:text-4xl font-bold mb-2">
              From Vision to
              <span className="text-primary"> Reality</span>
            </h3>
          </div>

          {/* Interactive Process Timeline */}
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 transform -translate-y-1/2"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  icon: Target,
                  title: "Discovery & Planning",
                  description: "Understanding your vision and requirements",
                  color: "bg-primary"
                },
                {
                  step: "02", 
                  icon: Wrench,
                  title: "Design & Engineering",
                  description: "Creating detailed designs and prototypes",
                  color: "bg-primary"
                },
                {
                  step: "03",
                  icon: Shield,
                  title: "Manufacturing",
                  description: "Precision crafting with quality control",
                  color: "bg-primary"
                },
                {
                  step: "04",
                  icon: Truck,
                  title: "Delivery & Setup",
                  description: "Professional installation and support",
                  color: "bg-primary"
                }
              ].map((process, index) => {
                const IconComponent = process.icon;
                return (
                  <div key={index} className="relative group">
                    {/* Connector line for mobile */}
                    {index < 3 && (
                      <div className="lg:hidden absolute top-20 left-1/2 w-0.5 h-16 bg-primary/20 transform -translate-x-1/2"></div>
                    )}
                    
                    <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:-translate-y-2">
                      <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 ${process.color} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                        {process.step}
                      </div>
                      
                      <div className="pt-4 text-center">
                        <div className={`w-16 h-16 ${process.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        
                        <h4 className="font-bold mb-3 text-lg">{process.title}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">{process.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}