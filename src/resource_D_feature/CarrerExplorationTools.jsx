import React from 'react';
// import { Lightbulb, Map } from 'lucide-react';

const CareerExplorationTools = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        <span className="text-purple-500">Career Exploration</span> Tools
      </h1>
      <div className="flex flex-col md:flex-row gap-6 justify-center">
        <ToolCard
          title="Get Resources"
          description="Access extensive information on career options, skills options, future options, skill options, future options"
          icon="/images/mentor/exploratation.png"
          bgColor="bg-blue-100"
        />
        <ToolCard
          title="Get Roadmap"
          description="Access extensive information on career options, skills options, future options, skill options, future options"
          icon="/images/mentor/exploratation.png"
          bgColor="bg-yellow-100"
        />
      </div>
    </div>
  );
};

const ToolCard = ({ title, description, icon, bgColor }) => {
  return (
    <div className={`${bgColor} rounded-lg p-6 flex flex-col items-center text-center max-w-sm`}>
      <div className="rounded-full p-4 mb-4">
        <img src={icon} className='w-26 h-24'/>
      </div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default CareerExplorationTools;