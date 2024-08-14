import React, { useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const barbersData = [
  {
    barber: {
      name: "Michael Johnson",
      image: "./barber1.png",
    },
    missionStatement: "Providing the best service and trendy hairstyles.",
    skills: ["Fade", "Undercut", "Trim"],
  },
  {
    barber: {
      name: "Emily Davis",
      image: "./barber2.png",
    },
    missionStatement: "Ensuring customer satisfaction with satisfying haircut results.",
    skills: ["Buzz Cut", "Pompadour", "Beard Trim"],
  },
  {
    barber: {
      name: "Daniel Brown",
      image: "./barber3.png",
    },
    missionStatement: "Creating hairstyles that match your personality.",
    skills: ["Crew Cut", "Mullet", "Flat Top"],
  },
  {
    barber: {
      name: "Sophia Wilson",
      image: "./barber4.png",
    },
    missionStatement: "Providing modern and classic haircuts with style and precision.",
    skills: ["Mohawk", "Quiff", "Taper"],
  },
];

const Barbers: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedBarber, setSelectedBarber] = useState<string | null>(null);

  const handleWhatsAppClick = (barberName: string) => {
    setSelectedBarber(barberName);
    setModalVisible(true);
  };

  const handleSendWhatsApp = () => {
    if (selectedBarber) {
      const message = `Hello, I am interested in using the services of ${selectedBarber}. Could you please provide more information? Thank you!`;
      const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
      setModalVisible(false);
    }
  };

  return (
    <section
      id="barbers"
      className="gallery min-h-screen pb-12 pt-20 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800"
    >
      <div className="md:max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8 ">
        <h2 className="text-4xl font-extrabold text-white mb-6">
          <span className="bg-clip-text bg-gradient-to-r from-teal-400 to-red-500 text-transparent font-bold">
            Our Professional
            <span className="bg-clip-text bg-gradient-to-r from-red-500 to-orange-400 text-transparent">Barbers</span>
          </span>
        </h2>
        <p className="text-xl text-center text-gray-300 mb-12">
          Get to know our professional barbers and choose the one that suits your style.
        </p>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {barbersData.map((barber, index) => (
            <SwiperSlide key={`${barber.barber.name}-${index}`}>
              <div className="card h-full inside-neu-inset hover:inside-neu p-6 text-gray-300 transform transition duration-500 hover:scale-105">
                <div className="flex flex-col items-center">
                  <div className="relative mb-4">
                    <img
                      src={barber.barber.image}
                      alt={barber.barber.name}
                      className="w-24 h-24 rounded-full border-4 border-orange-300 inside-neu"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 to-gray-900 opacity-50"></div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    {barber.barber.name}
                  </h3>
                  <p className="text-sm mb-4 text-center">{barber.missionStatement}</p>
                  <div className="text-left w-full">
                    <h4 className="text-lg font-semibold mb-2 text-center">
                      Skills:
                    </h4>
                    <div className="flex flex-wrap justify-center space-x-2">
                      {barber.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="inline-block inside-neu inside-neu-hover text-main text-xs font-semibold mr-2 mb-2 px-3 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={() => handleWhatsAppClick(barber.barber.name)}
                    className="mt-4 px-4 py-2 font-semibold bg-gray-800 inside-neu inside-neu-active inside-neu-hover text-main rounded-lg transition-colors duration-300"
                  >
                    Use Service
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {modalVisible && selectedBarber && (
        <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-4 text-center border-b pb-2">Confirm Message</h3>
            <p className="text-gray-300 mb-4 w-80">
              {`Hello, I am interested in using the services of ${selectedBarber}. Could you please provide more information? Thank you!`}
            </p>
            <div className="grid grid-cols-2 gap-5 *:text-white *:rounded-lg *:px-4 *:py-2
">
              <button
                onClick={() => setModalVisible(false)}
                className="bg-red-500 "
              >
                Cancel
              </button>
              <button
                onClick={handleSendWhatsApp}
                className="bg-green-500 "
              >
                Send WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Barbers;
