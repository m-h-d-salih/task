import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const CoreValuesSection = () => {
  const coreValues = [
    {
      icon: (
        <img
          src="/img/mdi_color.png"
          alt="Creative Excellence"
          className="h-10 w-10"
        />
      ),
      title: "Creative Excellence",
      description: "We deliver designs that inspire and perform.",
      color: "bg-[#164622]",
    },
    {
      icon: (
        <img
          src="/img/game-icons_sands-of-time.png"
          alt="Timely Delivery"
          className="h-10 w-10"
        />
      ),
      title: "Timely Delivery",
      description: "Every project delivered on schedule with care.",
      color: "bg-[#F6911E]",
    },
    {
      icon: (
        <img
          src="/img/icon-park-outline_communication.png"
          alt="Transparent Communication"
          className="h-10 w-10"
        />
      ),
      title: "Transparent Communication",
      description: "We keep you informed at every step.",
      color: "bg-[#F6911E]",
    },
    {
      icon: (
        <img
          src="/img/carbon_partnership.png"
          alt="Long-Term Partnership"
          className="h-10 w-10"
        />
      ),
      title: "Long-Term Partnership",
      description: "Building relationships that grow with your business.",
      color: "bg-[#164622]",
    },
  ];


  const orderClasses = {
    "Creative Excellence": "order-1 sm:order-none",
    "Timely Delivery": "order-2 sm:order-none",
    "Long-Term Partnership": "order-3 sm:order-none",
    "Transparent Communication": "order-4 sm:order-none",
  };


  return (
    <section className="sm:py-9 py-4   font-[Poppins]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <h2 className="text-4xl sm:text-5xl  mb-12 font-poppins font-normal  text-[#164622]">
          Our Core <span className="text-[#F6911E]">Values</span>
        </h2>

        {/* Core value cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {coreValues.map((v, i) => (
            <div
              key={i}
              className={`${v.color} text-white p-8 transition-transform cursor-pointer ${orderClasses[v.title] || ""}`}
            >
              <div className="flex gap-5 items-center">
                <div className="mb-4">{v.icon}</div>
                <h3 className="text-2xl   mb-2 font-poppins font-normal ">
                  {v.title}
                </h3>
              </div>
              <p className="text-md opacity-90 font-poppins font-extralight">
                {v.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-[#164622] text-white rounded-3xl  relative overflow-hidden">
          <div className="absolute flex-shrink-0">
            <img
              src="/img/“.png"
              alt="Dog with binoculars"
              className="relative z-10 w-20 h-50 flex -mt-14 sm:mt-0 sm:w-54 sm:h-[150px] object-contain"
            />
          </div>
          {/* Main content container */}
          <div className="relative z-10 flex items-center justify-between">
            {/* Left side - Text content */}
            <div className="flex-1 z-90 p-4 sm:p-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl sm:ml-30 lg:text-5xl font-poppins font-normal mb-3 sm:mb-4 leading-tight">
                Let's Create Digital
                <br />
                Magic <span className="text-[#e89a4a]">Together.</span>
              </h2>
              <p className="text-lg mb-6 font-poppins font-extralight">
                "Tell us about your vision, and we'll help you make it real."
              </p>
              <button className="bg-[#F6911E] z-30 font-poppins font-normal text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-[#d88935] transition-colors flex items-center gap-2   lg:mx-0 text-sm sm:text-base">
                <span>
                  <FaWhatsapp />
                </span>
                Connect on WhatsApp
              </button>
            </div>

            <div className="sm:relative absolute flex-shrink-0">
              <img
                src="/img/41dfe4c90bf8a09e5e2ea1f61ea82aba403c4ef3.png"
                alt="Dog with binoculars"
                className="relative sm:z-10 z-5 w-48 mt-10 sm:mt-0 sm:w-56 ml-40 sm:ml-0 md:w-64 h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
