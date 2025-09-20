import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


import banner4 from "@/assets/WhatsApp Image 2025-09-19 at 10.23.04 AM (1).jpeg";
import banner5 from "@/assets/WhatsApp Image 2025-09-19 at 10.23.04 AM.jpeg";

type HeroSlide = {
  imageUrl: string;
  title?: string;
  subtitle?: string;
};

const STORAGE_KEY = "bvp.hero.slides";

const HeroSection = () => {
  const getSlides = () => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as HeroSlide[];
        const valid = parsed.filter((s) => s.imageUrl && s.imageUrl.trim() !== "");
        if (valid.length > 0) {
          return valid.map((s) => ({
            image: s.imageUrl,
            title: s.title ?? "",
            subtitle: s.subtitle ?? "",
          }));
        }
      }
    } catch {}
    return [
      { image: banner4, title: "", subtitle: "" },
      { image: banner5, title: "", subtitle: "" },
    ];
  };

  const [slides, setSlides] = useState(getSlides);

  const [current, setCurrent] = useState(0);

  // Auto-slide every 6 seconds
  useEffect(() => {
    if (slides.length <= 1) return;
    const id = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      6000
    );
    return () => clearInterval(id);
  }, [slides.length]);

  // Clamp current index when slides change
  useEffect(() => {
    if (current >= slides.length) setCurrent(0);
  }, [slides.length, current]);

  useEffect(() => {
    const handler = () => setSlides(getSlides());
    const storageHandler = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) setSlides(getSlides());
    };
    window.addEventListener("bvp:hero:update", handler);
    window.addEventListener("storage", storageHandler);
    return () => {
      window.removeEventListener("bvp:hero:update", handler);
      window.removeEventListener("storage", storageHandler);
    };
  }, []);

  const goPrev = () => {
    if (slides.length <= 1) return;
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };
  const goNext = () => {
    if (slides.length <= 1) return;
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="w-full">
      <div className="relative w-full overflow-hidden" style={{ maxHeight: 720 }}>
        <div className="w-full" style={{ paddingBottom: "56.25%" }} />

        {/* Slides (positioned to fill the ratio box) */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={slide.image}
              alt={`slide-${index}`}
              className="w-full h-full object-cover object-center selection:bg-transparent select-none"
              draggable={false}
            />

            {/* Optional overlay if you want dark effect */}
            {(slide.title || slide.subtitle) && (
              <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-black/45" />
            )}

            {(slide.title || slide.subtitle) && (
              <div className="absolute bottom-5 left-4 right-4 sm:left-8 sm:right-8 z-20 text-white">
                {slide.title && (
                  <div className="text-xl sm:text-2xl md:text-3xl font-semibold drop-shadow">{slide.title}</div>
                )}
                {slide.subtitle && (
                  <div className="text-sm sm:text-base md:text-lg opacity-90 mt-1 drop-shadow">{slide.subtitle}</div>
                )}
              </div>
            )}
          </div>
        ))}

        {/* Navigation Arrows */}
        {slides.length > 1 && (
          <>
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
          </>
        )}

        {/* Dots Navigation */}
        {slides.length > 1 && (
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
        )}
      </div>
    </section>
  );
};

export default HeroSection;
