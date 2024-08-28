import React from 'react';

const VidyastraWorks = () => {
  const sections = [
    {
      imgSrc: '/images/vidhya1.png',
      altText: 'AI Career Guidance',
      title: 'Take help of AI to choose the best career fit for you',
      description:
        'Our AI-powered career guidance platform offers personalized advice tailored to your unique interests, strengths, and current market trends. With just a few clicks, discover the career paths that align with your potential and passion, making informed decisions for a fulfilling future.',
      reverse: false,
    },
    {
      imgSrc: '/images/vidhya2.png',
      altText: 'Mentor Help',
      title: 'Seek Help from mentors to know more about the career choices',
      description:
        'Our AI-powered career guidance platform offers personalized advice tailored to your unique interests, strengths, and current market trends. With just a few clicks, discover the career paths that align with your potential and passion, making informed decisions for a fulfilling future.',
      reverse: true,
    },
    {
      imgSrc: '/images/vidhya3.png',
      altText: 'Mentor Help',
      title: 'Explore and Try Different Career options to know which is the one you want',
      description:
        'Our AI-powered career guidance platform offers personalized advice tailored to your unique interests, strengths, and current market trends. With just a few clicks, discover the career paths that align with your potential and passion, making informed decisions for a fulfilling future.',
      reverse: false,
    },
    {
      imgSrc: '/images/vidhya4.png',
      altText: 'Mentor Help',
      title: 'Get the details about the Career option that you want to pursue',
      description:
        'Our AI-powered career guidance platform offers personalized advice tailored to your unique interests, strengths, and current market trends. With just a few clicks, discover the career paths that align with your potential and passion, making informed decisions for a fulfilling future.',
      reverse: true,
    },
  ];

  return (
    <div className="relative bg-cover bg-center rounded-3xl p-8" style={{ backgroundImage: 'url(/images/Rectangle.png)' }}>
      {/* Overlay for semi-transparent purple color */}
      <div className="absolute inset-0 bg-purple-50 bg-opacity-80 rounded-3xl"></div>
      
      <div className="relative z-10 p-10 md:p-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          How Does <span className="text-purple-600">Vidyastra Work</span>
        </h2>

        <div className="space-y-8 md:space-y-12">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                section.reverse ? 'md:flex-row-reverse' : 'md:flex-row'
              } items-center gap-6`}
            >
              <div className="p-4 w-60 h-60 flex-shrink-0">
                <img
                  src={section.imgSrc}
                  alt={section.altText}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl md:text-2xl font-semibold mb-3">
                  {section.title}
                </h3>
                <p className="text-gray-600">{section.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VidyastraWorks;
