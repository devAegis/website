import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


function Landing() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow h-[100vh] bg-gray-100 flex items-center justify-center">
        <div className="container mx-auto p-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Welcome to <span className="text-blue-600">Dev Aegis</span>
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your shield in the digital world. Building innovative solutions for modern businesses.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg transition-colors">
            Explore Our Services
          </button>
        </div>

        {/* Color swatches demo */}
        <div className="flex space-x-4 justify-center my-12">
          <div className='w-[30px] h-[30px] bg-[#3C9BCE] rounded'></div>
          <div className='w-[30px] h-[30px] bg-[#69C4DC] rounded'></div>
          <div className='w-[30px] h-[30px] bg-[#93FFA7] rounded'></div>
        </div>
      </main>
      
      <Footer />
    </div>

  );
}

export default Landing;