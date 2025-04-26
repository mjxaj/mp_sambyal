import React from 'react';
import { FaFacebook, FaEnvelope, FaPhone, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-text text-white py-12 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">M.P. Sambyal</h3>
            <p className="mb-2">Social Worker & Volunteer</p>
            <p className="mb-2">Samba District, Jammu and Kashmir</p>
            <p>J&K - The Crown of INDIA</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">My Principles</h3>
            <ul className="space-y-2">
              <li>"जिओ और जीने दो।" (Live and let live)</li>
              <li>Respect for all religions</li>
              <li>Honesty is the best policy</li>
              <li>Help others whenever possible</li>
              <li>Keep faith in God</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://m.facebook.com/mp.sambyal/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-[#1877F2] transition-colors duration-300"
                aria-label="Facebook"
              >
                <FaFacebook className="text-2xl social-icon" />
              </a>
              <a 
                href="https://youtube.com/@mohinderpratapsingh-j9r?si=74XBeQwEbQkSsGFq" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-[#FF0000] transition-colors duration-300"
                aria-label="YouTube"
              >
                <FaYoutube className="text-2xl social-icon" />
              </a>
              <a 
                href="https://x.com/mp_sambyal?t=RzUGOQ3TJXR-Ce6yfL76dA&s=08" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400 transition-colors duration-300"
                aria-label="Twitter/X"
              >
                <FaTwitter className="text-2xl social-icon" />
              </a>
              <a 
                href="https://www.instagram.com/mpsambyal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-[#C13584] transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="text-2xl social-icon" />
              </a>
              <a 
                href="mailto:mpratap0024@gmail.com?subject=Contact%20from%20Website&body=Hello%20M.P.%20Sambyal,%0A%0AI%20am%20contacting%20you%20from%20your%20website.%0A%0A" 
                className="text-white hover:text-[#D44638] transition-colors duration-300"
                aria-label="Email"
              >
                <FaEnvelope className="text-2xl social-icon" />
              </a>
              <a 
                href="tel:+917006639985" 
                className="text-white hover:text-[#25D366] transition-colors duration-300"
                aria-label="Phone"
              >
                <FaPhone className="text-2xl social-icon" />
              </a>
            </div>
            <p className="mb-2">
              <strong>Mobile:</strong> +91-7006639985
            </p>
            <p className="mb-4">
              <strong>Email:</strong> mpratap0024@gmail.com
            </p>
            <p className="text-sm opacity-75">
              Feel free to reach out if you need any assistance or want to join me in my community service initiatives.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
          <p>© {new Date().getFullYear()} M.P. Sambyal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 