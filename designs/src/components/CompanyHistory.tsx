import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Calendar, ArrowLeft, MapPin, Award, TrendingUp, Users, Globe } from "lucide-react";
import { Button } from "./ui/button";

interface CompanyHistoryProps {
  onNavigate: (page: string, section?: string) => void;
}

export default function CompanyHistory({ onNavigate }: CompanyHistoryProps) {
  const timelineEvents = [
    {
      year: "2015",
      title: "Company Founded",
      description: "Sara Global Hospitality was established in Atlanta, GA with a vision to revolutionize hotel furniture manufacturing. Starting with a small team of 5 craftsmen, we focused on quality over quantity.",
      milestone: "First Workshop Established",
      impact: "Founded with $50K initial investment"
    },
    {
      year: "2017",
      title: "International Expansion",
      description: "Expanded operations to UAE and UK, serving luxury hotels across multiple continents. This marked our transition from a local manufacturer to a global hospitality furniture provider.",
      milestone: "Global Presence Achieved",
      impact: "Opened offices in Dubai and London"
    },
    {
      year: "2019",
      title: "Design Innovation Center",
      description: "Launched our custom design division and innovation center, creating bespoke furniture solutions for premium hotels. Introduced 3D modeling and virtual reality for client presentations.",
      milestone: "Innovation Hub Created",
      impact: "50+ custom designs launched"
    },
    {
      year: "2021",
      title: "Sustainability Initiative",
      description: "Introduced eco-friendly materials and sustainable manufacturing processes across all operations. Partnered with certified sustainable wood suppliers and implemented waste reduction programs.",
      milestone: "Green Manufacturing Certified",
      impact: "30% reduction in carbon footprint"
    },
    {
      year: "2023",
      title: "Technology Integration",
      description: "Integrated smart furniture solutions and IoT technology for modern hospitality experiences. Launched our smart furniture line with built-in charging stations and ambient lighting.",
      milestone: "Smart Furniture Line Launched",
      impact: "200+ smart installations completed"
    },
    {
      year: "2024",
      title: "Global Recognition",
      description: "Achieved 500+ completed projects and received international awards for hospitality furniture excellence. Recognized as 'Hospitality Furniture Manufacturer of the Year' by Industry Leaders Association.",
      milestone: "Industry Leadership Achieved",
      impact: "500+ projects, 50+ countries served"
    }
  ];

  const achievements = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Industry Awards",
      description: "15+ international awards for design excellence and innovation"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Reach",
      description: "Operations across 3 continents with local manufacturing facilities"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Growth Rate",
      description: "300% revenue growth over the past 5 years"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Expansion",
      description: "From 5 to 150+ dedicated professionals worldwide"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            onClick={() => onNavigate("about")}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to About Overview
          </Button>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Calendar className="w-4 h-4" />
              <span>Company History</span>
            </div>
            
            <h1 className="text-3xl lg:text-5xl font-bold mb-6">Our Journey Through Time</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From humble beginnings in Atlanta to becoming a global leader in hospitality furniture, 
              discover the key milestones and achievements that have shaped Sara Global Hospitality 
              into the company we are today.
            </p>
          </div>
        </div>
      </section>

      {/* Achievements Overview */}
      <section className="py-8 bg-gradient-to-r from-primary/5 via-accent/30 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center border-0 shadow-lg bg-white/80 backdrop-blur">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-full mb-4">
                    {achievement.icon}
                  </div>
                  <h3 className="font-bold mb-2">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-3">Major Milestones</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each milestone represents a significant step in our evolution from a local workshop 
              to a globally recognized hospitality furniture manufacturer.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary via-primary/50 to-primary h-full hidden lg:block"></div>
            
            <div className="space-y-16">
              {timelineEvents.map((event, index) => (
                <div key={index} className={`relative grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? '' : 'lg:text-right'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg hidden lg:block z-10"></div>
                  
                  {index % 2 === 0 ? (
                    <>
                      <Card className="lg:ml-auto shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-r from-white to-accent/20">
                        <CardContent className="p-8">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="text-3xl font-bold text-primary">{event.year}</div>
                            <div className="h-8 w-px bg-primary/30"></div>
                            <div className="text-sm text-primary font-medium">{event.milestone}</div>
                          </div>
                          <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
                          <p className="text-muted-foreground mb-4 leading-relaxed">{event.description}</p>
                          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                            <TrendingUp className="w-3 h-3" />
                            <span>{event.impact}</span>
                          </div>
                        </CardContent>
                      </Card>
                      <div className="hidden lg:block"></div>
                    </>
                  ) : (
                    <>
                      <div className="hidden lg:block"></div>
                      <Card className="lg:mr-auto shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-l from-white to-accent/20">
                        <CardContent className="p-8">
                          <div className="flex items-center gap-4 mb-4 lg:justify-end">
                            <div className="text-sm text-primary font-medium">{event.milestone}</div>
                            <div className="h-8 w-px bg-primary/30"></div>
                            <div className="text-3xl font-bold text-primary">{event.year}</div>
                          </div>
                          <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
                          <p className="text-muted-foreground mb-4 leading-relaxed">{event.description}</p>
                          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                            <TrendingUp className="w-3 h-3" />
                            <span>{event.impact}</span>
                          </div>
                        </CardContent>
                      </Card>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20 bg-gradient-to-r from-primary/5 via-accent/50 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Looking Ahead</h2>
            <p className="text-xl text-muted-foreground mb-8">
              As we continue to grow, our commitment to innovation, sustainability, and excellence 
              remains stronger than ever. We're excited about the future and the opportunities 
              to serve even more hospitality partners worldwide.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-primary mb-2">2025</div>
                  <h3 className="font-bold mb-2">AI Integration</h3>
                  <p className="text-sm text-muted-foreground">Implementing AI-driven design tools for personalized furniture solutions</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-primary mb-2">2026</div>
                  <h3 className="font-bold mb-2">Carbon Neutral</h3>
                  <p className="text-sm text-muted-foreground">Achieving complete carbon neutrality across all operations</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-primary mb-2">2027</div>
                  <h3 className="font-bold mb-2">Global Expansion</h3>
                  <p className="text-sm text-muted-foreground">Opening new facilities in Asia-Pacific and South America</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}