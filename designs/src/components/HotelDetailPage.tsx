import { useState, useMemo } from "react";
import { Button } from "./ui/button";
import { ArrowLeft, ArrowRight, Check, MessageCircle, Star, Lightbulb, Calendar, Settings } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
// import DownLeft1 from "../imports/DownLeft1";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// Import Figma assets
import imgImage45 from "figma:asset/2677689adf30a3457a686a480bbd501fbc00d24d.png";
import imgImage58 from "figma:asset/8a11c75caaa9911ca846419614a9315a080c62f3.png";
import imgImage47 from "figma:asset/80bb92ac33f9cd276619944f0938271d3b339180.png";
import img011 from "figma:asset/547293942b9481d16ba505d8499c8d28fb92d71e.png";
import imgImage48 from "figma:asset/f3df729d9f4fd5ffccef99e7308a9f74a53721e8.png";
import img012 from "figma:asset/f4edf6e3f503d2e9df358727ca02f2087d64e6cf.png";
import imgImage49 from "figma:asset/5f81a74c88847962969cfd3290e23661908b9c5d.png";
import img013 from "figma:asset/8713d878d3f2936f1ebd1ef0021bed588abaea81.png";
import imgSize43Ab86C140244684AdbcF8C61B62E51FBlog12511200X6751 from "figma:asset/518a64f761e31d27c4b8db32a7d33e14a61b675d.png";
import imgSize43Ab86C140244684AdbcF8C61B62E51FBlog12511200X6752 from "figma:asset/f4ef20d027217ccb6d614a7e034b7dfd99ae7647.png";
import ctaBackgroundImage from 'figma:asset/6049039f41827e65ae021610f9333aca79518d4d.png';

interface HotelDetailPageProps {
  hotelId: string;
  onNavigate: (page: string) => void;
}

