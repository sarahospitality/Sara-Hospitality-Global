"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { ExternalLink, MapPin, ArrowRight, Filter, AlertCircle, Loader2 } from "lucide-react";
import Link from "next/link";
import { getPortfolioItems, extractSlug, getPortfolioImageUrl, PortfolioItem } from "@/lib/portfolio";

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<string>("");
  const [filterProject, setFilterProject] = useState<string>("all");
  const [projects, setProjects] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch portfolio data from database
  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getPortfolioItems();
        
        // Set projects from database (will be empty array if no data or error)
        setProjects(data);
        
        if (data.length === 0) {
          setError('No portfolio items found. Please add items to the database.');
        }
      } catch (err) {
        console.error('Unexpected error fetching portfolio data:', err);
        setError('An unexpected error occurred while loading portfolio items.');
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolioData();
  }, []);

  // Loading skeleton component
  const LoadingSkeleton = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {[...Array(6)].map((_, index) => (
        <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden">
          <div className="relative">
            <div className="w-full h-48 sm:h-64 bg-gray-200 animate-pulse"></div>
          </div>
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-wrap gap-1 mb-3">
              <div className="w-16 h-5 bg-gray-200 rounded animate-pulse"></div>
              <div className="w-20 h-5 bg-gray-200 rounded animate-pulse"></div>
            </div>
            <div className="w-3/4 h-6 bg-gray-200 rounded animate-pulse mb-3"></div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-gray-200 rounded animate-pulse"></div>
              <div className="w-24 h-4 bg-gray-200 rounded animate-pulse"></div>
            </div>
            <div className="w-full h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
            <div className="w-2/3 h-4 bg-gray-200 rounded animate-pulse"></div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  // Error alert component
  const ErrorAlert = () => (
    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
      <div className="flex items-center">
        <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
        <span className="text-red-700">{error}</span>
      </div>
    </div>
  );

  // Empty state component
  const EmptyState = () => (
    <div className="text-center py-16">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-4">
        <ExternalLink className="w-10 h-10 text-gray-400" />
      </div>
      <h3 className="text-2xl font-bold mb-2">No Portfolio Items Found</h3>
      <p className="text-muted-foreground mb-6 max-w-md mx-auto">
        There are currently no portfolio items in the database. Please add some items to display them here.
      </p>
      <Link href="/contact">
        <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
          Contact Us to Add Projects
        </button>
      </Link>
    </div>
  );

  const handleProjectClick = (projectSlug: string | null) => {
    if (!projectSlug) return;
    
    // Extract clean slug from URL or mixed string
    const cleanSlug = extractSlug(projectSlug);
    
    setSelectedProject(cleanSlug);
    // Navigate to project detail page
    window.location.href = `/portfolio/${cleanSlug}`;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-6 sm:py-12 bg-gradient-to-br from-[#f26d35]/5 via-gray-50 to-[#f26d35]/10 overflow-hidden">
        <div className="container mx-auto px-6 sm:px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#f26d35]/10 text-primary px-4 py-2 rounded-full mb-6">
              <ExternalLink className="w-4 h-4" />
              <span className="text-sm font-medium">Portfolio</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Showcase of Global
              <span className="text-primary block">Craftsmanship</span>
            </h1>
            <p className="text-base sm:text-xl text-muted-foreground mb-8">
              Explore our extensive, hand-selected collection of world-class furniture projects,
              encompassing luxury resorts, boutique hotels, and distinct accommodations across every continent.
            </p>
            
            <Link href="/contact">
              <button className="bg-[#f26d35] hover:bg-[#e55a2b] text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-3 mx-auto transition-all duration-300 shadow-2xl hover:shadow-3xl relative overflow-hidden">
                <span className="relative z-10">Request A Quote</span>
                <ArrowRight className="w-5 h-5 relative z-10 animate-pulse" style={{ animation: 'arrowMove 2s ease-in-out infinite' }} />
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent"></div>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Hotel Projects Carousel - Only show if there are projects */}
      {!loading && projects.length > 0 && (
        <section className="pt-4 sm:pt-8 pb-2 sm:pb-4 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
          <div className="container mx-auto px-6 sm:px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3">Our Hotel Projects</h2>
              <p className="text-sm sm:text-base text-muted-foreground">Explore our diverse portfolio of luxury hospitality projects worldwide</p>
            </div>
            
            {/* Moving Carousel */}
            <div className="relative">
              <div className="overflow-hidden">
                <div className="flex animate-scroll-logos space-x-4">
                  {/* First set of projects */}
                  {projects.map((project, index) => (
                  <button
                    key={`first-${index}`}
                    onClick={() => handleProjectClick(project.slug)}
                    className="group flex-shrink-0 bg-white hover:bg-primary hover:text-white transition-all duration-300 rounded-lg px-4 sm:px-6 py-2 sm:py-3 shadow-md hover:shadow-lg border-2 border-primary hover:border-primary min-w-[200px] sm:min-w-[240px]"
                  >
                    <div className="text-center">
                      {project.title && (
                        <h3 className="font-medium text-xs sm:text-sm leading-tight group-hover:text-white transition-colors mb-1">
                          {project.title}
                        </h3>
                      )}
                      {project.location && (
                        <div className="flex items-center justify-center gap-1">
                          <MapPin className="w-3 h-3 text-muted-foreground group-hover:text-white/80 transition-colors" />
                          <span className="text-xs text-muted-foreground group-hover:text-white/80 transition-colors">
                            {project.location}
                          </span>
                        </div>
                      )}
                    </div>
                  </button>
                ))}
                
                {/* Duplicate for seamless loop */}
                {projects.map((project, index) => (
                  <button
                    key={`second-${index}`}
                    onClick={() => handleProjectClick(project.slug)}
                    className="group flex-shrink-0 bg-white hover:bg-primary hover:text-white transition-all duration-300 rounded-lg px-4 sm:px-6 py-2 sm:py-3 shadow-md hover:shadow-lg border-2 border-primary hover:border-primary min-w-[200px] sm:min-w-[240px]"
                  >
                    <div className="text-center">
                      {project.title && (
                        <h3 className="font-medium text-xs sm:text-sm leading-tight group-hover:text-white transition-colors mb-1">
                          {project.title}
                        </h3>
                      )}
                      {project.location && (
                        <div className="flex items-center justify-center gap-1">
                          <MapPin className="w-3 h-3 text-muted-foreground group-hover:text-white/80 transition-colors" />
                          <span className="text-xs text-muted-foreground group-hover:text-white/80 transition-colors">
                            {project.location}
                          </span>
                        </div>
                      )}
                    </div>
                  </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Projects Grid */}
      <section className="pt-4 sm:pt-8 pb-8 sm:pb-16">
        <div className="container mx-auto px-6 sm:px-4">
          <div className="mb-12">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
              <div className="text-center sm:text-left flex-1">
                <h2 className="text-2xl sm:text-4xl font-bold mb-2">Featured Global Installations</h2>
                <p className="text-base sm:text-xl text-muted-foreground">
                  Discover our curated portfolio of exceptional custom hospitality furniture projects from around the world.
                </p>
              </div>
              
              <div className="relative">
                <select
                  value={filterProject}
                  onChange={(e) => setFilterProject(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f26d35] focus:border-transparent bg-white text-sm font-medium min-w-[200px] appearance-none cursor-pointer"
                >
                  <option value="all">All Projects</option>
                  {projects.map((project) => (
                    <option key={project.id} value={project.slug || ''}>
                      {project.title || 'Untitled Project'}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* Error Alert */}
          {error && <ErrorAlert />}
          
          {/* Loading State */}
          {loading ? (
            <LoadingSkeleton />
          ) : projects.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {projects.filter(project => filterProject === "all" || project.slug === filterProject).map((project, index) => (
              <Card 
                key={project.id} 
                className={`group hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden cursor-pointer ${index === 0 ? 'first-portfolio-mobile' : ''}`}
                onClick={() => handleProjectClick(project.slug)}
              >
                <div className="relative">
                  <ImageWithFallback
                    src={getPortfolioImageUrl(project.main_image)}
                    alt={project.title || 'Project image'}
                    width={400}
                    height={256}
                    className="w-full h-48 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <CardContent className="p-4 sm:p-6">
                  {/* Tags - Split by comma and show as separate badges */}
                  {project.tags && (
                    <div className={`flex flex-wrap gap-1.5 mb-3 ${index === 0 ? 'no-underline' : ''}`}>
                      {project.tags.split(',').map((tag: string, tagIndex: number) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          {tag.trim()}
                        </Badge>
                      ))}
                    </div>
                  )}
                  
                  {/* Title - Only show if title exists */}
                  {project.title && (
                    <h3 className="text-base sm:text-lg font-bold mb-2">{project.title}</h3>
                  )}
                  
                  {/* Location - Only show if location exists */}
                  {project.location && (
                    <div className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground mb-3">
                      <MapPin className="w-3 h-3" />
                      <span>{project.location}</span>
                    </div>
                  )}
                  
                  {/* Subtitle - Only show if subtitle exists */}
                  {project.subtitle && (
                    <p className="text-sm text-muted-foreground mb-3">{project.subtitle}</p>
                  )}
                </CardContent>
              </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}