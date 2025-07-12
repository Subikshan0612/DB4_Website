import React, { useEffect, useState, lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./Home.css";

// Import the stock image directly
import stockImage from "../assets/stock1.jpg";

// Optimized image URLs with compression and WebP format
const carouselImages = [
  {
    src: "https://res.cloudinary.com/dplqjwnoc/image/upload/c_scale,w_800,f_webp,q_auto/v1737436780/cloud-computing-2001090_pexu86.jpg",
    header: "Cloud Innovation",
    fallback:
      "https://res.cloudinary.com/dplqjwnoc/image/upload/c_scale,w_800,q_auto/v1737436780/cloud-computing-2001090_pexu86.jpg",
  },
  {
    src: "https://res.cloudinary.com/dplqjwnoc/image/upload/c_scale,w_800,f_webp,q_auto/v1737437153/digital-marketing-1725340_derbba.jpg",
    header: "Digital Transformation",
    fallback:
      "https://res.cloudinary.com/dplqjwnoc/image/upload/c_scale,w_800,q_auto/v1737437153/digital-marketing-1725340_derbba.jpg",
  },
  {
    src: "https://res.cloudinary.com/dplqjwnoc/image/upload/c_scale,w_800,f_webp,q_auto/v1737436793/ai-generated-8540913_uzparo.jpg",
    header: "AI Solutions",
    fallback:
      "https://res.cloudinary.com/dplqjwnoc/image/upload/c_scale,w_800,q_auto/v1737436793/ai-generated-8540913_uzparo.jpg",
  },
  {
    src: "https://res.cloudinary.com/dplqjwnoc/image/upload/c_scale,w_800,f_webp,q_auto/v1737436762/technology-8760347_n8gk0j.jpg",
    header: "Secure Infrastructure",
    fallback:
      "https://res.cloudinary.com/dplqjwnoc/image/upload/c_scale,w_800,q_auto/v1737436762/technology-8760347_n8gk0j.jpg",
  },
  {
    src: "https://res.cloudinary.com/dplqjwnoc/image/upload/c_scale,w_800,f_webp,q_auto/v1737437063/startup-594090_l2km65.jpg",
    header: "Business Optimization",
    fallback:
      "https://res.cloudinary.com/dplqjwnoc/image/upload/c_scale,w_800,q_auto/v1737437063/startup-594090_l2km65.jpg",
  },
];

// Loading component
const LoadingSpinner = () => (
  <div className="home-loading-spinner">
    <div className="home-spinner"></div>
  </div>
);

// Optimized Image Component with WebP support and better error handling
const OptimizedImage = ({ src, fallback, alt, className, ...props }) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError && fallback && fallback !== imageSrc) {
      setImageSrc(fallback);
      setHasError(true);
    }
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  // If we have a fallback, use picture element, otherwise use regular img
  if (fallback && fallback !== src) {
    return (
      <picture>
        <source srcSet={src} type="image/webp" />
        <img
          src={imageSrc}
          alt={alt}
          className={`${className} ${
            isLoaded ? "home-image-loaded" : "home-image-loading"
          }`}
          onError={handleError}
          onLoad={handleLoad}
          loading="lazy"
          {...props}
        />
      </picture>
    );
  }

  // For local images or single source images
  return (
    <img
      src={imageSrc}
      alt={alt}
      className={`${className} ${
        isLoaded ? "home-image-loaded" : "home-image-loading"
      }`}
      onError={handleError}
      onLoad={handleLoad}
      loading="lazy"
      {...props}
    />
  );
};

