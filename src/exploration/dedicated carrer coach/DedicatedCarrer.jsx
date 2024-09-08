import React from 'react';
// import { GraduationCap, Check } from 'lucide-react';
import { FaCheckCircle } from "react-icons/fa";


const DedicatedCarrer = () => {
  return (
    <div className="max-w-full mx-auto p-6 flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg">
      <div className="md:w-1/2 mb-6 md:mb-0">
        <div className="relative">
          <div className="absolute inset-0 bg-blue-100 rounded-full transform -rotate-6 lg:w-[540px] md:w-[150px]"></div>
          <div className="relative z-50">
            <img
              src="/images/exploration/girleducation.png"
              alt="Graduate with laptop"
              className="w-84 h-84 object-cover rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-[#C465FF] mb-4 leading-tight">
          At your fingertips:
          <br />
          A dedicated career coach
        </h2>
        <p className="mb-8 text-[#C465FF] text-lg leading-relaxed ">
          Want to start a new dream career?
          <br />
          Successfully build your startup? Itching to
          <br />
          learn high-demand skills? Work smart with an
          <br />
          online mentor by your side to o
        </p>
        <ul className="space-y-4 mb-8">
          {['1-on-1 calls', '1-on-1 calls', 'Thousands of mentors available'].map((item, index) => (
            <li key={index} className="flex items-center gap-5">
              <FaCheckCircle className="text-[#C465FF] mr-3" size={24} />
              <span className="text-[#C465FF] text-lg">{item}</span>
            </li>
          ))}
        </ul>
        <button className="bg-[#C465FF] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300">
          Explore
        </button>
      </div>
    </div>
  );
};

export default DedicatedCarrer;