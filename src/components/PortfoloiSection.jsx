import React, { useEffect, useMemo, useRef, useState } from "react";

const PortfolioSection = () => {
   const featuredWork = useMemo(
    () => [
      { image: "/img/87b79ccb8d12a9856e7e8c0c5914f33aa24c0f28.jpg" },
      { image: "/img/12acaba109e81ff4a64405283e790a85627873a0.jpg" },
      { image: "/img/aa31ce43ff477698a1e873cb7f2ba8435788bde2.jpg" },
      { image: "/img/50d8027ad5ac2645249dcc36b8ba316004c4dccc.png" },
      { image: "/img/a58f9c185418dfab1a9e4fbd0117cf32c8cd08ff.png" },
    ],
    []
  );

   const trackRef = useRef(null);
  const animationRef = useRef(null);
  const pausedRef = useRef(false);
  const scrollPositionRef = useRef(0);
  const directionRef = useRef(1);  

   useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const scrollSpeed = 2.5;  
    let lastTime = performance.now();

    const animate = (now) => {
      if (!pausedRef.current && track) {
        const delta = (now - lastTime) / 16.666;  
        lastTime = now;

         scrollPositionRef.current += scrollSpeed * directionRef.current * delta;

         const maxScroll = track.scrollWidth / 2 - track.clientWidth;

         if (scrollPositionRef.current <= 0) {
          scrollPositionRef.current = 0;
          directionRef.current = 1;  
        } else if (scrollPositionRef.current >= maxScroll) {
          scrollPositionRef.current = maxScroll;
          directionRef.current = -1;  
        }

        track.scrollLeft = scrollPositionRef.current;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

   useEffect(() => {
    const onVis = () => {
      pausedRef.current = document.hidden;
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

   return (
    <section className="py-10 sm:py-9 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
         <div className="flex items-center px-3 sm:px-0 justify-between mb-4 sm:mb-6">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#164622] leading-tight">
            Featured <span className="text-[#F6911E]">Work</span>
          </h2>
        </div>

         <div
          ref={trackRef}
          className="relative overflow-x-auto scrollbar-hide -mx-2 sm:-mx-1 px-2 sm:px-1"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
          onTouchStart={() => (pausedRef.current = true)}
          onTouchEnd={() => (pausedRef.current = false)}
        >
          <div className="flex gap-4 sm:gap-5 md:gap-6">
             {[...featuredWork, ...featuredWork].map((work, i) => (
              <article
                key={i}
                className="
                  relative flex-shrink-0 overflow-hidden
                  rounded-md sm:rounded-lg
                  min-w-[80%] xs:min-w-[72%] sm:min-w-[60%]
                  md:min-w-[420px] lg:min-w-[500px]
                  h-[46vh] xs:h-[52vh] sm:h-[56vh] md:h-[60vh] lg:h-[600px]
                  max-h-[700px]
                "
              >
                <img
                  src={work.image}
                  alt={`Featured work ${i % featuredWork.length + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  draggable={false}
                />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
