"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { COUNTRIES } from '@/lib/constants';
import { siteConfig } from '@/lib/metadata';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import { useHydrationSafe } from '@/hooks/useHydrationSafe';

export function Footer() {
  const isMounted = useHydrationSafe();

  if (!isMounted) {
    return (
      <footer className="bg-gray-900 text-white" suppressHydrationWarning>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-1 mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#f26d35] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg sm:text-xl">S</span>
                </div>
                <div className="flex flex-col justify-center sm:justify-start mt-2">
                  <h3 className="text-base [@media(max-width:400px)]:text-sm sm:text-xl font-bold text-white leading-none">Sara Global</h3>
                  <p className="text-[11px] [@media(max-width:400px)]:text-[10px] text-gray-400 mt-0.5">Hospitality</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Premium B2B furniture solutions for hotels, resorts, and senior living communities across the globe. We combine quality craftsmanship with modern design to enhance guest experiences and elevate your brand.
              </p>
              <div className="flex space-x-4">
                <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="YouTube">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/products" className="text-gray-400 hover:text-white transition-colors">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Countries */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Locations</h4>
              <ul className="space-y-3">
                {Object.entries(COUNTRIES).map(([code, country]) => (
                  <li key={code}>
                    <Link href={`/${code}`} className="text-gray-400 hover:text-white transition-colors flex items-center">
                      <span className="text-lg mr-3">{country.flag}</span>
                      {country.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-gray-400 mr-3" />
                  <span className="text-gray-400">info@saraglobalhospitality.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-gray-400 mr-3" />
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-9 h-9 text-gray-400 mr-3" />
                  <span className="text-gray-400">Global Headquarters</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2025 Sara Global Hospitality. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Terms of Service
                </Link>
                <Link href="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  return (
      <footer className="bg-gray-900 text-white" suppressHydrationWarning>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#f26d35] rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg sm:text-xl">S</span>
              </div>
              <div className="flex flex-col justify-start">
                <h3 className="text-base [@media(max-width:400px)]:text-sm sm:text-xl font-bold text-white leading-none">Sara Global</h3>
                <p className="text-[11px] [@media(max-width:400px)]:text-[10px] text-gray-400 mt-0.5">Hospitality</p>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-400 mb-6 leading-relaxed">
              Premium B2B furniture solutions for hotels, resorts, and senior living communities across the globe. We combine quality craftsmanship with modern design to enhance guest experiences and elevate your brand.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-2" aria-label="Facebook">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-2" aria-label="Twitter">
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-2" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-2" aria-label="Instagram">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-2" aria-label="YouTube">
                <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </motion.div>

          {/* Mobile: Quick Links + Global Locations in one row */}
          <div className="sm:hidden grid grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-base font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link href="/products" className="text-sm text-gray-400 hover:text-white transition-colors block py-1">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="text-sm text-gray-400 hover:text-white transition-colors block py-1">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-sm text-gray-400 hover:text-white transition-colors block py-1">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm text-gray-400 hover:text-white transition-colors block py-1">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-gray-400 hover:text-white transition-colors block py-1">
                    Contact
                  </Link>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-base font-semibold mb-4 text-white">Global Locations</h4>
              <ul className="space-y-2 sm:space-y-3">
                {Object.entries(COUNTRIES).map(([code, country]) => (
                  <li key={code}>
                    <Link 
                      href={`/${code}`} 
                      className="text-sm text-gray-400 hover:text-white transition-colors flex items-center py-1"
                    >
                      <span className="mr-2">{country.flag}</span>
                      {country.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Desktop: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hidden sm:block lg:-mr-8"
          >
            <h4 className="text-base sm:text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/products" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors block py-1">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors block py-1">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors block py-1">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors block py-1">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors block py-1">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Desktop: Global Locations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden sm:block lg:-ml-8"
          >
            <h4 className="text-base sm:text-lg font-semibold mb-4 text-white">Global Locations</h4>
            <ul className="space-y-3">
              {Object.entries(COUNTRIES).map(([code, country]) => (
                <li key={code}>
                  <Link 
                    href={`/${code}`} 
                    className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors flex items-center py-1"
                  >
                    <span className="mr-2">{country.flag}</span>
                    {country.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-base sm:text-lg font-semibold mb-4 text-white">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start text-gray-400">
                <Phone className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base">+1-678-431-9041</span>
              </div>
              <div className="flex items-start text-gray-400">
                <Mail className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base">info@saraglobal.com</span>
              </div>
              <div className="flex items-start text-gray-400">
                <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base">1010 MCGINNIS PARK CT, Suite A, SUWANEE, GA 30024</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © 2025 Sara Global Hospitality. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors py-1">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors py-1">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors py-1">
                Sitemap
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
