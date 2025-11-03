import React from "react";

const TeamSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-2 sm:py-10">
      {/* Title */}
      <h2 className="text-4xl sm:text-5xl mb-4 font-poppins font-normal text-[#2d4a2d]">
        Meet Our <span className="text-[#e89a4a]">Team</span>
      </h2>

      <p className="text-[#2d4a2d] font-poppins font-extralight text-lg mb-12">
        The creative minds driving Thaavu.Co forward
      </p>

      {/* Team Grid – NO MAP */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
        {/* MEMBER 1 */}
        <div className="text-center group cursor-pointer">
  <div className="overflow-hidden bg-gray-100 h-48 sm:h-56 md:h-64 lg:h-72">
            <img
              src="/img/fdb40b1681bd6fe6b645dfe3e0397de370beddee.jpg"
              alt="Adilshan"
              className="w-full h-full sm:h-[200px] md:h-[160px] lg:h-[240px]  xl:h-[300px] object-cover object-center"
            />
          </div>
          <div className="bg-[#164622] text-white font-poppins py-[6px] text-lg">
            Adilshan
          </div>
        </div>

        {/* MEMBER 2 */}
        <div className="text-center group cursor-pointer">
          <div className="aspect-square overflow-hidden bg-gray-100">
            <img
              src="/img/f993a78f5aa057615615d053929ee1ab22c4e811.jpg"
              alt="Sajjad"
              className="w-full h-[400px] sm:h-[650px] md:h-[450px] lg:h-[540px]  xl:h-[690px]  object-cover object-top"
            />
          </div>
          <div className="bg-[#F6911E] text-white font-poppins py-[6px] text-lg">
            Sajjad
          </div>
        </div>

        {/* MEMBER 3 */}
        <div className="text-center group cursor-pointer">
          <div className="aspect-square overflow-hidden bg-gray-100">
            <img
              src="/img/1eab3c795c3e4574a5a87cae74771ec94600525b.jpg"
              alt="Goury Nanda"
              className="w-full h-[280px] sm:h-[400px] md:h-[270px] lg:h-[380px]  xl:h-[500px]  object-cover object-bottom"
            />
          </div>
          <div className="bg-[#164622] text-white font-poppins py-[6px] text-lg">
            Goury Nanda
          </div>
        </div>

        {/* MEMBER 4 */}
        <div className="text-center group cursor-pointer">
          <div className="aspect-square overflow-hidden bg-gray-100">
            <img
              src="/img/da3125353812437bced2411cd04dc899b918bfd4.jpg"
              alt="Mhd Rishan"
              className="w-full h-[350px] sm:h-[550px] md:h-[350px] lg:h-[440px]  xl:h-[600px]  object-cover object-top"
            />
          </div>
          <div className="bg-[#F6911E] text-white font-poppins py-[6px] text-lg">
            Mhd Rishan
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
