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
  Bed,
} from "lucide-react";

const amenities = [
  { icon: Sparkles, label: "High Ceilings" },
  { icon: Bed, label: "Four Beds (1 King and 3 Queen)" },
  { icon: Wind, label: "Central Air" },
  { icon: Sparkles, label: "Washer Dryer" },
  { icon: Flame, label: "Outdoor Fire Pit" },
  { icon: Wifi, label: "High Speed Internet" },
  { icon: Tv, label: "Entertainment Area (Large TV, Sectional Sofa & Table Tennis)" },
  { icon: Car, label: "Circular Driveway with Two Car Garage" },
  { icon: Flame, label: "Gas Fireplace" },
  { icon: TreePine, label: "Two Decks" },
  { icon: TreePine, label: "Covered Front Porch" },
  { icon: UtensilsCrossed, label: "Gas BBQ" },
  { icon: UtensilsCrossed, label: "Fully Stocked Kitchen" },
  { icon: UtensilsCrossed, label: "Two Dining Areas (Seating 6 and 10)" },
  { icon: Coffee, label: "Board Games" },
  { icon: Waves, label: "Grand Bend Attractions (Golf, Pickleball, Playhouse)" },
  { icon: Sparkles, label: "Grand Bend Fitness Center" },
  { icon: Waves, label: "Public Beach Pass" },
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
