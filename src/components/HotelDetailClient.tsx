"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, ArrowRight, Check, MessageCircle, Star } from "lucide-react";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import Link from "next/link";
import { ContactSection } from '@/components/ContactSection';

interface HotelDetailClientProps {
  slug: string;
}

export default function HotelDetailClient({ slug }: HotelDetailClientProps) {
  const [activeGuideItem, setActiveGuideItem] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // Memoize project data to prevent recalculation
  const project = useMemo(() => {
    const projectsData = {
      "laquinta-roswell-georgia": {
        title: "La Quinta Inn & Suites by Wyndham, Roswell, Georgia",
        subtitle: "Complete hotel furniture transformation with modern hospitality design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        heroImage: "https://images.unsplash.com/photo-1590490359854-dfba19688d70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHN1aXRlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU2OTE4Njk1fDA&ixlib=rb-4.1.0&q=80&w=1080",
        beforeAfterImages: [
          { old: "https://images.unsplash.com/photo-1582533568805-78a15dcb01b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNwYSUyMHJlbGF4YXRpb24lMjBhcmVhfGVufDF8fHx8MTc1NzAwMzAzNXww&ixlib=rb-4.1.0&q=80&w=1080", new: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzU3MDAzMDM1fDA&ixlib=rb-4.1.0&q=80&w=1080" },
          { old: "https://images.unsplash.com/photo-1582533568805-78a15dcb01b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNwYSUyMHJlbGF4YXRpb24lMjBhcmVhfGVufDF8fHx8MTc1NzAwMzAzNXww&ixlib=rb-4.1.0&q=80&w=1080", new: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzU3MDAzMDM1fDA&ixlib=rb-4.1.0&q=80&w=1080" },
          { old: "https://images.unsplash.com/photo-1582533568805-78a15dcb01b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNwYSUyMHJlbGF4YXRpb24lMjBhcmVhfGVufDF8fHx8MTc1NzAwMzAzNXww&ixlib=rb-4.1.0&q=80&w=1080", new: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzU3MDAzMDM1fDA&ixlib=rb-4.1.0&q=80&w=1080" }
        ],
        challengesImage: "https://images.unsplash.com/photo-1582533568805-78a15dcb01b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNwYSUyMHJlbGF4YXRpb24lMjBhcmVhfGVufDF8fHx8MTc1NzAwMzAzNXww&ixlib=rb-4.1.0&q=80&w=1080",
        howWeDeliveredImage: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzU3MDAzMDM1fDA&ixlib=rb-4.1.0&q=80&w=1080"
      },
      "grand-palace-hotel-dubai": {
        title: "Grand Palace Hotel Dubai",
        subtitle: "Complete furniture solution for a 5-star luxury resort featuring custom-designed bedroom sets, lobby furniture, and dining collections",
        description: "A comprehensive furniture transformation project for one of Dubai's most prestigious hotels, featuring luxury bedroom sets, elegant lobby furniture, and sophisticated dining collections.",
        heroImage: "https://images.unsplash.com/photo-1590490359854-dfba19688d70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHN1aXRlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU2OTE4Njk1fDA&ixlib=rb-4.1.0&q=80&w=1080",
        beforeAfterImages: [
          { old: "https://images.unsplash.com/photo-1582533568805-78a15dcb01b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNwYSUyMHJlbGF4YXRpb24lMjBhcmVhfGVufDF8fHx8MTc1NzAwMzAzNXww&ixlib=rb-4.1.0&q=80&w=1080", new: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzU3MDAzMDM1fDA&ixlib=rb-4.1.0&q=80&w=1080" },
          { old: "https://images.unsplash.com/photo-1582533568805-78a15dcb01b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNwYSUyMHJlbGF4YXRpb24lMjBhcmVhfGVufDF8fHx8MTc1NzAwMzAzNXww&ixlib=rb-4.1.0&q=80&w=1080", new: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzU3MDAzMDM1fDA&ixlib=rb-4.1.0&q=80&w=1080" },
          { old: "https://images.unsplash.com/photo-1582533568805-78a15dcb01b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNwYSUyMHJlbGF4YXRpb24lMjBhcmVhfGVufDF8fHx8MTc1NzAwMzAzNXww&ixlib=rb-4.1.0&q=80&w=1080", new: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzU3MDAzMDM1fDA&ixlib=rb-4.1.0&q=80&w=1080" }
        ],
        challengesImage: "https://images.unsplash.com/photo-1582533568805-78a15dcb01b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNwYSUyMHJlbGF4YXRpb24lMjBhcmVhfGVufDF8fHx8MTc1NzAwMzAzNXww&ixlib=rb-4.1.0&q=80&w=1080",
        howWeDeliveredImage: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzU3MDAzMDM1fDA&ixlib=rb-4.1.0&q=80&w=1080"
      },
      "wellness-spa-resort": {
        title: "Wellness Spa Resort",
        subtitle: "Sustainable furniture solutions for an eco-luxury spa resort with focus on natural materials and wellness-oriented design",
        description: "A comprehensive furniture transformation project for a luxury spa resort, featuring sustainable materials, wellness-focused design, and eco-friendly solutions.",
        heroImage: "https://images.unsplash.com/photo-1582533568805-78a15dcb01b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNwYSUyMHJlbGF4YXRpb24lMjBhcmVhfGVufDF8fHx8MTc1NzAwMzAzNXww&ixlib=rb-4.1.0&q=80&w=1080",
        beforeAfterImages: [
          { old: "https://images.unsplash.com/photo-1582533568805-78a15dcb01b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNwYSUyMHJlbGF4YXRpb24lMjBhcmVhfGVufDF8fHx8MTc1NzAwMzAzNXww&ixlib=rb-4.1.0&q=80&w=1080", new: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzU3MDAzMDM1fDA&ixlib=rb-4.1.0&q=80&w=1080" },
          { old: "https://images.unsplash.com/photo-1582533568805-78a15dcb01b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNwYSUyMHJlbGF4YXRpb24lMjBhcmVhfGVufDF8fHx8MTc1NzAwMzAzNXww&ixlib=rb-4.1.0&q=80&w=1080", new: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzU3MDAzMDM1fDA&ixlib=rb-4.1.0&q=80&w=1080" }
        ],
        challengesImage: "https://images.unsplash.com/photo-1582533568805-78a15dcb01b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNwYSUyMHJlbGF4YXRpb24lMjBhcmVhfGVufDF8fHx8MTc1NzAwMzAzNXww&ixlib=rb-4.1.0&q=80&w=1080",
        howWeDeliveredImage: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzU3MDAzMDM1fDA&ixlib=rb-4.1.0&q=80&w=1080"
      },
      "metropolitan-boutique-hotel": {
        title: "Metropolitan Boutique Hotel",
        subtitle: "Modern urban design with space-efficient solutions for a trendy boutique hotel in Manhattan's financial district",
        description: "A comprehensive furniture transformation project for a boutique hotel, featuring modern urban design, space-efficient solutions, and contemporary aesthetics.",
        heroImage: "https://images.unsplash.com/photo-1718104717529-0059a1a860fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3V0aXF1ZSUyMGhvdGVsJTIwcmVjZXB0aW9ufGVufDF8fHx8MTc1NzAwMzAzNnww&ixlib=rb-4.1.0&q=80&w=1080",
        beforeAfterImages: [
          { old: "https://images.unsplash.com/photo-1582533568805-78a15dcb01b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNwYSUyMHJlbGF4YXRpb24lMjBhcmVhfGVufDF8fHx8MTc1NzAwMzAzNXww&ixlib=rb-4.1.0&q=80&w=1080", new: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzU3MDAzMDM1fDA&ixlib=rb-4.1.0&q=80&w=1080" },
          { old: "https://images.unsplash.com/photo-1582533568805-78a15dcb01b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNwYSUyMHJlbGF4YXRpb24lMjBhcmVhfGVufDF8fHx8MTc1NzAwMzAzNXww&ixlib=rb-4.1.0&q=80&w=1080", new: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzU3MDAzMDM1fDA&ixlib=rb-4.1.0&q=80&w=1080" }
        ],
        challengesImage: "https://images.unsplash.com/photo-1582533568805-78a15dcb01b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNwYSUyMHJlbGF4YXRpb24lMjBhcmVhfGVufDF8fHx8MTc1NzAwMzAzNXww&ixlib=rb-4.1.0&q=80&w=1080",
        howWeDeliveredImage: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzU3MDAzMDM1fDA&ixlib=rb-4.1.0&q=80&w=1080"
      },
      "royal-heritage-hotel": {
        title: "Royal Heritage Hotel",
        subtitle: "Classic elegance meets modern comfort in this restored Victorian hotel with period-appropriate custom furniture",
        description: "A comprehensive furniture transformation project for a heritage hotel, featuring classic elegance, period-appropriate design, and modern comfort solutions.",
        heroImage: "https://images.unsplash.com/photo-1755644046048-989506b73a5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3RlbCUyMGxvYmJ5JTIwZnVybml0dXJlfGVufDF8fHx8MTc1NzAwMjkwNnww&ixlib=rb-4.1.0&q=80&w=1080",
        beforeAfterImages: [
          { old: "https://images.unsplash.com/photo-1582533568805-78a15dcb01b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNwYSUyMHJlbGF4YXRpb24lMjBhcmVhfGVufDF8fHx8MTc1NzAwMzAzNXww&ixlib=rb-4.1.0&q=80&w=1080", new: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHx8MTc1NzAwMzAzNXww&ixlib=rb-4.1.0&q=80&w=1080" },
          { old: "https://images.unsplash.com/photo-1582533568805-78a15dcb01b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNwYSUyMHJlbGF4YXRpb24lMjBhcmVhfGVufDF8fHx8MTc1NzAwMzAzNXww&ixlib=rb-4.1.0&q=80&w=1080", new: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHx8MTc1NzAwMzAzNXww&ixlib=rb-4.1.0&q=80&w=1080" },
          { old: "https://images.unsplash.com/photo-1582533568805-78a15dcb01b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNwYSUyMHJlbGF4YXRpb24lMjBhcmVhfGVufDF8fHx8MTc1NzAwMzAzNXww&ixlib=rb-4.1.0&q=80&w=1080", new: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHx8MTc1NzAwMzAzNXww&ixlib=rb-4.1.0&q=80&w=1080" }
        ],
        challengesImage: "https://images.unsplash.com/photo-1582533568805-78a15dcb01b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNwYSUyMHJlbGF4YXRpb24lMjBhcmVhfGVufDF8fHx8MTc1NzAwMzAzNXww&ixlib=rb-4.1.0&q=80&w=1080",
        howWeDeliveredImage: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzU3MDAzMDM1fDA&ixlib=rb-4.1.0&q=80&w=1080"
      },
      "banff-mountain-resort": {
        title: "Banff Mountain Resort",
        subtitle: "Sustainable furniture collection for Canada's premier mountain resort, featuring locally-sourced Canadian maple and eco-friendly finishes",
        description: "A comprehensive furniture transformation project for Canada's premier mountain resort, featuring sustainable materials, Canadian maple, and eco-friendly solutions.",
        heroImage: "https://images.unsplash.com/photo-1739907549777-6ff7cd3921fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5hZGlhbiUyMG1vdW50YWluJTIwaG90ZWwlMjBsb2RnZXxlbnwxfHx8fDE3NTc1MDI0MTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
        beforeAfterImages: [
          { old: "https://images.unsplash.com/photo-1582533568805-78a15dcb01b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNwYSUyMHJlbGF4YXRpb24lMjBhcmVhfGVufDF8fHx8MTc1NzAwMzAzNXww&ixlib=rb-4.1.0&q=80&w=1080", new: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzU3MDAzMDM1fDA&ixlib=rb-4.1.0&q=80&w=1080" },
          { old: "https://images.unsplash.com/photo-1582533568805-78a15dcb01b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNwYSUyMHJlbGF4YXRpb24lMjBhcmVhfGVufDF8fHx8MTc1NzAwMzAzNXww&ixlib=rb-4.1.0&q=80&w=1080", new: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzU3MDAzMDM1fDA&ixlib=rb-4.1.0&q=80&w=1080" }
        ],
        challengesImage: "https://images.unsplash.com/photo-1582533568805-78a15dcb01b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNwYSUyMHJlbGF4YXRpb24lMjBhcmVhfGVufDF8fHx8MTc1NzAwMzAzNXww&ixlib=rb-4.1.0&q=80&w=1080",
        howWeDeliveredImage: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzU3MDAzMDM1fDA&ixlib=rb-4.1.0&q=80&w=1080"
      },
      "vancouver-waterfront-hotel": {
        title: "Vancouver Waterfront Hotel",
        subtitle: "Modern coastal design with reclaimed materials from BC forests, creating a unique Pacific Northwest hospitality experience",
        description: "A comprehensive furniture transformation project for a waterfront hotel, featuring modern coastal design, reclaimed materials, and Pacific Northwest aesthetics.",
        heroImage: "https://images.unsplash.com/photo-1725623831897-fb009acfe742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YW5jb3V2ZXIlMjBsdXh1cnklMjBob3RlbCUyMGludGVyaW9yfGVufDF8fHx8MTc1NzUwMjQxNHww&ixlib=rb-4.1.0&q=80&w=1080",
        beforeAfterImages: [
          { old: "https://images.unsplash.com/photo-1582533568805-78a15dcb01b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNwYSUyMHJlbGF4YXRpb24lMjBhcmVhfGVufDF8fHx8MTc1NzAwMzAzNXww&ixlib=rb-4.1.0&q=80&w=1080", new: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzU3MDAzMDM1fDA&ixlib=rb-4.1.0&q=80&w=1080" },
          { old: "https://images.unsplash.com/photo-1582533568805-78a15dcb01b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNwYSUyMHJlbGF4YXRpb24lMjBhcmVhfGVufDF8fHx8MTc1NzAwMzAzNXww&ixlib=rb-4.1.0&q=80&w=1080", new: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzU3MDAzMDM1fDA&ixlib=rb-4.1.0&q=80&w=1080" }
        ],
        challengesImage: "https://images.unsplash.com/photo-1582533568805-78a15dcb01b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNwYSUyMHJlbGF4YXRpb24lMjBhcmVhfGVufDF8fHx8MTc1NzAwMzAzNXww&ixlib=rb-4.1.0&q=80&w=1080",
        howWeDeliveredImage: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzU3MDAzMDM1fDA&ixlib=rb-4.1.0&q=80&w=1080"
      },
      "toronto-financial-district-hotel": {
        title: "Toronto Financial District Hotel",
        subtitle: "Contemporary urban furniture solutions with emphasis on space efficiency and Canadian design aesthetic for business travelers",
        description: "A comprehensive furniture transformation project for a business hotel, featuring contemporary urban design, space efficiency, and Canadian design aesthetics.",
        heroImage: "https://images.unsplash.com/photo-1718104717529-0059a1a860fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3JvbnRvJTIwYm91dGlxdWUlMjBob3RlbCUyMHJvb218ZW58MXx8fHwxNzU3NTAyNDE3fDA&ixlib=rb-4.1.0&q=80&w=1080",
        beforeAfterImages: [
          { old: "https://images.unsplash.com/photo-1582533568805-78a15dcb01b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNwYSUyMHJlbGF4YXRpb24lMjBhcmVhfGVufDF8fHx8MTc1NzAwMzAzNXww&ixlib=rb-4.1.0&q=80&w=1080", new: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzU3MDAzMDM1fDA&ixlib=rb-4.1.0&q=80&w=1080" },
          { old: "https://images.unsplash.com/photo-1582533568805-78a15dcb01b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNwYSUyMHJlbGF4YXRpb24lMjBhcmVhfGVufDF8fHx8MTc1NzAwMzAzNXww&ixlib=rb-4.1.0&q=80&w=1080", new: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzU3MDAzMDM1fDA&ixlib=rb-4.1.0&q=80&w=1080" }
        ],
        challengesImage: "https://images.unsplash.com/photo-1582533568805-78a15dcb01b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNwYSUyMHJlbGF4YXRpb24lMjBhcmVhfGVufDF8fHx8MTc1NzAwMzAzNXww&ixlib=rb-4.1.0&q=80&w=1080",
        howWeDeliveredImage: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzU3MDAzMDM1fDA&ixlib=rb-4.1.0&q=80&w=1080"
      },
      "beachfront-resort-paradise": {
        title: "Beachfront Resort Paradise",
        subtitle: "Tropical luxury furniture collection designed for overwater villas and beachfront suites with weather-resistant materials",
        description: "A comprehensive furniture transformation project for a tropical beachfront resort, featuring weather-resistant materials, overwater villa design, and luxury beachfront aesthetics.",
        heroImage: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHJlc29ydCUyMGx1eHVyeXxlbnwxfHx8fDE3NTcwMDMwMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
        beforeAfterImages: [
          { old: "https://images.unsplash.com/photo-1582533568805-78a15dcb01b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNwYSUyMHJlbGF4YXRpb24lMjBhcmVhfGVufDF8fHx8MTc1NzAwMzAzNXww&ixlib=rb-4.1.0&q=80&w=1080", new: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzU3MDAzMDM1fDA&ixlib=rb-4.1.0&q=80&w=1080" },
          { old: "https://images.unsplash.com/photo-1582533568805-78a15dcb01b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNwYSUyMHJlbGF4YXRpb24lMjBhcmVhfGVufDF8fHx8MTc1NzAwMzAzNXww&ixlib=rb-4.1.0&q=80&w=1080", new: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzU3MDAzMDM1fDA&ixlib=rb-4.1.0&q=80&w=1080" }
        ],
        challengesImage: "https://images.unsplash.com/photo-1582533568805-78a15dcb01b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNwYSUyMHJlbGF4YXRpb24lMjBhcmVhfGVufDF8fHx8MTc1NzAwMzAzNXww&ixlib=rb-4.1.0&q=80&w=1080",
        howWeDeliveredImage: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzU3MDAzMDM1fDA&ixlib=rb-4.1.0&q=80&w=1080"
      },
      "mountain-lodge-retreat": {
        title: "Mountain Lodge Retreat",
        subtitle: "Rustic elegance furniture collection featuring locally sourced wood and traditional Alpine craftsmanship",
        description: "A comprehensive furniture transformation project for a mountain lodge, featuring rustic elegance, locally sourced materials, and traditional Alpine craftsmanship.",
        heroImage: "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxvZGdlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU3MDAzMDM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
        beforeAfterImages: [
          { old: "https://images.unsplash.com/photo-1582533568805-78a15dcb01b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNwYSUyMHJlbGF4YXRpb24lMjBhcmVhfGVufDF8fHx8MTc1NzAwMzAzNXww&ixlib=rb-4.1.0&q=80&w=1080", new: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzU3MDAzMDM1fDA&ixlib=rb-4.1.0&q=80&w=1080" },
          { old: "https://images.unsplash.com/photo-1582533568805-78a15dcb01b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNwYSUyMHJlbGF4YXRpb24lMjBhcmVhfGVufDF8fHx8MTc1NzAwMzAzNXww&ixlib=rb-4.1.0&q=80&w=1080", new: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzU3MDAzMDM1fDA&ixlib=rb-4.1.0&q=80&w=1080" }
        ],
        challengesImage: "https://images.unsplash.com/photo-1582533568805-78a15dcb01b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNwYSUyMHJlbGF4YXRpb24lMjBhcmVhfGVufDF8fHx8MTc1NzAwMzAzNXww&ixlib=rb-4.1.0&q=80&w=1080",
        howWeDeliveredImage: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzU3MDAzMDM1fDA&ixlib=rb-4.1.0&q=80&w=1080"
      },
      "urban-business-hotel": {
        title: "Urban Business Hotel",
        subtitle: "Contemporary business-focused furniture with integrated technology solutions for the modern corporate traveler",
        description: "A comprehensive furniture transformation project for a business hotel, featuring contemporary design, integrated technology solutions, and corporate-focused aesthetics.",
        heroImage: "https://images.unsplash.com/photo-1671722294182-ed01cbe66bd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBmdXJuaXR1cmUlMjBtYW51ZmFjdHVyaW5nfGVufDF8fHx8MTc1NzAwMjgwNHww&ixlib=rb-4.1.0&q=80&w=1080",
        beforeAfterImages: [
          { old: "https://images.unsplash.com/photo-1582533568805-78a15dcb01b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNwYSUyMHJlbGF4YXRpb24lMjBhcmVhfGVufDF8fHx8MTc1NzAwMzAzNXww&ixlib=rb-4.1.0&q=80&w=1080", new: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzU3MDAzMDM1fDA&ixlib=rb-4.1.0&q=80&w=1080" },
          { old: "https://images.unsplash.com/photo-1582533568805-78a15dcb01b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNwYSUyMHJlbGF4YXRpb24lMjBhcmVhfGVufDF8fHx8MTc1NzAwMzAzNXww&ixlib=rb-4.1.0&q=80&w=1080", new: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzU3MDAzMDM1fDA&ixlib=rb-4.1.0&q=80&w=1080" }
        ],
        challengesImage: "https://images.unsplash.com/photo-1582533568805-78a15dcb01b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNwYSUyMHJlbGF4YXRpb24lMjBhcmVhfGVufDF8fHx8MTc1NzAwMzAzNXww&ixlib=rb-4.1.0&q=80&w=1080",
        howWeDeliveredImage: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzU3MDAzMDM1fDA&ixlib=rb-4.1.0&q=80&w=1080"
      },
      "historic-mansion-hotel": {
        title: "Historic Mansion Hotel",
        subtitle: "Restoration of antique furniture and creation of period-appropriate pieces for a 16th-century mansion converted into luxury hotel",
        description: "A comprehensive furniture transformation project for a historic mansion hotel, featuring antique restoration, period-appropriate design, and luxury heritage aesthetics.",
        heroImage: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpYyUyMGhvdGVsJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU3MDAzMDM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
        beforeAfterImages: [
          { old: "https://images.unsplash.com/photo-1582533568805-78a15dcb01b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNwYSUyMHJlbGF4YXRpb24lMjBhcmVhfGVufDF8fHx8MTc1NzAwMzAzNXww&ixlib=rb-4.1.0&q=80&w=1080", new: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzU3MDAzMDM1fDA&ixlib=rb-4.1.0&q=80&w=1080" },
          { old: "https://images.unsplash.com/photo-1582533568805-78a15dcb01b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNwYSUyMHJlbGF4YXRpb24lMjBhcmVhfGVufDF8fHx8MTc1NzAwMzAzNXww&ixlib=rb-4.1.0&q=80&w=1080", new: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzU3MDAzMDM1fDA&ixlib=rb-4.1.0&q=80&w=1080" }
        ],
        challengesImage: "https://images.unsplash.com/photo-1582533568805-78a15dcb01b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNwYSUyMHJlbGF4YXRpb24lMjBhcmVhfGVufDF8fHx8MTc1NzAwMzAzNXww&ixlib=rb-4.1.0&q=80&w=1080",
        howWeDeliveredImage: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzU3MDAzMDM1fDA&ixlib=rb-4.1.0&q=80&w=1080"
      },
      "desert-safari-lodge": {
        title: "Desert Safari Lodge",
        subtitle: "Luxury desert camping experience furniture designed to withstand extreme temperatures while providing 5-star comfort",
        description: "A comprehensive furniture transformation project for a desert safari lodge, featuring luxury camping design, extreme temperature resistance, and 5-star comfort solutions.",
        heroImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNlcnQlMjBsb2RnZSUyMGx1eHVyeXxlbnwxfHx8fDE3NTcwMDMwMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
        beforeAfterImages: [
          { old: "https://images.unsplash.com/photo-1582533568805-78a15dcb01b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNwYSUyMHJlbGF4YXRpb24lMjBhcmVhfGVufDF8fHx8MTc1NzAwMzAzNXww&ixlib=rb-4.1.0&q=80&w=1080", new: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzU3MDAzMDM1fDA&ixlib=rb-4.1.0&q=80&w=1080" },
          { old: "https://images.unsplash.com/photo-1582533568805-78a15dcb01b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNwYSUyMHJlbGF4YXRpb24lMjBhcmVhfGVufDF8fHx8MTc1NzAwMzAzNXww&ixlib=rb-4.1.0&q=80&w=1080", new: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzU3MDAzMDM1fDA&ixlib=rb-4.1.0&q=80&w=1080" }
        ],
        challengesImage: "https://images.unsplash.com/photo-1582533568805-78a15dcb01b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNwYSUyMHJlbGF4YXRpb24lMjBhcmVhfGVufDF8fHx8MTc1NzAwMzAzNXww&ixlib=rb-4.1.0&q=80&w=1080",
        howWeDeliveredImage: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzU3MDAzMDM1fDA&ixlib=rb-4.1.0&q=80&w=1080"
      }
    };

    return projectsData[slug as keyof typeof projectsData];
  }, [slug]);

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
      {/* Hero Section */}
      <div className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] overflow-hidden">
        <ImageWithFallback
          src={project.heroImage}
          alt={project.title}
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 leading-tight">{project.title}</h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 lg:mb-8 px-2">{project.subtitle}</p>
            <Link href="http://localhost:3001/contact">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">
                Request A Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* See Transformation Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-4 px-2">
              See Transformation {project.title}
            </h2>
            <p className="text-sm sm:text-base lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              {project.description}
            </p>
          </div>

          <div className="w-full space-y-8 sm:space-y-12">
            {project.beforeAfterImages.map((imageSet, index) => (
              <div key={index} className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 w-full">
                {/* Before Image */}
                <div className="flex-1 w-full sm:w-auto">
                  <div className="relative group">
                    <ImageWithFallback
                      src={imageSet.old}
                      alt={`Before transformation ${index + 1}`}
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
                      src={imageSet.new}
                      alt={`After transformation ${index + 1}`}
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
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 px-2">Ready to Transform Your Space?</h2>
          <p className="text-sm sm:text-base lg:text-xl mb-6 sm:mb-8 opacity-90 px-2">
            Let us help you create exceptional hospitality experiences with our premium furniture solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Link href="http://localhost:3001/contact" className="w-full sm:w-auto">
              <Button variant="outline" className="bg-white text-primary hover:bg-gray-100 text-xs sm:text-base px-3 sm:px-6 py-1.5 sm:py-3 w-full sm:w-auto">
                <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                Get Free Consultation
              </Button>
            </Link>
            <Link href="http://localhost:3001/about" className="w-full sm:w-auto">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 text-xs sm:text-base px-3 sm:px-6 py-1.5 sm:py-3 w-full sm:w-auto">
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 animate-pulse" style={{ animation: 'arrowMove 2s ease-in-out infinite' }} />
                Learn About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Project Details Section */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-4 px-2">Project Challenges</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 px-2">
                Every transformation comes with unique challenges. Our team worked closely with the client to overcome space constraints, timeline requirements, and design specifications to deliver exceptional results.
              </p>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700">Custom design solutions</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700">Timeline optimization</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700">Quality assurance</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700">Stakeholder coordination</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700">Hospitality standards compliance</span>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <ImageWithFallback
                src={project.challengesImage}
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
                src={project.howWeDeliveredImage}
                alt="How we delivered"
                width={800}
                height={400}
                className="w-full h-[250px] sm:h-[300px] lg:h-[400px] object-cover rounded-xl sm:rounded-2xl shadow-xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 px-2">
                Our comprehensive approach ensured seamless project execution from concept to completion, delivering exceptional results that exceeded client expectations.
              </p>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700">Project management excellence</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700">Quality control processes</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700">Client communication</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700">Logistics coordination</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700">Installation expertise</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New CTA Section */}
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
              <Link href="http://localhost:3001/contact" className="w-full sm:w-auto">
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

      {/* New Content Section */}
      <section className="py-8 sm:py-12 lg:py-16" style={{ backgroundColor: '#111e33' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 px-2">
            Lorem ipsum dolor sit amet consectetur
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-white mb-4 sm:mb-6 leading-relaxed px-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-white leading-relaxed px-2">
            but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </section>

      {/* See What Guest Say Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8 sm:mb-12 lg:mb-16 px-2">
            See What Guest Say
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
            {/* Screenshot Testimonial 1 */}
            <div className="relative group">
              <div className="bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden" style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)' }}>
                {/* Screenshot Header */}
                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="text-xs text-gray-500 font-mono">Review</div>
                </div>
                
                {/* Review Content */}
                <div className="p-4 sm:p-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="relative flex-shrink-0">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBiYWNrJTIwdmlldyUyMHdhdGVyfGVufDF8fHx8MTc1NzAwMzAzNXww&ixlib=rb-4.1.0&q=80&w=400"
                        alt="Guest profile"
                        width={64}
                        height={64}
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-gray-100"
                      />
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 sm:w-6 sm:h-6 bg-orange-500 rounded-full flex items-center justify-center border-2 border-white">
                        <Star className="w-2 h-2 sm:w-3 sm:h-3 text-white fill-current" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="flex space-x-1">
                          {[...Array(4)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                          ))}
                          <Star className="w-3 h-3 sm:w-4 sm:h-4 text-gray-300" />
                        </div>
                        <span className="text-xs text-gray-500">2 weeks ago</span>
                      </div>
                      <p className="text-sm sm:text-base text-gray-800 leading-relaxed font-medium">
                        &ldquo;Pool, <span className="font-bold text-gray-900">hot tub</span>, decent <span className="font-bold text-gray-900">breakfast</span> with eggs, sausage, cereal, <span className="font-bold text-gray-900">waffles</span>, <span className="font-bold text-gray-900">coffee</span>.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Screenshot Testimonial 2 */}
            <div className="relative group">
              <div className="bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden" style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)' }}>
                {/* Screenshot Header */}
                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="text-xs text-gray-500 font-mono">Review</div>
                </div>
                
                {/* Review Content */}
                <div className="p-4 sm:p-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="relative flex-shrink-0">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1494790108755-2616b612b786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGJsb25kZSUyMGhhaXIlMjByZWQlMjBoYXR8ZW58MXx8fHwxNzU3MDAzMDM1fDA&ixlib=rb-4.1.0&q=80&w=400"
                        alt="Guest profile"
                        width={64}
                        height={64}
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-gray-100"
                      />
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 sm:w-6 sm:h-6 bg-orange-500 rounded-full flex items-center justify-center border-2 border-white">
                        <Star className="w-2 h-2 sm:w-3 sm:h-3 text-white fill-current" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <span className="text-xs text-gray-500">1 month ago</span>
                      </div>
                      <p className="text-sm sm:text-base text-gray-800 leading-relaxed font-medium">
                        &ldquo;<span className="font-bold text-gray-900">Easy access</span> to the main drag for <span className="font-bold text-gray-900">food</span> and <span className="font-bold text-gray-900">shopping</span>.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Screenshot Testimonial 3 - Centered */}
          <div className="flex justify-center">
            <div className="relative group max-w-md w-full">
              <div className="bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden" style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)' }}>
                {/* Screenshot Header */}
                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="text-xs text-gray-500 font-mono">Review</div>
                </div>
                
                {/* Review Content */}
                <div className="p-4 sm:p-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="relative flex-shrink-0">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBiZWFjaCUyMHdhdGVyfGVufDF8fHx8MTc1NzAwMzAzNXww&ixlib=rb-4.1.0&q=80&w=400"
                        alt="Guest profile"
                        width={64}
                        height={64}
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-gray-100"
                      />
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 sm:w-6 sm:h-6 bg-orange-500 rounded-full flex items-center justify-center border-2 border-white">
                        <Star className="w-2 h-2 sm:w-3 sm:h-3 text-white fill-current" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <span className="text-xs text-gray-500">3 weeks ago</span>
                      </div>
                      <p className="text-sm sm:text-base text-gray-800 leading-relaxed font-medium">
                        &ldquo;Very very clean <span className="font-bold text-gray-900">facility</span> wonderful <span className="font-bold text-gray-900">staff</span> cheapest <span className="font-bold text-gray-900">price</span> in town&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Our Client Say About Our Work Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 px-2">
            What Our Client Say About Our Work
          </h2>
          
          {/* 5 Golden Stars */}
          <div className="flex justify-center space-x-1 sm:space-x-2 mb-4 sm:mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 fill-current" />
            ))}
          </div>
          
          {/* Best Quality Furniture */}
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 px-2">
            Best Quality Furniture
          </h3>
          
          {/* Lorem Ipsum Text */}
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-8 sm:mb-12 leading-relaxed px-2">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here&apos;.
          </p>
          
          {/* Client Information */}
          <div className="flex items-center justify-center space-x-3 sm:space-x-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-xs sm:text-sm">LQ</span>
            </div>
            <div className="text-left">
              <p className="text-orange-500 font-bold text-base sm:text-lg">Mark Frinch</p>
              <p className="text-gray-600 text-sm sm:text-base">LaQuinta Inn</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hospitality Buying Guide Section */}
      <section className="pt-8 sm:pt-12 lg:pt-16 pb-4 sm:pb-6 lg:pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8 sm:mb-12 lg:mb-16 px-2">
            Hospitality Buying Guide for Hotel Owners
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* Left Column - Guide Points */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              {/* Guide Point 1 */}
              <div 
                className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                  activeGuideItem === 0 
                    ? 'border-orange-500 bg-orange-50' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setActiveGuideItem(0)}
              >
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                    activeGuideItem === 0 ? 'bg-orange-500' : 'bg-gray-500'
                  }`}>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-1 sm:mb-2">
                      How to choose the right hotel Soft Seating design
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Strategic design selection that aligns with your brand identity and guest expectations for optimal hospitality experience.
                    </p>
                  </div>
                </div>
              </div>

              {/* Guide Point 2 */}
              <div 
                className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                  activeGuideItem === 1 
                    ? 'border-orange-500 bg-orange-50' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setActiveGuideItem(1)}
              >
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                    activeGuideItem === 1 ? 'bg-orange-500' : 'bg-gray-500'
                  }`}>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a2 2 0 114 0 2 2 0 01-4 0zm8 0a2 2 0 114 0 2 2 0 01-4 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-1 sm:mb-2">
                      Bulk order vs. custom manufacturing
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Understanding procurement strategies to balance cost-effectiveness with customization for your unique requirements.
                    </p>
                  </div>
                </div>
              </div>

              {/* Guide Point 3 */}
              <div 
                className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                  activeGuideItem === 2 
                    ? 'border-orange-500 bg-orange-50' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setActiveGuideItem(2)}
              >
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                    activeGuideItem === 2 ? 'bg-orange-500' : 'bg-gray-500'
                  }`}>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-1 sm:mb-2">
                      Key considerations: durability, cleaning, guest experience, budget
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Comprehensive evaluation framework covering all critical factors for successful furniture investment decisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Dynamic Content */}
            <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
              {activeGuideItem === 0 && (
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                    How to Choose the Right Hotel Soft Seating Design
                  </h3>
                  <p className="text-orange-500 font-semibold mb-4 sm:mb-6 text-sm sm:text-base">Design Selection Excellence</p>
                  <div className="space-y-3 sm:space-y-4 text-gray-600 text-xs sm:text-sm lg:text-base">
                    <p>
                      Consider your hotel&apos;s brand identity and target guest demographics to select seating that aligns with your overall aesthetic vision and guest expectations.
                    </p>
                    <p>
                      Evaluate space constraints and traffic patterns to ensure optimal furniture placement that enhances guest flow and comfort throughout your property.
                    </p>
                    <p>
                      Choose versatile designs that can adapt to different spaces - from intimate conversation areas to large gatherings - maximizing your investment&apos;s functionality.
                    </p>
                  </div>
                  <Link href="http://localhost:3001/contact" className="inline-block mt-6 sm:mt-8">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-lg flex items-center text-sm sm:text-base">
                      Get Expert Consultation
                      <ArrowRight className="w-4 h-4 ml-2 animate-pulse" style={{ animation: 'arrowMove 2s ease-in-out infinite' }} />
                    </Button>
                  </Link>
                </div>
              )}

              {activeGuideItem === 1 && (
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                    Bulk Order vs. Custom Manufacturing
                  </h3>
                  <p className="text-orange-500 font-semibold mb-4 sm:mb-6 text-sm sm:text-base">Procurement Strategy Excellence</p>
                  <div className="space-y-3 sm:space-y-4 text-gray-600 text-xs sm:text-sm lg:text-base">
                    <p>
                      Bulk orders offer cost advantages and faster delivery times, ideal for standard configurations and high-volume requirements across multiple properties.
                    </p>
                    <p>
                      Custom manufacturing provides unique design solutions tailored to your specific brand requirements, ensuring perfect alignment with your hospitality vision.
                    </p>
                    <p>
                      Evaluate your timeline, budget constraints, and design requirements to determine the optimal procurement approach for your furniture investment.
                    </p>
                  </div>
                  <Link href="http://localhost:3001/contact" className="inline-block mt-6 sm:mt-8">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-lg flex items-center text-sm sm:text-base">
                      Get Expert Consultation
                      <ArrowRight className="w-4 h-4 ml-2 animate-pulse" style={{ animation: 'arrowMove 2s ease-in-out infinite' }} />
                    </Button>
                  </Link>
                </div>
              )}

              {activeGuideItem === 2 && (
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                    Key Considerations: Durability, Cleaning, Guest Experience, Budget
                  </h3>
                  <p className="text-orange-500 font-semibold mb-4 sm:mb-6 text-sm sm:text-base">Investment Framework Excellence</p>
                  <div className="space-y-3 sm:space-y-4 text-gray-600 text-xs sm:text-sm lg:text-base">
                    <p>
                      Prioritize durability and quality materials that withstand high-traffic hospitality environments while maintaining aesthetic appeal and comfort standards.
                    </p>
                    <p>
                      Consider maintenance requirements and cleaning protocols to ensure furniture remains pristine and hygienic throughout its lifecycle in your hotel.
                    </p>
                    <p>
                      Balance budget constraints with guest experience goals, focusing on furniture that enhances comfort, functionality, and overall satisfaction.
                    </p>
                  </div>
                  <Link href="http://localhost:3001/contact" className="inline-block mt-6 sm:mt-8">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-lg flex items-center text-sm sm:text-base">
                      Get Expert Consultation
                      <ArrowRight className="w-4 h-4 ml-2 animate-pulse" style={{ animation: 'arrowMove 2s ease-in-out infinite' }} />
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="py-6 sm:py-8 mt-[15px] sm:mt-[30px] mb-[5px] sm:mb-[10px]" style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-2 px-2">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 text-center mb-6 sm:mb-8 px-2">
            Quick answers to common questions about our soft seating solutions
          </p>
          
          <div className="space-y-3 sm:space-y-4">
            {/* FAQ Item 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div 
                className="flex items-center justify-between p-4 sm:p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => setOpenFAQ(openFAQ === 0 ? null : 0)}
              >
                <h3 className="text-sm sm:text-base lg:text-lg font-medium text-gray-900 pr-2">
                  What makes hotel furniture different from normal furniture?
                </h3>
                <svg 
                  className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-600 flex-shrink-0 transition-transform duration-200 ${
                    openFAQ === 0 ? 'rotate-180' : ''
                  }`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              {openFAQ === 0 && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      Hotel furniture is specifically designed for high-traffic commercial environments. It features enhanced durability, fire-resistant materials, easy-to-clean surfaces, and meets strict hospitality industry standards. Unlike residential furniture, it&apos;s built to withstand constant use while maintaining comfort and aesthetic appeal for guests.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div 
                className="flex items-center justify-between p-4 sm:p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => setOpenFAQ(openFAQ === 1 ? null : 1)}
              >
                <h3 className="text-sm sm:text-base lg:text-lg font-medium text-gray-900 pr-2">
                  How long does it take to manufacture custom hotel furniture?
                </h3>
                <svg 
                  className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-600 flex-shrink-0 transition-transform duration-200 ${
                    openFAQ === 1 ? 'rotate-180' : ''
                  }`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              {openFAQ === 1 && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      Custom hotel furniture manufacturing typically takes 8-12 weeks from design approval to delivery. This timeline includes material sourcing, production, quality control, and finishing. For bulk orders or standard designs, the timeline can be reduced to 4-6 weeks. We provide detailed project timelines during the consultation phase.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div 
                className="flex items-center justify-between p-4 sm:p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => setOpenFAQ(openFAQ === 2 ? null : 2)}
              >
                <h3 className="text-sm sm:text-base lg:text-lg font-medium text-gray-900 pr-2">
                  Do you provide installation services for hotel furniture?
                </h3>
                <svg 
                  className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-600 flex-shrink-0 transition-transform duration-200 ${
                    openFAQ === 2 ? 'rotate-180' : ''
                  }`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              {openFAQ === 2 && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      Yes, we offer comprehensive installation services for all our hotel furniture. Our experienced installation team ensures proper setup, assembly, and placement according to your specifications. We coordinate with your project timeline and can work around guest schedules to minimize disruption to your operations.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div 
                className="flex items-center justify-between p-4 sm:p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => setOpenFAQ(openFAQ === 3 ? null : 3)}
              >
                <h3 className="text-sm sm:text-base lg:text-lg font-medium text-gray-900 pr-2">
                  What warranty do you offer on hotel furniture?
                </h3>
                <svg 
                  className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-600 flex-shrink-0 transition-transform duration-200 ${
                    openFAQ === 3 ? 'rotate-180' : ''
                  }`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              {openFAQ === 3 && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      We provide a comprehensive 5-year warranty on all hotel furniture, covering manufacturing defects and structural issues. The warranty includes free repair or replacement of defective parts. We also offer extended warranty options and maintenance programs to ensure your furniture investment remains in excellent condition throughout its lifecycle.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

    </div>
  );
}
