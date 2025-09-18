import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  ArrowRight, 
  Clock, 
  CheckCircle,
  MessageSquare,
  User,
  Globe,
  Building
} from "lucide-react";
import { toast } from "sonner@2.0.3";

interface EnquiryPageProps {
  onNavigate: (page: string) => void;
}

export default function EnquiryPage({ onNavigate }: EnquiryPageProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success("Enquiry submitted successfully! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Our Showroom",
      content: "2600 Pleasantdale Rd. Ste 12",
      subcontent: "Atlanta, GA 30340, USA",
      color: "text-blue-600",
      bgColor: "from-blue-500/10 to-blue-600/20"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us Today",
      content: "+1-678-431-9041",
      subcontent: "Mon-Fri: 9AM-6PM EST",
      color: "text-green-600",
      bgColor: "from-green-500/10 to-green-600/20"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      content: "info@saraglobal.com",
      subcontent: "We respond within 24 hours",
      color: "text-purple-600",
      bgColor: "from-purple-500/10 to-purple-600/20"
    }
  ];

  const features = [
    {
      icon: <CheckCircle className="w-5 h-5 text-primary" />,
      text: "Free consultation and design assessment"
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-primary" />,
      text: "Custom furniture solutions for your space"
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-primary" />,
      text: "Global manufacturing and delivery"
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-primary" />,
      text: "24/7 project support and assistance"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-accent/30 to-primary/10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <MessageSquare className="w-4 h-4" />
              <span>Get In Touch</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Ready to Transform Your
              <span className="text-primary block">Hospitality Space?</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Tell us about your furniture needs and let our experts create a custom solution 
              that perfectly matches your vision and requirements.
            </p>
          </div>
          
          {/* Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 bg-white/80 backdrop-blur rounded-lg p-4 shadow-sm">
                {feature.icon}
                <span className="text-sm text-muted-foreground">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Enquiry Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">Send Us Your Enquiry</h2>
                <p className="text-xl text-muted-foreground">
                  Fill out the form below and our furniture experts will get back to you 
                  with a personalized solution within 24 hours.
                </p>
              </div>

              <Card className="shadow-2xl border-0 bg-gradient-to-br from-white to-accent/20">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div className="space-y-2">
                      <Label htmlFor="name" className="flex items-center gap-2">
                        <User className="w-4 h-4 text-primary" />
                        Your Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="h-12 bg-input-background border-0 focus:ring-2 focus:ring-primary/20"
                      />
                    </div>

                    {/* Email Field */}
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
                        placeholder="your.email@example.com"
                        className="h-12 bg-input-background border-0 focus:ring-2 focus:ring-primary/20"
                      />
                    </div>

                    {/* Phone Field */}
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
                        placeholder="+1 (555) 123-4567"
                        className="h-12 bg-input-background border-0 focus:ring-2 focus:ring-primary/20"
                      />
                    </div>

                    {/* Subject Field */}
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="flex items-center gap-2">
                        <Building className="w-4 h-4 text-primary" />
                        Subject *
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="e.g., Hotel Lobby Furniture Enquiry"
                        className="h-12 bg-input-background border-0 focus:ring-2 focus:ring-primary/20"
                      />
                    </div>

                    {/* Message Field */}
                    <div className="space-y-2">
                      <Label htmlFor="message" className="flex items-center gap-2">
                        <MessageSquare className="w-4 h-4 text-primary" />
                        Your Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your project requirements, space dimensions, style preferences, budget range, and any specific needs..."
                        className="min-h-32 bg-input-background border-0 focus:ring-2 focus:ring-primary/20 resize-none"
                      />
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
                          Sending Enquiry...
                        </>
                      ) : (
                        <>
                          Send Enquiry
                          <Send className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      By submitting this form, you agree to our privacy policy and terms of service.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Right Side Content */}
            <div className="space-y-8">
              
              {/* Furniture Showcase */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/20 rounded-3xl transform rotate-3"></div>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1675518544582-6706988d16bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGZ1cm5pdHVyZSUyMHNob3dyb29tfGVufDF8fHx8MTc1NzMyODE5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Sara Global Hospitality Furniture Showroom"
                  className="relative z-10 w-full h-80 object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl z-20 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Premium Hospitality Furniture</h3>
                    <p className="text-white/90 text-sm">Custom-designed solutions for luxury hotels and resorts worldwide</p>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                      <div className={`h-1 bg-gradient-to-r ${info.bgColor}`}></div>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r ${info.bgColor} ${info.color}`}>
                            {info.icon}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold mb-1">{info.title}</h4>
                            <p className="text-foreground mb-1">{info.content}</p>
                            <p className="text-sm text-muted-foreground">{info.subcontent}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Business Hours */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-accent/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-6 h-6 text-primary" />
                    <h4 className="text-xl font-bold">Business Hours</h4>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-medium">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-medium text-muted-foreground">Closed</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <p className="text-sm text-muted-foreground">
                      Emergency support available 24/7 for existing projects
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Alternative Furniture Image */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-l from-accent/20 to-primary/10 rounded-3xl transform -rotate-2"></div>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1750306957820-f778b67c4e13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBmdXJuaXR1cmUlMjBkZXNpZ258ZW58MXx8fHwxNzU3MzI4MTk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Modern Office Furniture Design"
                  className="relative z-10 w-full h-64 object-cover rounded-3xl shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-3xl z-20 flex items-end">
                  <div className="p-4 text-white">
                    <p className="text-white/90 text-sm">Modern workspace solutions tailored to your brand</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/5 via-accent/50 to-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Why Choose Sara Global Hospitality?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            With 500+ successful projects across 50+ countries, we're the trusted partner 
            for hospitality furniture solutions worldwide.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>

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