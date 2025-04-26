import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-primary to-secondary text-white py-8 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col md:flex-row items-center mb-6 md:mb-0">
          <div className="relative w-40 h-40 mr-0 md:mr-6 mb-4 md:mb-0 overflow-hidden rounded-full border-4 border-white shadow-lg">
            <Image 
              src="/profile-image.jpg" 
              alt="M.P. Sambyal" 
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">M.P. Sambyal</h1>
            <p className="text-xl opacity-90">Social Worker & Volunteer</p>
            <p className="text-sm md:text-base opacity-80 mt-1">Samba District, Jammu and Kashmir</p>
          </div>
        </div>
        <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-3">
          <a 
            href="https://m.facebook.com/mp.sambyal/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center bg-white text-[#1877F2] px-4 py-2 rounded-lg hover:bg-opacity-90 transition duration-300"
          >
            <FaFacebook className="mr-2 text-xl" />
            <span>Facebook</span>
          </a>
          <a 
            href="https://youtube.com/@mohinderpratapsingh-j9r?si=74XBeQwEbQkSsGFq" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center bg-white text-[#FF0000] px-4 py-2 rounded-lg hover:bg-opacity-90 transition duration-300"
          >
            <FaYoutube className="mr-2 text-xl" />
            <span>YouTube</span>
          </a>
          <a 
            href="https://x.com/mp_sambyal?t=RzUGOQ3TJXR-Ce6yfL76dA&s=08" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center bg-white text-black px-4 py-2 rounded-lg hover:bg-opacity-90 transition duration-300"
          >
            <FaTwitter className="mr-2 text-xl" />
            <span>Twitter</span>
          </a>
          <a 
            href="https://www.instagram.com/mpsambyal" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center bg-white text-[#C13584] px-4 py-2 rounded-lg hover:bg-opacity-90 transition duration-300"
          >
            <FaInstagram className="mr-2 text-xl" />
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header; 