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
    
    alert("Enquiry submitted successfully! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Our Showroom",
      content: "1010 MCGINNIS PARK CT, Suite A",
      subcontent: "SUWANEE, GA 30024, USA",
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
          <div className="grid lg:grid-cols-3 gap-8 lg:items-stretch">
            
            {/* Contact Information */}
            <div className="space-y-6 flex flex-col">
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-8">
                  Ready to start your project? Our team is here to help you every step of the way.
                </p>
              </div>

              <div className="space-y-6">
                {/* Phone */}
                <div className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-white rounded-lg">
                  <div className="h-1 bg-gradient-to-r from-[#f26d35]/10 to-[#f26d35]/20"></div>
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-[#f26d35]/10 to-[#f26d35]/20 text-[#f26d35]">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold mb-2">Phone</h4>
                        <p className="text-gray-900 mb-1">+1-678-431-9041</p>
                        <p className="text-sm text-gray-600">Mon-Fri 8AM-6PM EST</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-white rounded-lg">
                  <div className="h-1 bg-gradient-to-r from-[#f26d35]/10 to-[#f26d35]/20"></div>
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-[#f26d35]/10 to-[#f26d35]/20 text-[#f26d35]">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold mb-2">Email</h4>
                        <p className="text-gray-900 mb-1">info@saraglobal.com</p>
                        <p className="text-gray-900 mb-1">sales@saraglobal.com</p>
                        <p className="text-sm text-gray-600">24/7 Email Support</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Headquarters */}
                <div className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-white rounded-lg">
                  <div className="h-1 bg-gradient-to-r from-[#f26d35]/10 to-[#f26d35]/20"></div>
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-[#f26d35]/10 to-[#f26d35]/20 text-[#f26d35]">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold mb-2">Headquarters</h4>
                        <p className="text-gray-900 mb-1">Sara Global Hospitality</p>
                        <p className="text-gray-900 mb-2">1010 MCGINNIS PARK CT, Suite A, SUWANEE, GA 30024</p>
                        <a href="#" className="text-[#f26d35] hover:text-[#f26d35]/80 font-medium">
                          Visit our showroom
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Global Offices */}
                <div className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-white rounded-lg">
                  <div className="h-1 bg-gradient-to-r from-[#f26d35]/10 to-[#f26d35]/20"></div>
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-[#f26d35]/10 to-[#f26d35]/20 text-[#f26d35]">
                        <Globe className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold mb-2">Global Offices</h4>
                        <p className="text-gray-900 mb-2">Dubai • London • Singapore</p>
                        <p className="text-gray-900 mb-2">Mumbai • Shanghai • Toronto</p>
                        <a href="#" className="text-[#f26d35] hover:text-[#f26d35]/80 font-medium">
                          Worldwide presence
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Spacer to fill remaining height */}
              <div className="flex-1"></div>
            </div>

            {/* Enquiry Form */}
            <div className="lg:col-span-2 flex flex-col">
              <div className="flex-1 flex flex-col">
                <div className="border-0 shadow-2xl bg-gradient-to-br from-white to-gray-50 flex-1 flex flex-col rounded-lg">
                  <div className="pb-3 p-6">
                    <h3 className="flex items-center gap-2 text-2xl font-bold mb-2">
                      <User className="w-6 h-6 text-[#f26d35]" />
                      Project Inquiry Form
                    </h3>
                    <p className="text-gray-600">
                      Tell us about your project and we'll get back to you within 24 hours with a detailed proposal.
                    </p>
                  </div>
                  <div className="space-y-3 p-3 flex-1 flex flex-col">
                    <form onSubmit={handleSubmit} className="space-y-3 flex-1 flex flex-col">
                      {/* Name & Email */}
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="flex items-center gap-2 text-sm font-medium text-gray-700">
                            <User className="w-4 h-4 text-[#f26d35]" />
                            Name *
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter your full name"
                            className="h-12 bg-gray-50 border-gray-200 focus:ring-2 focus:ring-[#f26d35]/20 rounded-lg px-4"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-gray-700">
                            <Mail className="w-4 h-4 text-[#f26d35]" />
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
                            className="h-12 bg-gray-50 border-gray-200 focus:ring-2 focus:ring-[#f26d35]/20 rounded-lg px-4"
                          />
                        </div>
                      </div>

                      {/* Phone & Subject */}
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="flex items-center gap-2 text-sm font-medium text-gray-700">
                            <Phone className="w-4 h-4 text-[#f26d35]" />
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
                            className="h-12 bg-gray-50 border-gray-200 focus:ring-2 focus:ring-[#f26d35]/20 rounded-lg px-4"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject" className="flex items-center gap-2 text-sm font-medium text-gray-700">
                            <Building className="w-4 h-4 text-[#f26d35]" />
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
                            className="h-12 bg-gray-50 border-gray-200 focus:ring-2 focus:ring-[#f26d35]/20 rounded-lg px-4"
                          />
                        </div>
                      </div>

                      {/* Message - Full Width */}
                      <div className="space-y-2">
                        <Label htmlFor="message" className="flex items-center gap-2 text-sm font-medium text-gray-700">
                          <MessageSquare className="w-4 h-4 text-[#f26d35]" />
                          Message from the Client *
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Please describe your project, specific furniture needs, timeline, and any special requirements..."
                          className="w-full h-24 bg-gray-50 border-gray-200 focus:ring-2 focus:ring-[#f26d35]/20 resize-none rounded-lg px-4 py-3"
                        />
                      </div>

                      {/* Spacer to push button to bottom */}
                      <div className="flex-1"></div>

                      {/* Submit Button */}
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-[#f26d35] hover:bg-[#f26d35]/90 text-white h-12"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin mr-2"></div>
                            Sending Inquiry...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Send Inquiry
                          </>
                        )}
                      </Button>

                      <p className="text-sm text-gray-600 text-center">
                        We'll review your inquiry and respond within 24 hours with next steps.
                      </p>
                    </form>
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