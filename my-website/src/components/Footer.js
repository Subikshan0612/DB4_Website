import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa";
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
      className="bg-black text-white py-8 md:py-12 h-auto w-full text-xs md:text-sm"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      style={{
        fontSize: "12px", // Smaller default font size
        minHeight: "50px", // Reduced height for footer
        width: "100%", // Full width
      }}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left">
          {/* Company Info */}
          <div className="md:w-1/3 mb-6 md:mb-0">
            <h2 ref={titleRef} className="text-yellow-300 text-sm md:text-base font-bold mb-3">
              {/* Company Name */}
            </h2>
            <a
              href="/"
              className="flex flex-col items-center justify-center 
                h-14 w-36 
                sm:h-16 sm:w-40 
                md:h-20 md:w-48 
                lg:h-24 lg:w-56 
                text-center font-bold rounded-lg shadow-lg 
                backdrop-blur-sm"
            >
              <span className="text-red-500 text-xs sm:text-sm md:text-base lg:text-lg">
                Db4Cloud
              </span>
              <span className="text-red-500 text-xs sm:text-sm md:text-base lg:text-lg">
                Technologies Pvt Ltd
              </span>
            </a>
          </div>

          {/* Social Links */}
          <div className="md:w-1/3 text-center mb-6 md:mb-0">
            <h4 className="text-sm md:text-base font-semibold text-yellow-300 mb-2">
              Follow Us
            </h4>
            <div
              ref={socialIconsRef}
              className="flex justify-center space-x-4 text-xl md:text-2xl"
            >
              <a
                href="https://www.instagram.com/db4cloudtechnologies/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300 transition duration-300"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://x.com/DB4Cloud"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300 transition duration-300"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/company/103363660/admin/dashboard/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300 transition duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.facebook.com/people/Db4Cloud-Technologies-Pvt-Ltd/61563263484445/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300 transition duration-300"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.youtube.com/channel/UCvhr4y0CQY8C2-B8xcB9X6w"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition duration-300"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-600" />
        
        <div className="grid md:grid-cols-4 gap-8 px-4">
          {/* Company Description */}
          <div className="md:col-span-1">
            <p className="text-gray-400 text-xs md:text-sm mb-3 leading-relaxed font-medium">
              Db4Cloud Technologies IT Services is the leader in the IT field, working on offshore products and outsourcing software development.
            </p>
          </div>

          {/* Useful Links */}
          <div className="pl-4">
            <h4 className="text-sm md:text-base font-bold text-yellow-300 mb-3">
              Useful Links
            </h4>
            <ul className="space-y-2 text-xs md:text-sm">
              <li><a href="/" className="hover:text-yellow-300 transition duration-300">Home</a></li>
              <li><a href="/industries" className="hover:text-yellow-300 transition duration-300">Industries</a></li>
              <li><a href="/services" className="hover:text-yellow-300 transition duration-300">Services</a></li>
              <li><a href="/careers" className="hover:text-yellow-300 transition duration-300">Careers</a></li>
              <li><a href="/contact" className="hover:text-yellow-300 transition duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Industries */}
          <div className="pl-4">
            <h4 className="text-sm md:text-base font-bold text-yellow-300 mb-3">
              Industries
            </h4>
            <ul className="space-y-2 text-xs md:text-sm">
              <li>Education</li>
              <li>Finance</li>
              <li>Retail</li>
              <li>Automotive</li>
              <li>Manufacturing</li>
              <li>Aerospace</li>
            </ul>
          </div>

          {/* Services */}
          <div className="pl-4">
            <h4 className="text-sm md:text-base font-bold text-yellow-300 mb-3">
              Services
            </h4>
            <ul className="space-y-2 text-xs md:text-sm">
              <li>Atlassian Services</li>
              <li>AWS and Azure Migration</li>
              <li>DevOps Solutions</li>
              <li>Cloud Management</li>
              <li>Salesforce Services</li>
              <li>Snowflake Services</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 text-center text-xs md:text-sm text-gray-400">
          ©2024 Db4Cloud. All Rights Reserved.
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
