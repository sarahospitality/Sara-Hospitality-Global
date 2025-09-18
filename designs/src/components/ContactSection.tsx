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
      details: ["Sara Global Hospitality", "2600 Pleasantdale Rd. Ste 12, Atlanta, GA 30340"],
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

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">{info.title}</h4>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                        <p className="text-sm text-primary mt-1">{info.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>Project Inquiry Form</CardTitle>
                <p className="text-muted-foreground">
                  Tell us about your project and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent className="space-y-6 p-8">
                {/* Name and Email - Side by side */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input 
                      id="name" 
                      placeholder="Enter your full name"
                      className="w-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your@email.com"
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Phone and Location - Side by side */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="+1-678-431-9041"
                      className="w-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location *</Label>
                    <Input 
                      id="location" 
                      placeholder="City, State, Country"
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <Label htmlFor="message">Message from the Client *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Please describe your project, specific furniture needs, timeline, and any special requirements..."
                    className="min-h-[120px] w-full"
                  />
                </div>

                {/* Interested In Checkboxes */}
                <div className="space-y-4">
                  <Label>Interested In</Label>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      "Casegoods",
                      "FF&E",
                      "Reception Items",
                      "Bedroom Furniture",
                      "Restaurant Furniture",
                      "Lobby Items",
                      "Outdoor Furniture",
                      "Custom Solutions"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Checkbox id={`interest-${index}`} />
                        <Label htmlFor={`interest-${index}`} className="text-sm cursor-pointer">{item}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    <Send className="w-4 h-4 mr-2" />
                    Send Inquiry
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground text-center">
                  We'll review your inquiry and respond within 24 hours with next steps.
                </p>
              </CardContent>
            </Card>
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