import React, { useEffect, useMemo, useState, useCallback } from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaMobileAlt,
  FaCloud,
  FaLock,
  FaRobot,
  FaDatabase,
  FaDesktop,
  FaPaintBrush,
  FaChartLine,
  FaCogs,
  FaCalendarAlt,
  FaBullhorn,
  FaBrain,
  FaSnowflake,
  FaUsers,
  FaBolt,
} from "react-icons/fa";
import { Helmet } from "react-helmet";
import "./Services.css";

// Lazy load GSAP only when needed
const loadGSAP = () =>
  Promise.all([
    import("gsap").then((module) => module.gsap),
    import("gsap/ScrollTrigger").then((module) => module.ScrollTrigger),
  ]);

// Memoized services data to prevent recreation on every render
const SERVICES_DATA = [
  {
    title: "Custom Software Development",
    description:
      "We provide tailor-made software solutions to meet your business needs.",
    icon: <FaCode className="service-icon service-icon-code" />,
    cardClass: "service-card-software",
  },
  {
    title: "Web & Mobile App Development",
    description:
      "Our team specializes in building high-quality, scalable web and mobile apps.",
    icon: <FaMobileAlt className="service-icon service-icon-mobile" />,
    cardClass: "service-card-webapp",
  },
  {
    title: "Cloud Computing Services",
    description:
      "We offer cloud solutions to help you scale your business and improve efficiency.",
    icon: <FaCloud className="service-icon service-icon-cloud" />,
    cardClass: "service-card-cloud",
  },
  {
    title: "Cybersecurity Consulting",
    description:
      "We help you safeguard your business with expert cybersecurity strategies.",
    icon: <FaLock className="service-icon service-icon-lock" />,
    cardClass: "service-card-security",
  },
  {
    title: "AI & Machine Learning",
    description:
      "Leverage the power of AI and machine learning to drive innovation in your business.",
    icon: <FaRobot className="service-icon service-icon-robot" />,
    cardClass: "service-card-ai",
  },
  {
    title: "Database Management",
    description:
      "We offer robust database solutions, ensuring data integrity and scalability.",
    icon: <FaDatabase className="service-icon service-icon-database" />,
    cardClass: "service-card-database",
  },
  {
    title: "UI/UX Design",
    description:
      "Our design team creates intuitive and visually appealing user interfaces.",
    icon: <FaPaintBrush className="service-icon service-icon-paintbrush" />,
    cardClass: "service-card-uiux",
  },
  {
    title: "Digital Analytics",
    description:
      "We provide advanced analytics to help you make data-driven business decisions.",
    icon: <FaChartLine className="service-icon service-icon-chartline" />,
    cardClass: "service-card-analytics",
  },
  {
    title: "Enterprise Solutions",
    description:
      "We help enterprises scale their operations with enterprise-grade software solutions.",
    icon: <FaDesktop className="service-icon service-icon-desktop" />,
    cardClass: "service-card-enterprise",
  },
  {
    title: "DevOps Solutions",
    description:
      "Streamline your development and operations with automated pipelines, continuous integration, and deployment strategies.",
    icon: <FaCogs className="service-icon service-icon-cogs" />,
    cardClass: "service-card-devops",
  },
  {
    title: "Workday Implementation",
    description:
      "Expert consulting and implementation of Workday HCM, Financial Management, and Analytics solutions.",
    icon: <FaCalendarAlt className="service-icon service-icon-calendar" />,
    cardClass: "service-card-workday",
  },
  {
    title: "Digital Marketing Services",
    description:
      "Comprehensive digital marketing strategies to boost your online presence and drive business growth.",
    icon: <FaBullhorn className="service-icon service-icon-bullhorn" />,
    cardClass: "service-card-marketing",
  },
  {
    title: "Generative AI Solutions",
    description:
      "Cutting-edge AI solutions for content generation, image processing, and intelligent automation.",
    icon: <FaBrain className="service-icon service-icon-brain" />,
    cardClass: "service-card-genai",
  },
  {
    title: "Snowflake Services",
    description:
      "Data warehousing, analytics, and cloud data solutions using Snowflake's powerful platform.",
    icon: <FaSnowflake className="service-icon service-icon-snowflake" />,
    cardClass: "service-card-snowflake",
  },
  {
    title: "ERP & CRM Solutions",
    description:
      "Integrated enterprise resource planning and customer relationship management systems for business efficiency.",
    icon: <FaUsers className="service-icon service-icon-users" />,
    cardClass: "service-card-erp",
  },
  {
    title: "Salesforce Solutions",
    description:
      "Custom Salesforce implementation, integration, and optimization to maximize your CRM potential.",
    icon: <FaBolt className="service-icon service-icon-bolt" />,
    cardClass: "service-card-salesforce",
  },
];

