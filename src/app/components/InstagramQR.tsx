"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { FaInstagram, FaTimes } from 'react-icons/fa';

const InstagramQR = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button 
        onClick={openModal}
        className="flex items-center text-white bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] px-4 py-2 rounded-lg hover:opacity-90 transition duration-300 mt-4"
      >
        <FaInstagram className="mr-2 text-xl" />
        <span>Scan Instagram QR</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full relative">
            <button 
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              aria-label="Close modal"
            >
              <FaTimes className="text-xl" />
            </button>

            <h3 className="text-xl font-bold mb-4 text-center text-[#C13584]">Follow @MPSAMBYAL on Instagram</h3>
            
            <div className="relative w-full aspect-square mb-4">
              <img 
                src="/images/Insta_qrcode.jpg" 
                alt="Instagram QR Code for @MPSAMBYAL" 
                className="w-full h-full object-contain"
              />
            </div>
            
            <p className="text-center text-gray-600 mb-4">
              Scan this QR code with your phone camera to follow me on Instagram
            </p>
            
            <div className="text-center">
              <a 
                href="https://www.instagram.com/mpsambyal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white px-4 py-2 rounded-lg hover:opacity-90 transition duration-300"
              >
                <FaInstagram className="mr-2" />
                <span>Open Instagram</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InstagramQR; 