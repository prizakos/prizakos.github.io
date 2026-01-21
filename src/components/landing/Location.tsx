import sunsetImage from "@/assets/gallery/beach-sunset-golden.jpg";

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
            <p className="font-sans text-forest-foreground/80 text-lg leading-relaxed">
              Tucked within the quiet, beautiful forest canopy of Southcott Pines, a small 
              community a few minutes south of Grand Bend, the property is a few hours from 
              both Toronto and Detroit and a short drive from the Pinery Provincial Park.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src={sunsetImage}
                alt="Sunset view from the property"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
