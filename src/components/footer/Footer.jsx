import React from 'react';
// import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-purple-600 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0">
        <img 
          src="/images/footer.png" 
          alt="Background Image" 
          className="w-full h-[290px] object-fit opacity-40" 
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row lg:justify-between">
        <div className="mb-8 lg:mb-0 lg:w-1/3">
          <h2 className="text-5xl font-bold mb-4 pb-5">Vidyastra</h2>
          <p className="mb-4 max-w-md">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 
            1500s, when a it to make a type specimen book.
          </p>
          <div className="flex space-x-4">
            {/* <Facebook size={24} />
            <Instagram size={24} />
            <Youtube size={24} />
            <Twitter size={24} /> */}
          </div>
        </div>
        
        <div className="flex flex-wrap lg:flex-nowrap lg:space-x-12">
          <div className="w-1/2 lg:w-auto mb-8 lg:mb-0">
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li>Menu</li>
              <li>Features</li>
              <li>News & Blogs</li>
              <li>Help & Supports</li>
            </ul>
          </div>
          
          <div className="w-1/2 lg:w-auto mb-8 lg:mb-0">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>How we work</li>
              <li>Terms of service</li>
              <li>Pricing</li>
              <li>FAQ</li>
            </ul>
          </div>
          
          <div className="w-full lg:w-auto">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</p>
            <p className="mb-2">+1 202-918-2132</p>
            <p className="mb-2">education@mail.com</p>
            <p>www.education.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;