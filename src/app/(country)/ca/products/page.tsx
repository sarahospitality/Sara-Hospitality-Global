"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';
import { 
  ArrowRight,
  ZoomIn,
  X
} from 'lucide-react';

declare global {
  interface Window {
    openQuotePopup?: () => void;
  }
}

const categories = [
  { id: "soft-seating", name: "Soft Seating" },
  { id: "bathroom-vanity", name: "Bathroom Vanity" },
  { id: "fixtures-equipment", name: "Fixture & Equipment" },
  { id: "countertops-cabinets", name: "Countertops & Cabinets" },
  { id: "hospitality-casegoods", name: "Hospitality Casegoods" },
  { id: "outdoor-furniture", name: "Hospitality Outdoor Furniture" },
  { id: "senior-living", name: "Senior Living Furniture" },
  { id: "reception-desk", name: "Hotel Reception Desk" },
  { id: "bedroom-furniture", name: "Bedroom Hotel Furniture" },
  { id: "custom-commercial", name: "Custom Commercial Furniture" },
  { id: "boutique-furniture", name: "Hotel Boutique Furniture" }
];

const products = [
  // Soft Seating
  {
    id: "soft-seating-collection",
    name: "Soft Seating Collection",
    category: "soft-seating",
    description: "Luxurious soft seating solutions featuring premium upholstery, ergonomic design, and commercial-grade durability perfect for hotel lobbies and lounges.",
    features: ["Premium Upholstery", "Ergonomic Design", "Commercial Grade", "Stain Resistant"],
    image: "https://images.unsplash.com/photo-1720731307398-86de801fe49a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0JTIwc2VhdGluZyUyMGhvdGVsJTIwbG91bmdlfGVufDF8fHx8MTc1NzU4ODg2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Premium", "Comfortable", "Durable"]
  },
  
  // Bathroom Vanity
  {
    id: "bathroom-vanity-collection",
    name: "Bathroom Vanity Collection",
    category: "bathroom-vanity",
    description: "Modern bathroom vanities with integrated storage, premium countertops, and contemporary finishes designed for luxury hotel environments.",
    features: ["Integrated Storage", "Premium Countertops", "Water Resistant", "Contemporary Design"],
    image: "https://images.unsplash.com/photo-1651442897558-47cff0f64bd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRocm9vbSUyMHZhbml0eSUyMGhvdGVsJTIwbW9kZXJufGVufDF8fHx8MTc1NzU4ODg3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Modern", "Luxury", "Functional"]
  },
  
  // Fixture & Equipment
  {
    id: "fixtures-equipment-collection",
    name: "Fixtures & Equipment Collection",
    category: "fixtures-equipment",
    description: "Commercial-grade fixtures and equipment including lighting, hardware, and specialized hotel amenities for complete room solutions.",
    features: ["Commercial Grade", "Energy Efficient", "Easy Installation", "Warranty Included"],
    image: "https://images.unsplash.com/photo-1657411737752-eb9f9cbe2823?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGZpeHR1cmVzJTIwZXF1aXBtZW50JTIwY29tbWVyY2lhbHxlbnwxfHx8fDE3NTc1ODg4Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Commercial", "Efficient", "Reliable"]
  },
  
  // Countertops & Cabinets
  {
    id: "countertops-cabinets-collection",
    name: "Countertops & Cabinets Collection",
    category: "countertops-cabinets",
    description: "Premium countertops and custom cabinetry solutions featuring quartz, granite, and engineered surfaces with expert craftsmanship.",
    features: ["Premium Materials", "Custom Design", "Expert Installation", "Multiple Finishes"],
    image: "https://images.unsplash.com/photo-1722649957265-372809976610?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VudGVydG9wcyUyMGNhYmluZXRzJTIwaG90ZWwlMjBraXRjaGVufGVufDF8fHx8MTc1NzU4ODg3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Premium", "Custom", "Durable"]
  },
  
  // Hospitality Casegoods
  {
    id: "hospitality-casegoods-collection",
    name: "Hospitality Casegoods Collection",
    category: "hospitality-casegoods",
    description: "Comprehensive casegoods including dressers, armoires, and storage solutions designed specifically for hospitality environments.",
    features: ["Hotel Grade", "Soft Close Hardware", "Customizable", "Easy Maintenance"],
    image: "https://images.unsplash.com/photo-1742821855309-d26c83bdfe1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbGl0eSUyMGNhc2Vnb29kcyUyMGhvdGVsJTIwZHJlc3NlcnxlbnwxfHx8fDE3NTc1ODg4ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Professional", "Storage", "Quality"]
  },
  
  // Hospitality Outdoor Furniture
  {
    id: "hospitality-outdoor-collection",
    name: "Hospitality Outdoor Furniture",
    category: "outdoor-furniture",
    description: "Weather-resistant outdoor furniture collection including dining sets, lounge chairs, and umbrellas perfect for hotel patios and pool areas.",
    features: ["Weather Resistant", "UV Protection", "Easy Cleaning", "Modular Design"],
    image: "https://images.unsplash.com/photo-1619492774026-a9d7bebe06e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMG91dGRvb3IlMjBmdXJuaXR1cmUlMjBwYXRpb3xlbnwxfHx8fDE3NTc1ODg4ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Weather Resistant", "Outdoor", "Durable"]
  },
  
  // Senior Living Furniture
  {
    id: "senior-living-collection",
    name: "Senior Living Furniture",
    category: "senior-living",
    description: "Specialized furniture designed for senior living facilities with accessibility features, safety considerations, and comfort-focused design.",
    features: ["Accessibility Focused", "Safety Features", "Easy Care", "Comfortable"],
    image: "https://images.unsplash.com/photo-1581369655672-c3295dfe7776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjBsaXZpbmclMjBmdXJuaXR1cmUlMjBhc3Npc3RlZHxlbnwxfHx8fDE3NTc1ODg4ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Accessible", "Safe", "Comfortable"]
  },
  
  // Hotel Reception Desk
  {
    id: "hotel-reception-desk-collection",
    name: "Hotel Reception Desk Collection",
    category: "reception-desk",
    description: "Impressive reception desks featuring modern design, integrated technology, cable management, and premium finishes for hotel lobbies.",
    features: ["Modern Design", "Tech Integration", "Cable Management", "Premium Finishes"],
    image: "https://images.unsplash.com/photo-1677129666186-d29eba893fe3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJlY2VwdGlvbiUyMGRlc2slMjBsb2JieXxlbnwxfHx8fDE3NTc1ODg4OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Modern", "Tech Ready", "Premium"]
  },
  
  // Bedroom Hotel Furniture
  {
    id: "bedroom-hotel-collection",
    name: "Bedroom Hotel Furniture",
    category: "bedroom-furniture",
    description: "Complete bedroom furniture sets including beds, nightstands, wardrobes, and seating designed for luxury hotel guest rooms.",
    features: ["Complete Sets", "Luxury Design", "Guest Comfort", "Easy Maintenance"],
    image: "https://images.unsplash.com/photo-1568495248636-6432b97bd949?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWRyb29tJTIwaG90ZWwlMjBmdXJuaXR1cmUlMjBiZWR8ZW58MXx8fHwxNzU3NTg4ODk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Luxury", "Complete", "Comfort"]
  },
  
  // Custom Commercial Furniture
  {
    id: "custom-commercial-collection",
    name: "Custom Commercial Furniture",
    category: "custom-commercial",
    description: "Bespoke commercial furniture solutions tailored to your specific requirements with custom design, materials, and finishes.",
    features: ["Custom Design", "Bespoke Solutions", "Quality Materials", "Professional Service"],
    image: "https://images.unsplash.com/photo-1746439323242-4d45b124b9bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBjb21tZXJjaWFsJTIwZnVybml0dXJlJTIwZGVzaWdufGVufDF8fHx8MTc1NzU4ODkwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Custom", "Bespoke", "Professional"]
  },
  
  // Hotel Boutique Furniture
  {
    id: "hotel-boutique-collection",
    name: "Hotel Boutique Furniture",
    category: "boutique-furniture",
    description: "Exclusive boutique furniture collection featuring unique designs, artisan craftsmanship, and luxury materials for upscale hotels.",
    features: ["Unique Design", "Artisan Craft", "Luxury Materials", "Exclusive Collection"],
    image: "https://images.unsplash.com/photo-1588614183772-7012a2b1959c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGJvdXRpcXVlJTIwZnVybml0dXJlJTIwbHV4dXJ5fGVufDF8fHx8MTc1NzU4ODkwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Boutique", "Luxury", "Exclusive"]
  }
];

