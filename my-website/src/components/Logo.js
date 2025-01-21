

import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";

const Logo = () => {
  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY ? "down" : "up");
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const animationConfig = {
      y: scrollDirection === "down" ? -100 : 0,
      opacity: scrollDirection === "down" ? 0 : 1,
      duration: 0.5,
      ease: "power1.out",
    };
    gsap.to(".floating-logo", animationConfig);
  }, [scrollDirection]);

  return (
    <motion.div
      className="floating-logo fixed top-2 left-2 sm:top-4 sm:left-8 z-50 text-red-700"
      whileHover={{ scale: 1.1 }}
    >
      <a
        href="/"
        className="flex flex-col items-center justify-center 
          h-16 w-40 
          sm:h-20 sm:w-48 
          md:h-24 md:w-56 
          lg:h-28 lg:w-64 
          text-center font-bold font-wild rounded-lg shadow-lg 
          backdrop-blur-sm"
      >
        <span className="text-primary-500 text-xs sm:text-sm md:text-base lg:text-lg">
          Db4Cloud
        </span>
        <span className="text-primary-700 text-xs sm:text-sm md:text-base lg:text-lg">
          Technologies Pvt Ltd
        </span>
      </a>
    </motion.div>
  );
};

export default Logo;

