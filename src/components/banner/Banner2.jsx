import React from 'react';

const Banner2 = () => {
  return (
    <div>
    <div className="flex justify-center items-center min-h-screen bg-purple-100 p-4">
      <div className="bg-[#C465FF] rounded-3xl shadow-lg overflow-hidden max-w-4xl w-full">
        <div className="flex flex-col md:flex-row p-8 items-center">
          <div className="md:w-2/3 text-white mb-6 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">At your fingertips: A dedicated career coach</h2>
            <p className="mb-6">
              Want to start a new dream career? Successfully build your startup? Itching to learn high-demand skills? Work smart with an online mentor by your side to o
            </p>
            <ul className="mb-6 space-y-2">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                1-on-1 calls
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                1-on-1 calls
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Thousands of mentors available
              </li>
            </ul>
            <button className="bg-white text-purple-700 font-bold py-2 px-6 rounded-full hover:bg-purple-100 transition duration-300">
              Get Started
            </button>
          </div>
          <div className="md:w-1/3">
            <img src="/images/computergirl.png" alt="Career coaching illustration" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Banner2;