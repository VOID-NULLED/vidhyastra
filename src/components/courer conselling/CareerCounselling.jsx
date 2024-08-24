import React from 'react';

const CareerCounselling = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-center text-4xl font-bold mb-4 py-5">
            <span className="text-purple-600">Unlock Your Potential</span> with Career Counselling
          </h2>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 z-10">
          
          <p className="text-gray-600 mb-6">
            Our career counselling services provide improved career clarity and support, helping you make informed
            decisions about your future career clarity and support, helping you gtdrergsigtrrsxdfxhdf.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-purple-600 mb-2">Career Clarity</h3>
              <p className="text-sm text-gray-600">
                Get personalized guidance to explore various career paths and find your true calling.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-purple-600 mb-2">Expert Mentorship</h3>
              <p className="text-sm text-gray-600">
                Connect with experienced mentors who can provide valuable insights and advice for your career journey.
              </p>
            </div>
          </div>
          <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition duration-300">
            Learn More
          </button>
        </div>
        <div className="lg:w-1/2 mt-12 lg:mt-0 relative">
          {/* Blue background shape */}
          <img 
            src="/images/carrerbooks.png" 
            alt="Career Counselling" 
            className="w-full h-auto max-w-md mx-auto relative z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default CareerCounselling;