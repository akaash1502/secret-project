import React from 'react';
import { motion } from 'framer-motion';

const milestones = [
  {
    date: "February 22, 2024",
    event: "We met for the first time 💕",
    details: "The day I knew my life was about to change forever.",
  },
  {
    date: "February 29, 2024",
    event: "I confessed I Like you 🥰",
    details: "The first time I told someone I liked them.",
  },
  {
    date: "March 7, 2024",
    event: "좋아해요 💖",
    details: "Smoothest confession to ever exist.",
  },
  {
    date: "March 12, 2024",
    event: "First kiss of my life 💋",
    details: "The most magical moment to ever exist.",
  },
  
];

const Timeline = () => {
    return (
      <div className="min-h-screen bg-gradient-to-r from-pink-200 via-purple-300 to-blue-200 flex flex-col items-center p-6">
        <h1 className="text-4xl font-heading text-purple-700 mb-8">Our Journey Together</h1>
        <div className="w-full max-w-4xl relative">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'lg:text-left' : 'lg:text-right'
              } text-center`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              {/* Vertical Line */}
              <div className="absolute w-2 bg-purple-500 left-1/2 transform -translate-x-1/2 top-0 bottom-0"></div>
  
              {/* Milestone Card */}
              <div
                className={`bg-white rounded-lg shadow-lg p-6 inline-block ${
                  index % 2 === 0 ? 'lg:ml-6' : 'lg:mr-6'
                } mx-auto`}
              >
                <h3 className="text-xl font-semibold text-purple-700">{milestone.date}</h3>
                <h4 className="text-lg font-bold text-gray-700">{milestone.event}</h4>
                <p className="text-gray-600">{milestone.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };
  
export default Timeline;
