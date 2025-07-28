import { 
  FaRocket, 
  FaEye, 
  FaShieldAlt, 
  FaHandshake, 
  FaLightbulb,
  FaUsers,
  FaChartLine,
  FaGlobeAmericas
} from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Technology with a Human Touch</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Building digital solutions that empower businesses while keeping security at the core
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="container mx-auto py-16 px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="flex items-center mb-6">
              <FaGlobeAmericas className="text-3xl text-gray-800 mr-4" />
              <h2 className="text-3xl font-bold">Our Story</h2>
            </div>
            <p className="text-lg text-gray-600 mb-4">
              Founded in 2020, Dev Aegis emerged from a simple idea: technology should empower, not complicate. 
              What began as a small team of security-focused developers has grown into a trusted partner for 
              businesses worldwide.
            </p>
            <p className="text-lg text-gray-600">
              Today, we combine cutting-edge technology with human-centered design to create solutions that 
              are as secure as they are intuitive.
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src="/about-story.jpg" 
              alt="Our team working together" 
              className="rounded-xl shadow-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-6">
                <FaRocket className="text-3xl text-gray-800 mr-4" />
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600">
                To empower businesses with future-proof technology solutions that are secure by design, 
                enabling them to thrive in an increasingly digital world without compromising on safety 
                or performance.
              </p>
            </div>
            
            {/* Vision */}
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-6">
                <FaEye className="text-3xl text-gray-800 mr-4" />
                <h2 className="text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600">
                To create a digital landscape where security and innovation coexist seamlessly, 
                where every business—regardless of size—has access to enterprise-grade protection 
                and cutting-edge technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Security */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200">
            <div className="flex justify-center text-4xl text-gray-800 mb-4">
              <FaShieldAlt />
            </div>
            <h3 className="text-xl font-bold text-center mb-4">Security First</h3>
            <p className="text-gray-600 text-center">
              We build with protection at the foundation, not as an afterthought. 
              Every line of code considers potential vulnerabilities.
            </p>
          </div>
          
          {/* Integrity */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200">
            <div className="flex justify-center text-4xl text-gray-800 mb-4">
              <FaHandshake />
            </div>
            <h3 className="text-xl font-bold text-center mb-4">Transparent Integrity</h3>
            <p className="text-gray-600 text-center">
              We believe in open communication and honest recommendations, 
              even when it means suggesting simpler solutions.
            </p>
          </div>
          
          {/* Innovation */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200">
            <div className="flex justify-center text-4xl text-gray-800 mb-4">
              <FaLightbulb />
            </div>
            <h3 className="text-xl font-bold text-center mb-4">Practical Innovation</h3>
            <p className="text-gray-600 text-center">
              We embrace cutting-edge technology but focus on implementations 
              that deliver real business value.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet The Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* CEO */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <img 
                src="/ceo.jpg" 
                alt="CEO" 
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold">Alex Johnson</h3>
              <p className="text-gray-500 mb-2">CEO & Founder</p>
              <p className="text-gray-600">
                Security specialist with 15+ years in enterprise software protection.
              </p>
            </div>
            
            {/* CTO */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <img 
                src="/cto.jpg" 
                alt="CTO" 
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold">Samira Chen</h3>
              <p className="text-gray-500 mb-2">Chief Technology Officer</p>
              <p className="text-gray-600">
                AI/ML expert focused on ethical implementation of emerging technologies.
              </p>
            </div>
            
            {/* Lead Developer */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <img 
                src="/lead-dev.jpg" 
                alt="Lead Developer" 
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold">Marcus Rivera</h3>
              <p className="text-gray-500 mb-2">Lead Developer</p>
              <p className="text-gray-600">
                Full-stack wizard specializing in secure application architecture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2 flex items-center justify-center">
                <FaUsers className="mr-3" /> 50+
              </div>
              <p className="text-gray-300">Satisfied Clients</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 flex items-center justify-center">
                <FaChartLine className="mr-3" /> 98%
              </div>
              <p className="text-gray-300">Retention Rate</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <p className="text-gray-300">Security Success</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <p className="text-gray-300">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;