import { useState, useEffect } from "react";
import { Button } from "./components/ui/button";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProductCategories from "./components/ProductCategories";
import WhyChooseUs from "./components/WhyChooseUs";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import ContactSection from "./components/ContactSection";
import BlogSection from "./components/BlogSection";
import Footer from "./components/Footer";
import PortfolioPage from "./components/PortfolioPage";
import HotelDetailPage from "./components/HotelDetailPage";
import AboutOverview from "./components/AboutOverview";
import CompanyHistory from "./components/CompanyHistory";
import OurMotto from "./components/OurMotto";
import OurTeam from "./components/OurTeam";

import ContactPage from "./components/ContactPage";
import BlogPage from "./components/BlogPage";
import BlogDetailPage from "./components/BlogDetailPage";
import ProductsPage from "./components/ProductsPage";
import SoftSeatingPage from "./components/SoftSeatingPage";
import BreakfastChairsPage from "./components/BreakfastChairsPage";
import CanadianStatsSection from "./components/CanadianStatsSection";
import TrustedBrandsSection from "./components/TrustedBrandsSection";
import CallToActionSection from "./components/CallToActionSection";
import FloatingActionButtons from "./components/FloatingActionButtons";
import QuotePopup from "./components/QuotePopup";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [hotelId, setHotelId] = useState("");
  const [aboutSection, setAboutSection] = useState("");
  const [blogId, setBlogId] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isQuotePopupOpen, setIsQuotePopupOpen] = useState(false);

  // Error boundary to prevent crashes
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
          <Button onClick={() => {
            setHasError(false);
            window.location.reload();
          }}>Try again</Button>
        </div>
      </div>
    );
  }

  // Handle browser back/forward buttons and initial route
  useEffect(() => {
    let mounted = true;
    
    const parseRoute = () => {
      try {
        if (typeof window === 'undefined') return { page: "home", hotelId: "", aboutSection: "", blogId: "" };
        
        const hash = window.location.hash?.slice(1) || "";
        
        if (hash.startsWith("hotel/")) {
          const id = hash.replace("hotel/", "");
          return { page: "hotel", hotelId: id, aboutSection: "", blogId: "" };
        } else if (hash.startsWith("about/")) {
          const section = hash.replace("about/", "");
          return { page: "about", hotelId: "", aboutSection: section, blogId: "" };
        } else if (hash.startsWith("blog/")) {
          const id = hash.replace("blog/", "");
          return { page: "blog-detail", hotelId: "", aboutSection: "", blogId: id };
        } else if (["about", "products", "portfolio", "contact", "blog", "soft-seating", "breakfast-chairs"].includes(hash)) {
          return { page: hash, hotelId: "", aboutSection: "", blogId: "" };
        } else {
          return { page: hash || "home", hotelId: "", aboutSection: "", blogId: "" };
        }
      } catch (error) {
        console.error("Route parsing error:", error);
        return { page: "home", hotelId: "", aboutSection: "", blogId: "" };
      }
    };

    const handlePopState = () => {
      if (!mounted) return;
      
      try {
        const route = parseRoute();
        setCurrentPage(route.page);
        setHotelId(route.hotelId);
        setAboutSection(route.aboutSection);
        setBlogId(route.blogId);
      } catch (error) {
        console.error("Pop state error:", error);
        if (mounted) {
          setHasError(true);
        }
      }
    };

    try {
      // Set initial state
      const initialRoute = parseRoute();
      if (mounted) {
        setCurrentPage(initialRoute.page);
        setHotelId(initialRoute.hotelId);
        setAboutSection(initialRoute.aboutSection);
        setBlogId(initialRoute.blogId);
        setIsLoading(false);
      }

      // Add event listener
      if (typeof window !== 'undefined') {
        window.addEventListener("popstate", handlePopState);
      }
    } catch (error) {
      console.error("useEffect error:", error);
      if (mounted) {
        setHasError(true);
        setIsLoading(false);
      }
    }

    return () => {
      mounted = false;
      if (typeof window !== 'undefined') {
        window.removeEventListener("popstate", handlePopState);
      }
    };
  }, []);

  // Update URL when navigation occurs
  const updateURL = (page: string, id?: string, section?: string, blogPostId?: string) => {
    try {
      if (typeof window === 'undefined') return;
      
      let url;
      if (page === "home") {
        url = "/";
      } else if (page === "hotel" && id) {
        url = `/#hotel/${id}`;
      } else if (page === "about" && section) {
        url = `/#about/${section}`;
      } else if (page === "blog-detail" && blogPostId) {
        url = `/#blog/${blogPostId}`;
      } else {
        url = `/#${page}`;
      }
      
      const state = { 
        page, 
        hotelId: id || "", 
        aboutSection: section || "", 
        blogId: blogPostId || "" 
      };
      
      if (window.history?.pushState) {
        window.history.pushState(state, "", url);
      }
    } catch (error) {
      console.error("URL update error:", error);
    }
  };

  const navigateToPage = (page: string, id?: string) => {
    try {
      // Prevent navigation during loading or if there's an error
      if (isLoading || hasError) return;
      
      let newHotelId = "";
      let newAboutSection = "";
      let newBlogId = "";

      if (page === "hotel" && id) {
        newHotelId = id;
      } else if (page === "about" && id) {
        newAboutSection = id;
      } else if (page === "blog-detail" && id) {
        newBlogId = id;
      }

      // Batch state updates to prevent multiple re-renders
      setCurrentPage(page);
      setHotelId(newHotelId);
      setAboutSection(newAboutSection);
      setBlogId(newBlogId);
      
      updateURL(page, newHotelId, newAboutSection, newBlogId);
    } catch (error) {
      console.error("Navigation error:", error);
      setHasError(true);
    }
  };

  const handleCountryChange = (country: string) => {
    try {
      setSelectedCountry(country);
    } catch (error) {
      console.error("Country change error:", error);
    }
  };

  const handleQuoteRequest = () => {
    try {
      setIsQuotePopupOpen(true);
    } catch (error) {
      console.error("Quote request error:", error);
    }
  };

  const handleCloseQuotePopup = () => {
    try {
      setIsQuotePopupOpen(false);
    } catch (error) {
      console.error("Close quote popup error:", error);
    }
  };

  // Show loading state while initializing
  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (currentPage === "products") {
    return (
      <div className="min-h-screen bg-background">
        <Header onNavigate={navigateToPage} currentPage={currentPage} selectedCountry={selectedCountry} onCountryChange={handleCountryChange} />
        <main>
          <ProductsPage onNavigate={navigateToPage} selectedCountry={selectedCountry} />
        </main>
        <Footer />
        <FloatingActionButtons onNavigate={navigateToPage} onQuoteRequest={handleQuoteRequest} />
      </div>
    );
  }

  if (currentPage === "soft-seating") {
    return (
      <div className="min-h-screen bg-background">
        <Header onNavigate={navigateToPage} currentPage="products" selectedCountry={selectedCountry} onCountryChange={handleCountryChange} />
        <main>
          <SoftSeatingPage onNavigate={navigateToPage} />
        </main>
        <Footer />
        <FloatingActionButtons onNavigate={navigateToPage} onQuoteRequest={handleQuoteRequest} />
      </div>
    );
  }

  if (currentPage === "breakfast-chairs") {
    return (
      <div className="min-h-screen bg-background">
        <Header onNavigate={navigateToPage} currentPage="products" selectedCountry={selectedCountry} onCountryChange={handleCountryChange} />
        <main>
          <BreakfastChairsPage onNavigate={navigateToPage} />
        </main>
        <Footer />
        <FloatingActionButtons onNavigate={navigateToPage} onQuoteRequest={handleQuoteRequest} />
      </div>
    );
  }

  if (currentPage === "portfolio") {
    return (
      <div className="min-h-screen bg-background">
        <Header onNavigate={navigateToPage} currentPage={currentPage} selectedCountry={selectedCountry} onCountryChange={handleCountryChange} />
        <main>
          <PortfolioPage onNavigate={navigateToPage} />
        </main>
        <Footer />
        <FloatingActionButtons onNavigate={navigateToPage} onQuoteRequest={handleQuoteRequest} />
      </div>
    );
  }

  if (currentPage === "about") {
    let AboutComponent;
    switch (aboutSection) {
      case "history":
        AboutComponent = <CompanyHistory onNavigate={navigateToPage} />;
        break;
      case "motto":
        AboutComponent = <OurMotto onNavigate={navigateToPage} />;
        break;
      case "team":
        AboutComponent = <OurTeam onNavigate={navigateToPage} />;
        break;
      default:
        AboutComponent = <AboutOverview onNavigate={navigateToPage} />;
    }

    return (
      <div className="min-h-screen bg-background">
        <Header onNavigate={navigateToPage} currentPage={currentPage} selectedCountry={selectedCountry} onCountryChange={handleCountryChange} />
        <main>
          {AboutComponent}
        </main>
        <Footer />
        <FloatingActionButtons onNavigate={navigateToPage} onQuoteRequest={handleQuoteRequest} />
      </div>
    );
  }

  if (currentPage === "hotel") {
    return (
      <div className="min-h-screen bg-background">
        <Header onNavigate={navigateToPage} currentPage={currentPage} selectedCountry={selectedCountry} onCountryChange={handleCountryChange} />
        <main>
          <HotelDetailPage hotelId={hotelId} onNavigate={navigateToPage} />
        </main>
        <Footer />
        <FloatingActionButtons onNavigate={navigateToPage} onQuoteRequest={handleQuoteRequest} />
      </div>
    );
  }



  if (currentPage === "contact") {
    return (
      <div className="min-h-screen bg-background">
        <Header onNavigate={navigateToPage} currentPage={currentPage} selectedCountry={selectedCountry} onCountryChange={handleCountryChange} />
        <main>
          <ContactPage onNavigate={navigateToPage} />
        </main>
        <Footer />
        <FloatingActionButtons onNavigate={navigateToPage} onQuoteRequest={handleQuoteRequest} />
      </div>
    );
  }

  if (currentPage === "blog") {
    return (
      <div className="min-h-screen bg-background">
        <Header onNavigate={navigateToPage} currentPage={currentPage} selectedCountry={selectedCountry} onCountryChange={handleCountryChange} />
        <main>
          <BlogPage onNavigate={navigateToPage} />
        </main>
        <Footer />
        <FloatingActionButtons onNavigate={navigateToPage} onQuoteRequest={handleQuoteRequest} />
      </div>
    );
  }

  if (currentPage === "blog-detail") {
    return (
      <div className="min-h-screen bg-background">
        <Header onNavigate={navigateToPage} currentPage="blog" selectedCountry={selectedCountry} onCountryChange={handleCountryChange} />
        <main>
          <BlogDetailPage blogId={blogId} onNavigate={navigateToPage} />
        </main>
        <Footer />
        <FloatingActionButtons onNavigate={navigateToPage} onQuoteRequest={handleQuoteRequest} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header onNavigate={navigateToPage} currentPage={currentPage} selectedCountry={selectedCountry} onCountryChange={handleCountryChange} />
      <main className="space-y-4">
        <HeroSection selectedCountry={selectedCountry} onNavigate={navigateToPage} />
        <TrustedBrandsSection selectedCountry={selectedCountry} />
        <CanadianStatsSection selectedCountry={selectedCountry} />
        <AboutSection selectedCountry={selectedCountry} onNavigate={navigateToPage} />
        <ProductCategories selectedCountry={selectedCountry} onNavigate={navigateToPage} />
        <WhyChooseUs selectedCountry={selectedCountry} />
        <Portfolio onNavigate={navigateToPage} selectedCountry={selectedCountry} />
        <Testimonials selectedCountry={selectedCountry} />
        <CallToActionSection onNavigate={navigateToPage} selectedCountry={selectedCountry} />
        <BlogSection selectedCountry={selectedCountry} />
        <ContactSection onNavigate={navigateToPage} selectedCountry={selectedCountry} />
      </main>
      <Footer />
      <FloatingActionButtons onNavigate={navigateToPage} onQuoteRequest={handleQuoteRequest} />
      <QuotePopup isOpen={isQuotePopupOpen} onClose={handleCloseQuotePopup} />
    </div>
  );
}