import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import NewsSection from "@/components/NewsSection";
import DepartmentsSection from "@/components/DepartmentsSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <NewsSection />
        <DepartmentsSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
