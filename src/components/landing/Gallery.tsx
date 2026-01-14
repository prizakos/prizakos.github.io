import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Beachfront property exterior",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Ocean view living room",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Coastal bedroom suite",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Spa-like bathroom",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Modern coastal kitchen",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Private beach access",
    span: "md:col-span-2",
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-gold font-sans text-sm tracking-[0.2em] uppercase mb-4">
            Gallery
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
            Discover Every Corner
          </h2>
          <p className="font-sans text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore the beauty and comfort that awaits you at Shoreline Oasis.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg cursor-pointer group ${image.span}`}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-wood/0 group-hover:bg-wood/20 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Lightbox Dialog */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
            <VisuallyHidden>
              <DialogTitle>Gallery Image</DialogTitle>
            </VisuallyHidden>
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Gallery preview"
                className="w-full h-auto rounded-lg"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;
