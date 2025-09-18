import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  ArrowLeft, 
  MapPin, 
  Calendar, 
  Users, 
  Clock, 
  CheckCircle, 
  Star,
  Phone,
  Mail,
  Download,
  Bed,
  Package,
  Armchair,
  Tv,
  Archive,
  Quote,
  Award,
  Target,
  Zap
} from "lucide-react";
import { useState } from "react";

interface HotelDetailPageProps {
  hotelId: string;
  onNavigate: (page: string) => void;
}

export default function HotelDetailPage({ hotelId, onNavigate }: HotelDetailPageProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects = [
    {
      id: "grand-palace-hotel-dubai",
      title: "Grand Palace Hotel Dubai",
      subtitle: "Holiday Inn - Dubai Downtown",
      location: "Dubai, UAE",
      year: "2023",
      completionDate: "March 2023",
      projectScope: "Guestroom furniture, lobby areas, restaurant furniture, vanities",
      brand: "Holiday Inn",
      heroImage: "https://images.unsplash.com/photo-1590490359854-dfba19688d70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHN1aXRlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU2OTE4Njk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Complete furniture solution for a 5-star luxury resort featuring custom-designed bedroom sets, lobby furniture, and dining collections.",
      summary: "Sara Global Hospitality delivered a comprehensive furniture solution for this prestigious Holiday Inn property, transforming 350+ guestrooms and public areas with prototype-compliant, luxury hospitality furniture.",
      keyStats: {
        rooms: "350+",
        leadTime: "8 weeks",
        installationDuration: "4 weeks",
        materialsUsed: "Premium laminate, solid wood veneer, quartz countertops"
      },
      highlights: [
        "350+ rooms furnished with prototype-compliant design",
        "Custom lobby millwork and reception furniture",
        "8-week lead time from order to delivery",
        "Zero quality issues reported post-installation",
        "100% on-time delivery across all phases"
      ],
      scopeOfWork: [
        { icon: Bed, name: "Headboards", description: "Custom upholstered headboards" },
        { icon: Package, name: "Nightstands", description: "Matching bedroom storage" },
        { icon: Tv, name: "Dressers & TV Panels", description: "Integrated media centers" },
        { icon: Archive, name: "Wardrobes", description: "Space-efficient storage" },
        { icon: Armchair, name: "Desks & Chairs", description: "Business-ready workstations" },
        { icon: Archive, name: "Vanities", description: "Bathroom cabinetry & counters" },
        { icon: Tv, name: "Lobby Millwork", description: "Reception & seating areas" }
      ],
      technicalDetails: {
        finishes: ["High-pressure laminate with wood grain texture", "Quartz composite countertops", "Commercial-grade upholstery fabrics", "Brushed metal hardware and accents"],
        compliance: ["ADA compliant design standards", "Holiday Inn prototype specifications", "Fire safety regulations compliance", "Environmental sustainability standards"],
        manufacturing: ["CNC precision manufacturing", "Quality control at every stage", "Custom color matching", "Modular design for easy installation"]
      },
      testimonial: {
        text: "Sara Global Hospitality exceeded our expectations with their attention to detail and commitment to our brand standards. The furniture transformation elevated our guest experience significantly, and the project was delivered exactly on schedule.",
        author: "James Mitchell",
        position: "General Manager",
        company: "Holiday Inn Dubai Downtown"
      },
      images: [
        "https://images.unsplash.com/photo-1590490359854-dfba19688d70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHN1aXRlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU2OTE4Njk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5fGVufDF8fHx8MTc1NzAwMjgwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGRpbmluZ3xlbnwxfHx8fDE3NTcwMDI4MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzU3MDAyODA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJhcnxlbnwxfHx8fDE3NTcwMDI4MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHNwYXxlbnwxfHx8fDE3NTcwMDI4MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      ],
      galleryImages: [
        { src: "https://images.unsplash.com/photo-1590490359854-dfba19688d70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHN1aXRlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU2OTE4Njk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", caption: "Luxury guestroom with custom headboard and nightstands" },
        { src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5fGVufDF8fHx8MTc1NzAwMjgwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", caption: "Grand lobby with custom reception furniture and seating areas" },
        { src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGRpbmluZ3xlbnwxfHx8fDE3NTcwMDI4MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", caption: "Restaurant dining area with coordinated furniture collection" },
        { src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzU3MDAyODA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", caption: "Spacious bedroom with integrated workspace and storage solutions" },
        { src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJhcnxlbnwxfHx8fDE3NTcwMDI4MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", caption: "Modern bar area with custom millwork and seating" },
        { src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHNwYXxlbnwxfHx8fDE3NTcwMDI4MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", caption: "Spa relaxation area featuring natural materials and calming design" }
      ],
      tags: ["Luxury", "Holiday Inn", "Complete Furnishing", "Dubai"]
    },
    {
      id: "wellness-spa-resort",
      title: "Wellness Spa Resort",
      subtitle: "LaQuinta - Bali Wellness Retreat",
      location: "Bali, Indonesia",
      year: "2023",
      completionDate: "June 2023",
      projectScope: "Spa furniture, wellness suites, meditation areas, reception furniture",
      brand: "LaQuinta",
      heroImage: "https://images.unsplash.com/photo-1582533568805-78a15dcb01b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNwYSUyMHJlbGF4YXRpb24lMjBhcmVhfGVufDF8fHx8MTc1NzAwMzAzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Sustainable furniture solutions for an eco-luxury spa resort with focus on natural materials and wellness-oriented design.",
      summary: "A transformative wellness retreat project featuring 200+ custom pieces made from sustainable materials, designed to promote relaxation and well-being in harmony with Bali's natural environment.",
      keyStats: {
        rooms: "120",
        leadTime: "10 weeks",
        installationDuration: "3 weeks",
        materialsUsed: "Sustainable bamboo, reclaimed teak, organic cotton"
      },
      highlights: [
        "120 wellness suites with eco-friendly furniture",
        "100% sustainable and locally-sourced materials",
        "Custom meditation and yoga furniture designed",
        "Achieved LEED Gold certification contribution",
        "Zero VOC finishes for healthy indoor air quality"
      ],
      scopeOfWork: [
        { icon: Bed, name: "Wellness Beds", description: "Ergonomic sleep systems" },
        { icon: Armchair, name: "Meditation Furniture", description: "Custom mindfulness seating" },
        { icon: Package, name: "Spa Treatment Tables", description: "Therapeutic massage surfaces" },
        { icon: Archive, name: "Storage Solutions", description: "Bamboo shelving systems" },
        { icon: Tv, name: "Reception Desks", description: "Organic curved designs" },
        { icon: Archive, name: "Outdoor Furniture", description: "Weather-resistant teak pieces" }
      ],
      technicalDetails: {
        finishes: ["Natural bamboo with protective coating", "Reclaimed teak with natural oil finish", "Organic cotton and hemp upholstery", "Hand-forged copper and bronze hardware"],
        compliance: ["FSC certified wood sources", "LaQuinta wellness standards", "Sustainable design certifications", "Local environmental regulations"],
        manufacturing: ["Traditional Balinese craftsmanship", "Low-impact production methods", "Local artisan partnerships", "Carbon-neutral shipping"]
      },
      testimonial: {
        text: "The furniture created by Sara Global perfectly captures our wellness philosophy. Every piece promotes tranquility and sustainability, creating an authentic Balinese experience that our guests absolutely love.",
        author: "Maya Patel",
        position: "Resort Director",
        company: "LaQuinta Wellness Retreat Bali"
      },
      images: [
        "https://images.unsplash.com/photo-1582533568805-78a15dcb01b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNwYSUyMHJlbGF4YXRpb24lMjBhcmVhfGVufDF8fHx8MTc1NzAwMzAzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjByZXNvcnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NTcwMDI4MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjByZXNvcnQlMjByb29tfGVufDF8fHx8MTc1NzAwMjgwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      ],
      galleryImages: [
        { src: "https://images.unsplash.com/photo-1582533568805-78a15dcb01b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNwYSUyMHJlbGF4YXRpb24lMjBhcmVhfGVufDF8fHx8MTc1NzAwMzAzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", caption: "Serene spa relaxation area with natural materials" },
        { src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjByZXNvcnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NTcwMDI4MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", caption: "Wellness suite interior with bamboo furnishings" },
        { src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjByZXNvcnQlMjByb29tfGVufDF8fHx8MTc1NzAwMjgwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", caption: "Meditation room with custom organic seating" }
      ],
      tags: ["Eco-Friendly", "LaQuinta", "Wellness", "Sustainable"]
    }
    // Add more projects with similar structure...
  ];

  const project = projects.find(p => p.id === hotelId);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => onNavigate("portfolio")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 py-8">
          <Button 
            variant="ghost" 
            onClick={() => onNavigate("portfolio")}
            className="mb-6 hover:bg-primary/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Project Info */}
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full mb-4">
                <Star className="w-4 h-4" />
                <span className="text-sm font-medium">{project.brand}</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-2">{project.title}</h1>
              <p className="text-xl text-muted-foreground mb-6">{project.subtitle}</p>
              
              {/* Quick Facts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">{project.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Completion</p>
                    <p className="text-sm text-muted-foreground">{project.completionDate}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 sm:col-span-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Project Scope</p>
                    <p className="text-sm text-muted-foreground">{project.projectScope}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="bg-white">{tag}</Badge>
                ))}
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="relative">
              <ImageWithFallback
                src={project.heroImage}
                alt={`${project.title} - Hero image`}
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Project Overview</h2>
            
            <p className="text-lg text-muted-foreground mb-12 text-center leading-relaxed">
              {project.summary}
            </p>

            {/* Key Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <Card className="text-center p-6 border-0 shadow-lg">
                <CardContent className="p-0">
                  <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="text-2xl font-bold text-primary">{project.keyStats.rooms}</h3>
                  <p className="text-sm text-muted-foreground">Rooms Furnished</p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 border-0 shadow-lg">
                <CardContent className="p-0">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="text-2xl font-bold text-primary">{project.keyStats.leadTime}</h3>
                  <p className="text-sm text-muted-foreground">Lead Time</p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 border-0 shadow-lg">
                <CardContent className="p-0">
                  <Zap className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="text-2xl font-bold text-primary">{project.keyStats.installationDuration}</h3>
                  <p className="text-sm text-muted-foreground">Installation</p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 border-0 shadow-lg">
                <CardContent className="p-0">
                  <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="text-2xl font-bold text-primary">100%</h3>
                  <p className="text-sm text-muted-foreground">On-Time Delivery</p>
                </CardContent>
              </Card>
            </div>

            {/* Highlights */}
            <div className="bg-accent/30 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Project Highlights
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {project.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scope of Work */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Scope of Work</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.scopeOfWork.map((item, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-bold mb-2">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Project Gallery</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.galleryImages.map((image, index) => (
                <div key={index} className="group cursor-pointer">
                  <div 
                    className="relative overflow-hidden rounded-lg shadow-md group-hover:shadow-xl transition-all duration-300"
                    onClick={() => setSelectedImage(image.src)}
                  >
                    <ImageWithFallback
                      src={image.src}
                      alt={image.caption}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <p className="text-white text-sm">{image.caption}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Technical Specifications</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="font-bold mb-4 flex items-center gap-2">
                    <Star className="w-5 h-5 text-primary" />
                    Finishes & Materials
                  </h3>
                  <ul className="space-y-2">
                    {project.technicalDetails.finishes.map((finish, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        {finish}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="font-bold mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Compliance Standards
                  </h3>
                  <ul className="space-y-2">
                    {project.technicalDetails.compliance.map((standard, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        {standard}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="font-bold mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    Manufacturing Process
                  </h3>
                  <ul className="space-y-2">
                    {project.technicalDetails.manufacturing.map((process, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        {process}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="w-12 h-12 text-primary mx-auto mb-6" />
            <blockquote className="text-xl lg:text-2xl italic mb-8 leading-relaxed">
              "{project.testimonial.text}"
            </blockquote>
            <div>
              <p className="font-bold">{project.testimonial.author}</p>
              <p className="text-muted-foreground">{project.testimonial.position}</p>
              <p className="text-sm text-muted-foreground">{project.testimonial.company}</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Block */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Professional Hotel Furniture Manufacturing</h2>
            <p className="text-lg leading-relaxed text-center">
              Sara Global Hospitality manufactured and installed prototype-compliant casegoods for {project.brand}, including headboards, nightstands, wardrobes, and vanities. Our durable finishes and brand-approved designs ensured guest satisfaction and compliance with {project.brand} standards. As a leading hotel furniture manufacturer and FF&E supplier, we specialize in delivering prototype-compliant furniture solutions that meet the highest hospitality industry standards.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Hotel Furniture Project?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let us transform your hotel with custom, prototype-compliant furniture solutions.
            </p>
            
            <div className="flex justify-center">
              <Button 
                onClick={() => onNavigate("contact")} 
                className="bg-white text-primary hover:bg-gray-100 px-8 py-3"
              >
                Request a Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <ImageWithFallback
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}