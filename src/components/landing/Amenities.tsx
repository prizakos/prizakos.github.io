import {
  Flame,
  Wifi,
  UtensilsCrossed,
  Car,
  Waves,
  TreePine,
  Coffee,
  Tv,
  Wind,
  Sparkles,
} from "lucide-react";

const amenities = [
  { icon: Flame, label: "Stone Fireplace", description: "Cozy wood-burning hearth" },
  { icon: Waves, label: "Hot Tub", description: "Private outdoor spa" },
  { icon: Wifi, label: "High-Speed WiFi", description: "Stay connected" },
  { icon: UtensilsCrossed, label: "Gourmet Kitchen", description: "Fully equipped" },
  { icon: Coffee, label: "Espresso Machine", description: "Barista-quality coffee" },
  { icon: Tv, label: "Smart Entertainment", description: "4K TV & streaming" },
  { icon: Car, label: "Private Parking", description: "Secure covered garage" },
  { icon: TreePine, label: "Forest Trails", description: "Direct property access" },
  { icon: Wind, label: "Central Air", description: "Climate controlled" },
  { icon: Sparkles, label: "Daily Housekeeping", description: "Optional service" },
];

const Amenities = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-gold font-sans text-sm tracking-[0.2em] uppercase mb-4">
            Amenities
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
            Luxury in Every Detail
          </h2>
          <p className="font-sans text-muted-foreground text-lg max-w-2xl mx-auto">
            From modern conveniences to thoughtful touches, everything you need for an unforgettable stay.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="group text-center p-6 rounded-lg hover:bg-card transition-colors duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/10 group-hover:bg-gold/20 transition-colors duration-300 mb-4">
                <amenity.icon className="h-5 w-5 text-gold" />
              </div>
              <h3 className="font-serif text-base text-foreground mb-1">{amenity.label}</h3>
              <p className="font-sans text-xs text-muted-foreground">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
