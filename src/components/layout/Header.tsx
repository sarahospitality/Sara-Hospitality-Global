"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { COUNTRIES } from '@/lib/constants';
import { Menu, X, Globe, ChevronDown, Phone, Mail, Facebook, Linkedin, Instagram, Youtube } from 'lucide-react';
import { useState } from 'react';
import { useHydrationSafe } from '@/hooks/useHydrationSafe';

interface HeaderProps {
  onQuoteRequest: () => void;
}

export function Header({ onQuoteRequest }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const isMounted = useHydrationSafe();

  return (
    <header className="w-full">
      {/* Top Header with Contact Info */}
      <div className="bg-[#f26d35] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-sm">
            <div className="flex flex-wrap items-center gap-2 sm:gap-4">
              <div className="flex items-center gap-2">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm">+1-678-431-9041</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm">info@saraglobal.com</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm">Follow Us:</span>
              <div className="flex gap-2">
                <a href="#" className="hover:text-gray-200 transition-colors" aria-label="Facebook">
                  <Facebook className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>
                <a href="#" className="hover:text-gray-200 transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>
                <a href="#" className="hover:text-gray-200 transition-colors" aria-label="Instagram">
                  <Instagram className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>
                <a href="#" className="hover:text-gray-200 transition-colors" aria-label="YouTube">
                  <Youtube className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#f26d35] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg sm:text-xl">S</span>
                </div>
                <div className="leading-tight">
                  <h1 className="text-base [@media(max-width:400px)]:text-sm sm:text-xl font-bold text-[#f26d35] whitespace-nowrap">Sara Global</h1>
                  <p className="text-[11px] [@media(max-width:400px)]:text-[10px] text-gray-600">Hospitality</p>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link href="/about" className="text-gray-700 hover:text-[#f26d35] transition-colors font-medium">
                  About
                </Link>
              </motion.div>
              {/* Products menu item hidden for now */}
              {/* <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link href="/products" className="text-gray-700 hover:text-[#f26d35] transition-colors font-medium">
                  Products
                </Link>
              </motion.div> */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link href="/portfolio" className="text-gray-700 hover:text-[#f26d35] transition-colors font-medium">
                  Portfolio
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link href="/blog" className="text-gray-700 hover:text-[#f26d35] transition-colors font-medium">
                  Blog
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Link href="/contact" className="text-gray-700 hover:text-[#f26d35] transition-colors font-medium">
                  Contact
                </Link>
              </motion.div>
            </nav>

            {/* Location Selector & CTA Button */}
            <motion.div 
              className="flex items-center gap-2 sm:gap-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {/* Desktop Country Selector */}
              <div className="hidden sm:flex items-center gap-2">
                <Globe className="w-4 h-4 text-gray-500" />
                <div className="relative">
                  <button
                    onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                    className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-lg px-3 py-2 text-sm font-medium transition-colors"
                  >
                    <span>Select Country</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${isMounted && isCountryDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isMounted && isCountryDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
                    >
                      <div className="py-2">
                        {Object.entries(COUNTRIES).map(([code, country]) => (
                          <Link
                            key={code}
                            href={`/${code}`}
                            className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#f26d35] transition-colors"
                            onClick={() => setIsCountryDropdownOpen(false)}
                          >
                            <span className="text-lg mr-3">{country.flag}</span>
                            <span>{country.name}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
              
              {/* Mobile Country Selector */}
              <div className="sm:hidden flex items-center gap-2">
                <Globe className="w-4 h-4 text-gray-500" />
                <div className="relative">
                  <button
                    onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                    className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-lg px-3 py-2 text-sm font-medium transition-colors"
                  >
                    <span>Select Country</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${isMounted && isCountryDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isMounted && isCountryDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
                    >
                      <div className="py-2">
                        {Object.entries(COUNTRIES).map(([code, country]) => (
                          <Link
                            key={code}
                            href={`/${code}`}
                            className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#f26d35] transition-colors"
                            onClick={() => setIsCountryDropdownOpen(false)}
                          >
                            <span className="text-lg mr-3">{country.flag}</span>
                            <span>{country.name}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
              
              {/* Desktop CTA Button */}
              <button
                onClick={onQuoteRequest}
                className="hidden sm:flex bg-[#f26d35] hover:bg-[#f26d35]/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Get Quote
              </button>
              
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-gray-700 hover:text-[#f26d35] transition-colors p-2"
                aria-label="Toggle mobile menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </motion.div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-200 bg-white"
            >
              <div className="px-4 pt-4 pb-6 space-y-2">
                <Link
                  href="/about"
                  className="block px-4 py-4 text-gray-700 hover:text-[#f26d35] hover:bg-gray-50 rounded-lg transition-colors text-lg font-medium border-b border-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/portfolio"
                  className="block px-4 py-4 text-gray-700 hover:text-[#f26d35] hover:bg-gray-50 rounded-lg transition-colors text-lg font-medium border-b border-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Portfolio
                </Link>
                <Link
                  href="/blog"
                  className="block px-4 py-4 text-gray-700 hover:text-[#f26d35] hover:bg-gray-50 rounded-lg transition-colors text-lg font-medium border-b border-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className="block px-4 py-4 text-gray-700 hover:text-[#f26d35] hover:bg-gray-50 rounded-lg transition-colors text-lg font-medium border-b border-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                
                
                {/* Mobile Country Selector */}
                <div className="px-4 py-4 border-t border-gray-200 mt-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Globe className="w-5 h-5 text-gray-500" />
                    <span className="text-lg font-medium text-gray-700">Select Country</span>
                  </div>
                  <div className="space-y-3">
                    {Object.entries(COUNTRIES).map(([code, country]) => (
                      <Link
                        key={code}
                        href={`/${code}`}
                        className="flex items-center px-4 py-3 text-base text-gray-600 hover:text-[#f26d35] hover:bg-gray-50 rounded-lg transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="text-xl mr-4">{country.flag}</span>
                        <span>{country.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </nav>
    </header>
  );
}
