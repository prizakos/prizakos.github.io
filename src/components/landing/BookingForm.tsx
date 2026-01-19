import { Phone } from "lucide-react";
import beachSunset from "@/assets/gallery/beach-dogs-sunset.jpg";

const BookingForm = () => {
  return (
    <section id="booking" className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 md:order-1">
            <div className="aspect-[3/4] rounded-lg overflow-hidden">
              <img
                src={beachSunset}
                alt="Beach sunset with dogs"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="text-center md:text-left order-1 md:order-2">
            <span className="inline-block text-gold font-sans text-sm tracking-[0.2em] uppercase mb-4">
              Reservations
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-8">
              Book Your Stay
            </h2>
            <p className="font-sans text-muted-foreground text-lg mb-8">
              If you are interested in more information about the property and availability 
              please contact the owner at:
            </p>
            <a 
              href="tel:5551234567" 
              className="inline-flex items-center gap-3 text-2xl md:text-3xl font-serif text-gold hover:text-gold/80 transition-colors"
            >
              <Phone className="h-6 w-6 md:h-8 md:w-8" />
              (555) 123-4567
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
