import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('access');
    setIsLoggedIn(!!token); 
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const services = [
    { name: 'Ai Powered Career Guidance', path: '/mentorShips' },
    { name: 'Career Exploration Tools', path: '/exploration' },
    { name: 'Mentorship Program', path: '/mentorShip' },
    { name: 'Resource Portals', path: '/online-courses' },
  ];

  return (
    <nav className="bg-white w-full z-20 top-0 left-0 shadow-md p-2">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink to="/" className="flex items-center space-x-3">
          <span className="self-center text-4xl sm:text-3xl text-black font-bold">Vidyastra</span>
        </NavLink>

        <div className="flex md:order-2 items-center">
          {isLoggedIn ? (
            <div className="flex items-center space-x-4">
              <Link to="/user">
              <FaUserCircle className="text-3xl text-purple-700" />
              </Link>
            </div>
          ) : (
            <div className="flex items-center space-x-3">
              <NavLink to="/register">
                <button
                  type="button"
                  className="text-purple-600 focus:outline-none font-medium text-sm px-4 py-2 text-center hidden md:block"
                >
                  Sign Up
                </button>
              </NavLink>
              <NavLink to="/login">
                <button
                  type="button"
                  className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
                >
                  Login
                </button>
              </NavLink>
            </div>
          )}

          {/* Mobile menu toggle */}
          <button
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ml-3"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            {isOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
            <span className="sr-only">Open main menu</span>
          </button>
        </div>

        <div className={`items-center justify-center ${isOpen ? 'flex' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
          <ul className="text-lg flex flex-col items-center space-y-2 md:flex-row md:space-y-0 md:space-x-8 p-4 md:p-0 mt-4 md:mt-0 font-medium border border-gray-100 rounded-lg bg-gray-50 md:bg-white md:border-0">
            <li>
              <NavLink to="/" exact="true" className="block py-2 px-4 rounded hover:bg-gray-200 md:hover:bg-transparent md:hover:text-purple-700 transition duration-300 ease-in-out">
                Home
              </NavLink>
            </li>
            <li className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <button
                className="font-meduim px-4 py-2 inline-flex items-center hover:bg-gray-200 md:hover:bg-transparent md:hover:text-purple-700 transition duration-300 ease-in-out"
              >
                Services 
                <svg className="w-3 h-3 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6" aria-hidden="true">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>

              {/* Dropdown menu */}
              {isDropdownOpen && (
                <div className="absolute top-7 mt-2 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                  <ul className="py-2 text-sm text-gray-700">
                    {services.map((service, index) => (
                      <li key={index}>
                        <NavLink
                          to={service.path}
                          className="block px-4 py-2 hover:bg-gray-100"
                          onClick={() => {
                            setIsDropdownOpen(false);
                            setIsOpen(false);
                          }}
                        >
                          {service.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
            <li>
              <NavLink to="/aboutus" className="block py-2 px-4 rounded hover:bg-gray-200 md:hover:bg-transparent md:hover:text-purple-700 transition duration-300 ease-in-out">
                About Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
