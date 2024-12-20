import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const Navbar = () => {
  const [opacity, setOpacity] = useState(1); // State for controlling opacity

  useEffect(() => {
    // Floating and tilting animation
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

    // Scroll-based opacity effect with a minimum limit
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = 300; // Max scroll distance for reducing opacity
      const minOpacity = 0.3; // Minimum opacity value
      const newOpacity = Math.max(1 - scrollTop / maxScroll, minOpacity); // Ensures opacity never goes below minOpacity
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className="navbar fixed top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-4 px-8 rounded-full shadow-2xl z-50 max-w-[75%] transition-all duration-300 ease-in-out group bg-opacity-60"
      style={{ opacity }} // Bind opacity to state
    >
      {/* Glow and border effects on hover */}
      <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-[#9b4dff] group-hover:shadow-[0_0_30px_10px_rgba(155,77,255,0.8)] transition-all duration-500"></div>

      <ul className="flex justify-around items-center space-x-10 relative">
        <li>
          <Link
            to="/"
            className="navbar-link text-lg md:text-xl font-bold transition-all duration-300 hover:text-blue-400 hover:opacity-80"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/industries"
            className="navbar-link text-lg md:text-xl font-bold transition-all duration-300 hover:text-pink-400 hover:opacity-80"
          >
            Industries
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            className="navbar-link text-lg md:text-xl font-bold transition-all duration-300 hover:text-purple-400 hover:opacity-80"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="/careers"
            className="navbar-link text-lg md:text-xl font-bold transition-all duration-300 hover:text-orange-400 hover:opacity-80"
          >
            Careers
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="navbar-link text-lg md:text-xl font-bold transition-all duration-300 hover:text-yellow-400 hover:opacity-80"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
