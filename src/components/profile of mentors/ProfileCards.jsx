import React, { useState } from "react";

const ProfileCard = ({ data}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-64 h-80 bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-300 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isHovered ? (
        <div className="relative h-full flex flex-col items-center justify-center">
          <img
            src={data.image}
            alt={data.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <h2 className="text-xl font-bold text-white">{data.name}</h2>
            <p className="text-sm text-white">{data.role}</p>
          </div>
        </div>
      ) : (
        <div className="h-full flex flex-col p-4">
          <img
            src={data.image}
            alt={data.name}
            className="w-16 h-16 rounded-full mb-2 object-cover"
          />
          <h2 className="text-lg font-bold text-gray-800">{data.name}</h2>
          <p className="text-sm text-gray-600 mb-4">{data.role}</p>
          <h3 className="text-md font-semibold text-gray-700 mb-2">
            Additional Info
          </h3>
          <ul className="text-sm text-gray-600 mb-4">
            {data.additionalInfo.map((item, index) => (
              <li key={index} className="flex items-start mb-1">
                {item}
              </li>
            ))}
          </ul>
          <button className="mt-auto text-sm text-blue-600 hover:underline">
            View more
          </button>
        </div>
      )}
    </div>
  );
};

const ProfileCards = () => {
  const profiles = [
    {
      name: "Peter Fernandis",
      role: "Product Designer at Google",
      image: "/images/peter.png",
      additionalInfo: [
        "Full Stack Development",
        "8+ years of experience",
        "Design Leader",
      ],
    },
    {
      name: "Jennifer Nguyen",
      role: "Sr. Software Engineer at Microsoft",
      image: "/images/peter.png",
      additionalInfo: [
        "Cloud Engineer",
        "10+ years of experience",
        "Tech Speaker",
      ],
    },
    {
      name: "Shaksham Kapoor",
      role: "Founder of RR Law Firm",
      image: "/images/peter.png",
      additionalInfo: [
        "Expert in Legal Tech",
        "15+ years of experience",
        "Legal Advisor",
      ],
    },
    {
      name: "Nathan We",
      role: "Sr. Scientist at Alpha",
      image: "/images/peter.png",
      additionalInfo: [
        "Specialized in AI Research",
        "10+ years of experience",
        "Tech Speaker",
      ],
    },
    {
      name: "Peter Fernandis",
      role: "Product Designer at Google",
      image: "/images/peter.png",
      additionalInfo: [
        "Full Stack Development",
        "8+ years of experience",
        "Design Leader",
      ],
    },
    {
      name: "Jennifer Nguyen",
      role: "Sr. Software Engineer at Microsoft",
      image: "/images/peter.png",
      additionalInfo: [
        "Cloud Engineer",
        "10+ years of experience",
        "Tech Speaker",
      ],
    },
    {
      name: "Shaksham Kapoor",
      role: "Founder of RR Law Firm",
      image: "/images/peter.png",
      additionalInfo: [
        "Expert in Legal Tech",
        "15+ years of experience",
        "Legal Advisor",
      ],
    },
    {
      name: "Nathan We",
      role: "Sr. Scientist at Alpha",
      image: "/images/peter.png",
      additionalInfo: [
        "Specialized in AI Research",
        "10+ years of experience",
        "Tech Speaker",
      ],
    },
  ];

  return (
    <div className="flex items-center justify-center  bg-[#f9f0ff]">
      <div className="flex space-x-4 overflow-hidden">
        <div className="flex space-x-4 animate-scroll">
          
          {profiles.map((profile, index) => (
            <ProfileCard key={index + profiles.length} data={profile} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCards;
