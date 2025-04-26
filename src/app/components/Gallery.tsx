import React from 'react';
import Image from 'next/image';

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
  return (
    <section id="gallery" className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="container mx-auto">
        <div className="flex items-center justify-center mb-8">
         
          <h2 className="text-3xl font-bold text-primary">Photo Gallery</h2>
        </div>
        
        <p className="text-lg text-center max-w-3xl mx-auto mb-12">
          Glimpses of my community service activities and initiatives across Jammu & Kashmir - the Crown of India.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-[1.02]"
            >
              {/* Using img tag directly since we're using external Facebook URLs */}
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4 text-sm">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg shadow-md transform transition duration-300 hover:scale-[1.02]">
            <p className="font-semibold">J&K - The Crown of INDIA</p>
            <p className="text-xs mt-1 opacity-75">Dedicated to serving the people of Jammu & Kashmir</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery; 