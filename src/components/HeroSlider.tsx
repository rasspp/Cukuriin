import React from "react";
import {
  Navigation,
  Autoplay,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const HeroSlider: React.FC = () => {
  const images = [
    "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGJhcmJlcnxlbnwwfHwwfHx8Mg%3D%3D",
    "https://images.unsplash.com/photo-1520338661084-680395057c93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhcmJlcnxlbnwwfDB8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_photo-1661381025863-4d740c289dd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGJhcmJlcnxlbnwwfDB8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1577378187001-ed44409a0d44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGJhcmJlcnxlbnwwfDB8MHx8fDA%3D",
  ];
  return (
    <section className="relative w-full h-screen hero-slider">
      <Swiper
        className="h-full"
        modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 2000 }}
        // navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <div
            className={`h-full w-full bg-cover bg-center bg-blue-500)`}
            style={{
              backgroundImage: `url('${images[0]}')`,
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`h-full w-full bg-cover bg-center bg-blue-500)`}
            style={{
              backgroundImage: `url('${images[1]}')`,
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`h-full w-full bg-cover bg-center bg-blue-500 )`}
            style={{
              backgroundImage: `url('${images[2]}')`,
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`h-full w-full bg-cover bg-center bg-blue-500)`}
            style={{
              backgroundImage: `url('${images[3]}')`,
            }}
          ></div>
        </SwiperSlide>
      </Swiper>

      <div className="absolute hero-content top-0 w-full h-full z-10 bg-gradient-to-r from-gray-800 to-transparent ">
        <div className="mt-44 w-11/12 ml-[3%] md:ml-40 h-8/12  md:w-6/12 rounded-2xl p-10">
          <h2 className="text-6xl font-bold tracking-wide text-blue-400">
            Cukur<span className="text-yellow-600">ii</span>n
          </h2>
          <p className="text-lg pt-3 mb-5 text-blue-200">
            Nikmati pengalaman mencukur terbaik yang pernah ada, kami siap
            membantu membuat momen spesial Anda lebih berkesan.
          </p>
          <a
            href="#service"
            className="py-2 px-5 text-white rounded-md border bg-gray-800 inside-neu-input inside-neu-hover w-fit shadow-xl scroll-smooth"
          >
            Cek Layanan Kami
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
