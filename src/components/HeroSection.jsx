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

 
      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto z-10 flex flex-col justify-center h-full px-4 sm:px-6 lg:px-8 text-white text-left md:text-left">
        <h1 className="text-3xl sm:text-4xl font-poppins font-normal  md:text-6xl lg:text-7xl  leading-tight max-w-3xl mx-auto md:mx-0">
          Building Brands Through{" "}
          <span className="font-bold">Smart Design & Digital Innovation</span>
        </h1>
        <p className="mt-4 font-poppins font-extralight sm:mt-6 text-base sm:text-lg max-w-xl text-gray-200 mx-auto md:mx-0">
          Transforming ideas into impactful digital experiences that drive
          growth and inspire trust.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
