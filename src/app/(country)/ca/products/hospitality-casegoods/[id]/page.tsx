"use client";

import { use } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';
import { ArrowRight, Shield, Heart, Sparkles, TrendingUp, Settings, User } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Product data (same as in the main page)
const casegoods = [
  {
    id: "hc-101",
    name: "Hotel Dresser",
    modelNumber: "SHSL001",
    category: "Executive Dresser",
    description: "Premium hotel dresser with spacious drawers and soft-close hardware. Features durable construction ideal for guest room storage needs.",
    fullDescription: "A stylish and durable executive dresser designed for comfort, functionality, and longevity. Perfect for senior living, healthcare, and hospitality spaces. Constructed with high-density materials, solid wood frame, and reinforced hardware to handle the daily demands of commercial use while maintaining an elegant appearance.",
    features: ["Soft-Close Drawers", "Premium Finish", "Hotel Grade", "Easy Maintenance"],
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGRyZXNzZXIlMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzU3NTkxMDgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Dresser", "Storage", "Commercial"],
    specifications: {
      modelNumber: "SHSL001",
      dimensions: "60\" x 20\" x 36\"",
      drawerCount: "6 Drawers",
      weight: "150 lbs",
      weightCapacity: "400 lbs",
      frameMaterial: "Solid Wood (Hardwood)",
      hardware: "Soft-Close Metal Slides",
      finish: "Premium Laminate",
      colorOptions: "Custom (Walnut, Oak, Cherry, etc.)",
      warranty: "5 Years (Frame & Structure)",
      assembly: "Minimal - Ready to Use"
    }
  },
  {
    id: "hc-102",
    name: "Wardrobe Armoire",
    modelNumber: "SHSL002",
    category: "Luxury Wardrobe Armoire",
    description: "Spacious armoire offering elegant storage solutions for hotel guest rooms. Perfect for upscale properties with contemporary design.",
    fullDescription: "An elegant and spacious wardrobe armoire designed for luxury hospitality environments. Features premium construction with ample storage space, including hanging rod, shelves, and drawers. Built with commercial-grade materials to withstand frequent use while maintaining sophisticated aesthetics.",
    features: ["Large Capacity", "Premium Quality", "Elegant Design", "Luxury Finish"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YXJkcm9iZSUyMGhvdGVsfGVufDF8fHx8MTc1NzU5MTA4M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Luxury", "Wardrobe", "Premium"],
    specifications: {
      modelNumber: "SHSL002",
      dimensions: "48\" x 24\" x 72\"",
      storageType: "Hanging Rod + Shelves + Drawers",
      weight: "200 lbs",
      weightCapacity: "500 lbs",
      frameMaterial: "Solid Wood (Hardwood)",
      hardware: "Premium Metal Hardware",
      finish: "Luxury Veneer",
      colorOptions: "Custom (Various Wood Tones)",
      warranty: "5 Years (Frame & Structure)",
      assembly: "Professional Installation Recommended"
    }
  },
  {
    id: "hc-103",
    name: "Bedside Table",
    modelNumber: "SHSL003",
    category: "Nightstand Collection",
    description: "Modern bedside tables designed for hotel guest convenience. Provides accessible storage with sleek aesthetic appeal.",
    fullDescription: "Compact and functional nightstand designed specifically for hospitality environments. Features convenient storage options with modern styling that complements any room decor. Built with durable materials and smooth-glide drawers for guest comfort and long-lasting performance.",
    features: ["Compact Design", "Storage Options", "Modern Style", "Durable Build"],
    image: "https://images.unsplash.com/photo-1616627988078-f6cd762f4024?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMG5pZ2h0c3RhbmQlMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzU3NTkxMDg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Nightstand", "Modern", "Compact"],
    specifications: {
      modelNumber: "SHSL003",
      dimensions: "24\" x 18\" x 26\"",
      drawerCount: "2 Drawers",
      weight: "45 lbs",
      weightCapacity: "100 lbs (Top Surface)",
      frameMaterial: "Engineered Wood",
      hardware: "Smooth-Glide Drawer Slides",
      finish: "Modern Laminate",
      colorOptions: "Custom (Multiple Options)",
      warranty: "3 Years",
      assembly: "Minimal - Easy Setup"
    }
  },
  {
    id: "hc-104",
    name: "Multimedia Unit",
    modelNumber: "SHSL004",
    category: "Entertainment Center",
    description: "Professional media console designed for hotel rooms. Features cable management and modern aesthetics for optimal guest experience.",
    fullDescription: "Sleek entertainment center engineered for modern hotel rooms. Features integrated cable management system, spacious surface for TV placement, and storage compartments for media devices. Combines functionality with contemporary design to enhance guest entertainment experience.",
    features: ["Cable Management", "Modern Design", "Functional", "Space Efficient"],
    image: "https://images.unsplash.com/photo-1594026112284-02bb6f3f70d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpYSUyMGNvbnNvbGUlMjBob3RlbHxlbnwxfHx8fDE3NTc1OTEwOTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Entertainment", "Media", "Functional"],
    specifications: {
      modelNumber: "SHSL004",
      dimensions: "55\" x 18\" x 24\"",
      features: "Cable Management System",
      weight: "85 lbs",
      weightCapacity: "150 lbs (Top Surface)",
      frameMaterial: "Wood Composite",
      hardware: "Modern Metal Accents",
      finish: "Contemporary Finish",
      colorOptions: "Custom (Dark and Light Options)",
      warranty: "3 Years",
      assembly: "Moderate - Instructions Included"
    }
  },
  {
    id: "hc-105",
    name: "Work Desk",
    modelNumber: "SHSL005",
    category: "Desk & Work Station",
    description: "Commercial-grade work desk for hotel guest rooms and business centers. Designed for comfort and productivity with ample workspace.",
    fullDescription: "Professional work desk designed for business travelers and hotel business centers. Features spacious work surface, integrated power outlets, ergonomic design, and durable construction. Built to support laptop work, meetings, and extended work sessions with comfort and style.",
    features: ["Spacious Surface", "Commercial Grade", "Ergonomic", "Professional Look"],
    image: "https://images.unsplash.com/photo-1595428773637-d682fc32036f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGRlc2slMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzU3NTkxMDkzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Desk", "Commercial", "Professional"],
    specifications: {
      modelNumber: "SHSL005",
      dimensions: "48\" x 24\" x 30\"",
      workSurface: "Spacious Flat Surface",
      weight: "75 lbs",
      weightCapacity: "200 lbs",
      frameMaterial: "Solid Wood Frame",
      hardware: "Metal Legs with Levelers",
      finish: "Professional Grade",
      colorOptions: "Custom (Business Appropriate)",
      warranty: "5 Years",
      assembly: "Moderate - Leg Attachment"
    }
  },
  {
    id: "hc-106",
    name: "Credenza",
    modelNumber: "SHSL006",
    category: "Classic Storage Cabinet",
    description: "Timeless storage cabinet perfect for hotel guest rooms and suites. Premium wood construction with versatile design options.",
    fullDescription: "Versatile storage cabinet with classic design suitable for various hospitality applications. Features adjustable shelving, quality construction, and timeless styling that complements traditional and contemporary interiors. Built for long-term durability and functional storage solutions.",
    features: ["Versatile Storage", "Wood Construction", "Classic Style", "Premium Quality"],
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9yYWdlJTIwY2FiaW5ldCUyMGhvdGVsfGVufDF8fHx8MTc1NzU5MTA5N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Storage", "Classic", "Premium"],
    specifications: {
      modelNumber: "SHSL006",
      dimensions: "36\" x 18\" x 48\"",
      storageType: "Adjustable Shelves + Cabinet",
      weight: "95 lbs",
      weightCapacity: "300 lbs",
      frameMaterial: "Premium Wood",
      hardware: "Quality Hinges and Handles",
      finish: "Classic Wood Finish",
      colorOptions: "Custom (Traditional Options)",
      warranty: "5 Years",
      assembly: "Moderate Setup"
    }
  }
];

