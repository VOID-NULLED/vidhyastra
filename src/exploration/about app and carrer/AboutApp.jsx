import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutApp = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const sections = [
    {
      imgSrc: '/images/exploration/about1.png',
      altText: 'AI Career Guidance',
      title: 'Take help of AI to choose the best career fit for you',
      description:
        'Our AI-powered career guidance platform offers personalized advice tailored to your unique interests, strengths, and current market trends. With just a few clicks, discover the career paths that align with your potential and passion, making informed decisions for a fulfilling future.',
      reverse: false,
    },
    {
      imgSrc: '/images/exploration/about2.png',
      altText: 'Mentor Help',
      title: 'Seek Help from mentors to know more about the career choices',
      description:
        'Our AI-powered career guidance platform offers personalized advice tailored to your unique interests, strengths, and current market trends. With just a few clicks, discover the career paths that align with your potential and passion, making informed decisions for a fulfilling future.',
      reverse: true,
    },
    {
      imgSrc: '/images/exploration/about3.png',
      altText: 'Mentor Help',
      title: 'Explore and Try Different Career options to know which is the one you want',
      description:
        'Our AI-powered career guidance platform offers personalized advice tailored to your unique interests, strengths, and current market trends. With just a few clicks, discover the career paths that align with your potential and passion, making informed decisions for a fulfilling future.',
      reverse: false,
    },
    {
      imgSrc: '/images/exploration/about4.png',
      altText: 'Mentor Help',
      title: 'Get the details about the Career option that you want to pursue',
      description:
        'Our AI-powered career guidance platform offers personalized advice tailored to your unique interests, strengths, and current market trends. With just a few clicks, discover the career paths that align with your potential and passion, making informed decisions for a fulfilling future.',
      reverse: true,
    },
  ];

  return (
    <div
      className="relative rounded-3xl p-6 md:p-8"
      style={{
        backgroundImage: 'url(/images/exploration/rectangle.png)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
      }}
    >
      <div className="absolute inset-0"></div>

      <div className="relative z-10 p-6 md:p-10 lg:p-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-8 text-purple-600">
          Let Know More
        </h2>
        <div className="space-y-10 md:space-y-12">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                section.reverse ? 'md:flex-row-reverse' : 'md:flex-row'
              } items-center gap-4 md:gap-6`}
              data-aos={section.reverse ? 'fade-left' : 'fade-right'}
              data-aos-delay={index * 200} 
              data-aos-duration="800" 
            >
              <div className="w-full md:w-1/2 lg:w-1/3 flex justify-center">
                <img
                  src={section.imgSrc}
                  alt={section.altText}
                  className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-fit"
                />
              </div>
              <div className="w-full md:w-1/2 lg:w-2/3 flex flex-col text-center md:text-left lg:pl-32 lg:pr-32 ">
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2 md:mb-3 text-black">
                  {section.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base lg:text-lg pt-5">
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutApp;
