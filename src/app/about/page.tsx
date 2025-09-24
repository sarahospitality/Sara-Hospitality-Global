"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
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
      <section className="relative py-12 bg-gradient-to-br from-[#f26d35]/5 via-gray-50 to-[#f26d35]/10 overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <motion.div 
            className="grid lg:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 bg-[#f26d35]/10 text-[#f26d35] px-4 py-2 rounded-full mb-6">
                <Award className="w-4 h-4" />
                <span>About Sara Global Hospitality</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Crafting Excellence in
                <span className="text-[#f26d35] block">Hospitality Furniture</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                For nearly three decades, we&apos;ve been transforming hospitality spaces with custom-designed furniture 
                that combines luxury, functionality, and sustainability. Our global presence spans across 
                continents, bringing world-class craftsmanship to premium hotels and resorts.
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
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
              <img
                src="https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc1NzIzNTUwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Sara Global Hospitality Team"
                className="relative z-10 w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Driving Force - Mission & Vision */}
      <section className="py-12 bg-gradient-to-r from-[#f26d35]/5 via-gray-50 to-[#f26d35]/5">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Mission & <span className="text-[#f26d35]">Vision</span>
            </h2>
            <div className="h-1 w-24 bg-[#f26d35] mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardContent className="p-8 lg:p-12 text-center">
                  <div className="w-20 h-20 bg-[#f26d35] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#f26d35] mb-6">Our Mission</h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    To revolutionize the hospitality industry by creating exceptional, sustainable furniture solutions 
                    that transform spaces and enhance guest experiences.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-sm font-semibold text-gray-700">Exceptional Quality</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-gray-700">Space Transformation</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-gray-700">Sustainable Solutions</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-gray-700">Design Excellence</div>
                    </div>
                  </div>
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
                <CardContent className="p-8 lg:p-12 text-center">
                  <div className="w-20 h-20 bg-[#f26d35] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Globe className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#f26d35] mb-6">Our Vision</h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    To become the world&apos;s leading hospitality furniture manufacturer, recognized for innovation, 
                    sustainability, and unparalleled quality.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-sm font-semibold text-gray-700">Global Leadership</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-gray-700">Lasting Partnerships</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-gray-700">Innovation Focus</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-gray-700">Global Reach</div>
                    </div>
                  </div>
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
                  <CardContent className="p-8 lg:p-12">
                    <blockquote className="text-xl lg:text-2xl font-medium text-center leading-relaxed text-gray-700">
                      &ldquo;Transforming spaces, creating experiences, and building dreams - one piece of furniture at a time.&rdquo;
                    </blockquote>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
        </div>
      </section>

      {/* Explore Our Story */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-gray-900">Explore Our Story</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Dive deeper into different aspects of Sara Global Hospitality - from our rich history to the dedicated team that makes everything possible.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Calendar,
                title: "Company History",
                description: "Discover our journey from a small furniture workshop to a global hospitality leader with major milestones spanning nearly a decade."
              },
              {
                icon: Target,
                title: "Our Motto & Values",
                description: "Learn about our core philosophy and the fundamental values that drive our commitment to excellence in hospitality furniture."
              },
              {
                icon: Users,
                title: "Meet Our Team",
                description: "Get to know the talented professionals behind our success, from design experts to manufacturing specialists."
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
                    <CardContent className="p-8 text-center h-full flex flex-col">
                      <div className="flex-shrink-0">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-[#f26d35]/10 text-[#f26d35] rounded-full mb-6 group-hover:bg-[#f26d35] group-hover:text-white transition-all duration-300">
                          <IconComponent className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-gray-900">{story.title}</h3>
                      </div>
                      <div className="flex-grow flex items-center">
                        <p className="text-gray-600 leading-relaxed">{story.description}</p>
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
      <section className="py-12 bg-[#f26d35] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Transform Your Hospitality Space?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Let&apos;s discuss how Sara Global Hospitality can bring your vision to life with our expert furniture solutions and global experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="bg-white text-[#f26d35] hover:bg-white/90">
                  Get Free Consultation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
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
