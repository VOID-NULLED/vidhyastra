import React  from "react";
import { FaUser, FaLock, FaFacebook, FaTwitter, FaGoogle } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";



export const Login = () => {
  return (
    <div className="bg-[#c464ff] flex justify-center w-full min-h-screen p-5">
      <div className="bg-[#c464ff] max-w-[1512px] w-full h-full flex justify-center items-center">
        <div className="relative w-full max-w-[1262px] h-full md:h-[982px] bg-[url(/rectangle-60.svg)] bg-no-repeat bg-cover flex justify-center items-center">
          <div className="relative w-full max-w-[90%] md:max-w-[80%] lg:max-w-[70%] h-auto md:h-[703px] bg-white rounded-[30px] overflow-hidden">
            <div className="flex flex-col md:flex-row w-full h-full">
              {/* Left side (Image on Desktop view) */}
              <div className="hidden md:flex flex-col justify-center items-center md:w-1/2 p-8">
  <div className="relative w-full h-auto">
    <img className="absolute w-[508px] h-auto top-[-200px] left-0" alt="Ellipse" src="/images/elite.png" />
    <img
      className="absolute w-[580px] h-auto top-[-200px] left-0"
      alt="Girl with books and backpack"
      src="/images/girl.png"
    />   
  </div>
</div>


              {/* Right side (Form) */}
              <div className="flex flex-col w-full md:w-1/2 items-center gap-8 p-8">
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-black py-6">Login</h1>
                </div>

                <div className="flex flex-col w-full items-start gap-6">
                  {/* Username Input */}
                  <div className="flex items-center w-full p-4 bg-[#f4e3ff] rounded-[30px]">
                    <FaUser className="text-xl text-[#1c1c1ccc] mr-4" />
                    <input
                      type="text"
                      placeholder="Username"
                      className="bg-transparent outline-none w-full text-xl text-[#1c1c1ccc] placeholder-[#1c1c1ccc]"
                    />
                  </div>

                  {/* Password Input */}
                  <div className="flex items-center w-full p-4 bg-[#f4e3ff] rounded-[30px]">
                    <FaLock className="text-xl text-[#1c1c1ccc] mr-4" />
                    <input
                      type="password"
                      placeholder="Password"
                      className="bg-transparent outline-none w-full text-xl text-[#1c1c1ccc] placeholder-[#1c1c1ccc]"
                    />
                  </div>
                </div>

                <button className="w-full bg-[#c464ff] text-white text-xl font-semibold py-3 rounded-[15px]">
                  Login
                </button>
                <p className="text-md font-semibold">If not have account <Link to="/register" className="text-purple-600">sign-up</Link></p>

                {/* Social Media Icons */}
                <div className="flex items-center justify-center gap-8 mt-8">
                  <FaFacebook className="text-[#4267B2] text-4xl cursor-pointer" />
                  <FaTwitter className="text-[#1DA1F2] text-4xl cursor-pointer" />
                  <FaGoogle className="text-[#DB4437] text-4xl cursor-pointer" />
                </div>
              </div>
            </div>

            {/* Close Icon on Desktop */}
            <Link to="/">
            <IoClose className="hidden md:block absolute top-8 right-8 w-8 h-8 cursor-pointer"/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
