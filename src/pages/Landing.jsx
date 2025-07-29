import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import ServicesSection from '../components/ServicesSection';



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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 px-4">
              Welcome to <span className="text-gray-500">Dev Aegis</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto px-4">
              Your shield in the digital world. Building innovative solutions for modern businesses.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 justify-center">
              <button className="
                border-2 border-white hover:border-blue-400 hover:text-blue-400 
                text-white px-6 py-3 sm:px-8 sm:py-3 
                w-full sm:w-auto min-w-[200px]
                rounded-lg text-lg font-semibold 
                transition-colors duration-300
              ">
                Discover our services
              </button>
              
              <button className="
                border-2 border-white hover:border-blue-400 hover:text-blue-400 
                text-white px-6 py-3 sm:px-8 sm:py-3 
                w-full sm:w-auto min-w-[200px]
                rounded-lg text-lg font-semibold 
                transition-colors duration-300
                bg-blue-600 hover:bg-blue-700 
              ">
                Contact us today
              </button>
            </div>
          </div>
        </section>

        <section>
           <ServicesSection />
        </section>




        
 {/* Hero Banner */}
        <section className="relative py-12 md:py-20 px-4 min-h-screen flex items-center text-white overflow-hidden">
          {/* Background Image with Gradient Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://plus.unsplash.com/premium_photo-1661783512537-95fd8d054fa7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQwfHx8ZW58MHx8fHx8"
              alt="Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
          </div>

          {/* Content Container */}
          <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10">
            {/* Text Content */}
            <div className="w-full md:w-1/2 space-y-4 sm:space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Digital Armor for Your Business
              </h1>
              <p className="text-lg sm:text-xl text-gray-100 max-w-lg">
                Dev Aegis provides cutting-edge web, app, and AI solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link 
                  to="/contact" 
                  className="bg-white text-gray-800 hover:bg-blue-100 px-6 py-3 sm:px-8 sm:py-3 rounded-lg font-semibold text-center transition-all duration-300 text-sm sm:text-base"
                >
                  Get Free Consultation
                </Link>
                <Link 
                  to="/services" 
                  className="border-2 border-white hover:bg-white/10 px-6 py-3 sm:px-8 sm:py-3 rounded-lg font-semibold text-center transition-all duration-300 text-sm sm:text-base"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            {/* Optional Image/Graphic Section - Add if needed */}
            {/* <div className="w-full md:w-1/2">
              <img src="/your-graphic.png" alt="Digital Solutions" className="w-full h-auto" />
            </div> */}
          </div>
        </section>

       

        {/* Color swatches demo */}
        <div className="flex space-x-4 justify-center my-12">
        </div>
      </main>
      
      <Footer />
    </div>

  );
}

export default Landing;