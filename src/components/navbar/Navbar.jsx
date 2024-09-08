import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white w-full z-20 top-0 left-0 border-b border-gray-200">
      <div className=" max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink to="/" className="flex items-center space-x-3">
          {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" /> */}
          <span className="self-center text-4xl text-black font-bold whitespace-nowrap">Vidyastra</span>
        </NavLink>
        <div className="flex md:order-2">
          <NavLink to="/login">
          <button
            type="button"
            className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0"
            >
            Login
          </button>
            </NavLink>
          <button
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            {isOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
            <span className="sr-only">Open main menu</span>
          </button>
        </div>
        <div
  className={`items-center justify-between ${isOpen ? 'flex' : 'hidden'} w-full md:flex md:w-auto md:order-1`}
  id="navbar-sticky"
>
  <div className=" w-full flex justify-end md:justify-start"> {/* New div wrapper */}
    <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ml-auto">
      <li>
        <NavLink to="/" exact activeClassName="active" className="block py-2 px-3 rounded md:p-0">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/mentorShip" activeClassName="active" className="block py-2 px-3 rounded md:p-0">
          MentorShip
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" activeClassName="active" className="block py-2 px-3 rounded md:p-0">
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/exploration" activeClassName="active" className="block py-2 px-3 rounded md:p-0">
        Exploration
        </NavLink>
      </li>
    </ul>
  </div>
</div>

      </div>
    </nav>
  );
};

export default Navbar;