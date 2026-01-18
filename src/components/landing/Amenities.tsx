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
  { icon: Sparkles, label: "High Ceilings" },
  { icon: Wind, label: "Central Air" },
  { icon: Sparkles, label: "Washer Dryer" },
  { icon: Flame, label: "Outdoor Fire Pit" },
  { icon: Wifi, label: "High Speed Internet" },
  { icon: Tv, label: "Entertainment Area with Large Flat Screen TV" },
  { icon: Car, label: "Circular Driveway with Two Car Garage" },
  { icon: Flame, label: "Gas Fireplace" },
  { icon: TreePine, label: "Two Decks" },
  { icon: TreePine, label: "Covered Front Porch" },
  { icon: UtensilsCrossed, label: "Gas BBQ" },
];

const Amenities = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">
            Amenities
          </h2>
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
              <h3 className="font-serif text-base text-foreground">{amenity.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
