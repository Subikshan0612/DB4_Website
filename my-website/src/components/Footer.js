 import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaXTwitter, FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa6";
import gsap from "gsap";

const Footer = () => {
  const footerRef = useRef(null);
  const titleRef = useRef(null);
  const socialIconsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }
    );

    gsap.fromTo(
      titleRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.5, delay: 0.5, ease: "back.out(1.7)" }
    );

    gsap.fromTo(
      socialIconsRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.2, delay: 0.8, ease: "power2.out" }
    );
  }, []);

  return (
    <motion.footer
      ref={footerRef}
      className="bg-black text-white py-2"   // changed
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-1">
          
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
          
          
          
          
          {/* <h2 className="text-2xl font-semibold mb-3 md:mb-0 text-red-600" ref={titleRef}>
            Db4Cloud Technologies
          </h2> */}
          
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-yellow-300 mb-1">Follow Us</h4>
            <div ref={socialIconsRef} className="flex space-x-4 text-xl">
              <a href="https://www.instagram.com/db4cloudtechnologies/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition duration-300">
                <FaInstagram />
              </a>
              <a href="https://x.com/DB4Cloud" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition duration-300">
                <FaXTwitter />
              </a>
              <a href="https://www.linkedin.com/company/103363660/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition duration-300">
                <FaLinkedin />
              </a>
              <a href="https://www.facebook.com/people/Db4Cloud-Technologies-Pvt-Ltd/61563263484445/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition duration-300">
                <FaFacebook />
              </a>
              <a href="https://www.youtube.com/channel/UCvhr4y0CQY8C2-B8xcB9X6w" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition duration-300">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        <div className="border-b border-yellow-300 mb-3"></div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left text-sm">
          <div>
            <p className="text-gray-400 mb-4">
              Db4Cloud Technologies IT Services is the leader in the IT field,
              working on offshore products and outsourcing software development.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-yellow-300 mb-2">Useful Links</h4>
            <ul className="space-y-1">
              <li><a href="/" className="hover:text-yellow-300 transition duration-300">Home</a></li>
              <li><a href="/industries" className="hover:text-yellow-300 transition duration-300">Industries</a></li>
              <li><a href="/services" className="hover:text-yellow-300 transition duration-300">Services</a></li>
              <li><a href="/careers" className="hover:text-yellow-300 transition duration-300">Careers</a></li>
              <li><a href="/contact" className="hover:text-yellow-300 transition duration-300">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-yellow-300 mb-2">Industries</h4>
            <ul className="space-y-1">
              <li>Education</li>
              <li>Finance</li>
              <li>Retail</li>
              <li>Automotive</li>
              <li>Manufacturing</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-yellow-300 mb-2">Services</h4>
            <ul className="space-y-1">
              <li>Atlassian Services</li>
              <li>AWS and Azure Migration</li>
              <li>DevOps Solutions</li>
              <li>Cloud Management</li>
              <li>Salesforce Services</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-gray-400">
          ©2025 Db4Cloud. All Rights Reserved.
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;


