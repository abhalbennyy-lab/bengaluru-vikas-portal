import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import banner1 from "@/assets/banners1.jpg";
import banner2 from "@/assets/banner2.jpg";

const HeroSection = () => {
  const slides = useMemo(
    () => [
      {
        img: banner1,
        title: "Bangalore Development Authority",
        subtitle: "Urban Development Department, Government of Karnataka",
      },
      {
        img: banner2,
        title: "Planned Urban Growth for Bangalore",
        subtitle: "Infrastructure, Housing, and Civic Development",
      },
    ],
    []
  );

  const [current, setCurrent] = useState(0);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const id = setInterval(() => setCurrent((prev) => (prev + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  const goPrev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const goNext = () => setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <section className="relative w-full h-[360px] sm:h-[420px] md:h-[640px] overflow-hidden bg-black">
      {/* Slides with Fade Transition */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.img}
            alt={slide.title}
            className="w-full h-full object-contain md:object-cover transform md:scale-105"
          />
          {/* Subtle Gradient Overlay for Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
        </div>
      ))}

      {/* Text and CTA removed as requested */}

      {/* Navigation Arrows */}
      <button
        onClick={goPrev}
        className="absolute top-1/2 left-6 -translate-y-1/2 z-30 p-2 text-white rounded-full hover:bg-black/30 transition"
      >
        <ChevronLeft className="h-7 w-7" />
      </button>
      <button
        onClick={goNext}
        className="absolute top-1/2 right-6 -translate-y-1/2 z-30 p-2 text-white rounded-full hover:bg-black/30 transition"
      >
        <ChevronRight className="h-7 w-7" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? "bg-[#FFB300] scale-125 shadow-lg" : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
