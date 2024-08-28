import React from 'react';

const careers = [
  { name: 'Pharmacy', icon: '💊' },
  { name: 'Law', icon: '⚖️' },
  { name: 'Pharmacy', icon: '💊' },
  { name: 'Law', icon: '⚖️' },
  { name: 'Pharmacy', icon: '💊' },
  { name: 'Law', icon: '⚖️' },
  { name: 'Pharmacy', icon: '💊' },
  { name: 'Law', icon: '⚖️' },
];

const CareerIcon = ({ name, icon }) => (
  <div className="flex flex-col items-center">
    <div className="w-32 h-32 rounded-full flex items-center justify-center text-3xl">
      {icon}
    </div>
    <p className="mt-2 text-sm">{name}</p>
  </div>
);

const CarrerOptions = () => {
  return (
    <div className="relative max-w-full mx-auto px-4 py-12">
      {/* Background wavy line */}
      <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path
          d="M0,50 C20,60 50,40 80,50 L100,50 L100,100 L0,100 Z"
          fill="none"
          stroke="#E6EEE6"
          strokeWidth="0.5"
        />
      </svg>

      <h1 className="text-center text-3xl font-bold mb-8">
        <span className="text-purple-600">Top Career</span> Choices
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 relative z-10">
        {careers.map((career, index) => (
          <CareerIcon key={index} {...career} />
        ))}
      </div>
    </div>
  );
};

export default CarrerOptions;