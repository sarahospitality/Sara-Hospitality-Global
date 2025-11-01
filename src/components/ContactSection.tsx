"use client";

import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send,
  MessageSquare,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { useInquiryForm } from '@/hooks/useInquiryForm';
import { InquiryCategory } from '@/types/inquiries';

export function ContactSection() {
  const {
    formData,
    errors,
    submissionState,
    updateField,
    submitForm
  } = useInquiryForm();

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
    }
  ];

  return (
    <section id="contact" className="pt-8 pb-16">
      <div className="container mx-auto px-6 sm:px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#f26d35]/10 text-[#f26d35] px-4 py-2 rounded-full mb-4">
            <MessageSquare className="w-4 h-4" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3">
            Start Your Project
            <span className="text-[#f26d35] block">With Sara Global</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
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
                      <div className="w-12 h-12 bg-[#f26d35]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-[#f26d35]" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">{info.title}</h4>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600">
                            {detail}
                          </p>
                        ))}
                        <p className="text-sm text-[#f26d35] mt-1">{info.description}</p>
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
                <p className="text-gray-600">
                  Tell us about your project and we&apos;ll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent className="space-y-6 p-8">
                {/* Success Message */}
                {submissionState.isSuccess && (
                  <div className="bg-green-50 border border-green-200 rounded-md p-4 flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <p className="text-green-800 font-medium">
                      Thank you! Your inquiry has been submitted successfully. We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                )}

                {/* Error Message */}
                {submissionState.isError && (
                  <div className="bg-red-50 border border-red-200 rounded-md p-4 flex items-center space-x-2">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                    <p className="text-red-800 font-medium">
                      {submissionState.errorMessage || 'Failed to submit inquiry. Please try again.'}
                    </p>
                  </div>
                )}

                <form onSubmit={(e) => { e.preventDefault(); submitForm(); }} className="space-y-6" suppressHydrationWarning>
                  {/* Name and Email - Side by side */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Name *</label>
                      <input 
                        id="name" 
                        value={formData.full_name}
                        onChange={(e) => updateField('full_name', e.target.value)}
                        placeholder="Enter your full name"
                        suppressHydrationWarning
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#f26d35] focus:border-transparent ${
                          errors.full_name ? 'border-red-300' : 'border-gray-300'
                        }`}
                      />
                      {errors.full_name && <p className="text-red-600 text-sm">{errors.full_name}</p>}
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email Address *</label>
                      <input 
                        id="email" 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        placeholder="your@email.com"
                        suppressHydrationWarning
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#f26d35] focus:border-transparent ${
                          errors.email ? 'border-red-300' : 'border-gray-300'
                        }`}
                      />
                      {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Phone and Interested In - Side by side */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">Phone Number *</label>
                      <input 
                        id="phone" 
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => updateField('phone', e.target.value)}
                        placeholder="+1-678-431-9041"
                        suppressHydrationWarning
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#f26d35] focus:border-transparent ${
                          errors.phone ? 'border-red-300' : 'border-gray-300'
                        }`}
                      />
                      {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="interested-in" className="text-sm font-medium">Interested In *</label>
                      <div className="relative">
                        <select 
                          id="interested-in" 
                          value={formData.category[0] || ''}
                          onChange={(e) => updateField('category', e.target.value ? [e.target.value as InquiryCategory] : [])}
                          className={`w-full pl-3 pr-12 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#f26d35] focus:border-transparent appearance-none ${
                            errors.category ? 'border-red-300' : 'border-gray-300'
                          }`}
                        >
                          <option value="">Select your interest</option>
                          <option value="Casegoods">Casegoods</option>
                          <option value="FF&E">FF&E</option>
                          <option value="Reception Items">Reception Items</option>
                          <option value="Bedroom Furniture">Bedroom Furniture</option>
                          <option value="Restaurant Furniture">Restaurant Furniture</option>
                          <option value="Lobby Items">Lobby Items</option>
                          <option value="Outdoor Furniture">Outdoor Furniture</option>
                          <option value="Custom Solutions">Custom Solutions</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                      {errors.category && <p className="text-red-600 text-sm">{errors.category}</p>}
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message from the Client *</label>
                    <textarea 
                      id="message" 
                      value={formData.message}
                      onChange={(e) => updateField('message', e.target.value)}
                      placeholder="Please describe your project, specific furniture needs, timeline, and any special requirements..."
                      className={`min-h-[120px] w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#f26d35] focus:border-transparent ${
                        errors.message ? 'border-red-300' : 'border-gray-300'
                      }`}
                    />
                    {errors.message && <p className="text-red-600 text-sm">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-center pt-4">
                    <Button 
                      type="submit"
                      size="lg" 
                      disabled={submissionState.isSubmitting}
                      className={`bg-[#f26d35] hover:bg-[#f26d35]/90 ${submissionState.isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      <Send className="w-4 h-4 mr-2" />
                      {submissionState.isSubmitting ? 'Submitting...' : 'Send Inquiry'}
                    </Button>
                  </div>
                </form>

                
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
