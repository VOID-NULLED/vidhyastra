import React, { useState } from "react";
import { FaUser, FaLock, FaFacebook, FaTwitter, FaGoogle } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Link , useNavigate } from "react-router-dom";
import axios from "axios";

export const Login = () => {
  const [formData , setFormData] = useState({
    email: "",
    password: "",
  })
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const { email, password } = formData;
    if (!email || !password) {
      setError("Both email and password are required");
      return false;
    }
      return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) return;


    try {
      setLoading(true);
      const response = await axios.post("/api/login/", {
        email: formData.email,
        password: formData.password,
      });
      console.log("Login successful:", response.data);
      localStorage.setItem("access", response.data.token);
      navigate("/");
    } catch (error) {
      setError("Login failed. Please check your credentials.");
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex justify-center w-full min-h-screen p-5 bg-[#C465FF]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/loginrectangle.png"
          alt="Background Image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-[1512px] w-full h-full flex justify-center items-center">
        <div className="relative w-full max-w-[1262px] h-full md:h-[982px] flex justify-center items-center">
          <div className="relative w-full max-w-[90%] md:max-w-[80%] lg:max-w-[70%] h-auto md:h-[603px] bg-white rounded-[30px] overflow-hidden">
            <div className="flex flex-col md:flex-row w-full h-full">
              {/* Left side (Image on Desktop view) */}
              <div className="hidden md:flex flex-col justify-center items-center md:w-1/2 p-8">
                <div className="relative w-full h-auto">
                  <img
                    className="absolute w-[508px] h-auto top-[-200px] left-0"
                    alt="Ellipse"
                    src="/images/elite.png"
                  />
                  <img
                    className="absolute w-[580px] h-auto top-[-200px] left-0"
                    alt="Girl with books and backpack"
                    src="/images/girl.png"
                  />
                </div>
              </div>

              {/* Right side form*/}
              <div className="flex flex-col w-full md:w-1/2 items-center gap-8 p-8">
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-black py-6">Login</h1>
                </div>

               {/* Error Message */}
                {error && (
                  <div className="w-full bg-red-100 text-red-700 p-2 rounded-md">
                    {error}
                  </div>
                )}

                <form className="flex flex-col w-full items-start gap-6" onSubmit={handleSubmit}>
                  {/* Email Input */}
                  <div className="flex items-center w-full p-4 bg-[#f4e3ff] rounded-[30px]">
                    <FaUser className="text-xl text-[#1c1c1ccc] mr-4" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className="bg-transparent outline-none w-full text-xl text-[#1c1c1ccc] placeholder-[#1c1c1ccc]"
                      required
                    />
                  </div>

                  {/* Password Input */}
                  <div className="flex items-center w-full p-4 bg-[#f4e3ff] rounded-[30px]">
                    <FaLock className="text-xl text-[#1c1c1ccc] mr-4" />
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Password"
                      className="bg-transparent outline-none w-full text-xl text-[#1c1c1ccc] placeholder-[#1c1c1ccc]"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#c464ff] text-white text-xl font-semibold py-3 rounded-[15px]"
                  >
                    {loading ? "Logging in..." : "Login"}
                  </button>
                </form>

                <p className="text-md font-semibold">
                  If not have account{" "}
                  <Link to="/register" className="text-purple-600">
                    Sign-up
                  </Link>
                </p>

                <div className="flex items-center justify-center gap-8 mt-8">
                  <FaFacebook className="text-[#4267B2] text-4xl cursor-pointer" />
                  <FaTwitter className="text-[#1DA1F2] text-4xl cursor-pointer" />
                  <FaGoogle className="text-[#DB4437] text-4xl cursor-pointer" />
                </div>
              </div>
            </div>

            <Link to="/">
              <IoClose className="hidden md:block absolute top-8 right-8 w-8 h-8 cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};