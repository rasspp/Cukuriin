import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed z-50 top-0 left-0 w-full border-b border-teal-600 md:px-10 bg-gray-800 inside-neu p-4">
      <div className="container relative mx-auto flex justify-between items-center">
        <Link to="/" className="bg-clip-text bg-gradient-to-r from-teal-400 to-red-500 text-2xl text-transparent font-bold">
          Barber Any<span className="bg-clip-text bg-gradient-to-r from-red-500 to-orange-400 text-transparent">where</span>
        </Link>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        <ul className={`md:flex space-x-4 ${isOpen ? "absolute grid grid-cols-1 top-20 right-0 flex-wrap gap-y-5 transition-all" : "hidden"} md:block`}>
          <li>
            <a
              href="#about-us"
              className="hover:scale-95 text-main main-border text-nowrap inside-neu-input inside-neu-active inside-neu-hover rounded-sm px-3 py-1 font-semibold"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#service"
              className="hover:scale-95 text-main main-border inside-neu-input inside-neu-active inside-neu-hover rounded-sm px-3 py-1 font-semibold"
            >
              Service
            </a>
          </li>
          <li>
            <a
              href="#gallery"
              className="hover:scale-95 text-main main-border inside-neu-input inside-neu-active inside-neu-hover rounded-sm px-3 py-1 font-semibold"
            >
              Gallery
            </a>
          </li>
          <li>
            <a
              href="#barbers"
              className="hover:scale-95 text-main main-border inside-neu-input inside-neu-active inside-neu-hover rounded-sm px-3 py-1 font-semibold"
            >
              Barbers
            </a>
          </li>
          <li>
            <a
              href="#contact-us"
              className="hover:scale-95 text-main main-border inside-neu-input inside-neu-active inside-neu-hover rounded-sm px-3 py-1 font-semibold"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
