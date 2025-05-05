"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-primary to-secondary text-white py-6 px-4 md:px-8 lg:px-16 relative">
      <div className="container mx-auto flex justify-between items-start">
        <div className="flex-1">
          {/* Top Section with Logo and Mobile Menu Toggle */}
          <div className="flex items-center justify-between mb-4 md:mb-0">
            <div className="flex items-center">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 mr-3 overflow-hidden rounded-full border-2 border-white shadow-lg">
                <Image 
                  src="/profile-image.jpg" 
                  alt="M.P. Sambyal" 
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">M.P. Sambyal</h1>
                <p className="text-sm md:text-base lg:text-lg opacity-90">Social Worker & Volunteer</p>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-white p-2 focus:outline-none"
              onClick={toggleMenu}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? (
                <FaTimes className="text-2xl" />
              ) : (
                <FaBars className="text-2xl" />
              )}
            </button>
          </div>
          
          {/* Location Info */}
          <p className="text-xs md:text-sm opacity-80 mt-0 mb-4 md:mb-6">Samba District, Jammu and Kashmir - The Crown of INDIA</p>
          
          {/* Social Media Links - Desktop */}
          <div className="hidden md:flex flex-wrap gap-2">
            <a 
              href="https://m.facebook.com/mp.sambyal/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center bg-white text-[#1877F2] px-3 py-1.5 rounded-lg hover:bg-opacity-90 transition duration-300 text-sm"
            >
              <FaFacebook className="mr-1.5 text-lg" />
              <span>Facebook</span>
            </a>
            <a 
              href="https://youtube.com/@mohinderpratapsingh-j9r?si=74XBeQwEbQkSsGFq" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center bg-white text-[#FF0000] px-3 py-1.5 rounded-lg hover:bg-opacity-90 transition duration-300 text-sm"
            >
              <FaYoutube className="mr-1.5 text-lg" />
              <span>YouTube</span>
            </a>
            <a 
              href="https://x.com/mp_sambyal?t=RzUGOQ3TJXR-Ce6yfL76dA&s=08" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center bg-white text-black px-3 py-1.5 rounded-lg hover:bg-opacity-90 transition duration-300 text-sm"
            >
              <FaTwitter className="mr-1.5 text-lg" />
              <span>Twitter</span>
            </a>
            <a 
              href="https://www.instagram.com/mpsambyal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center bg-white text-[#C13584] px-3 py-1.5 rounded-lg hover:bg-opacity-90 transition duration-300 text-sm"
            >
              <FaInstagram className="mr-1.5 text-lg" />
              <span>Instagram</span>
            </a>
          </div>
        </div>

        {/* J&K Logo - Desktop */}
        <div className="hidden md:block ml-8">
          <img 
            src="/jk-logo.png" 
            alt="Jammu & Kashmir Logo" 
            className="h-24 md:h-32 lg:h-40"
          />
        </div>
      </div>

      {/* Social Media Links - Mobile */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-gradient-to-b from-primary to-secondary z-50 py-8 px-6 flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold text-white">Connect With Me</h2>
            <button 
              onClick={toggleMenu}
              className="text-white p-2 focus:outline-none"
              aria-label="Close menu"
            >
              <FaTimes className="text-2xl" />
            </button>
          </div>
          
          {/* J&K Logo in Mobile Menu */}
          <div className="flex justify-center mb-6">
            <img 
              src="/jk-logo.png" 
              alt="Jammu & Kashmir Logo" 
              className="h-24"
            />
          </div>
          
          <div className="flex flex-col space-y-4">
            <a 
              href="https://m.facebook.com/mp.sambyal/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center bg-white text-[#1877F2] px-4 py-3 rounded-lg hover:bg-opacity-90 transition duration-300"
              onClick={toggleMenu}
            >
              <FaFacebook className="mr-3 text-xl" />
              <span className="font-medium">Connect on Facebook</span>
            </a>
            <a 
              href="https://youtube.com/@mohinderpratapsingh-j9r?si=74XBeQwEbQkSsGFq" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center bg-white text-[#FF0000] px-4 py-3 rounded-lg hover:bg-opacity-90 transition duration-300"
              onClick={toggleMenu}
            >
              <FaYoutube className="mr-3 text-xl" />
              <span className="font-medium">Subscribe on YouTube</span>
            </a>
            <a 
              href="https://x.com/mp_sambyal?t=RzUGOQ3TJXR-Ce6yfL76dA&s=08" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center bg-white text-black px-4 py-3 rounded-lg hover:bg-opacity-90 transition duration-300"
              onClick={toggleMenu}
            >
              <FaTwitter className="mr-3 text-xl" />
              <span className="font-medium">Follow on Twitter</span>
            </a>
            <a 
              href="https://www.instagram.com/mpsambyal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center bg-white text-[#C13584] px-4 py-3 rounded-lg hover:bg-opacity-90 transition duration-300"
              onClick={toggleMenu}
            >
              <FaInstagram className="mr-3 text-xl" />
              <span className="font-medium">Follow on Instagram</span>
            </a>
          </div>
          
          <div className="mt-auto text-center text-white opacity-80 text-sm">
            <p className="mb-2">Samba District, Jammu and Kashmir</p>
            <p>J&K - The Crown of INDIA</p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 