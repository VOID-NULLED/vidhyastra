import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CarrerClarityBanner = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="bg-white py-16">
      <h1 className="text-3xl font-bold text-purple-500 mb-6 text-center">
        Unlock Your Potential{" "}
        <span className="text-black">with Career Counselling</span>
      </h1>
      <div  className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side: Text Content */}
        <div data-aos="fade-up-right" data-aos-duration="1500" className="md:w-1/2 space-y-6 p-16">
          <p className="text-gray-600">
            Our career counselling services provide improved career clarity and
            support, helping you make informed decisions about your future
            career clarity and support, helping you gtdrergsjgtrrsxdfxhdf.
          </p>
          <div className="flex grid-cols-1 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-purple-500 mb-4">
                Career Clarity
              </h2>
              <p className="text-gray-600">
                Get personalized guidance to explore various career paths and
                find your true calling.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-purple-500 mb-4">
                Expert Mentorship
              </h2>
              <p className="text-gray-600">
                Connect with experienced mentors who can provide valuable
                insights and advice for your career journey.
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side: Image */}
        <div data-aos="fade-down-left" data-aos-duration="2000"
          className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
        >
          <img
            src="/images/carrerbooks.png"
            alt="Career Counselling"
            className="w-50 h-50"
          />
        </div>
      </div>
    </div>
  );
};

export default CarrerClarityBanner;
