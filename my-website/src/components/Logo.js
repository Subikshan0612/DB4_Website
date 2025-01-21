// import React, { useEffect, useState } from "react";
// import { gsap } from "gsap";
// import { motion } from "framer-motion";
// import { FaBold } from "react-icons/fa";

// const Logo = () => {
//   const [scrollDirection, setScrollDirection] = useState("up");

//   useEffect(() => {
//     let lastScrollY = window.scrollY;

//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       setScrollDirection(currentScrollY > lastScrollY ? "down" : "up");
//       lastScrollY = currentScrollY;
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     if (scrollDirection === "down") {
//       gsap.to(".floating-logo", {
//         y: -100,
//         opacity: 0,
//         duration: 0.5,
//         ease: "power1.out",
//       });
//     } else {
//       gsap.to(".floating-logo", {
//         y: 0,
//         opacity: 1,
//         duration: 0.5,
//         ease: "power1.out",
//       });
//     }
//   }, [scrollDirection]);

//   return (
//     <motion.div
//       className="floating-logo fixed top-4 left-8 h-16 w-16 md:h-24 md:w-24 z-50"
//       whileHover={{ scale: 1.2 }}
//     >
//       <p style={{color:"red" }}>Db4Cloud Technologies Pvt Ltd</p>
//       {/* <img
//         src="https://res.cloudinary.com/dplqjwnoc/image/upload/v1732529563/DB4cloud_compny_logo_riybya.png"
//         alt="Company Logo"
//         className="w-full h-full object-contain"
//       /> */}
//     </motion.div>
//   );
// };

// export default Logo;

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
    if (scrollDirection === "down") {
      gsap.to(".floating-logo", {
        opacity: 0,
        duration: 0.5,
        ease: "power1.out",
      });
    } else {
      gsap.to(".floating-logo", {
        opacity: 1,
        duration: 0.5,
        ease: "power1.out",
      });
    }
  }, [scrollDirection]);

  return (
    <motion.div
      className="floating-logo fixed top-4 left-8 z-50"
      whileHover={{ scale: 1.1 }}
    >
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}>
        <p style={{
          color: "#8B0000",
          fontWeight: 800,
          fontSize: "1.8rem",
          fontFamily: "'Arial Black', sans-serif",
          letterSpacing: "0.5px",
          textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
          margin: 0,
          padding: "5px",
          lineHeight: "1.2",
        }}>
          Db4Cloud
        </p>
        <p style={{
          color: "#8B0000",
          fontWeight: 800,
          fontSize: "1.3rem",
          fontFamily: "'Arial Black', sans-serif",
          letterSpacing: "0.5px",
          textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
          margin: 0,
          padding: "5px",
          lineHeight: "1.2",
        }}>
          Technologies Pvt Ltd
        </p>
      </div>
    </motion.div>
  );
};

export default Logo;
