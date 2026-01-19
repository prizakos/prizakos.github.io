import Hero from "@/components/landing/Hero";
import PropertyOverview from "@/components/landing/PropertyOverview";
import Highlights from "@/components/landing/Highlights";
import Gallery from "@/components/landing/Gallery";
import Amenities from "@/components/landing/Amenities";
import Location from "@/components/landing/Location";
import BookingForm from "@/components/landing/BookingForm";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <PropertyOverview />
      <Highlights />
      <Gallery />
      <Amenities />
      <Location />
      <BookingForm />
      <Footer />
    </main>
  );
};

export default Index;
