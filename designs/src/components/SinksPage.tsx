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

interface SinksPageProps {
  onNavigate: (page: string) => void;
}

export default function SinksPage({ onNavigate }: SinksPageProps) {
  const [zoomedImage, setZoomedImage] = useState<{ src: string; alt: string } | null>(null);

  const brandLogos = [
    { name: "La Quinta by Wyndham", src: laQuintaLogo },
    { name: "Holiday Inn Express & Suites", src: holidayInnLogo },
    { name: "Quality Inn", src: qualityInnLogo },
    { name: "Baymont by Wyndham", src: baymontLogo },
    { name: "Best Western Plus", src: bestWesternLogo },
    { name: "Days Inn & Suites", src: daysInnLogo }
  ];

  const sinks = [
    {
      id: "snk-501",
      name: "SNK-501",
      category: "Undermount Porcelain Sink",
      description: "Premium undermount porcelain sink with clean lines perfect for hotel bathrooms. Features durable construction with easy-clean surface and classic design.",
      features: ["Undermount Design", "Porcelain Material", "Easy Clean", "Durable"],
      image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxiYXRocm9vbSUyMHNpbmslMjB1bmRlcm1vdW50fGVufDF8fHx8MTc1NzU5MTIwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Undermount", "Porcelain", "Classic"]
    },
    {
      id: "snk-502",
      name: "SNK-502",
      category: "Vessel Sink Contemporary",
      description: "Modern vessel sink creating a statement in upscale hotel bathrooms. Premium materials with contemporary design for luxury properties.",
      features: ["Vessel Style", "Contemporary", "Premium Materials", "Statement Piece"],
      image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHx2ZXNzZWwlMjBzaW5rJTIwYmF0aHJvb218ZW58MXx8fHwxNzU3NTkxMjAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Vessel", "Contemporary", "Luxury"]
    },
    {
      id: "snk-503",
      name: "SNK-503",
      category: "Integrated Countertop Sink",
      description: "Seamless integrated sink with countertop for modern hotel bathrooms. One-piece construction eliminates seams for easy maintenance.",
      features: ["Integrated Design", "Seamless", "One-Piece", "Easy Maintenance"],
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlZ3JhdGVkJTIwc2luayUyMGNvdW50ZXJ0b3B8ZW58MXx8fHwxNzU3NTkxMjA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Integrated", "Modern", "Seamless"]
    },
    {
      id: "snk-504",
      name: "SNK-504",
      category: "Drop-In Commercial Sink",
      description: "Practical drop-in sink designed for easy installation and replacement. Commercial-grade construction perfect for high-traffic hotel use.",
      features: ["Drop-In", "Commercial Grade", "Easy Install", "High Traffic"],
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9wJTIwaW4lMjBzaW5rJTIwYmF0aHJvb218ZW58MXx8fHwxNzU3NTkxMjEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Drop-In", "Commercial", "Practical"]
    },
    {
      id: "snk-505",
      name: "SNK-505",
      category: "Rectangular Modern Sink",
      description: "Sleek rectangular sink with contemporary styling. Ideal for modern hotel bathrooms seeking minimalist elegance and functionality.",
      features: ["Rectangular", "Modern Style", "Minimalist", "Functional"],
      image: "https://images.unsplash.com/photo-1604709177225-055f99402ea3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWN0YW5ndWxhciUyMHNpbmslMjBiYXRocm9vbXxlbnwxfHx8fDE3NTc1OTEyMTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Rectangular", "Modern", "Minimalist"]
    },
    {
      id: "snk-506",
      name: "SNK-506",
      category: "Pedestal Sink Classic",
      description: "Elegant pedestal sink offering timeless design for traditional hotel properties. Space-saving design with classic appeal and quality construction.",
      features: ["Pedestal Style", "Classic Design", "Space Saving", "Timeless"],
      image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWRlc3RhbCUyMHNpbmslMjBiYXRocm9vbXxlbnwxfHx8fDE3NTc1OTEyMTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Pedestal", "Classic", "Traditional"]
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
            src="https://images.unsplash.com/photo-1620626011761-996317b8d101?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxob3RlbCUyMGJhdGhyb29tJTIwc2luayUyMGx1eHVyeXxlbnwxfHx8fDE3NTc1OTEyMjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Sinks Collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h1 className="text-3xl lg:text-4xl mb-4 text-white">Hotel Sinks Collection</h1>
              <p className="text-lg lg:text-xl mb-6 opacity-90 text-white">
                Premium sinks designed for hotel bathrooms, combining durability, style, and functionality
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
              { stat: "100%", label: "Commercial Grade" },
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
            <h2 className="text-3xl lg:text-4xl mb-4">Our Hotel Sinks</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our comprehensive range of hotel sinks, each designed with unique features to meet your hospitality needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sinks.map((sink) => (
              <Card key={sink.id} className="group overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <div 
                    className="relative cursor-pointer group/image"
                    onClick={() => handleImageClick(sink.image, sink.name)}
                  >
                    <ImageWithFallback
                      src={sink.image}
                      alt={sink.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/20 transition-colors duration-200 flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover/image:opacity-100 transition-opacity duration-200" />
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-lg">{sink.name}</h3>
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
                  Transform Your Hotel with Premium Sink Solutions
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Discover our comprehensive range of hotel sinks designed to elevate your bathroom functionality and aesthetics. From contemporary vessel sinks to classic pedestal designs, we have everything you need.
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
                  src="https://images.unsplash.com/photo-1620626011761-996317b8d101?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxob3RlbCUyMGJhdGhyb29tJTIwc2luayUyMGx1eHVyeXxlbnwxfHx8fDE1NzY3MTYzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Luxury hotel bathroom sink"
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
              Discover what makes us the preferred partner for hospitality sink solutions worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Factory, title: "Commercial-grade sink manufacturer", desc: "Specialized manufacturing expertise in commercial sinks for hospitality environments, ensuring durability and quality." },
              { icon: Package, title: "Variety of styles and sizes", desc: "Extensive selection from undermount to vessel sinks with customization options for unique requirements." },
              { icon: Globe, title: "International hotel experience", desc: "Proven track record serving major hotel brands across global markets with comprehensive understanding of standards." },
              { icon: CheckCircle, title: "Quality materials and finishes", desc: "Premium porcelain, ceramic, and composite materials with scratch and stain-resistant properties for long life." }
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
              Quick answers to common questions about our hotel sink solutions
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium">How durable are your hotel sinks for high-traffic use?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Our hotel sinks are commercial-grade with reinforced construction, premium materials, and scratch-resistant finishes. Each sink is tested to withstand continuous daily use while maintaining appearance and functionality for years.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium">Can you provide custom sink sizes for unique bathroom layouts?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Yes! We offer custom fabrication services for sinks including non-standard sizes and configurations. Our team works with your specifications to create perfectly fitted solutions for any bathroom design challenge.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium">What materials do you recommend for hotel sinks?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  We recommend vitreous china or high-quality porcelain for most hotel applications due to their durability, easy maintenance, and resistance to scratching and staining. For modern properties, composite materials offer additional design flexibility.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium">What are the delivery timeframes for sink orders in Canada?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Standard sink collections typically ship within 4-6 weeks for Canadian hotels. Custom sizes or special finishes may require 8-10 weeks. We coordinate delivery and installation with your project timeline for seamless integration.
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

