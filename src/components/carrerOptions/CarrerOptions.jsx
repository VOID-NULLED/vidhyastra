import React from 'react';

const careers = [
  { name: 'Law',  image : "/images/carrerlaw.png"},
  { name: 'Pharmacy', image: "/images/carrermedical.png" },
  { name: 'Pharmacy', image: '/images/carrerlaw.png' },
  { name: 'Law', image: '/images/carrermedical.png' },
  { name: 'Pharmacy', image: '/images/carrerlaw.png' },
  { name: 'Law', image: '/images/carrermedical.png' },
  { name: 'Pharmacy', image: '/images/carrerlaw.png' },
  { name: 'Law', image: '/images/carrermedical.png' },
];

const CareerIcon = ({ name, image }) => (
  <div className="flex flex-col items-center">
    <div className="w-32 h-32 rounded-full flex items-center justify-center text-3xl">
      <img src={image} alt={name}/>
    </div>
    <p className="mt-2 text-xl text-gray-700 font-semibold">{name}</p>
  </div>
);

const CarrerOptions = () => {
  return (
    <div className="relative max-w-full mx-auto px-4 py-12">
      
      <h1 className="text-center text-3xl font-bold mb-8">
        <span className="text-purple-600">Top Career</span> Choices
      </h1>

      {/* this is wave line background */}
      {/* <svg className="absolute top-0 left-0 w-full h-" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path
          d="M0,192L60,165.3C120,139,240,85,360,96C480,107,600,181,720,208C840,235,960,213,1080,202.7C1200,192,1320,192,1380,192L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          fill="#E6EEE6"
        />
      </svg> */}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 relative z-10 pt-5"> 
        {careers.map((career, index) => (
          <CareerIcon key={index} {...career} />
        ))}
      </div>
    </div>
  );
};

export default CarrerOptions;