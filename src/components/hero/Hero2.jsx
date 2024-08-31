import React from 'react';

const Hero2 = () => {
  return (
    <div className="max-w-7xl mx-auto p-10 font-sans">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
          <h2 className="text-sm text-gray-600">Vidyastra Helps to</h2>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Leveraging Technology
            <br />
            for <span className="text-purple-600">Career Guidance</span>
          </h1>
          <p className="text-sm md:text-base text-gray-600 mb-4">
            Access extensive information on career options, skills,
            education, and job trends. Aligning education with
            market demands through
          </p>
          <div className="flex mb-8">
            <input
              type="text"
              placeholder="Search by company, skills or role"
              className="flex-grow p-3 text-sm border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <button className="bg-purple-600 text-white px-3 py-1 text-sm rounded-r-lg hover:bg-purple-700 transition duration-300">
              Find Mentors
            </button>
          </div>
          <div className="flex justify-between text-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-purple-600">150+</h3>
              <p className="text-sm text-gray-600">Mentors Available</p>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-purple-600">7500+</h3>
              <p className="text-sm text-gray-600">Students Helped</p>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-purple-600">10+</h3>
              <p className="text-sm text-gray-600">Career Options</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 space-y-8">
          {[1, 2, 3].map((index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4">
              <img src="/images/girlcounselling.png" alt="Maria Stella" className="w-16 h-16 rounded-full" />
              <div>
                <h3 className="font-bold">Maria Stella</h3>
                <p className="text-sm text-gray-600">Sr. Data Analyst at Microsoft</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  <span className="bg-gray-200 text-xs px-2 py-1 rounded">Data Science</span>
                  <span className="bg-gray-200 text-xs px-2 py-1 rounded">Machine Learning</span>
                  <span className="bg-gray-200 text-xs px-2 py-1 rounded">Data Analyst</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero2;