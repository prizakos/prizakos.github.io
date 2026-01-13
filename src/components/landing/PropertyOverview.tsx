import { Bed, Users, MapPin, Mountain } from "lucide-react";

const PropertyOverview = () => {
  const highlights = [
    { icon: Bed, label: "3 Bedrooms", description: "Luxurious suites" },
    { icon: Users, label: "6 Guests", description: "Comfortable capacity" },
    { icon: MapPin, label: "Private Estate", description: "5 secluded acres" },
    { icon: Mountain, label: "Mountain Views", description: "Panoramic vistas" },
  ];

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-gold font-sans text-sm tracking-[0.2em] uppercase mb-4">
            The Experience
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
            A Retreat Like No Other
          </h2>
          <p className="font-sans text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Nestled among ancient oaks and overlooking a pristine valley, Willowbrook Cottage 
            offers an unparalleled escape from the ordinary. Every detail has been carefully 
            curated to provide the perfect blend of rustic charm and modern luxury.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-card border border-border hover:border-gold/50 transition-colors duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary mb-4">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-1">{item.label}</h3>
              <p className="font-sans text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyOverview;
