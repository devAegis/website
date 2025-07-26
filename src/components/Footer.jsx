import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Dev Aegis</h3>
          
        </div>
        <div>
          <h4 className="font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#services" className="hover:text-blue-300 transition-colors">Services</a></li>
            <li><a href="#about" className="hover:text-blue-300 transition-colors">About Us</a></li>
            <li><a href="#contact" className="hover:text-blue-300 transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Contact Us</h4>
          <p className="text-gray-300">Email: info@devaegis.com</p>
          <p className="text-gray-300">Phone: (123) 456-7890</p>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Dev Aegis. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;