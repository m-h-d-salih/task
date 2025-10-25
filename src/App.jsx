// import React from 'react'
// import Route from './routes/index'

// function App() {
//   return (
//     <div>
//       <Route/>
 
//     </div>
//   )
// }

// export default App


import React, { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const navigation = [
    { name: "About", path: "about" },
    { name: "Services", path: "services" },
    { name: "Portfolio", path: "portfolio" },
  ];

  /* ===== Your data with correct public/ paths ===== */
  const team = [
    { name: "Adilshan", image: "/img/fdb40b1681bd6fe6b645dfe3e0397de370beddee.jpg" },
    { name: "Sajjad", image: "/img/f993a78f5aa057615615d053929ee1ab22c4e811.jpg" },
    { name: "Goury Nanda", image: "/img/1eab3c795c3e4574a5a87cae74771ec94600525b.jpg" },
    { name: "Mhd Rishan", image: "/img/da3125353812437bced2411cd04dc899b918bfd4.jpg" },
  ];

  const coreValues = [
    {
      icon: <img src="/img/mdi_color.png" alt="Creative Excellence" className="h-10 w-10" />,
      title: "Creative Excellence",
      description: "We deliver designs that inspire and perform.",
      color: "bg-[#3d5a3d]",
    },
    {
      icon: <img src="/img/game-icons_sands-of-time.png" alt="Timely Delivery" className="h-10 w-10" />,
      title: "Timely Delivery",
      description: "Every project delivered on schedule with care.",
      color: "bg-[#e89a4a]",
    },
    {
      icon: <img src="/img/icon-park-outline_communication.png" alt="Transparent Communication" className="h-10 w-10" />,
      title: "Transparent Communication",
      description: "We keep you informed at every step.",
      color: "bg-[#e89a4a]",
    },
    {
      icon: <img src="/img/carbon_partnership.png" alt="Long-Term Partnership" className="h-10 w-10" />,
      title: "Long-Term Partnership",
      description: "Building relationships that grow with your business.",
      color: "bg-[#3d5a3d]",
    },
  ];

  // Featured Work (your 5 images)
  const featuredWork = useMemo(
    () => [
      { image: "/img/87b79ccb8d12a9856e7e8c0c5914f33aa24c0f28.jpg", title: "BUILD YOUR NEXT PRODUCT", subtitle: "with epic design and flawless user experience", description: "From concept to creation — we craft digital excellence." },
      { image: "/img/12acaba109e81ff4a64405283e790a85627873a0.jpg", title: "നിങ്ങളുടെ BUSINESS", subtitle: "ഡിജിറ്റൽ വളർച്ചയ്ക്ക് നാം നിങ്ങളോടൊപ്പം", description: "FOLLOW US ON 📘" },
      { image: "/img/aa31ce43ff477698a1e873cb7f2ba8435788bde2.jpg", title: "What We Do", subtitle: "Make your business more profitable", description: "Professional consulting services" },
      { image: "/img/50d8027ad5ac2645249dcc36b8ba316004c4dccc.png", title: "Team Collaboration", subtitle: "Working together for success", description: "Building strong partnerships" },
      { image: "/img/a58f9c185418dfab1a9e4fbd0117cf32c8cd08ff.png", title: "Digital Solutions", subtitle: "Transform your business", description: "Innovative technology solutions" },
    ],
    []
  );

  /* ===== Slider logic (snap + buttons + dots + autoplay) ===== */
  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  const [slide, setSlide] = useState(0);
  const AUTOPLAY = true;
  const INTERVAL_MS = 4500;

  cardRefs.current = [];
  const addCardRef = (el) => {
    if (el && !cardRefs.current.includes(el)) cardRefs.current.push(el);
  };

  const goTo = (i) => {
    const n = featuredWork.length;
    const next = ((i % n) + n) % n;
    setSlide(next);
    const el = cardRefs.current[next];
    if (el) el.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  };

  const next = () => goTo(slide + 1);
  const prev = () => goTo(slide - 1);

  useEffect(() => {
    if (!AUTOPLAY) return;
    const id = setInterval(next, INTERVAL_MS);
    return () => clearInterval(id);
  }, [slide, AUTOPLAY]);

  useEffect(() => {
    const container = trackRef.current;
    if (!container) return;
    const onScroll = () => {
      let nearest = 0;
      let min = Infinity;
      const baseLeft = container.getBoundingClientRect().left;
      cardRefs.current.forEach((el, i) => {
        const d = Math.abs(el.getBoundingClientRect().left - baseLeft);
        if (d < min) { min = d; nearest = i; }
      });
      setSlide(nearest);
    };
    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  /* ===== UI sections ===== */
  const Header = () => (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => setCurrentPage("home")}
          className="flex items-center gap-2"
          aria-label="Thaavu.Co Home"
        >
          <img src="/img/991168e39ac3c9b9b1b67f355b84c827f7287cf7.png" alt="Thaavu.Co" className="h-10 w-auto object-contain" />
        </button>

        <nav className="flex items-center gap-8">
          {navigation.map((item) => (
            <button
              key={item.path}
              onClick={() => setCurrentPage(item.path)}
              className="text-gray-800 hover:text-[#3d5a3d] transition-colors font-medium"
            >
              {item.name}
            </button>
          ))}
          <button className="bg-[#3d5a3d] text-white px-6 py-2 rounded-md hover:bg-[#2d4a2d] transition-colors">
            Let's Connect
          </button>
        </nav>
      </div>
    </header>
  );

  const HeroSection = () => (
    <section className="relative bg-gradient-to-br from-[#3d5a3d] to-[#2d4a2d] text-white py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-20 w-96 h-96 bg-green-400 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-96 h-96 bg-green-300 rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h1 className="text-6xl font-bold mb-4 leading-tight">
          Building Brands Through
          <br />
          <span className="text-white">Smart Design &amp; Digital</span>
          <br />
          <span className="text-white">Innovation</span>
        </h1>
        <p className="text-lg text-gray-200 max-w-2xl">
          Transforming ideas into impactful digital experiences that drive growth and inspire trust
        </p>
      </div>
    </section>
  );

  const AboutSection = () => (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold mb-8">
          Who We Are<span className="text-[#e89a4a]">?</span>
        </h2>
        <div className="text-gray-700 text-lg leading-relaxed space-y-4">
          <p>
            At Thaavu.co, we believe in creating meaningful experiences through design, innovation, and
            value-driven solutions.
          </p>
          <p>
            Our team blends creativity with technology to deliver results that make an impact. We
            specialize in graphic design, branding, marketing, web development, UI/UX, and digital
            solutions—helping businesses grow, connect, and stand out.
          </p>
        </div>
      </div>
    </section>
  );

  const ServicesSection = () => {
    const services = [
      {
        title: "UI/UX Design",
        description:
          "We craft user-centered designs that blend creativity and functionality. Our team focuses on delivering seamless digital experiences that enhance usability, engagement, and brand value across web and mobile platforms.",
        color: "bg-[#3d5a3d]",
      },
      {
        title: "Web Development",
        description:
          "We develop high-performing, secure, and scalable websites using the latest technologies. From front-end interfaces to back-end systems, we ensure your website runs smoothly and supports your business goals effectively.",
        color: "bg-[#e89a4a]",
      },
      {
        title: "Digital Marketing",
        description:
          "We design data-driven digital marketing strategies that increase visibility, engagement, and conversions. Our approach combines SEO, social media, and targeted campaigns to help your brand connect with the right audience.",
        color: "bg-[#3d5a3d]",
      },
      {
        title: "Graphic Design",
        description:
          "We create visually compelling designs that communicate your brand message with clarity and impact. From logos and branding to marketing materials, our design solutions strengthen your visual identity and presence.",
        color: "bg-[#e89a4a]",
      },
    ];
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-12">
            Our <span className="text-[#e89a4a]">Services</span>
          </h2>
          <div className="space-y-6">
            {services.map((s, i) => (
              <div key={i} className={`${s.color} text-white p-8 rounded-3xl`}>
                <h3 className="text-3xl font-bold mb-4">{s.title}</h3>
                <p className="text-sm leading-relaxed opacity-90">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const PortfolioSection = () => (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header + controls */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-5xl font-bold">
            Featured <span className="text-[#e89a4a]">Work</span>
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
                ref={addCardRef}
                className="snap-start flex-shrink-0 w-[21rem] sm:w-[24rem] md:w-[26rem] lg:w-[28rem] xl:w-[30rem] h-96 rounded-2xl overflow-hidden relative group bg-black/5"
              >
                <img src={work.image} alt={work.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/0" />
                <div className="relative z-10 h-full p-6 flex flex-col justify-end text-white">
                  <p className="text-xs opacity-90 mb-1">{work.description}</p>
                  <h3 className="text-2xl font-bold leading-tight">{work.title}</h3>
                  <p className="text-sm opacity-95">{work.subtitle}</p>
                  <div className="text-[11px] opacity-80 mt-3">CONTACT US: +91 9446 801 300</div>
                </div>
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
              className={`h-2.5 rounded-full transition-all ${slide === i ? "w-8 bg-[#3d5a3d]" : "w-2.5 bg-gray-300"}`}
            />
          ))}
        </div>

        {/* Team */}
        <div className="mt-16">
          <h2 className="text-5xl font-bold mb-4">
            Meet Our <span className="text-[#e89a4a]">Team</span>
          </h2>
          <p className="text-gray-600 text-lg mb-8">The creative minds driving Thaavu.Co forward</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div key={i} className="text-center group cursor-pointer">
                <div className="bg-gray-200 rounded-2xl h-64 overflow-hidden mb-4 relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-xl font-semibold">{member.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  const CoreValuesSection = () => (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-5xl font-bold mb-12">
          Our Core <span className="text-[#e89a4a]">Values</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {coreValues.map((v, i) => (
            <div
              key={i}
              className={`${v.color} text-white p-8 rounded-2xl hover:scale-105 transition-transform cursor-pointer`}
            >
              <div className="mb-4">{v.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{v.title}</h3>
              <p className="text-sm opacity-90">{v.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#3d5a3d] text-white rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute right-10 top-1/2 -translate-y-1/2">
            <div className="w-32 h-32 bg-[#e89a4a] rounded-full opacity-80" />
          </div>
          <div className="absolute right-20 top-1/2 -translate-y-1/2 text-8xl">🔍</div>
          <div className="relative z-10">
            <h2 className="text-5xl font-bold mb-4">
              Let's Create Digital
              <br />
              Magic <span className="text-[#e89a4a]">Together.</span>
            </h2>
            <p className="text-lg mb-6">"Tell us about your vision, and we'll help you make it real."</p>
            <button className="bg-[#e89a4a] text-white px-8 py-3 rounded-lg hover:bg-[#d88935] transition-colors flex items-center gap-2">
              <span>💬</span> Connect on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );

  const Footer = () => (
    <footer className="bg-[#2d4a2d] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <button
            onClick={() => setCurrentPage("home")}
            className="flex items-center gap-2 hover:opacity-90 transition-opacity"
            aria-label="Thaavu.Co Home"
          >
            <img src="/img/991168e39ac3c9b9b1b67f355b84c827f7287cf7.png" alt="Thaavu.Co" className="h-9 w-auto object-contain" />
          </button>
          <div className="mb-4 mt-6">
            <h3 className="text-lg font-semibold mb-3">Links:</h3>
            <div className="flex gap-6">
              <button onClick={() => setCurrentPage("about")} className="hover:text-[#e89a4a] transition-colors">About</button>
              <button onClick={() => setCurrentPage("services")} className="hover:text-[#e89a4a] transition-colors">Service</button>
              <button onClick={() => setCurrentPage("portfolio")} className="hover:text-[#e89a4a] transition-colors">Portfolio</button>
              <button className="hover:text-[#e89a4a] transition-colors">Contact</button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-2xl hover:text-[#e89a4a] transition-colors">f</a>
            <a href="#" className="text-2xl hover:text-[#e89a4a] transition-colors">📷</a>
            <a href="#" className="text-2xl hover:text-[#e89a4a] transition-colors">in</a>
            <span className="ml-4">Thaavu.co</span>
          </div>
        </div>
        <div className="text-center text-sm border-t border-green-700 pt-6">
          © 2025 Thaavu.Co — All Rights Reserved.
        </div>
      </div>
    </footer>
  );

  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return (
          <>
            <AboutSection />
            <CoreValuesSection />
          </>
        );
      case "services":
        return <ServicesSection />;
      case "portfolio":
        return <PortfolioSection />;
      default:
        return (
          <>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <PortfolioSection />
            <CoreValuesSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
      <Header />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
};

export default App;
