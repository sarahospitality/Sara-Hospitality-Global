import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  MessageSquare,
  Globe,
  Download,
  ArrowRight
} from "lucide-react";

interface ContactSectionProps {
  onNavigate?: (page: string) => void;
  selectedCountry?: string;
}

export default function ContactSection({ onNavigate, selectedCountry }: ContactSectionProps) {
  try {
    const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1-678-431-9041", "+1-678-431-9041"],
      description: "Mon-Fri 8AM-6PM EST"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@saraglobal.com", "sales@saraglobal.com"],
      description: "24/7 Email Support"
    },
    {
      icon: MapPin,
      title: "Headquarters",
      details: ["Sara Global Hospitality", "1010 MCGINNIS PARK CT, Suite A, SUWANEE, GA 30024"],
      description: "Visit our showroom"
    },
    {
      icon: Globe,
      title: "Global Offices",
      details: ["Dubai • London • Singapore", "Mumbai • Shanghai • Toronto"],
      description: "Worldwide presence"
    }
  ];

  const projectTypes = [
    "New Hotel Development",
    "Hotel Renovation", 
    "Restaurant/Bar",
    "Conference Center",
    "Spa/Wellness Center",
    "Outdoor/Patio Areas",
    "Custom Project"
  ];

  const budgetRanges = [
    "Under $50,000",
    "$50,000 - $100,000", 
    "$100,000 - $250,000",
    "$250,000 - $500,000",
    "$500,000 - $1,000,000",
    "Over $1,000,000"
  ];

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <MessageSquare className="w-4 h-4" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-3">
            Start Your Project
            <span className="text-primary block">With Sara Global</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your hospitality space? Contact our team of experts 
            for a consultation and discover how we can bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:items-stretch">
          {/* Contact Information */}
          <div className="space-y-6 flex flex-col">
            <div>
              <h3 className="text-3xl font-bold mb-6">Contact Information</h3>
              <p className="text-gray-600 mb-8">
                Ready to start your project? Our team is here to help you every step of the way.
              </p>
            </div>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-r from-[#f26d35]/10 to-[#f26d35]/20 text-[#f26d35]">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold mb-2 text-gray-900">Phone</h4>
                  <p className="text-gray-900 mb-1">+1-678-431-9041</p>
                  <p className="text-sm text-[#f26d35]">Mon-Fri 8AM-6PM EST</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-r from-[#f26d35]/10 to-[#f26d35]/20 text-[#f26d35]">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold mb-2 text-gray-900">Email</h4>
                  <p className="text-gray-900 mb-1">info@saraglobal.com</p>
                  <p className="text-gray-900 mb-1">sales@saraglobal.com</p>
                  <p className="text-sm text-[#f26d35]">24/7 Email Support</p>
                </div>
              </div>

              {/* Headquarters */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-r from-[#f26d35]/10 to-[#f26d35]/20 text-[#f26d35]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold mb-2 text-gray-900">Headquarters</h4>
                  <p className="text-gray-900 mb-1">Sara Global Hospitality</p>
                  <p className="text-gray-900 mb-2">1010 MCGINNIS PARK CT, Suite A, SUWANEE, GA 30024</p>
                  <a href="#" className="text-[#f26d35] hover:text-[#f26d35]/80 font-medium">
                    Visit our showroom
                  </a>
                </div>
              </div>

              {/* Global Offices */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-r from-[#f26d35]/10 to-[#f26d35]/20 text-[#f26d35]">
                  <Globe className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold mb-2 text-gray-900">Global Offices</h4>
                  <p className="text-gray-900 mb-2">Dubai • London • Singapore</p>
                  <p className="text-gray-900 mb-2">Mumbai • Shanghai • Toronto</p>
                  <a href="#" className="text-[#f26d35] hover:text-[#f26d35]/80 font-medium">
                    Worldwide presence
                  </a>
                </div>
              </div>
            </div>
            
            {/* Spacer to fill remaining height */}
            <div className="flex-1"></div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="border-0 shadow-2xl bg-gradient-to-br from-white to-gray-50 rounded-lg">
                <div className="pb-3 p-6">
                  <h3 className="flex items-center gap-2 text-2xl font-bold mb-2">
                    <MessageSquare className="w-6 h-6 text-[#f26d35]" />
                    Project Inquiry Form
                  </h3>
                  <p className="text-gray-600">
                    Tell us about your project and we'll get back to you within 24 hours with a detailed proposal.
                  </p>
                </div>
                <div className="space-y-4 p-6">
                  <form className="space-y-4">
                    {/* Name & Email */}
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="flex items-center gap-2 text-sm font-medium text-gray-700">
                          <MessageSquare className="w-4 h-4 text-[#f26d35]" />
                          Name *
                        </Label>
                        <Input 
                          id="name" 
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
                          type="email" 
                          placeholder="your@email.com"
                          className="h-12 bg-gray-50 border-gray-200 focus:ring-2 focus:ring-[#f26d35]/20 rounded-lg px-4"
                        />
                      </div>
                    </div>

                    {/* Phone & Location */}
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="flex items-center gap-2 text-sm font-medium text-gray-700">
                          <Phone className="w-4 h-4 text-[#f26d35]" />
                          Phone Number *
                        </Label>
                        <Input 
                          id="phone" 
                          type="tel" 
                          placeholder="+1-678-431-9041"
                          className="h-12 bg-gray-50 border-gray-200 focus:ring-2 focus:ring-[#f26d35]/20 rounded-lg px-4"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location" className="flex items-center gap-2 text-sm font-medium text-gray-700">
                          <MapPin className="w-4 h-4 text-[#f26d35]" />
                          Location *
                        </Label>
                        <Input 
                          id="location" 
                          placeholder="City, State, Country"
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
                        placeholder="Please describe your project, specific furniture needs, timeline, and any special requirements..."
                        className="w-full h-24 bg-gray-50 border-gray-200 focus:ring-2 focus:ring-[#f26d35]/20 resize-none rounded-lg px-4 py-3"
                      />
                    </div>

                    {/* Interested In Checkboxes */}
                    <div className="space-y-2">
                      <Label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                        <Globe className="w-4 h-4 text-[#f26d35]" />
                        Interested In
                      </Label>
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          'Casegoods',
                          'FF&E',
                          'Reception Items',
                          'Bedroom Furniture',
                          'Restaurant Furniture',
                          'Lobby Items'
                        ].map((interest, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <Checkbox 
                              id={`interest-${index}`}
                              className="border-gray-300 text-[#f26d35] focus:ring-[#f26d35] rounded"
                            />
                            <Label htmlFor={`interest-${index}`} className="text-sm cursor-pointer text-gray-700">
                              {interest}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button 
                      className="w-full bg-[#f26d35] hover:bg-[#f26d35]/90 text-white h-12"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Inquiry
                    </Button>

                    <p className="text-sm text-gray-600 text-center mt-2">
                      We'll review your inquiry and respond within 24 hours with next steps.
                    </p>
                  </form>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  } catch (error) {
    console.error("ContactSection error:", error);
    return (
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Contact Form</h2>
          <p className="text-muted-foreground">Contact form temporarily unavailable. Please try again later.</p>
        </div>
      </section>
    );
  }
}