// Lazy load icons component
const IconsSection = lazy(() =>
  import("react-icons/fa").then((module) => ({
    default: () => {
      const {
        FaCode,
        FaCloud,
        FaLock,
        FaMobileAlt,
        FaRobot,
        FaChartLine,
        FaJira,
        FaBullhorn,
        FaBrain,
      } = module;
      return (
        <>
          <div className="home-service-item">
            <FaCloud className="home-service-icon home-icon" />
            <p className="home-service-text">Cloud Computing & DevOps</p>
          </div>
          <div className="home-service-item">
            <FaMobileAlt className="home-service-icon home-icon" />
            <p className="home-service-text">Web & Mobile App Development</p>
          </div>
          <div className="home-service-item">
            <FaCode className="home-service-icon home-icon" />
            <p className="home-service-text">Custom Software Development</p>
          </div>
          <div className="home-service-item">
            <FaRobot className="home-service-icon home-icon" />
            <p className="home-service-text">AI & ML</p>
          </div>
          <div className="home-service-item">
            <FaLock className="home-service-icon home-icon" />
            <p className="home-service-text">Cybersecurity</p>
          </div>
          <div className="home-service-item">
            <FaChartLine className="home-service-icon home-icon" />
            <p className="home-service-text">ERP & CRM</p>
          </div>
          <div className="home-service-item">
            <FaJira className="home-service-icon home-icon" />
            <p className="home-service-text">Atlassian Solutions</p>
          </div>
          <div className="home-service-item">
            <FaBullhorn className="home-service-icon home-icon" />
            <p className="home-service-text">Digital Marketing</p>
          </div>
          <div className="home-service-item">
            <FaBrain className="home-service-icon home-icon" />
            <p className="home-service-text">Generative AI</p>
          </div>
        </>
      );
    },
  }))
);

