import React from 'react';

const Banner = () => {
  return (
    <div 
      className="relative text-white rounded-lg overflow-hidden h-auto md:h-[23vw] flex items-center justify-center"
      style={{
        backgroundImage: 'url(/images/Rectangle43.png)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay for purple background color */}
      <div className="absolute inset-0 bg-purple-500 opacity-75"></div>

      <div className="relative z-10 container mx-auto px-4 py-6 md:py-8 lg:py-10">
        <div className="flex flex-col md:flex-row items-center justify-center p-4 md:p-6">
          <div className="mb-6 md:mb-0 md:mr-6 md:w-1/2 text-center md:text-left lg:pl-8 lg:pr-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Take the first step towards career clarity!
            </h2>
            <p className="text-base md:text-lg mb-4">
              Discover your best-fit career with the world's best career assessment.
            </p>
            <button className="bg-white text-purple-500 font-semibold py-2 px-4 rounded-full hover:bg-purple-100 transition duration-300">
              Get Started
            </button>
          </div>
          <div className="flex justify-center md:w-1/2">
            <div 
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <img 
                src="/images/banner.png"
                alt="Career Clarity" 
                className="w-full h-auto max-w-[200px] md:max-w-[300px] rounded-lg" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