export default function HotelDetailPage({ hotelId, onNavigate }: HotelDetailPageProps) {
  const [activeTab, setActiveTab] = useState<'old' | 'new'>('new');
  const [activeGuideItem, setActiveGuideItem] = useState<'soft-seating' | 'bulk-order' | 'key-considerations'>('soft-seating');

  // Guide content data
  const guideContent = {
    'soft-seating': {
      title: 'How to Choose the Right Hotel Soft Seating Design',
      subtitle: 'Design Selection Excellence',
      content: [
        'Consider your hotel\'s brand identity and target guest demographics to select seating that aligns with your overall aesthetic vision and guest expectations.',
        'Evaluate space constraints and traffic patterns to ensure optimal furniture placement that enhances guest flow and comfort throughout your property.',
        'Choose versatile designs that can adapt to different spaces - from intimate conversation areas to large gatherings - maximizing your investment\'s functionality.'
      ],
      buttonText: 'Get Expert Consultation'
    },
    'bulk-order': {
      title: 'Bulk Order vs. Custom Manufacturing',
      subtitle: 'Smart Procurement Strategies',
      content: [
        'Bulk ordering offers significant cost savings for standard designs and faster delivery times, making it ideal for large-scale hotel chains with consistent branding requirements.',
        'Custom manufacturing provides unique design solutions that differentiate your property, though it requires longer lead times and higher investment for specialized pieces.',
        'Consider hybrid approaches where you bulk order core pieces and customize accent furniture to balance cost-effectiveness with distinctive brand personality.'
      ],
      buttonText: 'Request Bulk Pricing'
    },
    'key-considerations': {
      title: 'Key Considerations: Durability, Cleaning, Guest Experience, Budget',
      subtitle: 'Comprehensive Evaluation Framework',
      content: [
        'Durability assessment should include frame construction, fabric quality, and hardware specifications to ensure furniture withstands high-traffic hospitality environments.',
        'Cleaning requirements directly impact operational costs - choose stain-resistant fabrics and easy-maintenance designs that reduce housekeeping time and replacement frequency.',
        'Balance guest comfort expectations with budget constraints by prioritizing high-impact areas like lobbies and restaurants while optimizing costs in secondary spaces.'
      ],
      buttonText: 'Download Buying Guide'
    }
  };

  // Memoize project data to prevent recalculation
  const project = useMemo(() => {
    const projectsData = {
      "laquinta-roswell-georgia": {
        title: "La Quinta Inn & Suites by Wyndham, Roswell, Georgia",
        subtitle: "Complete hotel furniture transformation with modern hospitality design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        heroImage: imgImage45,
        beforeAfterImages: [
          { old: imgImage47, new: img011 },
          { old: imgImage48, new: img012 },
          { old: imgImage49, new: img013 }
        ],
        challengesImage: imgSize43Ab86C140244684AdbcF8C61B62E51FBlog12511200X6752,
        howWeDeliveredImage: imgSize43Ab86C140244684AdbcF8C61B62E51FBlog12511200X6751
      },
      "grand-palace-hotel-dubai": {
        title: "Grand Palace Hotel Dubai",
        subtitle: "Complete furniture solution for a 5-star luxury resort featuring custom-designed bedroom sets, lobby furniture, and dining collections",
        description: "A comprehensive furniture transformation project for one of Dubai's most prestigious hotels, featuring luxury bedroom sets, elegant lobby furniture, and sophisticated dining collections.",
        heroImage: imgImage45,
        beforeAfterImages: [
          { old: imgImage47, new: img011 },
          { old: imgImage48, new: img012 },
          { old: imgImage49, new: img013 }
        ],
        challengesImage: imgSize43Ab86C140244684AdbcF8C61B62E51FBlog12511200X6752,
        howWeDeliveredImage: imgSize43Ab86C140244684AdbcF8C61B62E51FBlog12511200X6751
      },
      "wellness-spa-resort": {
        title: "Wellness Spa Resort",
        subtitle: "Sustainable furniture solutions for an eco-luxury spa resort with focus on natural materials and wellness-oriented design",
        description: "An innovative furniture project combining sustainability with luxury, featuring natural materials and wellness-focused design elements for the ultimate spa experience.",
        heroImage: imgImage45,
        beforeAfterImages: [
          { old: imgImage47, new: img011 },
          { old: imgImage48, new: img012 },
          { old: imgImage49, new: img013 }
        ],
        challengesImage: imgSize43Ab86C140244684AdbcF8C61B62E51FBlog12511200X6752,
        howWeDeliveredImage: imgSize43Ab86C140244684AdbcF8C61B62E51FBlog12511200X6751
      },
      "metropolitan-boutique-hotel": {
        title: "Metropolitan Boutique Hotel",
        subtitle: "Modern urban design with space-efficient solutions for a trendy boutique hotel in Manhattan's financial district",
        description: "A space-efficient furniture solution for a modern boutique hotel, featuring contemporary designs that maximize functionality in Manhattan's premium real estate.",
        heroImage: imgImage45,
        beforeAfterImages: [
          { old: imgImage47, new: img011 },
          { old: imgImage48, new: img012 },
          { old: imgImage49, new: img013 }
        ],
        challengesImage: imgSize43Ab86C140244684AdbcF8C61B62E51FBlog12511200X6752,
        howWeDeliveredImage: imgSize43Ab86C140244684AdbcF8C61B62E51FBlog12511200X6751
      },
      "royal-heritage-hotel": {
        title: "Royal Heritage Hotel",
        subtitle: "Classic elegance meets modern comfort in this restored Victorian hotel with period-appropriate custom furniture",
        description: "A heritage restoration project combining Victorian elegance with modern comfort, featuring period-appropriate custom furniture that honors the hotel's rich history.",
        heroImage: imgImage45,
        beforeAfterImages: [
          { old: imgImage47, new: img011 },
          { old: imgImage48, new: img012 },
          { old: imgImage49, new: img013 }
        ],
        challengesImage: imgSize43Ab86C140244684AdbcF8C61B62E51FBlog12511200X6752,
        howWeDeliveredImage: imgSize43Ab86C140244684AdbcF8C61B62E51FBlog12511200X6751
      },
      "beachfront-resort-paradise": {
        title: "Beachfront Resort Paradise",
        subtitle: "Tropical luxury furniture collection designed for overwater villas and beachfront suites with weather-resistant materials",
        description: "A tropical luxury furniture collection designed specifically for overwater villas and beachfront suites, featuring weather-resistant materials and island-inspired designs.",
        heroImage: imgImage45,
        beforeAfterImages: [
          { old: imgImage47, new: img011 },
          { old: imgImage48, new: img012 },
          { old: imgImage49, new: img013 }
        ],
        challengesImage: imgSize43Ab86C140244684AdbcF8C61B62E51FBlog12511200X6752,
        howWeDeliveredImage: imgSize43Ab86C140244684AdbcF8C61B62E51FBlog12511200X6751
      },
      "mountain-lodge-retreat": {
        title: "Mountain Lodge Retreat",
        subtitle: "Rustic elegance furniture collection featuring locally sourced wood and traditional Alpine craftsmanship",
        description: "A rustic elegance furniture collection featuring locally sourced wood and traditional Alpine craftsmanship, creating an authentic mountain lodge experience.",
        heroImage: imgImage45,
        beforeAfterImages: [
          { old: imgImage47, new: img011 },
          { old: imgImage48, new: img012 },
          { old: imgImage49, new: img013 }
        ],
        challengesImage: imgSize43Ab86C140244684AdbcF8C61B62E51FBlog12511200X6752,
        howWeDeliveredImage: imgSize43Ab86C140244684AdbcF8C61B62E51FBlog12511200X6751
      },
      "urban-business-hotel": {
        title: "Urban Business Hotel",
        subtitle: "Contemporary business-focused furniture with integrated technology solutions for the modern corporate traveler",
        description: "Contemporary business-focused furniture with integrated technology solutions designed specifically for the modern corporate traveler's needs and preferences.",
        heroImage: imgImage45,
        beforeAfterImages: [
          { old: imgImage47, new: img011 },
          { old: imgImage48, new: img012 },
          { old: imgImage49, new: img013 }
        ],
        challengesImage: imgSize43Ab86C140244684AdbcF8C61B62E51FBlog12511200X6752,
        howWeDeliveredImage: imgSize43Ab86C140244684AdbcF8C61B62E51FBlog12511200X6751
      },
      "historic-mansion-hotel": {
        title: "Historic Mansion Hotel",
        subtitle: "Restoration of antique furniture and creation of period-appropriate pieces for a 16th-century mansion converted into luxury hotel",
        description: "A historic restoration project involving antique furniture restoration and creation of period-appropriate pieces for a 16th-century mansion converted into a luxury hotel.",
        heroImage: imgImage45,
        beforeAfterImages: [
          { old: imgImage47, new: img011 },
          { old: imgImage48, new: img012 },
          { old: imgImage49, new: img013 }
        ],
        challengesImage: imgSize43Ab86C140244684AdbcF8C61B62E51FBlog12511200X6752,
        howWeDeliveredImage: imgSize43Ab86C140244684AdbcF8C61B62E51FBlog12511200X6751
      },
      "desert-safari-lodge": {
        title: "Desert Safari Lodge",
        subtitle: "Luxury desert camping experience furniture designed to withstand extreme temperatures while providing 5-star comfort",
        description: "Luxury desert camping experience furniture designed to withstand extreme temperatures while providing 5-star comfort in the heart of the desert.",
        heroImage: imgImage45,
        beforeAfterImages: [
          { old: imgImage47, new: img011 },
          { old: imgImage48, new: img012 },
          { old: imgImage49, new: img013 }
        ],
        challengesImage: imgSize43Ab86C140244684AdbcF8C61B62E51FBlog12511200X6752,
        howWeDeliveredImage: imgSize43Ab86C140244684AdbcF8C61B62E51FBlog12511200X6751
      }
    };
    
    return projectsData[hotelId as keyof typeof projectsData];
  }, [hotelId]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => onNavigate("portfolio")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[303px] overflow-hidden bg-gray-900">
        {/* Background Image */}
        <img 
          src={imgImage58.src}
          alt="Hotel Hero"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70" />
        
        {/* Content Container */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl lg:text-4xl font-semibold text-white mb-4 max-w-4xl">
            {project.title}
          </h1>
          
          <div className="text-white mb-8 max-w-2xl">
            <div className="text-[16px] font-medium leading-[24px]">
              <div>{project.description}</div>
            </div>
          </div>
          
          <Button 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-medium"
            onClick={() => onNavigate("contact")}
          >
            Request A Quote
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>

      {/* See Transformation Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl text-center mb-12">
            See Transformation {project.title.split(',')[0]}
          </h2>
          
          {/* Old/New Toggle Buttons */}
          <div className="flex justify-center mb-12">
            <div className="flex gap-4">
              <button
                onClick={() => setActiveTab('old')}
                className={`px-8 py-3 rounded-full font-medium transition-all ${
                  activeTab === 'old' 
                    ? 'bg-gray-400 text-white' 
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                Old
              </button>
              <button
                onClick={() => setActiveTab('new')}
                className={`px-8 py-3 rounded-full font-medium transition-all ${
                  activeTab === 'new' 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                New
              </button>
            </div>
          </div>

          {/* Before/After Images in Rows */}
          <div className="max-w-5xl mx-auto space-y-8">
            {project.beforeAfterImages.map((imageSet, index) => (
              <div key={index} className="flex items-center justify-center gap-8">
                {/* Before Image */}
                <div className="flex-1 max-w-[400px]">
                  <img
                    src={imageSet.old.src}
                    alt={`Before transformation ${index + 1}`}
                    className="w-full h-[300px] object-cover rounded-2xl shadow-lg"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='16' fill='%23666' text-anchor='middle' dy='.3em'%3EBefore Image ${index + 1}%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
                
                {/* Custom Arrow */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 flex items-center justify-center">
                    <ArrowRight className="w-8 h-8 text-primary" />
                  </div>
                </div>
                
                {/* After Image */}
                <div className="flex-1 max-w-[400px]">
                  <img
                    src={imageSet.new.src}
                    alt={`After transformation ${index + 1}`}
                    className="w-full h-[300px] object-cover rounded-2xl shadow-lg"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='100%25' height='100%25' fill='%23f9fafb'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='16' fill='%23374151' text-anchor='middle' dy='.3em'%3EAfter Image ${index + 1}%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lorem ipsum dolor sit consectetur */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl text-center mb-10">Lorem ipsum dolor sit consectetur</h2>
          
          <div className="grid lg:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
            {/* Left - Image */}
            <div>
              <img
                src={project.challengesImage.src}
                alt="Project challenges"
                className="w-full h-[350px] object-cover rounded-xl"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='350'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='18' fill='%23666' text-anchor='middle' dy='.3em'%3EProject Image%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>

            {/* Right - Content */}
            <div className="h-[350px] flex flex-col justify-center">
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                It is a long established fact that a reader will distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-less normal distribution of letters, as opposed.
              </p>

              <div className="space-y-3">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <div className="bg-green-500 rounded-lg p-2 flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-700">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Delivered */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl text-center mb-10">How We Delivered</h2>
          
          <div className="grid lg:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
            {/* Left - Content */}
            <div className="h-[350px] flex flex-col justify-center">
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                It is a long established fact that a reader will distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-less normal distribution of letters, as opposed.
              </p>

              <div className="space-y-3">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <div className="bg-green-500 rounded-lg p-2 flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-700">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Image */}
            <div>
              <img
                src={project.howWeDeliveredImage.src}
                alt="How we delivered the project"
                className="w-full h-[350px] object-cover rounded-xl"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='350'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='18' fill='%23666' text-anchor='middle' dy='.3em'%3EDelivery Image%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Transform Your Vision Into Reality CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="relative bg-slate-900 rounded-[20px] overflow-hidden mx-auto max-w-7xl">
            {/* Hotel Room Silhouette Watermark */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute right-8 top-1/2 -translate-y-1/2 w-80 h-48">
                <svg viewBox="0 0 320 192" fill="none" className="w-full h-full">
                  {/* Hotel room silhouette */}
                  <rect x="20" y="40" width="280" height="120" fill="currentColor" opacity="0.3"/>
                  <rect x="40" y="60" width="80" height="60" fill="currentColor" opacity="0.2"/>
                  <rect x="140" y="60" width="60" height="40" fill="currentColor" opacity="0.2"/>
                  <rect x="220" y="60" width="60" height="80" fill="currentColor" opacity="0.2"/>
                  <circle cx="170" cy="50" r="8" fill="currentColor" opacity="0.2"/>
                  <rect x="260" y="30" width="20" height="40" fill="currentColor" opacity="0.1"/>
                  <rect x="30" y="130" width="260" height="10" fill="currentColor" opacity="0.1"/>
                </svg>
              </div>
            </div>
            
            {/* Content */}
            <div className="relative px-8 lg:px-12 py-20 text-center text-white">
              <h3 className="text-3xl lg:text-4xl mb-4">
                Transform Your Vision Into Reality
              </h3>
              <p className="text-lg mb-10 opacity-90 max-w-2xl mx-auto">
                Complete turnkey FF&E solutions from concept to installation for hospitality excellence.
              </p>
              
              {/* Buttons with subtle glow */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-primary/25 transition-all duration-300"
                  onClick={() => onNavigate("contact")}
                >
                  Request A Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-white/10"
                  onClick={() => window.open("https://wa.me/16784319041", "_blank")}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Click To Chat
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lorem Ipsum Section - Dark Navy */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center text-white">
            {/* Main Heading */}
            <h2 className="text-3xl lg:text-4xl mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h2>
            
            {/* First Paragraph */}
            <p className="text-base leading-relaxed mb-6 opacity-90">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 
              to make a type specimen book. It has survived not only five centuries.
            </p>
            
            {/* Second Paragraph */}
            <p className="text-base leading-relaxed opacity-90">
              but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s 
              with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
              software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
      </section>

      {/* See What Guest Say Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <h2 className="text-3xl lg:text-4xl text-center mb-12 text-gray-900">
            See What Guest Say
          </h2>
          
          {/* Testimonials Layout - 2 on top, 1 centered below */}
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Top Row - 2 Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Testimonial Card 1 */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                <div className="flex items-start gap-4">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face"
                    alt="Guest avatar"
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <Star className="w-4 h-4 text-gray-300" />
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      "Pool, <span className="font-semibold text-gray-900">hot tub</span>, decent <span className="font-semibold text-gray-900">breakfast</span> with eggs, sausage, <span className="font-semibold text-gray-900">cereal</span>, <span className="font-semibold text-gray-900">waffles</span>, <span className="font-semibold text-gray-900">coffee</span>"
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonial Card 2 */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                <div className="flex items-start gap-4">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b890?w=50&h=50&fit=crop&crop=face"
                    alt="Guest avatar"
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      "Easy <span className="font-semibold text-gray-900">access</span> to the main drag for <span className="font-semibold text-gray-900">food</span> and <span className="font-semibold text-gray-900">shopping</span>."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row - 1 Centered Card */}
            <div className="flex justify-center">
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm max-w-md w-full">
                <div className="flex items-start gap-4">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face"
                    alt="Guest avatar"
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      "Very very clean <span className="font-semibold text-gray-900">facility</span> wonderful <span className="font-semibold text-gray-900">staff</span> cheapest <span className="font-semibold text-gray-900">price</span> in town"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Our Client Say About Our Work Section */}
      <section className="py-16 bg-[#f9fafb]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Section Title */}
            <h2 className="text-3xl lg:text-4xl mb-8 text-gray-900">
              What Our Client Say About Our Work
            </h2>
            
            {/* Large 5-Star Rating */}
            <div className="flex items-center justify-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            {/* Subtitle */}
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Best Quality Furniture
            </h3>

            {/* Quote Content */}
            <div className="mb-8">
              <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
                <span className="text-primary text-3xl font-serif">"</span>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking 
                at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as 
                opposed to using 'Content here'
                <span className="text-primary text-3xl font-serif">"</span>
              </p>
            </div>

            {/* Client Info with Headshot */}
            <div className="flex items-center justify-center gap-4">
              {/* Client Headshot/Logo Circle */}
              <div className="w-16 h-16 bg-green-800 rounded-full flex items-center justify-center">
                <div className="text-yellow-400 text-xl font-bold">★</div>
                <div className="text-white text-xs font-bold ml-1">La<br/>QUINTA</div>
              </div>
              
              {/* Client Name and Role */}
              <div className="text-left">
                <div className="text-primary font-semibold text-lg">Mark Finch</div>
                <div className="text-gray-600">LaQuinta Inn</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hospitality Buying Guide Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section Title */}
            <h2 className="text-3xl lg:text-4xl text-center mb-12 text-gray-900">
              Hospitality Buying Guide for Hotel Owners
            </h2>
            
            {/* Two Column Layout */}
            <div className="grid lg:grid-cols-5 gap-8">
              {/* Left Sidebar - Guide Menu */}
              <div className="lg:col-span-2 space-y-4">
                {/* Guide Item 1 - Soft Seating */}
                <button
                  onClick={() => setActiveGuideItem('soft-seating')}
                  className={`w-full text-left rounded-lg p-6 transition-all duration-300 ${
                    activeGuideItem === 'soft-seating'
                      ? 'border-2 border-primary bg-primary/5'
                      : 'border border-gray-200 bg-white hover:border-primary/30 hover:bg-primary/5'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                      activeGuideItem === 'soft-seating'
                        ? 'bg-primary'
                        : 'bg-gray-400'
                    }`}>
                      <Lightbulb className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        How to choose the right hotel Soft Seating design
                      </h3>
                      <p className="text-sm text-gray-600">
                        Strategic design selection that aligns with your brand identity and guest expectations for optimal hospitality experience.
                      </p>
                    </div>
                  </div>
                </button>

                {/* Guide Item 2 - Bulk Order */}
                <button
                  onClick={() => setActiveGuideItem('bulk-order')}
                  className={`w-full text-left rounded-lg p-6 transition-all duration-300 ${
                    activeGuideItem === 'bulk-order'
                      ? 'border-2 border-primary bg-primary/5'
                      : 'border border-gray-200 bg-white hover:border-primary/30 hover:bg-primary/5'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                      activeGuideItem === 'bulk-order'
                        ? 'bg-primary'
                        : 'bg-gray-400'
                    }`}>
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Bulk order vs. custom manufacturing
                      </h3>
                      <p className="text-sm text-gray-600">
                        Understanding procurement strategies to balance cost-effectiveness with customization for your unique requirements.
                      </p>
                    </div>
                  </div>
                </button>

                {/* Guide Item 3 - Key Considerations */}
                <button
                  onClick={() => setActiveGuideItem('key-considerations')}
                  className={`w-full text-left rounded-lg p-6 transition-all duration-300 ${
                    activeGuideItem === 'key-considerations'
                      ? 'border-2 border-primary bg-primary/5'
                      : 'border border-gray-200 bg-white hover:border-primary/30 hover:bg-primary/5'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                      activeGuideItem === 'key-considerations'
                        ? 'bg-primary'
                        : 'bg-gray-400'
                    }`}>
                      <Settings className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Key considerations: durability, cleaning, guest experience, budget
                      </h3>
                      <p className="text-sm text-gray-600">
                        Comprehensive evaluation framework covering all critical factors for successful furniture investment decisions.
                      </p>
                    </div>
                  </div>
                </button>
              </div>

              {/* Right Content Area */}
              <div className="lg:col-span-3">
                <div className="bg-gray-50 rounded-lg p-8">
                  {/* Dynamic Content Title */}
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {guideContent[activeGuideItem].title}
                  </h3>
                  
                  {/* Dynamic Content Subtitle */}
                  <h4 className="text-lg font-semibold text-primary mb-6">
                    {guideContent[activeGuideItem].subtitle}
                  </h4>
                  
                  {/* Dynamic Content Paragraphs */}
                  <div className="space-y-4 mb-8">
                    {guideContent[activeGuideItem].content.map((paragraph, index) => (
                      <p key={index} className="text-gray-700 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  
                  {/* Dynamic CTA Button */}
                  <Button 
                    className="bg-primary hover:bg-primary/90 text-white px-6 py-3"
                    onClick={() => {
                      if (activeGuideItem === 'key-considerations') {
                        // Handle download guide
                        window.open('/buying-guide.pdf', '_blank');
                      } else {
                        // Navigate to contact for consultation/pricing
                        onNavigate('contact');
                      }
                    }}
                  >
                    {guideContent[activeGuideItem].buttonText}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Section Title */}
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl mb-4 text-gray-900">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 text-lg">
                Quick answers to common questions about our soft seating solutions
              </p>
            </div>
            
            {/* FAQ Accordion */}
            <Accordion type="single" collapsible className="space-y-4">
              {/* FAQ Item 1 */}
              <AccordionItem value="item-1" className="bg-white rounded-lg border border-gray-200 px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-gray-900 font-medium">
                    What makes hotel Our furniture different from normal furniture?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-gray-700 leading-relaxed">
                  Our hotel furniture is specifically designed for high-traffic commercial environments. We use commercial-grade materials, reinforced frames, and hospitality-specific finishes that can withstand constant use while maintaining their appearance. Our pieces also meet fire safety standards and are designed for easy maintenance and cleaning.
                </AccordionContent>
              </AccordionItem>

              {/* FAQ Item 2 */}
              <AccordionItem value="item-2" className="bg-white rounded-lg border border-gray-200 px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-gray-900 font-medium">
                    How long does it take to manufacture and deliver custom furniture?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-gray-700 leading-relaxed">
                  Custom furniture manufacturing typically takes 8-12 weeks from design approval, depending on the complexity and quantity. We provide detailed timeline estimates during the planning phase and keep you updated throughout the production process. Rush orders may be accommodated for additional fees.
                </AccordionContent>
              </AccordionItem>

              {/* FAQ Item 3 */}
              <AccordionItem value="item-3" className="bg-white rounded-lg border border-gray-200 px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-gray-900 font-medium">
                    Do you provide installation services for large hotel projects?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-gray-700 leading-relaxed">
                  Yes, we offer complete turnkey installation services for hotel projects of all sizes. Our professional installation team coordinates with your project timeline and works efficiently to minimize disruption to your operations. We also provide post-installation support and warranty services.
                </AccordionContent>
              </AccordionItem>

              {/* FAQ Item 4 */}
              <AccordionItem value="item-4" className="bg-white rounded-lg border border-gray-200 px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-gray-900 font-medium">
                    What warranty and maintenance support do you offer?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-gray-700 leading-relaxed">
                  We provide a comprehensive 5-year warranty on frame construction and a 2-year warranty on upholstery and finishes. Our maintenance support includes cleaning guidelines, replacement parts availability, and annual inspection services to ensure your furniture maintains its quality and appearance throughout its lifespan.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}