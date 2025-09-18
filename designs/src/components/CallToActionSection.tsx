import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface CallToActionSectionProps {
  onNavigate: (page: string) => void;
  selectedCountry?: string;
}

export default function CallToActionSection({ onNavigate, selectedCountry }: CallToActionSectionProps) {
  const isCanada = selectedCountry === "canada-toronto";

  if (isCanada) {
    return (
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Transform Your Canadian Hospitality Space?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how Sara Global Hospitality can bring your vision to life with our 
              sustainable Canadian furniture solutions and expert craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => onNavigate("contact")}
              >
                Get Free Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => onNavigate("portfolio")}
              >
                View Canadian Portfolio
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Hospitality Space?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how Sara Global Hospitality can bring your vision to life with our 
            expert furniture solutions and global experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => onNavigate("contact")}
            >
              Get Free Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => onNavigate("portfolio")}
            >
              View Our Portfolio
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}