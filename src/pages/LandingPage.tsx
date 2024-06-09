import React from 'react';
import AboutUs from '../components/AboutUs';
import Service from '../components/Service';
import Gallery from '../components/Gallery';
import ContactUs from '../components/ContactUs';
import HeroSlider from '../components/HeroSlider';

const LandingPage: React.FC = () => {
  return (
    <div className="container-home-page bg-gray-800 min-h-screen">
      <HeroSlider />

      <div className="md:px-10">
        <AboutUs />
        <Service />
        <Gallery />
        <ContactUs />
      </div>
    </div>
  );
};

export default LandingPage;
