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
    { number: "1000+", label: "Custom Designs" },
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

      {/* Our Purpose and Future Direction - Mission & Vision */}
      <section className="py-8 sm:py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-4">
          <div className="text-center mb-6 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              Our Purpose and Future Direction
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#f26d35]/5 to-white p-8 rounded-2xl shadow-lg"
            >
              <div className="inline-flex items-center gap-2 bg-[#f26d35]/10 text-[#f26d35] px-4 py-2 rounded-full mb-6">
                <Target className="w-4 h-4" />
                <span>Our Mission</span>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To fundamentally transform the hospitality sector by designing and providing highly sustainable, 
                beautiful furniture that enriches environments and elevates the worldwide guest experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-[#f26d35]/5 to-white p-8 rounded-2xl shadow-lg"
            >
              <div className="inline-flex items-center gap-2 bg-[#f26d35]/10 text-[#f26d35] px-4 py-2 rounded-full mb-6">
                <Globe className="w-4 h-4" />
                <span>Our Vision</span>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                We envision becoming the world&apos;s foremost hospitality furniture partner, recognized 
                globally for innovation, environmental stewardship, and supreme quality.
              </p>
            </motion.div>
          </div>

          {/* Inspirational Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12 max-w-4xl mx-auto"
          >
            <div className="bg-[#f26d35] p-8 rounded-2xl shadow-lg">
              <blockquote className="text-2xl sm:text-3xl font-medium text-white leading-relaxed italic">
                &quot;We build more than just furniture; we craft environments, enhance experiences, and realize dreams globally.&quot;
              </blockquote>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Uncover Our Legacy */}
      <section className="py-8 sm:py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6 sm:px-4">
          <div className="text-center mb-6 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Uncover Our Legacy
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Journey through the evolution of Sara Global, from our humble beginnings to becoming the world-class organization we are today.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Company History Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#f26d35]/10 text-[#f26d35] rounded-full mb-6">
                    <Calendar className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Company History</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Delve into our nearly thirty-year path, tracing our transformation from a focused regional 
                    workshop to a globally recognized hospitality furniture powerhouse.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Our Motto & Values Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#f26d35]/10 text-[#f26d35] rounded-full mb-6">
                    <Target className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Motto &amp; Values</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Explore the core tenets and guiding principles that fuel our day-to-day operations and inspire 
                    our dedication to unparalleled quality in every piece we create.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Meet Our Team Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#f26d35]/10 text-[#f26d35] rounded-full mb-6">
                    <Users className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Meet Our Team</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Get acquainted with the diverse, expert talent behind our global success, spanning master artisans, 
                    visionary product designers, and international logistics specialists.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
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
                Ready to Reimagine Your Luxury Property?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Connect with us to see how Sara Global Hospitality&apos;s customized furniture solutions and best 
                international service can fully realize your design ambitions.
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

