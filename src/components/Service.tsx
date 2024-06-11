import React from "react";

const servicesData = [
  {
    style: "Potong Rambut Bergaya",
    price: "Rp 30.000",
    time: "30 menit",
  },
  {
    style: "Perawatan Kulit Kepala",
    price: "Rp 40.000",
    time: "45 menit",
  },
  {
    style: "Pewarnaan Rambut",
    price: "Rp 50.000",
    time: "60 menit",
  },
  {
    style: "Cukur Jenggot",
    price: "Rp 25.000",
    time: "20 menit",
  },
  {
    style: "Pijat Kepala",
    price: "Rp 35.000",
    time: "30 menit",
  },
  {
    style: "Cuci Rambut",
    price: "Rp 20.000",
    time: "15 menit",
  },
  {
    style: "Styling Rambut",
    price: "Rp 30.000",
    time: "25 menit",
  },
  {
    style: "Shaving Botak",
    price: "Rp 50.000",
    time: "30 menit",
  },
  {
    style: "Facial",
    price: "Rp 60.000",
    time: "45 menit",
  },
  {
    style: "Hair Spa",
    price: "Rp 70.000",
    time: "60 menit",
  }
  // Tambahkan layanan lainnya jika diperlukan
];

const Service: React.FC = () => {
  return (
    <section
      id="service"
      className="service min-h-screen rounded-sm pb-12 pt-20 bg-gray-800"
    >
      <div className="md:max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-white mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
            Pelayanan Kami
          </span>
        </h2>
        <p className="text-xl text-center text-gray-300 mb-12">
          Kami menawarkan berbagai layanan untuk memenuhi kebutuhan Anda dengan
          kualitas terbaik.
        </p>
        <div className="w-full grid grid-cols-2 md:grid-cols-4 px-2 gap-6">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="relative h-32 inside-neu inside-neu-hover inside-neu-active rounded-sm p-6 transition-shadow "
            >
              <div className=" absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 z-20 flex flex-col justify-center items-center ">
                <h2 className="w-10/12 md:text-xl font-semibold text-white/90 mb-2 ">
                  {service.style}
                </h2>
                <p className="text-sm md:text-base  text-blue-300 ">{service.price}</p>
                <p className="text-sm  text-gray-300">{service.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
