import React from "react";

export const AboutUs: React.FC = () => {
  const images = [
    "https://images.unsplash.com/photo-1596728325488-58c87691e9af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGJhcmJlcnxlbnwwfHwwfHx8Mg%3D%3D",
    "https://images.unsplash.com/photo-1619233543640-af09c173763b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTd8fGJhcmJlcnxlbnwwfHwwfHx8Mg%3D%3D",
    "https://images.unsplash.com/photo-1635273051937-a0ddef9573b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGJhcmJlcnxlbnwwfHwwfHx8Mg%3D%3D",
    "https://images.unsplash.com/photo-1640301133857-c4bc5789c1bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGJhcmJlcnxlbnwwfHwwfHx8Mg%3D%3D",
  ];

  return (
    <section
      id="about-us"
      className="about-us min-h-screen pb-12 pt-20 bg-gray-800"
    >
      <div className="md:max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-white mb-6">
          <span className="bg-clip-text bg-gradient-to-r from-teal-400 to-red-500 text-transparent font-bold">
            About
             <span className="bg-clip-text bg-gradient-to-r from-red-500 to-orange-400 text-transparent">Us</span>
          </span>
        </h2>

        <div className="container w-full grid md:grid-cols-2 mt-20">
          <div className="image relative w-full h-96 md:p-10 md:overflow-hidden -rotate-12 scale-[70%] sm:scale-75 md:scale-100 sm:hover:scale-100 *:transition-all *:duration-500 *:absolute *:border *:border-orange-300 hover:*:scale-125 ">
            <img
              className="inside-neu h-52 -left-[4.3rem] hover:left-[0rem] -top-4 hover:top-0 z-10 hover:main-border hover:brightness-125 rotate-12 hover:z-30"
              src={`${images[0]}`}
              alt={`left`}
              loading="lazy"
            />
            <img
              className="inside-neu h-44 left-[8.5rem] -bottom-9 hover:bottom-0 z-10 hover:main-border hover:saturate-200 rotate-12 hover:z-30"
              src={`${images[1]}`}
              alt={`bottom`}
              loading="lazy"
            />
            <img
              className="inside-neu h-72 left-[15.9rem] -top-10 z-20 hover:main-border rotate-12 hover:z-30"
              src={`${images[2]}`}
              alt={`center`}
              loading="lazy"
            />
            <img
              className="inside-neu h-72 left-[27rem] hover:left-[20rem] bottom-0 z-10 hover:main-border rotate-12 hover:z-30"
              src={`${images[3]}`}
              alt={`right`}
              loading="lazy"
            />
          </div>

          <div className="w-full flex flex-col items-center justify-center text-center mt-32 md:mt-0 text-white px-10">
            <p className="w-10/12 text-xl text-center text-gray-300 mb-12 -mt-20">
              Welcome to Barber-Anywhere, where style and expertise meet. We are
              committed to providing the best haircuts with friendly and
              professional service. Every customer is our priority, and we are
              proud to be part of your style transformation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
