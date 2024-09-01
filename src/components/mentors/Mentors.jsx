import React from "react";
import ProfileCards from "../profile of mentors/ProfileCards";

const Mentors = () => {
  return (
    <div className="bg-gray-100">
      <div className="text-center">
        <div className="text-3xl font-bold mr-5 p-8">
          Learn from the <span className="text-purple-600">Mentors</span>
        </div>
        <div className="text-lg  p-5 text-center">
          Develop real-world with our courses designed by industry
          practitioners. Develop real-world skills
          <br />
          with our courses designed by industry practitioners. Develop
          real-world skills with our courses designed
          <br />
          by industry practitioners.
        </div>
      </div>
      <ProfileCards />
      <div className="text-center p-5">
        <button className="text-white bg-purple-600 p-2 rounded-xl px-5 py-2.5 me-2 mb-2">
          View More
        </button>
      </div>
    </div>
  );
};

export default Mentors;
