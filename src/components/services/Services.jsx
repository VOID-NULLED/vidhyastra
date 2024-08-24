import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'AI-Powered Career Guidance',
      description: 'Access extensive information on career options, skillsoptions, fkillsr options',
      image: '/images/services1.png'
    },
    {
      title: 'Interactive Career Exploration Tools',
      description: 'Access extensive information on career options, skillsoptions, fkillsr options',
      image: '/images/services2.png'
    },
    {
      title: 'Career Mentorship Programs',
      description: 'Access extensive information on career ohgvjptions, skillsoptions, fkillsr optionshgjfh',
      image: '/images/services3.png'
    },
    {
      title: 'Career Resource Portals',
      description: 'Access extensive information on career options, skillsoptions, fkillsr options',
      image: '/images/services4.png'
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
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center" style={{backgroundColor: ['#e6f0ff', '#ffe6f9', '#fff5e6', '#ffe6e6'][index]}}>
                  <img src={service.image} alt={service.title} className="w-12 h-12 object-contain" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">{service.title}</h3>
                <p className="text-gray-600 text-center text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;