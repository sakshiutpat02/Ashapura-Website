import AboutSection from "../components/AboutSection.jsx";
import CategoriesSection from "../components/CategoriesSection.jsx";
import ContactSection from "../components/ContactSection.jsx";
import FeaturedBrands from "../components/FeaturedBrands.jsx";
import FloatingWhatsapp from "../components/FloatingWhatsapp.jsx";
import Footer from "../components/Footer.jsx";
import HeroSection from "../components/HeroSection.jsx";
import HomeDelivery from "../components/HomeDelivery.jsx";
import LocationSection from "../components/LocationSection.jsx";
import Navbar from "../components/Navbar.jsx";
import StatsSection from "../components/StatsSection.jsx";
import TopHeader from "../components/TopHeader.jsx";
import WhyChooseUs from "../components/WhyChooseUs.jsx";

export default function Home() {
  return (
    <>
      <TopHeader />
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <CategoriesSection />
        <WhyChooseUs />
        <FeaturedBrands />
        <HomeDelivery />
        <LocationSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </>
  );
}
