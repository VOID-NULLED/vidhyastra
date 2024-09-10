import React from 'react';

const CareerMentor = () => {
  const categories = [
    { name: 'Technology', color: 'bg-yellow-100', icon: './images/technology.png' },
    { name: 'Medical', color: 'bg-pink-100', icon: './images/medical.png' },
    { name: 'Design', color: 'bg-blue-100', icon: './images/design.png' },
    { name: 'Law', color: 'bg-orange-100', icon: './images/law.png' },
    { name: 'Business', color: 'bg-green-100', icon: './images/business.png' },
    { name: 'Science', color: 'bg-red-100', icon: './images/science.png' },
  ];

  const CareerCategoryCard = ({ name, color, icon }) => (
    <div className={`${color} rounded-xl sm:p-8 flex flex-col items-center justify-center text-center h-72 w-full sm:w-56 transition-transform hover:scale-105`}>
      <img src={icon} alt={name} className="mb-4 w-24 h-24 sm:w-36 sm:h-36 object-cover" />
      <h3 className="font-semibold text-lg sm:text-xl mb-1">{name}</h3>
      <a href="#" className="text-sm text-gray-600 hover:underline">View Mentors &gt;</a>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center sm:p-16">
      <div className="text-3xl sm:text-4xl font-bold text-center mb-10">
        Explore <span className="text-purple-600">Career Mentors</span> of Various Fields
      </div>
      <div className="w-full flex justify-around space-x-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <CareerCategoryCard key={index} {...category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerMentor;
