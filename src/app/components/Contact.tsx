import React from 'react';
import ContactForm from './ContactForm';
import InstagramQR from './InstagramQR';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 md:px-8 lg:px-16 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">Contact Me</h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-12">
          Feel free to reach out if you need any assistance or want to join me in my community service initiatives.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-secondary">Contact Information</h3>
              <p className="text-gray-600 mb-6">
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
              <p className="text-gray-700">
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