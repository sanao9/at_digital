import React from 'react';
import Image3 from '../assets/image 1.png';

const DSCon = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-4 p-40">
      {/* Text Content */}
      <div className="flex-1 mb-4 md:mb-0 text-center md:text-left">
        <h1 className="text-2xl font-bold">Digital Strategy Consulting</h1>
        <p className="mt-2 text-gray-700">
          Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.
        </p>
        <button className="mt-4 bg-secondary text-white py-2 px-4 rounded hover:bg-orange-500 transition duration-300">
          LEARN MORE
        </button>
      </div>

      {/* Image */}
      <img
        src={Image3}
        alt="the image"
        className="w-full md:w-1/4 h-full rounded-lg"
      />
    </div>
  );
};

export default DSCon;
