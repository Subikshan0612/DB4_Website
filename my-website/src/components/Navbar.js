// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { gsap } from "gsap";

// const Navbar = () => {
//   const [opacity, setOpacity] = useState(1); // State for controlling opacity

//   useEffect(() => {
//     // Floating and tilting animation
//     const tl = gsap.timeline({ repeat: -1, yoyo: true });
//     tl.to(".navbar", {
//       y: "+=10",
//       x: "+=10",
//       rotation: "+=3",
//       duration: 3,
//       ease: "sine.inOut",
//     })
//       .to(".navbar", {
//         y: "-=10",
//         x: "-=10",
//         rotation: "-=6",
//         duration: 3,
//         ease: "sine.inOut",
//       })
//       .to(".navbar", {
//         y: "+=10",
//         x: "+=5",
//         rotation: "+=3",
//         duration: 3,
//         ease: "sine.inOut",
//       });

//     // Scroll-based opacity effect with a minimum limit
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const maxScroll = 300; // Max scroll distance for reducing opacity
//       const minOpacity = 0.3; // Minimum opacity value
//       const newOpacity = Math.max(1 - scrollTop / maxScroll, minOpacity); // Ensures opacity never goes below minOpacity
//       setOpacity(newOpacity);
//     };

//     window.addEventListener("scroll", handleScroll);

//     // Cleanup listener on unmount
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <nav
//       className="navbar fixed top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-4 px-8 rounded-full shadow-2xl z-50 max-w-[75%] transition-all duration-300 ease-in-out group bg-opacity-60"
//       style={{ opacity }} // Bind opacity to state
//     >
//       {/* Glow and border effects on hover */}
//       <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-[#9b4dff] group-hover:shadow-[0_0_30px_10px_rgba(155,77,255,0.8)] transition-all duration-500"></div>

//       <ul className="flex justify-around items-center space-x-10 relative">
//         <li>
//           <Link
//             to="/"
//             className="navbar-link text-lg md:text-xl font-bold transition-all duration-300 hover:text-blue-400 hover:opacity-80"
//           >
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/industries"
//             className="navbar-link text-lg md:text-xl font-bold transition-all duration-300 hover:text-pink-400 hover:opacity-80"
//           >
//             Industries
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/services"
//             className="navbar-link text-lg md:text-xl font-bold transition-all duration-300 hover:text-purple-400 hover:opacity-80"
//           >
//             Services
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/careers"
//             className="navbar-link text-lg md:text-xl font-bold transition-all duration-300 hover:text-orange-400 hover:opacity-80"
//           >
//             Careers
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/contact"
//             className="navbar-link text-lg md:text-xl font-bold transition-all duration-300 hover:text-yellow-400 hover:opacity-80"
//           >
//             Contact
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };
// export default Navbar;

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { gsap } from "gsap";

// const Navbar = () => {
//   const [opacity, setOpacity] = useState(1);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const tl = gsap.timeline({ repeat: -1, yoyo: true });
//     tl.to(".navbar", {
//       y: "+=10",
//       x: "+=10",
//       rotation: "+=3",
//       duration: 3,
//       ease: "sine.inOut",
//     })
//       .to(".navbar", {
//         y: "-=10",
//         x: "-=10",
//         rotation: "-=6",
//         duration: 3,
//         ease: "sine.inOut",
//       })
//       .to(".navbar", {
//         y: "+=10",
//         x: "+=5",
//         rotation: "+=3",
//         duration: 3,
//         ease: "sine.inOut",
//       });

//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const maxScroll = 300;
//       const minOpacity = 0.3;
//       const newOpacity = Math.max(1 - scrollTop / maxScroll, minOpacity);
//       setOpacity(newOpacity);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav
//       className="navbar fixed top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-4 px-8 rounded-full shadow-2xl z-50 w-[90%] md:max-w-[75%] transition-all duration-300 ease-in-out group bg-opacity-60"
//       style={{ opacity }}
//     >
//       <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-[#9b4dff] group-hover:shadow-[0_0_30px_10px_rgba(155,77,255,0.8)] transition-all duration-500"></div>

//       {/* Mobile Menu Button */}
//       <div className="md:hidden">
//         <button
//           onClick={toggleMenu}
//           className="text-white focus:outline-none p-2 z-50 relative"
//           aria-label="Toggle menu"
//         >
//           {isMenuOpen ? (
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           ) : (
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           )}
//         </button>
//       </div>

