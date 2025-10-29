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

  return (
    <section className="py-16 bg-gray-50 font-[Poppins]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <h2 className="text-5xl   mb-12 font-poppins font-normal  text-[#164622]">
          Our Core <span className="text-[#F6911E]">Values</span>
        </h2>

        {/* Core value cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {coreValues.map((v, i) => (
            <div
              key={i}
              className={`${v.color} text-white p-8 transition-transform cursor-pointer`}
            >
              <div className="mb-4">{v.icon}</div>
              <h3 className="text-2xl   mb-2 font-poppins font-normal ">{v.title}</h3>
              <p className="text-sm opacity-90 font-poppins font-extralight">{v.description}</p>
            </div>
          ))}
        </div>

        {/* Call-to-action section */}
        <div
          className="bg-[#164622] h- text-white rounded-3xl p-12 relative overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage: "url('/img/Frame 427318957.png')",
            backgroundPosition: "center ",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPositiony: "0px",
          }}
        >
          {/* Text content */}
          <div className="relative z-10">
            <h2 className="text-5xl font-poppins font-normal  mb-4">
              Let's Create Digital
              <br />
              Magic <span className="text-[#e89a4a]">Together.</span>
            </h2>
            <p className="text-lg mb-6 font-poppins font-extralight">
              "Tell us about your vision, and we'll help you make it real."
            </p>
            <button className="bg-[#F6911E] font-poppins font-normal  text-white px-8 py-3 rounded-lg hover:bg-[#d88935] transition-colors flex items-center gap-2">
              <span>
                <FaWhatsapp />
              </span>{" "}
              Connect on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
