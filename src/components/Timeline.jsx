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
      <div className="min-h-screen bg-gradient-to-r from-pink-200 via-purple-300 to-blue-200 flex flex-col items-center px-4 py-10">
        <h1 className="text-4xl font-heading text-purple-700 mb-10 text-center">
          Our Journey Together
        </h1>
        <div className="relative w-full max-w-3xl">
          {/* Vertical Line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-purple-500 h-full"></div>
  
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              className={`relative flex ${
                index % 2 === 0 ? 'items-start text-left' : 'items-end text-right'
              } mb-10 px-4`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              {/* Connecting Dot */}
              <div
                className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-purple-500 rounded-full left-1/2 -translate-x-1/2 z-10"
                style={{ zIndex: 10 }}
              ></div>
  
              {/* Timeline Card */}
              <div
                className={`bg-white rounded-lg shadow-lg p-6 w-full max-w-xs sm:max-w-sm lg:max-w-md ${
                  index % 2 === 0 ? 'ml-6' : 'mr-6'
                }`}
              >
                <h3 className="text-xl font-bold text-purple-700">{milestone.date}</h3>
                <h4 className="text-lg font-semibold text-gray-800">{milestone.event}</h4>
                <p className="text-gray-600">{milestone.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Timeline;