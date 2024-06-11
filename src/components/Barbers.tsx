import React from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const barbersData = [
    {
        barber: {
            name: 'John Doe',
            image: 'https://via.placeholder.com/150',
        },
        visiMisi: 'Memberikan pelayanan terbaik dan gaya rambut yang trendi.',
        skills: ['Fade', 'Undercut', 'Trim']
    },
    {
        barber: {
            name: 'Jane Smith',
            image: 'https://via.placeholder.com/150',
        },
        visiMisi: 'Menjaga kepuasan pelanggan dengan hasil potongan yang memuaskan.',
        skills: ['Buzz Cut', 'Pompadour', 'Beard Trim']
    },
    {
        barber: {
            name: 'Sam Johnson',
            image: 'https://via.placeholder.com/150',
        },
        visiMisi: 'Menciptakan gaya rambut yang sesuai dengan kepribadian Anda.',
        skills: ['Crew Cut', 'Mullet', 'Flat Top']
    },
    {
        barber: {
            name: 'Alice Brown',
            image: 'https://via.placeholder.com/150',
        },
        visiMisi: 'Memberikan potongan rambut modern dan klasik.',
        skills: ['Mohawk', 'Quiff', 'Taper']
    },
    // Tambahkan barber lainnya jika diperlukan
];

const Barbers: React.FC = () => {
    const handleWhatsAppClick = (barberName: string) => {
        const message = `Halo, saya ingin menggunakan jasa ${barberName}.`;
        const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <section id="barbers" className="gallery min-h-screen pb-12 pt-20 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800">
            <div className="md:max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-extrabold text-white mb-6">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
                        Barbers Profesional Kami
                    </span>
                </h2>
                <p className="text-xl text-center text-gray-300 mb-12">
                    Kenali barber profesional kami dan pilih yang sesuai dengan gaya Anda.
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
                            <div className="card inside-neu-inset hover:inside-neu p-6 text-gray-300 transform transition duration-500 hover:scale-105">
                                <div className="flex flex-col items-center">
                                    <div className="relative mb-4">
                                        <img
                                            src={barber.barber.image}
                                            alt={barber.barber.name}
                                            className="w-24 h-24 rounded-full border-4 border-gray-300 inside-neu"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 opacity-50"></div>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{barber.barber.name}</h3>
                                    <p className="text-sm mb-4 text-center">{barber.visiMisi}</p>
                                    <div className="text-left w-full">
                                        <h4 className="text-lg font-semibold mb-2 text-center">Skills:</h4>
                                        <div className="flex flex-wrap justify-center space-x-2">
                                            {barber.skills.map((skill, skillIndex) => (
                                                <span key={skillIndex} className="inline-block inside-neu inside-neu-hover text-main text-xs font-semibold mr-2 mb-2 px-3 py-1 rounded-full">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => handleWhatsAppClick(barber.barber.name)}
                                        className="mt-4 px-4 py-2 font-semibold bg-gray-800 inside-neu inside-neu-active inside-neu-hover text-main rounded-lg transition-colors duration-300"
                                    >
                                        Pakai Jasa 
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Barbers;
