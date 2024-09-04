import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const reviews = [
  {
    id: 1,
    name: 'John Doe',
    description: 'Signing up for Mindler, and meeting and interacting with their experienced team was one of the decisions I made.',
    image: '/images/review.png',
  },
  {
    id: 2,
    name: 'Jane Smith',
    description: 'Amazing experience with this product!',
    image: '/images/review.png',
  },
  {
    id: 3,
    name: 'Alex Johnson',
    description: 'Customer support was very helpful.',
    image: '/images/review.png',
  },
  {
    id: 4,
    name: 'Maria Williams',
    description: 'Quality is top-notch, will buy again!',
    image: '/images/review.png',
  },
  {
    id: 5,
    name: 'David Brown',
    description: 'Fast delivery and excellent product!',
    image: '/images/review.png',
  },
];

const UserReview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? reviews.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === reviews.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="container mx-auto px-4 py-8">
        <h2 className="font-bold text-4xl text-center p-5">
            Students <span className='text-purple-800'>Reviews</span>
        </h2>
      <div className="hidden md:grid md:grid-cols-3 gap-6 p-16  ">
        {reviews.map((review) => (
          <div key={review.id} className="container flex bg-[#FFF2F2] rounded-2xl shadow-md p-8">
            <img
              src={review.image}
              alt={review.name}
              className="w-16 h-16 rounded-full object-cover mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold">{review.name}</h3>
              <p className="text-gray-600">{review.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Slider */}
      <div className="md:hidden relative">
        <div className="flex justify-center items-center">
          <FaArrowLeft size={20}
            className="text-purple-500 cursor-pointer absolute left-0 transform -translate-y-1/2 top-1/2"
            onClick={prevSlide}
          />
          <div className="flex bg-white rounded-lg shadow-md p-8 w-full justify-center">
            <img
              src={reviews[currentIndex].image}
              alt={reviews[currentIndex].name}
              className="w-16 h-16 rounded-full object-cover mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold">{reviews[currentIndex].name}</h3>
              <p className="text-gray-600">{reviews[currentIndex].description}</p>
            </div>
          </div>
          <FaArrowRight size={20}
            className="text-purple-500 cursor-pointer absolute right-0 transform -translate-y-1/2 top-1/2"
            onClick={nextSlide}
          />
        </div>
      </div>
    </div>
  );
};

export default UserReview;
