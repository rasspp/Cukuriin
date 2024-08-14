import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 py-8 md:px-10 border-t border-teal-600 pt-4 inside-neu">
      <div className="container mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-gray-400 leading-5">
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2 text-white/90">About Us</h3>
          <p className="mb-2">
            <div className="bg-clip-text bg-gradient-to-r from-teal-400 to-red-500 text-transparent font-bold">BarberAny<span className="bg-clip-text bg-gradient-to-r from-red-500 to-orange-400 text-transparent">where</span></div>
            is a barber shop dedicated to providing the best hairstyles with
            friendly and professional service.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2 text-white/90">
            Opening Hours
          </h3>
          <p className="mb-1">Monday - Friday: 09:00 - 20:00</p>
          <p className="mb-1">Saturday: 10:00 - 16:00</p>
          <p className="mb-1">Sunday: Closed</p>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2 text-white/90">
            Created By
          </h3>
          <p className="mb-2">Dev: Ridho Akbar</p>
          <p className="mb-2">Email: ridhotherass@gmail.com</p>
          <p className="mb-2 mt-5">
            Portfolio:{" "}
            <a
              href="#barbers"
              className="ml-5 cursor-pointer inside-neu-input inside-neu-hover main-border px-3 rounded-md py-1 bg-clip-text bg-gradient-to-r from-teal-400 to-red-500 text-transparent font-bold"
            >
              rassp
              <span className="bg-clip-text bg-gradient-to-r from-red-500 to-orange-400 text-transparent">.my.id</span>
            </a>
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2 text-white/90">
            Contact Us
          </h3>
          <p className="mb-1">Talang Kelapa, Palembang, Indonesia</p>
          <p className="mb-1">Phone: +62 878 6320 7834</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
