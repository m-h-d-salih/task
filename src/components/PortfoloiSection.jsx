import React, { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TeamSection from "./TeamSection"; // 👈 import the new component

const PortfolioSection = () => {
  // ===== data =====
  const featuredWork = useMemo(
    () => [
      { image: "/img/87b79ccb8d12a9856e7e8c0c5914f33aa24c0f28.jpg" },
      {
        image: "/img/12acaba109e81ff4a64405283e790a85627873a0.jpg",
        title: "നിങ്ങളുടെ BUSINESS",
        subtitle: "ഡിജിറ്റൽ വളർച്ചയ്ക്ക് നാം നിങ്ങളോടൊപ്പം",
        description: "FOLLOW US ON 📘",
      },
      {
        image: "/img/aa31ce43ff477698a1e873cb7f2ba8435788bde2.jpg",
        title: "What We Do",
        subtitle: "Make your business more profitable",
        description: "Professional consulting services",
      },
      {
        image: "/img/50d8027ad5ac2645249dcc36b8ba316004c4dccc.png",
        title: "Team Collaboration",
        subtitle: "Working together for success",
        description: "Building strong partnerships",
      },
      {
        image: "/img/a58f9c185418dfab1a9e4fbd0117cf32c8cd08ff.png",
        title: "Digital Solutions",
        subtitle: "Transform your business",
        description: "Innovative technology solutions",
      },
    ],
    []
  );

  // ===== state + refs =====
  const [slide, setSlide] = useState(0);
  const trackRef = useRef(null);
  const cardRefs = useRef([]);

  const goTo = (index) => {
    setSlide(index);
    const el = cardRefs.current[index];
    el?.scrollIntoView({ behavior: "smooth", inline: "center" });
  };

  const next = () => {
    setSlide((prev) => {
      const newIndex = (prev + 1) % featuredWork.length;
      goTo(newIndex);
      return newIndex;
    });
  };

  const prev = () => {
    setSlide((prev) => {
      const newIndex = (prev - 1 + featuredWork.length) % featuredWork.length;
      goTo(newIndex);
      return newIndex;
    });
  };

  // ===== auto slide =====
  useEffect(() => {
    const id = setInterval(() => {
      next();
    }, 4000);
    return () => clearInterval(id);
  }, []);

  // ===== ui =====
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header + controls */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-5xl font-poppins font-normal  text-[#164622]">
            Featured <span className="text-[#F6911E]">Work</span>
          </h2>
          <div className="flex gap-2">
            <button
              onClick={prev}
              aria-label="Previous"
              className="bg-[#3d5a3d] text-white p-3 rounded-full hover:bg-[#2d4a2d] transition-colors"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="bg-[#3d5a3d] text-white p-3 rounded-full hover:bg-[#2d4a2d] transition-colors"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Slider track */}
        <div
          ref={trackRef}
          className="relative overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory -mx-1 px-1"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex gap-6">
            {featuredWork.map((work, i) => (
              <article
                key={i}
                 className="relative min-w-[300px] md:min-w-[500px] h-[600px] overflow-hidden snap-center"
              >
                <img
                  src={work.image}
                  alt={work.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </article>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {featuredWork.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                slide === i ? "w-8 bg-[#3d5a3d]" : "w-2.5 bg-gray-300"
              }`}
            />
          ))}
        </div>
 
      </div>
    </section>
  );
};

export default PortfolioSection;
