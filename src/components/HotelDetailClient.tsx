"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, ArrowRight, Check, MessageCircle, Star } from "lucide-react";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import Link from "next/link";

interface HotelDetailClientProps {
  slug: string;
}

export default function HotelDetailClient({ slug }: HotelDetailClientProps) {
  const [activeGuideItem, setActiveGuideItem] = useState(0);

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
          { old: "https://images.unsplash.com/photo-1582533568805-78a15dcb01b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNwYSUyMHJlbGF4YXRpb24lMjBhcmVhfGVufDF8fHx8MTc1NzAwMzAzNXww&ixlib=rb-4.1.0&q=80&w=1080", new: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzU3MDAzMDM1fDA&ixlib=rb-4.1.0&q=80&w=1080" },
          { old: "https://images.unsplash.com/photo-1582533568805-78a15dcb01b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNwYSUyMHJlbGF4YXRpb24lMjBhcmVhfGVufDF8fHx8MTc1NzAwMzAzNXww&ixlib=rb-4.1.0&q=80&w=1080", new: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzU3MDAzMDM1fDA&ixlib=rb-4.1.0&q=80&w=1080" }
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
              <ArrowLeft className="w-4 h-4 mr-2" />
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
      <div className="relative h-[70vh] overflow-hidden">
        <ImageWithFallback
          src={project.heroImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl mb-8">{project.subtitle}</p>
            <Link href="http://localhost:3001/contact">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                Request A Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* See Transformation Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              See Transformation {project.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {project.description}
            </p>
          </div>

          <div className="w-full space-y-12">
            {project.beforeAfterImages.map((imageSet, index) => (
              <div key={index} className="flex flex-col sm:flex-row items-center justify-between gap-6 w-full">
                {/* Before Image */}
                <div className="flex-1">
                  <div className="relative group">
                    <ImageWithFallback
                      src={imageSet.old}
                      alt={`Before transformation ${index + 1}`}
                      className="w-full h-[400px] object-cover rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      BEFORE
                    </div>
                  </div>
                </div>
                
                {/* Custom Arrow */}
                <div className="flex-shrink-0 px-4 flex items-center justify-center">
                  <ImageWithFallback 
                    src="/down-left.svg" 
                    alt="Arrow" 
                    className="w-16 h-16"
                    width={64}
                    height={64}
                  />
                </div>
                
                {/* After Image */}
                <div className="flex-1">
                  <div className="relative group">
                    <ImageWithFallback
                      src={imageSet.new}
                      alt={`After transformation ${index + 1}`}
                      className="w-full h-[400px] object-cover rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
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
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let us help you create exceptional hospitality experiences with our premium furniture solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="http://localhost:3001/contact">
              <Button variant="outline" className="bg-white text-primary hover:bg-gray-100">
                <MessageCircle className="w-4 h-4 mr-2" />
                Get Free Consultation
              </Button>
            </Link>
            <Link href="http://localhost:3001/about">
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                <ArrowRight className="w-4 h-4 mr-2" />
                Learn About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Project Details Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Project Challenges</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-8">
                Every transformation comes with unique challenges. Our team worked closely with the client to overcome space constraints, timeline requirements, and design specifications to deliver exceptional results.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Custom design solutions</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Timeline optimization</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Quality assurance</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Stakeholder coordination</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Hospitality standards compliance</span>
                </div>
              </div>
            </div>
            <div>
              <ImageWithFallback
                src={project.challengesImage}
                alt="Project challenges"
                className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How We Delivered Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How We Delivered</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <ImageWithFallback
                src={project.howWeDeliveredImage}
                alt="How we delivered"
                className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-lg text-gray-600 mb-8">
                Our comprehensive approach ensured seamless project execution from concept to completion, delivering exceptional results that exceeded client expectations.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Project management excellence</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Quality control processes</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Client communication</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Logistics coordination</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Installation expertise</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New CTA Section */}
      <section className="py-16 px-4">
        <div className="relative max-w-7xl mx-auto overflow-hidden rounded-3xl">
          {/* Background Image with Custom Dark Overlay */}
          <div className="absolute inset-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJvb218ZW58MXx8fHwxNzU3MDAzMDM1fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Hotel room background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ backgroundColor: 'rgba(17, 30, 51, 0.9)' }}></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 py-20 px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Transform Your Vision Into Reality
            </h2>
            <p className="text-xl text-white mb-8">
              Brand identity and guest experience goals. Our award-winning design team specializes in creating bespoke furniture solutions that perfectly align with your hotel&apos;s vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="http://localhost:3001/contact">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg flex items-center">
                  Request A Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="https://wa.me/16784319041" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-lg flex items-center">
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
      <section className="py-16" style={{ backgroundColor: '#111e33' }}>
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8 whitespace-nowrap">
            Lorem ipsum dolor sit amet consectetur
          </h2>
          <p className="text-lg text-white mb-6 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
          </p>
          <p className="text-lg text-white leading-relaxed">
            but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </section>

      {/* See What Guest Say Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            See What Guest Say
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Testimonial Card 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="relative">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBiYWNrJTIwdmlldyUyMHdhdGVyfGVufDF8fHx8MTc1NzAwMzAzNXww&ixlib=rb-4.1.0&q=80&w=400"
                    alt="Guest profile"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                    <Star className="w-3 h-3 text-white fill-current" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    &ldquo;Pool, <strong>hot tub</strong>, decent <strong>breakfast</strong> with eggs, sausage, cereal, <strong>waffles</strong>, <strong>coffee</strong>.&rdquo;
                  </p>
                  <div className="flex space-x-1">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                    <Star className="w-4 h-4 text-gray-300" />
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Card 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="relative">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGJsb25kZSUyMGhhaXIlMjByZWQlMjBoYXR8ZW58MXx8fHwxNzU3MDAzMDM1fDA&ixlib=rb-4.1.0&q=80&w=400"
                    alt="Guest profile"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                    <Star className="w-3 h-3 text-white fill-current" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    &ldquo;<strong>Easy access</strong> to the main drag for <strong>food</strong> and <strong>shopping</strong>.&rdquo;
                  </p>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Card 3 - Centered */}
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 max-w-md w-full">
              <div className="flex items-start space-x-4">
                <div className="relative">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBiZWFjaCUyMHdhdGVyfGVufDF8fHx8MTc1NzAwMzAzNXww&ixlib=rb-4.1.0&q=80&w=400"
                    alt="Guest profile"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                    <Star className="w-3 h-3 text-white fill-current" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    &ldquo;Very very clean <strong>facility</strong> wonderful <strong>staff</strong> cheapest <strong>price</strong> in town&rdquo;
                  </p>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Our Client Say About Our Work Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            What Our Client Say About Our Work
          </h2>
          
          {/* 5 Golden Stars */}
          <div className="flex justify-center space-x-2 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />
            ))}
          </div>
          
          {/* Best Quality Furniture */}
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Best Quality Furniture
          </h3>
          
          {/* Lorem Ipsum Text */}
          <p className="text-lg text-gray-700 mb-12 leading-relaxed">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here&apos;.
          </p>
          
          {/* Client Information */}
          <div className="flex items-center justify-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-yellow-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">LQ</span>
            </div>
            <div className="text-left">
              <p className="text-orange-500 font-bold text-lg">Mark Frinch</p>
              <p className="text-gray-600">LaQuinta Inn</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hospitality Buying Guide Section */}
      <section className="pt-16 pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            Hospitality Buying Guide for Hotel Owners
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Guide Points */}
            <div className="space-y-8">
              {/* Guide Point 1 */}
              <div 
                className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                  activeGuideItem === 0 
                    ? 'border-orange-500 bg-orange-50' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setActiveGuideItem(0)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    activeGuideItem === 0 ? 'bg-orange-500' : 'bg-gray-500'
                  }`}>
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      How to choose the right hotel Soft Seating design
                    </h3>
                    <p className="text-gray-600">
                      Strategic design selection that aligns with your brand identity and guest expectations for optimal hospitality experience.
                    </p>
                  </div>
                </div>
              </div>

              {/* Guide Point 2 */}
              <div 
                className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                  activeGuideItem === 1 
                    ? 'border-orange-500 bg-orange-50' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setActiveGuideItem(1)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    activeGuideItem === 1 ? 'bg-orange-500' : 'bg-gray-500'
                  }`}>
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a2 2 0 114 0 2 2 0 01-4 0zm8 0a2 2 0 114 0 2 2 0 01-4 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Bulk order vs. custom manufacturing
                    </h3>
                    <p className="text-gray-600">
                      Understanding procurement strategies to balance cost-effectiveness with customization for your unique requirements.
                    </p>
                  </div>
                </div>
              </div>

              {/* Guide Point 3 */}
              <div 
                className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                  activeGuideItem === 2 
                    ? 'border-orange-500 bg-orange-50' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setActiveGuideItem(2)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    activeGuideItem === 2 ? 'bg-orange-500' : 'bg-gray-500'
                  }`}>
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Key considerations: durability, cleaning, guest experience, budget
                    </h3>
                    <p className="text-gray-600">
                      Comprehensive evaluation framework covering all critical factors for successful furniture investment decisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Dynamic Content */}
            <div className="bg-gray-50 rounded-2xl p-8">
              {activeGuideItem === 0 && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    How to Choose the Right Hotel Soft Seating Design
                  </h3>
                  <p className="text-orange-500 font-semibold mb-6">Design Selection Excellence</p>
                  <div className="space-y-4 text-gray-600">
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
                  <Link href="http://localhost:3001/contact" className="inline-block mt-8">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg flex items-center">
                      Get Expert Consultation
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              )}

              {activeGuideItem === 1 && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Bulk Order vs. Custom Manufacturing
                  </h3>
                  <p className="text-orange-500 font-semibold mb-6">Procurement Strategy Excellence</p>
                  <div className="space-y-4 text-gray-600">
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
                  <Link href="http://localhost:3001/contact" className="inline-block mt-8">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg flex items-center">
                      Get Expert Consultation
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              )}

              {activeGuideItem === 2 && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Key Considerations: Durability, Cleaning, Guest Experience, Budget
                  </h3>
                  <p className="text-orange-500 font-semibold mb-6">Investment Framework Excellence</p>
                  <div className="space-y-4 text-gray-600">
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
                  <Link href="http://localhost:3001/contact" className="inline-block mt-8">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg flex items-center">
                      Get Expert Consultation
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="py-8 mt-[30px] mb-[30px]" style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 text-center mb-8">
            Quick answers to common questions about our soft seating solutions
          </p>
          
          <div className="space-y-4">
            {/* FAQ Item 1 */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900">
                  What makes hotel Our furniture different from normal furniture?
                </h3>
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900">
                  What makes hotel Our furniture different from normal furniture?
                </h3>
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900">
                  What makes hotel Our furniture different from normal furniture?
                </h3>
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900">
                  What makes hotel Our furniture different from normal furniture?
                </h3>
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Start Your Project Section */}
      <section className="pt-8 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              Start Your Project
            </h2>
            <h3 className="text-4xl font-bold text-orange-500 mb-6">
              With Sara Global
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ready to transform your hospitality space? Contact our team of experts for a consultation and discover how we can bring your vision to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:items-stretch">
            {/* Left Column - Contact Information */}
            <div className="space-y-6 flex flex-col">
              <h3 className="text-3xl font-bold mb-6">Contact Information</h3>
              <p className="text-gray-600 mb-8">
                Ready to start your project? Our team is here to help you every step of the way.
              </p>
              
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-r from-[#f26d35]/10 to-[#f26d35]/20 text-[#f26d35]">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold mb-2 text-gray-900">Phone</h4>
                    <p className="text-gray-900 mb-1">+1-678-431-9041</p>
                    <p className="text-sm text-[#f26d35]">Mon-Fri 8AM-6PM EST</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-r from-[#f26d35]/10 to-[#f26d35]/20 text-[#f26d35]">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold mb-2 text-gray-900">Email</h4>
                    <p className="text-gray-900 mb-1">info@saraglobal.com</p>
                    <p className="text-gray-900 mb-1">sales@saraglobal.com</p>
                    <p className="text-sm text-[#f26d35]">24/7 Email Support</p>
                  </div>
                </div>

                {/* Headquarters */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-r from-[#f26d35]/10 to-[#f26d35]/20 text-[#f26d35]">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold mb-2 text-gray-900">Headquarters</h4>
                    <p className="text-gray-900 mb-1">Sara Global Hospitality</p>
                    <p className="text-gray-900 mb-2">2600 Pleasantdale Rd. Ste 12, Atlanta, GA 30340</p>
                    <Link href="/contact" className="text-[#f26d35] hover:text-[#f26d35]/80 font-medium">
                      Visit our showroom
                    </Link>
                  </div>
                </div>

                {/* Global Offices */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-r from-[#f26d35]/10 to-[#f26d35]/20 text-[#f26d35]">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold mb-2 text-gray-900">Global Offices</h4>
                    <p className="text-gray-900 mb-2">Dubai • London • Singapore</p>
                    <p className="text-gray-900 mb-2">Mumbai • Shanghai • Toronto</p>
                    <Link href="/contact" className="text-[#f26d35] hover:text-[#f26d35]/80 font-medium">
                      Worldwide presence
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Spacer to fill remaining height */}
              <div className="flex-1"></div>
            </div>

            {/* Right Column - Project Inquiry Form */}
            <div className="lg:col-span-2">
              <div className="border-0 shadow-2xl bg-gradient-to-br from-white to-gray-50 rounded-lg">
                  <div className="pb-3 p-6">
                    <h3 className="flex items-center gap-2 text-2xl font-bold mb-2">
                      <svg className="w-6 h-6 text-[#f26d35]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                      Project Inquiry Form
                    </h3>
                    <p className="text-gray-600">
                      Tell us about your project and we&apos;ll get back to you within 24 hours with a detailed proposal.
                    </p>
                  </div>
                  <div className="space-y-4 p-6">
                    <form className="space-y-4">
                      {/* Name & Email */}
                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                            <svg className="w-4 h-4 text-[#f26d35]" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                            Name *
                          </label>
                          <input 
                            type="text"
                            placeholder="Enter your full name" 
                            className="w-full h-12 border-gray-200 focus:ring-2 focus:ring-[#f26d35]/20 rounded-lg px-4"
                            style={{ backgroundColor: '#f3f3f5' }}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                            <svg className="w-4 h-4 text-[#f26d35]" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            Email Address *
                          </label>
                          <input 
                            type="email"
                            placeholder="your@email.com" 
                            className="w-full h-12 border-gray-200 focus:ring-2 focus:ring-[#f26d35]/20 rounded-lg px-4"
                            style={{ backgroundColor: '#f3f3f5' }}
                          />
                        </div>
                      </div>

                      {/* Phone & Location */}
                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                            <svg className="w-4 h-4 text-[#f26d35]" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            Phone Number *
                          </label>
                          <input 
                            type="tel"
                            placeholder="+1-678-431-9041" 
                            className="w-full h-12 border-gray-200 focus:ring-2 focus:ring-[#f26d35]/20 rounded-lg px-4"
                            style={{ backgroundColor: '#f3f3f5' }}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                            <svg className="w-4 h-4 text-[#f26d35]" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            Location *
                          </label>
                          <input 
                            type="text"
                            placeholder="City, State, Country" 
                            className="w-full h-12 border-gray-200 focus:ring-2 focus:ring-[#f26d35]/20 rounded-lg px-4"
                            style={{ backgroundColor: '#f3f3f5' }}
                          />
                        </div>
                      </div>

                      {/* Message - Full Width */}
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                          <svg className="w-4 h-4 text-[#f26d35]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                          </svg>
                          Message from the Client *
                        </label>
                        <textarea 
                          placeholder="Please describe your project, specific furniture needs, timeline, and any special requirements..."
                          className="w-full h-24 border-gray-200 focus:ring-2 focus:ring-[#f26d35]/20 resize-none rounded-lg px-4 py-3"
                          style={{ backgroundColor: '#f3f3f5' }}
                        />
                      </div>

                      {/* Interests */}
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                          <svg className="w-4 h-4 text-[#f26d35]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                          </svg>
                          Interested In
                        </label>
                        <div className="grid grid-cols-3 gap-3">
                          {[
                            'Casegoods',
                            'FF&E',
                            'Reception Items',
                            'Bedroom Furniture',
                            'Restaurant Furniture',
                            'Lobby Items',
                            'Outdoor Furniture',
                            'Custom Solutions'
                          ].map((interest, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <input 
                                type="checkbox"
                                className="border-gray-300 text-[#f26d35] focus:ring-[#f26d35] rounded"
                              />
                              <label className="text-sm cursor-pointer text-gray-700">
                                {interest}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Submit Button */}
                      <Button 
                        className="w-full bg-[#f26d35] hover:bg-[#f26d35]/90 text-white h-12"
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                        </svg>
                        Send Inquiry
                      </Button>

                      <p className="text-sm text-gray-600 text-center">
                        We&apos;ll review your inquiry and respond within 24 hours with next steps.
                      </p>
                    </form>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
