import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Award, Target, Users, Globe, Calendar, ArrowRight, CheckCircle, Star, Heart, Shield } from "lucide-react";
import { Button } from "./ui/button";

export default function AboutPage() {
  const timelineEvents = [
    {
      year: "2015",
      title: "Company Founded",
      description: "Sara Global Hospitality was established with a vision to revolutionize hotel furniture manufacturing."
    },
    {
      year: "2017",
      title: "International Expansion",
      description: "Expanded operations to UAE and UK, serving luxury hotels across multiple continents."
    },
    {
      year: "2019",
      title: "Design Innovation",
      description: "Launched our custom design division, creating bespoke furniture solutions for premium hotels."
    },
    {
      year: "2021",
      title: "Sustainability Initiative",
      description: "Introduced eco-friendly materials and sustainable manufacturing processes across all operations."
    },
    {
      year: "2023",
      title: "Technology Integration",
      description: "Integrated smart furniture solutions and IoT technology for modern hospitality experiences."
    },
    {
      year: "2024",
      title: "Global Recognition",
      description: "Achieved 500+ completed projects and received international awards for hospitality furniture excellence."
    }
  ];

  const values = [
    {
      icon: <Star className="w-8 h-8" />,
      title: "Excellence",
      description: "We strive for perfection in every piece we create, ensuring the highest quality standards."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion",
      description: "Our love for craftsmanship drives us to create furniture that tells a story."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trust",
      description: "Building lasting relationships through reliability, transparency, and consistent delivery."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Innovation",
      description: "Pioneering new design concepts and sustainable solutions for the hospitality industry."
    }
  ];

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1585554414787-09b821c321c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc1NzMwNDkxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "With over 15 years in hospitality design, Sarah leads our vision of creating exceptional furniture experiences."
    },
    {
      name: "Michael Chen",
      role: "Head of Design",
      image: "https://images.unsplash.com/photo-1601489865452-407a1b801dde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBzdWl0fGVufDF8fHx8MTc1NzMyNTE0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Award-winning designer specializing in luxury hospitality interiors and sustainable furniture solutions."
    },
    {
      name: "Emily Rodriguez",
      role: "Operations Director",
      image: "https://images.unsplash.com/photo-1610631066894-62452ccb927c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGNlb3xlbnwxfHx8fDE3NTczMjUxMzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Ensures seamless project execution and quality control across all our international manufacturing facilities."
    },
    {
      name: "David Thompson",
      role: "Client Relations Manager",
      image: "https://images.unsplash.com/photo-1601489865452-407a1b801dde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBzdWl0fGVufDF8fHx8MTc1NzMyNTE0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Builds strong partnerships with hospitality clients worldwide, ensuring exceptional service delivery."
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Countries Served" },
    { number: "100k+", label: "Rooms Furnished" },
    { number: "98%", label: "Client Satisfaction" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-accent/30 to-primary/10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <Award className="w-4 h-4" />
                <span>About Sara Global Hospitality</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Crafting Excellence in
                <span className="text-primary block">Hospitality Furniture</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                For nearly a decade, we've been transforming hospitality spaces with custom-designed furniture 
                that combines luxury, functionality, and sustainability. Our global presence spans across 
                continents, bringing world-class craftsmanship to premium hotels and resorts.
              </p>
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

      {/* Company History Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Calendar className="w-4 h-4" />
              <span>Our Journey</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Our History & Milestones</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From a small furniture workshop to a global hospitality furniture leader, 
              discover the key moments that shaped our journey.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary via-primary/50 to-primary h-full hidden lg:block"></div>
            
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div key={index} className={`relative grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? '' : 'lg:text-right'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg hidden lg:block"></div>
                  
                  {index % 2 === 0 ? (
                    <>
                      <Card className="lg:ml-auto shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-r from-white to-accent/30">
                        <CardContent className="p-8">
                          <div className="text-3xl font-bold text-primary mb-3">{event.year}</div>
                          <h3 className="text-xl font-bold mb-4">{event.title}</h3>
                          <p className="text-muted-foreground">{event.description}</p>
                        </CardContent>
                      </Card>
                      <div></div>
                    </>
                  ) : (
                    <>
                      <div></div>
                      <Card className="lg:mr-auto shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-l from-white to-accent/30">
                        <CardContent className="p-8">
                          <div className="text-3xl font-bold text-primary mb-3">{event.year}</div>
                          <h3 className="text-xl font-bold mb-4">{event.title}</h3>
                          <p className="text-muted-foreground">{event.description}</p>
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

      {/* Our Motto & Values */}
      <section className="py-20 bg-gradient-to-r from-primary/5 via-accent/50 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Target className="w-4 h-4" />
              <span>Our Values</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-8">Our Motto & Core Values</h2>
            
            {/* Main Motto */}
            <div className="relative max-w-4xl mx-auto mb-16">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/20 rounded-3xl transform -rotate-1"></div>
              <Card className="relative bg-white/80 backdrop-blur border-0 shadow-2xl">
                <CardContent className="p-12">
                  <div className="text-6xl text-primary mb-6">"</div>
                  <blockquote className="text-2xl lg:text-3xl font-medium text-center leading-relaxed mb-6">
                    Transforming Spaces, Creating Experiences, Building Dreams
                  </blockquote>
                  <div className="text-6xl text-primary text-right">"</div>
                  <div className="h-1 w-24 bg-primary mx-auto mt-6"></div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Users className="w-4 h-4" />
              <span>Meet Our Team</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">The People Behind Excellence</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience in design, 
              manufacturing, and hospitality to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <div className="relative">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <div className="text-primary font-medium mb-4">{member.role}</div>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Office Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl transform -rotate-1"></div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB3b3Jrc3BhY2UlMjBtb2Rlcm58ZW58MXx8fHwxNzU3MjI1ODEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Sara Global Hospitality Office"
              className="relative z-10 w-full h-64 lg:h-96 object-cover rounded-3xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl z-20 flex items-end">
              <div className="p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Our Global Headquarters</h3>
                <p className="text-white/90">Atlanta, GA - Where innovation meets craftsmanship</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss how our expertise and passion can bring your hospitality vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Start Your Project
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}