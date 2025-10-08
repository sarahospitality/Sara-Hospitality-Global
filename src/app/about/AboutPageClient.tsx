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

export default function AboutPageClient() {



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
      <section className="py-6 sm:py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-[#f26d35]/10 text-[#f26d35] px-4 py-2 rounded-full mb-6">
                <Target className="w-4 h-4" />
                <span>Our Mission</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
                Redefining Excellence in
                <span className="text-[#f26d35] block">Hospitality Environments</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our mission is to become the foremost global partner for hospitality furniture, 
                consistently delivering exceptional design, unmatched quality, and sustainable 
                practices that elevate guest experiences worldwide.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                We are dedicated to forging long-term partnerships with hotels, resorts, and senior 
                living communities, understanding that our furniture is more than products—it&apos;s an 
                integral part of creating memorable, comfortable, and inspiring spaces for guests around the globe.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-6">
                <Globe className="w-4 h-4" />
                <span>Our Vision</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
                Shaping the Future of
                <span className="text-blue-600 block">Global Hospitality</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We envision a world where hospitality spaces universally reflect excellence in design, 
                sustainability, and guest comfort—powered by Sara Global&apos;s innovative furniture solutions.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                Through relentless innovation, strategic global expansion, and unwavering commitment 
                to environmental responsibility, we aim to set new industry standards and become the 
                most trusted name in hospitality furniture manufacturing across every continent.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="py-6 sm:py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6 sm:px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#f26d35]/10 text-[#f26d35] px-4 py-2 rounded-full mb-4">
              <Calendar className="w-4 h-4" />
              <span>Our Journey</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              A Legacy of Excellence
              <span className="text-[#f26d35] block">Since 1995</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  year: "1995",
                  title: "The Beginning",
                  description: "Founded with a vision to revolutionize hospitality furniture manufacturing with focus on quality and innovation."
                },
                {
                  year: "2005",
                  title: "Global Expansion",
                  description: "Expanded operations to serve clients across North America, establishing our reputation for excellence."
                },
                {
                  year: "2015",
                  title: "International Reach",
                  description: "Achieved milestone of serving 25+ countries, completing 300+ projects with world-renowned hotel brands."
                },
                {
                  year: "2025",
                  title: "Industry Leader",
                  description: "Recognized as a leading global manufacturer with 500+ projects, serving 50+ countries with sustainable solutions."
                }
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <div className="flex-shrink-0 w-20 text-right">
                    <span className="text-2xl font-bold text-[#f26d35]">{milestone.year}</span>
                  </div>
                  <div className="flex-shrink-0 w-px h-full bg-[#f26d35]/30 relative">
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#f26d35]"></div>
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-8 sm:py-16 bg-gradient-to-br from-[#f26d35] to-orange-600 text-white">
        <div className="container mx-auto px-6 sm:px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
                Ready to Transform Your Hospitality Space?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Let&apos;s discuss how Sara Global Hospitality can bring your vision to life with our 
                expert furniture solutions and global experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button 
                    size="lg" 
                    className="bg-white text-[#f26d35] hover:bg-gray-100 shadow-lg w-full sm:w-auto"
                  >
                    Get Free Consultation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-2 border-white text-white hover:bg-white/10 w-full sm:w-auto"
                  >
                    View Our Portfolio
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

