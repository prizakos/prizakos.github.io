import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/gallery/forest-driveway.jpg";
import sunsetImage from "@/assets/gallery/hero-sunset-new.jpg";

const Hero = () => {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Collage */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid grid-cols-2">
          <div
            className="bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div
            className="bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${sunsetImage})` }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-cream mb-6 leading-tight animate-fade-in drop-shadow-lg">
          Grand Bend
          <span className="block text-gold drop-shadow-lg">Retreat</span>
        </h1>
        <p className="font-sans text-cream text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in drop-shadow-md" style={{ animationDelay: "0.4s" }}>
          Escape to this woodland retreat with effortless access to one of Canada's most beautiful, private sandy beaches.
        </p>
        <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Button
            onClick={scrollToBooking}
            size="lg"
            className="bg-gold hover:bg-gold/90 text-wood font-sans uppercase tracking-wider px-10 py-6 text-base"
          >
            Book Your Stay
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-cream/70" />
      </div>
    </section>
  );
};

export default Hero;
