import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight, ZoomIn, X, Factory, Package, Globe, CheckCircle, User, Heart, Clock, Award } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";
import baymontLogo from 'figma:asset/65e2b4ed424723dae6731b7df90d808c1d793105.png';
import bestWesternLogo from 'figma:asset/d3e30d7d50aff6f76bb0916c50dc15aa2919a066.png';
import daysInnLogo from 'figma:asset/61636d64a66e87acc43f2e63f91829fa6b8f0dea.png';
import laQuintaLogo from 'figma:asset/f31b2dfb28307640a195a389e2838f1c2a7dc156.png';
import holidayInnLogo from 'figma:asset/6e7b3d1f8e168548d6b65e7dd7fb4691d792ff17.png';
import qualityInnLogo from 'figma:asset/1a36f52dfb717910963752bf97e84ab00d9f89e9.png';

interface ArtworksPageProps {
  onNavigate: (page: string) => void;
}

export default function ArtworksPage({ onNavigate }: ArtworksPageProps) {
  const [zoomedImage, setZoomedImage] = useState<{ src: string; alt: string } | null>(null);

  const brandLogos = [
    { name: "La Quinta by Wyndham", src: laQuintaLogo },
    { name: "Holiday Inn Express & Suites", src: holidayInnLogo },
    { name: "Quality Inn", src: qualityInnLogo },
    { name: "Baymont by Wyndham", src: baymontLogo },
    { name: "Best Western Plus", src: bestWesternLogo },
    { name: "Days Inn & Suites", src: daysInnLogo }
  ];

  const artworks = [
    {
      id: "art-401",
      name: "ART-401",
      category: "Abstract Modern Collection",
      description: "Contemporary abstract artwork perfect for hotel public spaces. Features bold colors and geometric designs that create visual interest and modern elegance.",
      features: ["Modern Design", "Bold Colors", "Museum Quality", "Professional Framing"],
      image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFydCUyMGhvdGVsJTIwbG9iYnl8ZW58MXx8fHwxNzU3NTkxMTcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Abstract", "Modern", "Contemporary"]
    },
    {
      id: "art-402",
      name: "ART-402",
      category: "Landscape Photography",
      description: "Stunning landscape photography capturing natural beauty. Professionally printed on premium materials for hotel guest rooms and corridors.",
      features: ["Photography Print", "Premium Materials", "Fade Resistant", "Multiple Sizes"],
      image: "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kc2NhcGUlMjBwaG90b2dyYXBoeSUyMGFydHxlbnwxfHx8fDE3NTc1OTExNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Photography", "Landscape", "Natural"]
    },
    {
      id: "art-403",
      name: "ART-403",
      category: "Classic Fine Art Prints",
      description: "Museum-quality reproductions of classic artworks. Ideal for upscale hotel properties seeking timeless elegance and cultural sophistication.",
      features: ["Museum Quality", "Classic Style", "Fine Art Prints", "Elegant Framing"],
      image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5lJTIwYXJ0JTIwcGFpbnRpbmclMjBjbGFzc2ljfGVufDF8fHx8MTc1NzU5MTE3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Classic", "Fine Art", "Elegant"]
    },
    {
      id: "art-404",
      name: "ART-404",
      category: "Local Artist Commissions",
      description: "Custom commissioned artworks from local artists. Create unique, place-specific pieces that reflect your hotel's location and character.",
      features: ["Custom Commission", "Local Artists", "Unique Pieces", "Place-Specific"],
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBhcnQlMjBwYWludGluZyUyMGFydGlzdHxlbnwxfHx8fDE3NTc1OTExODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Custom", "Commission", "Local"]
    },
    {
      id: "art-405",
      name: "ART-405",
      category: "Metal Wall Sculptures",
      description: "Three-dimensional metal wall sculptures adding texture and dimension. Contemporary designs perfect for creating focal points in hotel spaces.",
      features: ["3D Sculpture", "Metal Art", "Textured Design", "Focal Point"],
      image: "https://images.unsplash.com/photo-1600592244988-750f6eeb3bf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMHdhbGwlMjBzY3VscHR1cmUlMjBhcnR8ZW58MXx8fHwxNzU3NTkxMTgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Sculpture", "Metal", "3D"]
    },
    {
      id: "art-406",
      name: "ART-406",
      category: "Gallery Wall Collections",
      description: "Curated multi-piece gallery wall collections. Coordinated artworks designed to create cohesive visual narratives throughout your property.",
      features: ["Multi-Piece Sets", "Coordinated Design", "Gallery Quality", "Cohesive Theme"],
      image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxhcnQlMjBnYWxsZXJ5JTIwd2FsbCUyMGhvdGVsfGVufDF8fHx8MTc1NzU5MTE4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Gallery", "Collection", "Curated"]
    }
  ];

  const handleImageClick = (src: string, alt: string) => {
    setZoomedImage({ src, alt });
  };

  const closeModal = () => {
    setZoomedImage(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxob3RlbCUyMGFydHdvcmslMjBsb2JieSUyMGRlY29yfGVufDF8fHx8MTc1NzU5MTE5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Artworks Collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h1 className="text-3xl lg:text-4xl mb-4 text-white">Hotel Artworks Collection</h1>
              <p className="text-lg lg:text-xl mb-6 opacity-90 text-white">
                Curated artwork solutions designed to elevate hotel spaces with visual sophistication and cultural appeal
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
            {[
              { stat: "150+", label: "Canadian Hotels" },
              { stat: "10", label: "Provinces Served" },
              { stat: "100%", label: "Curated Selection" },
              { stat: "4.9★", label: "Avg. Rating" }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-2xl border border-white/20">
                  <div className="text-3xl text-primary mb-1">{item.stat}</div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-gray-200">
            <div className="text-center mb-8">
              <h3 className="text-3xl lg:text-4xl text-foreground mb-2">Trusted by Canada's Leading Hotel Brands</h3>
              <p className="text-muted-foreground">Premium brands choose Sara Global for their Canadian properties</p>
            </div>
            
            <div className="overflow-hidden py-4">
              <div className="flex animate-scroll-logos gap-16 items-center">
                {[...Array(2)].map((_, setIndex) => (
                  <div key={setIndex} className="flex gap-16 items-center flex-shrink-0">
                    {brandLogos.map((logo, index) => (
                      <div key={`${setIndex}-${index}`} className="flex-shrink-0">
                        <img
                          src={logo.src as unknown as string}
                          alt={`${logo.name} logo`}
                          className="h-12 w-auto object-contain transition-all duration-300 hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl mb-4">Our Hotel Artwork Collections</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our comprehensive range of curated artworks, each designed to enhance your hotel's aesthetic and guest experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artworks.map((artwork) => (
              <Card key={artwork.id} className="group overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <div 
                    className="relative cursor-pointer group/image"
                    onClick={() => handleImageClick(artwork.image, artwork.name)}
                  >
                    <ImageWithFallback
                      src={artwork.image}
                      alt={artwork.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/20 transition-colors duration-200 flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover/image:opacity-100 transition-opacity duration-200" />
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-lg">{artwork.name}</h3>
                    <Button className="bg-primary hover:bg-primary/90">Enquire</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl lg:text-4xl leading-tight">
                  Transform Your Hotel with Curated Artwork Solutions
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Discover our comprehensive range of hotel artworks designed to elevate your spaces with visual sophistication. From contemporary abstracts to classic fine art, we have everything you need.
                </p>
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" onClick={() => onNavigate("contact")}>
                Request a Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxob3RlbCUyMGFydHdvcmslMjBsb2JieSUyMGx1eHVyeXxlbnwxfHx8fDE1NzY3MTYzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Luxury hotel artwork"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl leading-tight mb-6">
              Why Hotels Choose Sara Global Hospitality
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover what makes us the preferred partner for hospitality artwork solutions worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Factory, title: "Curated art specialist", desc: "Expert curation and sourcing of artwork specifically selected for hospitality environments and brand requirements." },
              { icon: Package, title: "Custom commissioning services", desc: "Work with talented artists to create bespoke pieces that perfectly reflect your hotel's unique identity and location." },
              { icon: Globe, title: "International hotel experience", desc: "Proven track record with major hotel brands across global markets ensuring world-class artwork selection." },
              { icon: CheckCircle, title: "Professional installation included", desc: "Complete service including professional framing, delivery, and expert installation for worry-free implementation." }
            ].map((item, idx) => (
              <div key={idx} className="group relative">
                <div className="bg-primary rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 min-h-[280px] flex flex-col">
                  <div className="bg-white/20 rounded-xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl mb-4 leading-tight">{item.title}</h3>
                  <p className="text-white/90 leading-relaxed text-sm flex-grow">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl mb-6 leading-tight">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about our hotel artwork solutions
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium">Can you help us select artwork that matches our hotel's brand identity?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Absolutely! Our art consultants work closely with you to understand your brand aesthetic, target demographics, and design vision. We curate selections that perfectly align with your property's character and enhance guest experience.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium">Do you offer custom commissioned artwork from local artists?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Yes! We have partnerships with talented artists across Canada and can arrange custom commissions that reflect your hotel's location and unique story. This creates authentic, place-specific artwork that resonates with guests.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium">Is professional installation and framing included?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Yes! All artwork comes with professional museum-quality framing and expert installation services. We handle everything from delivery to secure mounting, ensuring perfect placement and presentation throughout your property.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium">What are the delivery timeframes for artwork orders in Canada?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Curated collections typically ship within 6-8 weeks. Custom commissioned artwork may require 10-16 weeks depending on the artist and complexity. We provide detailed timelines and coordinate delivery with your project schedule.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {zoomedImage && (
        <Dialog open={!!zoomedImage} onOpenChange={closeModal}>
          <DialogContent className="max-w-4xl max-h-[90vh] p-0 bg-transparent border-0 shadow-none">
            <DialogTitle className="sr-only">Zoomed view of {zoomedImage.alt}</DialogTitle>
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

