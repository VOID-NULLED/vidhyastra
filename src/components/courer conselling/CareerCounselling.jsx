import React, { useState } from 'react';
import { FaAngleLeft ,FaAngleRight } from "react-icons/fa";

const programs = [
  {
    title: 'High School Students',
    image: '/images/counselling.png',
    color: 'bg-yellow-200',
  },
  {
    title: 'High Sec. Students',
    image: '/images/counselling1.png',
    color: 'bg-green-200',
  },
  {
    title: 'College and Graduates',
    image: '/images/counselling3.png',
    color: 'bg-orange-200',
  },
];

const ProgramCard = ({ title, image, color }) => (
  <div className="flex flex-col items-center p-4">
    <div className={`rounded-full p-2 mb-4`}>
      <img src={image} alt={title} className="w-32 h-32 rounded-full object-cover" />
    </div>
    <h3 className="text-purple-600 text-lg font-semibold mb-2">{title}</h3>
    <p className="text-center text-sm">
      Advanced assessment & personalized guidance to help you find the right careers and subjects that align you to the right careers.
    </p>
  </div>
);

const CareerCounselling = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % programs.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + programs.length) % programs.length);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-center mb-2">
        <span className="text-purple-600 text-3xl font-bold">Career Counselling</span>
      </h1>
      <h2 className="text-center text-2xl font-semibold mb-8">Programs for</h2>

      {/* Desktop view */}
      <div className="hidden md:flex justify-center space-x-8">
        {programs.map((program, index) => (
          <div key={index} className="w-1/3">
            <ProgramCard {...program} />
          </div>
        ))}
      </div>

      {/* Mobile slider view */}
      <div className="md:hidden relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {programs.map((program, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <ProgramCard {...program} />
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
        >
          <FaAngleLeft className="w-6 h-6 text-purple-600" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
        >
          <FaAngleRight className="w-6 h-6 text-purple-600" />
        </button>
      </div>
    </div>
  );
};

export default CareerCounselling;