"use client"
import React, { useState, useEffect } from 'react';
import { FaInstagram, FaTimes } from 'react-icons/fa';

const InstagramQR = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };
  
  // Close modal on escape key press
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        closeModal();
      }
    };
    
    window.addEventListener('keydown', handleEscKey);
    return () => window.removeEventListener('keydown', handleEscKey);
  }, [isOpen]);

  return (
    <>
      <button 
        onClick={openModal}
        className="flex items-center justify-center w-full sm:w-auto text-white bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] px-4 py-2 rounded-lg hover:opacity-90 transition duration-300 shadow-md"
        aria-label="View Instagram QR Code"
      >
        <FaInstagram className="mr-2 text-lg" />
        <span className="font-medium">Scan Instagram QR</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 md:p-8">
          <div 
            className="bg-white rounded-xl p-5 max-w-xs w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={closeModal}
              className="absolute -top-3 -right-3 bg-white text-gray-800 p-1.5 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200"
              aria-label="Close modal"
            >
              <FaTimes className="text-lg" />
            </button>

            <div className="text-center">
              <FaInstagram className="text-3xl text-[#C13584] mx-auto mb-2" />
              <h3 className="text-lg font-bold mb-4 text-[#C13584]">Follow @MPSAMBYAL</h3>
            </div>
            
            <div className="relative w-full aspect-square mb-4 flex items-center justify-center rounded-lg overflow-hidden bg-white p-1 border border-gray-200">
              <img 
                src="/images/Insta_qrcode.jpg" 
                alt="Instagram QR Code for @MPSAMBYAL" 
                className="w-full h-full object-contain rounded-md"
              />
            </div>
            
            <p className="text-center text-gray-600 text-sm mb-4">
              Scan this QR code with your phone camera to follow me on Instagram
            </p>
            
            <a 
              href="https://www.instagram.com/mpsambyal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full text-center bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white py-2.5 px-4 rounded-lg hover:opacity-90 transition duration-300 font-medium"
              onClick={closeModal}
            >
              Open Instagram
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default InstagramQR; 