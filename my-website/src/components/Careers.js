import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { FaBriefcase, FaLaptopCode, FaDatabase, FaPen, FaUsers } from "react-icons/fa";

const Careers = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate job listings on scroll
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

    // Heading animation
    gsap.fromTo(
      ".careers-heading",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }
    );
  }, []);

  const jobListings = [
    {
      title: "Frontend Developer",
      description: "Join our team to build engaging and interactive user interfaces.",
      location: "Remote",
      applyLink: "/apply/frontend-developer",
      icon: <FaLaptopCode className="text-6xl text-yellow-300" />,
    },
    {
      title: "Backend Developer",
      description: "We are looking for an experienced backend developer to build scalable server-side applications.",
      location: "New York, USA",
      applyLink: "/apply/backend-developer",
      icon: <FaDatabase className="text-6xl text-yellow-300" />,
    },
    {
      title: "Full Stack Developer",
      description: "Looking for an all-rounder to work on both frontend and backend of web applications.",
      location: "Remote",
      applyLink: "/apply/full-stack-developer",
      icon: <FaBriefcase className="text-6xl text-yellow-300" />,
    },
    {
      title: "UI/UX Designer",
      description: "We need a creative UI/UX designer to design user-friendly interfaces and enhance the user experience.",
      location: "Los Angeles, USA",
      applyLink: "/apply/ui-ux-designer",
      icon: <FaPen className="text-6xl text-yellow-300" />,
    },
    {
      title: "Product Manager",
      description: "Seeking a proactive product manager to oversee the development of innovative products from concept to launch.",
      location: "London, UK",
      applyLink: "/apply/product-manager",
      icon: <FaUsers className="text-6xl text-yellow-300" />,
    },
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
        <h2 className="careers-heading text-4xl font-semibold text-yellow-300 mb-12 text-center">
          Join Our Team
        </h2>
        {/* Job Listings Grid */}
        <div className="careers grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {jobListings.map((job, index) => (
            <motion.div
              key={index}
              className="job-listing bg-gray-900 p-6 rounded-lg shadow-lg"
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
                {job.icon}
              </motion.div>
              {/* Title and Description Animations */}
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
              {/* Job Location */}
              <motion.p
                className="text-gray-200 mt-2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.5 }}
              >
                <strong>Location:</strong> {job.location}
              </motion.p>
              {/* Apply Link */}
              <motion.a
                href={job.applyLink}
                className="text-blue-400 hover:text-blue-600 mt-4 inline-block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.6 }}
              >
                Apply Now
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Careers;
