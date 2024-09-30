import React from 'react';
import { FaFacebook, FaTwitter, FaGithub, FaDribbble } from 'react-icons/fa';

const SocialIcon = ({ platform }) => {
  const icons = {
    facebook: FaFacebook,
    twitter: FaTwitter,
    github: FaGithub,
    dribbble: FaDribbble,
  };
  const Icon = icons[platform];
  return <Icon className="text-gray-400 hover:text-gray-300 transition-colors" />;
};

const TeamMember = ({ name, role, image, socials }) => (
  <div className="flex flex-col items-center">
    <img src={image} alt={name} className="w-60 h-60 rounded-2xl object-cover mb-4" />
    <h3 className="text-black text-xl font-semibold">{name}</h3>
    <p className="text-gray-400 mb-3">{role}</p>
    <div className="flex space-x-4">
      {socials.map((platform) => (
        <a key={platform} href="#" className="text-2xl">
          <SocialIcon platform={platform} />
        </a>
      ))}
    </div>
  </div>
);

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Rushit Damania",
      role: "Devops",
      image: "/images/personimage/rushit.png",
      socials: ["facebook", "twitter", "github", "dribbble"],
    },
    {
      name: "Rudra Patel",
      role: "Web Developer",
      image: "/images/personimage/rudra.png",
      socials: ["facebook", "twitter", "github", "dribbble"],
    },
    {
      name: "Vivek Dubey",
      role: "Web Developer",
      image: "/images/personimage/vivek.png",
      socials: ["facebook", "twitter", "github", "dribbble"],
    },
    {
      name: "Khushi Darbar",
      role: "Web Designer",
      image: "/images/personimage/khushi.png",
      socials: ["facebook", "twitter", "github", "dribbble"],
    },
    {
      name: "Harshil Panchal",
      role: "Research",
      image: "/images/personimage/harshil.png",
      socials: ["facebook", "twitter", "github", "dribbble"],
    },
    {
      name: "Tanmay Dighade",
      role: "Ai Guide",
      image: "/images/personimage/tanmay.png",
      socials: ["facebook", "twitter", "github", "dribbble"],
    },
  ];

  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-purple-600 text-center mb-4">Our team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <TeamMember key={member.name} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;