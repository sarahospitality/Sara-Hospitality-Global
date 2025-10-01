import { Separator } from "./ui/separator";
import { 
  Phone, 
  Mail, 
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from "lucide-react";

export default function Footer() {
  const quickLinks = [
    "Products",
    "Portfolio", 
    "About Us",
    "Blog",
    "Contact"
  ];

  const globalLocations = [
    { flag: "🇨🇦", text: "Canada" },
    { flag: "🇺🇸", text: "United States" },
    { flag: "🇬🇧", text: "United Kingdom" },
    { flag: "🇦🇪", text: "United Arab Emirates" },
    { flag: "🇦🇺", text: "Australia" }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-white">Sara Global Hospitality</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
            Premium B2B furniture solutions for hotels, resorts, and senior living communities across the globe. We combine quality craftsmanship with modern design to enhance guest experiences and elevate your brand.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Instagram, label: "Instagram" }
              ].map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href="#"
                    className="w-8 h-8 bg-gray-700 hover:bg-primary rounded flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Global Locations */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Global Locations</h3>
            <ul className="space-y-2">
              {globalLocations.map((location, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-sm">{location.flag}</span>
                  <span className="text-gray-300 text-sm">{location.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="w-6 h-6 text-gray-400" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-6 h-6 text-gray-400" />
                <span className="text-gray-300 text-sm">info@saraglobal.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-9 h-9 text-gray-400" />
                <span className="text-gray-300 text-sm">Global Headquarters</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-700" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="text-gray-400">
            © 2024 Sara Global Hospitality. All rights reserved.
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}