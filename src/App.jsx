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



import React, { useState } from 'react';
import { Camera } from 'lucide-react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const navigation = [
    { name: 'About', path: 'about' },
    { name: 'Services', path: 'services' },
    { name: 'Portfolio', path: 'portfolio' },
  ];

  const services = [
    {
      title: 'UI/UX Design',
      description: 'We craft user-centered designs that blend creativity and functionality. Our team focuses on delivering seamless digital experiences that enhance usability, engagement, and brand value across web and mobile platforms.',
      color: 'bg-[#3d5a3d]'
    },
    {
      title: 'Web Development',
      description: 'We develop high-performing, secure, and scalable websites using the latest technologies. From front-end interfaces to back-end systems, we ensure your website runs smoothly and supports your business goals effectively.',
      color: 'bg-[#e89a4a]'
    },
    {
      title: 'Digital Marketing',
      description: 'We design data-driven digital marketing strategies that increase visibility, engagement, and conversions. Our approach combines SEO, social media, and targeted campaigns to help your brand connect with the right audience.',
      color: 'bg-[#3d5a3d]'
    },
    {
      title: 'Graphic Design',
      description: 'We create visually compelling designs that communicate your brand message with clarity and impact. From logos and branding to marketing materials, our design solutions strengthen your visual identity and presence.',
      color: 'bg-[#e89a4a]'
    }
  ];

  const coreValues = [
    {
      icon: <img src="public\img\mdi_color.png" alt="" />,
      title: 'Creative Excellence',
      description: 'We deliver designs that inspire and perform.',
      color: 'bg-[#3d5a3d]'
    },
    {
      icon:  <img src="public\img\game-icons_sands-of-time.png" alt="" />,
      title: 'Timely Delivery',
      description: 'Every project delivered on schedule with care.',
      color: 'bg-[#e89a4a]'
    },
    {
      icon:  <img src="public\img\icon-park-outline_communication.png" alt="" />,
      title: 'Transparent Communication',
      description: 'We keep you informed at every step.',
      color: 'bg-[#e89a4a]'
    },
    {
      icon:  <img src="public\img\carbon_partnership.png" alt="" />,
      title: 'Long-Term Partnership',
      description: 'Building relationships that grow with your business.',
      color: 'bg-[#3d5a3d]'
    }
  ];

  const team = [
    { name: 'Adilshan', image: '/imgfdb40b1681bd6fe6b645dfe3e0397de370beddee.jpg' },
    { name: 'Sajjad', image: '/img/f993a78f5aa057615615d053929ee1ab22c4e811.jpg' },
    { name: 'Goury Nanda', image: '/img/1eab3c795c3e4574a5a87cae74771ec94600525b.jpg' },
    { name: 'Mhd Rishan', image: '/img/da3125353812437bced2411cd04dc899b918bfd4.jpg' }
  ];

  const Header = () => (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-[#3d5a3d] flex items-center gap-2">
          <img src="/img/991168e39ac3c9b9b1b67f355b84c827f7287cf7.png" alt="" />
        </div>
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
    <section className="relative   text-white py-24 overflow-hidden" style={{backgroundImage:"/img/b38deebd4009757f6e6c36feeeae0ada6abebe8e.jpg"}}>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-20 w-96 h-96 bg-green-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-96 h-96 bg-green-300 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h1 className="text-6xl font-bold mb-4 leading-tight">
          Building Brands Through<br />
          <span className="text-white">Smart Design & Digital</span><br />
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
            At Thaavu.co, we believe in creating meaningful experiences through design, innovation, and value-driven solutions.
          </p>
          <p>
            Our team is passionate about blending creativity with technology to deliver results that truly make an impact. We specialize in [your core services – e.g., graphic design, branding, marketing, web development, UI/UX, digital solutions], helping businesses grow, connect, and stand out in a competitive world.
          </p>
        </div>
      </div>
    </section>
  );

  const ServicesSection = () => (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-5xl font-bold mb-12">
          Our <span className="text-[#e89a4a]">Services</span>
        </h2>
        <div className="space-y-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.color} text-white p-8 rounded-3xl`}
            >
              <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
              <p className="text-sm leading-relaxed opacity-90">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const PortfolioSection = () => (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold mb-12">
          Featured <span className="text-[#e89a4a]">Work</span>
        </h2>
        <div className="grid grid-cols-3 gap-6 mb-16">
          <div className="bg-gradient-to-br from-[#8b4513] to-[#d2691e] rounded-2xl p-8 text-white h-80 flex flex-col justify-between">
   <img src="public\img\87b79ccb8d12a9856e7e8c0c5914f33aa24c0f28.jpg" alt="" />
          </div>
          <div className="bg-gradient-to-br from-[#4b0082] to-[#8b00ff] rounded-2xl p-8 text-white h-80 flex flex-col justify-center items-center text-center">
          <img src="public\img\12acaba109e81ff4a64405283e790a85627873a0.jpg" alt="" />
          </div>
          <div className="bg-gradient-to-br from-[#1a4d2e] to-[#2d6a4f] rounded-2xl p-8 text-white h-80">
          <img src="public\img\aa31ce43ff477698a1e873cb7f2ba8435788bde2.jpg" alt="" />
          </div>
          <div className="bg-gradient-to-br from-[#1a4d2e] to-[#2d6a4f] rounded-2xl p-8 text-white h-80">
          <img src="public\img\50d8027ad5ac2645249dcc36b8ba316004c4dccc.png" alt="" />
          </div>
          <div className="bg-gradient-to-br from-[#1a4d2e] to-[#2d6a4f] rounded-2xl p-8 text-white h-80">
          <img src="public\img\a58f9c185418dfab1a9e4fbd0117cf32c8cd08ff.png" alt="" />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Meet Our <span className="text-[#e89a4a]">Team</span>
          </h2>
          <p className="text-gray-600 text-lg mb-8">The creative minds driving Thaavu.Co forward</p>
          <div className="grid grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center text-6xl mb-4">
                  {member.image}
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
        <div className="grid grid-cols-2 gap-6 mb-16">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className={`${value.color} text-white p-8 rounded-2xl`}
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{value.title}</h3>
              <p className="text-sm opacity-90">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#3d5a3d] text-white rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute right-10 top-1/2 -translate-y-1/2">
            <div className="w-32 h-32  l"><img src="/img/41dfe4c90bf8a09e5e2ea1f61ea82aba403c4ef3.png" alt="" /></div>
          </div>
          <div className="relative z-10">
            <h2 className="text-5xl font-bold mb-4">
              Let's Create Digital<br />
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
          <div className="text-3xl font-bold mb-6 flex items-center gap-2">
 <img src="/img/991168e39ac3c9b9b1b67f355b84c827f7287cf7.png" alt="" />
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-3">Links:</h3>
            <div className="flex gap-6">
              <button onClick={() => setCurrentPage('about')} className="hover:text-[#e89a4a] transition-colors">About</button>
              <button onClick={() => setCurrentPage('services')} className="hover:text-[#e89a4a] transition-colors">Service</button>
              <button onClick={() => setCurrentPage('portfolio')} className="hover:text-[#e89a4a] transition-colors">Portfolio</button>
              <button className="hover:text-[#e89a4a] transition-colors">Contact</button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-2xl">f</span>
            <span className="text-2xl">📷</span>
            <span className="text-2xl">in</span>
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
      case 'about':
        return (
          <>
            <AboutSection />
            <CoreValuesSection />
          </>
        );
      case 'services':
        return <ServicesSection />;
      case 'portfolio':
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
      <Header />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;