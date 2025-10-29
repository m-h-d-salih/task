import React, { useMemo } from "react";

const TeamSection = () => {
  const team = useMemo(
    () => [
      {
        name: "Adilshan",
        image: "/img/fdb40b1681bd6fe6b645dfe3e0397de370beddee.jpg",
        color: "bg-[#164622]", // dark green
      },
      {
        name: "Sajjad",
        image: "/img/f993a78f5aa057615615d053929ee1ab22c4e811.jpg",
        color: "bg-[#F6911E]", // orange
      },
      {
        name: "Goury Nanda",
        image: "/img/1eab3c795c3e4574a5a87cae74771ec94600525b.jpg",
        color: "bg-[#164622]", // dark green
      },
      {
        name: "Mhd Rishan",
        image: "/img/da3125353812437bced2411cd04dc899b918bfd4.jpg",
        color: "bg-[#F6911E]", // orange
      },
    ],
    []
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Title */}
      <h2 className="text-5xl   mb-4 font-poppins font-normal  text-[#2d4a2d]">
        Meet Our <span className="text-[#e89a4a]">Team</span>
      </h2>

      <p className="text-[#2d4a2d] font-poppins font-extralight   text-lg mb-12">
        The creative minds driving Thaavu.Co forward
      </p>

      {/* Team Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-8">
        {team.map((member, i) => (
          <div key={i} className="text-center group cursor-pointer">
            <div className="overflow-hidden mb-0 relative">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-[250px] object-cover object-top group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div
              className={`${member.color} text-white font-poppins font-normal  py-3   text-lg`}
            >
              {member.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
