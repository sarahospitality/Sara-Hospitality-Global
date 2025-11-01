"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { Send, X, CheckCircle, AlertCircle } from "lucide-react";
import { useInquiryForm } from "@/hooks/useInquiryForm";
import { InquiryCategory } from "@/types/inquiries";

interface QuotePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuotePopup({ isOpen, onClose }: QuotePopupProps) {
  const {
    formData,
    errors,
    submissionState,
    updateField,
    toggleCategory,
    submitForm,
    resetForm
  } = useInquiryForm();

  const interestOptions: InquiryCategory[] = [
    "Casegoods",
    "FF&E",
    "Reception Items",
    "Bedroom Furniture",
    "Restaurant Furniture",
    "Lobby Items",
    "Outdoor Furniture",
    "Custom Solutions"
  ];

  // Reset form when popup closes
  useEffect(() => {
    if (!isOpen) {
      // Reset form when closing
      setTimeout(() => {
        resetForm();
      }, 300);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  // Close popup after successful submission
  useEffect(() => {
    if (submissionState.isSuccess) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [submissionState.isSuccess, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('QuotePopup: Form submitted');
    console.log('QuotePopup: Current formData:', formData);
    console.log('QuotePopup: Current errors:', errors);
    
    const success = await submitForm();
    console.log('QuotePopup: Submit result:', success);
    console.log('QuotePopup: Updated errors after submit:', errors);
    console.log('QuotePopup: Submission state:', submissionState);
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
                    src="/assets/laquinta-5.png"
                    alt="La Quinta by Wyndham logo"
                    className="h-6 w-auto object-contain transition-all duration-300 hover:scale-105"
                    width={100}
                    height={24}
                  />
                </div>
                <div className="flex-shrink-0">
                  <ImageWithFallback
                    src="/assets/bestwesternplus-3.png"
                    alt="Best Western Plus logo"
                    className="h-6 w-auto object-contain transition-all duration-300 hover:scale-105"
                    width={100}
                    height={24}
                  />
                </div>
                <div className="flex-shrink-0">
                  <ImageWithFallback
                    src="/assets/qualityinn-1.png"
                    alt="Quality Inn logo"
                    className="h-6 w-auto object-contain transition-all duration-300 hover:scale-105"
                    width={100}
                    height={24}
                  />
                </div>
                <div className="flex-shrink-0">
                  <ImageWithFallback
                    src="/assets/baymont-2.png"
                    alt="Baymont by Wyndham logo"
                    className="h-6 w-auto object-contain transition-all duration-300 hover:scale-105"
                    width={100}
                    height={24}
                  />
                </div>
                <div className="flex-shrink-0">
                  <ImageWithFallback
                    src="/assets/daysinn-4.png"
                    alt="Days Inn & Suites logo"
                    className="h-6 w-auto object-contain transition-all duration-300 hover:scale-105"
                    width={100}
                    height={24}
                  />
                </div>
                <div className="flex-shrink-0">
                  <ImageWithFallback
                    src="/assets/laquinta-6.png"
                    alt="La Quinta by Wyndham logo"
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
              {/* Success Message */}
              {submissionState.isSuccess && (
                <div className="bg-green-50 border border-green-200 rounded-md p-4 flex items-center space-x-2 mb-6">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="text-green-800 font-medium">
                      Thank you! Your inquiry has been submitted successfully. We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {submissionState.isError && (
                <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-6">
                  <div className="flex items-start space-x-2">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-red-800 font-medium mb-1">
                        Failed to submit inquiry
                      </p>
                      <p className="text-red-700 text-sm">
                        {submissionState.errorMessage || 'An unexpected error occurred. Please try again or contact us directly.'}
                      </p>
                      <p className="text-red-600 text-xs mt-2">
                        If this problem persists, please contact us at{" "}
                        <a href="mailto:sales@sarahospitalityusa.com" className="underline font-medium">
                          sales@sarahospitalityusa.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {!submissionState.isSuccess && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Contact Details Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="popup-name" className="text-sm font-medium text-gray-700">
                        Name *
                      </label>
                      <input 
                        id="popup-name"
                        value={formData.full_name}
                        onChange={(e) => updateField('full_name', e.target.value)}
                        placeholder="Enter your full name"
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#f26d35] focus:border-transparent h-10 ${
                          errors.full_name ? 'border-red-300' : 'border-gray-300'
                        }`}
                      />
                      {errors.full_name && <p className="text-red-600 text-sm">{errors.full_name}</p>}
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="popup-email" className="text-sm font-medium text-gray-700">
                        Email Address *
                      </label>
                      <input 
                        id="popup-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        placeholder="your@email.com"
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#f26d35] focus:border-transparent h-10 ${
                          errors.email ? 'border-red-300' : 'border-gray-300'
                        }`}
                      />
                      {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Phone Number and Interested In - Side by side */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="popup-phone" className="text-sm font-medium text-gray-700">
                        Phone Number *
                      </label>
                      <input 
                        id="popup-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateField('phone', e.target.value)}
                        placeholder="+1-678-431-9041"
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#f26d35] focus:border-transparent h-10 ${
                          errors.phone ? 'border-red-300' : 'border-gray-300'
                        }`}
                      />
                      {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="popup-interested-in" className="text-sm font-medium text-gray-700">
                        Interested In *
                      </label>
                      <div className="relative">
                        <select 
                          id="popup-interested-in"
                          value={formData.category[0] || ''}
                          onChange={(e) => updateField('category', e.target.value ? [e.target.value as InquiryCategory] : [])}
                          className={`w-full pl-3 pr-12 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#f26d35] focus:border-transparent appearance-none h-10 ${
                            errors.category ? 'border-red-300' : 'border-gray-300'
                          }`}
                        >
                          <option value="">Select your interest</option>
                          {interestOptions.map((option) => (
                            <option key={option} value={option}>{option}</option>
                          ))}
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
                    <label htmlFor="popup-message" className="text-sm font-medium text-gray-700">
                      Message from the Client *
                    </label>
                    <textarea 
                      id="popup-message"
                      value={formData.message}
                      onChange={(e) => updateField('message', e.target.value)}
                      placeholder="Please describe your project, specific furniture needs, timeline, and any special requirements..."
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#f26d35] focus:border-transparent min-h-[120px] resize-none ${
                        errors.message ? 'border-red-300' : 'border-gray-300'
                      }`}
                    />
                    {errors.message && <p className="text-red-600 text-sm">{errors.message}</p>}
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
                      disabled={submissionState.isSubmitting}
                      className={`bg-[#f26d35] hover:bg-[#f26d35]/90 text-white px-8 py-3 rounded-md font-medium shadow-lg hover:shadow-xl transition-all duration-300 ${
                        submissionState.isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      <Send className="w-4 h-4 mr-2" />
                      {submissionState.isSubmitting ? 'Submitting...' : 'Send Inquiry'}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
