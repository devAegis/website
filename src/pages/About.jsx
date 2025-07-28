import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        {/* Your services content */}
      </main>
      
      <Footer />
    </div>
  );
};

export default About;