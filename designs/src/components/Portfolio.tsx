import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, MapPin, Calendar, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

interface PortfolioProps {
  onNavigate?: (page: string) => void;
  selectedCountry?: string;
}

export default function Portfolio({ onNavigate, selectedCountry }: PortfolioProps) {
  const isCanada = selectedCountry === "canada-toronto";
  
  // Function to generate slug from project title
  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };
  
  const projects = [
    {
      title: "Grand Palace Hotel Dubai",
      location: "Dubai, UAE",
      year: "2023",
      type: "Luxury Resort",
      rooms: "450 Rooms",
      description: "Complete furniture solution for a 5-star luxury resort featuring custom-designed bedroom sets, lobby furniture, and dining collections.",
      image: "https://images.unsplash.com/photo-1590490359854-dfba19688d70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHN1aXRlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU2OTE4Njk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Luxury", "Custom Design", "Complete Furnishing"],
      featured: true
    },
    {
      title: "Wellness Spa Resort",
      location: "Bali, Indonesia",
      year: "2023",
      type: "Spa Resort",
      rooms: "120 Rooms",
      description: "Sustainable furniture solutions for an eco-luxury spa resort with focus on natural materials and wellness-oriented design.",
      image: "https://images.unsplash.com/photo-1582533568805-78a15dcb01b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNwYSUyMHJlbGF4YXRpb24lMjBhcmVhfGVufDF8fHx8MTc1NzAwMzAzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Eco-Friendly", "Spa Design", "Wellness"]
    },
    {
      title: "Metropolitan Boutique Hotel",
      location: "New York, USA",
      year: "2022",
      type: "Boutique Hotel",
      rooms: "95 Rooms",
      description: "Modern urban design with space-efficient solutions for a trendy boutique hotel in Manhattan's financial district.",
      image: "https://images.unsplash.com/photo-1718104717529-0059a1a860fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3V0aXF1ZSUyMGhvdGVsJTIwcmVjZXB0aW9ufGVufDF8fHx8MTc1NzAwMzAzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Urban Design", "Space Efficient", "Modern"]
    },
    {
      title: "Royal Heritage Hotel",
      location: "London, UK",
      year: "2022",
      type: "Heritage Hotel",
      rooms: "200 Rooms",
      description: "Classic elegance meets modern comfort in this restored Victorian hotel with period-appropriate custom furniture.",
      image: "https://images.unsplash.com/photo-1755644046048-989506b73a5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3RlbCUyMGxvYmJ5JTIwZnVybml0dXJlfGVufDF8fHx8MTc1NzAwMjkwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Heritage", "Classic Design", "Restoration"]
    },


  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Countries Served" },
    { number: "100k+", label: "Rooms Furnished" },
    { number: "98%", label: "Client Satisfaction" }
  ];

  if (isCanada) {
    const canadianProjects = [
      {
        title: "Banff Mountain Resort",
        location: "Banff, Alberta",
        year: "2023",
        type: "Mountain Resort",
        rooms: "280 Rooms",
        description: "Sustainable furniture collection for Canada's premier mountain resort, featuring locally-sourced Canadian maple and eco-friendly finishes.",
        image: "https://images.unsplash.com/photo-1739907549777-6ff7cd3921fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5hZGlhbiUyMG1vdW50YWluJTIwaG90ZWwlMjBsb2RnZXxlbnwxfHx8fDE3NTc1MDI0MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        tags: ["Sustainable", "Mountain Resort", "Canadian Maple"],
        featured: true,
        sustainability: "100% FSC Certified Wood"
      },
      {
        title: "Vancouver Waterfront Hotel",
        location: "Vancouver, BC",
        year: "2023",
        type: "Urban Luxury",
        rooms: "350 Rooms",
        description: "Modern coastal design with reclaimed materials from BC forests, creating a unique Pacific Northwest hospitality experience.",
        image: "https://images.unsplash.com/photo-1725623831897-fb009acfe742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YW5jb3V2ZXIlMjBsdXh1cnklMjBob3RlbCUyMGludGVyaW9yfGVufDF8fHx8MTc1NzUwMjQxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        tags: ["Coastal Design", "Reclaimed Materials", "BC Forests"],
        sustainability: "90% Recycled Content"
      },
      {
        title: "Toronto Financial District Hotel",
        location: "Toronto, ON",
        year: "2022",
        type: "Business Hotel",
        rooms: "180 Rooms",
        description: "Contemporary urban furniture solutions with emphasis on space efficiency and Canadian design aesthetic for business travelers.",
        image: "https://images.unsplash.com/photo-1718104717529-0059a1a860fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3JvbnRvJTIwYm91dGlxdWUlMjBob3RlbCUyMHJvb218ZW58MXx8fHwxNzU3NTAyNDE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        tags: ["Urban Design", "Space Efficient", "Business Travel"],
        sustainability: "Carbon Neutral Manufacturing"
      }
    ];

    const canadianStats = [
      { number: "150+", label: "Canadian Hotels" },
      { number: "10", label: "Provinces Served" },
      { number: "25k+", label: "Rooms in Canada" },
      { number: "100%", label: "Eco-Friendly" }
    ];

    return (
      <section id="portfolio" className="py-8 bg-gradient-to-b from-slate-900 to-slate-800 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Canadian Header - Consistent with other sections */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm text-primary px-4 py-2 rounded-full mb-4 border border-primary/30">
              <ExternalLink className="w-4 h-4" />
              <span>Canadian Portfolio</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-2">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Transforming Canada's
              </span>
              <span className="text-primary block">Hospitality Landscape</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              Sustainable furniture solutions across Canada's most prestigious hotels and resorts.
            </p>
          </div>

          {/* Featured Projects Grid - Increased Height and Repositioned */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {canadianProjects.slice(0, 2).map((project, index) => (
              <div key={index} className="relative bg-slate-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50">
                <div className="relative">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Featured Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-primary/90 text-white px-3 py-1 rounded-full flex items-center gap-2">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span className="text-sm font-medium">Featured</span>
                    </div>
                  </div>
                  
                  {/* Project Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <div className="flex items-center gap-4 text-white/80 text-sm mb-3">
                      <span>{project.location}</span>
                      <span>{project.year}</span>
                    </div>
                    <p className="text-white/90 text-sm mb-4 line-clamp-2">{project.description}</p>
                    <Link href={`/portfolio/${generateSlug(project.title)}`}>
                      <Button className="bg-primary hover:bg-primary/90 text-white">
                        View Details
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Canadian Stats - Moved Below Images */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {canadianStats.map((stat, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 text-center">
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Explore All Projects Button - Centered */}
          <div className="text-center">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4"
              onClick={() => onNavigate?.("portfolio")}
            >
              Explore All Projects
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="portfolio" className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <ExternalLink className="w-4 h-4" />
            <span>Our Portfolio</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-2">
            Transforming Hospitality Spaces
            <span className="text-primary block">Worldwide</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our diverse portfolio of completed projects spanning luxury resorts, 
            boutique hotels, and business centers across the globe.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Featured Project */}
        <div className="mb-16">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="grid lg:grid-cols-2">
              <div className="relative">
                <ImageWithFallback
                  src={projects[0].image}
                  alt={projects[0].title}
                  className="w-full h-80 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">Featured Project</Badge>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex flex-wrap gap-2 mb-4">
                  {projects[0].tags.map((tag, index) => (
                    <Badge key={index} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">{projects[0].title}</h3>
                <div className="flex items-center gap-6 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{projects[0].location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{projects[0].year}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{projects[0].rooms}</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">{projects[0].description}</p>
                <Link href={`/portfolio/${generateSlug(projects[0].title)}`}>
                  <Button className="w-fit">
                    View Case Study
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.slice(1).map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md overflow-hidden">
              <div className="relative">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90">{project.type}</Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">{tag}</Badge>
                  ))}
                </div>
                
                <h3 className="font-bold mb-2">{project.title}</h3>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{project.year}</span>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                
                <Link href={`/portfolio/${generateSlug(project.title)}`}>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="p-0 h-auto hover:bg-transparent"
                  >
                    <span className="text-primary">View Details</span>
                    <ArrowRight className="w-3 h-3 ml-2 text-primary" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90"
            onClick={() => onNavigate?.("portfolio")}
          >
            View All Projects
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}