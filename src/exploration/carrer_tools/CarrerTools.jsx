import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CarrerTools = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const services = [
    {
      title: 'Quizes',
      description: 'Having worked in different data jobs and been promotta jobs and be',
      image: '/images/exploration/Vector.png',
      bgColor: '#FFF7E3',
      link: '/find-mentors/quizes'  
    },
    {
      title: 'Learning Videos',
      description: 'Discover tools to explore various career paths interactively.',
      image: '/images/exploration/youtube.png',
      bgColor: '#FFE8E8',
      link: '/find-mentors/tools'  
    },
    {
      title: 'Short clips',
      description: 'Having worked in different data jobs and been promotta jobs and be',
      image: '/images/exploration/camera.png',
      bgColor: '#EFD6FF',
      link: '/find-mentors/mentorship'  
    },
    {
      title: 'Facts & News',
      description: 'Find extensive resources and materials for career development.',
      image: '/images/exploration/news.png',
      bgColor: '#E5FFE8',
      link: '/find-mentors/resources'  
    }
  ];

  return (
    <div className="bg-gradient-to-br from-white to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-purple-600 text-center mb-12">
        Career Exploration <span className="text-black"> Tools</span>
        </h2>
        <div data-aos="fade-right" data-aos-duration="1000">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="rounded-lg shadow-lg overflow-hidden"
                style={{ backgroundColor: service.bgColor }}
              >
                <div className="p-6 text-center">
                  <img src={service.image} alt={service.title} className="w-24 h-48 mx-auto mb-4 object-contain" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-700 text-sm mb-4">{service.description}</p>
                  <a href={service.link}>
                    <button className="bg-[#454545] text-white px-6 py-2 rounded-full hover:bg-purple-600 transition duration-300">
                      Find Mentors
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarrerTools;
