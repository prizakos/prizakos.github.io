import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

// Import gallery images
import livingRoomDeck from "@/assets/gallery/living-room-deck.jpg";
import entrywayStaircase from "@/assets/gallery/entryway-staircase.jpg";
import diningRoom from "@/assets/gallery/dining-room.jpg";
import mudroom from "@/assets/gallery/mudroom.jpg";
import breakfastNook from "@/assets/gallery/breakfast-nook.jpg";
import livingFireplace from "@/assets/gallery/living-fireplace.jpg";
import diningWindow from "@/assets/gallery/dining-window.jpg";
import kitchenIsland from "@/assets/gallery/kitchen-island.jpg";
import kitchenCounters from "@/assets/gallery/kitchen-counters.jpg";

const galleryImages = [
  {
    src: livingRoomDeck,
    alt: "Open concept living room with deck access and forest views",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: entrywayStaircase,
    alt: "Modern entryway with glass staircase railing",
    span: "",
  },
  {
    src: diningRoom,
    alt: "Elegant dining room with chandelier",
    span: "",
  },
  {
    src: mudroom,
    alt: "Organized mudroom entry with built-in storage",
    span: "",
  },
  {
    src: breakfastNook,
    alt: "Cozy breakfast nook with forest view",
    span: "",
  },
  {
    src: livingFireplace,
    alt: "Living room with cozy fireplace in winter",
    span: "",
  },
  {
    src: diningWindow,
    alt: "Dining area with built-in window seat",
    span: "",
  },
  {
    src: kitchenIsland,
    alt: "Spacious kitchen with center island",
    span: "md:col-span-2",
  },
  {
    src: kitchenCounters,
    alt: "Kitchen with granite countertops and modern appliances",
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
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">
            Gallery
          </h2>
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
