import React from "react";
import Header from "./Header";

const HeroSection = () => {
  return (
    <section className="relative h-[50vh] sm:h-[80vh] overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-1/2 left-1/2 w-auto min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 -rotate-90 object-cover"
      >
        <source src="/thaavubannervideo.mp4" type="video/mp4" />
      </video>
<div className="relative max-w-7xl mx-auto flex flex-col justify-center h-full px-4 sm:px-6 lg:px-8 text-white text-left z-10">
  {/* Heading 1 */}
  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-poppins !font-extralight leading-tight sm:max-w-5xl">
    Building Brands Through
  </h1>

  {/* Heading 2 */}
  <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-poppins font-bold leading-tight sm:max-w-5xl">
    Smart Design & Digital Innovation
  </h1>

  {/* Paragraph */}
  <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl font-poppins font-extralight text-gray-200 leading-relaxed sm:max-w-4xl">
    Transforming ideas into impactful digital experiences that
    <br className="hidden sm:inline" />
    drive growth and inspire trust.
  </p>
</div>

    </section>
  );
};

export default HeroSection;
