import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { 
  Send, 
  X, 
  MessageSquare,
  Sparkles
} from "lucide-react";

interface QuotePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuotePopup({ isOpen, onClose }: QuotePopupProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
    interests: [] as string[]
  });

  const interestOptions = [
    "Casegoods",
    "FF&E",
    "Reception Items",
    "Bedroom Furniture",
    "Restaurant Furniture",
    "Lobby Items",
    "Outdoor Furniture",
    "Custom Solutions"
  ];

  const handleInterestChange = (interest: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      interests: checked 
        ? [...prev.interests, interest]
        : prev.interests.filter(item => item !== interest)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    
    // Reset form and close popup
    setFormData({
      name: "",
      email: "",
      phone: "",
      location: "",
      message: "",
      interests: []
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[95vh] overflow-y-auto p-0 gap-0 w-[95vw]">
        {/* Header with gradient background */}
        <div className="relative bg-gradient-to-r from-primary via-primary/90 to-primary/80 text-white p-4 rounded-t-lg">
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
          </div>
          
          <div className="relative">
            <DialogHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <DialogTitle className="text-xl font-bold text-white">
                      Request A Quote
                    </DialogTitle>
                    <DialogDescription className="text-white/90 text-sm">
                      Get a personalized quote for your hospitality project
                    </DialogDescription>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="text-white hover:bg-white/20 h-8 w-8"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </DialogHeader>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Contact Details Row */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
              <div className="space-y-1">
                <Label htmlFor="popup-name" className="flex items-center gap-1 text-sm">
                  <span>Name *</span>
                  <span className="text-primary text-xs">•</span>
                </Label>
                <Input 
                  id="popup-name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
                  placeholder="Full name"
                  className="border-border/50 focus:border-primary transition-colors h-9"
                  required
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="popup-email" className="flex items-center gap-1 text-sm">
                  <span>Email *</span>
                  <span className="text-primary text-xs">•</span>
                </Label>
                <Input 
                  id="popup-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                  placeholder="your@email.com"
                  className="border-border/50 focus:border-primary transition-colors h-9"
                  required
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="popup-phone" className="flex items-center gap-1 text-sm">
                  <span>Phone *</span>
                  <span className="text-primary text-xs">•</span>
                </Label>
                <Input 
                  id="popup-phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({...prev, phone: e.target.value}))}
                  placeholder="+1-678-431-9041"
                  className="border-border/50 focus:border-primary transition-colors h-9"
                  required
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="popup-location" className="flex items-center gap-1 text-sm">
                  <span>Location *</span>
                  <span className="text-primary text-xs">•</span>
                </Label>
                <Input 
                  id="popup-location"
                  value={formData.location}
                  onChange={(e) => setFormData(prev => ({...prev, location: e.target.value}))}
                  placeholder="City, Country"
                  className="border-border/50 focus:border-primary transition-colors h-9"
                  required
                />
              </div>
            </div>

            {/* Two Column Layout for Message and Interests */}
            <div className="grid lg:grid-cols-2 gap-4">
              {/* Message Field */}
              <div className="space-y-1">
                <Label htmlFor="popup-message" className="flex items-center gap-1 text-sm">
                  <span>Project Details *</span>
                  <span className="text-primary text-xs">•</span>
                </Label>
                <Textarea 
                  id="popup-message"
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({...prev, message: e.target.value}))}
                  placeholder="Describe your project, furniture needs, timeline, budget range..."
                  className="min-h-[120px] border-border/50 focus:border-primary transition-colors resize-none text-sm"
                  required
                />
              </div>

              {/* Interested In Checkboxes */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2 text-sm">
                  <MessageSquare className="w-4 h-4 text-primary" />
                  <span>Interested In</span>
                </Label>
                <div className="grid grid-cols-2 gap-2">
                  {interestOptions.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2 p-1.5 rounded-lg hover:bg-accent/50 transition-colors">
                      <Checkbox 
                        id={`popup-interest-${index}`}
                        checked={formData.interests.includes(item)}
                        onCheckedChange={(checked) => handleInterestChange(item, !!checked)}
                        className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                      />
                      <Label 
                        htmlFor={`popup-interest-${index}`} 
                        className="text-xs cursor-pointer font-normal"
                      >
                        {item}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons and Note */}
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-3 pt-2 border-t border-border/20">
                <Button 
                  type="button"
                  variant="outline" 
                  onClick={onClose}
                  className="flex-1 sm:flex-none sm:w-24 h-9"
                >
                  Cancel
                </Button>
                <Button 
                  type="submit"
                  className="flex-1 bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 h-9"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Quote Request
                </Button>
              </div>

              <div className="text-center">
                <p className="text-xs text-muted-foreground">
                  We'll review your request and get back to you within 24 hours with a detailed quote.
                </p>
              </div>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}