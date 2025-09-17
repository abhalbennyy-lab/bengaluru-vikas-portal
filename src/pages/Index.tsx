import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import NewsSection from "@/components/NewsSection";
import DepartmentsSection from "@/components/DepartmentsSection";
import AboutSection from "@/components/AboutSection";
import PhotoGallerySection from "@/components/PhotoGallerySection";
import SuggestionComplaintsSection from "@/components/SuggestionComplaintsSection";
import GovernmentOrdersSection from "@/components/GovernmentOrdersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <NewsSection />
        <DepartmentsSection />
        <PhotoGallerySection />
        <AboutSection />
        <SuggestionComplaintsSection />
        <GovernmentOrdersSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
