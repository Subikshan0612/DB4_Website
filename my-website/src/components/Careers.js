import React, { useEffect, useState, useMemo, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaPen,
  FaGraduationCap,
  FaEnvelope,
} from "react-icons/fa";
import { Helmet } from "react-helmet";
import "./Careers.css";

// Lazy load GSAP only when needed
const loadGSAP = () => import("gsap").then((module) => module.gsap);
const loadScrollTrigger = () =>
  import("gsap/ScrollTrigger").then((module) => module.ScrollTrigger);

const Careers = () => {
  const [gsapLoaded, setGsapLoaded] = useState(false);

  // Memoize job listings to prevent unnecessary re-renders
  const jobListings = useMemo(
    () => [
      {
        title: "Full Stack Developer",
        description:
          "Looking for an all-rounder to work on both frontend and backend of web applications.",
        location: "Chennai & Hyderabad",
        icon: <FaBriefcase className="careers-job-icon" />,
      },
      {
        title: "UI/UX Designer",
        description:
          "We need a creative UI/UX designer to design user-friendly interfaces and enhance the user experience.",
        location: "Chennai & Hyderabad",
        icon: <FaPen className="careers-job-icon" />,
      },
      {
        title: "Technologies Internship Programs",
        description:
          "Exciting opportunity to gain hands-on experience in Software Development, DevOps practices, AWS Cloud Services, and Microsoft Azure. Get industry-recognized certifications while working on real-world projects. Our structured program includes mentorship from industry experts and comprehensive training in modern development practices.",
        location: "Chennai & Hyderabad",
        icon: <FaGraduationCap className="careers-job-icon" />,
      },
    ],
    []
  );

  // Memoize animation variants
  const animationVariants = useMemo(
    () => ({
      hoverEffect: {
        scale: 1.05,
        transition: { duration: 0.3 },
      },
      tapEffect: {
        scale: 0.95,
        transition: { duration: 0.2 },
      },
      cardInitial: { opacity: 0, y: 20 },
      cardAnimate: { opacity: 1, y: 0 },
      iconInitial: { opacity: 0, y: -20 },
      iconAnimate: { opacity: 1, y: 0 },
      titleInitial: { opacity: 0, x: -50 },
      titleAnimate: { opacity: 1, x: 0 },
      descriptionInitial: { opacity: 0, x: 50 },
      descriptionAnimate: { opacity: 1, x: 0 },
    }),
    []
  );

  useEffect(() => {
    // Use Intersection Observer instead of GSAP ScrollTrigger for better performance
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -10% 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("careers-visible");
        }
      });
    }, observerOptions);

    // Observe job cards
    const jobCards = document.querySelectorAll(".careers-job-listing");
    jobCards.forEach((card) => observer.observe(card));

    // Load GSAP only if needed (for complex animations)
    const loadGSAPAnimations = async () => {
      try {
        const [gsap, ScrollTrigger] = await Promise.all([
          loadGSAP(),
          loadScrollTrigger(),
        ]);

        gsap.registerPlugin(ScrollTrigger);

        // Only animate heading with GSAP
        gsap.fromTo(
          ".careers-heading",
          { opacity: 0, y: -30 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
        );

        setGsapLoaded(true);
      } catch (error) {
        console.warn("GSAP failed to load:", error);
      }
    };

    // Delay GSAP loading to prioritize critical content
    const timer = setTimeout(loadGSAPAnimations, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  // Optimized structured data
  const structuredData = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "DB4Cloud",
      url: "https://db4cloud.in",
      sameAs: [
        "https://www.linkedin.com/company/db4cloud",
        "https://twitter.com/DB4Cloud",
      ],
      jobPosting: jobListings.map((job) => ({
        "@type": "JobPosting",
        title: job.title,
        description: job.description,
        employmentType: "FULL_TIME",
        jobLocation: {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressLocality: job.location,
            addressCountry: "IN",
          },
        },
        hiringOrganization: {
          "@type": "Organization",
          name: "DB4Cloud",
        },
      })),
    }),
    [jobListings]
  );

  return (
    <div className="careers-container">
      <Helmet>
        {/* Critical meta tags first */}
        <title>Careers at DB4Cloud - Join Our Dynamic Tech Team</title>
        <meta
          name="description"
          content="Explore exciting career opportunities at DB4Cloud. We're hiring Frontend, Backend, Full Stack Developers, UI/UX Designers in Chennai & Hyderabad."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://db4cloud.in/careers" />

        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/fonts/main-font.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Other meta tags */}
        <meta
          name="keywords"
          content="DB4Cloud careers, tech jobs, software development, internships, Chennai jobs, Hyderabad jobs"
        />
        <meta name="author" content="DB4Cloud" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph - optimized */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Career Opportunities at DB4Cloud" />
        <meta
          property="og:description"
          content="Join our dynamic team at DB4Cloud. We offer exciting roles in software development, design, and product management."
        />
        <meta property="og:url" content="https://db4cloud.in/careers" />
        <meta
          property="og:image"
          content="https://db4cloud.in/images/careers-banner.webp"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Join DB4Cloud - Career Opportunities"
        />
        <meta
          name="twitter:description"
          content="Build your career with DB4Cloud. Explore roles in development, design, and product management."
        />
        <meta
          name="twitter:image"
          content="https://db4cloud.in/images/careers-banner.webp"
        />

        {/* Optimized structured data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="careers-main-container">
        <h1 className="careers-main-heading careers-heading">Join Our Team</h1>

        {/* How to Apply Section */}
        <section
          className="careers-apply-section"
          aria-labelledby="apply-heading"
        >
          <h2 id="apply-heading" className="careers-apply-title">
            How to Apply
          </h2>
          <p className="careers-apply-text">
            Interested candidates can submit their resumes to:
          </p>
          <div className="careers-apply-contact">
            <FaEnvelope className="careers-apply-icon" aria-hidden="true" />
            <a
              href="mailto:careers@db4cloud.in"
              className="careers-apply-email"
              rel="noopener"
            >
              careers@db4cloud.in
            </a>
          </div>
        </section>

        <section
          className="careers careers-jobs-grid"
          aria-labelledby="jobs-heading"
        >
          <h2 id="jobs-heading" className="sr-only">
            Available Positions
          </h2>
          {jobListings.map((job, index) => (
            <motion.article
              key={`${job.title}-${index}`}
              className="careers-job-listing careers-job-card"
              whileHover={animationVariants.hoverEffect}
              whileTap={animationVariants.tapEffect}
              initial={animationVariants.cardInitial}
              animate={animationVariants.cardAnimate}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              role="article"
              aria-labelledby={`job-title-${index}`}
            >
              <motion.div
                className="careers-job-icon-wrapper careers-motion-icon"
                initial={animationVariants.iconInitial}
                animate={animationVariants.iconAnimate}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                aria-hidden="true"
              >
                {job.icon}
              </motion.div>

              <motion.h3
                id={`job-title-${index}`}
                className="careers-job-title careers-motion-title"
                initial={animationVariants.titleInitial}
                animate={animationVariants.titleAnimate}
                transition={{ duration: 0.4, delay: index * 0.15 }}
              >
                {job.title}
              </motion.h3>

              <motion.p
                className="careers-job-description careers-motion-description"
                initial={animationVariants.descriptionInitial}
                animate={animationVariants.descriptionAnimate}
                transition={{ duration: 0.4, delay: index * 0.2 }}
              >
                {job.description}
              </motion.p>

              <motion.p
                className="careers-job-location careers-motion-location"
                initial={animationVariants.descriptionInitial}
                animate={animationVariants.descriptionAnimate}
                transition={{ duration: 0.4, delay: index * 0.25 }}
              >
                <span className="careers-job-location-label">Location:</span>{" "}
                {job.location}
              </motion.p>
            </motion.article>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Careers;
