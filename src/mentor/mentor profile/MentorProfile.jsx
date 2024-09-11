import React from 'react';
import { IoLocation } from "react-icons/io5";
import { IoMdStar } from "react-icons/io";
import { GoClockFill } from "react-icons/go";
import AboutSection from './AboutSection';
import Blogs from '../../components/blogs/Blogs';

const MentorProfile = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Header Section */}
      <div className="bg-[#C465FF] h-32"></div>
      
      {/* Profile Content */}
      <div className="px-6 py-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Profile Image */}
          <div className="w-36 h-36 bg-gray-300 rounded-full -mt-20 border-4 overflow-hidden">
  <img src='/images/peter.png' className='w-full h-full object-cover'/>
</div>


          {/* Profile Info */}
          <div className="ml-0 md:ml-6 mt-4 md:mt-0 flex-grow text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold">Peter Fernandis</h2>
            <p className="text-gray-600 text-sm md:text-base">Product Designer at Google</p>
          </div>

          {/* Book Appointment Button */}
          <div className="mt-4 md:mt-0">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-sm font-medium shadow-md hover:bg-purple-50 transition duration-300 ease-in-out">
              Book an Appointment
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 px-4 w-full md:w-[60vw]">
          <div className="flex flex-col w-full md:w-auto pl-10">
            <div className="flex items-center mb-2">
              <IoLocation />
              <span className="ml-2 font-medium text-gray-800">Canada</span>
            </div>
            <div className="flex items-center mb-2">
              <IoMdStar />
              <span className="ml-2 font-medium text-gray-800">4.5 (49 users)</span>
            </div>
            <div className="flex items-center">
              <GoClockFill />
              <span className="ml-2 font-medium text-gray-800">Active Today</span>
            </div>
          </div>
          <div className="mt-4 md:mt-0 w-full md:w-auto">
            <h2 className="font-bold text-lg text-purple-500">Skills</h2>
            <div className="flex flex-wrap gap-2 mt-2">
              <button className="bg-gray-200 px-3 py-1 rounded-md font-medium text-gray-700 hover:bg-gray-300">
                Machine Learning
              </button>
              <button className="bg-gray-200 px-3 py-1 rounded-md font-medium text-gray-700 hover:bg-gray-300">
                Product Design
              </button>
              <button className="bg-gray-200 px-3 py-1 rounded-md font-medium text-gray-700 hover:bg-gray-300">
                UX Research
              </button>
              <button className="bg-gray-200 px-3 py-1 rounded-md font-medium text-gray-700 hover:bg-gray-300">
                Data Science
              </button>
            </div>
            <div className="mt-2 text-gray-500 text-sm">
              <a href="#">+8 more</a>
            </div>
          </div>
        </div>
      <AboutSection/>
      <Blogs/>
      </div>
    </div>
  );
}

export default MentorProfile;
