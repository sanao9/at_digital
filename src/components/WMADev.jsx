import React from 'react';
import Image2 from '../assets/image 2 (3).png';

const WMADev = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-40">
      {/* Image */}
      <img 
        src={Image2} 
        alt="Web and Mobile App Development" 
        className="w-full md:w-1/4 h-full rounded-lg mb-4 md:mb-0"
      />
      
      {/* Text Content */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-2xl font-bold">Web & Mobile App Development</h1>
        <p className="mt-2 text-gray-700">
          Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks that tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.
        </p>
        <button className="mt-4 bg-secondary text-white py-2 px-4 rounded hover:bg-orange-500 transition duration-300">
          LEARN MORE
        </button>
      </div>
    </div>
  );
};

export default WMADev;
