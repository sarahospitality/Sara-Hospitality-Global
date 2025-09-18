import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Award, Calendar, Target, Users, ArrowRight, Building, Globe, Star } from "lucide-react";
import { Button } from "./ui/button";

interface AboutOverviewProps {
  onNavigate: (page: string, section?: string) => void;
}

export default function AboutOverview({ onNavigate }: AboutOverviewProps) {
  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Countries Served" },
    { number: "100k+", label: "Rooms Furnished" },
    { number: "98%", label: "Client Satisfaction" }
  ];

  const aboutSections = [
    {
      id: "history",
      title: "Company History",
      description: "Discover our journey from a small furniture workshop to a global hospitality leader with major milestones spanning nearly a decade.",
      icon: <Calendar className="w-8 h-8" />,
      color: "from-primary/10 to-primary/20",
      textColor: "text-primary"
    },
    {
      id: "motto",
      title: "Our Motto & Values",
      description: "Learn about our core philosophy and the fundamental values that drive our commitment to excellence in hospitality furniture.",
      icon: <Target className="w-8 h-8" />,
      color: "from-primary/10 to-primary/20",
      textColor: "text-primary"
    },
    {
      id: "team",
      title: "Meet Our Team",
      description: "Get to know the talented professionals behind our success, from design experts to manufacturing specialists.",
      icon: <Users className="w-8 h-8" />,
      color: "from-primary/10 to-primary/20",
      textColor: "text-primary"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-12 bg-gradient-to-br from-primary/5 via-accent/30 to-primary/10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <Building className="w-4 h-4" />
                <span>About Sara Global Hospitality</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Crafting Excellence in
                <span className="text-primary block">Hospitality Furniture</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                For nearly a decade, Sara Global Hospitality has been transforming hospitality spaces with 
                custom-designed furniture that combines luxury, functionality, and sustainability. Our global 
                presence spans across continents, bringing world-class craftsmanship to premium hotels and resorts.
              </p>
              
              {/* Key Highlights */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Industry-leading custom furniture solutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Global presence across USA, UAE, and UK</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Trusted by 500+ hospitality properties worldwide</span>
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl transform rotate-6"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc1NzIzNTUwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Sara Global Hospitality Team"
                className="relative z-10 w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Mission & Vision - Modern Creative Design */}
      <section className="py-10 bg-gradient-to-br from-gray-900 via-primary/20 to-black relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-conic from-primary/5 via-accent/10 to-primary/5 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full mb-6 border border-white/20">
              <Star className="w-5 h-5 text-primary" />
              <span className="font-medium">Our Driving Force</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-4 text-white">
              Mission & 
              <span className="text-primary block lg:inline lg:ml-4">Vision</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          </div>

          {/* Mission & Vision Cards in Modern Layout */}
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              
              {/* Mission Card */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/30 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-all duration-700"></div>
                <div className="relative bg-white/95 backdrop-blur-lg rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/20 group-hover:shadow-3xl transition-all duration-500">
                  
                  {/* Icon with animated background */}
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping"></div>
                    <div className="relative w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-lg">
                      <Target className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      Our Mission
                    </h3>
                    
                    <div className="space-y-4">
                      <p className="text-lg text-gray-700 leading-relaxed">
                        To <strong className="text-primary">revolutionize</strong> the hospitality industry by creating exceptional, sustainable furniture solutions that transform spaces and enhance guest experiences.
                      </p>
                      
                      {/* Key Points */}
                      <div className="grid grid-cols-2 gap-3 mt-6">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm text-gray-600 font-medium">Exceptional Quality</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          <span className="text-sm text-gray-600 font-medium">Sustainable Solutions</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm text-gray-600 font-medium">Space Transformation</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          <span className="text-sm text-gray-600 font-medium">Design Excellence</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vision Card */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/30 rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-all duration-700"></div>
                <div className="relative bg-white/95 backdrop-blur-lg rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/20 group-hover:shadow-3xl transition-all duration-500">
                  
                  {/* Icon with animated background */}
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping delay-500"></div>
                    <div className="relative w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-lg">
                      <Globe className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      Our Vision
                    </h3>
                    
                    <div className="space-y-4">
                      <p className="text-lg text-gray-700 leading-relaxed">
                        To become the world's <strong className="text-primary">leading</strong> hospitality furniture manufacturer, recognized for innovation, sustainability, and unparalleled quality.
                      </p>
                      
                      {/* Key Points */}
                      <div className="grid grid-cols-2 gap-3 mt-6">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm text-gray-600 font-medium">Global Leadership</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          <span className="text-sm text-gray-600 font-medium">Innovation Focus</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm text-gray-600 font-medium">Lasting Partnerships</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          <span className="text-sm text-gray-600 font-medium">Global Reach</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Quote Section */}
            <div className="text-center mt-12">
              <div className="relative max-w-4xl mx-auto">
                <div className="absolute inset-0 bg-white/95 backdrop-blur-md rounded-2xl border border-white/30 shadow-2xl"></div>
                <div className="relative p-8 lg:p-12">
                  <blockquote className="text-xl lg:text-2xl font-medium text-gray-800 leading-relaxed">
                    Transforming spaces, creating experiences, and building dreams - 
                    <span className="text-primary font-bold"> one piece of furniture at a time.</span>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Sections Navigation */}
      <section className="py-10 bg-gradient-to-r from-primary/5 via-accent/50 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-5xl font-bold mb-3">Explore Our Story</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Dive deeper into different aspects of Sara Global Hospitality - from our rich history 
              to the dedicated team that makes everything possible.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {aboutSections.map((section, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg cursor-pointer overflow-hidden"
                onClick={() => onNavigate("about", section.id)}
              >
                <div className={`h-2 bg-gradient-to-r ${section.color}`}></div>
                <CardContent className="p-8 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300 ${section.color} ${section.textColor}`}>
                    {section.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{section.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {section.description}
                  </p>

                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Transform Your Hospitality Space?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how Sara Global Hospitality can bring your vision to life with our 
              expert furniture solutions and global experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Get Free Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline">
                View Our Portfolio
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}