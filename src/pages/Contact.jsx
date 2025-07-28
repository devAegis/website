import { 
  FaEnvelope, 
  FaLinkedin, 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaTiktok,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock
} from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import React from 'react';


const ContactPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            We'd love to hear from you! Reach out through any of these channels.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="container mx-auto py-16 px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Email Card */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200">
            <div className="flex justify-center text-4xl text-gray-800 mb-4">
              <FaEnvelope />
            </div>
            <h3 className="text-xl font-bold text-center mb-2">Email Us</h3>
            <p className="text-gray-600 text-center mb-4">
              Send us a message anytime
            </p>
            <a 
              href="mailto:contact@devaegis.com" 
              className="block text-center text-gray-800 font-medium hover:text-blue-600 transition-colors"
            >
              contact@devaegis.com
            </a>
          </div>

          {/* Location Card */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200">
            <div className="flex justify-center text-4xl text-gray-800 mb-4">
              <FaMapMarkerAlt />
            </div>
            <h3 className="text-xl font-bold text-center mb-2">Our Office</h3>
            <p className="text-gray-600 text-center mb-4">
              Visit us during business hours
            </p>
            <p className="text-center text-gray-800">
              123 Tech Street, Silicon Valley, CA
            </p>
          </div>

          {/* Phone Card */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200">
            <div className="flex justify-center text-4xl text-gray-800 mb-4">
              <FaPhoneAlt />
            </div>
            <h3 className="text-xl font-bold text-center mb-2">Call Us</h3>
            <p className="text-gray-600 text-center mb-4">
              Available 9AM-5PM EST
            </p>
            <a 
              href="tel:+11234567890" 
              className="block text-center text-gray-800 font-medium hover:text-blue-600 transition-colors"
            >
              +1 (123) 456-7890
            </a>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-8">Connect With Us</h2>
          <div className="flex justify-center space-x-6">
            <a 
              href="https://linkedin.com/company/devaegis" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-3xl text-gray-700 hover:text-blue-700 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://facebook.com/devaegis" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-3xl text-gray-700 hover:text-blue-600 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a 
              href="https://twitter.com/devaegis" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-3xl text-gray-700 hover:text-blue-400 transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a 
              href="https://instagram.com/devaegis" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-3xl text-gray-700 hover:text-pink-600 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a 
              href="https://tiktok.com/@devaegis" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-3xl text-gray-700 hover:text-black transition-colors"
              aria-label="TikTok"
            >
              <FaTiktok />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-16 max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md border border-gray-200">
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          <form>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                />
              </div>
            </div>
            <div className="mt-6">
              <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
              <textarea 
                id="message" 
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="mt-6 bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;