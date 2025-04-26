import React from 'react';
import { FaHeartbeat, FaHandsHelping, FaYinYang, FaTint, FaSeedling, FaWater } from 'react-icons/fa';

const serviceItems = [
  {
    icon: <FaHeartbeat className="text-3xl md:text-4xl text-primary" />,
    title: 'Health Sector',
    description: 'Organizing health camps and providing assistance to those in need of medical support.'
  },
  {
    icon: <FaHandsHelping className="text-3xl md:text-4xl text-primary" />,
    title: 'Domestic Help',
    description: 'Supporting families and individuals with essential domestic needs during difficult times.'
  },
  {
    icon: <FaYinYang className="text-3xl md:text-4xl text-primary" />,
    title: 'Yoga Camps',
    description: 'Conducting yoga sessions to promote physical and mental wellbeing in the community.'
  },
  {
    icon: <FaTint className="text-3xl md:text-4xl text-primary" />,
    title: 'Blood Donation',
    description: 'Organizing blood donation drives to help save lives and support healthcare facilities.'
  },
  {
    icon: <FaSeedling className="text-3xl md:text-4xl text-primary" />,
    title: 'Plantation Drives',
    description: 'Leading initiatives to plant trees and promote ecological balance in the region.'
  },
  {
    icon: <FaWater className="text-3xl md:text-4xl text-primary" />,
    title: 'Water Conservation',
    description: 'Promoting awareness and implementing programs for responsible water usage and conservation.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-12 md:py-16 px-4 md:px-8 lg:px-16 bg-background">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8 text-center text-primary">Community Services</h2>
        <p className="text-sm md:text-lg text-center max-w-3xl mx-auto mb-8 md:mb-12 px-2">
          I am dedicated to serving the community through various initiatives and volunteer work. Here are some of the areas where I contribute:
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {serviceItems.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-4 md:p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-3 md:mb-4 bg-primary/5 p-3 rounded-full">
                  {service.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-secondary">{service.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 hidden md:block">
          <a href="#contact" className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-6 py-2.5 rounded-lg shadow-md hover:opacity-90 transition duration-300 text-sm font-medium">
            Join My Community Initiatives
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services; 