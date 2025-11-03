import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // icons for hamburger / close

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-[1340px] mx-auto py-3 sm:py-4 px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-start gap-2"
          aria-label="Thaavu.Co Home"
        >
          <img
            src="/img/991168e39ac3c9b9b1b67f355b84c827f7287cf7.png"
            alt="Thaavu.Co"
            className="sm:h-17 h-10   -ml-4 sm:ml-0 w-[22vh] sm:w-[35vh] object-cover" // ✅ unchanged logo size
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-8 text-black font-medium">
            <h1 className="hover:text-gray-300 cursor-pointer">About</h1>
            <h1 className="hover:text-gray-300 cursor-pointer">Services</h1>
            <h1 className="hover:text-gray-300 cursor-pointer">Portfolio</h1>
          </div>

          <button className="bg-[#164622] text-white px-6 py-2 rounded-md transition-colors">
            Let's Connect
          </button>
        </nav>

          <div className=" sm:hidden block">
              <button className="w-full bg-[#164622] whitespace-nowrap text-white px-6 py-2 rounded-md">
                Let's Connect
              </button>
            </div>
        {/* Hamburger Button (Mobile) */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-[#164622] focus:outline-none"
          aria-label="Open menu"
        >
          <Menu size={32} />
        </button>
      </div>

       {isOpen && (
        <div className="fixed inset-0 z-50">
           <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          />

          {/* Panel */}
          <aside className="absolute right-0 top-0 h-full w-72 bg-white p-6 flex flex-col gap-6 text-black animate-slideInRight">
            <button
              onClick={() => setIsOpen(false)}
              className="self-end text-gray-700"
              aria-label="Close menu"
            >
              <X size={26} />
            </button>

            <nav className="mt-4 flex flex-col gap-6 text-lg font-medium">
              <h1
                onClick={() => setIsOpen(false)}
                className="hover:text-[#164622] cursor-pointer"
              >
                About
              </h1>
              <h1
                onClick={() => setIsOpen(false)}
                className="hover:text-[#164622] cursor-pointer"
              >
                Services
              </h1>
              <h1
                onClick={() => setIsOpen(false)}
                className="hover:text-[#164622] cursor-pointer"
              >
                Portfolio
              </h1>
            </nav>

       
          </aside>
        </div>
      )}
    </header>
  );
};

export default Header;
