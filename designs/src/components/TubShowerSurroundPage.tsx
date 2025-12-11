import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight, ZoomIn, X, Factory, Package, Globe, CheckCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";
import baymontLogo from 'figma:asset/65e2b4ed424723dae6731b7df90d808c1d793105.png';
import bestWesternLogo from 'figma:asset/d3e30d7d50aff6f76bb0916c50dc15aa2919a066.png';
import daysInnLogo from 'figma:asset/61636d64a66e87acc43f2e63f91829fa6b8f0dea.png';
import laQuintaLogo from 'figma:asset/f31b2dfb28307640a195a389e2838f1c2a7dc156.png';
import holidayInnLogo from 'figma:asset/6e7b3d1f8e168548d6b65e7dd7fb4691d792ff17.png';
import qualityInnLogo from 'figma:asset/1a36f52dfb717910963752bf97e84ab00d9f89e9.png';

interface TubShowerSurroundPageProps {
  onNavigate: (page: string) => void;
}

export default function TubShowerSurroundPage({ onNavigate }: TubShowerSurroundPageProps) {
  const [zoomedImage, setZoomedImage] = useState<{ src: string; alt: string } | null>(null);

  const brandLogos = [
    { name: "La Quinta by Wyndham", src: laQuintaLogo },
    { name: "Holiday Inn Express & Suites", src: holidayInnLogo },
    { name: "Quality Inn", src: qualityInnLogo },
    { name: "Baymont by Wyndham", src: baymontLogo },
    { name: "Best Western Plus", src: bestWesternLogo },
    { name: "Days Inn & Suites", src: daysInnLogo }
  ];

  const tubShowerSurrounds = [
    {
      id: "tss-601",
      name: "TSS-601",
      category: "Tile Surround System",
      description: "Premium tile surround system offering customizable design options for hotel bathrooms. Features waterproof installation with elegant ceramic or porcelain tiles.",
      features: ["Tile Design", "Waterproof", "Customizable", "Premium Quality"],
      image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG93ZXIlMjB0aWxlJTIwYmF0aHJvb218ZW58MXx8fHwxNzU3NTkxMjMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Tile", "Custom", "Waterproof"]
    },
    {
      id: "tss-602",
      name: "TSS-602",
      category: "Acrylic Panel Surround",
      description: "Modern acrylic panel surround with seamless installation. Low maintenance solution perfect for efficient hotel bathroom updates.",
      features: ["Acrylic Panels", "Seamless", "Low Maintenance", "Easy Install"],
      image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3J5bGljJTIwc2hvd2VyJTIwc3Vycm91bmR8ZW58MXx8fHwxNzU3NTkxMjMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Acrylic", "Modern", "Efficient"]
    },
    {
      id: "tss-603",
      name: "TSS-603",
      category: "Stone Effect Surround",
      description: "Luxury stone-effect surround creating spa-like ambiance. High-quality materials mimicking natural stone with superior durability.",
      features: ["Stone Effect", "Luxury Feel", "Spa-Like", "Durable"],
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9uZSUyMHNob3dlciUyMHN1cnJvdW5kfGVufDF8fHx8MTc1NzU5MTIzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Stone", "Luxury", "Spa"]
    },
    {
      id: "tss-604",
      name: "TSS-604",
      category: "Glass Enclosure System",
      description: "Contemporary frameless glass enclosure for modern hotel showers. Sleek design with easy-clean glass and premium hardware.",
      features: ["Frameless Glass", "Contemporary", "Easy Clean", "Premium Hardware"],
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFzcyUyMHNob3dlciUyMGVuY2xvc3VyZXxlbnwxfHx8fDE3NTc1OTEyNDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Glass", "Frameless", "Contemporary"]
    },
    {
      id: "tss-605",
      name: "TSS-605",
      category: "Solid Surface Surround",
      description: "Seamless solid surface surround with integrated design. Non-porous material resisting mold and mildew for hotel hygiene.",
      features: ["Solid Surface", "Seamless", "Mold Resistant", "Integrated"],
      image: "https://images.unsplash.com/photo-1604709177225-055f99402ea3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xpZCUyMHN1cmZhY2UlMjBzaG93ZXJ8ZW58MXx8fHwxNzU3NTkxMjQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Solid Surface", "Hygienic", "Seamless"]
    },
    {
      id: "tss-606",
      name: "TSS-606",
      category: "Prefab Tub-Shower Unit",
      description: "Complete prefabricated tub-shower unit for quick hotel renovations. One-piece construction simplifying installation and waterproofing.",
      features: ["Prefab Unit", "One-Piece", "Quick Install", "Complete System"],
      image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxwcmVmYWIlMjBzaG93ZXIlMjB1bml0fGVufDF8fHx8MTc1NzU5MTI0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Prefab", "Complete", "Quick"]
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
            src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxob3RlbCUyMHNob3dlciUyMGJhdGhyb29tJTIwbHV4dXJ5fGVufDF8fHx8MTc1NzU5MTI1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Tub & Shower Surround Collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h1 className="text-3xl lg:text-4xl mb-4 text-white">Tub & Shower Surround Collection</h1>
              <p className="text-lg lg:text-xl mb-6 opacity-90 text-white">
                Premium tub and shower surrounds designed for hotel bathrooms, combining waterproof protection with elegant design
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
              { stat: "100%", label: "Waterproof" },
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
            <h2 className="text-3xl lg:text-4xl mb-4">Our Tub & Shower Surrounds</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our comprehensive range of shower and tub surrounds, each designed to provide waterproof protection with style.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tubShowerSurrounds.map((surround) => (
              <Card key={surround.id} className="group overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <div 
                    className="relative cursor-pointer group/image"
                    onClick={() => handleImageClick(surround.image, surround.name)}
                  >
                    <ImageWithFallback
                      src={surround.image}
                      alt={surround.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/20 transition-colors duration-200 flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover/image:opacity-100 transition-opacity duration-200" />
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-lg">{surround.name}</h3>
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
                  Transform Your Hotel with Premium Surround Solutions
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Discover our comprehensive range of tub and shower surrounds designed for waterproof protection and elegant design. From tile systems to solid surface options, we have everything you need.
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
                  src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxob3RlbCUyMHNob3dlciUyMGJhdGhyb29tJTIwbHV4dXJ5fGVufDF8fHx8MTU3NjcxNjM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Luxury hotel bathroom shower"
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
              Discover what makes us the preferred partner for hospitality tub and shower surround solutions worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Factory, title: "Waterproofing specialist", desc: "Expert installation techniques ensuring complete waterproof protection and preventing moisture damage in hotel bathrooms." },
              { icon: Package, title: "Multiple material options", desc: "Comprehensive selection from tile to acrylic panels with customization for any hotel design aesthetic and budget." },
              { icon: Globe, title: "International hotel experience", desc: "Proven track record serving major hotel brands with comprehensive understanding of hospitality bathroom standards." },
              { icon: CheckCircle, title: "Professional installation included", desc: "Expert installation services ensuring waterproof integrity and perfect finish for long-lasting performance." }
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
              Quick answers to common questions about our tub and shower surround solutions
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium">How do you ensure waterproof protection for hotel showers?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  We use professional waterproofing membranes, sealed joints, and proper installation techniques that meet or exceed industry standards. Every installation is tested to ensure complete water containment and long-term protection against moisture damage.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium">Can you match existing bathroom tile or design aesthetics?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Yes! We offer extensive customization including tile matching, color coordination, and design consultation to ensure new surrounds perfectly complement your existing bathroom aesthetic or complete renovation vision.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium">What's the best surround option for quick hotel renovations?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Acrylic panel systems or prefabricated units offer the quickest installation with minimal room downtime. These can typically be installed in 1-2 days per room compared to 3-5 days for traditional tile surrounds, reducing renovation impact on operations.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium">What are the delivery timeframes for surround orders in Canada?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Standard surround materials typically ship within 4-6 weeks. Custom tile selections or prefab units may require 8-10 weeks. We coordinate material delivery with installation schedules to ensure efficient project completion across Canada.
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