export default function CanadaProductsPage() {
  const [zoomedImage, setZoomedImage] = useState<{ src: string; alt: string } | null>(null);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const categoriesPerView = 4;
  const totalCategoryPages = Math.ceil(categories.length / categoriesPerView);

  const handleImageClick = (src: string, alt: string) => {
    setZoomedImage({ src, alt });
  };

  const closeModal = () => {
    setZoomedImage(null);
  };

  const scrollCategoriesLeft = () => {
    setCurrentCategoryIndex((prev) => Math.max(0, prev - 1));
  };

  const scrollCategoriesRight = () => {
    setCurrentCategoryIndex((prev) => Math.min(totalCategoryPages - 1, prev + 1));
  };

  const getCurrentCategories = () => {
    const startIndex = currentCategoryIndex * categoriesPerView;
    return categories.slice(startIndex, startIndex + categoriesPerView);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Single Image */}
      <section className="relative h-[40vh] overflow-hidden">
        <div className="relative h-full">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1675518544582-6706988d16bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGZ1cm5pdHVyZSUyMHNob3dyb29tfGVufDF8fHx8MTc1NzU4Nzc4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Luxury Hotel Furniture Collection"
            className="w-full h-full object-cover"
            width={1920}
            height={600}
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center text-white z-10">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                Hotel Furniture Collection
              </h1>
              <p className="text-base md:text-lg lg:text-xl mb-6 opacity-90">
                Premium furniture solutions for the modern hospitality industry
              </p>
              <div className="flex justify-center">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    if (typeof window !== 'undefined') {
                      window.openQuotePopup?.();
                    }
                  }}
                >
                  Request A Quote
                  <ArrowRight className="w-5 h-5 ml-2" style={{ animation: 'arrowMove 2s ease-in-out infinite' }} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Carousel */}
      <section className="pt-6 pb-4 bg-[#fafafa] overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">Our Product Categories</h2>
            <p className="text-sm md:text-base text-gray-600">Explore our comprehensive range of hotel furniture solutions</p>
          </div>
          
          {/* Categories Grid with Manual Navigation */}
          <div className="relative mb-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 px-2 sm:px-0 mb-6">
              {getCurrentCategories().map((category, index) => (
                <Link
                  key={index}
                  href={
                    category.id === 'soft-seating' ? '/ca/products/soft-seating' :
                    category.id === 'bathroom-vanity' ? '/ca/products/bathroom-vanity' :
                    category.id === 'fixtures-equipment' ? '/ca/products/fixtures-equipment' :
                    category.id === 'countertops-cabinets' ? '/ca/products/countertops-cabinets' :
                    category.id === 'hospitality-casegoods' ? '/ca/products/hospitality-casegoods' :
                    category.id === 'outdoor-furniture' ? '/ca/products/hospitality-outdoor-furniture' :
                    category.id === 'senior-living' ? '/ca/products/senior-living-furniture' :
                    category.id === 'reception-desk' ? '/ca/products/hotel-reception-desk' :
                    category.id === 'bedroom-furniture' ? '/ca/products/bedroom-hotel-furniture' :
                    category.id === 'custom-commercial' ? '/ca/products/custom-commercial-furniture' :
                    category.id === 'boutique-furniture' ? '/ca/products/hotel-boutique-furniture' :
                    '#'
                  }
                  className="group bg-white hover:bg-primary hover:text-white transition-all duration-300 rounded-lg px-3 sm:px-6 py-3 sm:py-4 shadow-md hover:shadow-lg border-2 border-primary hover:border-primary block"
                >
                  <div className="text-center">
                    <h3 className="font-medium text-xs sm:text-sm leading-tight group-hover:text-white transition-colors text-gray-900">
                      {category.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>

            {/* Navigation Controls with Progress Pipeline */}
            <div className="flex items-center justify-center gap-4">
              {/* Progress Pipeline */}
              <div className="flex-1 max-w-md h-1 bg-gray-300 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary transition-all duration-300 rounded-full"
                  style={{ width: `${((currentCategoryIndex + 1) / totalCategoryPages) * 100}%` }}
                />
              </div>
              
              {/* Arrow Navigation Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={scrollCategoriesLeft}
                  disabled={currentCategoryIndex === 0}
                  className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-gray-900"
                  aria-label="Previous categories"
                >
                  <ArrowRight className="w-5 h-5 rotate-180" />
                </button>
                <button
                  onClick={scrollCategoriesRight}
                  disabled={currentCategoryIndex === totalCategoryPages - 1}
                  className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-gray-900"
                  aria-label="Next categories"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid - Always Grid View */}
      <section className="pt-4 pb-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our comprehensive collection of premium hotel furniture designed for comfort, durability, and style
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden rounded-t-lg">
                  <div 
                    className="relative cursor-pointer group/image"
                    onClick={() => handleImageClick(product.image, product.name)}
                  >
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      width={400}
                      height={256}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/20 transition-colors duration-200 flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover/image:opacity-100 transition-opacity duration-200" />
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="mb-3">
                    <h3 className="font-bold text-lg">{product.name}</h3>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature, index) => (
                      <Badge 
                        key={index} 
                        variant="outline" 
                        className={`text-xs ${index >= 2 ? 'hidden md:inline-flex' : ''}`}
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex justify-center md:justify-start">
                    <Link 
                      href={
                        product.category === 'soft-seating' ? '/ca/products/soft-seating' : 
                        product.category === 'bathroom-vanity' ? '/ca/products/bathroom-vanity' :
                        product.category === 'fixtures-equipment' ? '/ca/products/fixtures-equipment' :
                        product.category === 'countertops-cabinets' ? '/ca/products/countertops-cabinets' :
                        product.category === 'hospitality-casegoods' ? '/ca/products/hospitality-casegoods' :
                        product.category === 'outdoor-furniture' ? '/ca/products/hospitality-outdoor-furniture' :
                        product.category === 'senior-living' ? '/ca/products/senior-living-furniture' :
                        product.category === 'reception-desk' ? '/ca/products/hotel-reception-desk' :
                        product.category === 'bedroom-furniture' ? '/ca/products/bedroom-hotel-furniture' :
                        product.category === 'custom-commercial' ? '/ca/products/custom-commercial-furniture' :
                        product.category === 'boutique-furniture' ? '/ca/products/hotel-boutique-furniture' :
                        '#'
                      } 
                      className="flex-1 md:flex-initial"
                    >
                      <Button 
                        className="w-full"
                      >
                        View All
                        <ArrowRight className="w-4 h-4 ml-2" style={{ animation: 'arrowMove 2s ease-in-out infinite' }} />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Hospitality Space?</h2>
          <p className="text-base md:text-xl mb-8 opacity-90">
            Let&apos;s discuss how Sara Global Hospitality can bring your vision to life with our expert furniture<br className="hidden md:block" />
            solutions and global experience.
          </p>
          <div className="flex justify-center">
            <Link href="/ca/contact">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-primary hover:bg-white/90"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" style={{ animation: 'arrowMove 2s ease-in-out infinite' }} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Image Zoom Modal */}
      {zoomedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative w-full max-w-5xl">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Close image zoom"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <div className="relative w-full bg-black rounded-lg overflow-hidden" style={{ paddingBottom: '66.67%' }}>
              <ImageWithFallback
                src={zoomedImage.src}
                alt={zoomedImage.alt}
                className="absolute inset-0 w-full h-full object-contain"
                width={1200}
                height={800}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

