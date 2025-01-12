import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import stockImage from "../assets/stock1.jpg";
import { FaCode, FaCloud, FaLock, FaMobileAlt, FaRobot } from "react-icons/fa";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [
    { 
      src: "https://res.cloudinary.com/dplqjwnoc/image/upload/v1732536717/1_eohu8p.jpg", 
      header: "Cloud Innovation" 
    },
    { 
      src: "https://res.cloudinary.com/dplqjwnoc/image/upload/v1732537028/12_yp59g5.jpg", 
      header: "Digital Transformation" 
    },
    { 
      src: "https://res.cloudinary.com/dplqjwnoc/image/upload/v1732536821/4_o6dlob.jpg", 
      header: "AI Solutions" 
    },
    { 
      src: "https://res.cloudinary.com/dplqjwnoc/image/upload/v1732536844/5_swhlwx.jpg", 
      header: "Secure Infrastructure" 
    },
    { 
      src: "https://res.cloudinary.com/dplqjwnoc/image/upload/v1732536950/9_faoxfd.jpg", 
      header: "Business Optimization" 
    }
  ];

  useEffect(() => {
    // Hero Section Animations
    gsap.fromTo(
      ".header-text",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1 }
    );
    gsap.fromTo(
      ".description",
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, delay: 0.5 }
    );
    gsap.fromTo(
      ".hero-button",
      { scale: 0, backgroundColor: "#4CAF50" },
      {
        scale: 1,
        duration: 0.7,
        delay: 1.5,
        ease: "bounce.out",
        backgroundColor: "#45a049",
      }
    );

    // Scroll Animations for Sections
    gsap.utils.toArray(".fade-in").forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Animations for Icons with more effects
    gsap.utils.toArray(".icon").forEach((icon, index) => {
      gsap.fromTo(
        icon,
        { opacity: 0, scale: 0, rotation: 0 },
        {
          opacity: 1,
          scale: 1.2,
          rotation: 360,
          duration: 1.2,
          delay: index * 0.3,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: icon,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Smooth transition for all sections on scroll
    gsap.fromTo(
      ".section",
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.5, stagger: 0.3, scrollTrigger: {
          trigger: ".section",
          start: "top 90%",
          toggleActions: "play none none reverse"
        }}
    );

    // Hover animations for buttons
    gsap.fromTo(
      ".hero-button",
      { scale: 1, backgroundColor: "#4CAF50" },
      {
        scale: 1.1,
        backgroundColor: "#45a049",
        duration: 0.3,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".hero-button",
          start: "top bottom",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".contact-button",
      { scale: 1, backgroundColor: "#ff6347" },
      {
        scale: 1.1,
        backgroundColor: "#e85342",
        duration: 0.3,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".contact-button",
          start: "top bottom",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Carousel Auto-Slide Effect
    const carouselInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 2000); // Slow train-like movement, 5 seconds per slide

    return () => clearInterval(carouselInterval);
  }, [carouselImages.length]); // Add carouselImages.length to the dependency array

  const handleDiscoverClick = () => {
    navigate("/services");
  };

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 via-black to-black text-gray-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-900 via-black to-black">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover opacity-70"
          src="https://res.cloudinary.com/dplqjwnoc/video/upload/v1732791324/215500_medium_bajue7.mp4"
          autoPlay
          loop
          muted
        ></video>
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen bg-black bg-opacity-50 text-center">
          <h1
            className="header-text text-5xl font-extrabold mb-4 text-yellow-400 space-gortex-font"
            style={{
              fontFamily: "'Space Gortex', sans-serif",
              transition: "all 0.3s ease-in-out",
            }}
          >
            Welcome to DB4Cloud Technologies
          </h1>
          <p className="description text-lg mb-6">
            Empowering businesses with innovative technology solutions.
          </p>
          <button
            className="hero-button bg-gradient-to-r from-teal-500 via-indigo-500 to-purple-500 px-8 py-4 rounded-full text-lg font-semibold hover:from-teal-600 hover:to-purple-600 transform transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:rotate-3"
            onClick={handleDiscoverClick}
          >
            Discover More
          </button>
        </div>
      </div>

      {/* About Us Section */}
      <section className="section fade-in mt-0 px-6 bg-gradient-to-r from-purple-900 via-black to-black p-8 rounded-lg shadow-xl">
        <motion.h2
          className="text-4xl font-semibold text-yellow-400 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Us
        </motion.h2>
        <motion.p
          className="text-lg text-gray-200 mb-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          At DB4Cloud Technologies, we specialize in delivering custom software
          and technological solutions that transform businesses. With a passionate
          team of experts, we prioritize client satisfaction and innovation. We
          help businesses scale, optimize their operations, and leverage cutting-edge
          technologies such as AI, Cloud, and IoT.
        </motion.p>

        <motion.p
          className="text-lg text-gray-200 mb-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          With over a decade of experience, our team has successfully helped numerous
          clients across various industries achieve their digital transformation goals.
          Whether you're a startup or an established enterprise, our solutions are designed
          to meet your unique needs and drive your business forward.
        </motion.p>

        <motion.div
          className="mt-6 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <img
            src={stockImage}
            alt="About Us"
            className="rounded-lg shadow-2xl border-4 border-yellow-500 w-1/2"
          />
        </motion.div>
      </section>

      {/* NEW: Image Carousel Section */}
      <section className="section fade-in mt-0 px-6 bg-gradient-to-r from-purple-900 via-black to-black p-8 rounded-lg shadow-xl overflow-hidden">
        <motion.h2
          className="text-4xl font-semibold text-yellow-400 mb-6 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Journey
        </motion.h2>
        <div className="relative w-full h-[500px] overflow-hidden rounded-lg">
          {carouselImages.map((image, index) => (
            <motion.div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: index === currentSlide ? 1 : 0,
                scale: index === currentSlide ? 1 : 0.9
              }}
              transition={{ duration: 1 }}
            >
              <img 
                src={image.src} 
                alt={image.header} 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-4">
                <h3 className="text-2xl font-bold">{image.header}</h3>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 w-2 rounded-full mx-1 ${
                index === currentSlide 
                  ? 'bg-yellow-400' 
                  : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="section fade-in mt-0 px-6 bg-gradient-to-r from-purple-900 via-black to-black p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-semibold text-yellow-400 mb-6">Our Expertise</h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
          <div className="service-item text-center">
            <FaCode className="icon text-yellow-300 text-6xl mx-auto mb-4" />
            <p className="text-lg text-gray-200">Custom Software Development</p>
          </div>
          <div className="service-item text-center">
            <FaMobileAlt className="icon text-yellow-300 text-6xl mx-auto mb-4" />
            <p className="text-lg text-gray-200">
              Web & Mobile App Development
            </p>
          </div>
          <div className="service-item text-center">
            <FaRobot className="icon text-yellow-300 text-6xl mx-auto mb-4" />
            <p className="text-lg text-gray-200">AI & Machine Learning</p>
          </div>
          <div className="service-item text-center">
            <FaCloud className="icon text-yellow-300 text-6xl mx-auto mb-4" />
            <p className="text-lg text-gray-200">Cloud Computing</p>
          </div>
          <div className="service-item text-center">
            <FaLock className="icon text-yellow-300 text-6xl mx-auto mb-4" />
            <p className="text-lg text-gray-200">Cybersecurity</p>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="section fade-in mt-0 px-6 bg-gradient-to-r from-purple-900 via-black to-black p-8 rounded-lg shadow-xl">
        <motion.h2
          className="text-4xl font-semibold text-yellow-400 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Get in Touch
        </motion.h2>
        <motion.p
          className="text-lg text-gray-200 mb-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Ready to bring your vision to life? Contact us today and let's discuss how we can
          help your business grow and innovate.
        </motion.p>

        <div className="flex justify-center mt-6">
          <button
            className="contact-button bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 px-8 py-4 rounded-full text-lg font-semibold hover:scale-110 hover:shadow-2xl hover:rotate-3 transform transition-all duration-300"
            onClick={handleContactClick}
          >
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;

