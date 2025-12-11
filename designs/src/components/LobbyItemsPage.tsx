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

interface LobbyItemsPageProps {
  onNavigate: (page: string) => void;
}

export default function LobbyItemsPage({ onNavigate }: LobbyItemsPageProps) {
  const [zoomedImage, setZoomedImage] = useState<{ src: string; alt: string } | null>(null);

  const brandLogos = [
    { name: "La Quinta by Wyndham", src: laQuintaLogo },
    { name: "Holiday Inn Express & Suites", src: holidayInnLogo },
    { name: "Quality Inn", src: qualityInnLogo },
    { name: "Baymont by Wyndham", src: baymontLogo },
    { name: "Best Western Plus", src: bestWesternLogo },
    { name: "Days Inn & Suites", src: daysInnLogo }
  ];

  const lobbyItems = [
    {
      id: "lob-701",
      name: "LOB-701",
      category: "Reception Desk Custom",
      description: "Custom-designed reception desk creating first impressions for hotel guests. Premium materials with integrated technology and professional styling.",
      features: ["Custom Design", "Tech Integration", "Premium Materials", "Professional"],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJlY2VwdGlvbiUyMGRlc2t8ZW58MXx8fHwxNzU3NTkxMjYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Reception", "Custom", "Premium"]
    },
    {
      id: "lob-702",
      name: "LOB-702",
      category: "Lobby Seating Collection",
      description: "Elegant lobby seating arrangements designed for guest comfort and style. Commercial-grade furniture creating welcoming first impressions.",
      features: ["Comfortable", "Stylish", "Commercial Grade", "Welcoming"],
      image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGxvYmJ5JTIwc2VhdGluZ3xlbnwxfHx8fDE3NTc1OTEyNjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Seating", "Lobby", "Comfortable"]
    },
    {
      id: "lob-703",
      name: "LOB-703",
      category: "Decorative Wall Features",
      description: "Stunning decorative wall features adding visual interest to hotel lobbies. Custom designs creating unique brand identity and guest engagement.",
      features: ["Decorative", "Custom Design", "Visual Impact", "Brand Identity"],
      image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWNvcmF0aXZlJTIwd2FsbCUyMGhvdGVsJTIwbG9iYnl8ZW58MXx8fHwxNzU3NTkxMjY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Decorative", "Wall Feature", "Custom"]
    },
    {
      id: "lob-704",
      name: "LOB-704",
      category: "Concierge Stations",
      description: "Professional concierge stations designed for guest services. Functional workspace with elegant design supporting hospitality operations.",
      features: ["Concierge", "Functional", "Professional", "Service Station"],
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jaWVyZ2UlMjBkZXNrJTIwaG90ZWx8ZW58MXx8fHwxNzU3NTkxMjcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Concierge", "Service", "Functional"]
    },
    {
      id: "lob-705",
      name: "LOB-705",
      category: "Signage & Wayfinding",
      description: "Premium signage and wayfinding systems for hotel navigation. Clear, branded solutions enhancing guest experience and property aesthetics.",
      features: ["Signage", "Wayfinding", "Branded", "Clear Navigation"],
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNpZ25hZ2UlMjB3YXlmaW5kaW5nfGVufDF8fHx8MTc1NzU5MTI3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Signage", "Wayfinding", "Navigation"]
    },
    {
      id: "lob-706",
      name: "LOB-706",
      category: "Luggage Carts & Racks",
      description: "Durable luggage carts and storage racks for hotel guest services. Commercial-grade construction with polished finish matching property aesthetic.",
      features: ["Luggage Storage", "Durable", "Commercial Grade", "Service Equipment"],
      image: "https://images.unsplash.com/photo-1455504490126-80ed4d83b3b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdWdnYWdlJTIwY2FydCUyMGhvdGVsfGVufDF8fHx8MTc1NzU5MTI3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Luggage", "Service", "Durable"]
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
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxob3RlbCUyMGxvYmJ5JTIwcmVjZXB0aW9uJTIwbHV4dXJ5fGVufDF8fHx8MTc1NzU5MTI4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Lobby Items Collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h1 className="text-3xl lg:text-4xl mb-4 text-white">Hotel Lobby Items Collection</h1>
              <p className="text-lg lg:text-xl mb-6 opacity-90 text-white">
                Premium lobby fixtures and equipment designed to create welcoming first impressions for hotel guests
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
              { stat: "100%", label: "Custom Solutions" },
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
            <h2 className="text-3xl lg:text-4xl mb-4">Our Lobby Items Collection</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our comprehensive range of lobby fixtures and equipment, each designed to create memorable first impressions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lobbyItems.map((item) => (
              <Card key={item.id} className="group overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <div 
                    className="relative cursor-pointer group/image"
                    onClick={() => handleImageClick(item.image, item.name)}
                  >
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/20 transition-colors duration-200 flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover/image:opacity-100 transition-opacity duration-200" />
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-lg">{item.name}</h3>
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
                  Transform Your Hotel Lobby with Premium Fixtures
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Discover our comprehensive range of lobby items designed to create welcoming spaces and efficient operations. From custom reception desks to elegant seating, we have everything you need.
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
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxob3RlbCUyMGxvYmJ5JTIwcmVjZXB0aW9uJTIwbHV4dXJ5fGVufDF8fHx8MTU3NjcxNjM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Luxury hotel lobby"
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
              Discover what makes us the preferred partner for hospitality lobby fixture solutions worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Factory, title: "Custom lobby design specialist", desc: "Expert design and fabrication of custom lobby fixtures creating unique brand identity and memorable guest experiences." },
              { icon: Package, title: "Complete lobby solutions", desc: "Comprehensive offerings from reception desks to seating and decorative elements providing one-stop solution for lobby needs." },
              { icon: Globe, title: "International hotel experience", desc: "Proven track record serving major hotel brands across global markets with understanding of hospitality lobby standards." },
              { icon: CheckCircle, title: "Installation and coordination", desc: "Professional installation services coordinating with other trades ensuring timely project completion and perfect execution." }
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
              Quick answers to common questions about our lobby item solutions
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium">Can you design a custom reception desk for our hotel brand?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Absolutely! Our design team specializes in creating custom reception desks that perfectly reflect your brand identity. We incorporate your logo, colors, materials preferences, and functional requirements including technology integration for modern hotel operations.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium">Do you provide complete lobby furniture packages?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Yes! We offer comprehensive lobby packages including reception desks, seating areas, decorative elements, signage, and service equipment. This ensures coordinated design and simplified procurement for your hotel project.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium">Can lobby items be updated without complete renovation?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Yes! We specialize in phased updates allowing you to refresh key lobby elements like reception desks or seating while maintaining operations. This approach minimizes guest disruption and spreads renovation costs over time.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium">What are the delivery timeframes for lobby items in Canada?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Standard lobby furnishings typically ship within 8-10 weeks. Custom reception desks and specialty items may require 12-16 weeks depending on design complexity. We coordinate delivery and installation with your project schedule across Canada.
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

