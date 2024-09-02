import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#C465FF]">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <span className="self-center text-4xl font-bold whitespace-nowrap text-white">
              Vidyastra
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Resources
              </h2>
              <ul className="text-white font-medium">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">
                    vidyastra
                  </a>
                </li>
                <li>
                  <a href="https://tailwindcss.com/" className="hover:underline">
                    Tailwind CSS
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Follow us
              </h2>
              <ul className="text-white font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Legal
              </h2>
              <ul className="text-white font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-white sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-white sm:text-center">
            © 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a href="#" className="text-white hover:text-gray-500">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
            <a href="#" className="text-white hover:text-gray-500 ms-5">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 21 16"
              >
                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
              </svg>
              <span className="sr-only">Discord community</span>
            </a>
            <a href="#" className="text-white hover:text-gray-500 ms-5">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path
                  fillRule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Twitter page</span>
            </a>
            <a href="#" className="text-white hover:text-gray-500 ms-5">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 .246A9.933 9.933 0 0 0 0 10.179c0 4.396 2.863 8.134 6.837 9.457a.755.755 0 0 0 .163.018c.47 0 .623-.34.623-.617v-2.246c-2.782.62-3.369-1.345-3.369-1.345-.432-1.09-1.06-1.381-1.06-1.381-.867-.591.066-.579.066-.579.957.067 1.464.98 1.464.98.815 1.464 1.93 1.053 2.398.808a1.688 1.688 0 0 1 .504-1.072c-2.222-.257-4.555-1.12-4.555-4.978a4.678 4.678 0 0 1 1.202-3.16A4.303 4.303 0 0 1 5.308 4.7s.842-.275 2.76 1.051a9.438 9.438 0 0 1 5.022 0c1.918-1.326 2.758-1.051 2.758-1.051a4.297 4.297 0 0 1 .127 3.09 4.674 4.674 0 0 1 1.2 3.16c0 3.868-2.336 4.718-4.564 4.968.365.317.603.942.603 1.923v2.846c0 .275.151.617.621.617.055 0 .111-.006.165-.018A9.942 9.942 0 0 0 20 10.179 9.933 9.933 0 0 0 10 .246Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">GitHub account</span>
            </a>
            <a href="#" className="text-white hover:text-gray-500 ms-5">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.562 0H3.437A3.437 3.437 0 0 0 0 3.437v13.125A3.437 3.437 0 0 0 3.437 20h13.125A3.437 3.437 0 0 0 20 16.562V3.437A3.437 3.437 0 0 0 16.562 0Zm-8.2 15.434H5.71V7.814h2.652v7.62ZM7.037 6.51a1.536 1.536 0 1 1 0-3.071 1.536 1.536 0 0 1 0 3.07Zm9.376 8.924h-2.652V11.66c0-.9-.017-2.057-1.254-2.057-1.255 0-1.448.98-1.448 1.992v3.839H8.406V7.814h2.544v1.034h.036a2.786 2.786 0 0 1 2.505-1.378c2.68 0 3.174 1.76 3.174 4.048v3.916Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">LinkedIn account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
