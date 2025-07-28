import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Dev Aegis</Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/services" className="hover:text-blue-300 transition-colors">Services</Link>
          <Link to="/about" className="hover:text-blue-300 transition-colors">About</Link>
          <Link to="/contact" className="hover:text-blue-300 transition-colors">Contact</Link>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition-colors">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;