"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, ArrowRight, Check, MessageCircle, Star } from "lucide-react";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import Link from "next/link";
import { ContactSection } from '@/components/ContactSection';
import { getPortfolioItemBySlug, getPortfolioImageUrl, PortfolioItem } from "@/lib/portfolio";
import { SeeWhatGuestSaySection, WhatOurClientSaySection, HospitalityBuyingGuideSection, FAQSection } from './PortfolioSections';

interface PortfolioDetailClientProps {
  slug: string;
}

export default function PortfolioDetailClient({ slug }: PortfolioDetailClientProps) {
  const [project, setProject] = useState<PortfolioItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeGuideItem, setActiveGuideItem] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch from database
        const dbProject = await getPortfolioItemBySlug(slug);
        
        if (dbProject) {
          setProject(dbProject);
          } else {
            setError('Project not found');
        }
      } catch (err) {
        console.error('Error fetching project:', err);
        setError('Failed to load project data');
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading project details...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-8">The project you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/portfolio">
            <Button className="bg-primary text-white hover:bg-primary/90">
              <ArrowLeft className="w-4 h-4 mr-2 animate-pulse" style={{ animation: 'arrowMoveBack 2s ease-in-out infinite' }} />
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      {/* Hero Section - Exact match to live site */}
      <div className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] overflow-hidden">
        <ImageWithFallback
          src={getPortfolioImageUrl(project.hero_image)}
          alt={project.title || 'Portfolio Project'}
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 leading-tight">{project.title}</h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 lg:mb-8 px-2">{project.subtitle}</p>
            <Link href="/contact">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">
                Request A Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* See Transformation Section - Exact match to live site */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-4 px-2">
              {project.heading_1 || `See Transformation ${project.title}`}
            </h2>
            <p className="text-sm sm:text-base lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              {project.description}
            </p>
          </div>

          <div className="w-full space-y-8 sm:space-y-12">
            {/* Before/After Image Set 1 */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 w-full">
              {/* Before Image */}
              <div className="flex-1 w-full sm:w-auto">
                <div className="relative group">
                  <ImageWithFallback
                    src={getPortfolioImageUrl(project.old_image_1, "https://images.unsplash.com/photo-1582533568805-78a15dcb01b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNwYSUyMHJlbGF4YXRpb24lMjBhcmVhfGVufDF8fHx8MTc1NzAwMzAzNXww&ixlib=rb-4.1.0&q=80&w=1080")}
                    alt="Before transformation 1"
                    width={600}
                    height={400}
                    className="w-full h-[250px] sm:h-[300px] lg:h-[400px] object-cover rounded-xl sm:rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300"
                  />
                  <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-red-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                    BEFORE
                  </div>
                </div>
              </div>
              
              {/* Custom Arrow */}
              <div className="flex-shrink-0 px-2 sm:px-4 flex items-center justify-center animate-arrow-side">
                <ImageWithFallback 
                  src="/down-left.svg" 
                  alt="Arrow" 
                  className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rotate-[135deg] sm:rotate-0"
                  width={64}
                  height={64}
                />
              </div>
              
              {/* After Image */}
              <div className="flex-1 w-full sm:w-auto">
                <div className="relative group">
                  <ImageWithFallback
                    src={getPortfolioImageUrl(project.new_image_1, "https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzU3MDAzMDM1fDA&ixlib=rb-4.1.0&q=80&w=1080")}
                    alt="After transformation 1"
                    width={600}
                    height={400}
                    className="w-full h-[250px] sm:h-[300px] lg:h-[400px] object-cover rounded-xl sm:rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300"
                  />
                  <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-green-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                    AFTER
                  </div>
                </div>
              </div>
            </div>

            {/* Before/After Image Set 2 */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 w-full">
              {/* Before Image */}
              <div className="flex-1 w-full sm:w-auto">
                <div className="relative group">
                  <ImageWithFallback
                    src={getPortfolioImageUrl(project.old_image_2, "https://images.unsplash.com/photo-1582533568805-78a15dcb01b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNwYSUyMHJlbGF4YXRpb24lMjBhcmVhfGVufDF8fHx8MTc1NzAwMzAzNXww&ixlib=rb-4.1.0&q=80&w=1080")}
                    alt="Before transformation 2"
                    width={600}
                    height={400}
                    className="w-full h-[250px] sm:h-[300px] lg:h-[400px] object-cover rounded-xl sm:rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300"
                  />
                  <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-red-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                    BEFORE
                  </div>
                </div>
              </div>
              
              {/* Custom Arrow */}
              <div className="flex-shrink-0 px-2 sm:px-4 flex items-center justify-center animate-arrow-side">
                <ImageWithFallback 
                  src="/down-left.svg" 
                  alt="Arrow" 
                  className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rotate-[135deg] sm:rotate-0"
                  width={64}
                  height={64}
                />
              </div>
              
              {/* After Image */}
              <div className="flex-1 w-full sm:w-auto">
                <div className="relative group">
                  <ImageWithFallback
                    src={getPortfolioImageUrl(project.new_image_2, "https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzU3MDAzMDM1fDA&ixlib=rb-4.1.0&q=80&w=1080")}
                    alt="After transformation 2"
                    width={600}
                    height={400}
                    className="w-full h-[250px] sm:h-[300px] lg:h-[400px] object-cover rounded-xl sm:rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300"
                  />
                  <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-green-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                    AFTER
                  </div>
                </div>
              </div>
            </div>

            {/* Before/After Image Set 3 */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 w-full">
              {/* Before Image */}
              <div className="flex-1 w-full sm:w-auto">
                <div className="relative group">
                  <ImageWithFallback
                    src={getPortfolioImageUrl(project.old_image_3, "https://images.unsplash.com/photo-1582533568805-78a15dcb01b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNwYSUyMHJlbGF4YXRpb24lMjBhcmVhfGVufDF8fHx8MTc1NzAwMzAzNXww&ixlib=rb-4.1.0&q=80&w=1080")}
                    alt="Before transformation 3"
                    width={600}
                    height={400}
                    className="w-full h-[250px] sm:h-[300px] lg:h-[400px] object-cover rounded-xl sm:rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300"
                  />
                  <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-red-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                    BEFORE
                  </div>
                </div>
              </div>
              
              {/* Custom Arrow */}
              <div className="flex-shrink-0 px-2 sm:px-4 flex items-center justify-center animate-arrow-side">
                <ImageWithFallback 
                  src="/down-left.svg" 
                  alt="Arrow" 
                  className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rotate-[135deg] sm:rotate-0"
                  width={64}
                  height={64}
                />
              </div>
              
              {/* After Image */}
              <div className="flex-1 w-full sm:w-auto">
                <div className="relative group">
                  <ImageWithFallback
                    src={getPortfolioImageUrl(project.new_image_3, "https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzU3MDAzMDM1fDA&ixlib=rb-4.1.0&q=80&w=1080")}
                    alt="After transformation 3"
                    width={600}
                    height={400}
                    className="w-full h-[250px] sm:h-[300px] lg:h-[400px] object-cover rounded-xl sm:rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300"
                  />
                  <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-green-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                    AFTER
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Transform Your Space CTA Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 px-2">Ready to Transform Your Space?</h2>
          <p className="text-sm sm:text-base lg:text-xl mb-6 sm:mb-8 opacity-90 px-2">
            Let us help you create exceptional hospitality experiences with our premium furniture solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button variant="outline" className="bg-white text-primary hover:bg-gray-100 text-xs sm:text-base px-3 sm:px-6 py-1.5 sm:py-3 w-full sm:w-auto">
                <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                Get Free Consultation
              </Button>
            </Link>
            <Link href="/about" className="w-full sm:w-auto">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 text-xs sm:text-base px-3 sm:px-6 py-1.5 sm:py-3 w-full sm:w-auto">
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 animate-pulse" style={{ animation: 'arrowMove 2s ease-in-out infinite' }} />
                Learn About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Project Challenges Section */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-4 px-2">Project Challenges</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="text-sm sm:text-base lg:text-lg text-gray-600 px-2 whitespace-pre-line">
                {project.project_challenge || 'Every transformation comes with unique challenges. Our team worked closely with the client to deliver exceptional results.'}
              </div>
            </div>
            <div className="order-1 md:order-2">
              <ImageWithFallback
                src={getPortfolioImageUrl(project.project_challenge_image, "https://images.unsplash.com/photo-1582533568805-78a15dcb01b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNwYSUyMHJlbGF4YXRpb24lMjBhcmVhfGVufDF8fHx8MTc1NzAwMzAzNXww&ixlib=rb-4.1.0&q=80&w=1080")}
                alt="Project challenges"
                width={800}
                height={400}
                className="w-full h-[250px] sm:h-[300px] lg:h-[400px] object-cover rounded-xl sm:rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How We Delivered Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-4 px-2">How We Delivered</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div className="order-2 md:order-1">
              <ImageWithFallback
                src={getPortfolioImageUrl(project.delivered_image, "https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzU3MDAzMDM1fDA&ixlib=rb-4.1.0&q=80&w=1080")}
                alt="How we delivered"
                width={800}
                height={400}
                className="w-full h-[250px] sm:h-[300px] lg:h-[400px] object-cover rounded-xl sm:rounded-2xl shadow-xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="text-sm sm:text-base lg:text-lg text-gray-600 px-2 whitespace-pre-line">
                {project.how_we_delivered || 'Our comprehensive approach ensured seamless project execution from concept to completion, delivering exceptional results that exceeded client expectations.'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transform Your Vision Into Reality Section */}
      <section className="py-8 sm:py-12 lg:py-16 px-4">
        <div className="relative max-w-7xl mx-auto overflow-hidden rounded-2xl sm:rounded-3xl">
          {/* Background Image with Custom Dark Overlay */}
          <div className="absolute inset-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJvb218ZW58MXx8fHwxNzU3MDAzMDM1fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Hotel room background"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ backgroundColor: 'rgba(17, 30, 51, 0.9)' }}></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 px-2">
              Transform Your Vision Into Reality
            </h2>
            <p className="text-sm sm:text-base lg:text-xl text-white mb-6 sm:mb-8 px-2">
              Aligning brand identity and guest experience is key. Our award-winning design team creates bespoke furniture solutions that flawlessly match your hotel&apos;s distinct vision and global standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-lg flex items-center text-sm sm:text-base w-full sm:w-auto">
                  Request A Quote
                  <ArrowRight className="w-4 h-4 ml-2 animate-pulse" style={{ animation: 'arrowMove 2s ease-in-out infinite' }} />
                </Button>
              </Link>
              <Link href="https://wa.me/16784319041" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button variant="outline" className="bg-white text-gray-900 hover:bg-gray-100 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-lg flex items-center text-sm sm:text-base w-full sm:w-auto">
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  Click To Chat
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Comfort and Convenience Section */}
      <section className="py-8 sm:py-12 lg:py-16" style={{ backgroundColor: '#111e33' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 px-2">
            Comfort and Convenience at {project.title}
          </h2>
          <div className="text-sm sm:text-base lg:text-lg text-white leading-relaxed px-2 whitespace-pre-line">
            {project.comfort_convenience || 'Experience exceptional comfort and convenience with our premium furniture solutions designed for modern hospitality.'}
          </div>
        </div>
      </section>

      {/* See What Guest Say Section - HIDDEN */}
      {/* <SeeWhatGuestSaySection project={project} /> */}

      {/* What Our Client Say About Our Work Section - HIDDEN */}
      {/* <WhatOurClientSaySection project={project} /> */}

      {/* Hospitality Buying Guide Section */}
      <HospitalityBuyingGuideSection project={project} />

      {/* Dynamic FAQ Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">Frequently Asked Questions</h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600">Find answers to common questions about our projects</p>
          </div>
          
          {(() => {
            // Collect all FAQs
            const allFAQs = [
              { q: project.faq_1, a: project.answer_1 },
              { q: project.faq_2, a: project.answer_2 },
              { q: project.faq_3, a: project.answer_3 },
              { q: project.faq_4, a: project.answer_4 },
              { q: project.faq_5, a: project.answer_5 },
              { q: project.faq_6, a: project.answer_6 },
              { q: project.faq_7, a: project.answer_7 },
              { q: project.faq_8, a: project.answer_8 },
              { q: project.faq_9, a: project.answer_9 },
              { q: project.faq_10, a: project.answer_10 },
            ].filter(faq => faq.q && faq.a);

            // If 5 or fewer FAQs, show single centered column
            if (allFAQs.length <= 5) {
              return (
                <div className="max-w-3xl mx-auto space-y-4">
                  {allFAQs.map((faq, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                      <button
                        onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                        className="w-full text-left px-4 sm:px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold text-sm sm:text-base text-gray-900 pr-4">{faq.q}</span>
                        <span className={`transform transition-transform ${openFAQ === index ? 'rotate-180' : ''}`}>
                          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </button>
                      {openFAQ === index && (
                        <div className="px-4 sm:px-6 pb-4">
                          <p className="text-sm sm:text-base text-gray-600 whitespace-pre-line">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              );
            }

            // More than 5 FAQs, show 2 columns with 5 on each side
            const leftFAQs = allFAQs.slice(0, 5);
            const rightFAQs = allFAQs.slice(5, 10);

            return (
              <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                {/* Left Column - FAQs 1-5 */}
                <div className="space-y-4">
                  {leftFAQs.map((faq, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                      <button
                        onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                        className="w-full text-left px-4 sm:px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold text-sm sm:text-base text-gray-900 pr-4">{faq.q}</span>
                        <span className={`transform transition-transform ${openFAQ === index ? 'rotate-180' : ''}`}>
                          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </button>
                      {openFAQ === index && (
                        <div className="px-4 sm:px-6 pb-4">
                          <p className="text-sm sm:text-base text-gray-600 whitespace-pre-line">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Right Column - FAQs 6-10 */}
                <div className="space-y-4">
                  {rightFAQs.map((faq, index) => (
                    <div key={index + 5} className="bg-white rounded-lg shadow-md overflow-hidden">
                      <button
                        onClick={() => setOpenFAQ(openFAQ === (index + 5) ? null : (index + 5))}
                        className="w-full text-left px-4 sm:px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold text-sm sm:text-base text-gray-900 pr-4">{faq.q}</span>
                        <span className={`transform transition-transform ${openFAQ === (index + 5) ? 'rotate-180' : ''}`}>
                          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </button>
                      {openFAQ === (index + 5) && (
                        <div className="px-4 sm:px-6 pb-4">
                          <p className="text-sm sm:text-base text-gray-600 whitespace-pre-line">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