const Services = () => {
  const [gsapLoaded, setGsapLoaded] = useState(false);
  const [visibleCards, setVisibleCards] = useState(new Set());

  // Memoized animation variants to prevent recreation
  const animationVariants = useMemo(
    () => ({
      hoverEffect: {
        scale: 1.05,
        transition: { duration: 0.2 },
      },
      tapEffect: {
        scale: 0.95,
        transition: { duration: 0.1 },
      },
      iconInitial: { opacity: 0, y: -20 },
      iconAnimate: { opacity: 1, y: 0 },
      titleInitial: { opacity: 0, x: -50 },
      titleAnimate: { opacity: 1, x: 0 },
      descriptionInitial: { opacity: 0, x: 50 },
      descriptionAnimate: { opacity: 1, x: 0 },
    }),
    []
  );

  // Memoized structured data
  const structuredData = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Technology Services - DB4Cloud",
      description: "Professional technology services and solutions",
      provider: {
        "@type": "Organization",
        name: "DB4Cloud Technologies",
        url: "https://db4cloud.in",
      },
      offers: {
        "@type": "AggregateOffer",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Software Development",
              description: "Tailor-made software solutions for business needs",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Cloud Computing Services",
              description: "Scalable cloud solutions for business efficiency",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI & Machine Learning",
              description: "Advanced AI solutions for business innovation",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Cybersecurity Services",
              description: "Comprehensive security solutions and consulting",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "DevOps Solutions",
              description: "Streamlined development and operations",
            },
          },
        ],
      },
    }),
    []
  );

  // Optimized GSAP loading and animation
  const initializeGSAPAnimations = useCallback(async () => {
    try {
      const [gsap, ScrollTrigger] = await loadGSAP();
      gsap.registerPlugin(ScrollTrigger);

      // Simplified GSAP animations for better performance
      gsap.fromTo(
        ".service-card",
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".services-grid-container",
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Heading animation
      gsap.fromTo(
        ".services-heading",
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );

      setGsapLoaded(true);
    } catch (error) {
      console.warn("GSAP failed to load:", error);
    }
  }, []);

  useEffect(() => {
    // Use Intersection Observer for better performance
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -10% 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cardIndex = parseInt(entry.target.dataset.cardIndex);
          if (!isNaN(cardIndex)) {
            setVisibleCards((prev) => new Set([...prev, cardIndex]));
          }
        }
      });
    }, observerOptions);

    // Observe service cards after DOM is ready
    const timer = setTimeout(() => {
      const serviceCards = document.querySelectorAll(".service-card");
      serviceCards.forEach((card, index) => {
        card.dataset.cardIndex = index;
        observer.observe(card);
      });
    }, 100);

    // Load GSAP after critical content
    const gsapTimer = setTimeout(initializeGSAPAnimations, 200);

    return () => {
      clearTimeout(timer);
      clearTimeout(gsapTimer);
      observer.disconnect();
    };
  }, [initializeGSAPAnimations]);

  // Render service card function
  const renderServiceCard = useCallback(
    (service, index) => {
      const isVisible = visibleCards.has(index);

      return (
        <motion.article
          key={`service-${index}`}
          className={`service-card ${service.cardClass} service-card-motion`}
          whileHover={animationVariants.hoverEffect}
          whileTap={animationVariants.tapEffect}
          role="article"
          aria-labelledby={`service-title-${index}`}
        >
          {/* Icon Animation */}
          <motion.div
            className="service-icon-wrapper"
            initial={animationVariants.iconInitial}
            animate={
              isVisible
                ? animationVariants.iconAnimate
                : animationVariants.iconInitial
            }
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            {service.icon}
          </motion.div>

          {/* Title Animation */}
          <motion.h3
            id={`service-title-${index}`}
            className="service-title"
            initial={animationVariants.titleInitial}
            animate={
              isVisible
                ? animationVariants.titleAnimate
                : animationVariants.titleInitial
            }
            transition={{ duration: 0.4, delay: index * 0.07 }}
          >
            {service.title}
          </motion.h3>

          {/* Description Animation */}
          <motion.p
            className="service-description"
            initial={animationVariants.descriptionInitial}
            animate={
              isVisible
                ? animationVariants.descriptionAnimate
                : animationVariants.descriptionInitial
            }
            transition={{ duration: 0.4, delay: index * 0.09 }}
          >
            {service.description}
          </motion.p>
        </motion.article>
      );
    },
    [visibleCards, animationVariants]
  );

  return (
    <div className="services-main-container">
      <Helmet>
        {/* Critical Meta Tags First */}
        <title>
          Services | DB4Cloud - Custom Solutions & Digital Innovation
        </title>
        <meta
          name="description"
          content="Explore DB4Cloud's technology services: Custom Software Development, Cloud Computing, AI/ML, Cybersecurity, DevOps, and Digital Marketing."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://db4cloud.in/services" />

        {/* Preload Critical Resources */}
        <link
          rel="preload"
          href="/fonts/main-font.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="//db4cloud.in" />
        <link rel="preconnect" href="https://db4cloud.in" />

        {/* Other Meta Tags */}
        <meta
          name="keywords"
          content="DB4Cloud services, software development, cloud computing, AI ML, cybersecurity, DevOps, digital marketing, enterprise solutions, UI UX design, database management"
        />
        <meta name="author" content="DB4Cloud" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="generator" content="React" />

        {/* Optimized Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="DB4Cloud Technologies" />
        <meta
          property="og:title"
          content="Professional Technology Services - DB4Cloud"
        />
        <meta
          property="og:description"
          content="Transform your business with our cutting-edge technology services. Expert solutions in software development, cloud computing, AI/ML, and cybersecurity."
        />
        <meta property="og:url" content="https://db4cloud.in/services" />
        <meta
          property="og:image"
          content="https://db4cloud.in/images/services-banner.webp"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@DB4Cloud" />
        <meta
          name="twitter:title"
          content="Technology Services & Solutions | DB4Cloud"
        />
        <meta
          name="twitter:description"
          content="Leading provider of custom software development, cloud solutions, AI/ML services, and digital transformation."
        />
        <meta
          name="twitter:image"
          content="https://db4cloud.in/images/services-banner.webp"
        />

        {/* Optimized Schema.org Service Offerings Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="services-inner-container">
        {/* Heading Animation */}
        <motion.h1
          className="services-heading"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our Services
        </motion.h1>

        {/* Services Grid */}
        <section
          className="services-grid-container"
          aria-labelledby="services-heading"
        >
          <h2 id="services-heading" className="sr-only">
            Technology Services
          </h2>
          {SERVICES_DATA.map((service, index) =>
            renderServiceCard(service, index)
          )}
        </section>
      </div>
    </div>
  );
};

export default Services;
