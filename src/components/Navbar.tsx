import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed z-50 top-0 left-0 w-full border-b md:px-10 bg-gray-800 inside-neu p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-blue-300 text-2xl font-bold">
          Cukur<span className="text-orange-400">ii</span>n
        </Link>
        <ul className="flex space-x-4">
          <li>
            <a
              href="#about-us"
              className="text-white border inside-neu-input rounded-sm px-3 py-1 font-semibold"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#service"
              className="text-white border inside-neu-input rounded-sm px-3 py-1 font-semibold"
            >
              Service
            </a>
          </li>
          <li>
            <a
              href="#gallery"
              className="text-white border inside-neu-input rounded-sm px-3 py-1 font-semibold"
            >
              Gallery
            </a>
          </li>
          <li>
            <a
              href="#contact-us"
              className="text-white border inside-neu-input rounded-sm px-3 py-1 font-semibold"
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
