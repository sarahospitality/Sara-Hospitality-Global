"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { COUNTRIES } from '@/lib/constants';
import { 
  Globe, 
  ArrowRight, 
  Star, 
  Building, 
  Quote, 
  MessageSquare, 
  Send,
  Phone,
  Mail,
  MapPin,
  Clock,
  Download,
  BookOpen,
  Calendar,
  User,
  Eye
} from 'lucide-react';
import Link from 'next/link';
import { useHydrationSafe } from '@/hooks/useHydrationSafe';

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

export default function CommonHomepage() {
  const isMounted = useHydrationSafe();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div 
              className="space-y-8"
              initial={isMounted ? "hidden" : "visible"}
              animate="visible"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants} className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-[#f26d35]/10 text-[#f26d35] px-4 py-2 rounded-full">
                  <Star className="w-4 h-4" />
                  <span>Premium Hotel Furniture Manufacturer</span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Crafting Exceptional
                  <span className="text-[#f26d35] block">Hotel Furniture</span>
                  Since 1995
                </h1>
                <p className="text-lg text-gray-600 max-w-lg">
                  Transform your hospitality spaces with our premium furniture solutions. 
                  We manufacture and supply world-class hotel furniture that combines 
                  luxury, durability, and timeless design.
                </p>
              </motion.div>

              {/* Key Points */}
              <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>25+ Years Experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>500+ Hotels Furnished</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Custom Design Solutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Global Shipping</span>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#f26d35] hover:bg-[#f26d35]/90 text-white">
                  View Our Portfolio
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-[#f26d35] text-[#f26d35] hover:bg-[#f26d35]/10">
                  Request Catalog
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div variants={itemVariants} className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#f26d35]">500+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#f26d35]">50+</div>
                  <div className="text-sm text-gray-600">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#f26d35]">25+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div 
              className="relative"
              initial={isMounted ? { opacity: 0, x: 50 } : { opacity: 1, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1590490359854-dfba19688d70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb20lMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzU2OTk4MzIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Luxury hotel bedroom furniture"
                  className="w-full h-[600px] object-cover rounded-lg shadow-2xl"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#f26d35]/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500/30 rounded-full blur-xl"></div>
              
              {/* Quality Badge */}
              <div className="absolute top-6 right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#f26d35]">A+</div>
                  <div className="text-xs text-gray-600">Quality Rating</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Country Selection Section */}
      <section className="py-24 bg-gradient-to-br from-[#f26d35] to-[#e55a2b] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={isMounted ? "hidden" : "visible"}
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">
              Choose Your Region
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-white/90 max-w-2xl mx-auto">
              Select your country to access localized content, pricing, and support tailored to your market.
            </motion.p>
          </motion.div>

          <motion.div
            initial={isMounted ? "hidden" : "visible"}
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
          >
            {Object.entries(COUNTRIES).map(([code, country]) => (
              <motion.div
                key={code}
                variants={itemVariants}
                whileHover={isMounted ? { scale: 1.05, y: -5 } : {}}
                transition={{ duration: 0.3 }}
              >
                <Link href={`/${code}`}>
                  <Card className="h-full cursor-pointer group bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                    <CardHeader className="text-center pb-4">
                      <div className="text-6xl mb-4">{country.flag}</div>
                      <CardTitle className="text-xl text-white">{country.name}</CardTitle>
                      <CardDescription className="text-white/80">
                        {country.currency} • {country.timezone.split('/')[1]}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center pt-0">
                      <Button 
                        variant="secondary" 
                        size="sm" 
                        className="w-full group-hover:bg-white group-hover:text-[#f26d35] transition-colors"
                      >
                        Visit {country.name}
                        <ArrowRight className="ml-2 w-3 h-3" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mt-12"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold mb-2">Can&apos;t find your region?</h3>
              <p className="text-white/90 mb-4">
                We&apos;re expanding globally. Contact us to learn about availability in your area.
              </p>
              <Button variant="secondary" size="sm">
                Contact Global Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={isMounted ? "hidden" : "visible"}
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-[#f26d35]/10 text-[#f26d35] px-4 py-2 rounded-full mb-4">
              <Star className="w-4 h-4" />
              <span>About Sara Global Hospitality</span>
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-3xl lg:text-5xl font-bold mb-6">
              Pioneering Excellence in
              <span className="text-[#f26d35] block">Hotel Furniture Manufacturing</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-3xl mx-auto">
              For over 25 years, Sara Global Hospitality has been at the forefront of hotel furniture 
              manufacturing, creating exceptional pieces that define luxury hospitality experiences worldwide.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Content */}
            <motion.div
              initial={isMounted ? "hidden" : "visible"}
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="space-y-8"
            >
              <motion.div variants={itemVariants} className="space-y-6">
                <h3 className="text-2xl font-bold">Our Story</h3>
                <p className="text-gray-600">
                  Founded in 1995, Sara Global Hospitality began as a small family business with a 
                  vision to transform the hospitality industry through exceptional furniture design 
                  and manufacturing. Today, we&apos;re proud to be a leading global supplier of premium 
                  hotel furniture solutions.
                </p>
                <p className="text-gray-600">
                  Our journey has been marked by continuous innovation, unwavering commitment to 
                  quality, and deep understanding of the hospitality industry&apos;s evolving needs. 
                  We&apos;ve furnished over 500 hotels across 50 countries, establishing ourselves as 
                  a trusted partner for hospitality professionals worldwide.
                </p>
              </motion.div>

              {/* Values */}
              <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-bold">Our Core Values</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-[#f26d35] mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-medium">Excellence</h5>
                      <p className="text-sm text-gray-600">Uncompromising quality in every piece</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Building className="w-5 h-5 text-[#f26d35] mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-medium">Innovation</h5>
                      <p className="text-sm text-gray-600">Cutting-edge design and manufacturing</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-[#f26d35] mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-medium">Partnership</h5>
                      <p className="text-sm text-gray-600">Building lasting relationships</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-[#f26d35] mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-medium">Global Reach</h5>
                      <p className="text-sm text-gray-600">Serving clients worldwide</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={isMounted ? { opacity: 0, x: 50 } : { opacity: 1, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1710828865631-6fea9948a71b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmUlMjBmYWN0b3J5JTIwcHJvZHVjdGlvbnxlbnwxfHx8fDE3NTcwMDI5MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Furniture manufacturing facility"
                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              />
              
              {/* Overlay Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl border">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#f26d35]">25+</div>
                  <div className="text-sm text-gray-600">Years of Excellence</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mission & Vision */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div variants={itemVariants} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-[#f26d35]">Our Mission</h3>
              <p className="text-gray-600">
                To create exceptional furniture solutions that elevate hospitality experiences, 
                combining timeless design with modern functionality to help our clients create 
                memorable spaces for their guests.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-[#f26d35]/5 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-[#f26d35]">Our Vision</h3>
              <p className="text-gray-600">
                To be the world&apos;s most trusted partner for hotel furniture solutions, setting 
                industry standards for quality, innovation, and sustainability while fostering 
                long-term relationships with our clients.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={isMounted ? "hidden" : "visible"}
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-[#f26d35]/10 text-[#f26d35] px-4 py-2 rounded-full mb-4">
              <Building className="w-4 h-4" />
              <span>Product Categories</span>
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-3xl lg:text-5xl font-bold mb-6">
              Complete Furniture Solutions
              <span className="text-[#f26d35] block">For Every Space</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-3xl mx-auto">
              From luxurious guest rooms to sophisticated lobbies, we provide comprehensive 
              furniture solutions that meet the highest standards of hospitality design.
            </motion.p>
          </motion.div>

          {/* Categories Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {/* Bedroom Furniture */}
            <motion.div variants={itemVariants} whileHover={isMounted ? { y: -8 } : {}} transition={{ duration: 0.3 }}>
              <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md h-full">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src="https://images.unsplash.com/photo-1590490359854-dfba19688d70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb20lMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzU2OTk4MzIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Bedroom Furniture"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-white p-3 rounded-full shadow-lg">
                    <Star className="w-6 h-6 text-[#f26d35]" />
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Bedroom Furniture</h3>
                  <p className="text-gray-600 mb-4">Luxury beds, nightstands, wardrobes, and seating for guest rooms</p>
                  
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-[#f26d35] rounded-full"></div>
                      <span>Custom headboards</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-[#f26d35] rounded-full"></div>
                      <span>Storage solutions</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-[#f26d35] rounded-full"></div>
                      <span>Premium materials</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-[#f26d35] rounded-full"></div>
                      <span>Ergonomic design</span>
                    </li>
                  </ul>
                  
                  <Button variant="ghost" className="group/btn p-0 h-auto hover:bg-transparent">
                    <span className="text-[#f26d35]">View Products</span>
                    <ArrowRight className="w-4 h-4 ml-2 text-[#f26d35] group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Lobby & Lounge */}
            <motion.div variants={itemVariants} whileHover={isMounted ? { y: -8 } : {}} transition={{ duration: 0.3 }}>
              <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md h-full">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src="https://images.unsplash.com/photo-1755644046048-989506b73a5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3RlbCUyMGxvYmJ5JTIwZnVybml0dXJlfGVufDF8fHx8MTc1NzAwMjkwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Lobby & Lounge Furniture"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-white p-3 rounded-full shadow-lg">
                    <Building className="w-6 h-6 text-[#f26d35]" />
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Lobby & Lounge</h3>
                  <p className="text-gray-600 mb-4">Sophisticated seating, tables, and reception furniture for common areas</p>
                  
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-[#f26d35] rounded-full"></div>
                      <span>Modular seating</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-[#f26d35] rounded-full"></div>
                      <span>Reception desks</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-[#f26d35] rounded-full"></div>
                      <span>Coffee tables</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-[#f26d35] rounded-full"></div>
                      <span>Accent pieces</span>
                    </li>
                  </ul>
                  
                  <Button variant="ghost" className="group/btn p-0 h-auto hover:bg-transparent">
                    <span className="text-[#f26d35]">View Products</span>
                    <ArrowRight className="w-4 h-4 ml-2 text-[#f26d35] group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Dining & Restaurant */}
            <motion.div variants={itemVariants} whileHover={isMounted ? { y: -8 } : {}} transition={{ duration: 0.3 }}>
              <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md h-full">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src="https://images.unsplash.com/photo-1720139290958-d8676702c3ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJlc3RhdXJhbnQlMjBkaW5pbmclMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzU3MDAyOTA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Dining & Restaurant Furniture"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-white p-3 rounded-full shadow-lg">
                    <Globe className="w-6 h-6 text-[#f26d35]" />
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Dining & Restaurant</h3>
                  <p className="text-gray-600 mb-4">Durable and elegant dining tables, chairs, and bar furniture</p>
                  
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-[#f26d35] rounded-full"></div>
                      <span>Commercial grade</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-[#f26d35] rounded-full"></div>
                      <span>Various seating options</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-[#f26d35] rounded-full"></div>
                      <span>Bar furniture</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-[#f26d35] rounded-full"></div>
                      <span>Buffet stations</span>
                    </li>
                  </ul>
                  
                  <Button variant="ghost" className="group/btn p-0 h-auto hover:bg-transparent">
                    <span className="text-[#f26d35]">View Products</span>
                    <ArrowRight className="w-4 h-4 ml-2 text-[#f26d35] group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Bathroom Vanities */}
            <motion.div variants={itemVariants} whileHover={isMounted ? { y: -8 } : {}} transition={{ duration: 0.3 }}>
              <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md h-full">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src="https://images.unsplash.com/photo-1658595148900-c77873724e98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGJhdGhyb29tJTIwdmFuaXR5JTIwZnVybml0dXJlfGVufDF8fHx8MTc1NzAwMjk2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Bathroom Vanities"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-white p-3 rounded-full shadow-lg">
                    <Star className="w-6 h-6 text-[#f26d35]" />
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Bathroom Vanities</h3>
                  <p className="text-gray-600 mb-4">Custom vanities, mirrors, and storage solutions for hotel bathrooms</p>
                  
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-[#f26d35] rounded-full"></div>
                      <span>Water-resistant</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-[#f26d35] rounded-full"></div>
                      <span>Custom sizing</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-[#f26d35] rounded-full"></div>
                      <span>Integrated storage</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-[#f26d35] rounded-full"></div>
                      <span>LED lighting</span>
                    </li>
                  </ul>
                  
                  <Button variant="ghost" className="group/btn p-0 h-auto hover:bg-transparent">
                    <span className="text-[#f26d35]">View Products</span>
                    <ArrowRight className="w-4 h-4 ml-2 text-[#f26d35] group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Outdoor Furniture */}
            <motion.div variants={itemVariants} whileHover={isMounted ? { y: -8 } : {}} transition={{ duration: 0.3 }}>
              <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md h-full">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src="https://images.unsplash.com/photo-1661024768242-5fd7c8f1e3c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMG91dGRvb3IlMjBwYXRpbyUyMGZ1cm5pdHVyZXxlbnwxfHx8fDE3NTcwMDI5Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Outdoor Furniture"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-white p-3 rounded-full shadow-lg">
                    <Globe className="w-6 h-6 text-[#f26d35]" />
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Outdoor Furniture</h3>
                  <p className="text-gray-600 mb-4">Weather-resistant patio and poolside furniture collections</p>
                  
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-[#f26d35] rounded-full"></div>
                      <span>All-weather materials</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-[#f26d35] rounded-full"></div>
                      <span>UV resistant</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-[#f26d35] rounded-full"></div>
                      <span>Pool furniture</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-[#f26d35] rounded-full"></div>
                      <span>Garden seating</span>
                    </li>
                  </ul>
                  
                  <Button variant="ghost" className="group/btn p-0 h-auto hover:bg-transparent">
                    <span className="text-[#f26d35]">View Products</span>
                    <ArrowRight className="w-4 h-4 ml-2 text-[#f26d35] group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Conference & Business */}
            <motion.div variants={itemVariants} whileHover={isMounted ? { y: -8 } : {}} transition={{ duration: 0.3 }}>
              <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md h-full">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src="https://images.unsplash.com/photo-1595695162612-1d7fc11e46ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGNvbmZlcmVuY2UlMjByb29tJTIwZnVybml0dXJlfGVufDF8fHx8MTc1NzAwMjk3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Conference & Business Furniture"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-white p-3 rounded-full shadow-lg">
                    <Building className="w-6 h-6 text-[#f26d35]" />
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Conference & Business</h3>
                  <p className="text-gray-600 mb-4">Professional furniture for meeting rooms and business centers</p>
                  
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-[#f26d35] rounded-full"></div>
                      <span>Conference tables</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-[#f26d35] rounded-full"></div>
                      <span>Executive seating</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-[#f26d35] rounded-full"></div>
                      <span>Storage cabinets</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-[#f26d35] rounded-full"></div>
                      <span>Tech integration</span>
                    </li>
                  </ul>
                  
                  <Button variant="ghost" className="group/btn p-0 h-auto hover:bg-transparent">
                    <span className="text-[#f26d35]">View Products</span>
                    <ArrowRight className="w-4 h-4 ml-2 text-[#f26d35] group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Custom Solutions CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="bg-white rounded-lg p-8 lg:p-12 text-center"
          >
            <motion.h3 variants={itemVariants} className="text-2xl lg:text-3xl font-bold mb-4">
              Need Custom Solutions?
            </motion.h3>
            <motion.p variants={itemVariants} className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Our design team specializes in creating bespoke furniture solutions tailored to your 
              hotel&apos;s unique brand and requirements. From concept to installation, we handle every detail.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#f26d35] hover:bg-[#f26d35]/90">
                Request Custom Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline">
                Download Catalog
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={isMounted ? "hidden" : "visible"}
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-[#f26d35]/10 text-[#f26d35] px-4 py-2 rounded-full mb-4">
              <Star className="w-4 h-4" />
              <span>Why Choose Sara Global</span>
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-3xl lg:text-5xl font-bold mb-6">
              The Preferred Choice of
              <span className="text-[#f26d35] block">Hospitality Professionals</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-3xl mx-auto">
              When you choose Sara Global Hospitality, you&apos;re partnering with industry leaders 
              who understand the unique demands of the hospitality sector.
            </motion.p>
          </motion.div>

          {/* Main Reasons Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {/* 25+ Years Expertise */}
            <motion.div variants={itemVariants} whileHover={isMounted ? { y: -8 } : {}} transition={{ duration: 0.3 }}>
              <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md h-full">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Star className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4">25+ Years Expertise</h3>
                  <p className="text-gray-600 mb-6">Decades of experience in hotel furniture manufacturing with deep industry knowledge.</p>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-[#f26d35] mb-1">500+ Hotels</div>
                    <div className="text-sm text-gray-600">Achievement</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Premium Quality */}
            <motion.div variants={itemVariants} whileHover={isMounted ? { y: -8 } : {}} transition={{ duration: 0.3 }}>
              <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md h-full">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Star className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4">Premium Quality</h3>
                  <p className="text-gray-600 mb-6">Rigorous quality control and premium materials ensure long-lasting durability.</p>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-[#f26d35] mb-1">99.8% Quality Rate</div>
                    <div className="text-sm text-gray-600">Achievement</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* On-Time Delivery */}
            <motion.div variants={itemVariants} whileHover={isMounted ? { y: -8 } : {}} transition={{ duration: 0.3 }}>
              <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md h-full">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Star className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4">On-Time Delivery</h3>
                  <p className="text-gray-600 mb-6">Reliable delivery schedules with real-time tracking and project management.</p>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-[#f26d35] mb-1">98% On-Time</div>
                    <div className="text-sm text-gray-600">Achievement</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Custom Design */}
            <motion.div variants={itemVariants} whileHover={isMounted ? { y: -8 } : {}} transition={{ duration: 0.3 }}>
              <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md h-full">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Building className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4">Custom Design</h3>
                  <p className="text-gray-600 mb-6">Bespoke solutions tailored to your brand identity and space requirements.</p>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-[#f26d35] mb-1">1000+ Designs</div>
                    <div className="text-sm text-gray-600">Achievement</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Global Reach */}
            <motion.div variants={itemVariants} whileHover={isMounted ? { y: -8 } : {}} transition={{ duration: 0.3 }}>
              <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md h-full">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-cyan-50 text-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Globe className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4">Global Reach</h3>
                  <p className="text-gray-600 mb-6">Worldwide shipping and installation services with local support teams.</p>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-[#f26d35] mb-1">50+ Countries</div>
                    <div className="text-sm text-gray-600">Achievement</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* 24/7 Support */}
            <motion.div variants={itemVariants} whileHover={isMounted ? { y: -8 } : {}} transition={{ duration: 0.3 }}>
              <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md h-full">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Star className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4">24/7 Support</h3>
                  <p className="text-gray-600 mb-6">Dedicated customer service and post-installation support whenever you need it.</p>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-[#f26d35] mb-1">4.9/5 Rating</div>
                    <div className="text-sm text-gray-600">Achievement</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Process Steps */}
            <motion.div
              initial={isMounted ? "hidden" : "visible"}
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="space-y-8"
            >
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-bold mb-6">Our Proven Process</h3>
                <div className="space-y-6">
                  {[
                    {
                      step: "01",
                      title: "Consultation & Design",
                      description: "We begin with understanding your vision, requirements, and brand identity."
                    },
                    {
                      step: "02", 
                      title: "Custom Manufacturing",
                      description: "Our skilled craftsmen bring your designs to life using premium materials."
                    },
                    {
                      step: "03",
                      title: "Quality Assurance",
                      description: "Rigorous testing and inspection ensure every piece meets our high standards."
                    },
                    {
                      step: "04",
                      title: "Delivery & Installation",
                      description: "Professional delivery and installation services complete your project."
                    }
                  ].map((process, index) => (
                    <motion.div key={index} variants={itemVariants} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#f26d35] text-white rounded-full flex items-center justify-center font-bold">
                        {process.step}
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">{process.title}</h4>
                        <p className="text-gray-600">{process.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Certifications & Standards */}
            <motion.div
              initial={isMounted ? "hidden" : "visible"}
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="space-y-8"
            >
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-bold mb-6">Certifications & Standards</h3>
                <p className="text-gray-600 mb-6">
                  Our commitment to quality is validated by industry-leading certifications 
                  and adherence to international standards.
                </p>
                
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    "ISO 9001 Certified",
                    "FSC Certified Wood",
                    "GREENGUARD Gold",
                    "BIFMA Standards",
                    "Fire Retardant",
                    "Anti-Microbial"
                  ].map((cert, index) => (
                    <motion.div key={index} variants={itemVariants} className="bg-gray-100 px-3 py-2 rounded-lg text-center text-sm">
                      <div className="flex items-center justify-center gap-2">
                        <Star className="w-3 h-3 text-[#f26d35]" />
                        {cert}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Warranty Info */}
              <motion.div variants={itemVariants} className="bg-[#f26d35]/5 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="w-6 h-6 text-[#f26d35]" />
                  <h4 className="font-bold">Comprehensive Warranty</h4>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-green-500" />
                    <span>5-year structural warranty</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-green-500" />
                    <span>2-year finish warranty</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-green-500" />
                    <span>1-year hardware warranty</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-green-500" />
                    <span>Lifetime craftsmanship guarantee</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={isMounted ? "hidden" : "visible"}
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-[#f26d35]/10 text-[#f26d35] px-4 py-2 rounded-full mb-4">
              <Globe className="w-4 h-4" />
              <span>Our Portfolio</span>
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-3xl lg:text-5xl font-bold mb-6">
              Transforming Hospitality Spaces
              <span className="text-[#f26d35] block">Worldwide</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our diverse portfolio of completed projects spanning luxury resorts, 
              boutique hotels, and business centers across the globe.
            </motion.p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={isMounted ? "hidden" : "visible"}
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "50+", label: "Countries Served" },
              { number: "100k+", label: "Rooms Furnished" },
              { number: "98%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <motion.div key={index} variants={itemVariants} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#f26d35] mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Featured Project */}
          <motion.div
            initial={isMounted ? "hidden" : "visible"}
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="mb-16"
          >
            <motion.div variants={itemVariants} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="grid lg:grid-cols-2">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1590490359854-dfba19688d70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHN1aXRlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU2OTE4Njk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Grand Palace Hotel Dubai"
                    className="w-full h-80 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-[#f26d35] text-white px-3 py-1 rounded-full text-sm font-medium">Featured Project</div>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["Luxury", "Custom Design", "Complete Furnishing"].map((tag, index) => (
                      <div key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm">{tag}</div>
                    ))}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4">Grand Palace Hotel Dubai</h3>
                  <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      <span>Dubai, UAE</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      <span>2023</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      <span>450 Rooms</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">Complete furniture solution for a 5-star luxury resort featuring custom-designed bedroom sets, lobby furniture, and dining collections.</p>
                  <Button className="w-fit bg-[#f26d35] hover:bg-[#f26d35]/90">
                    View Case Study
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Project Grid */}
          <motion.div
            initial={isMounted ? "hidden" : "visible"}
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          >
            {[
              {
                title: "Wellness Spa Resort",
                location: "Bali, Indonesia",
                year: "2023",
                type: "Spa Resort",
                description: "Sustainable furniture solutions for an eco-luxury spa resort with focus on natural materials and wellness-oriented design.",
                image: "https://images.unsplash.com/photo-1582533568805-78a15dcb01b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNwYSUyMHJlbGF4YXRpb24lMjBhcmVhfGVufDF8fHx8MTc1NzAwMzAzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                tags: ["Eco-Friendly", "Spa Design", "Wellness"]
              },
              {
                title: "Metropolitan Boutique Hotel",
                location: "New York, USA",
                year: "2022",
                type: "Boutique Hotel",
                description: "Modern urban design with space-efficient solutions for a trendy boutique hotel in Manhattan's financial district.",
                image: "https://images.unsplash.com/photo-1718104717529-0059a1a860fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3V0aXF1ZSUyMGhvdGVsJTIwcmVjZXB0aW9ufGVufDF8fHx8MTc1NzAwMzAzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                tags: ["Urban Design", "Space Efficient", "Modern"]
              },
              {
                title: "Royal Heritage Hotel",
                location: "London, UK",
                year: "2022",
                type: "Heritage Hotel",
                description: "Classic elegance meets modern comfort in this restored Victorian hotel with period-appropriate custom furniture.",
                image: "https://images.unsplash.com/photo-1755644046048-989506b73a5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3RlbCUyMGxvYmJ5JTIwZnVybml0dXJlfGVufDF8fHx8MTc1NzAwMjkwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                tags: ["Heritage", "Classic Design", "Restoration"]
              },
              {
                title: "Seaside Resort Complex",
                location: "Miami, USA",
                year: "2023",
                type: "Beach Resort",
                description: "Tropical-themed furniture designed to withstand coastal conditions while maintaining luxury standards.",
                image: "https://images.unsplash.com/photo-1720139290958-d8676702c3ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJlc3RhdXJhbnQlMjBkaW5pbmclMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzU3MDAyOTA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                tags: ["Weather Resistant", "Tropical", "Outdoor"]
              },
              {
                title: "Business Conference Center",
                location: "Singapore",
                year: "2022",
                type: "Conference Hotel",
                description: "Professional business-focused furniture with integrated technology solutions for the modern corporate traveler.",
                image: "https://images.unsplash.com/photo-1671722294182-ed01cbe66bd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBmdXJuaXR1cmUlMjBtYW51ZmFjdHVyaW5nfGVufDF8fHx8MTc1NzAwMjgwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                tags: ["Business", "Tech Integration", "Corporate"]
              }
            ].map((project, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={isMounted ? { y: -8 } : {}} transition={{ duration: 0.3 }}>
                <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md overflow-hidden h-full">
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="bg-white/90 px-3 py-1 rounded-full text-sm">{project.type}</div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.tags.map((tag, tagIndex) => (
                        <div key={tagIndex} className="border border-gray-300 px-2 py-1 rounded text-xs">{tag}</div>
                      ))}
                    </div>
                    
                    <h3 className="font-bold mb-2">{project.title}</h3>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        <span>{project.year}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                    
                    <Button variant="ghost" size="sm" className="p-0 h-auto hover:bg-transparent">
                      <span className="text-[#f26d35]">View Details</span>
                      <ArrowRight className="w-3 h-3 ml-2 text-[#f26d35]" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={isMounted ? "hidden" : "visible"}
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center"
          >
            <motion.div variants={itemVariants}>
              <Button size="lg" className="bg-[#f26d35] hover:bg-[#f26d35]/90">
                View All Projects
                <Globe className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={isMounted ? "hidden" : "visible"}
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-[#f26d35]/10 text-[#f26d35] px-4 py-2 rounded-full mb-4">
              <Star className="w-4 h-4" />
              <span>Client Testimonials</span>
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-3xl lg:text-5xl font-bold mb-6">
              What Our Clients Say
              <span className="text-[#f26d35] block">About Our Work</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-3xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what hospitality professionals 
              around the world say about their experience with Sara Global.
            </motion.p>
          </motion.div>

          {/* Testimonials Grid */}
          <motion.div
            initial={isMounted ? "hidden" : "visible"}
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          >
            {[
              {
                name: "Sarah Johnson",
                title: "General Manager",
                company: "Grand Palace Hotel Dubai",
                avatar: "/api/placeholder/64/64",
                rating: 5,
                text: "Sara Global delivered exceptional quality furniture that perfectly matched our luxury brand. Their attention to detail and project management made the entire process seamless. Our guests constantly compliment the beautiful interiors."
              },
              {
                name: "Michael Chen",
                title: "Head of Operations",
                company: "Metropolitan Hotels Group", 
                avatar: "/api/placeholder/64/64",
                rating: 5,
                text: "Working with Sara Global has been a game-changer for our hotel chain. Their ability to deliver consistent quality across multiple properties while meeting tight deadlines is remarkable. Highly recommended!"
              },
              {
                name: "Emily Rodriguez",
                title: "Interior Design Director",
                company: "Boutique Hotels International",
                avatar: "/api/placeholder/64/64", 
                rating: 5,
                text: "The custom furniture solutions from Sara Global brought our design vision to life perfectly. Their team understood our unique requirements and delivered beyond expectations. The craftsmanship is outstanding."
              },
              {
                name: "David Thompson",
                title: "Property Owner",
                company: "Seaside Resort Miami",
                avatar: "/api/placeholder/64/64",
                rating: 5,
                text: "Sara Global&apos;s weather-resistant outdoor furniture has exceeded our expectations. After two years of coastal exposure, everything still looks brand new. Their warranty and support service is excellent."
              },
              {
                name: "Lisa Wang",
                title: "Procurement Manager", 
                company: "Asia Pacific Hotels",
                avatar: "/api/placeholder/64/64",
                rating: 5,
                text: "The most reliable furniture supplier we&apos;ve worked with. Sara Global consistently delivers on time, within budget, and with superior quality. Their global logistics capabilities are impressive."
              },
              {
                name: "Robert Mitchell",
                title: "Development Director",
                company: "Heritage Hotels UK",
                avatar: "/api/placeholder/64/64",
                rating: 5,
                text: "Sara Global&apos;s expertise in heritage hotel furnishing is unmatched. They created period-appropriate furniture that maintains historical authenticity while meeting modern comfort standards."
              }
            ].map((testimonial, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    {/* Quote Icon */}
                    <div className="w-12 h-12 bg-[#f26d35]/10 rounded-full flex items-center justify-center mb-6">
                      <Quote className="w-6 h-6 text-[#f26d35]" />
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#f26d35] rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.title}</p>
                        <p className="text-sm text-[#f26d35] font-medium">{testimonial.company}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Overall Rating */}
          <motion.div
            initial={isMounted ? "hidden" : "visible"}
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-4 bg-gray-50 px-8 py-6 rounded-lg">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#f26d35] mb-2">4.9</div>
                <div className="flex gap-1 justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
              <div className="text-center border-l border-gray-300 pl-8">
                <div className="text-4xl font-bold text-[#f26d35] mb-2">500+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center border-l border-gray-300 pl-8">
                <div className="text-4xl font-bold text-[#f26d35] mb-2">98%</div>
                <div className="text-sm text-gray-600">Satisfaction Rate</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Client Logos */}
          <motion.div
            initial={isMounted ? "hidden" : "visible"}
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h3 variants={itemVariants} className="text-xl font-bold mb-8 text-gray-600">
              Trusted by Leading Hotel Chains Worldwide
            </motion.h3>
            
            <motion.div variants={itemVariants} className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
              {[
                { name: "Marriott International", logo: "M" },
                { name: "Hilton Hotels", logo: "H" },
                { name: "Four Seasons", logo: "FS" },
                { name: "Ritz Carlton", logo: "RC" },
                { name: "InterContinental", logo: "IC" },
                { name: "Hyatt Hotels", logo: "HY" },
                { name: "Sheraton", logo: "S" },
                { name: "W Hotels", logo: "W" },
                { name: "Le Meridien", logo: "LM" },
                { name: "Westin", logo: "WE" },
                { name: "Renaissance", logo: "R" },
                { name: "Fairmont", logo: "F" }
              ].map((client, index) => (
                <motion.div key={index} variants={itemVariants} className="flex flex-col items-center group">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-2 group-hover:bg-[#f26d35]/10 transition-colors">
                    <span className="font-bold text-lg text-gray-600 group-hover:text-[#f26d35]">
                      {client.logo}
                    </span>
                  </div>
                  <span className="text-xs text-gray-600 text-center">
                    {client.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Awards Section */}
          <motion.div
            initial={isMounted ? "hidden" : "visible"}
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="bg-gray-50 rounded-lg p-8 lg:p-12"
          >
            <motion.div variants={itemVariants} className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Industry Recognition</h3>
              <p className="text-gray-600">
                Our commitment to excellence has been recognized by industry leaders
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  award: "Best Hotel Furniture Supplier",
                  year: "2023",
                  organization: "Hospitality Design Awards"
                },
                {
                  award: "Innovation in Hospitality",
                  year: "2022",
                  organization: "Global Hotel Industry"
                },
                {
                  award: "Sustainability Excellence",
                  year: "2023",
                  organization: "Green Building Council"
                },
                {
                  award: "Quality Manufacturing",
                  year: "2022",
                  organization: "International Standards"
                }
              ].map((award, index) => (
                <motion.div key={index} variants={itemVariants} className="text-center bg-white p-6 rounded-lg">
                  <div className="w-12 h-12 bg-[#f26d35]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-6 h-6 text-[#f26d35]" />
                  </div>
                  <h4 className="font-bold mb-2">{award.award}</h4>
                  <p className="text-sm text-gray-600">{award.organization}</p>
                  <p className="text-sm text-[#f26d35] font-medium">{award.year}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blogs" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={isMounted ? "hidden" : "visible"}
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-[#f26d35]/10 text-[#f26d35] px-4 py-2 rounded-full mb-4">
              <BookOpen className="w-4 h-4" />
              <span>Industry Insights</span>
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-3xl lg:text-5xl font-bold mb-6">
              Latest from Our
              <span className="text-[#f26d35] block">Blog & Resources</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest trends, insights, and best practices in 
              hospitality furniture design and manufacturing.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Blog Post 1 */}
            <motion.div variants={itemVariants} whileHover={isMounted ? { y: -8 } : {}} transition={{ duration: 0.3 }}>
              <Card className="h-full cursor-pointer group">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-xl overflow-hidden">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Building className="w-16 h-16 text-gray-400" />
                  </div>
                </div>
                <CardHeader>
                  <div className="text-sm text-[#f26d35] font-medium mb-2">Hospitality Design Trends</div>
                  <CardTitle className="text-xl">Sustainable Furniture Solutions for Modern Hotels</CardTitle>
                  <CardDescription>
                    Discover how eco-friendly furniture choices can enhance your hotel&apos;s sustainability goals while maintaining luxury standards.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">December 15, 2024</span>
                    <Button variant="outline" size="sm" className="group-hover:bg-[#f26d35] group-hover:text-white group-hover:border-[#f26d35] transition-colors">
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Blog Post 2 */}
            <motion.div variants={itemVariants} whileHover={isMounted ? { y: -8 } : {}} transition={{ duration: 0.3 }}>
              <Card className="h-full cursor-pointer group">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-xl overflow-hidden">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Building className="w-16 h-16 text-gray-400" />
                  </div>
                </div>
                <CardHeader>
                  <div className="text-sm text-[#f26d35] font-medium mb-2">Case Studies</div>
                  <CardTitle className="text-xl">Designing for Accessibility in Senior Living</CardTitle>
                  <CardDescription>
                    Learn about the key considerations for creating accessible furniture solutions that prioritize resident safety and comfort.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">December 10, 2024</span>
                    <Button variant="outline" size="sm" className="group-hover:bg-[#f26d35] group-hover:text-white group-hover:border-[#f26d35] transition-colors">
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Blog Post 3 */}
            <motion.div variants={itemVariants} whileHover={isMounted ? { y: -8 } : {}} transition={{ duration: 0.3 }}>
              <Card className="h-full cursor-pointer group">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-xl overflow-hidden">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Building className="w-16 h-16 text-gray-400" />
                  </div>
                </div>
                <CardHeader>
                  <div className="text-sm text-[#f26d35] font-medium mb-2">Global Expansion</div>
                  <CardTitle className="text-xl">Hospitality Trends Across Different Markets</CardTitle>
                  <CardDescription>
                    Explore how hospitality design preferences vary across different regions and what this means for global furniture solutions.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">December 5, 2024</span>
                    <Button variant="outline" size="sm" className="group-hover:bg-[#f26d35] group-hover:text-white group-hover:border-[#f26d35] transition-colors">
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg" className="group">
              View All Articles
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={isMounted ? "hidden" : "visible"}
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-[#f26d35]/10 text-[#f26d35] px-4 py-2 rounded-full mb-4">
              <MessageSquare className="w-4 h-4" />
              <span>Get In Touch</span>
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-3xl lg:text-5xl font-bold mb-6">
              Start Your Project
              <span className="text-[#f26d35] block">With Sara Global</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ready to transform your hospitality space? Contact our team of experts 
              for a consultation and discover how we can bring your vision to life.
            </motion.p>
          </motion.div>

          <motion.div
            initial={isMounted ? "hidden" : "visible"}
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid lg:grid-cols-3 gap-12"
          >
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {[
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
                      details: ["Sara Global Hospitality", "2600 Pleasantdale Rd. Ste 12, Atlanta, GA 30340"],
                      description: "Visit our showroom"
                    },
                    {
                      icon: Globe,
                      title: "Global Offices",
                      details: ["Dubai • London • Singapore", "Mumbai • Shanghai • Toronto"],
                      description: "Worldwide presence"
                    }
                  ].map((info, index) => {
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

              {/* Quick Actions */}
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Download className="w-5 h-5" />
                    Quick Resources
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="w-4 h-4 mr-2" />
                    Download Catalog
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Clock className="w-4 h-4 mr-2" />
                    Schedule Consultation
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Request Quote
                  </Button>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-[#f26d35]">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-[#f26d35]">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-gray-600">Closed</span>
                  </div>
                  <div className="pt-2 border-t border-gray-300">
                    <p className="text-sm text-gray-600">
                      All times EST. Emergency support available 24/7.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle>Project Inquiry Form</CardTitle>
                  <p className="text-gray-600">
                    Tell us about your project and we&apos;ll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium">First Name *</label>
                      <input id="firstName" placeholder="Enter your first name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#f26d35] focus:border-transparent" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium">Last Name *</label>
                      <input id="lastName" placeholder="Enter your last name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#f26d35] focus:border-transparent" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email Address *</label>
                      <input id="email" type="email" placeholder="your@email.com" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#f26d35] focus:border-transparent" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                      <input id="phone" type="tel" placeholder="+1-678-431-9041" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#f26d35] focus:border-transparent" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium">Company/Hotel Name *</label>
                      <input id="company" placeholder="Your hotel or company name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#f26d35] focus:border-transparent" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="title" className="text-sm font-medium">Your Title</label>
                      <input id="title" placeholder="General Manager, Owner, etc." className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#f26d35] focus:border-transparent" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="projectType" className="text-sm font-medium">Project Type *</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#f26d35] focus:border-transparent">
                        <option value="">Select project type</option>
                        {["New Hotel Development", "Hotel Renovation", "Restaurant/Bar", "Conference Center", "Spa/Wellness Center", "Outdoor/Patio Areas", "Custom Project"].map((type, index) => (
                          <option key={index} value={type.toLowerCase().replace(/\s+/g, '-')}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="budget" className="text-sm font-medium">Project Budget</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#f26d35] focus:border-transparent">
                        <option value="">Select budget range</option>
                        {["Under $50,000", "$50,000 - $100,000", "$100,000 - $250,000", "$250,000 - $500,000", "$500,000 - $1,000,000", "Over $1,000,000"].map((range, index) => (
                          <option key={index} value={range.toLowerCase().replace(/\s+/g, '-')}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="location" className="text-sm font-medium">Project Location</label>
                    <input id="location" placeholder="City, State, Country" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#f26d35] focus:border-transparent" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="timeline" className="text-sm font-medium">Preferred Timeline</label>
                    <input id="timeline" placeholder="e.g., Starting in 3 months, completion by end of year" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#f26d35] focus:border-transparent" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="details" className="text-sm font-medium">Project Details *</label>
                    <textarea 
                      id="details" 
                      placeholder="Please describe your project, including number of rooms, specific furniture needs, design preferences, and any special requirements..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#f26d35] focus:border-transparent min-h-[120px]"
                    />
                  </div>

                  <div className="space-y-4">
                    <label className="text-sm font-medium">Additional Services (Optional)</label>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        "Design Consultation",
                        "3D Rendering",
                        "Installation Service",
                        "Maintenance Program",
                        "Warranty Extension",
                        "Sustainability Certification"
                      ].map((service, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <input type="checkbox" id={`service-${index}`} className="rounded border-gray-300 text-[#f26d35] focus:ring-[#f26d35]" />
                          <label htmlFor={`service-${index}`} className="text-sm">{service}</label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="terms" className="rounded border-gray-300 text-[#f26d35] focus:ring-[#f26d35]" />
                    <label htmlFor="terms" className="text-sm">
                      I agree to the <a href="#" className="text-[#f26d35] hover:underline">Terms of Service</a> and <a href="#" className="text-[#f26d35] hover:underline">Privacy Policy</a>
                    </label>
                  </div>

                  <Button size="lg" className="w-full bg-[#f26d35] hover:bg-[#f26d35]/90">
                    <Send className="w-4 h-4 mr-2" />
                    Send Inquiry
                  </Button>

                  <p className="text-sm text-gray-600 text-center">
                    We&apos;ll review your inquiry and respond within 24 hours with next steps.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}