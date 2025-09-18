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
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+1-678-431-9041</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@saraglobal.com</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span>Follow Us:</span>
              <div className="flex gap-2">
                <a href="#" className="hover:text-gray-200 transition-colors" aria-label="Facebook">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="hover:text-gray-200 transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="hover:text-gray-200 transition-colors" aria-label="Instagram">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="hover:text-gray-200 transition-colors" aria-label="YouTube">
                  <Youtube className="w-4 h-4" />
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
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-[#f26d35] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-[#f26d35]">Sara Global</h1>
                  <p className="text-xs text-gray-600">Hospitality</p>
                </div>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Link href="/" className="text-gray-700 hover:text-[#f26d35] transition-colors font-medium">
                  Home
                </Link>
              </motion.div>
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
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex items-center gap-2">
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
              <button
                onClick={onQuoteRequest}
                className="bg-[#f26d35] hover:bg-[#f26d35]/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Get Quote
              </button>
              
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-gray-700 hover:text-[#f26d35] transition-colors"
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
              className="md:hidden border-t border-gray-200"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  href="/"
                  className="block px-3 py-2 text-gray-700 hover:text-[#f26d35] hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="block px-3 py-2 text-gray-700 hover:text-[#f26d35] hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                {/* Products menu item hidden for now */}
                {/* <Link
                  href="/products"
                  className="block px-3 py-2 text-gray-700 hover:text-[#f26d35] hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Products
                </Link> */}
                <Link
                  href="/portfolio"
                  className="block px-3 py-2 text-gray-700 hover:text-[#f26d35] hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Portfolio
                </Link>
                <Link
                  href="/blog"
                  className="block px-3 py-2 text-gray-700 hover:text-[#f26d35] hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className="block px-3 py-2 text-gray-700 hover:text-[#f26d35] hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </nav>
    </header>
  );
}
