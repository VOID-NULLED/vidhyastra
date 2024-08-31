import React from 'react';


const profiles = [
  {
    name: 'Peter Fernandis',
    role: 'Product Designer at Google',
    image: '/images/peter.png'
  },
  {
    name: 'Jennifer Nguyen',
    role: 'Sr. Software Engg. at Microsoft',
    image: '/api/placeholder/300/400'
  },
  {
    name: 'Shaksham Kapoor',
    role: 'Founder of RR Law Firm',
    image: '/api/placeholder/300/400'
  },
  {
    name: 'Nathan We',
    role: 'Sr. Scientist at Alpha',
    image: '/api/placeholder/300/400'
  }
];

const ProfileCard = ({ name, role, image }) => (
  <div className="w-[250px] flex-shrink-0 mx-2">
    <div className="relative overflow-hidden rounded-lg">
      <img src={image} alt={name} className="w-full h-full object-cover" />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-sm">{role}</p>
      </div>
    </div>
  </div>
);

const ProfileCards = () => {
  const animationSpeed = "40s"; 

  const scrollAnimation = {
    animation: `scroll ${animationSpeed} linear infinite`,
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className=" relative py-8">
        <div className="slide-track flex" style={scrollAnimation}>
          {profiles.map((profile, index) => (
            <ProfileCard key={index} {...profile} />
          ))}
          {/* Duplicate the profiles for a seamless scroll effect */}
          {profiles.map((profile, index) => (
            <ProfileCard key={index + profiles.length} {...profile} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCards;
