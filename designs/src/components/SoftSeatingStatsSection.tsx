import { ImageWithFallback } from './figma/ImageWithFallback';
import baymontLogo from 'figma:asset/65e2b4ed424723dae6731b7df90d808c1d793105.png';
import bestWesternLogo from 'figma:asset/d3e30d7d50aff6f76bb0916c50dc15aa2919a066.png';
import daysInnLogo from 'figma:asset/61636d64a66e87acc43f2e63f91829fa6b8f0dea.png';
import laQuintaLogo from 'figma:asset/f31b2dfb28307640a195a389e2838f1c2a7dc156.png';
import holidayInnLogo from 'figma:asset/6e7b3d1f8e168548d6b65e7dd7fb4691d792ff17.png';
import qualityInnLogo from 'figma:asset/1a36f52dfb717910963752bf97e84ab00d9f89e9.png';

export default function SoftSeatingStatsSection() {
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

  return (
    <section className="py-8 bg-background">
      <div className="container mx-auto px-4">
        {/* Stats Grid - matching original design */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {/* Hotels Served */}
          <div className="text-center">
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-2xl border border-white/20">
              <div className="text-3xl font-bold text-primary mb-1">150+</div>
              <div className="text-sm text-muted-foreground">Canadian Hotels</div>
            </div>
          </div>

          {/* Provinces Served */}
          <div className="text-center">
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-2xl border border-white/20">
              <div className="text-3xl font-bold text-primary mb-1">10</div>
              <div className="text-sm text-muted-foreground">Provinces Served</div>
            </div>
          </div>

          {/* Eco-Friendly */}
          <div className="text-center">
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-2xl border border-white/20">
              <div className="text-3xl font-bold text-primary mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Eco-Friendly</div>
            </div>
          </div>

          {/* Avg Rating */}
          <div className="text-center">
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-2xl border border-white/20">
              <div className="text-3xl font-bold text-primary mb-1">4.9★</div>
              <div className="text-sm text-muted-foreground">Avg. Rating</div>
            </div>
          </div>
        </div>

        {/* Brand Logos Section - Clean white background */}
        <div className="pt-8 border-t border-gray-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">Trusted by Canada's Leading Hotel Brands</h3>
            <p className="text-muted-foreground">Premium brands choose Sara Global for their Canadian properties</p>
          </div>
          
          <div className="overflow-hidden py-4">
            <div className="flex animate-scroll-logos gap-16 items-center">
              {/* Duplicate the logos for seamless loop */}
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
  );
}