"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Star } from "lucide-react";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import Link from "next/link";
import { PortfolioItem } from "@/lib/portfolio";

interface PortfolioSectionsProps {
  project: PortfolioItem;
}

export function SeeWhatGuestSaySection({ project }: PortfolioSectionsProps) {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8 sm:mb-12 lg:mb-16 px-2">
          See What Guest Say
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
          {/* Screenshot Testimonial 1 */}
          <div className="relative group">
            <div className="bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden" style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)' }}>
              {/* Screenshot Header */}
              <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="text-xs text-gray-500 font-mono">Review</div>
              </div>
              
              {/* Review Content */}
              <div className="p-4 sm:p-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="relative flex-shrink-0">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBiYWNrJTIwdmlldyUyMHdhdGVyfGVufDF8fHx8MTc1NzAwMzAzNXww&ixlib=rb-4.1.0&q=80&w=400"
                      alt="Guest profile"
                      width={64}
                      height={64}
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-gray-100"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 sm:w-6 sm:h-6 bg-orange-500 rounded-full flex items-center justify-center border-2 border-white">
                      <Star className="w-2 h-2 sm:w-3 sm:h-3 text-white fill-current" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex space-x-1">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                        ))}
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 text-gray-300" />
                      </div>
                      <span className="text-xs text-gray-500">2 weeks ago</span>
                    </div>
                    <p className="text-sm sm:text-base text-gray-800 leading-relaxed font-medium">
                      &ldquo;Pool, <span className="font-bold text-gray-900">hot tub</span>, decent <span className="font-bold text-gray-900">breakfast</span> with eggs, sausage, cereal, <span className="font-bold text-gray-900">waffles</span>, <span className="font-bold text-gray-900">coffee</span>.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Screenshot Testimonial 2 */}
          <div className="relative group">
            <div className="bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden" style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)' }}>
              {/* Screenshot Header */}
              <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="text-xs text-gray-500 font-mono">Review</div>
              </div>
              
              {/* Review Content */}
              <div className="p-4 sm:p-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="relative flex-shrink-0">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGJsb25kZSUyMGhhaXIlMjByZWQlMjBoYXR8ZW58MXx8fHwxNzU3MDAzMDM1fDA&ixlib=rb-4.1.0&q=80&w=400"
                      alt="Guest profile"
                      width={64}
                      height={64}
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-gray-100"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 sm:w-6 sm:h-6 bg-orange-500 rounded-full flex items-center justify-center border-2 border-white">
                      <Star className="w-2 h-2 sm:w-3 sm:h-3 text-white fill-current" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">1 month ago</span>
                    </div>
                    <p className="text-sm sm:text-base text-gray-800 leading-relaxed font-medium">
                      &ldquo;<span className="font-bold text-gray-900">Easy access</span> to the main drag for <span className="font-bold text-gray-900">food</span> and <span className="font-bold text-gray-900">shopping</span>.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Screenshot Testimonial 3 - Centered */}
        <div className="flex justify-center">
          <div className="relative group max-w-md w-full">
            <div className="bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden" style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)' }}>
              {/* Screenshot Header */}
              <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="text-xs text-gray-500 font-mono">Review</div>
              </div>
              
              {/* Review Content */}
              <div className="p-4 sm:p-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="relative flex-shrink-0">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBiZWFjaCUyMHdhdGVyfGVufDF8fHx8MTc1NzAwMzAzNXww&ixlib=rb-4.1.0&q=80&w=400"
                      alt="Guest profile"
                      width={64}
                      height={64}
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-gray-100"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 sm:w-6 sm:h-6 bg-orange-500 rounded-full flex items-center justify-center border-2 border-white">
                      <Star className="w-2 h-2 sm:w-3 sm:h-3 text-white fill-current" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">3 weeks ago</span>
                    </div>
                    <p className="text-sm sm:text-base text-gray-800 leading-relaxed font-medium">
                      &ldquo;Very very clean <span className="font-bold text-gray-900">facility</span> wonderful <span className="font-bold text-gray-900">staff</span> cheapest <span className="font-bold text-gray-900">price</span> in town&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhatOurClientSaySection({ project }: PortfolioSectionsProps) {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 px-2">
          What Our Client Say About Our Work
        </h2>
        
        {/* 5 Golden Stars */}
        <div className="flex justify-center space-x-1 sm:space-x-2 mb-4 sm:mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 fill-current" />
          ))}
        </div>
        
        {/* Best Quality Furniture */}
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 px-2">
          Best Quality Furniture
        </h3>
        
        {/* Lorem Ipsum Text */}
        <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-8 sm:mb-12 leading-relaxed px-2">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here&apos;.
        </p>
        
        {/* Client Information */}
        <div className="flex items-center justify-center space-x-3 sm:space-x-4">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-xs sm:text-sm">{project.brandName?.charAt(0) || 'LQ'}</span>
          </div>
          <div className="text-left">
            <p className="text-orange-500 font-bold text-base sm:text-lg">Mark Frinch</p>
            <p className="text-gray-600 text-sm sm:text-base">{project.brandName || 'LaQuinta Inn'}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HospitalityBuyingGuideSection({ project }: PortfolioSectionsProps) {
  const [activeGuideItem, setActiveGuideItem] = useState(0);

  return (
    <section className="pt-8 sm:pt-12 lg:pt-16 pb-4 sm:pb-6 lg:pb-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8 sm:mb-12 lg:mb-16 px-2">
          Hospitality Buying Guide for Hotel Owners
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Left Column - Guide Points */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {/* Guide Point 1 */}
            <div 
              className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                activeGuideItem === 0 
                  ? 'border-orange-500 bg-orange-50' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setActiveGuideItem(0)}
            >
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                  activeGuideItem === 0 ? 'bg-orange-500' : 'bg-gray-500'
                }`}>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-1 sm:mb-2">
                    How to Choose the Right Hotel Design
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Strategic design selection that aligns with your brand identity and guest expectations for optimal hospitality experience.
                  </p>
                </div>
              </div>
            </div>

            {/* Guide Point 2 */}
            <div 
              className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                activeGuideItem === 1 
                  ? 'border-orange-500 bg-orange-50' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setActiveGuideItem(1)}
            >
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                  activeGuideItem === 1 ? 'bg-orange-500' : 'bg-gray-500'
                }`}>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a2 2 0 114 0 2 2 0 01-4 0zm8 0a2 2 0 114 0 2 2 0 01-4 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-1 sm:mb-2">
                    Bulk order vs. custom manufacturing
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Understanding procurement strategies to balance cost-effectiveness with customization for your unique requirements.
                  </p>
                </div>
              </div>
            </div>

            {/* Guide Point 3 */}
            <div 
              className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                activeGuideItem === 2 
                  ? 'border-orange-500 bg-orange-50' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setActiveGuideItem(2)}
            >
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                  activeGuideItem === 2 ? 'bg-orange-500' : 'bg-gray-500'
                }`}>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-1 sm:mb-2">
                    Key considerations: durability, cleaning, guest experience, budget
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Comprehensive evaluation framework covering all critical factors for successful furniture investment decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Dynamic Content */}
          <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
            {activeGuideItem === 0 && (
              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  How to Choose the Right Hotel Design
                </h3>
                <p className="text-orange-500 font-semibold mb-4 sm:mb-6 text-sm sm:text-base">Design Selection Excellence</p>
                <div className="space-y-3 sm:space-y-4 text-gray-600 text-xs sm:text-sm lg:text-base">
                  <p>
                    Consider your hotel&apos;s brand identity and target guest demographics to aligns with your overall aesthetic vision and guest expectations.
                  </p>
                  <p>
                    Evaluate space constraints and traffic patterns to ensure optimal furniture placement that enhances guest flow and comfort throughout your property.
                  </p>
                  <p>
                    Choose versatile designs that can adapt to different spaces - from intimate conversation areas to large gatherings - maximizing your investment&apos;s functionality.
                  </p>
                </div>
                <Link href="/contact" className="inline-block mt-6 sm:mt-8">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-lg flex items-center text-sm sm:text-base">
                    Get Expert Consultation
                    <ArrowRight className="w-4 h-4 ml-2 animate-pulse" style={{ animation: 'arrowMove 2s ease-in-out infinite' }} />
                  </Button>
                </Link>
              </div>
            )}

            {activeGuideItem === 1 && (
              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Bulk Order vs. Custom Manufacturing
                </h3>
                <p className="text-orange-500 font-semibold mb-4 sm:mb-6 text-sm sm:text-base">Procurement Strategy Excellence</p>
                <div className="space-y-3 sm:space-y-4 text-gray-600 text-xs sm:text-sm lg:text-base">
                  <p>
                    Bulk orders offer cost advantages and faster delivery times, ideal for standard configurations and high-volume requirements across multiple properties.
                  </p>
                  <p>
                    Custom manufacturing provides unique design solutions tailored to your specific brand requirements, ensuring perfect alignment with your hospitality vision.
                  </p>
                  <p>
                    Evaluate your timeline, budget constraints, and design requirements to determine the optimal procurement approach for your furniture investment.
                  </p>
                </div>
                <Link href="/contact" className="inline-block mt-6 sm:mt-8">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-lg flex items-center text-sm sm:text-base">
                    Get Expert Consultation
                    <ArrowRight className="w-4 h-4 ml-2 animate-pulse" style={{ animation: 'arrowMove 2s ease-in-out infinite' }} />
                  </Button>
                </Link>
              </div>
            )}

            {activeGuideItem === 2 && (
              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Key Considerations: Durability, Cleaning, Guest Experience, Budget
                </h3>
                <p className="text-orange-500 font-semibold mb-4 sm:mb-6 text-sm sm:text-base">Investment Framework Excellence</p>
                <div className="space-y-3 sm:space-y-4 text-gray-600 text-xs sm:text-sm lg:text-base">
                  <p>
                    Prioritize durability and quality materials that withstand high-traffic hospitality environments while maintaining aesthetic appeal and comfort standards.
                  </p>
                  <p>
                    Consider maintenance requirements and cleaning protocols to ensure furniture remains pristine and hygienic throughout its lifecycle in your hotel.
                  </p>
                  <p>
                    Balance budget constraints with guest experience goals, focusing on furniture that enhances comfort, functionality, and overall satisfaction.
                  </p>
                </div>
                <Link href="/contact" className="inline-block mt-6 sm:mt-8">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-lg flex items-center text-sm sm:text-base">
                    Get Expert Consultation
                    <ArrowRight className="w-4 h-4 ml-2 animate-pulse" style={{ animation: 'arrowMove 2s ease-in-out infinite' }} />
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FAQSection({ project }: PortfolioSectionsProps) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <section className="py-6 sm:py-8 mt-[15px] sm:mt-[30px] mb-[5px] sm:mb-[10px]" style={{ backgroundColor: '#f9fafb' }}>
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-2 px-2">
          Frequently Asked Questions
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 text-center mb-6 sm:mb-8 px-2">
          Quick answers to common questions about our soft seating solutions
        </p>
        
        <div className="space-y-3 sm:space-y-4">
          {/* FAQ Item 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div 
              className="flex items-center justify-between p-4 sm:p-6 cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => setOpenFAQ(openFAQ === 0 ? null : 0)}
            >
              <h3 className="text-sm sm:text-base lg:text-lg font-medium text-gray-900 pr-2">
                What makes hotel furniture different from normal furniture?
              </h3>
              <svg 
                className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-600 flex-shrink-0 transition-transform duration-200 ${
                  openFAQ === 0 ? 'rotate-180' : ''
                }`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {openFAQ === 0 && (
              <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Hotel furniture is specifically designed for high-traffic commercial environments. It features enhanced durability, fire-resistant materials, easy-to-clean surfaces, and meets strict hospitality industry standards. Unlike residential furniture, it&apos;s built to withstand constant use while maintaining comfort and aesthetic appeal for guests.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* FAQ Item 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div 
              className="flex items-center justify-between p-4 sm:p-6 cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => setOpenFAQ(openFAQ === 1 ? null : 1)}
            >
              <h3 className="text-sm sm:text-base lg:text-lg font-medium text-gray-900 pr-2">
                How long does it take to manufacture custom hotel furniture?
              </h3>
              <svg 
                className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-600 flex-shrink-0 transition-transform duration-200 ${
                  openFAQ === 1 ? 'rotate-180' : ''
                }`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {openFAQ === 1 && (
              <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Custom hotel furniture manufacturing typically takes 8-12 weeks from design approval to delivery. This timeline includes material sourcing, production, quality control, and finishing. For bulk orders or standard designs, the timeline can be reduced to 4-6 weeks. We provide detailed project timelines during the consultation phase.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* FAQ Item 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div 
              className="flex items-center justify-between p-4 sm:p-6 cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => setOpenFAQ(openFAQ === 2 ? null : 2)}
            >
              <h3 className="text-sm sm:text-base lg:text-lg font-medium text-gray-900 pr-2">
                Do you provide installation services for hotel furniture?
              </h3>
              <svg 
                className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-600 flex-shrink-0 transition-transform duration-200 ${
                  openFAQ === 2 ? 'rotate-180' : ''
                }`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {openFAQ === 2 && (
              <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Yes, we offer comprehensive installation services for all our hotel furniture. Our experienced installation team ensures proper setup, assembly, and placement according to your specifications. We coordinate with your project timeline and can work around guest schedules to minimize disruption to your operations.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* FAQ Item 4 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div 
              className="flex items-center justify-between p-4 sm:p-6 cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => setOpenFAQ(openFAQ === 3 ? null : 3)}
            >
              <h3 className="text-sm sm:text-base lg:text-lg font-medium text-gray-900 pr-2">
                What warranty do you offer on hotel furniture?
              </h3>
              <svg 
                className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-600 flex-shrink-0 transition-transform duration-200 ${
                  openFAQ === 3 ? 'rotate-180' : ''
                }`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {openFAQ === 3 && (
              <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    We provide a comprehensive 5-year warranty on all hotel furniture, covering manufacturing defects and structural issues. The warranty includes free repair or replacement of defective parts. We also offer extended warranty options and maintenance programs to ensure your furniture investment remains in excellent condition throughout its lifecycle.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
