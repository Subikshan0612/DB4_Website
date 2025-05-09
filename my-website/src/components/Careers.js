import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { FaBriefcase, FaLaptopCode, FaDatabase, FaPen, FaUsers, FaEnvelope, FaGraduationCap } from "react-icons/fa";
import {Helmet} from 'react-helmet';

const Careers = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".job-listing",
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".careers",
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".careers-heading",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }
    );
  }, []);

  const jobListings = [
    // {
    //   title: "Frontend Developer",
    //   description: "Join our team to build engaging and interactive user interfaces.",
    //   location: "Chennai & Hyderabad",
    //   icon: <FaLaptopCode className="text-6xl text-yellow-300" />,
    // },
    // {
    //   title: "Backend Developer",
    //   description: "We are looking for an experienced backend developer to build scalable server-side applications.",
    //   location: "Chennai & Hyderabad",
    //   icon: <FaDatabase className="text-6xl text-yellow-300" />,
    // },
    {
      title: "Full Stack Developer",
      description: "Looking for an all-rounder to work on both frontend and backend of web applications.",
      location: "Chennai & Hyderabad",
      icon: <FaBriefcase className="text-6xl text-yellow-300" />,
    },
    {
      title: "UI/UX Designer",
      description: "We need a creative UI/UX designer to design user-friendly interfaces and enhance the user experience.",
      location: "Chennai & Hyderabad",
      icon: <FaPen className="text-6xl text-yellow-300" />,
    },
    // {
    //   title: "Product Manager",
    //   description: "Seeking a proactive product manager to oversee the development of innovative products from concept to launch.",
    //   location: "Chennai & Hyderabad",
    //   icon: <FaUsers className="text-6xl text-yellow-300" />,
    // },
    {
      title: "Technologies Internship Programs",
      description: "Exciting opportunity to gain hands-on experience in Software Development, DevOps practices, AWS Cloud Services, and Microsoft Azure. Get industry-recognized certifications while working on real-world projects. Our structured program includes mentorship from industry experts and comprehensive training in modern development practices.",
      location: "Chennai & Hyderabad",
      icon: <FaGraduationCap className="text-6xl text-yellow-300" />,
    },

  ];

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
      <Helmet>
  {/* Basic Meta Tags */}
  <title>Careers at DB4Cloud - Join Our Dynamic Tech Team</title>
  <meta name="description" content="Explore exciting career opportunities at DB4Cloud. We're hiring Frontend, Backend, Full Stack Developers, UI/UX Designers, Product Managers and offering Technology Internships in Chennai & Hyderabad." />
  <meta name="keywords" content="DB4Cloud careers, tech jobs, software development, internships, Chennai jobs, Hyderabad jobs, frontend developer, backend developer, full stack developer, UI/UX designer, product manager" />
  <meta name="author" content="DB4Cloud" />
  <link rel="canonical" href="https://db4cloud.in/careers" />

  {/* Open Graph Meta Tags */}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="DB4Cloud" />
  <meta property="og:title" content="Career Opportunities at DB4Cloud" />
  <meta property="og:description" content="Join our dynamic team at DB4Cloud. We offer exciting roles in software development, design, and product management with opportunities for growth and innovation." />
  <meta property="og:url" content="https://db4cloud.in/careers" />
  <meta property="og:image" content="https://db4cloud.in/images/careers-banner.jpg" />

  {/* Twitter Card Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@DB4Cloud" />
  <meta name="twitter:title" content="Join DB4Cloud - Career Opportunities" />
  <meta name="twitter:description" content="Build your career with DB4Cloud. Explore roles in development, design, and product management in Chennai & Hyderabad." />
  <meta name="twitter:image" content="https://db4cloud.in/images/careers-banner.jpg" />

  {/* Additional Meta Tags */}
  <meta name="robots" content="index, follow" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="language" content="English" />
  <meta name="revisit-after" content="7 days" />
  <meta name="generator" content="React" />

  {/* Schema.org Job Posting Structured Data */}
  <script type="application/ld+json">
    {`
      {
        "@context": "http://schema.org",
        "@type": "Organization",
        "name": "DB4Cloud",
        "url": "https://db4cloud.in",
        "sameAs": [
          "https://www.linkedin.com/company/db4cloud",
          "https://twitter.com/DB4Cloud"
        ],
        "jobPosting": {
          "@type": "JobPosting",
          "title": "Multiple Technology Positions",
          "description": "Various roles including Frontend, Backend, Full Stack Development, UI/UX Design, and Product Management",
          "employmentType": "FULL_TIME",
          "jobLocation": {
            "@type": "Place",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Chennai & Hyderabad",
              "addressCountry": "IN"
            }
          }
        }
      }
    `}
  </script>
</Helmet>

      <div className="container mx-auto pt-28 px-4">
        <h2 className="careers-heading text-4xl font-semibold text-yellow-300 mb-12 text-center">
          Join Our Team
        </h2>

        {/* How to Apply Section */}
        <div className="mb-12 text-center bg-gray-900 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-yellow-300 mb-4">How to Apply</h3>
          <p className="text-gray-200 text-lg">
            Interested candidates can submit their resumes to:
          </p>
          <div className="flex items-center justify-center mt-4 space-x-2">
            <FaEnvelope className="text-yellow-300 text-xl" />
            <a href="mailto:careers@db4cloud.in" className="text-blue-400 hover:text-blue-600 text-lg">
            careers@db4cloud.in
            </a>
          </div>
        </div>

        <div className="careers grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {jobListings.map((job, index) => (
            <motion.div
              key={index}
              className="job-listing bg-gray-900 p-6 rounded-lg shadow-lg"
              whileHover={hoverEffect}
              whileTap={tapEffect}
            >
              <motion.div
                className="icon-wrapper"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {job.icon}
              </motion.div>
              <motion.h3
                className="text-2xl font-bold text-yellow-300 mt-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
              >
                {job.title}
              </motion.h3>
              <motion.p
                className="text-gray-200 mt-2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.4 }}
              >
                {job.description}
              </motion.p>
              <motion.p
                className="text-gray-200 mt-2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.5 }}
              >
                <strong>Location:</strong> {job.location}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Careers;
