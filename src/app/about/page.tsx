"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';
import { 
  Award, 
  Target, 
  Users, 
  Globe, 
  Calendar, 
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function AboutPage() {



  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Countries Served" },
    { number: "100k+", label: "Rooms Furnished" },
    { number: "98%", label: "Client Satisfaction" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - About Sara Global Hospitality */}
      <section className="relative py-4 sm:py-12 bg-gradient-to-br from-[#f26d35]/5 via-gray-50 to-[#f26d35]/10 overflow-hidden">
        <div className="container mx-auto px-6 sm:px-4 relative">
          <motion.div 
            className="grid lg:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="text-center lg:text-left flex flex-col items-center lg:items-start" variants={itemVariants}>
              <div className="inline-flex items-center gap-2 bg-[#f26d35]/10 text-[#f26d35] px-4 py-2 rounded-full mb-6">
                <Award className="w-4 h-4" />
                <span>Discover Sara Global Hospitality</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Elevating Global Hospitality with
                <span className="text-[#f26d35] block">Signature Furniture</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl lg:max-w-none">
                For over twenty-five years, we have been setting the international standard for bespoke hospitality 
                furnishings. We seamlessly merge high-end design, superior function, and ethical sustainability. 
                Our extensive global footprint brings master craftsmanship to luxury properties everywhere.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index} 
                    className="text-center"
                    variants={itemVariants}
                  >
                    <div className="text-2xl lg:text-3xl font-bold text-[#f26d35] mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div className="relative" variants={itemVariants}>
              <div className="absolute inset-0 bg-gradient-to-tr from-[#f26d35]/20 to-blue-500/20 rounded-3xl transform rotate-6"></div>
              <ImageWithFallback
                src="/About-_hero.webp"
                alt="Sara Global Hospitality Team"
                className="relative z-10 w-full h-64 sm:h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl"
                width={1080}
                height={500}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Driving Force - Mission & Vision */}
      <section className="py-6 sm:py-12 bg-gradient-to-r from-[#f26d35]/5 via-gray-50 to-[#f26d35]/5">
        <div className="container mx-auto px-6 sm:px-4">
          <motion.div 
            className="text-center mb-8 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4">
              Our Purpose and <span className="text-[#f26d35]">Future Direction</span>
            </h2>
            <div className="h-1 w-24 bg-[#f26d35] mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center mb-8 sm:mb-16">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardContent className="p-4 sm:p-8 lg:p-12 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#f26d35] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <Target className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#f26d35] mb-4 sm:mb-6">Our Mission</h3>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8">
                    To fundamentally transform the hospitality sector by designing and providing highly sustainable, 
                    beautiful furniture that enriches environments and elevates the worldwide guest experience.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardContent className="p-4 sm:p-8 lg:p-12 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#f26d35] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <Globe className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#f26d35] mb-4 sm:mb-6">Our Vision</h3>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8">
                    We envision becoming the world&apos;s foremost hospitality furniture partner, recognized 
                    globally for innovation, environmental stewardship, and supreme quality.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

            {/* Quote Line - Larger Format */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative max-w-4xl mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-[#f26d35]/10 to-[#f26d35]/20 rounded-3xl transform -rotate-1"></div>
                <Card className="relative bg-white/80 backdrop-blur border-0 shadow-lg">
                  <CardContent className="p-4 sm:p-8 lg:p-12">
                    <blockquote className="text-lg sm:text-xl lg:text-2xl font-medium text-center leading-relaxed text-gray-700">
                      &ldquo;We build more than just furniture; we craft environments, enhance experiences, and realize dreams globally.&rdquo;
                    </blockquote>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
        </div>
      </section>

      {/* Explore Our Story */}
      <section className="py-6 sm:py-12 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-4">
          <motion.div 
            className="text-center mb-8 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">Uncover Our Legacy</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto">
              Journey through the evolution of Sara Global, from our humble beginnings to becoming the world-class organization we are today.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Calendar,
                title: "Company History",
                description: "Delve into our nearly thirty-year path, tracing our transformation from a focused regional workshop to a globally recognized hospitality furniture powerhouse."
              },
              {
                icon: Target,
                title: "Our Motto & Values",
                description: "Explore the core tenets and guiding principles that fuel our day-to-day operations and inspire our dedication to unparalleled quality in every piece we create."
              },
              {
                icon: Users,
                title: "Meet Our Team",
                description: "Get acquainted with the diverse, expert talent behind our global success, spanning master artisans, visionary product designers, and international logistics specialists."
              }
            ].map((story, index) => {
              const IconComponent = story.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white h-full">
                    <CardContent className="p-4 sm:p-8 text-center h-full flex flex-col">
                      <div className="flex-shrink-0">
                        <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-[#f26d35]/10 text-[#f26d35] rounded-full mb-4 sm:mb-6 group-hover:bg-[#f26d35] group-hover:text-white transition-all duration-300">
                          <IconComponent className="w-6 h-6 sm:w-8 sm:h-8" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900">{story.title}</h3>
                      </div>
                      <div className="flex-grow flex items-center">
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{story.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-6 sm:py-12 bg-[#f26d35] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
              Ready to Reimagine Your Luxury Property?
            </h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 max-w-3xl mx-auto">
              Connect with us to see how Sara Global Hospitality&apos;s customized furniture solutions and best international service can fully realize your design ambitions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button size="lg" variant="secondary" className="bg-white text-[#f26d35] hover:bg-white/90 w-full sm:w-auto">
                  Get Free Consultation
                  <ArrowRight className="w-4 h-4 ml-2 animate-pulse" style={{ animation: 'arrowMove 2s ease-in-out infinite' }} />
                </Button>
              </Link>
              <Link href="/portfolio" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                  View Our Portfolio
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