// Related products for recommendations
const relatedProducts = [
  {
    id: "credenza",
    name: "Credenza",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGRyZXNzZXIlMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzU3NTkxMDgwfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "modern-headboard",
    name: "Modern Wooden Headboard",
    image: "https://images.unsplash.com/photo-1595428773637-d682fc32036f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGRlc2slMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzU3NTkxMDkzfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "wooden-headboard",
    name: "Wooden Headboard",
    image: "https://images.unsplash.com/photo-1616627988078-f6cd762f4024?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMG5pZ2h0c3RhbmQlMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzU3NTkxMDg3fDA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function CasegoodDetailPage({ params }: PageProps) {
  const { id } = use(params);
  const product = casegoods.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Product Header Section */}
      <section className="py-6 md:py-8 lg:py-12 bg-white">
        <div className="container mx-auto px-3 sm:px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
            {/* Left - Product Image */}
            <div className="relative flex items-center justify-center">
              <div className="w-full overflow-hidden rounded-3xl bg-white border border-gray-200 flex items-center justify-center h-[250px] md:h-[350px] lg:h-[400px]">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-3 md:p-4"
                  width={600}
                  height={400}
                />
              </div>
            </div>

            {/* Right - Product Info */}
            <div className="flex flex-col h-full justify-center">
              {/* Model Number */}
              <p className="text-xs md:text-sm text-muted-foreground mb-1 md:mb-2">Model: {product.modelNumber}</p>
              
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3 lg:mb-4">{product.name}</h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-2 md:mb-3">{product.description}</p>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">{product.fullDescription}</p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-4 md:mt-6">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white text-sm md:text-base"
                  onClick={(e) => {
                    e.preventDefault();
                    if (typeof window !== 'undefined') {
                      window.openQuotePopup?.();
                    }
                  }}
                >
                  Request a Quote
                  <ArrowRight className="w-4 h-4 ml-2" style={{ animation: 'arrowMove 2s ease-in-out infinite', display: 'inline-block' }} />
                </Button>
                <Link href="/ca/portfolio">
                  <Button size="lg" variant="outline" className="w-full text-sm md:text-base">
                    View Portfolio
                    <ArrowRight className="w-4 h-4 ml-2" style={{ animation: 'arrowMove 2s ease-in-out infinite', display: 'inline-block' }} />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-8 md:py-10 lg:py-12 bg-gray-50">
        <div className="container mx-auto px-3 sm:px-4 md:px-6">
          <div className="text-center mb-6 md:mb-8 lg:mb-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3">Key Features</h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 px-2">
              Designed specifically for senior living, healthcare, and hospitality environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Feature 1 - Ergonomic Design */}
            <Card className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-4 md:p-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3 md:mb-4">
                  <User className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <h3 className="text-base md:text-lg font-bold mb-1 md:mb-2">Ergonomic Design</h3>
                <p className="text-xs md:text-sm text-gray-600">
                  Easy access and use with thoughtfully designed dimensions and optimal configuration for guest comfort.
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 - Lasting Comfort */}
            <Card className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-4 md:p-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3 md:mb-4">
                  <Heart className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <h3 className="text-base md:text-lg font-bold mb-1 md:mb-2">Lasting Comfort</h3>
                <p className="text-xs md:text-sm text-gray-600">
                  Premium materials that maintain quality and appearance over years of continuous use.
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 - Exceptional Durability */}
            <Card className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-4 md:p-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3 md:mb-4">
                  <Shield className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <h3 className="text-base md:text-lg font-bold mb-1 md:mb-2">Exceptional Durability</h3>
                <p className="text-xs md:text-sm text-gray-600">
                  Sturdy construction with reinforced components built to withstand daily commercial use.
                </p>
              </CardContent>
            </Card>

            {/* Feature 4 - Easy to Clean */}
            <Card className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-4 md:p-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3 md:mb-4">
                  <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <h3 className="text-base md:text-lg font-bold mb-1 md:mb-2">Easy to Clean</h3>
                <p className="text-xs md:text-sm text-gray-600">
                  Stain and wear-resistant finishes that are simple to maintain and keep looking new.
                </p>
              </CardContent>
            </Card>

            {/* Feature 5 - Modern Stability */}
            <Card className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-4 md:p-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3 md:mb-4">
                  <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <h3 className="text-base md:text-lg font-bold mb-1 md:mb-2">Modern Stability</h3>
                <p className="text-xs md:text-sm text-gray-600">
                  Contemporary design with solid construction provides both aesthetic appeal and reliable support.
                </p>
              </CardContent>
            </Card>

            {/* Feature 6 - Customizable Options */}
            <Card className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-4 md:p-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3 md:mb-4">
                  <Settings className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <h3 className="text-base md:text-lg font-bold mb-1 md:mb-2">Customizable Options</h3>
                <p className="text-xs md:text-sm text-gray-600">
                  Choose from various finishes and configurations to match your space perfectly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Specifications Section */}
      <section className="py-8 md:py-10 lg:py-12 bg-white">
        <div className="container mx-auto px-3 sm:px-4 md:px-6">
          <div className="text-center mb-6 md:mb-8 lg:mb-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">Technical Specifications</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
              <table className="w-full text-xs sm:text-sm md:text-base">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="px-3 py-2 md:px-6 md:py-4 font-semibold text-gray-900 bg-white">Model Number</td>
                    <td className="px-3 py-2 md:px-6 md:py-4 text-gray-700">{product.specifications.modelNumber}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-3 py-2 md:px-6 md:py-4 font-semibold text-gray-900 bg-white">Dimensions (W x D x H)</td>
                    <td className="px-3 py-2 md:px-6 md:py-4 text-gray-700">{product.specifications.dimensions}</td>
                  </tr>
                  {product.specifications.drawerCount && (
                    <tr className="border-b border-gray-200">
                      <td className="px-3 py-2 md:px-6 md:py-4 font-semibold text-gray-900 bg-white">Drawer Count</td>
                      <td className="px-3 py-2 md:px-6 md:py-4 text-gray-700">{product.specifications.drawerCount}</td>
                    </tr>
                  )}
                  {product.specifications.storageType && (
                    <tr className="border-b border-gray-200">
                      <td className="px-3 py-2 md:px-6 md:py-4 font-semibold text-gray-900 bg-white">Storage Type</td>
                      <td className="px-3 py-2 md:px-6 md:py-4 text-gray-700">{product.specifications.storageType}</td>
                    </tr>
                  )}
                  {product.specifications.features && (
                    <tr className="border-b border-gray-200">
                      <td className="px-3 py-2 md:px-6 md:py-4 font-semibold text-gray-900 bg-white">Special Features</td>
                      <td className="px-3 py-2 md:px-6 md:py-4 text-gray-700">{product.specifications.features}</td>
                    </tr>
                  )}
                  {product.specifications.workSurface && (
                    <tr className="border-b border-gray-200">
                      <td className="px-3 py-2 md:px-6 md:py-4 font-semibold text-gray-900 bg-white">Work Surface</td>
                      <td className="px-3 py-2 md:px-6 md:py-4 text-gray-700">{product.specifications.workSurface}</td>
                    </tr>
                  )}
                  <tr className="border-b border-gray-200">
                    <td className="px-3 py-2 md:px-6 md:py-4 font-semibold text-gray-900 bg-white">Weight</td>
                    <td className="px-3 py-2 md:px-6 md:py-4 text-gray-700">{product.specifications.weight}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-3 py-2 md:px-6 md:py-4 font-semibold text-gray-900 bg-white">Weight Capacity</td>
                    <td className="px-3 py-2 md:px-6 md:py-4 text-gray-700">{product.specifications.weightCapacity}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-3 py-2 md:px-6 md:py-4 font-semibold text-gray-900 bg-white">Frame Material</td>
                    <td className="px-3 py-2 md:px-6 md:py-4 text-gray-700">{product.specifications.frameMaterial}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-3 py-2 md:px-6 md:py-4 font-semibold text-gray-900 bg-white">Hardware</td>
                    <td className="px-3 py-2 md:px-6 md:py-4 text-gray-700">{product.specifications.hardware}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-3 py-2 md:px-6 md:py-4 font-semibold text-gray-900 bg-white">Finish</td>
                    <td className="px-3 py-2 md:px-6 md:py-4 text-gray-700">{product.specifications.finish}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-3 py-2 md:px-6 md:py-4 font-semibold text-gray-900 bg-white">Color Options</td>
                    <td className="px-3 py-2 md:px-6 md:py-4 text-gray-700">{product.specifications.colorOptions}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-3 py-2 md:px-6 md:py-4 font-semibold text-gray-900 bg-white">Warranty</td>
                    <td className="px-3 py-2 md:px-6 md:py-4 text-gray-700">{product.specifications.warranty}</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 md:px-6 md:py-4 font-semibold text-gray-900 bg-white">Assembly</td>
                    <td className="px-3 py-2 md:px-6 md:py-4 text-gray-700">{product.specifications.assembly}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Other Related Products Section */}
      <section className="py-8 md:py-10 lg:py-12 bg-gray-50">
        <div className="container mx-auto px-3 sm:px-4 md:px-6">
          <div className="mb-6 md:mb-8 text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">Other Related Products</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Card key={relatedProduct.id} className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative">
                  <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center overflow-hidden">
                    <ImageWithFallback
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover"
                      width={400}
                      height={300}
                    />
                  </div>
                </div>
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-sm sm:text-base md:text-lg font-bold">{relatedProduct.name}</h3>
                    <Button 
                      className="bg-primary hover:bg-primary/90 text-white text-xs sm:text-sm px-3 py-2 h-auto"
                      onClick={(e) => {
                        e.preventDefault();
                        if (typeof window !== 'undefined') {
                          window.openQuotePopup?.();
                        }
                      }}
                    >
                      Enquire
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

