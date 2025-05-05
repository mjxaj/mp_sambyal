"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';

const galleryImages = [
  {
    src: "/images/img1.jpg",
    alt: "M.P. Sambyal community service"
  },
  {
    src: "/images/img2.jpg",
    alt: "Social work in Jammu & Kashmir"
  },
  {
    src: "/images/img3.jpg",
    alt: "Community engagement activities"
  },
  {
    src: "/images/img4.jpg",
    alt: "Volunteer work in Samba District"
  },
  {
    src: "/images/img5.jpg",
    alt: "Social initiatives in Jammu & Kashmir"
  },
  {
    src: "/images/img6.jpg",
    alt: "Community service activities"
  },
  {
    src: "/images/img7.jpg",
    alt: "Social work initiatives"
  },
  {
    src: "/images/img8.jpg",
    alt: "Volunteer activities in J&K"
  }
];

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

  const goToPrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => 
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="gallery" className="py-12 md:py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center mb-6 md:mb-8">
        <img 
             src="/jk-logo.png" 
             alt="Jammu & Kashmir Logo" 
             className="h-24 md:h-32 lg:h-40 mb-4"
           />
          <h2 className="text-2xl md:text-3xl font-bold text-primary text-center">Photo Gallery</h2>
        </div>
        
        <p className="text-base md:text-lg text-center max-w-3xl mx-auto mb-8 md:mb-12 px-2">
          Glimpses of my community service activities and initiatives across Jammu & Kashmir - the Crown of India.
        </p>
        
        {/* Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md hover:shadow-lg transform transition duration-300 hover:scale-[1.02]"
              onClick={() => openLightbox(index)}
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70 md:opacity-0 md:hover:opacity-70 transition-opacity duration-300 flex items-end">
                <p className="text-white p-3 text-sm md:text-base">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8 md:mt-12">
          <div className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-5 py-2.5 rounded-lg shadow-md transform transition duration-300 hover:scale-[1.02]">
            <p className="font-semibold text-sm md:text-base">J&K - The Crown of INDIA</p>
            <p className="text-xs md:text-sm mt-1 opacity-75">Dedicated to serving the people of Jammu & Kashmir</p>
          </div>
        </div>
      </div>

      {/* Lightbox for full-screen image viewing */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-4 right-4 text-white p-2 z-10"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <FaTimes className="text-2xl" />
          </button>
          
          <button 
            className="absolute left-4 md:left-8 text-white p-2 z-10"
            onClick={goToPrevImage}
            aria-label="Previous image"
          >
            <FaArrowLeft className="text-2xl" />
          </button>
          
          <button 
            className="absolute right-4 md:right-8 text-white p-2 z-10"
            onClick={goToNextImage}
            aria-label="Next image"
          >
            <FaArrowRight className="text-2xl" />
          </button>
          
          <div className="w-full max-w-4xl max-h-[80vh] relative">
            <img 
              src={galleryImages[currentImageIndex].src}
              alt={galleryImages[currentImageIndex].alt}
              className="w-full h-full object-contain"
            />
            <p className="text-white text-center mt-4">{galleryImages[currentImageIndex].alt}</p>
            <p className="text-white text-center mt-2 text-sm opacity-70">{currentImageIndex + 1} of {galleryImages.length}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery; 