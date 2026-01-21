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
import bedroomDockArt from "@/assets/gallery/bedroom-dock-art.jpg";
import bedroomIronFrame from "@/assets/gallery/bedroom-iron-frame.jpg";
import bedroomPatioAccess from "@/assets/gallery/bedroom-patio-access.jpg";
import masterBedroom from "@/assets/gallery/master-bedroom.jpg";
import bathroomSoakingTub from "@/assets/gallery/bathroom-soaking-tub.jpg";
import bathroomVesselSink from "@/assets/gallery/bathroom-vessel-sink.jpg";
import masterBathroom from "@/assets/gallery/master-bathroom.jpg";
import bathroomGreen from "@/assets/gallery/bathroom-green.jpg";
import showerSubwayTile from "@/assets/gallery/shower-subway-tile.jpg";
import deckSeatingRed from "@/assets/gallery/deck-seating-red.jpg";
import backyardFirepit from "@/assets/gallery/backyard-firepit.jpg";
import forestDriveway from "@/assets/hero-property.jpg";
import deckWhiteChairs from "@/assets/gallery/deck-white-chairs.jpg";
import deckLoungeArea from "@/assets/gallery/deck-lounge-area.jpg";
import beachSunset from "@/assets/gallery/beach-sunset.jpg";
import beachGoldenSunset from "@/assets/gallery/beach-golden-sunset.jpg";
import sunsetThroughTrees from "@/assets/gallery/sunset-through-trees.jpg";
import winterBeach from "@/assets/gallery/winter-beach.jpg";
import turquoiseWaves from "@/assets/gallery/turquoise-waves.jpg";
import scenicSunset1 from "@/assets/gallery/scenic-sunset-1.jpg";
import scenicSunset2 from "@/assets/gallery/scenic-sunset-2.jpg";
import scenicLakeView from "@/assets/gallery/scenic-lake-view.jpg";
import scenicCoastal1 from "@/assets/gallery/scenic-coastal-1.jpg";
import scenicCoastal2 from "@/assets/gallery/scenic-coastal-2.jpg";
import beavertailsStorefront from "@/assets/gallery/beavertails-storefront.webp";
import grandBendMap from "@/assets/gallery/grand-bend-map.webp";
import huronCountyPlayhouse from "@/assets/gallery/huron-county-playhouse.jpg";
import lighthouseSunset from "@/assets/gallery/lighthouse-sunset.jpg";
import pickleballCourts from "@/assets/gallery/pickleball-courts.webp";
import marinaLighthouse from "@/assets/gallery/marina-lighthouse.webp";

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
  {
    src: masterBedroom,
    alt: "Spacious master bedroom with vaulted ceiling and seating area",
    span: "md:col-span-2",
  },
  {
    src: bedroomDockArt,
    alt: "Guest bedroom with dock artwork and forest views",
    span: "",
  },
  {
    src: bedroomIronFrame,
    alt: "Cozy bedroom with iron bed frame and modern art",
    span: "",
  },
  {
    src: bedroomPatioAccess,
    alt: "Bedroom with sliding door patio access",
    span: "",
  },
  {
    src: bathroomSoakingTub,
    alt: "Spa bathroom with soaking tub and vessel sink",
    span: "md:col-span-2",
  },
  {
    src: bathroomVesselSink,
    alt: "Elegant bathroom with glass vessel sink",
    span: "",
  },
  {
    src: masterBathroom,
    alt: "Master bathroom with curved vanity and glass shower",
    span: "",
  },
  {
    src: bathroomGreen,
    alt: "Guest bathroom with modern fixtures",
    span: "",
  },
  {
    src: showerSubwayTile,
    alt: "Walk-in shower with white subway tile",
    span: "",
  },
  {
    src: deckLoungeArea,
    alt: "Expansive deck with outdoor lounge seating and umbrella",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: deckSeatingRed,
    alt: "Covered deck with red seating and forest views",
    span: "",
  },
  {
    src: backyardFirepit,
    alt: "Backyard fire pit area with Adirondack chairs",
    span: "",
  },
  {
    src: forestDriveway,
    alt: "Property exterior with circular driveway",
    span: "",
  },
  {
    src: deckWhiteChairs,
    alt: "Upper deck with modern white chairs",
    span: "",
  },
  {
    src: beachSunset,
    alt: "Nearby beach at sunset with golden sky",
    span: "",
  },
  {
    src: beachGoldenSunset,
    alt: "Stunning golden sunset on the beach",
    span: "",
  },
  {
    src: sunsetThroughTrees,
    alt: "Lake sunset viewed through winter branches",
    span: "md:col-span-2",
  },
  {
    src: winterBeach,
    alt: "Winter beach landscape with snow",
    span: "",
  },
  {
    src: turquoiseWaves,
    alt: "Beautiful turquoise waves on a dramatic day",
    span: "",
  },
  {
    src: scenicSunset1,
    alt: "Dramatic sunset over the water",
    span: "md:col-span-2",
  },
  {
    src: scenicSunset2,
    alt: "Golden hour sunset with silhouetted trees",
    span: "",
  },
  {
    src: scenicLakeView,
    alt: "Serene lake view with surrounding forest",
    span: "",
  },
  {
    src: scenicCoastal1,
    alt: "Coastal scenery with ocean waves",
    span: "",
  },
  {
    src: scenicCoastal2,
    alt: "Beautiful coastal landscape view",
    span: "",
  },
  {
    src: lighthouseSunset,
    alt: "Grand Bend lighthouse at sunset with crashing waves",
    span: "md:col-span-2",
  },
  {
    src: beavertailsStorefront,
    alt: "BeaverTails pastry shop in Grand Bend",
    span: "",
  },
  {
    src: grandBendMap,
    alt: "Map of Grand Bend and Southcott Pines area",
    span: "",
  },
  {
    src: huronCountyPlayhouse,
    alt: "Huron County Playhouse theatre",
    span: "",
  },
  {
    src: pickleballCourts,
    alt: "Klondyke Sports Park pickleball courts",
    span: "",
  },
  {
    src: marinaLighthouse,
    alt: "Grand Bend marina with lighthouse",
    span: "",
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
