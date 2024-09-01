import React from 'react';

const MentorProfile = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Header Section */}
      <div className="bg-[#C465FF] h-32"></div>
      
      {/* Profile Content */}
      <div className="px-6 py-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Profile Image */}
          <div className="w-36 h-36 bg-gray-300 rounded-full -mt-20 border-4 border-white"></div>

          {/* Profile Info */}
          <div className="ml-0 md:ml-6 mt-4 md:mt-0 flex-grow text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold">Peter Fernandis</h2>
            <p className="text-gray-600 text-sm md:text-base">Product Designer at Google</p>
          </div>

          {/* Book Appointment Button */}
          <div className="mt-4 md:mt-0">
            <button className="bg-white text-purple-600 px-4 py-2 rounded-full text-sm font-medium shadow-md hover:bg-purple-50 transition duration-300 ease-in-out">
              Book an Appointment
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6">
          {/* Location */}
          <div className="flex items-center text-sm text-gray-600">
            {/* Icon can be added back here */}
            <span>Canada</span>
          </div>

          {/* Rating */}
          <div className="mt-2 flex items-center text-sm text-gray-600">
            {/* Icon can be added back here */}
            <span>4.5 (49 users)</span>
          </div>

          {/* Activity Status */}
          <div className="mt-2 flex items-center text-sm text-purple-600">
            <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
            <span>Active Today</span>
          </div>

          {/* Skills Section */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {['Machine Learning', 'UI/UX Design', 'Prototyping', 'User Research'].map((skill, index) => (
                <span key={index} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
              <span className="text-purple-600 text-sm font-medium">+8 more</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MentorProfile;
