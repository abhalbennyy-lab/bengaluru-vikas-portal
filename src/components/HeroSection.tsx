import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import banner1 from "@/assets/image1.png";
import banner2 from "@/assets/image2.png";
import banner3 from "@/assets/image3.png";

const HeroSection = () => {
  const slides = useMemo(
    () => [banner1, banner2, banner3],
    []
  );

  const [current, setCurrent] = useState(0);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const id = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      6000
    );
    return () => clearInterval(id);
  }, [slides.length]);

  const goPrev = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const goNext = () =>
    setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <section className="relative w-full h-[600px] sm:h-[520px] md:h-[1000px] overflow-hidden bg-black">
      {/* Slides */}
      {slides.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={img}
            alt={`slide-${index}`}
            className="w-full h-full object-fit"
          />
          {/* Optional overlay if you want dark effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
        </div>
      ))}

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
              index === current
                ? "bg-[#FFB300] scale-125 shadow-lg"
                : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
