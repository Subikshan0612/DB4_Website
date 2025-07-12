import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaXTwitter,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa6";
import gsap from "gsap";
import "./Footer.css"; // Import the specific CSS file

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
      className="footer-container footer-ref"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <div className="footer-main-container">
        <div className="footer-header-section">
          <a href="/" className="footer-logo-link">
            {/* <span className="footer-logo-text-primary">
              Db4Cloud
            </span>
            <span className="footer-logo-text-secondary">
              Technologies Pvt Ltd
            </span> */}

            <img
              src="https://res.cloudinary.com/dfl9rotoy/image/upload/v1741065300/logo2-removebg-preview_p6juhh.png"
              alt="DB4Cloud Technologies"
              className="logo-image"
            />
          </a>

          <div className="footer-social-section">
            <h4 className="footer-social-title">Follow Us</h4>
            <div
              ref={socialIconsRef}
              className="footer-social-icons footer-social-icons-ref"
            >
              <a
                href="https://www.instagram.com/db4cloudtechnologies/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <FaInstagram />
              </a>
              <a
                href="https://x.com/DB4Cloud"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://www.linkedin.com/company/103363660/admin/dashboard/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.facebook.com/people/Db4Cloud-Technologies-Pvt-Ltd/61563263484445/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.youtube.com/channel/UCvhr4y0CQY8C2-B8xcB9X6w"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-content-grid">
          <div>
            <p className="footer-company-description">
              Db4Cloud Technologies IT Services is the leader in the IT field,
              working on offshore products and outsourcing software development.
            </p>
          </div>

          <div>
            <h4 className="footer-section-title">Useful Links</h4>
            <ul className="footer-section-list">
              <li className="footer-section-list-item">
                <a href="/" className="footer-section-link">
                  Home
                </a>
              </li>
              <li className="footer-section-list-item">
                <a href="/industries" className="footer-section-link">
                  Industries
                </a>
              </li>
              <li className="footer-section-list-item">
                <a href="/services" className="footer-section-link">
                  Services
                </a>
              </li>
              <li className="footer-section-list-item">
                <a href="/careers" className="footer-section-link">
                  Careers
                </a>
              </li>
              <li className="footer-section-list-item">
                <a href="/contact" className="footer-section-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="footer-section-title">Industries</h4>
            <ul className="footer-section-list">
              <li className="footer-section-list-item">Education</li>
              <li className="footer-section-list-item">Finance</li>
              <li className="footer-section-list-item">Retail</li>
              <li className="footer-section-list-item">Automotive</li>
              <li className="footer-section-list-item">Manufacturing</li>
            </ul>
          </div>

          <div>
            <h4 className="footer-section-title">Services</h4>
            <ul className="footer-section-list">
              <li className="footer-section-list-item">Atlassian Services</li>
              <li className="footer-section-list-item">
                AWS and Azure Migration
              </li>
              <li className="footer-section-list-item">DevOps Solutions</li>
              <li className="footer-section-list-item">Cloud Management</li>
              <li className="footer-section-list-item">Salesforce Services</li>
            </ul>
          </div>
        </div>

        <div className="footer-copyright">
          ©2025 Db4Cloud. All Rights Reserved.
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
