import { FaGlobe, FaMobileAlt, FaRobot } from 'react-icons/fa';
import { BsShieldLock, BsCart3, BsGear } from 'react-icons/bs';
import { MdIntegrationInstructions } from 'react-icons/md';

const ServicesSection = () => {
  const services = [
    {
      icon: <FaGlobe className="text-gray-600 text-4xl mb-4" />,
      title: "Web Services",
      description: "Secure, scalable websites & e-commerce solutions with enterprise-grade protection.",
      highlights: [
        "Website Development",
        "E-Commerce",
        "Web Security"
      ]
    },
    {
      icon: <FaMobileAlt className="text-gray-800 text-4xl mb-4" />,
      title: "App Development",
      description: "Custom mobile & software solutions with seamless API integrations.",
      highlights: [
        "iOS & Android Apps",
        "Custom Software",
        "API Integration"
      ]
    },
    {
      icon: <FaRobot className="text-gray-800 text-4xl mb-4" />,
      title: "AI & Automation",
      description: "Intelligent automation and data-driven decision making tools.",
      highlights: [
        "AI/ML Integration",
        "Chatbots",
        "Process Automation"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our <span className="text-gray-400">Core Services</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-gray-800"
            >
              <div className="flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">{service.title}</h3>
              <p className="text-gray-600 mb-4 text-center">{service.description}</p>
              <ul className="space-y-2">
                {service.highlights.map((item, i) => (
                  <li key={i} className="flex items-center">
                    <BsGear className="text-blue-400 mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 text-center">
                <button className="text-gray-400 hover:text-gray-800 font-medium flex items-center justify-center mx-auto">
                  Learn more <MdIntegrationInstructions className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gray-800 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Need a Custom Solution? Book a Discovery Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;