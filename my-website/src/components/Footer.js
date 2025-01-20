import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";
import gsap from "gsap";

const Footer = () => {
  const footerRef = useRef(null);
  const titleRef = useRef(null);
  const socialIconsRef = useRef(null);

  useEffect(() => {
    // GSAP animations for footer appearance
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
      className="bg-black text-white py-16"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Left Section - Company Info */}
        <div>
          <h2
            className="text-4xl font-semibold mb-4 text-red-600"
            ref={titleRef}
          >
            Db4Cloud Technologies
          </h2>
          <p className="text-gray-400 text-sm mb-6">
            Db4Cloud Technologies IT Services is the leader in the IT field,
            working on offshore products and outsourcing software development.
          </p>
          <div>
            <h4 className="text-xl font-semibold text-yellow-300 mb-2">
              Follow Us
            </h4>
            <div
              ref={socialIconsRef}
              className="flex justify-center md:justify-start space-x-4 text-2xl"
            >
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300 transition duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300 transition duration-300"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300 transition duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300 transition duration-300"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>

        {/* Second Column - Useful Links */}
        <div>
          <h4 className="text-xl font-semibold text-yellow-300 mb-2">
            Useful Links
          </h4>
          <ul className="space-y-2">
            <li>
              <a
                href="/"
                className="hover:text-yellow-300 transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/industries"
                className="hover:text-yellow-300 transition duration-300"
              >
                Industries
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="hover:text-yellow-300 transition duration-300"
              >
                Services
              </a>
            </li>
            {/* <li>
              <a
                href="/blog"
                className="hover:text-yellow-300 transition duration-300"
              >
                Blog
              </a>
            </li> */}
            <li>
              <a
                href="/careers"
                className="hover:text-yellow-300 transition duration-300"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-yellow-300 transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Third Column - Industries */}
        <div>
          <h4 className="text-xl font-semibold text-yellow-300 mb-2">
            Industries
          </h4>
          <ul className="space-y-2">
            <li>Education</li>
            <li>Finance</li>
            <li>Retail</li>
            <li>Automotive</li>
            <li>Manufacturing</li>
            <li>Aerospace</li>
          </ul>
        </div>

        {/* Fourth Column - Services */}
        <div>
          <h4 className="text-xl font-semibold text-yellow-300 mb-2">
            Services
          </h4>
          <ul className="space-y-2">
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
      <div className="mt-12 text-center text-sm text-gray-400">
        ©2024 Db4Cloud. All Rights Reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
