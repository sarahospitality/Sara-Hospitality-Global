import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram, Youtube, Globe } from "lucide-react";

interface HeaderProps {
  onNavigate?: (page: string) => void;
  currentPage?: string;
  selectedCountry?: string;
  onCountryChange?: (country: string) => void;
}

export default function Header({ onNavigate, currentPage = "home", selectedCountry, onCountryChange }: HeaderProps) {
  return (
    <header className="w-full">
      {/* Top Header with Contact Info */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-sm">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+1-678-431-9041</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@saraglobal.com</span>
              </div>

            </div>
            <div className="flex items-center gap-2">
              <span>Follow Us:</span>
              <div className="flex gap-2">
                <a href="#" className="hover:text-accent transition-colors" aria-label="Facebook">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="hover:text-accent transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="hover:text-accent transition-colors" aria-label="Instagram">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="hover:text-accent transition-colors" aria-label="YouTube">
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-primary">Sara Global</h1>
                  <p className="text-xs text-muted-foreground">Hospitality</p>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => onNavigate?.("home")} 
                className={`transition-colors ${currentPage === "home" ? "text-primary font-medium" : "text-foreground hover:text-primary"}`}
              >
                Home
              </button>
              <button 
                onClick={() => onNavigate?.("about")} 
                className={`transition-colors ${currentPage === "about" ? "text-primary font-medium" : "text-foreground hover:text-primary"}`}
              >
                About
              </button>
              {selectedCountry && (
                <button 
                  onClick={() => onNavigate?.("products")} 
                  className={`transition-colors ${currentPage === "products" ? "text-primary font-medium" : "text-foreground hover:text-primary"}`}
                >
                  Products
                </button>
              )}
              <button 
                onClick={() => onNavigate?.("portfolio")} 
                className={`transition-colors ${currentPage === "portfolio" ? "text-primary font-medium" : "text-foreground hover:text-primary"}`}
              >
                Portfolio
              </button>
              <button 
                onClick={() => onNavigate?.("blog")} 
                className={`transition-colors ${currentPage === "blog" ? "text-primary font-medium" : "text-foreground hover:text-primary"}`}
              >
                Blog
              </button>

              <button 
                onClick={() => onNavigate?.("contact")} 
                className={`transition-colors ${currentPage === "contact" ? "text-primary font-medium" : "text-foreground hover:text-primary"}`}
              >
                Contact
              </button>
            </div>

            {/* Location Selector & CTA Button */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-muted-foreground" />
                <Select value={selectedCountry} onValueChange={onCountryChange}>
                  <SelectTrigger className="w-36 h-8 text-sm border-none shadow-none">
                    <SelectValue placeholder="Select Country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usa-atlanta">🇺🇸 United States</SelectItem>
                    <SelectItem value="uae-dubai">🇦🇪 United Arab Emirates</SelectItem>
                    <SelectItem value="uk-london">🇬🇧 United Kingdom</SelectItem>
                    <SelectItem value="singapore">🇸🇬 Singapore</SelectItem>
                    <SelectItem value="india-mumbai">🇮🇳 India</SelectItem>
                    <SelectItem value="china-shanghai">🇨🇳 China</SelectItem>
                    <SelectItem value="canada-toronto">🇨🇦 Canada</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button 
                onClick={() => onNavigate?.("enquiry")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Get Quote
              </Button>
              <button className="md:hidden">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}