//       {/* Desktop Menu */}
//       <ul className="hidden md:flex justify-around items-center space-x-10 relative">
//         <li><Link to="/" className="navbar-link text-lg md:text-xl font-bold transition-all duration-300 hover:text-blue-400 hover:opacity-80">Home</Link></li>
//         <li><Link to="/industries" className="navbar-link text-lg md:text-xl font-bold transition-all duration-300 hover:text-pink-400 hover:opacity-80">Industries</Link></li>
//         <li><Link to="/services" className="navbar-link text-lg md:text-xl font-bold transition-all duration-300 hover:text-purple-400 hover:opacity-80">Services</Link></li>
//         <li><Link to="/careers" className="navbar-link text-lg md:text-xl font-bold transition-all duration-300 hover:text-orange-400 hover:opacity-80">Careers</Link></li>
//         <li><Link to="/contact" className="navbar-link text-lg md:text-xl font-bold transition-all duration-300 hover:text-yellow-400 hover:opacity-80">Contact</Link></li>
//       </ul>

//       {/* Mobile Menu Overlay */}
//       {isMenuOpen && (
//         <div className="absolute top-full left-0 right-0 bg-gradient-to-r from-purple-700 to-indigo-800 mt-4 rounded-2xl p-4 shadow-lg">
//           <ul className="flex flex-col space-y-4">
//             <li><Link to="/" onClick={toggleMenu} className="block text-lg font-bold hover:text-blue-400">Home</Link></li>
//             <li><Link to="/industries" onClick={toggleMenu} className="block text-lg font-bold hover:text-pink-400">Industries</Link></li>
//             <li><Link to="/services" onClick={toggleMenu} className="block text-lg font-bold hover:text-purple-400">Services</Link></li>
//             <li><Link to="/careers" onClick={toggleMenu} className="block text-lg font-bold hover:text-orange-400">Careers</Link></li>
//             <li><Link to="/contact" onClick={toggleMenu} className="block text-lg font-bold hover:text-yellow-400">Contact</Link></li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const Navbar = () => {
  const [opacity, setOpacity] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(".navbar", {
      y: "+=10",
      x: "+=10",
      rotation: "+=3",
      duration: 3,
      ease: "sine.inOut",
    })
      .to(".navbar", {
        y: "-=10",
        x: "-=10",
        rotation: "-=6",
        duration: 3,
        ease: "sine.inOut",
      })
      .to(".navbar", {
        y: "+=10",
        x: "+=5",
        rotation: "+=3",
        duration: 3,
        ease: "sine.inOut",
      });

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = 300;
      const minOpacity = 0.3;
      const newOpacity = Math.max(1 - scrollTop / maxScroll, minOpacity);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Toggle z-index of logo when menu is opened/closed
    const logo = document.querySelector('.floating-logo');
    if (logo) {
      logo.style.zIndex = isMenuOpen ? '50' : '40';
    }
  };

  return (
    <nav
      className="navbar fixed top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-4 px-8 rounded-full shadow-2xl z-[60] w-[90%] md:max-w-[75%] transition-all duration-300 ease-in-out group bg-opacity-60"
      style={{ opacity }}
    >
      <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-[#9b4dff] group-hover:shadow-[0_0_30px_10px_rgba(155,77,255,0.8)] transition-all duration-500"></div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none p-2 relative"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex justify-around items-center space-x-10 relative">
        <li><Link to="/" className="navbar-link text-lg md:text-xl font-bold transition-all duration-300 hover:text-blue-400 hover:opacity-80">Home</Link></li>
        <li><Link to="/industries" className="navbar-link text-lg md:text-xl font-bold transition-all duration-300 hover:text-pink-400 hover:opacity-80">Industries</Link></li>
        <li><Link to="/services" className="navbar-link text-lg md:text-xl font-bold transition-all duration-300 hover:text-purple-400 hover:opacity-80">Services</Link></li>
        <li><Link to="/careers" className="navbar-link text-lg md:text-xl font-bold transition-all duration-300 hover:text-orange-400 hover:opacity-80">Careers</Link></li>
        <li><Link to="/contact" className="navbar-link text-lg md:text-xl font-bold transition-all duration-300 hover:text-yellow-400 hover:opacity-80">Contact</Link></li>
      </ul>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-gradient-to-r from-purple-700 to-indigo-800 mt-4 rounded-2xl p-4 shadow-lg z-[55]">
          <ul className="flex flex-col space-y-4">
            <li><Link to="/" onClick={toggleMenu} className="block text-lg font-bold hover:text-blue-400">Home</Link></li>
            <li><Link to="/industries" onClick={toggleMenu} className="block text-lg font-bold hover:text-pink-400">Industries</Link></li>
            <li><Link to="/services" onClick={toggleMenu} className="block text-lg font-bold hover:text-purple-400">Services</Link></li>
            <li><Link to="/careers" onClick={toggleMenu} className="block text-lg font-bold hover:text-orange-400">Careers</Link></li>
            <li><Link to="/contact" onClick={toggleMenu} className="block text-lg font-bold hover:text-yellow-400">Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


