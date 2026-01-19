import { Phone } from "lucide-react";

const BookingForm = () => {
  return (
    <section id="booking" className="py-24 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center">
          <span className="inline-block text-gold font-sans text-sm tracking-[0.2em] uppercase mb-4">
            Reservations
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-8">
            Book Your Stay
          </h2>
          <p className="font-sans text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
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
    </section>
  );
};

export default BookingForm;
