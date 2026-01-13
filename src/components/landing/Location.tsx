import { MapPin, TreeDeciduous, Wine, Compass } from "lucide-react";

const experiences = [
  {
    icon: TreeDeciduous,
    title: "Nature Trails",
    description: "Miles of private hiking paths through ancient forests",
  },
  {
    icon: Wine,
    title: "Local Vineyards",
    description: "Award-winning wineries just 15 minutes away",
  },
  {
    icon: Compass,
    title: "Adventure",
    description: "Kayaking, fishing, and horseback riding nearby",
  },
];

const Location = () => {
  return (
    <section className="py-24 px-4 bg-forest text-forest-foreground">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-gold font-sans text-sm tracking-[0.2em] uppercase mb-4">
              Location
            </span>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">
              The Perfect Escape
            </h2>
            <p className="font-sans text-forest-foreground/80 text-lg mb-8 leading-relaxed">
              Willowbrook Cottage is tucked away in the heart of the Appalachian foothills, 
              offering complete privacy while remaining just a short drive from charming villages, 
              artisan markets, and world-class dining.
            </p>

            <div className="flex items-center gap-2 text-gold mb-8">
              <MapPin className="h-5 w-5" />
              <span className="font-sans">Blue Ridge Mountains, Virginia</span>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                    <exp.icon className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-forest-foreground mb-1">{exp.title}</h3>
                    <p className="font-sans text-sm text-forest-foreground/70">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map Placeholder / Image */}
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Mountain landscape"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card text-card-foreground p-6 rounded-lg shadow-lg max-w-xs">
              <p className="font-serif text-xl mb-2">2.5 hours</p>
              <p className="font-sans text-sm text-muted-foreground">from Washington D.C.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
