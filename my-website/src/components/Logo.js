import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";

const Logo = () => {
  const [scrollDirection, setScrollDirection] = useState("up"); // Track scroll direction

  useEffect(() => {
    let lastScrollY = window.scrollY; // Keep track of the last scroll position

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine the scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Animate the logo based on scroll direction
    if (scrollDirection === "down") {
      gsap.to(".floating-logo", {
        y: -100, // Move up
        opacity: 0, // Fade out
        duration: 0.5,
        ease: "power1.out",
      });
    } else if (scrollDirection === "up") {
      gsap.to(".floating-logo", {
        y: 0, // Reset position
        opacity: 1, // Fade in
        duration: 0.5,
        ease: "power1.out",
      });
    }
  }, [scrollDirection]);

   return (
    <motion.div
    // In the Logo component, update the className of the motion.div:
className="floating-logo fixed top-0 left-12 w-48 h-48 md:w-56 md:h-56 z-40"

      // className="floating-logo fixed top-0 left-12 w-48 h-48 md:w-56 md:h-56 z-50" // Moved logo further up
      whileHover={{ scale: 1.2 }} // Hover scaling effect
    >
      <img
        src="https://res.cloudinary.com/dplqjwnoc/image/upload/v1732529563/DB4cloud_compny_logo_riybya.png" // Replace with your logo path
        alt="Company Logo"
        className="w-full h-full object-contain"
      />
    </motion.div>
  );
};

export default Logo;
