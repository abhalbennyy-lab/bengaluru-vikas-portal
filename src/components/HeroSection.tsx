import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import banner1 from "@/assets/1_20250917_183529_0000.png";
import banner2 from "@/assets/2_20250917_183530_0001.png";
import banner3 from "@/assets/3_20250917_183530_0002.png";

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
    <section className="w-full">
      <div className="relative w-full overflow-hidden" style={{ maxHeight: 720 }}>
        <div className="w-full" style={{ paddingBottom: "56.25%" }} />

        {/* Slides (positioned to fill the ratio box) */}
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
              className="w-full h-full object-cover object-center selection:bg-transparent select-none"
              draggable={false}
            />

            {/* Optional overlay if you want dark effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-black/45" />
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={goPrev}
          className="absolute top-1/2 left-3 sm:left-6 -translate-y-1/2 z-30 p-2 text-white rounded-full hover:bg-black/30 transition"
        >
          <ChevronLeft className="h-6 w-6 sm:h-7 sm:w-7" />
        </button>
        <button
          onClick={goNext}
          className="absolute top-1/2 right-3 sm:right-6 -translate-y-1/2 z-30 p-2 text-white rounded-full hover:bg-black/30 transition"
        >
          <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7" />
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all ${
                index === current
                  ? "bg-[#FFB300] scale-125 shadow-lg"
                  : "bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
