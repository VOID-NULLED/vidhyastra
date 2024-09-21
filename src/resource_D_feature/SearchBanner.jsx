import React from 'react';

const SearchBanner = () => {
  return (
    <div className="bg-purple-500 h-full flex flex-col items-center justify-center">
      {/* Heading at the top, centered */}
      <h1 className="text-4xl font-bold text-center text-white pt-16">
        At your fingertips: A career path curated for you
      </h1>
      
      {/* Main content section with left and right side alignment */}
      <div className="flex flex-col md:flex-row w-full justify-center items-center">
        {/* Left content (search and button) */}
        <div className="md:w-1/3  md:mb-0 flex flex-col justify-center">
          <p className="text-white mb-16 text-xl text-center md:text-left">
            Want to start a new dream career? Successfully build your startup? Itching to
            learn high-demand skills? Work smart with an online mentor by your side.
          </p>
          <div className="flex mb-4">
            <input
              type="text"
              placeholder="Search by company, skills or role"
              className="flex-grow border border-gray-300 rounded-l-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <button className="bg-purple-600 text-white px-6 py-2 rounded-r-full hover:bg-purple-700 transition duration-300">
              Find Mentors
            </button>
          </div>
          <button className="w-full bg-purple-600 text-white py-2 rounded-full hover:bg-purple-700 transition duration-300">
            Get Started
          </button>
        </div>

        {/* Right content (image) */}
        <div className="md:w-2/5 flex justify-center md:justify-end items-center">
          <img src="/images/computergirl.png" alt="Illustration of people" className="w-full h-auto max-w-xs md:max-w-sm" />
        </div>
      </div>
    </div>
  );
};

export default SearchBanner;
