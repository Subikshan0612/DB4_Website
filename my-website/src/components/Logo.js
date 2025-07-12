import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import "./Logo.css"; // Import the specific CSS file

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
    gsap.to(".logo-floating-container", animationConfig);
  }, [scrollDirection]);

  return (
    <motion.div className="logo-floating-container" whileHover={{ scale: 1.1 }}>
      <a href="/" className="logo-main-link">
        <img
          src="https://res.cloudinary.com/dfl9rotoy/image/upload/v1741065300/logo2-removebg-preview_p6juhh.png"
          alt="DB4Cloud Technologies"
          className="logo-image"
        />
      </a>
    </motion.div>
  );
};

export default Logo;
