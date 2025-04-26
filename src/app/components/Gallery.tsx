"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';

const galleryImages = [
  {
    src: "https://scontent.fnag4-1.fna.fbcdn.net/v/t39.30808-6/481154275_1929942314202067_915219229702217953_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=FAVmm1Ak-jIQ7kNvwH--KYY&_nc_oc=AdnvR-w3MiM0qoKq7fJiO2ST2kBQJY93NjeTR99p1gGP27YYYPj1W3FSzF5G8RM5MN5GkbAo95k-tmlWeoScGZGf&_nc_zt=23&_nc_ht=scontent.fnag4-1.fna&_nc_gid=MpagaJHB4HGCfB4YhFOCvQ&oh=00_AfHFoVBuvDYAe4-njQGDGs4XpHJK5yFxaVXwyFpIfyIbyQ&oe=68126B5E",
    alt: "M.P. Sambyal community service"
  },
  {
    src: "https://scontent.fnag4-1.fna.fbcdn.net/v/t39.30808-6/481291682_1929942317535400_7453339729248935133_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=NL-bhB3Mm6UQ7kNvwFInvuX&_nc_oc=AdkHGEzn8QliUvoDhbfhjAVV2ReTqDBvfJlVrNbTA6tOQj3ost7Shek8pjKLRJax1CpbLQxbjf3WZTkHqvgKWQQR&_nc_zt=23&_nc_ht=scontent.fnag4-1.fna&_nc_gid=t-FF6PIZhEyK1WOx-ibuFQ&oh=00_AfGDhzZKZhMG6KI8R4dF9kngNe4z2wpkrsrvYIV-m7xNTA&oe=6812964A",
    alt: "Social work in Jammu & Kashmir"
  },
  {
    src: "https://scontent.fnag4-1.fna.fbcdn.net/v/t39.30808-6/481898928_1931871780675787_1860350828383772032_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=WtYOH8TxEF0Q7kNvwFWw22g&_nc_oc=AdkDTDcmbFkNb4xGQwXKFQKyVR7wsPkVBKH5bIqnNLj9rrKw5Z5Hz6cZxAH-2kJKjxOLCDkpZis3VSviS8L4jKqu&_nc_zt=23&_nc_ht=scontent.fnag4-1.fna&_nc_gid=CnY3SVBr1iIyNIX7tBywDg&oh=00_AfHFhIn4gSHJyBF9QfM8ctKUSK4ZzFJTsAZH9_3R6wWyAg&oe=6812867D",
    alt: "Community engagement activities"
  },
  {
    src: "https://scontent.fnag4-2.fna.fbcdn.net/v/t39.30808-6/475848853_1909131592949806_6588018433878462793_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=VZwN8Eu6_SAQ7kNvwEcWP61&_nc_oc=AdnrD5HBTTtA57cF7yaMhxOZoe-4ftvt8qyoRa-WsPdT3_mo0tLkj4ZJPENgPzrpGBGzsQg0GZQ_vHVEhA3lLw8k&_nc_zt=23&_nc_ht=scontent.fnag4-2.fna&_nc_gid=q-nGLhnuTHDdG11j3Y2Tew&oh=00_AfGcKtxhW2wSAqhzKtXBbzQrsSINMSfHVsRUEQbI_fBKmg&oe=681276E9",
    alt: "Volunteer work in Samba District"
  },
  {
    src: "https://scontent.fnag4-3.fna.fbcdn.net/v/t39.30808-6/476096327_1908514966344802_6454450994809664051_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=flz-65v1XH8Q7kNvwG0AiwU&_nc_oc=AdlAe9uOSeNQPNq4lycXJKm6U6FJLmTq8SL-sEp2gIGU-W0hx2dtu-eOTjeyudv3kcJFOnzOEG4bjj81sX7pfpEn&_nc_zt=23&_nc_ht=scontent.fnag4-3.fna&_nc_gid=Se8-STYlFMGxn7ommwBdFQ&oh=00_AfFtRqGCUCylsFDuCbFS6CKfhBrPS8wnCnlj1wK4jlKc_w&oe=68128864",
    alt: "Social initiatives in Jammu & Kashmir"
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
            className="h-12 md:h-16 mb-3"
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