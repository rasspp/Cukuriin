import React from "react";

export const AboutUs: React.FC = () => {
  const images = [
    'https://images.unsplash.com/photo-1596728325488-58c87691e9af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGJhcmJlcnxlbnwwfHwwfHx8Mg%3D%3D',
    'https://images.unsplash.com/photo-1619233543640-af09c173763b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTd8fGJhcmJlcnxlbnwwfHwwfHx8Mg%3D%3D',
    'https://images.unsplash.com/photo-1635273051937-a0ddef9573b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGJhcmJlcnxlbnwwfHwwfHx8Mg%3D%3D',
    'https://images.unsplash.com/photo-1640301133857-c4bc5789c1bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGJhcmJlcnxlbnwwfHwwfHx8Mg%3D%3D'
  ];

  return (
    <section id="about-us" className="about-us min-h-screen pb-12 pt-20 bg-gray-800">
        <div className="md:max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-white mb-10">Tentang Kami</h2>

          <div className="container w-full grid grid-cols-2">
            <div className="image relative w-full h-96 p-10 overflow-hidden -rotate-12">
              <img className="absolute border inside-neu h-52 -left-[4.3rem] -top-4 z-10 hover:border-blue-400 hover:contrast-125  hover:origin-bottom-left rotate-12 transition-all hover:z-30" src={`${images[0]}`} alt={`hai`} />
              <img className="absolute border inside-neu h-44 left-32 -bottom-9 z-10 hover:border-blue-400 hover:contrast-125 hover:saturate-200 hover:origin-bottom-right rotate-12 transition-all hover:z-30" src={`${images[1]}`} alt={`hai`} />
              <img className="absolute border inside-neu h-72 right-32 -top-10 z-20 hover:border-blue-400 hover:contrast-125 hover:sepia hover:origin-top-left rotate-12 transition-all hover:z-30" src={`${images[2]}`} alt={`hai`} />
              <img className="absolute border inside-neu h-72 -right-12 bottom-0 z-10 hover:border-blue-400 hover:contrast-125 hover:saturate-200 hover:origin-top-left rotate-12 transition-all hover:z-30" src={`${images[3]}`} alt={`hai`} />
            </div>

            <p className="text-lg text-gray-400 p-7">
              Selamat datang di Cukuriin, tempat di mana gaya dan keahlian bertemu. 
              Kami berkomitmen untuk memberikan potongan rambut terbaik dengan 
              layanan yang ramah dan profesional. Setiap pelanggan adalah prioritas 
              kami, dan kami bangga menjadi bagian dari transformasi gaya Anda.
            </p>
          </div>
        </div>
    </section>
  );
};

export default AboutUs;
