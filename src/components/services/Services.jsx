import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'AI-Powered Career Guidance',
      description: 'Access extensive information on career options, skills options, and more.',
      image: '/images/services1.png',
      bgColor: '#e6f0ff'
    },
    {
      title: 'Interactive Career Exploration Tools',
      description: 'Discover tools to explore various career paths interactively.',
      image: '/images/services2.png',
      bgColor: '#ffe6f9'
    },
    {
      title: 'Career Mentorship Programs',
      description: 'Connect with mentors to guide you on your career journey.',
      image: '/images/services3.png',
      bgColor: '#fff5e6'
    },
    {
      title: 'Career Resource Portals',
      description: 'Find extensive resources and materials for career development.',
      image: '/images/services4.png',
      bgColor: '#ffe6e6'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-white to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12">
          Our <span className="text-purple-600">Services</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-lg shadow-lg overflow-hidden"
              style={{ backgroundColor: service.bgColor }}
            >
              <div className="p-6 text-center">
                <img src={service.image} alt={service.title} className="w-24 h-24 mx-auto mb-4 object-contain" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-700 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
