import React from 'react';
// import { ArrowRight } from 'lucide-react';

const CareerQuiz = () => {
  return (
    <div className="relative w-full min-h-screen bg-white flex justify-center items-center p-4">
     {/* Left decorative element */}
<div className="absolute left-0 top-0 w-1/4 h-64 hidden sm:block">
  <img src="/images/quiz/curveleft.png" alt="Left decoration" className="w-full h-full object-cover" />
</div>

{/* Right decorative element */}
<div className="absolute right-0 bottom-1/8 lg:w-[160px] lg:h-80 hidden sm:block">
  <img src="/images/quiz/curve.png" alt="Right decoration" className="w-full h-full object-cover" />
</div>
      
      {/* Main content */}
      <div className=" p-8 max-w-md w-full text-center">
        <h1 className="text-purple-600 text-5xl font-bold mb-4">Take a Quiz</h1>
        
        {/* Person illustration */}
        <div className="relative w-52 h-64 mx-auto mb-6">
          <img src="/images/quiz/girl.png" alt="Person at desk" className="w-full h-full object-cover" />
            </div>
        
        <h2 className="text-3xl font-semibold mb-2">Unlock Your Potential!</h2>
        <p className="text-gray-600 mb-6">
          Curious about which career path suits you best? Let's uncover your
          hidden talents and match them with exciting opportunities.
        </p>
        
        <button className="bg-purple-500 text-white font-bold text-xl py-3 px-8 rounded-full hover:bg-purple-600 transition duration-300 flex items-center justify-center mx-auto">
          Let's Start!
           {/* <ArrowRight className="ml-2" size={20} /> */}
        </button>
      </div>
    </div>
  );
};

export default CareerQuiz;