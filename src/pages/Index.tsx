import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import OffersSection from "@/components/OffersSection";
import DoctorsSection from "@/components/DoctorsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ServicesSection />
      <OffersSection />
      <DoctorsSection />
      <Footer />
    </div>
  );
};

export default Index;
