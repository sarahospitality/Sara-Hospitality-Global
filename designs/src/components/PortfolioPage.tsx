import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, MapPin, Calendar } from "lucide-react";
import Link from "next/link";

interface PortfolioPageProps {
  onNavigate: (page: string, id?: string) => void;
}

export default function PortfolioPage({ onNavigate }: PortfolioPageProps) {

  const projects = [
    {
      id: "grand-palace-hotel-dubai",
      title: "Grand Palace Hotel Dubai",
      location: "Dubai, UAE",
      year: "2023",
      brand: "Holiday Inn",
      description: "Complete furniture solution for a 5-star luxury resort featuring custom-designed bedroom sets, lobby furniture, and dining collections.",
      image: "https://images.unsplash.com/photo-1590490359854-dfba19688d70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHN1aXRlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU2OTE4Njk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Luxury", "Custom Design", "Complete Furnishing"]
    },
    {
      id: "wellness-spa-resort",
      title: "Wellness Spa Resort",
      location: "Bali, Indonesia",
      year: "2023",
      brand: "LaQuinta",
      description: "Sustainable furniture solutions for an eco-luxury spa resort with focus on natural materials and wellness-oriented design.",
      image: "https://images.unsplash.com/photo-1582533568805-78a15dcb01b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNwYSUyMHJlbGF4YXRpb24lMjBhcmVhfGVufDF8fHx8MTc1NzAwMzAzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Eco-Friendly", "Spa Design", "Wellness"]
    },
    {
      id: "metropolitan-boutique-hotel",
      title: "Metropolitan Boutique Hotel",
      location: "New York, USA",
      year: "2022",
      brand: "Best Western Plus",
      description: "Modern urban design with space-efficient solutions for a trendy boutique hotel in Manhattan's financial district.",
      image: "https://images.unsplash.com/photo-1718104717529-0059a1a860fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3V0aXF1ZSUyMGhvdGVsJTIwcmVjZXB0aW9ufGVufDF8fHx8MTc1NzAwMzAzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Urban Design", "Space Efficient", "Modern"]
    },
    {
      id: "royal-heritage-hotel",
      title: "Royal Heritage Hotel",
      location: "London, UK",
      year: "2022",
      brand: "Marriott",
      description: "Classic elegance meets modern comfort in this restored Victorian hotel with period-appropriate custom furniture.",
      image: "https://images.unsplash.com/photo-1755644046048-989506b73a5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3RlbCUyMGxvYmJ5JTIwZnVybml0dXJlfGVufDF8fHx8MTc1NzAwMjkwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Heritage", "Classic Design", "Restoration"]
    },
    {
      id: "beachfront-resort-paradise",
      title: "Beachfront Resort Paradise",
      location: "Maldives",
      year: "2023",
      brand: "Holiday Inn",
      description: "Tropical luxury furniture collection designed for overwater villas and beachfront suites with weather-resistant materials.",
      image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHJlc29ydCUyMGx1eHVyeXxlbnwxfHx8fDE3NTcwMDMwMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Tropical", "Weather-Resistant", "Villa Design"]
    },
    {
      id: "mountain-lodge-retreat",
      title: "Mountain Lodge Retreat",
      location: "Swiss Alps, Switzerland",
      year: "2023",
      brand: "Quality Inn",
      description: "Rustic elegance furniture collection featuring locally sourced wood and traditional Alpine craftsmanship.",
      image: "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxvZGdlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU3MDAzMDM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Alpine", "Rustic", "Local Materials"]
    },
    {
      id: "urban-business-hotel",
      title: "Urban Business Hotel",
      location: "Singapore",
      year: "2022",
      brand: "Best Western Plus",
      description: "Contemporary business-focused furniture with integrated technology solutions for the modern corporate traveler.",
      image: "https://images.unsplash.com/photo-1671722294182-ed01cbe66bd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBmdXJuaXR1cmUlMjBtYW51ZmFjdHVyaW5nfGVufDF8fHx8MTc1NzAwMjgwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Business", "Tech Integration", "Corporate"]
    },
    {
      id: "historic-mansion-hotel",
      title: "Historic Mansion Hotel",
      location: "Tuscany, Italy",
      year: "2022",
      brand: "LaQuinta",
      description: "Restoration of antique furniture and creation of period-appropriate pieces for a 16th-century mansion converted into luxury hotel.",
      image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpYyUyMGhvdGVsJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU3MDAzMDM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Historic", "Restoration", "Italian Craftsmanship"]
    },
    {
      id: "desert-safari-lodge",
      title: "Desert Safari Lodge",
      location: "Dubai, UAE",
      year: "2023",
      brand: "Hilton",
      description: "Luxury desert camping experience furniture designed to withstand extreme temperatures while providing 5-star comfort.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNlcnQlMjBsb2RnZSUyMGx1eHVyeXxlbnwxfHx8fDE3NTcwMDMwMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Desert", "Luxury Camping", "Traditional Design"]
    }
  ];



  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 via-accent/50 to-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <ExternalLink className="w-4 h-4" />
              <span>Our Portfolio</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Our Portfolio of
              <span className="text-primary block">Excellence</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover our diverse collection of hospitality projects spanning luxury resorts, 
              boutique hotels, and unique accommodations across the globe.
            </p>
          </div>
        </div>
      </section>

      {/* Hotel Projects Carousel */}
      <section className="py-12 bg-gradient-to-r from-primary/5 via-accent/30 to-primary/5 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3">Our Hotel Projects</h2>
            <p className="text-muted-foreground">Explore our diverse portfolio of luxury hospitality projects worldwide</p>
          </div>
          
          {/* Moving Carousel */}
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex animate-scroll-logos space-x-4">
                {/* First set of projects */}
                {projects.map((project, index) => {
                  console.log("Rendering carousel project:", project.title);
                  return (
                  <Link
                    key={`first-${index}`}
                    href={`/portfolio/${project.id}`}
                    className="group flex-shrink-0 bg-white hover:bg-primary hover:text-white transition-all duration-300 rounded-lg px-6 py-3 shadow-md hover:shadow-lg border-2 border-primary hover:border-primary min-w-[240px] block"
                  >
                    <div className="text-center">
                      <h3 className="font-medium text-sm leading-tight group-hover:text-white transition-colors mb-1">
                        {project.title}
                      </h3>
                      <div className="flex items-center justify-center gap-1">
                        <MapPin className="w-3 h-3 text-muted-foreground group-hover:text-white/80 transition-colors" />
                        <span className="text-xs text-muted-foreground group-hover:text-white/80 transition-colors">
                          {project.location}
                        </span>
                      </div>
                    </div>
                  </Link>
                  );
                })}
                
                {/* Duplicate set for seamless loop */}
                {projects.map((project, index) => (
                  <Link
                    key={`second-${index}`}
                    href={`/portfolio/${project.id}`}
                    className="group flex-shrink-0 bg-white hover:bg-primary hover:text-white transition-all duration-300 rounded-lg px-6 py-3 shadow-md hover:shadow-lg border-2 border-primary hover:border-primary min-w-[240px] block"
                  >
                    <div className="text-center">
                      <h3 className="font-medium text-sm leading-tight group-hover:text-white transition-colors mb-1">
                        {project.title}
                      </h3>
                      <div className="flex items-center justify-center gap-1">
                        <MapPin className="w-3 h-3 text-muted-foreground group-hover:text-white/80 transition-colors" />
                        <span className="text-xs text-muted-foreground group-hover:text-white/80 transition-colors">
                          {project.location}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our complete portfolio of exceptional hospitality furniture projects from around the world
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              console.log("Rendering project:", project.title, "with ID:", project.id);
              return (
              <Link href={`/portfolio/${project.id}`}>
                <Card 
                  key={index} 
                  className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden cursor-pointer"
                >
                <div className="relative">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">{tag}</Badge>
                ))}
                  </div>
                  
                  <h3 className="text-lg font-bold mb-3">{project.title}</h3>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{project.year}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                </CardContent>
              </Card>
              </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}