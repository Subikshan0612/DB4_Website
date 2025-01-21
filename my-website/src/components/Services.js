import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { 
  FaCode, FaMobileAlt, FaCloud, FaLock, FaRobot, FaDatabase, 
  FaDesktop, FaPaintBrush, FaChartLine, FaCogs, FaCalendarAlt, 
  FaBullhorn, FaBrain, FaSnowflake, FaUsers, FaBolt 
} from "react-icons/fa";

const Services = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate each service card on scroll
    gsap.fromTo(
      ".service-card",
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".services",
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      }
    );

    // Heading animation
    gsap.fromTo(
      ".services-heading",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }
    );
  }, []);

  const services = [
    {
      title: "Custom Software Development",
      description: "We provide tailor-made software solutions to meet your business needs.",
      icon: <FaCode className="text-6xl text-yellow-300"  />,
    },
    {
      title: "Web & Mobile App Development",
      description: "Our team specializes in building high-quality, scalable web and mobile apps.",
      icon: <FaMobileAlt className="text-6xl text-yellow-300" />,
    },
    {
      title: "Cloud Computing Services",
      description: "We offer cloud solutions to help you scale your business and improve efficiency.",
      icon: <FaCloud className="text-6xl text-yellow-300" />,
    },
    {
      title: "Cybersecurity Consulting",
      description: "We help you safeguard your business with expert cybersecurity strategies.",
      icon: <FaLock className="text-6xl text-yellow-300" />,
    },
    {
      title: "AI & Machine Learning",
      description: "Leverage the power of AI and machine learning to drive innovation in your business.",
      icon: <FaRobot className="text-6xl text-yellow-300" />,
    },
    {
      title: "Database Management",
      description: "We offer robust database solutions, ensuring data integrity and scalability.",
      icon: <FaDatabase className="text-6xl text-yellow-300" />,
    },
    {
      title: "UI/UX Design",
      description: "Our design team creates intuitive and visually appealing user interfaces.",
      icon: <FaPaintBrush className="text-6xl text-yellow-300" />, // Updated icon
    },
    {
      title: "Digital Analytics",
      description: "We provide advanced analytics to help you make data-driven business decisions.",
      icon: <FaChartLine className="text-6xl text-yellow-300" />, // Updated icon
    },
    {
      title: "Enterprise Solutions",
      description: "We help enterprises scale their operations with enterprise-grade software solutions.",
      icon: <FaDesktop className="text-6xl text-yellow-300" />,
    },
    {
      title: "DevOps Solutions",
      description: "Streamline your development and operations with automated pipelines, continuous integration, and deployment strategies.",
      icon: <FaCogs className="text-6xl text-yellow-300" />,
    },
    {
      title: "Workday Implementation",
      description: "Expert consulting and implementation of Workday HCM, Financial Management, and Analytics solutions.",
      icon: <FaCalendarAlt className="text-6xl text-yellow-300" />,
    },
    {
      title: "Digital Marketing Services",
      description: "Comprehensive digital marketing strategies to boost your online presence and drive business growth.",
      icon: <FaBullhorn className="text-6xl text-yellow-300" />,
    },
    {
      title: "Generative AI Solutions",
      description: "Cutting-edge AI solutions for content generation, image processing, and intelligent automation.",
      icon: <FaBrain className="text-6xl text-yellow-300" />,
    },
    {
      title: "Snowflake Services",
      description: "Data warehousing, analytics, and cloud data solutions using Snowflake's powerful platform.",
      icon: <FaSnowflake className="text-6xl text-yellow-300" />,
    },
    {
      title: "ERP & CRM Solutions",
      description: "Integrated enterprise resource planning and customer relationship management systems for business efficiency.",
      icon: <FaUsers className="text-6xl text-yellow-300" />,
    },
    {
      title: "Salesforce Solutions",
      description: "Custom Salesforce implementation, integration, and optimization to maximize your CRM potential.",
      icon: <FaBolt className="text-6xl text-yellow-300" />,
    }
  ];

  // Framer Motion hover and tap effects
  const hoverEffect = {
    scale: 1.05,
    transition: { duration: 0.3 },
  };

  const tapEffect = {
    scale: 0.95,
    transition: { duration: 0.2 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 via-black to-black text-gray-100">
      <div className="container mx-auto pt-28 px-4">
        {/* Heading Animation */}
        <h2 className="services-heading text-4xl font-semibold text-yellow-300 mb-12 text-center">
          Our Services
        </h2>
        {/* Services Grid */}
        <div className="services grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card bg-gray-900 p-6 rounded-lg shadow-lg"
              whileHover={hoverEffect}
              whileTap={tapEffect}
            >
              {/* Icon Animation */}
              <motion.div
                className="icon-wrapper"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {service.icon}
              </motion.div>
              {/* Title and Description Animations */}
              <motion.h3
                className="text-2xl font-bold text-yellow-300 mt-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
              >
                {service.title}
              </motion.h3>
              <motion.p
                className="text-gray-200 mt-2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.4 }}
              >
                {service.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
