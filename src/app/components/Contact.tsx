"use client"
import React, { useState } from 'react';
import ContactForm from './ContactForm';
import InstagramQR from './InstagramQR';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Contact = () => {
  const [isContactInfoVisible, setIsContactInfoVisible] = useState(false);

  const toggleContactInfo = () => {
    setIsContactInfoVisible(!isContactInfoVisible);
  };

  return (
    <section id="contact" className="py-12 md:py-16 px-4 md:px-8 lg:px-16 bg-background">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8 text-center text-primary">Contact Me</h2>
        <p className="text-sm md:text-lg text-center max-w-3xl mx-auto mb-8 md:mb-12 px-2">
          Feel free to reach out if you need any assistance or want to join me in my community service initiatives.
        </p>

        {/* Mobile Accordion for Contact Info */}
        <div className="block md:hidden mb-8">
          <button
            className="w-full flex items-center justify-between bg-white p-4 rounded-lg shadow-md"
            onClick={toggleContactInfo}
          >
            <span className="font-semibold text-secondary">Contact Information</span>
            {isContactInfoVisible ? (
              <FaChevronUp className="text-primary" />
            ) : (
              <FaChevronDown className="text-primary" />
            )}
          </button>
          
          {isContactInfoVisible && (
            <div className="bg-white p-4 rounded-b-lg shadow-md mt-1">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 bg-primary/10 p-2 rounded-full">
                    <FaPhone className="text-primary text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary">Phone</h4>
                    <p className="text-gray-600">+91-7006639985</p>
                    <p className="text-xs text-gray-500 mt-1">Available Mon-Sat, 9am-6pm</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 bg-primary/10 p-2 rounded-full">
                    <FaEnvelope className="text-primary text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary">Email</h4>
                    <p className="text-gray-600 break-words">mpratap0024@gmail.com</p>
                    <p className="text-xs text-gray-500 mt-1">I'll respond as soon as possible</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 bg-primary/10 p-2 rounded-full">
                    <FaInstagram className="text-[#C13584] text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary">Instagram</h4>
                    <p className="text-gray-600">@MPSAMBYAL</p>
                    <p className="text-xs text-gray-500 mt-1">Follow me for updates on activities</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 bg-primary/10 p-2 rounded-full">
                    <FaMapMarkerAlt className="text-primary text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary">Location</h4>
                    <p className="text-gray-600">Samba District, Jammu and Kashmir</p>
                    <p className="text-xs text-gray-500 mt-1">J&K - The Crown of INDIA</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <InstagramQR />
              </div>
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
          {/* Desktop Contact Info - Hidden on Mobile */}
          <div className="hidden md:block">
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-secondary">Contact Information</h3>
              <p className="text-gray-600 mb-6 text-sm md:text-base">
                You can reach out to me through any of the following ways. I'm always open to helping with community initiatives and social causes.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 bg-primary/10 p-2 rounded-full">
                    <FaPhone className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary">Phone</h4>
                    <p className="text-gray-600">+91-7006639985</p>
                    <p className="text-sm text-gray-500 mt-1">Available Mon-Sat, 9am-6pm</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 bg-primary/10 p-2 rounded-full">
                    <FaEnvelope className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary">Email</h4>
                    <p className="text-gray-600">mpratap0024@gmail.com</p>
                    <p className="text-sm text-gray-500 mt-1">I'll respond as soon as possible</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 bg-primary/10 p-2 rounded-full">
                    <FaInstagram className="text-[#C13584] text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary">Instagram</h4>
                    <p className="text-gray-600">@MPSAMBYAL</p>
                    <p className="text-sm text-gray-500 mt-1">Follow me for updates on community activities</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 bg-primary/10 p-2 rounded-full">
                    <FaMapMarkerAlt className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary">Location</h4>
                    <p className="text-gray-600">Samba District, Jammu and Kashmir</p>
                    <p className="text-sm text-gray-500 mt-1">J&K - The Crown of INDIA</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-primary/5 rounded-lg border border-primary/20 mb-6">
              <p className="text-gray-700 text-sm md:text-base">
                <span className="font-semibold text-primary">Note:</span> I am dedicated to serving the people of Jammu & Kashmir through various social initiatives. Your message will be treated with utmost importance.
              </p>
            </div>
            
            <InstagramQR />
          </div>
          
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact; 