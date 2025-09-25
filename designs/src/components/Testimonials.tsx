import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState, useRef } from "react";



interface TestimonialsProps {
  selectedCountry?: string;
}

export default function Testimonials({ selectedCountry }: TestimonialsProps) {
  const isCanada = selectedCountry === "canada-toronto";
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerPage = isCanada ? 2 : 3;
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };
  
  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "General Manager",
      company: "Grand Palace Hotel Dubai",
      avatar: "/api/placeholder/64/64",
      rating: 5,
      text: "Sara Global delivered exceptional quality furniture that perfectly matched our luxury brand. Their attention to detail and project management made the entire process seamless. Our guests constantly compliment the beautiful interiors."
    },
    {
      name: "Michael Chen",
      title: "Head of Operations",
      company: "Metropolitan Hotels Group", 
      avatar: "/api/placeholder/64/64",
      rating: 5,
      text: "Working with Sara Global has been a game-changer for our hotel chain. Their ability to deliver consistent quality across multiple properties while meeting tight deadlines is remarkable. Highly recommended!"
    },
    {
      name: "Emily Rodriguez",
      title: "Interior Design Director",
      company: "Boutique Hotels International",
      avatar: "/api/placeholder/64/64", 
      rating: 5,
      text: "The custom furniture solutions from Sara Global brought our design vision to life perfectly. Their team understood our unique requirements and delivered beyond expectations. The craftsmanship is outstanding."
    },
    {
      name: "David Thompson",
      title: "Property Owner",
      company: "Seaside Resort Miami",
      avatar: "/api/placeholder/64/64",
      rating: 5,
      text: "Sara Global's weather-resistant outdoor furniture has exceeded our expectations. After two years of coastal exposure, everything still looks brand new. Their warranty and support service is excellent."
    },
    {
      name: "Lisa Wang",
      title: "Procurement Manager", 
      company: "Asia Pacific Hotels",
      avatar: "/api/placeholder/64/64",
      rating: 5,
      text: "The most reliable furniture supplier we've worked with. Sara Global consistently delivers on time, within budget, and with superior quality. Their global logistics capabilities are impressive."
    },
    {
      name: "Robert Mitchell",
      title: "Development Director",
      company: "Heritage Hotels UK",
      avatar: "/api/placeholder/64/64",
      rating: 5,
      text: "Sara Global's expertise in heritage hotel furnishing is unmatched. They created period-appropriate furniture that maintains historical authenticity while meeting modern comfort standards."
    }
  ];

  const totalSlides = Math.ceil(testimonials.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };



  if (isCanada) {
    const canadianTestimonials = [
      {
        name: "Marie Dubois",
        title: "General Manager",
        company: "Fairmont Château Frontenac",
        location: "Quebec City, QC",
        avatar: "/api/placeholder/64/64",
        rating: 5,
        text: "Sara Global's sustainable furniture perfectly embodies our commitment to environmental stewardship. The Canadian maple pieces are not only beautiful but tell the story of our heritage. Our guests are constantly impressed by the craftsmanship.",
        highlight: "🍁 Heritage Craftsmanship"
      },
      {
        name: "James MacLeod",
        title: "Operations Director",
        company: "Whistler Mountain Resort",
        location: "Whistler, BC",
        avatar: "/api/placeholder/64/64",
        rating: 5,
        text: "The winter-ready furniture from Sara Global has exceeded all expectations. After three harsh mountain winters, everything still looks pristine. Their understanding of Canadian climate challenges is unparalleled.",
        highlight: "❄️ Climate Resilient"
      },
      {
        name: "Sarah Thompson",
        title: "Sustainability Officer",
        company: "Hotel Arts Calgary",
        location: "Calgary, AB",
        avatar: "/api/placeholder/64/64",
        rating: 5,
        text: "Working with Sara Global aligned perfectly with our zero-waste goals. Their circular economy approach and use of 100% FSC-certified Canadian wood helped us achieve our sustainability targets ahead of schedule.",
        highlight: "♻️ Zero Waste Achievement"
      },
      {
        name: "Robert Chen",
        title: "Property Owner",
        company: "Boutique Inn Toronto",
        location: "Toronto, ON",
        avatar: "/api/placeholder/64/64",
        rating: 5,
        text: "The local sourcing and Canadian craftsmanship story resonates deeply with our guests. Sara Global didn't just furnish our space; they helped us create an authentic Canadian hospitality experience.",
        highlight: "🇨🇦 Authentic Canadian Experience"
      }
    ];

    const canadianStats = [
      { number: "4.95", label: "Average Rating", subtext: "From Canadian Clients" },
      { number: "150+", label: "Canadian Hotels", subtext: "Coast to Coast" },
      { number: "100%", label: "Eco-Friendly", subtext: "Sustainable Materials" }
    ];

    const canadianBrands = [
      { name: "Fairmont Hotels", logo: "F", isImage: false },
      { name: "Delta Hotels", logo: "D", isImage: false },
      { name: "Four Points by Sheraton", logo: "4P", isImage: false },
      { name: "Westin Hotels", logo: "W", isImage: false },
      { name: "Marriott Hotels", logo: "M", isImage: false },
      { name: "Holiday Inn", logo: "HI", isImage: false },
      { name: "Best Western", logo: "BW", isImage: false },
      { name: "Sandman Hotels", logo: "S", isImage: false },
      { name: "Coast Hotels", logo: "C", isImage: false }
    ];

    return (
      <section className="py-8 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          {/* Canadian Header - Consistent with other sections */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <Star className="w-4 h-4" />
              <span>Canadian Client Testimonials</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-2">
              What Canadian Hoteliers
              <span className="text-primary block">Say About Us</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From coast to coast, Canadian hospitality leaders trust Sara Global for sustainable furniture solutions.
            </p>
          </div>

          {/* Enhanced Testimonials Carousel with Controls */}
          <div className="mb-6">
            <div className="relative">
              {/* Navigation Controls */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-slate-800">Client Testimonials</h3>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={scrollLeft}
                    className="rounded-full border-primary/30 hover:bg-primary hover:text-white transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={scrollRight}
                    className="rounded-full border-primary/30 hover:bg-primary hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Testimonials Scroll Container */}
              <div 
                ref={scrollContainerRef}
                className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
                style={{ scrollSnapType: 'x mandatory' }}
              >
                {canadianTestimonials.map((testimonial, index) => (
                  <Card key={index} className="flex-shrink-0 w-80 border-0 shadow-[0px_4px_16px_rgba(0,0,0,0.1),0px_-4px_16px_rgba(0,0,0,0.1)] hover:shadow-[0px_6px_20px_rgba(0,0,0,0.15),0px_-6px_20px_rgba(0,0,0,0.15)] overflow-hidden bg-white transition-all duration-300 rounded-xl" style={{ scrollSnapAlign: 'start' }}>
                    <CardContent className="p-5">
                      <div className="flex justify-between items-start mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                          <Quote className="w-6 h-6 text-primary" />
                        </div>
                        <div className="bg-primary/10 px-2 py-1 rounded-full">
                          <span className="text-xs font-medium text-primary">{testimonial.highlight}</span>
                        </div>
                      </div>

                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>

                      <p className="text-slate-700 mb-4 leading-relaxed text-sm">
                        "{testimonial.text}"
                      </p>

                      <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-sm text-slate-800">{testimonial.name}</h4>
                          <p className="text-xs text-muted-foreground">{testimonial.title}</p>
                          <p className="text-xs text-primary font-semibold">{testimonial.company}</p>
                          <p className="text-xs text-muted-foreground">📍 {testimonial.location}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>


        </div>
      </section>
    );
  }

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Star className="w-4 h-4" />
            <span>Client Testimonials</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-2">
            What Our Clients Say
            <span className="text-primary block">About Our Work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what hospitality professionals 
            around the world say about their experience with Sara Global.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative mb-8">
          {/* Navigation Controls */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="rounded-full border-2 hover:bg-primary hover:text-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="rounded-full border-2 hover:bg-primary hover:text-white transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
            
            {/* Slide Indicators */}
            <div className="flex gap-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-primary' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Carousel Content */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-2">
                    {testimonials
                      .slice(slideIndex * itemsPerPage, (slideIndex + 1) * itemsPerPage)
                      .map((testimonial, index) => (
                        <Card key={index} className="border-0 shadow-[0px_4px_16px_rgba(0,0,0,0.1),0px_-4px_16px_rgba(0,0,0,0.1)] hover:shadow-[0px_6px_20px_rgba(0,0,0,0.15),0px_-6px_20px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 h-full rounded-xl">
                          <CardContent className="p-6 flex flex-col h-full">
                            {/* Quote Icon */}
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                              <Quote className="w-6 h-6 text-primary" />
                            </div>

                            {/* Rating */}
                            <div className="flex gap-1 mb-4">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                              "{testimonial.text}"
                            </p>

                            {/* Author Info */}
                            <div className="flex items-center gap-4 mt-auto">
                              <Avatar className="w-12 h-12">
                                <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                                <AvatarFallback className="bg-primary text-primary-foreground">
                                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <h4 className="font-bold">{testimonial.name}</h4>
                                <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                                <p className="text-sm text-primary font-medium">{testimonial.company}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>



      </div>
    </section>
  );
}