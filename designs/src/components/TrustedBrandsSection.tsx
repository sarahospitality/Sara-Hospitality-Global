import baymontLogo from 'figma:asset/65e2b4ed424723dae6731b7df90d808c1d793105.png';
import bestWesternLogo from 'figma:asset/d3e30d7d50aff6f76bb0916c50dc15aa2919a066.png';
import daysInnLogo from 'figma:asset/61636d64a66e87acc43f2e63f91829fa6b8f0dea.png';
import laQuintaLogo from 'figma:asset/f31b2dfb28307640a195a389e2838f1c2a7dc156.png';
import holidayInnLogo from 'figma:asset/6e7b3d1f8e168548d6b65e7dd7fb4691d792ff17.png';
import qualityInnLogo from 'figma:asset/1a36f52dfb717910963752bf97e84ab00d9f89e9.png';

interface TrustedBrandsSectionProps {
  selectedCountry?: string;
}

export default function TrustedBrandsSection({ selectedCountry }: TrustedBrandsSectionProps) {
  const brandLogos = [
    {
      name: "La Quinta by Wyndham",
      src: laQuintaLogo
    },
    {
      name: "Holiday Inn Express & Suites",
      src: holidayInnLogo
    },
    {
      name: "Quality Inn",
      src: qualityInnLogo
    },
    {
      name: "Baymont by Wyndham",
      src: baymontLogo
    },
    {
      name: "Best Western Plus",
      src: bestWesternLogo
    },
    {
      name: "Days Inn & Suites",
      src: daysInnLogo
    }
  ];

  // Get stats based on selected country
  const getStats = () => {
    if (selectedCountry === "canada-toronto") {
      return [
        { number: "150+", label: "Canadian Hotels" },
        { number: "10", label: "Provinces Served" },
        { number: "100%", label: "Eco-Friendly" },
        { number: "4.9★", label: "Avg. Rating" }
      ];
    } else if (selectedCountry === "uae-dubai") {
      return [
        { number: "200+", label: "UAE Hotels" },
        { number: "7", label: "Emirates Served" },
        { number: "95%", label: "Client Retention" },
        { number: "4.8★", label: "Avg. Rating" }
      ];
    } else if (selectedCountry === "uk-london") {
      return [
        { number: "300+", label: "UK Hotels" },
        { number: "25", label: "Counties Served" },
        { number: "98%", label: "On-Time Delivery" },
        { number: "4.9★", label: "Avg. Rating" }
      ];
    } else {
      // Default global stats
      return [
        { number: "500+", label: "Hotels Served" },
        { number: "50+", label: "Countries" },
        { number: "25+", label: "Years Experience" },
        { number: "4.9★", label: "Global Rating" }
      ];
    }
  };

  // Get title based on selected country
  const getTitle = () => {
    if (selectedCountry === "canada-toronto") {
      return "Trusted by Canada's Leading Hotel Brands";
    } else if (selectedCountry === "uae-dubai") {
      return "Trusted by UAE's Leading Hotel Brands";
    } else if (selectedCountry === "uk-london") {
      return "Trusted by UK's Leading Hotel Brands";
    } else {
      return "Trusted by Leading Hotel Chains Worldwide";
    }
  };

  // Get description based on selected country
  const getDescription = () => {
    if (selectedCountry === "canada-toronto") {
      return "Premium brands choose Sara Global for their Canadian properties";
    } else if (selectedCountry === "uae-dubai") {
      return "Luxury hotels across the UAE trust our furniture solutions";
    } else if (selectedCountry === "uk-london") {
      return "Leading hospitality brands across the UK choose Sara Global";
    } else {
      return "International hotel chains trust Sara Global for premium furniture solutions";
    }
  };

  const stats = getStats();
  const title = getTitle();
  const description = getDescription();

  return (
    <section className="py-8 bg-background">
      <div className="container mx-auto px-4">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-2xl border border-white/20">
                <div className="text-3xl text-primary mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Logos Section */}
        <div className="pt-8 border-t border-gray-200">
          <div className="text-center mb-8">
            <h3 className="text-3xl lg:text-4xl text-foreground mb-2">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
          </div>
          
          <div className="overflow-hidden py-4">
            <div className="flex animate-scroll-logos gap-16 items-center">
              {/* Duplicate the logos for seamless loop */}
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex gap-16 items-center flex-shrink-0">
                  {brandLogos.map((logo, index) => (
                    <div key={`${setIndex}-${index}`} className="flex-shrink-0">
                      <img
                        src={logo.src}
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
  );
}