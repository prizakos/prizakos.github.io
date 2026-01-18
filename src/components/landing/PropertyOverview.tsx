import { Bed, Bath, Users, MapPin, Mountain } from "lucide-react";

const PropertyOverview = () => {
  const highlights = [
    { icon: Bed, label: "4 Bedrooms" },
    { icon: Bath, label: "3 Bathrooms" },
    { icon: Users, label: "8-10 Guests" },
    { icon: MapPin, label: "Private Landscaped Home" },
    { icon: Mountain, label: "Steps from Private Sandy Beach" },
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
            Tucked within the quiet, beautiful forest canopy of Southcott Pines, this exceptional 
            year-round four-bedroom, three full bathroom home on Shoreline Drive offers the rare 
            luxury of complete privacy paired with effortless access to one of Canada's most 
            beautiful, private sandy beaches.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-card border border-border hover:border-gold/50 transition-colors duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary mb-4">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg text-foreground">{item.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyOverview;
