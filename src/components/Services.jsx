import React from "react";

const ServicesSection = () => {
  const services = [
    {
      title: "UI/UX Design",
      description:
        "We craft user-centered designs that blend creativity and functionality. Our team focuses on delivering seamless digital experiences that enhance usability, engagement, and brand value across web and mobile platforms.",
      color: "bg-[#164622]"
    },
    {
      title: "Web Development",
      description:
        "We develop high-performing, secure, and scalable websites using the latest technologies. From front-end interfaces to back-end systems, we ensure your website runs smoothly and supports your business goals effectively.",
      color: "bg-[#F6911E]"
    },
    {
      title: "Digital Marketing",
      description:
        "We design data-driven digital marketing strategies that increase visibility, engagement, and conversions. Our approach combines SEO, social media, and targeted campaigns to help your brand connect with the right audience.",
      color: "bg-[#164622]"
    },
    {
      title: "Graphic Design",
      description:
        "We create visually compelling designs that communicate your brand message with clarity and impact. From logos and branding to marketing materials, our design solutions strengthen your visual identity and presence.",
      color: "bg-[#F6911E]"
    }
  ];
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl   mb-12 font-poppins font-normal  text-[#164622]">
          Our <span className="text-[#F6911E]">Services</span>
        </h2>
        <div className="space-y-6">
          {services.map((s, i) => (
            <div key={i} className={`${s.color} text-white p-8 rounded-3xl`}>
              <h3 className="text-3xl font-poppins font-normal  mb-4">{s.title}</h3>
              <p className="text-sm leading-relaxed opacity-90 font-poppins font-extralight">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
