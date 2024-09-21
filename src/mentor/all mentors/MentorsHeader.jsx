import React from 'react'

const MentorsHeader = () => {
  return (
    <div>
        <h2 className='text-4xl text-black text-center p-10 font-bold'>Explore <span className='text-purple-600'>Career Mentors</span> of Various Fileds</h2>
        <div className="flex justify-center items-center pb-10">
        <input
          type="text"
          placeholder="Enter text"
          className="w-[75vw] p-2 border border-gray-300 rounded-l-xl focus:outline-none"
        />
        <button className="w-5xl p-2 bg-purple-500 text-white rounded-r-lg hover:bg-purple-600">
          Submit
        </button>
      </div> 
       
    </div>
  )
}

export default MentorsHeader