import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";
import { 
  Star,
  ArrowRight,
  Phone,
  Mail,
  X,
  ZoomIn
} from "lucide-react";

interface ProductsPageProps {
  onNavigate: (page: string) => void;
  selectedCountry?: string;
}

export default function ProductsPage({ onNavigate, selectedCountry }: ProductsPageProps) {
  const [zoomedImage, setZoomedImage] = useState<{ src: string; alt: string } | null>(null);

  // Product categories (removed from main interface but kept for product organization)
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

  // Show all products (no filtering)
  const filteredProducts = products;

  const handleImageClick = (src: string, alt: string) => {
    setZoomedImage({ src, alt });
  };

  const closeModal = () => {
    setZoomedImage(null);
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
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center text-white z-10">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-5xl mb-4">
                Hotel Furniture Collection
              </h1>
              <p className="text-lg lg:text-xl mb-6 opacity-90">
                Premium furniture solutions for the modern hospitality industry
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Request A Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Carousel */}
      <section className="py-12 bg-gradient-to-r from-primary/5 via-accent/30 to-primary/5 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3">Our Product Categories</h2>
            <p className="text-muted-foreground">Explore our comprehensive range of hotel furniture solutions</p>
          </div>
          
          {/* Moving Carousel */}
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex animate-scroll-logos space-x-4">
                {/* First set of categories */}
                {categories.map((category, index) => (
                  <button
                    key={`first-${index}`}
                    onClick={() => {
                      if (category.id === 'soft-seating') {
                        onNavigate('soft-seating');
                      } else if (category.id === 'breakfast-chairs') {
                        onNavigate('breakfast-chairs');
                      }
                      // Add more category navigation here as you create more category pages
                    }}
                    className="group flex-shrink-0 bg-white hover:bg-primary hover:text-white transition-all duration-300 rounded-lg px-6 py-4 shadow-md hover:shadow-lg border-2 border-primary hover:border-primary min-w-[280px]"
                  >
                    <div className="text-center">
                      <h3 className="font-medium text-sm leading-tight group-hover:text-white transition-colors">
                        {category.name}
                      </h3>
                    </div>
                  </button>
                ))}
                
                {/* Duplicate set for seamless loop */}
                {categories.map((category, index) => (
                  <button
                    key={`second-${index}`}
                    onClick={() => {
                      if (category.id === 'soft-seating') {
                        onNavigate('soft-seating');
                      } else if (category.id === 'breakfast-chairs') {
                        onNavigate('breakfast-chairs');
                      }
                      // Add more category navigation here as you create more category pages
                    }}
                    className="group flex-shrink-0 bg-white hover:bg-primary hover:text-white transition-all duration-300 rounded-lg px-6 py-4 shadow-md hover:shadow-lg border-2 border-primary hover:border-primary min-w-[280px]"
                  >
                    <div className="text-center">
                      <h3 className="font-medium text-sm leading-tight group-hover:text-white transition-colors">
                        {category.name}
                      </h3>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid - Always Grid View */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our comprehensive collection of premium hotel furniture designed for comfort, durability, and style
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
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
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/20 transition-colors duration-200 flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover/image:opacity-100 transition-opacity duration-200" />
                    </div>
                  </div>

                  <div className="absolute top-4 left-4">
                    <div className="flex flex-wrap gap-1">
                      {product.tags.slice(0, 2).map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
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
                    {product.features.slice(0, 3).map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex">
                    <Button 
                      className="flex-1"
                      onClick={() => {
                        if (product.category === 'soft-seating') {
                          onNavigate('soft-seating');
                        }
                      }}
                    >
                      View All
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
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
          <h2 className="text-3xl mb-4">Ready to Transform Your Hotel?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get a custom quote for your hotel furniture needs
          </p>
          <div className="flex justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Get Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Image Zoom Modal */}
      {zoomedImage && (
        <Dialog open={!!zoomedImage} onOpenChange={closeModal}>
          <DialogContent className="max-w-4xl max-h-[90vh] p-0 bg-transparent border-0 shadow-none">
            <DialogTitle className="sr-only">
              Zoomed view of {zoomedImage.alt}
            </DialogTitle>
            <DialogDescription className="sr-only">
              A full-size view of the selected product image. Click the X button or press Escape to close.
            </DialogDescription>
            <div className="relative">
              <button
                onClick={closeModal}
                className="absolute -top-10 right-0 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Close image zoom"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              <ImageWithFallback
                src={zoomedImage.src}
                alt={zoomedImage.alt}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}