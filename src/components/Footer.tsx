import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 py-8 md:px-10 border-t border-teal-600 pt-4 inside-neu">
      <div className="container mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-gray-400 leading-5 ">
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2 text-white/90">Tentang Kami</h3>
          <p className="mb-2">
            Cukuriin adalah barber shop yang berdedikasi memberikan gaya rambut
            terbaik dengan pelayanan ramah dan profesional.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2 text-white/90">
            Jam Operasional
          </h3>
          <p className="mb-1">Senin - Jumat: 09:00 - 20:00</p>
          <p className="mb-1">Sabtu: 10:00 - 16:00</p>
          <p className="mb-1">Minggu: Tutup</p>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2 text-white/90">Dibuat Oleh</h3>
          <p className="mb-2">Dev: Ridho Akbar</p>
          <p className="mb-2">Email: ridhotherass@example.com</p>
          <p className="mb-2 mt-5">Portofolio: <a href="#barbers" className="ml-5 cursor-pointer inside-neu-input inside-neu-hover main-border px-3 rounded-md py-1"> rassp.my.id</a></p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2 text-white/90">Hubungi Kami</h3>
          <p className="mb-1">Talang Kelapa, Palembang, Indonesia</p>
          <p className="mb-1">Phone: +62 878 6320 7834</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
