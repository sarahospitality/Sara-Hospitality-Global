"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Textarea } from "@/components/ui/Textarea";
import { Checkbox } from "@/components/ui/Checkbox";
import { 
  Phone, 
  Mail, 
  MapPin, 
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

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function ContactPage() {
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
      color: "text-[#f26d35]",
      bgColor: "from-[#f26d35]/10 to-[#f26d35]/20"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@saraglobal.com", "sales@saraglobal.com"],
      description: "24/7 Email Support",
      color: "text-[#f26d35]",
      bgColor: "from-[#f26d35]/10 to-[#f26d35]/20"
    },
    {
      icon: MapPin,
      title: "Headquarters",
      details: ["Sara Global Hospitality", "2600 Pleasantdale Rd. Ste 12, Atlanta, GA 30340"],
      description: "Visit our showroom",
      color: "text-[#f26d35]",
      bgColor: "from-[#f26d35]/10 to-[#f26d35]/20"
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-12 bg-gradient-to-br from-[#f26d35]/5 via-gray-50 to-[#f26d35]/10 overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <motion.div 
            className="text-center mb-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 bg-[#f26d35]/10 text-[#f26d35] px-4 py-2 rounded-full mb-6">
                <MessageSquare className="w-4 h-4" />
                <span>Contact Us</span>
              </div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Let&apos;s Discuss Your
                <span className="text-[#f26d35] block">Project Needs</span>
              </h1>
            </motion.div>
            <motion.div variants={itemVariants}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Get in touch with our hospitality furniture experts. We&apos;re here to help you 
                create exceptional spaces that inspire and delight your guests.
              </p>
            </motion.div>
          </motion.div>
          
          {/* Quick Stats */}
          <motion.div 
            className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: <CheckCircle className="w-6 h-6" />, label: "500+ Projects", color: "text-[#f26d35]" },
              { icon: <Globe className="w-6 h-6" />, label: "50+ Countries", color: "text-[#f26d35]" },
              { icon: <Award className="w-6 h-6" />, label: "98% Satisfaction", color: "text-[#f26d35]" },
              { icon: <Calendar className="w-6 h-6" />, label: "24h Response", color: "text-[#f26d35]" }
            ].map((stat, index) => (
              <motion.div key={index} variants={itemVariants} className="flex items-center gap-3 bg-white/80 backdrop-blur rounded-lg p-4 shadow-sm">
                <div className={`${stat.color}`}>{stat.icon}</div>
                <span className="font-medium">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 lg:items-stretch">
            
            {/* Contact Information */}
            <div className="space-y-6 flex flex-col">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
                <p className="text-gray-600 mb-8">
                  Ready to start your project? Our team is here to help you every step of the way.
                </p>
              </motion.div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                        <div className={`h-1 bg-gradient-to-r ${info.bgColor}`}></div>
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r ${info.bgColor} ${info.color}`}>
                              <IconComponent className="w-6 h-6" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold mb-2">{info.title}</h4>
                              {info.details.map((detail, detailIndex) => (
                                <p key={detailIndex} className="text-gray-900 mb-1">
                                  {detail}
                                </p>
                              ))}
                              <p className="text-sm text-gray-600">{info.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
              
              {/* Spacer to fill remaining height */}
              <div className="flex-1"></div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 flex flex-col">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex-1 flex flex-col"
              >
                <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-gray-50 flex-1 flex flex-col">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      <User className="w-6 h-6 text-[#f26d35]" />
                      Project Inquiry Form
                    </CardTitle>
                    <p className="text-gray-600">
                      Tell us about your project and we&apos;ll get back to you within 24 hours with a detailed proposal.
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-3 p-3 flex-1 flex flex-col">
                    <form onSubmit={handleSubmit} className="space-y-3 flex-1 flex flex-col">
                      {/* Name & Email */}
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="flex items-center gap-2">
                            <User className="w-4 h-4 text-[#f26d35]" />
                            Name *
                          </Label>
                          <Input 
                            id="name" 
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter your full name" 
                            className="h-12 bg-gray-50 border-gray-200 focus:ring-2 focus:ring-[#f26d35]/20"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="flex items-center gap-2">
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
                            className="h-12 bg-gray-50 border-gray-200 focus:ring-2 focus:ring-[#f26d35]/20"
                          />
                        </div>
                      </div>

                      {/* Phone & Location */}
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="flex items-center gap-2">
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
                            className="h-12 bg-gray-50 border-gray-200 focus:ring-2 focus:ring-[#f26d35]/20"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="location" className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-[#f26d35]" />
                            Location *
                          </Label>
                          <Input 
                            id="location" 
                            name="location"
                            required
                            value={formData.location}
                            onChange={handleInputChange}
                            placeholder="City, State, Country" 
                            className="h-12 bg-gray-50 border-gray-200 focus:ring-2 focus:ring-[#f26d35]/20"
                          />
                        </div>
                      </div>

                      {/* Message */}
                      <div className="space-y-2">
                        <Label htmlFor="message" className="flex items-center gap-2">
                          <MessageSquare className="w-4 h-4 text-[#f26d35]" />
                          Message from the Client *
                        </Label>
                        <Textarea 
                          id="message" 
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Please describe your project, specific furniture needs, timeline, budget range, and any special requirements..."
                          className="min-h-20 bg-gray-50 border-gray-200 focus:ring-2 focus:ring-[#f26d35]/20 resize-none"
                        />
                      </div>

                      {/* Interests */}
                      <div className="space-y-2">
                        <Label className="flex items-center gap-2">
                          <Building className="w-4 h-4 text-[#f26d35]" />
                          Interested In
                        </Label>
                        <div className="grid grid-cols-3 gap-3">
                          {interestOptions.map((interest, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <Checkbox 
                                id={`interest-${index}`}
                                checked={formData.interests.includes(interest)}
                                onCheckedChange={(checked) => handleInterestChange(interest, checked as boolean)}
                                className="border-gray-300 text-[#f26d35] focus:ring-[#f26d35]"
                              />
                              <Label htmlFor={`interest-${index}`} className="text-sm cursor-pointer">
                                {interest}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Spacer to push button to bottom */}
                      <div className="flex-1"></div>

                      {/* Submit Button */}
                      <Button 
                        type="submit" 
                        size="lg" 
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
                            Send Project Inquiry
                          </>
                        )}
                      </Button>

                      <p className="text-sm text-gray-600 text-center">
                        We&apos;ll review your inquiry and respond within 24 hours with next steps and project details.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-gradient-to-r from-[#f26d35]/5 via-gray-50 to-[#f26d35]/5">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Need More Information?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Explore our portfolio and learn about our company 
              to get started on your hospitality furniture project today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/portfolio">
                <Button size="lg" className="bg-[#f26d35] hover:bg-[#f26d35]/90 text-white">
                  View Our Portfolio
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="border-[#f26d35] text-[#f26d35] hover:bg-[#f26d35]/10">
                  Learn About Us
                  <Globe className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
