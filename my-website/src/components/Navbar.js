import React, { useEffect, useState, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./Navbar.css";

// Lazy load GSAP only when needed
const loadGSAP = () => import("gsap").then((module) => module.gsap);

// Memoized navigation data to prevent recreation
const NAVIGATION_LINKS = [
  { to: "/", className: "navbar-link home-link", label: "Home" },
  {
    to: "/industries",
    className: "navbar-link industries-link",
    label: "Industries",
  },
  {
    to: "/services",
    className: "navbar-link services-link",
    label: "Services",
  },
  { to: "/careers", className: "navbar-link careers-link", label: "Careers" },
  { to: "/contact", className: "navbar-link contact-link", label: "Contact" },
];

const Navbar = () => {
  const [opacity, setOpacity] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [gsapLoaded, setGsapLoaded] = useState(false);

  // Memoized scroll handler to prevent recreation on every render
  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const maxScroll = 300;
    const minOpacity = 0.3;
    const newOpacity = Math.max(1 - scrollTop / maxScroll, minOpacity);
    setOpacity(newOpacity);
  }, []);

  // Memoized toggle menu function
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => {
      const newState = !prev;
      // Toggle z-index of logo when menu is opened/closed
      const logo = document.querySelector(".floating-logo");
      if (logo) {
        logo.style.zIndex = newState ? "50" : "40";
      }
      return newState;
    });
  }, []);

  // Optimized GSAP initialization
  const initializeGSAPAnimations = useCallback(async () => {
    try {
      const gsap = await loadGSAP();

      // Simplified and optimized GSAP animation
      const tl = gsap.timeline({
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      tl.to(".navbar", {
        y: "+=10",
        x: "+=10",
        rotation: "+=3",
        duration: 2.5, // Reduced from 3s
      })
        .to(".navbar", {
          y: "-=10",
          x: "-=10",
          rotation: "-=6",
          duration: 2.5, // Reduced from 3s
        })
        .to(".navbar", {
          y: "+=10",
          x: "+=5",
          rotation: "+=3",
          duration: 2.5, // Reduced from 3s
        });

      setGsapLoaded(true);
    } catch (error) {
      console.warn("GSAP failed to load:", error);
      // Fallback: navbar still works without animations
    }
  }, []);

  useEffect(() => {
    // Add scroll listener with passive option for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Load GSAP after critical content with delay
    const gsapTimer = setTimeout(initializeGSAPAnimations, 300);

    return () => {
      window.removeEventListener("scroll", handleScroll, { passive: true });
      clearTimeout(gsapTimer);
    };
  }, [handleScroll, initializeGSAPAnimations]);

  // Memoized SVG icons to prevent recreation
  const menuIcons = useMemo(
    () => ({
      close: (
        <svg
          className="navbar-mobile-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      ),
      hamburger: (
        <svg
          className="navbar-mobile-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      ),
    }),
    []
  );

  // Memoized navigation links renderer
  const renderNavigationLinks = useCallback(
    (isMobile = false) => {
      const baseClassName = isMobile ? "navbar-mobile-link" : "navbar-link";
      const onClick = isMobile ? toggleMenu : undefined;

      return NAVIGATION_LINKS.map((link, index) => (
        <li key={`nav-${link.to}-${index}`}>
          <Link
            to={link.to}
            onClick={onClick}
            className={
              isMobile
                ? `${baseClassName} ${link.label.toLowerCase()}-link`
                : link.className
            }
            aria-label={`Navigate to ${link.label}`}
          >
            {link.label}
          </Link>
        </li>
      ));
    },
    [toggleMenu]
  );

  return (
    <>
      <Helmet>
        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/fonts/navbar-font.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="//db4cloud.in" />

        {/* Optimize for Core Web Vitals */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <nav
        className="navbar navbar-container"
        style={{ opacity }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="navbar-flex-container">
          {/* Mobile Menu Button - Now positioned on the right */}
          <div className="navbar-mobile-menu-button">
            <button
              onClick={toggleMenu}
              className="navbar-mobile-button"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              type="button"
            >
              {isMenuOpen ? menuIcons.close : menuIcons.hamburger}
            </button>
          </div>

          {/* Desktop Menu - Hidden on mobile */}
          <div className="navbar-desktop-menu" role="menubar">
            <ul className="navbar-desktop-list" role="none">
              {renderNavigationLinks(false)}
            </ul>
          </div>

          {/* Mobile Menu Overlay - Only visible on mobile when menu is open */}
          {isMenuOpen && (
            <div
              className="navbar-mobile-overlay"
              id="mobile-menu"
              role="menu"
              aria-labelledby="mobile-menu-button"
            >
              <ul className="navbar-mobile-list" role="none">
                {renderNavigationLinks(true)}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
