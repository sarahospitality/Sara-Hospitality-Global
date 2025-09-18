import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Users, ArrowLeft, Mail, Phone, Linkedin, MapPin, Award, Calendar } from "lucide-react";
import { Button } from "./ui/button";

interface OurTeamProps {
  onNavigate: (page: string, section?: string) => void;
}

export default function OurTeam({ onNavigate }: OurTeamProps) {
  const leadership = [
    {
      name: "Sarah Johnson",
      role: "Chief Executive Officer & Founder",
      image: "https://images.unsplash.com/photo-1585554414787-09b821c321c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc1NzMwNDkxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "With over 15 years in hospitality design and manufacturing, Sarah founded Sara Global Hospitality with a vision to revolutionize the industry. Her leadership has driven the company's expansion across three continents.",
      expertise: ["Strategic Leadership", "Business Development", "International Markets", "Hospitality Industry"],
      achievements: ["Founded company with $50K", "Expanded to 3 continents", "500+ successful projects", "Industry Leadership Award 2023"],
      experience: "15+ years",
      education: "MBA Harvard Business School, BFA Interior Design"
    },
    {
      name: "Michael Chen",
      role: "Head of Design & Innovation",
      image: "https://images.unsplash.com/photo-1601489865452-407a1b801dde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBzdWl0fGVufDF8fHx8MTc1NzMyNTE0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Award-winning designer specializing in luxury hospitality interiors and sustainable furniture solutions. Michael leads our design innovation center and has created over 200 custom furniture collections.",
      expertise: ["Luxury Design", "Sustainable Materials", "3D Modeling", "Custom Solutions"],
      achievements: ["200+ custom designs", "Design Innovation Award", "Sustainability Champion", "Patent holder for smart furniture"],
      experience: "12+ years",
      education: "M.Des Industrial Design, B.Arch Architecture"
    }
  ];

  const executiveTeam = [
    {
      name: "Emily Rodriguez",
      role: "Operations Director",
      image: "https://images.unsplash.com/photo-1610631066894-62452ccb927c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGNlb3xlbnwxfHx8fDE3NTczMjUxMzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Ensures seamless project execution and quality control across all our international manufacturing facilities. Emily's operational excellence has maintained our 98% client satisfaction rate.",
      department: "Operations",
      experience: "10+ years"
    },
    {
      name: "David Thompson",
      role: "Client Relations Manager",
      image: "https://images.unsplash.com/photo-1601489865452-407a1b801dde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBzdWl0fGVufDF8fHx8MTc1NzMyNTE0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Builds strong partnerships with hospitality clients worldwide, ensuring exceptional service delivery and maintaining long-term relationships with our global client base.",
      department: "Client Relations",
      experience: "8+ years"
    },
    {
      name: "Lisa Wang",
      role: "Head of Sustainability",
      image: "https://images.unsplash.com/photo-1585554414787-09b821c321c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc1NzMwNDkxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Leads our environmental initiatives and sustainable manufacturing processes. Lisa has reduced our carbon footprint by 30% while maintaining production quality.",
      department: "Sustainability",
      experience: "7+ years"
    },
    {
      name: "James Miller",
      role: "Manufacturing Director",
      image: "https://images.unsplash.com/photo-1601489865452-407a1b801dde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhwcm9mZXNzaW9uYWwlMjBtYW4lMjBzdWl0fGVufDF8fHx8MTc1NzMyNTE0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Oversees production across our global manufacturing facilities, ensuring quality and efficiency. James has implemented advanced manufacturing technologies.",
      department: "Manufacturing",
      experience: "12+ years"
    }
  ];

  const departments = [
    {
      name: "Design & Innovation",
      count: "25 professionals",
      description: "Creative minds crafting the future of hospitality furniture",
      icon: <Award className="w-6 h-6" />
    },
    {
      name: "Manufacturing",
      count: "60 craftsmen",
      description: "Skilled artisans bringing designs to life with precision",
      icon: <Users className="w-6 h-6" />
    },
    {
      name: "Quality Assurance",
      count: "15 specialists",
      description: "Ensuring every piece meets our exacting standards",
      icon: <Award className="w-6 h-6" />
    },
    {
      name: "Client Services",
      count: "20 professionals",
      description: "Dedicated to exceptional customer experience",
      icon: <Users className="w-6 h-6" />
    },
    {
      name: "Operations",
      count: "30 experts",
      description: "Managing global logistics and project delivery",
      icon: <MapPin className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="py-12 bg-white border-b">
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
              <Users className="w-4 h-4" />
              <span>Our Team</span>
            </div>
            
            <h1 className="text-3xl lg:text-5xl font-bold mb-6">The People Behind Excellence</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Meet the talented professionals who bring passion, expertise, and innovation to every 
              project. Our diverse team combines decades of experience in design, manufacturing, 
              and hospitality to deliver exceptional results.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gradient-to-r from-primary/5 via-accent/30 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our visionary leaders guide the company with strategic thinking, industry expertise, 
              and an unwavering commitment to excellence.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {leadership.map((member, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-xl overflow-hidden bg-white">
                <div className="grid md:grid-cols-5 gap-0">
                  <div className="md:col-span-2 relative">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  
                  <CardContent className="md:col-span-3 p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                        <div className="text-primary font-medium mb-4">{member.role}</div>
                      </div>
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {member.experience}
                      </Badge>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed text-sm">{member.bio}</p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-sm">Expertise</h4>
                        <div className="flex flex-wrap gap-1">
                          {member.expertise.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="outline" className="text-xs">{skill}</Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2 text-sm">Key Achievements</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {member.achievements.map((achievement, achIndex) => (
                            <div key={achIndex} className="text-xs text-muted-foreground flex items-center gap-1">
                              <Award className="w-3 h-3 text-primary flex-shrink-0" />
                              <span>{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-1 text-sm">Education</h4>
                        <p className="text-xs text-muted-foreground">{member.education}</p>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Executive Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our experienced executives bring specialized knowledge and proven track records 
              in their respective fields to drive company success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {executiveTeam.map((member, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <div className="relative">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 text-primary">
                      {member.experience}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <div className="text-primary font-medium mb-1">{member.role}</div>
                  <div className="text-sm text-muted-foreground mb-4">{member.department}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Departments */}
      <section className="py-20 bg-gradient-to-r from-primary/5 via-accent/50 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Departments</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized teams working together to deliver exceptional hospitality furniture solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-full mb-4">
                    {dept.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{dept.name}</h3>
                  <div className="text-primary font-medium mb-3">{dept.count}</div>
                  <p className="text-sm text-muted-foreground">{dept.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Office & Culture */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Global Headquarters</h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Located in Atlanta, Georgia, our headquarters serves as the central hub for innovation, 
                design, and strategic planning. Our modern workspace is designed to foster creativity, 
                collaboration, and the same attention to detail we bring to our client projects.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>2600 Pleasantdale Rd. Ste 12, Atlanta, GA 30340</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+1-678-431-9041</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary" />
                  <span>150+ Team Members Globally</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">Nationalities</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">15+</div>
                  <div className="text-sm text-muted-foreground">Languages Spoken</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">95%</div>
                  <div className="text-sm text-muted-foreground">Employee Satisfaction</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">3</div>
                  <div className="text-sm text-muted-foreground">Global Offices</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl transform -rotate-2"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB3b3Jrc3BhY2UlMjBtb2Rlcm58ZW58MXx8fHwxNzU3MjI1ODEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Sara Global Hospitality Office"
                className="relative z-10 w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Join Our Growing Team
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for excellence 
            and innovation in hospitality furniture design and manufacturing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              View Open Positions
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Submit Resume
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}