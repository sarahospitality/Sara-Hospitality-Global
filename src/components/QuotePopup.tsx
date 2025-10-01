"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { Send, X } from "lucide-react";

interface QuotePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuotePopup({ isOpen, onClose }: QuotePopupProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interestedIn: "",
    message: ""
  });

  const interestOptions = [
    "Casegoods",
    "FF&E",
    "Reception Items",
    "Bedroom Furniture",
    "Restaurant Furniture",
    "Lobby Items",
    "Outdoor Furniture",
    "Custom Solutions"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    
    // Reset form and close popup
    setFormData({
      name: "",
      email: "",
      phone: "",
      interestedIn: "",
      message: ""
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-6xl w-full max-h-[95vh] overflow-y-auto shadow-xl border border-gray-200">
        <div className="flex flex-col md:flex-row">
          {/* Left Side - Trusted by 1000+ Hoteliers (hide on mobile) */}
          <div className="hidden md:flex md:w-2/5 bg-gray-50 p-6 flex-col justify-center items-center">
            {/* Hotel Brand Logos - At the Very Top */}
            <div className="mb-10">
              <div className="text-center mb-4">
                <h4 className="text-sm font-bold text-gray-700">Trusted by Leading Hotel Brands</h4>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-3">
                <div className="flex-shrink-0">
                  <ImageWithFallback
                    src="/assets/f31b2dfb28307640a195a389e2838f1c2a7dc156.png"
                    alt="La Quinta by Wyndham logo"
                    className="h-6 w-auto object-contain transition-all duration-300 hover:scale-105"
                    width={100}
                    height={24}
                  />
                </div>
                <div className="flex-shrink-0">
                  <ImageWithFallback
                    src="/assets/6e7b3d1f8e168548d6b65e7dd7fb4691d792ff17.png"
                    alt="Holiday Inn Express & Suites logo"
                    className="h-6 w-auto object-contain transition-all duration-300 hover:scale-105"
                    width={100}
                    height={24}
                  />
                </div>
                <div className="flex-shrink-0">
                  <ImageWithFallback
                    src="/assets/1a36f52dfb717910963752bf97e84ab00d9f89e9.png"
                    alt="Quality Inn logo"
                    className="h-6 w-auto object-contain transition-all duration-300 hover:scale-105"
                    width={100}
                    height={24}
                  />
                </div>
                <div className="flex-shrink-0">
                  <ImageWithFallback
                    src="/assets/65e2b4ed424723dae6731b7df90d808c1d793105.png"
                    alt="Baymont by Wyndham logo"
                    className="h-6 w-auto object-contain transition-all duration-300 hover:scale-105"
                    width={100}
                    height={24}
                  />
                </div>
                <div className="flex-shrink-0">
                  <ImageWithFallback
                    src="/assets/d3e30d7d50aff6f76bb0916c50dc15aa2919a066.png"
                    alt="Best Western Plus logo"
                    className="h-6 w-auto object-contain transition-all duration-300 hover:scale-105"
                    width={100}
                    height={24}
                  />
                </div>
                <div className="flex-shrink-0">
                  <ImageWithFallback
                    src="/assets/61636d64a66e87acc43f2e63f91829fa6b8f0dea.png"
                    alt="Days Inn & Suites logo"
                    className="h-6 w-auto object-contain transition-all duration-300 hover:scale-105"
                    width={100}
                    height={24}
                  />
                </div>
              </div>
            </div>

            {/* TRUSTED BY 1000+ HOTELIERS - Below Brand Logos */}
            <div className="text-center mb-8">
              <h2 className="text-lg font-bold text-gray-900 mb-1">
                TRUSTED BY
              </h2>
              <h2 className="text-5xl font-bold text-[#f26d35] mb-1">
                1000+
              </h2>
              <h2 className="text-lg font-bold text-gray-900">
                HOTELIERS
              </h2>
            </div>
            
            {/* Circular Graphic with Profile Pictures */}
            <div className="relative w-64 h-64 mb-6">
              {/* Background Circle with subtle gradient */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 shadow-lg"></div>
              
              {/* Concentric Rings with varying opacity */}
              <div className="absolute inset-3 rounded-full border border-white/90"></div>
              <div className="absolute inset-8 rounded-full border border-white/70"></div>
              <div className="absolute inset-14 rounded-full border border-white/50"></div>
              <div className="absolute inset-20 rounded-full border border-white/40"></div>
              <div className="absolute inset-26 rounded-full border border-white/30"></div>
              <div className="absolute inset-32 rounded-full border border-white/20"></div>
              
              {/* Profile Pictures positioned around the rings */}
              <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-lg">
                <ImageWithFallback src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" alt="Hotelier" className="w-full h-full object-cover" width={100} height={100} />
              </div>
              
              <div className="absolute top-12 right-6 w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-lg">
                <ImageWithFallback src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face" alt="Hotelier" className="w-full h-full object-cover" width={100} height={100} />
              </div>
              
              <div className="absolute top-20 left-6 w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-lg">
                <ImageWithFallback src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" alt="Hotelier" className="w-full h-full object-cover" width={100} height={100} />
              </div>
              
              <div className="absolute top-28 right-10 w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-lg">
                <ImageWithFallback src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face" alt="Hotelier" className="w-full h-full object-cover" width={100} height={100} />
              </div>
              
              <div className="absolute top-36 left-10 w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-lg">
                <ImageWithFallback src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face" alt="Hotelier" className="w-full h-full object-cover" width={100} height={100} />
              </div>
              
              <div className="absolute bottom-20 right-6 w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-lg">
                <ImageWithFallback src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face" alt="Hotelier" className="w-full h-full object-cover" width={100} height={100} />
              </div>
              
              <div className="absolute bottom-12 left-6 w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-lg">
                <ImageWithFallback src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face" alt="Hotelier" className="w-full h-full object-cover" width={100} height={100} />
              </div>
              
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-lg">
                <ImageWithFallback src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face" alt="Hotelier" className="w-full h-full object-cover" width={100} height={100} />
              </div>
            </div>
          </div>

          {/* Right Side - Form (Full width on mobile) */}
          <div className="w-full md:w-3/5">
            {/* Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">
                    FREE INITIAL ESTIMATION
                  </h2>
                  <h3 className="text-lg font-medium text-gray-700 mb-2">
                    Project Inquiry Form
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Tell us about your project and we&apos;ll get back to you within 24 hours.
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 h-8 w-8 p-0"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Form Content */}
            <div className="p-4 sm:p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact Details Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="popup-name" className="text-sm font-medium text-gray-700">
                      Name *
                    </label>
                    <input 
                      id="popup-name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
                      placeholder="Enter your full name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f26d35] focus:border-transparent h-10"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="popup-email" className="text-sm font-medium text-gray-700">
                      Email Address *
                    </label>
                    <input 
                      id="popup-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                      placeholder="your@email.com"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f26d35] focus:border-transparent h-10"
                      required
                    />
                  </div>
                </div>

                {/* Phone and Interested In Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="popup-phone" className="text-sm font-medium text-gray-700">
                      Phone Number *
                    </label>
                    <input 
                      id="popup-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({...prev, phone: e.target.value}))}
                      placeholder="+1-678-431-9041"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f26d35] focus:border-transparent h-10"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="popup-interested-in" className="text-sm font-medium text-gray-700">
                      Interested In *
                    </label>
                    <select 
                      id="popup-interested-in"
                      value={formData.interestedIn}
                      onChange={(e) => setFormData(prev => ({...prev, interestedIn: e.target.value}))}
                      className="w-full pl-3 pr-16 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f26d35] focus:border-transparent h-10"
                      required
                    >
                      <option value="">Select your interest</option>
                      {interestOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label htmlFor="popup-message" className="text-sm font-medium text-gray-700">
                    Message from the Client *
                  </label>
                  <textarea 
                    id="popup-message"
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({...prev, message: e.target.value}))}
                    placeholder="Please describe your project, specific furniture needs, timeline, and any special requirements..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f26d35] focus:border-transparent min-h-[120px] resize-none"
                    required
                  />
                </div>


                {/* reCAPTCHA Section */}
                <div className="space-y-3">
                <div className="flex items-center space-x-2 p-3 border border-gray-300 rounded-md bg-gray-50 overflow-x-auto">
                    <input 
                      type="checkbox"
                      id="recaptcha"
                      className="rounded border-gray-300"
                    />
                    <label htmlFor="recaptcha" className="text-sm text-gray-700 cursor-pointer">
                      I&apos;m not a robot
                    </label>
                    <div className="ml-auto flex items-center space-x-1">
                      <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">re</span>
                      </div>
                      <span className="text-xs text-gray-500">reCAPTCHA</span>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-4">
                  <Button 
                    type="submit"
                    className="bg-[#f26d35] hover:bg-[#f26d35]/90 text-white px-8 py-3 rounded-md font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Inquiry
                  </Button>
                </div>

                
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
