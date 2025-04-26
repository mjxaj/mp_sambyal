import React from 'react';
import { FaHeartbeat, FaHandsHelping, FaYinYang, FaTint, FaSeedling, FaWater } from 'react-icons/fa';

const serviceItems = [
  {
    icon: <FaHeartbeat className="text-4xl text-primary" />,
    title: 'Health Sector',
    description: 'Organizing health camps and providing assistance to those in need of medical support.'
  },
  {
    icon: <FaHandsHelping className="text-4xl text-primary" />,
    title: 'Domestic Help',
    description: 'Supporting families and individuals with essential domestic needs during difficult times.'
  },
  {
    icon: <FaYinYang className="text-4xl text-primary" />,
    title: 'Yoga Camps',
    description: 'Conducting yoga sessions to promote physical and mental wellbeing in the community.'
  },
  {
    icon: <FaTint className="text-4xl text-primary" />,
    title: 'Blood Donation',
    description: 'Organizing blood donation drives to help save lives and support healthcare facilities.'
  },
  {
    icon: <FaSeedling className="text-4xl text-primary" />,
    title: 'Plantation Drives',
    description: 'Leading initiatives to plant trees and promote ecological balance in the region.'
  },
  {
    icon: <FaWater className="text-4xl text-primary" />,
    title: 'Water Conservation',
    description: 'Promoting awareness and implementing programs for responsible water usage and conservation.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 px-4 md:px-8 lg:px-16 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">Community Services</h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-12">
          I am dedicated to serving the community through various initiatives and volunteer work. Here are some of the areas where I contribute:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-secondary">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 