const Home = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [gsapLoaded, setGsapLoaded] = useState(false);
  const [motionLoaded, setMotionLoaded] = useState(false);

  // Preload critical resources
  useEffect(() => {
    // Preload hero video
    const videoLink = document.createElement("link");
    videoLink.rel = "preload";
    videoLink.as = "video";
    videoLink.href =
      "https://res.cloudinary.com/dplqjwnoc/video/upload/v1737441680/95126-645704295_xactnk.mp4";
    document.head.appendChild(videoLink);

    // Preload first carousel image
    const imageLink = document.createElement("link");
    imageLink.rel = "preload";
    imageLink.as = "image";
    imageLink.href = carouselImages[0].src;
    document.head.appendChild(imageLink);

    return () => {
      if (document.head.contains(videoLink))
        document.head.removeChild(videoLink);
      if (document.head.contains(imageLink))
        document.head.removeChild(imageLink);
    };
  }, []);

  // Load GSAP only when needed (intersection observer)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !gsapLoaded) {
            loadGSAP();
          }
        });
      },
      { threshold: 0.1 }
    );

    const heroSection = document.querySelector(".home-hero-section");
    if (heroSection) {
      observer.observe(heroSection);
    }

    return () => observer.disconnect();
  }, [gsapLoaded]);

  // Load Framer Motion when needed
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !motionLoaded) {
            loadFramerMotion();
          }
        });
      },
      { threshold: 0.1 }
    );

    const aboutSection = document.querySelector(".home-about-section");
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => observer.disconnect();
  }, [motionLoaded]);

  const loadGSAP = async () => {
    try {
      const [gsapModule, scrollTriggerModule] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      const gsap = gsapModule.gsap;
      const ScrollTrigger = scrollTriggerModule.ScrollTrigger;

      gsap.registerPlugin(ScrollTrigger);
      setGsapLoaded(true);

      // Initialize animations
      initializeAnimations(gsap, ScrollTrigger);
    } catch (error) {
      console.error("Failed to load GSAP:", error);
    }
  };

  const loadFramerMotion = async () => {
    try {
      await import("framer-motion");
      setMotionLoaded(true);
    } catch (error) {
      console.error("Failed to load Framer Motion:", error);
    }
  };

  const initializeAnimations = (gsap, ScrollTrigger) => {
    // Hero Section Animations
    gsap.fromTo(
      ".home-header-text",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1 }
    );
    gsap.fromTo(
      ".home-description",
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, delay: 0.5 }
    );
    gsap.fromTo(
      ".home-hero-button",
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
    gsap.utils.toArray(".home-fade-in").forEach((section) => {
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
    gsap.utils.toArray(".home-icon").forEach((icon, index) => {
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
  };

  // Optimized carousel with reduced frequency
  useEffect(() => {
    const carouselInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000); // Increased to 4 seconds to reduce CPU usage

    return () => clearInterval(carouselInterval);
  }, []);

  const handleDiscoverClick = () => {
    navigate("/services");
  };

  const handleContactClick = () => {
    navigate("/contact");
  };

  // Dynamic motion component
  const MotionComponent = ({ children, ...props }) => {
    if (!motionLoaded) {
      return <div {...props}>{children}</div>;
    }

    const { motion } = require("framer-motion");
    return React.createElement(motion.div, props, children);
  };

  const MotionH2 = ({ children, ...props }) => {
    if (!motionLoaded) {
      return <h2 className={props.className}>{children}</h2>;
    }

    const { motion } = require("framer-motion");
    return React.createElement(motion.h2, props, children);
  };

  const MotionP = ({ children, ...props }) => {
    if (!motionLoaded) {
      return <p className={props.className}>{children}</p>;
    }

    const { motion } = require("framer-motion");
    return React.createElement(motion.p, props, children);
  };

  return (
    <div className="home-container">
      <Helmet>
        {/* Critical CSS inline */}
        <style type="text/css">{`
          .home-hero-section { min-height: 100vh; position: relative; }
          .home-hero-video { width: 100%; height: 100%; object-fit: cover; }
          .home-loading-spinner { display: flex; justify-content: center; align-items: center; height: 200px; }
          .home-spinner { width: 40px; height: 40px; border: 4px solid #f3f3f3; border-top: 4px solid #3498db; border-radius: 50%; animation: spin 1s linear infinite; }
          @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
          .home-image-loading { opacity: 0; transition: opacity 0.3s; }
          .home-image-loaded { opacity: 1; }
          .home-about-image { width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); }
                    .home-about-image { width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); }
          .home-about-image-container { display: flex; justify-content: center; align-items: center; }
        `}</style>

        {/* Basic Meta Tags */}
        <title>DB4Cloud Technologies- Digital & Cloud Solutions</title>
        <meta
          name="description"
          content="DB4Cloud Technologies delivers cutting-edge cloud computing, AI/ML, custom software development, and digital transformation solutions."
        />
        <meta
          name="keywords"
          content="DB4Cloud delivers cutting-edge cloud, AI/ML, and software solutions to transform businesses with innovative digital services."
        />
        <meta name="author" content="DB4Cloud" />
        <link rel="canonical" href="https://db4cloud.in" />

        {/* Preload critical resources */}
        <link
          rel="preload"
          href="https://res.cloudinary.com/dplqjwnoc/video/upload/v1737441680/95126-645704295_xactnk.mp4"
          as="video"
          type="video/mp4"
        />
        <link rel="preload" href={carouselImages[0].src} as="image" />

        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="//res.cloudinary.com" />
        <link
          rel="preconnect"
          href="https://res.cloudinary.com"
          crossOrigin="anonymous"
        />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="DB4Cloud Technologies" />
        <meta
          property="og:title"
          content="DB4Cloud - Leading Technology Solutions Provider"
        />
        <meta
          property="og:description"
          content="Empowering businesses with innovative cloud solutions, AI/ML, custom software development, and digital transformation services."
        />
        <meta property="og:url" content="https://db4cloud.in" />
        <meta
          property="og:image"
          content="https://db4cloud.in/images/home-banner.jpg"
        />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@DB4Cloud" />
        <meta
          name="twitter:title"
          content="DB4Cloud Technologies - Innovation Meets Excellence"
        />
        <meta
          name="twitter:description"
          content="Your partner in digital transformation. Expert solutions in cloud computing, AI/ML, software development, and cybersecurity."
        />
        <meta
          name="twitter:image"
          content="https://db4cloud.in/images/home-banner.jpg"
        />

        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="generator" content="React" />

        {/* Schema.org Organization and WebSite Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "Organization",
              "name": "DB4Cloud Technologies",
              "url": "https://db4cloud.in",
              "logo": "https://db4cloud.in/images/logo.png",
              "description": "Leading provider of cloud computing, AI/ML, and digital transformation solutions",
              "sameAs": [
                "https://www.linkedin.com/company/db4cloud",
                "https://twitter.com/DB4Cloud"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "India"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer support",
                "email": "contact@db4cloud.in"
              },
              "offers": {
                "@type": "AggregateOffer",
                "name": "Technology Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Cloud Computing & DevOps"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI & ML Solutions"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Custom Software Development"
                    }
                  }
                ]
              }
            }
          `}
        </script>
      </Helmet>

      {/* Hero Section */}
      <div className="home-hero-section">
        <video
          className="home-hero-video"
          src="https://res.cloudinary.com/dplqjwnoc/video/upload/c_scale,w_1920,q_auto/v1737441680/95126-645704295_xactnk.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        ></video>
        <div className="home-hero-content">
          <h1
            className="home-hero-title home-header-text"
            style={{
              fontFamily: "'Space Gortex', sans-serif",
              transition: "all 0.3s ease-in-out",
            }}
          >
            Welcome to DB4Cloud Technologies
          </h1>
          <p className="home-hero-description home-description">
            Empowering businesses with innovative technology solutions.
          </p>
          <button className="home-hero-button" onClick={handleDiscoverClick}>
            Discover More
          </button>
        </div>
      </div>

      {/* About Us Section */}
      <section className="home-section home-fade-in">
        <div className="home-about-section">
          {/* Left side content */}
          <div className="home-about-content">
            <MotionH2
              className="home-about-title"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              About Us
            </MotionH2>

            <MotionP
              className="home-about-text"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              At DB4Cloud Technologies, we specialize in delivering custom
              software and technological solutions that transform businesses.
              With a passionate team of experts, we prioritize client
              satisfaction and innovation. We help businesses scale, optimize
              their operations, and leverage cutting-edge technologies such as
              AI, Cloud, and IoT.
            </MotionP>

            <MotionP
              className="home-about-text"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              With over a decade of experience, our team has successfully helped
              numerous clients across various industries achieve their digital
              transformation goals. Whether you're a startup or an established
              enterprise, our solutions are designed to meet your unique needs
              and drive your business forward.
            </MotionP>
          </div>

          {/* Right side image - Fixed */}
          <MotionComponent
            className="home-about-image-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <img
              src={stockImage}
              alt="About DB4Cloud Technologies - Team working on innovative technology solutions"
              className="home-about-image"
              loading="lazy"
              onError={(e) => {
                console.error("Image failed to load:", e.target.src);
                // Fallback to a placeholder or alternative image
                e.target.src =
                  "https://via.placeholder.com/600x400/4CAF50/white?text=DB4Cloud+Technologies";
              }}
              onLoad={() => {
                console.log("About Us image loaded successfully");
              }}
            />
          </MotionComponent>
        </div>
      </section>

      {/* Image Carousel Section */}
      <section className="home-section home-fade-in home-carousel-section">
        <MotionH2
          className="home-carousel-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Journey
        </MotionH2>

        <div className="home-carousel-container">
          {carouselImages.map((image, index) => (
            <MotionComponent
              key={index}
              className={`home-carousel-slide ${
                index === currentSlide ? "active" : "inactive"
              }`}
              initial={{ opacity: 0 }}
              animate={{
                opacity: index === currentSlide ? 1 : 0,
                scale: index === currentSlide ? 1 : 0.9,
              }}
              transition={{ duration: 1 }}
            >
              <OptimizedImage
                src={image.src}
                fallback={image.fallback}
                alt={image.header}
                className="home-carousel-image"
              />
              <div className="home-carousel-caption">
                <h3 className="home-carousel-caption-title">{image.header}</h3>
              </div>
            </MotionComponent>
          ))}
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="home-section home-fade-in home-expertise-section">
        <h2 className="home-expertise-title">Our Expertise</h2>
        <div className="home-expertise-grid">
          <Suspense fallback={<LoadingSpinner />}>
            <IconsSection />
          </Suspense>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="home-section home-fade-in home-contact-section">
        <MotionH2
          className="home-contact-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Get in Touch
        </MotionH2>

        <MotionP
          className="home-contact-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Ready to bring your vision to life? Contact us today and let's discuss
          how we can help your business grow and innovate.
        </MotionP>

        <div className="home-contact-button-container">
          <button className="home-contact-button" onClick={handleContactClick}>
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
