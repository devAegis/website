import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 sticky top-0 z-50">
      <div className="cont</nav>ainer mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Dev Aegis</Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/services" className="hover:text-blue-300 transition-colors">Services</Link>
          <Link to="/about" className="hover:text-blue-300 transition-colors">About</Link>
          <Link to="/contact" className="hover:text-blue-300 transition-colors">Contact</Link>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;