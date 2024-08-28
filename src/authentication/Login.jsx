import React from 'react';
import { FaFacebookF, FaTwitter, FaGoogle } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

const Login = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-purple-500 bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-xl w-full max-w-3xl overflow-hidden">
        <div className="relative p-6">
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-400">
            <IoClose size={24} />
          </button>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <div className="bg-purple-100 rounded-3xl p-6 h-full flex items-center justify-center">
                <img src="/api/placeholder/300/300" alt="Student illustration" className="w-full max-w-xs" />
              </div>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h2 className="text-2xl font-bold mb-2">Sign-up</h2>
              <p className="text-gray-500 text-sm mb-6">Enter your Credentials to Create new account</p>
              <form>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Username"
                    className="w-full bg-purple-50 rounded-full py-2 px-4 text-purple-800 placeholder-purple-300"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full bg-purple-50 rounded-full py-2 px-4 text-purple-800 placeholder-purple-300"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-500 text-white rounded-full py-2 font-semibold hover:bg-purple-600 transition duration-300"
                >
                  Sign-up
                </button>
              </form>
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500 mb-4">Or Login with</p>
                <div className="flex justify-center space-x-4">
                  <button className="p-2 bg-blue-500 rounded-full text-white">
                    <FaFacebookF size={20} />
                  </button>
                  <button className="p-2 bg-blue-400 rounded-full text-white">
                    <FaTwitter size={20} />
                  </button>
                  <button className="p-2 bg-red-500 rounded-full text-white">
                    <FaGoogle size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;