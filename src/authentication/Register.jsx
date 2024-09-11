import axios from "axios";
import React, { useState } from "react";
import {
  FaUser,
  FaLock,
  FaFacebook,
  FaTwitter,
  FaGoogle,
  FaEnvelope,
  FaGraduationCap
} from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

import { IoClose } from "react-icons/io5";
import { Link ,useNavigate} from "react-router-dom";

export const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    full_name: "",
    mobile_number: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password || !formData.username) {
      setError("Please fill all required fields");
      return;
    }
    try {
      const response = await axios.post("/api/signup", formData);
      setSuccess("SignUp Successful");
      setError("");
      console.log(response.data);
      localStorage.setItem('access', data.tokens.access);
      navigate("/");
    } catch (error) {
      setError("SignUp Failed. Please try again");
      setSuccess("");
      console.error("Error in Sign up", error);
    }
  };

  return (
    <div className="relative flex justify-center items-center w-full min-h-screen p-5 bg-[#C465FF]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/loginrectangle.png"
          alt="Background"
          className="w-full h-full object-fit"
        />
      </div>
      <div className="relative z-10 w-full max-w-4xl bg-white rounded-2xl shadow-lg p-6 md:p-12 flex flex-col md:flex-row items-center justify-between">
        {/* Left side (Image) */}
        <div className="hidden md:flex flex-col justify-center items-center w-1/2 p-6">
          <div className="relative w-full h-auto">
            <img
              className="w-full h-auto"
              src="/images/elite.png"
              alt="Decorative"
            />
            <img
              className="absolute top-[-10px] left-0 w-80 h-auto"
              src="/images/girl.png"
              alt="Girl Illustration"
            />
          </div>
        </div>

        {/* Right side (Form) */}
        <div className="w-full md:w-1/2 flex flex-col items-center gap-4">
          <h1 className="text-3xl font-semibold text-black">Sign-up</h1>
          <p className="text-base text-gray-500 mb-4 text-center">
            Create a new account with your details
          </p>

          {/* Error/Success Messages */}
          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}

          <form onSubmit={handleSubmit} className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
              {/* Email Input */}
              <div className="flex items-center w-full bg-gray-100 rounded-xl p-3">
                <FaEnvelope className="text-xl text-gray-400 mr-4" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="bg-transparent w-full outline-none text-gray-700"
                />
              </div>

              {/* Username Input */}
              <div className="flex items-center w-full bg-gray-100 rounded-xl p-3">
                <FaUser className="text-xl text-gray-400 mr-4" />
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Username"
                  required
                  className="bg-transparent w-full outline-none text-gray-700"
                />
              </div>

              {/* First Name Input */}
              <div className="flex items-center w-full bg-gray-100 rounded-xl p-3">
                <FaUser className="text-xl text-gray-400 mr-4" />
                <input
                  type="text"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="bg-transparent w-full outline-none text-gray-700"
                />
              </div>

              {/* Mobile Input */}
              <div className="flex items-center w-full bg-gray-100 rounded-xl p-3">
                <FaPhone className="text-xl text-gray-400 mr-4" />
                <input
                  type="text"
                  name="mobile_number"
                  value={formData.mobile_number}
                  onChange={handleChange}
                  placeholder="Mobile Number"
                  required
                  className="bg-transparent w-full outline-none text-gray-700"
                />
              </div>

              {/* Password Input */}
              <div className="flex items-center w-full bg-gray-100 rounded-xl p-3 col-span-full">
                <FaLock className="text-xl text-gray-400 mr-4" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  required
                  className="bg-transparent w-full outline-none text-gray-700"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-6 bg-purple-600 text-white py-3 rounded-xl text-lg font-semibold"
            >
              Sign-up
            </button>
          </form>

          <p className="text-sm mt-4 text-gray-500">
            Already have an account?{" "}
            <Link to="/login" className="text-purple-600 font-medium">
              Login
            </Link>
          </p>

          {/* Social Media Icons */}
          <div className="flex items-center justify-center gap-6 mt-6">
            <FaFacebook className="text-blue-600 text-3xl cursor-pointer" />
            <FaTwitter className="text-blue-400 text-3xl cursor-pointer" />
            <FaGoogle className="text-red-500 text-3xl cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Close Icon */}
      <Link to="/" className="absolute top-5 right-5">
        <IoClose className="text-white text-3xl" />
      </Link>
    </div>
  );
};
