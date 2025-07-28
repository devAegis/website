import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';


function Landing() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow  bg-gray-100 items-center justify-center">
        <section 
          className="relative h-screen w-full bg-gray-900 text-white"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1556740714-a8395b3bf30f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed"
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
          
          <div className="relative z-10 container h-full mx-auto px-4 flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to <span className="text-blue-400">Dev Aegis</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Your shield in the digital world. Building innovative solutions for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="border-2 border-white text-white px-8 py-3 w-[17vw] rounded-lg text-lg font-semibold transition-colors">
                Discover our services
              </button>
              <button className="border-2 border-white text-white px-8 py-3 w-[17vw] rounded-lg text-lg font-semibold transition-colors">
                Contact us today
              </button>
            </div>
            
          </div>
        </section>
 {/* Hero Banner */}
        <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-4">
          <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
            {/* Text Content */}
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Digital Armor for Your Business
              </h1>
              <p className="text-xl text-blue-100">
                Dev Aegis provides cutting-edge web, app, and AI solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="bg-white text-blue-800 hover:bg-blue-100 px-8 py-3 rounded-lg font-semibold text-center transition-all duration-300"
                >
                  Get Free Consultation
                </Link>
                <Link 
                  to="/services" 
                  className="border-2 border-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold text-center transition-all duration-300"
                >
                  Explore Services
                </Link>
              </div>
            </div>
            
            {/* Visual Element */}
            <div className="md:w-1/2">
              <img 
                src="/hero-illustration.svg" 
                alt="Security shield protecting digital assets" 
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </section>

       

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