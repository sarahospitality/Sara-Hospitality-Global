import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare,
  User,
  Building,
  ArrowRight,
  CheckCircle,
  Calendar,
  Award,
  Globe
} from "lucide-react";

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export default function ContactPage({ onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
    interests: [] as string[]
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleInterestChange = (interest: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      interests: checked 
        ? [...prev.interests, interest]
        : prev.interests.filter(i => i !== interest)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert("Thank you for your inquiry! We'll get back to you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      location: "",
      message: "",
      interests: []
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1-678-431-9041"],
      description: "Mon-Fri 8AM-6PM EST",
      color: "text-primary",
      bgColor: "from-primary/10 to-primary/20"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@saraglobal.com", "sales@saraglobal.com"],
      description: "24/7 Email Support",
      color: "text-primary",
      bgColor: "from-primary/10 to-primary/20"
    },
    {
      icon: MapPin,
      title: "Headquarters",
      details: ["Sara Global Hospitality", "2600 Pleasantdale Rd. Ste 12, Atlanta, GA 30340"],
      description: "Visit our showroom",
      color: "text-primary",
      bgColor: "from-primary/10 to-primary/20"
    }
  ];

  const interestOptions = [
    "Casegoods",
    "FF&E",
    "Lobby Items", 
    "Reception Items",
    "Bedroom Furniture",
    "Restaurant Furniture",
    "Outdoor Furniture",
    "Custom Solutions"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-12 bg-gradient-to-br from-primary/5 via-accent/30 to-primary/10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <MessageSquare className="w-4 h-4" />
              <span>Contact Us</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Let's Discuss Your
              <span className="text-primary block">Project Needs</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Get in touch with our hospitality furniture experts. We're here to help you 
              create exceptional spaces that inspire and delight your guests.
            </p>
          </div>
          
          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: <CheckCircle className="w-6 h-6" />, label: "500+ Projects", color: "text-primary" },
              { icon: <Globe className="w-6 h-6" />, label: "50+ Countries", color: "text-primary" },
              { icon: <Award className="w-6 h-6" />, label: "98% Satisfaction", color: "text-primary" },
              { icon: <Calendar className="w-6 h-6" />, label: "24h Response", color: "text-primary" }
            ].map((stat, index) => (
              <div key={index} className="flex items-center gap-3 bg-white/80 backdrop-blur rounded-lg p-4 shadow-sm">
                <div className={`${stat.color}`}>{stat.icon}</div>
                <span className="font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Ready to start your project? Our team is here to help you every step of the way.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                      <div className={`h-1 bg-gradient-to-r ${info.bgColor}`}></div>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r ${info.bgColor} ${info.color}`}>
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold mb-2">{info.title}</h4>
                            {info.details.map((detail, detailIndex) => (
                              <p key={detailIndex} className="text-foreground mb-1">
                                {detail}
                              </p>
                            ))}
                            <p className="text-sm text-muted-foreground">{info.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Business Hours */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-accent/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium text-primary">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium text-primary">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-muted-foreground">Closed</span>
                  </div>
                  <div className="pt-3 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      All times EST. Emergency support available 24/7 for existing projects.
                    </p>
                  </div>
                </CardContent>
              </Card>


            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-accent/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <User className="w-6 h-6 text-primary" />
                    Project Inquiry Form
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Tell us about your project and we'll get back to you within 24 hours with a detailed proposal.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <Label htmlFor="name" className="flex items-center gap-2">
                        <User className="w-4 h-4 text-primary" />
                        Full Name *
                      </Label>
                      <Input 
                        id="name" 
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name" 
                        className="h-12 bg-input-background border-0 focus:ring-2 focus:ring-primary/20"
                      />
                    </div>

                    {/* Email & Phone */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-primary" />
                          Email Address *
                        </Label>
                        <Input 
                          id="email" 
                          name="email"
                          type="email" 
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com" 
                          className="h-12 bg-input-background border-0 focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-primary" />
                          Phone Number *
                        </Label>
                        <Input 
                          id="phone" 
                          name="phone"
                          type="tel" 
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1-678-431-9041" 
                          className="h-12 bg-input-background border-0 focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                    </div>

                    {/* Location */}
                    <div className="space-y-2">
                      <Label htmlFor="location" className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        Project Location *
                      </Label>
                      <Input 
                        id="location" 
                        name="location"
                        required
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="City, State, Country" 
                        className="h-12 bg-input-background border-0 focus:ring-2 focus:ring-primary/20"
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message" className="flex items-center gap-2">
                        <MessageSquare className="w-4 h-4 text-primary" />
                        Project Details *
                      </Label>
                      <Textarea 
                        id="message" 
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Please describe your project, specific furniture needs, timeline, budget range, and any special requirements..."
                        className="min-h-32 bg-input-background border-0 focus:ring-2 focus:ring-primary/20 resize-none"
                      />
                    </div>

                    {/* Interests */}
                    <div className="space-y-4">
                      <Label className="flex items-center gap-2">
                        <Building className="w-4 h-4 text-primary" />
                        Interested In (Select all that apply)
                      </Label>
                      <div className="grid md:grid-cols-2 gap-4">
                        {interestOptions.map((interest, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <Checkbox 
                              id={`interest-${index}`}
                              checked={formData.interests.includes(interest)}
                              onCheckedChange={(checked: boolean) => handleInterestChange(interest, checked)}
                            />
                            <Label htmlFor={`interest-${index}`} className="text-sm cursor-pointer">
                              {interest}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>



                    {/* Submit Button */}
                    <Button 
                      type="submit" 
                      size="lg" 
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin mr-2"></div>
                          Sending Inquiry...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Project Inquiry
                        </>
                      )}
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      We'll review your inquiry and respond within 24 hours with next steps and project details.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-gradient-to-r from-primary/5 via-accent/50 to-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Need More Information?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Explore our portfolio and learn about our company 
            to get started on your hospitality furniture project today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => onNavigate("portfolio")} className="bg-primary hover:bg-primary/90 text-primary-foreground">
              View Our Portfolio
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => onNavigate("about")}>
              Learn About Us
              <Globe className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}