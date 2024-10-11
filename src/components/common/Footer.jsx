import React from 'react';
import logo from '../../assets/Logo (1).png';

const Footer = () => {
  return (
    <footer className="bg-accent text-white py-10">
      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Logo and Description */}
        <div className="text-center md:text-left">
          <div className="flex justify-center md:justify-start items-center space-x-2 mb-4">
            <img src={logo} alt="AT DIGITAL" className="w-30 h-10" />
          </div>
          <p className="text-sm">
            Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve a
            single objective - your business results.
          </p>
        </div>

        {/* Our Technologies */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold mb-4">Our Technologies</h3>
          <ul className="space-y-2">
            <li>ReactJS</li>
            <li>Gatsby</li>
            <li>NextJS</li>
            <li>NodeJS</li>
          </ul>
        </div>

        {/* Our Services */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li>Social Media Marketing</li>
            <li>Web & Mobile App Development</li>
            <li>Data & Analytics</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-primary mt-10 pt-4 text-center">
        <ul className="flex justify-center space-x-6 text-sm">
          <li>
            <a href="#privacy" className="hover:underline">
              Privacy Policy
            </a>
          </li>
          <li>|</li>
          <li>
            <a href="#terms" className="hover:underline">
              Terms & Conditions
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
