import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Target, ArrowLeft, Star, Heart, Shield, Globe, CheckCircle, Lightbulb, Leaf, Handshake } from "lucide-react";
import { Button } from "./ui/button";

interface OurMottoProps {
  onNavigate: (page: string, section?: string) => void;
}

export default function OurMotto({ onNavigate }: OurMottoProps) {
  const coreValues = [
    {
      icon: <Star className="w-8 h-8" />,
      title: "Excellence",
      description: "We strive for perfection in every piece we create, ensuring the highest quality standards through meticulous attention to detail and premium materials.",
      principles: [
        "Uncompromising quality standards",
        "Continuous improvement processes",
        "Precision craftsmanship",
        "Premium material selection"
      ],
      color: "from-yellow-500/10 to-yellow-600/20",
      textColor: "text-yellow-600"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion",
      description: "Our love for craftsmanship drives us to create furniture that tells a story, connecting with both the space and the people who experience it.",
      principles: [
        "Artisan craftsmanship",
        "Creative design solutions",
        "Emotional connection through design",
        "Pride in every creation"
      ],
      color: "from-red-500/10 to-red-600/20",
      textColor: "text-red-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trust",
      description: "Building lasting relationships through reliability, transparency, and consistent delivery of promises made to our clients and partners.",
      principles: [
        "Transparent communication",
        "Reliable project delivery",
        "Long-term partnerships",
        "Ethical business practices"
      ],
      color: "from-blue-500/10 to-blue-600/20",
      textColor: "text-blue-600"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Innovation",
      description: "Pioneering new design concepts and sustainable solutions for the hospitality industry while embracing cutting-edge technology.",
      principles: [
        "Advanced design technology",
        "Sustainable innovations",
        "Future-focused solutions",
        "Industry leadership"
      ],
      color: "from-green-500/10 to-green-600/20",
      textColor: "text-green-600"
    }
  ];

  const additionalValues = [
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Sustainability",
      description: "Committed to environmentally responsible practices in every aspect of our operations.",
      color: "text-green-600"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Creativity",
      description: "Fostering innovative thinking and creative problem-solving in all our projects.",
      color: "text-orange-600"
    },
    {
      icon: <Handshake className="w-6 h-6" />,
      title: "Collaboration",
      description: "Working closely with clients to understand and exceed their expectations.",
      color: "text-purple-600"
    }
  ];

  const mottoQuotes = [
    {
      quote: "Transforming Spaces",
      description: "We believe every space has the potential to become extraordinary through thoughtful furniture design."
    },
    {
      quote: "Creating Experiences",
      description: "Our furniture doesn't just fill rooms - it creates memorable experiences for guests and visitors."
    },
    {
      quote: "Building Dreams",
      description: "We help hoteliers and designers bring their vision to life with custom furniture solutions."
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
              <Target className="w-4 h-4" />
              <span>Our Motto & Values</span>
            </div>
            
            <h1 className="text-3xl lg:text-5xl font-bold mb-6">Our Philosophy & Core Values</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              At Sara Global Hospitality, our motto and values aren't just words on a wall - they're 
              the foundation of every decision we make, every piece we craft, and every relationship we build.
            </p>
          </div>
        </div>
      </section>

      {/* Main Motto Section */}
      <section className="py-10 bg-gradient-to-r from-primary/5 via-accent/30 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-medium text-muted-foreground mb-4">Our Motto</h2>
            
            {/* Main Motto */}
            <div className="relative max-w-5xl mx-auto mb-16">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/20 rounded-3xl transform -rotate-1"></div>
              <Card className="relative bg-white/90 backdrop-blur border-0 shadow-2xl">
                <CardContent className="p-12 lg:p-16">
                  <div className="text-6xl lg:text-8xl text-primary mb-6 opacity-30">"</div>
                  <blockquote className="text-3xl lg:text-5xl font-bold text-center leading-tight mb-8">
                    <span className="text-primary">Transforming Spaces,</span><br />
                    <span className="text-foreground">Creating Experiences,</span><br />
                    <span className="text-primary">Building Dreams</span>
                  </blockquote>
                  <div className="text-6xl lg:text-8xl text-primary text-right opacity-30">"</div>
                  <div className="h-1 w-32 bg-gradient-to-r from-primary to-accent mx-auto mt-6"></div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Motto Breakdown */}
          <div className="grid md:grid-cols-3 gap-8">
            {mottoQuotes.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-primary mb-4">{item.quote}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-3">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These four fundamental values guide every aspect of our business, from design and 
              manufacturing to client relationships and company culture.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {coreValues.map((value, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${value.color}`}></div>
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${value.color} ${value.textColor}`}>
                      {value.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">{value.description}</p>
                      
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3">Key Principles</h4>
                        {value.principles.map((principle, principleIndex) => (
                          <div key={principleIndex} className="flex items-center gap-3">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{principle}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Values */}
      <section className="py-10 bg-gradient-to-r from-primary/5 via-accent/50 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-3xl lg:text-4xl font-bold mb-3">Supporting Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These additional values complement our core principles and help us maintain 
              our commitment to excellence in every aspect of our work.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalValues.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur hover:shadow-xl transition-all duration-300 text-center">
                <CardContent className="p-8">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-4 ${value.color}`}>
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values in Action */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-3xl lg:text-4xl font-bold mb-3">Values in Action</h2>
              <p className="text-xl text-muted-foreground">
                See how our values translate into real-world impact and meaningful results for our clients.
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/20 rounded-3xl transform rotate-1"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB3b3Jrc3BhY2UlMjBtb2Rlcm58ZW58MXx8fHwxNzU3MjI1ODEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Sara Global Hospitality Values in Action"
                className="relative z-10 w-full h-64 lg:h-96 object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-3xl z-20 flex items-end">
                <div className="p-8 text-white max-w-2xl">
                  <h3 className="text-2xl font-bold mb-4">Living Our Values Daily</h3>
                  <p className="text-white/90 leading-relaxed">
                    Every day, our team embodies these values in client interactions, design decisions, 
                    manufacturing processes, and community involvement. It's not just what we do - it's who we are.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}