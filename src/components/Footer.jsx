import { Facebook, Instagram, Linkedin } from "lucide-react";
import React from "react";

const Footer = ({ setCurrentPage }) => (
  <footer className="bg-[#164622] text-white py-12">
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-8">
        <button
          onClick={() => setCurrentPage("home")}
          className="flex items-center gap-2 hover:opacity-90 transition-opacity"
          aria-label="Thaavu.Co Home"
        >
          <img
          src="/img/Thaavu PNG 1 (1).png"
            alt="Thaavu.Co"
          className="h-17 w-[35vh] object-cover"
          />
        </button>
        <div className="mb-4 mt-6">
          <h3 className="text-lg font-poppins font-normal mb-3">Links:</h3>
          <div className="flex gap-6">
            <button onClick={() => setCurrentPage("about")} className="hover:text-[#e89a4a] font-poppins font-normal  transition-colors">About</button>
            <button onClick={() => setCurrentPage("services")} className="hover:text-[#e89a4a]  font-poppins font-normal  transition-colors">Service</button>
            <button onClick={() => setCurrentPage("portfolio")} className="hover:text-[#e89a4a] font-poppins font-normal  transition-colors">Portfolio</button>
            <button className="hover:text-[#e89a4a] transition-colors">Contact</button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="text-2xl hover:text-[#e89a4a] transition-colors"><Facebook/></a>
          <a href="#" className="text-2xl hover:text-[#e89a4a] transition-colors"><Instagram/></a>
          <a href="#" className="text-2xl hover:text-[#e89a4a] transition-colors"><Linkedin/></a>
          <span className="ml-4 font-poppins font-normal ">Thaavu.co</span>
        </div>
      </div>
      <div className="text-center text-sm border-t font-poppins font-normal  border-[#D9D9D9] pt-6">
        © 2025 Thaavu.Co — All Rights Reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
