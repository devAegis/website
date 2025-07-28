import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaCode, FaMobile, FaRobot, FaShieldAlt, FaShoppingCart, FaServer } from 'react-icons/fa';
import { BsFillGearFill, BsGraphUp } from 'react-icons/bs';
import { MdIntegrationInstructions, MdSupportAgent } from 'react-icons/md';

const ServicesPage = () => {
  const serviceCategories = [
    {
      title: "🌐 Web Services",
      icon: <FaServer className="text-gray-800" />,
      services: [
        {
          name: "Website Development & Maintenance",
          icon: <FaCode className="text-gray-700" />,
          description: "We craft responsive, high-performance websites tailored to your business needs.",
          details: [
            "Custom design and development",
            "CMS integration (WordPress, Shopify, etc.)",
            "Ongoing maintenance and updates",
            "Performance optimization",
            "SEO-friendly architecture"
          ],
          cta: "Get Your Website Audit"
        },
        {
          name: "Web Security",
          icon: <FaShieldAlt className="text-gray-700" />,
          description: "Protect your digital assets with enterprise-grade security solutions.",
          details: [
            "SSL/TLS implementation",
            "DDoS protection",
            "Web application firewalls",
            "Security audits & penetration testing",
            "24/7 threat monitoring"
          ],
          cta: "Run Security Scan"
        }
      ]
    },
    {
      title: "📱 App & Software Development",
      icon: <FaMobile className="text-gray-800" />,
      services: [
        {
          name: "Custom Software",
          icon: <BsFillGearFill className="text-gray-700" />,
          description: "Bespoke solutions designed to streamline your business operations.",
          details: [
            "Workflow automation tools",
            "CRM/ERP development",
            "Database management systems",
            "Cloud-native applications",
            "Legacy system modernization"
          ],
          cta: "Discuss Your Project"
        },
        {
          name: "Mobile Apps",
          icon: <FaMobile className="text-gray-700" />,
          description: "Cross-platform mobile experiences that engage your users.",
          details: [
            "iOS and Android development",
            "React Native/Flutter apps",
            "Push notification systems",
            "Offline functionality",
            "App store optimization"
          ],
          cta: "Get App Consultation"
        }
      ]
    },
    {
      title: "🤖 AI & Automation",
      icon: <FaRobot className="text-gray-800" />,
      services: [
        {
          name: "AI/ML Integration",
          icon: <BsGraphUp className="text-gray-700" />,
          description: "Leverage artificial intelligence to gain competitive advantage.",
          details: [
            "Predictive analytics models",
            "Process automation",
            "Computer vision solutions",
            "Natural language processing",
            "Recommendation engines"
          ],
          cta: "Explore AI Possibilities"
        },
        {
          name: "Chatbots",
          icon: <MdSupportAgent className="text-gray-700" />,
          description: "Intelligent virtual assistants available 24/7 for your customers.",
          details: [
            "NLP-powered conversations",
            "Multi-language support",
            "CRM integration",
            "Sentiment analysis",
            "Omnichannel deployment"
          ],
          cta: "See Chatbot Demo"
        }
      ]
    }
  ];

  return (
    <div className="bg-gray-50">
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-[70vh] text-white py-20 px-4 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNlcnZpY2VzfGVufDB8fDB8fHww" // Replace with your image path
                alt="Technology background"
                className="w-full h-full object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-700/90"></div>
            </div>

            {/* Content */}
            <div className="container mx-auto text-center relative z-10 h-full flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Comprehensive digital solutions designed to protect, empower, and grow your business
              </p>
            </div>
          </section>

      {/* Services Grid */}
      <section className="container mx-auto py-16 px-4">
        {serviceCategories.map((category, catIndex) => (
          <div key={catIndex} className="mb-20">
            <div className="flex items-center mb-8">
              <div className="text-3xl mr-4">{category.icon}</div>
              <h2 className="text-3xl font-bold">{category.title}</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {category.services.map((service, serviceIndex) => (
                <div 
                  key={serviceIndex}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="text-2xl mr-3">{service.icon}</div>
                      <h3 className="text-xl font-bold">{service.name}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <span className="text-gray-700 mr-2">✓</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button className="w-full bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded-lg transition-colors">
                      {service.cta}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="container  text-center ">
          <div className=" mx-auto p-8  border-gray-200">
            <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Our experts will analyze your requirements and propose the perfect tech stack for your needs.
            </p>
            <button className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
              Book a Discovery Call
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ServicesPage;