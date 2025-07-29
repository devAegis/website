import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Dev Aegis</Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link to="/services" className="hover:text-blue-300 transition-colors">Services</Link>
          <Link to="/about" className="hover:text-blue-300 transition-colors">About</Link>
          <Link to="/contact" className="hover:text-blue-300 transition-colors">Contact</Link>
        </div>
        
        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700 px-4 py-2">
          <div className="flex flex-col space-y-3">
            <Link 
              to="/services" 
              className="hover:text-blue-300 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className="hover:text-blue-300 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="hover:text-blue-300 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;