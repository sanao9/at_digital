import React from 'react';
import PIC from '../assets/andy-kelly-0E_vhMVqL9g-unsplash 2.png';

const Banner = () => {
  return (
    <div className="relative h-screen">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-0 z-10"></div>

      {/* Text and Image Container */}
      <div className="absolute inset-0 flex flex-col md:flex-row items-end justify-between z-20 container mx-auto p-6 md:p-8">
        {/* Text Section */}
        <div className="flex-1 flex flex-col justify-center items-start mb-4 md:mb-0">
          <div
            className="max-w-2xl p-4 rounded-lg"
            style={{
              background: 'linear-gradient(90deg, #00c9a7 0%, #007cf0 100%)'
            }}
          >
            <h1 className="text-3xl md:text-6xl font-bold text-white leading-tight mb-4 md:mb-6">
              We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
            </h1>
            <button className="bg-secondary text-white font-bold py-2 px-4 rounded-md hover:bg-orange-500 transition duration-300">
              GET FREE CONSULTATION
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center">
          <img src={PIC} alt="image-alt" className="object-cover w-full h-full rounded-sm md:hidden" />
        </div>
      </div>

      {/* Image for Desktop */}
      <img src={PIC} alt="image-alt" className="hidden md:block object-cover w-full h-full" />
    </div>
  );
};

export default Banner;
