import React from "react";

const servicesData = [
  {
    style: "Stylish Haircut",
    price: "Rp 30,000",
    time: "30 minutes",
  },
  {
    style: "Scalp Treatment",
    price: "Rp 40,000",
    time: "45 minutes",
  },
  {
    style: "Hair Coloring",
    price: "Rp 50,000",
    time: "60 minutes",
  },
  {
    style: "Beard Shaving",
    price: "Rp 25,000",
    time: "20 minutes",
  },
  {
    style: "Head Massage",
    price: "Rp 35,000",
    time: "30 minutes",
  },
  {
    style: "Hair Wash",
    price: "Rp 20,000",
    time: "15 minutes",
  },
  {
    style: "Hair Styling",
    price: "Rp 30,000",
    time: "25 minutes",
  },
  {
    style: "Bald Shaving",
    price: "Rp 50,000",
    time: "30 minutes",
  },
  {
    style: "Facial",
    price: "Rp 60,000",
    time: "45 minutes",
  },
  {
    style: "Hair Spa",
    price: "Rp 70,000",
    time: "60 minutes",
  }
];

const Service: React.FC = () => {
  return (
    <section
      id="service"
      className="service min-h-screen rounded-sm pb-12 pt-20 bg-gray-800"
    >
      <div className="md:max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-white mb-6">
          <span className="bg-clip-text bg-gradient-to-r from-teal-400 to-red-500 text-transparent font-bold">
            Our 
            <span className="bg-clip-text bg-gradient-to-r from-red-500 to-orange-400 text-transparent">Services</span>
          </span>
        </h2>
        <p className="text-xl text-center text-gray-300 mb-12">
          We offer a variety of services to meet your needs with the best quality.
        </p>
        <div className="w-full grid grid-cols-2 md:grid-cols-4 px-2 gap-6">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="relative h-32 inside-neu inside-neu-hover inside-neu-active rounded-sm p-6 transition-shadow hover:scale-95"
            >
              <div className=" absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 z-20 flex flex-col justify-center items-center ">
                <h2 className="w-10/12 md:text-xl font-semibold text-white/90 mb-2 ">
                  {service.style}
                </h2>
                <p className="text-sm md:text-base  text-orange-300 ">{service.price}</p>
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
