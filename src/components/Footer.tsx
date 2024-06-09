import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 py-8 md:px-10 border-t border-white pt-4 inside-neu">
      <div className="container mx-auto grid grid-cols-4 gap-4 text-gray-400 leading-5 ">
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2 text-white">Tentang Kami</h3>
          <p className="mb-2">
            Cukuriin adalah barber shop yang berdedikasi memberikan gaya rambut
            terbaik dengan pelayanan ramah dan profesional.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2 text-white">
            Jam Operasional
          </h3>
          <p className="mb-1">Senin - Jumat: 09:00 - 20:00</p>
          <p className="mb-1">Sabtu: 10:00 - 16:00</p>
          <p className="mb-1">Minggu: Tutup</p>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2 text-white">Dibuat Oleh</h3>
          <p className="mb-2">Dev: Ridho Akbar</p>
          <p className="mb-2">Email: ridhotherass@example.com</p>
          <p className="mb-2">Portofolio: rassp.my.id</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2 text-white">Hubungi Kami</h3>
          <p className="mb-1">Talang Kelapa, Palembang, Indonesia</p>
          <p className="mb-1">Phone: +62 878 6320 7834</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
