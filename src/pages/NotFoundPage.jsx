import React from 'react';
// import { Home, AlertCircle } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full space-y-8 text-center">
        <div>
          {/* <AlertCircle className="mx-auto h-24 w-24 text-blue-600" /> */}
          <h2 className="mt-6 text-6xl font-extrabold text-gray-900 sm:text-7xl">
            Coming Soon
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Oops! The page you are looking for doesn't exist or has been moved.
          </p>
        </div>
        <div>
          <a
            href="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
          >
            Return to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;