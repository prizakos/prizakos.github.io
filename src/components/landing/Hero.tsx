import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-wood/60 via-wood/40 to-wood/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <span className="inline-block text-gold font-sans text-sm tracking-[0.3em] uppercase mb-6 animate-fade-in">
          Luxury Retreat
        </span>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-cream mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Willowbrook
          <span className="block text-gold">Cottage</span>
        </h1>
        <p className="font-sans text-cream/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: "0.4s" }}>
          Escape to an enchanting woodland retreat where timeless elegance meets natural serenity. 
          Your private sanctuary awaits.
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
