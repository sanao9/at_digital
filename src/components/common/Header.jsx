import React, { useState } from 'react';
import logo from '../../assets/Logo (1).png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-primary text-white p-6">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img
            src={logo}
            alt="AT Digital Logo"
            className="w-30 h-8 md:w-30 md:h-8"
          />
        </div>

        {/* Navigation Links for Desktop */}
        <nav className="hidden md:flex space-x-6 ml-5">
          <ul className="flex space-x-10">
            <li>
              <a href="#services" className="hover:text-gray-300">
                SERVICES
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-300">
                ABOUT US
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-300">
                CONTACT US
              </a>
            </li>
            <li>
              <a href="#careers" className="hover:text-gray-300">
                CAREERS
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white mt-4">
          <ul className="space-y-4 py-4">
            <li>
              <a
                href="#services"
                className="block px-4 py-2 text-black hover:bg-slate-400"
                onClick={toggleMobileMenu}
              >
                SERVICES
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block px-4 py-2 text-black hover:bg-slate-400"
                onClick={toggleMobileMenu}
              >
                ABOUT US
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block px-4 py-2 bold text-black hover:bg-slate-400"
                onClick={toggleMobileMenu}
              >
                CONTACT US
              </a>
            </li>
            <li>
              <a
                href="#careers"
                className="block px-4 py-2 text-black hover:bg-slate-400"
                onClick={toggleMobileMenu}
              >
                CAREERS
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
