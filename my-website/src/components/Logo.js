// import React, { useEffect, useState } from "react";
// import { gsap } from "gsap";
// import { motion } from "framer-motion";

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
//         opacity: 0,
//         duration: 0.5,
//         ease: "power1.out",
//       });
//     } else {
//       gsap.to(".floating-logo", {
//         opacity: 1,
//         duration: 0.5,
//         ease: "power1.out",
//       });
//     }
//   }, [scrollDirection]);

//   return (
//     <motion.div
//     className="floating-logo fixed top-2 left-2 sm:top-4 sm:left-8 z-50 text-red-700"   //change 
//       //className="floating-logo fixed top-4 left-8 z-50"
//       whileHover={{ scale: 1.1 }}
//     >
//       <div style={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//       }}>
//         <p style={{
//           color: "rgb(245, 7, 7)",
//           fontWeight: 800,
//           fontSize: "1.2rem",
//           fontFamily: "'Arial Black', sans-serif",
//           letterSpacing: "0.5px",
//           textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
//           margin: 0,
//           padding: "5px",
//           lineHeight: "1.2",
//         }}>
//           Db4Cloud
//         </p>
//         <p style={{
//           color: "rgb(245, 7, 7)",
//           fontWeight: 800,
//           fontSize: "1.2rem",
//           fontFamily: "'Arial Black', sans-serif",
//           letterSpacing: "0.5px",
//           textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
//           margin: 0,
//           padding: "5px",
//           lineHeight: "1.2",
//         }}>
//           Technologies Pvt Ltd
//         </p>
//       </div>
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
    className="floating-logo fixed top-2 left-2 sm:top-4 sm:left-8 z-50" 
style={{ color: "rgb(245, 7, 7)" }}

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
        <span className="text-primary-500 text-xs sm:text-sm md:text-base lg:text-lg"
        style={{ color: "rgb(245, 7, 7)" }}
        >
          Db4Cloud
        </span>
        <span 
        style={{ color: "rgb(245, 7, 7)" }}
        className="text-primary-700 text-xs sm:text-sm md:text-base lg:text-lg">
          Technologies Pvt Ltd
        </span>
      </a>
    </motion.div>
  );
};
 
export default Logo;







