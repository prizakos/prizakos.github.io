import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah & Michael",
    location: "New York, NY",
    text: "Absolutely magical. The cottage exceeded every expectation. We've already booked our return trip for the fall foliage season.",
    rating: 5,
  },
  {
    name: "The Patterson Family",
    location: "Boston, MA",
    text: "The perfect family getaway. The kids loved exploring the trails, and we loved the hot tub after they went to bed. Pure bliss.",
    rating: 5,
  },
  {
    name: "James R.",
    location: "Washington, D.C.",
    text: "I've stayed at luxury properties around the world, and Willowbrook stands among the best. The attention to detail is remarkable.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-gold font-sans text-sm tracking-[0.2em] uppercase mb-4">
            Guest Experiences
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
            What Our Guests Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-lg border border-border relative"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-gold/20" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-sans text-muted-foreground leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div>
                <p className="font-serif text-foreground">{testimonial.name}</p>
                <p className="font-sans text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
