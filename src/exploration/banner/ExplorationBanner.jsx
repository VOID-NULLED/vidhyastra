import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ExplorationBanner = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-16"
      style={{
        backgroundImage: 'url("/images/exploration/banner.png"), url("/images/Rectangle2.png"), linear-gradient(to bottom, rgba(255,255,255,0.8), #f3f4f6)',
        backgroundSize: 'fit, cover, 100%',
        backgroundRepeat: 'no-repeat, no-repeat',
        backgroundPosition: 'center top, top',
      }}
    >
      <div className="mx-auto px-4 py-12 flex flex-col items-center text-center">
        <div className="w-full mb-8">
          <h2 className="text-2xl font-bold mb-2">Vidyastra Helps to</h2>
          <h1 className="text-4xl font-bold mb-4">
            Leveraging Technology for{' '}
            <br/>
            <span className="text-purple-500">Career Guidance</span>
          </h1>
          <p className="mb-6 text-gray-600">
            Access extensive information on career options, skills,<br/> education, and job trends. 
            Aligning education with<br/> market demands through
          </p>
          <button className="bg-purple-500 text-white text-xl font-bold px-6 py-2 rounded-full hover:bg-purple-600 transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExplorationBanner;
