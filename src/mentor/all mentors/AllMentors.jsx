import React from 'react';

const ProfileCard = ({ name, position, company, skills,image }) => (
  <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
    <div>
        <img src={image} className='h-full object-cover'/>
    </div>
    <div className="p-4">
      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="text-sm text-gray-600">{position} at {company}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span key={index} className="px-2 py-1 bg-gray-200 rounded-full text-xs">
            {skill}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const AllMentors = () => {
  const profiles = [
    {
      name: "Peter Fernandis",
      position: "Product Designer",
      company: "Google",
      skills: ["Data Science", "Machine Learning", "Data Analyst"],
      image : "/images/mentor.png"
    },
    {
      name: "Peter Fernandis",
      position: "Product Designer",
      company: "Google",
      skills: ["Data Science", "Machine Learning", "Data Analyst"],
      image : "/images/mentor.png"
    },
    {
      name: "Peter Fernandis",
      position: "Product Designer",
      company: "Google",
      skills: ["Data Science", "Machine Learning", "Data Analyst"],
      image : "/images/mentor.png"
    },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profiles.map((profile, index) => (
            <ProfileCard key={index} {...profile} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllMentors;