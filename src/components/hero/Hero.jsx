import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init();
  },[])
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-16">
      <div className=" mx-auto px-4 py-12 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12 text-center lg:text-left">
          <h2 className="text-2xl font-bold mb-2">Vidyastra Helps to</h2>
          <h1 className="text-4xl font-bold mb-4">
          Leveraging Technology for{' '}
            <span className="text-purple-500">Career Guidance</span>
          </h1>
          <p className="mb-6 text-gray-600">
            Access extensive information on career options, skills, education, and job trends. 
            Aligning education with market demands through
          </p>
          <button className="bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-600 transition duration-300">
            Get Started
          </button>
        </div>
        <div className="lg:w-1/2 flex justify-center">
        <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
          <img 
            src="/images/hero.png" 
            alt="Career Guidance Illustration" 
            className="w-full max-w-[550px] h-auto rounded-lg"
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
