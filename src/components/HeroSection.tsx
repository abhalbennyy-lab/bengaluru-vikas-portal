import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import banner1 from "@/assets/banners1.jpg";
import banner2 from "@/assets/banners1.jpg";

const HeroSection = () => {
  const slides = useMemo(
  () => [
    {
      img: banner1,
      title: "Wherever BDA Goes, Bangalore Grows.",
      subtitle: `To transform Bengaluru to an ideal global destination with high quality infrastructure,
better quality of life by ensuring sustainable and planned development based on
effective monitoring, regulation, through participatory and innovative approach.`,
    },
    {
      img: banner2,
      title: "Pay Your Property Tax Easily & Securely Online",
      subtitle: "",
      buttons: [
        { text: "Pay Property Tax Now", bg: "bg-[#FFB300]", hover: "hover:bg-[#e6a500]" },
        { text: "View User Instructions", bg: "bg-white/80", hover: "hover:bg-white" },
      ],
    },
    {
      img: banner2, // you can use another image if needed
      title: "Your Time Matters To Us.",
      subtitle: "Plan Your Visit And Resolve Your Issues",
      buttons: [
        { text: "Resolve your Issues", bg: "bg-[#FFB300]", hover: "hover:bg-[#e6a500]" },
      ],
    },
  ],
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
    <section className="relative w-full h-[500px] sm:h-[420px] md:h-[640px] overflow-hidden bg-black">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <img
            src={slide.img}
            alt={slide.title}
            className="w-full h-full object-cover transform md:scale-105"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 mt-5">
            <h2 className="text-white text-xl sm:text-3xl md:text-5xl font-bold drop-shadow-lg">
              {slide.title}
            </h2>
            <p className="text-white text-sm sm:text-lg md:text-2xl mt-3 max-w-2xl drop-shadow-md">
              {slide.subtitle}
            </p>

            {/* Buttons only for slides that have buttons */}
            {slide.buttons && (
              <div className="mt-6 flex flex-wrap gap-4 justify-center">
                {slide.buttons.map((btn, i) => (
                  <button
                    key={i}
                    className={`${btn.bg} ${btn.hover} text-black font-semibold py-2 px-5 rounded-md transition`}
                  >
                    {btn.text}
                  </button>
                ))}
              </div>
            )}
          </div>
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
