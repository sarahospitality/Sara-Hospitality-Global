"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { 
  ArrowRight,
  CheckCircle,
  Calendar,
  Award,
  Globe,
  MessageSquare
} from "lucide-react";
import { ContactSection } from '@/components/ContactSection';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-12 bg-gradient-to-br from-[#f26d35]/5 via-gray-50 to-[#f26d35]/10 overflow-hidden">
        <div className="container mx-auto px-6 sm:px-4 relative">
          <motion.div 
            className="text-center mb-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 bg-[#f26d35]/10 text-[#f26d35] px-4 py-2 rounded-full mb-6">
                <MessageSquare className="w-4 h-4" />
                <span>Contact Us</span>
              </div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-relaxed">
                Let&apos;s Discuss Your
                <span className="text-[#f26d35] block mt-2">Project Needs</span>
              </h1>
            </motion.div>
            <motion.div variants={itemVariants}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Get in touch with our hospitality furniture experts. We&apos;re here to help you 
                create exceptional spaces that inspire and delight your guests.
              </p>
            </motion.div>
          </motion.div>
          
          {/* Quick Stats */}
          <motion.div 
            className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto px-6 sm:px-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: <CheckCircle className="w-6 h-6" />, label: "500+ Projects", color: "text-[#f26d35]" },
              { icon: <Globe className="w-6 h-6" />, label: "50+ Countries", color: "text-[#f26d35]" },
              { icon: <Award className="w-6 h-6" />, label: "98% Satisfaction", color: "text-[#f26d35]" },
              { icon: <Calendar className="w-6 h-6" />, label: "24h Response", color: "text-[#f26d35]" }
            ].map((stat, index) => (
              <motion.div key={index} variants={itemVariants} className="flex items-center gap-3 bg-white/80 backdrop-blur rounded-lg p-4 shadow-sm">
                <div className={`${stat.color}`}>{stat.icon}</div>
                <span className="font-medium">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

    </div>
  );
}
