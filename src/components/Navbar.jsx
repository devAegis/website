import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Dev Aegis</div>
        <div className="hidden md:flex space-x-6">
          <a href="#services" className="hover:text-blue-300 transition-colors">Services</a>
          <a href="#about" className="hover:text-blue-300 transition-colors">About</a>
          <a href="#portfolio" className="hover:text-blue-300 transition-colors">Portfolio</a>
          <a href="#contact" className="hover:text-blue-300 transition-colors">Contact</a>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition-colors">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;