import React, { useEffect, useState, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { FaBuilding, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Helmet } from "react-helmet";
import "./Contact.css";

// Lazy load GSAP only when needed
const loadGSAP = () => import("gsap").then((module) => module.gsap);

// Memoized static data to prevent recreating on every render
const COUNTRY_CODES = [
  { code: "+91", country: "India" },
  { code: "+1", country: "USA/Canada" },
  { code: "+44", country: "UK" },
  { code: "+61", country: "Australia" },
  { code: "+65", country: "Singapore" },
  { code: "+971", country: "UAE" },
  { code: "+81", country: "Japan" },
  { code: "+353", country: "Ireland" },
  { code: "+64", country: "New Zealand" },
];

const PHONE_REGEX_PATTERNS = {
  "+91": /^\+91[6-9]\d{9}$/,
  "+1": /^\+1[2-9]\d{9}$/,
  "+44": /^\+44[1-9]\d{9}$/,
  "+61": /^\+614\d{8}$/,
  "+65": /^\+65[689]\d{7}$/,
  "+971": /^\+971[0-9]\d{8}$/,
  "+81": /^\+81[0-9]\d{9}$/,
  "+353": /^\+353[0-9]\d{8}$/,
  "+64": /^\+64[0-9]\d{7}$/,
};

// Memoized validation schema
const validationSchema = Yup.object({
  countryCode: Yup.string().required("Country code is required"),
  phone: Yup.string()
    .required("Phone number is required")
    .test(
      "phone",
      "Invalid phone number for selected country",
      function (value) {
        const countryCode = this.parent.countryCode;
        const pattern = PHONE_REGEX_PATTERNS[countryCode];
        return pattern ? pattern.test(`${countryCode}${value}`) : true;
      }
    ),
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

const Contact = () => {
  const [result, setResult] = useState("");
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [gsapLoaded, setGsapLoaded] = useState(false);

  // Memoized animation variants
  const animationVariants = useMemo(
    () => ({
      buttonHover: {
        scale: 1.05,
        boxShadow: "0px 0px 8px rgba(255, 215, 0, 0.7)",
        transition: { duration: 0.2 },
      },
      buttonTap: {
        scale: 0.95,
        transition: { duration: 0.1 },
      },
      containerInitial: { opacity: 0, y: 20 },
      containerAnimate: { opacity: 1, y: 0 },
      formInitial: { opacity: 0, x: -20 },
      formAnimate: { opacity: 1, x: 0 },
      infoInitial: { opacity: 0, x: 20 },
      infoAnimate: { opacity: 1, x: 0 },
      emailInitial: { opacity: 0, y: 30 },
      emailAnimate: { opacity: 1, y: 0 },
      snackbarInitial: { y: 50, opacity: 0 },
      snackbarAnimate: { y: 0, opacity: 1 },
      snackbarExit: { y: 50, opacity: 0 },
    }),
    []
  );

  // Memoized structured data
  const structuredData = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "DB4Cloud Contact Page",
      description: "Contact information and office locations for DB4Cloud",
      mainEntity: {
        "@type": "Organization",
        name: "DB4Cloud",
        url: "https://db4cloud.in",
        email: "contact@db4cloud.in",
        address: [
          {
            "@type": "PostalAddress",
            addressLocality: "Chittoor",
            addressRegion: "Andhra Pradesh",
            addressCountry: "India",
          },
          {
            "@type": "PostalAddress",
            addressLocality: "Chennai",
            addressRegion: "Tamil Nadu",
            addressCountry: "India",
          },
          {
            "@type": "PostalAddress",
            addressLocality: "Hyderabad",
            addressRegion: "Telangana",
            addressCountry: "India",
          },
          {
            "@type": "PostalAddress",
            addressLocality: "Trivandrum",
            addressRegion: "Kerala",
            addressCountry: "India",
          },
        ],
      },
    }),
    []
  );

  // Optimized form submission with useCallback
  const onSubmit = useCallback(async (values, { setSubmitting, resetForm }) => {
    try {
      const formData = new FormData();
      Object.keys(values).forEach((key) => formData.append(key, values[key]));
      formData.append("access_key", "af96408c-08c5-4528-a729-9f5dbabad455");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setShowSnackbar(true);
        resetForm();

        const timer = setTimeout(() => {
          setShowSnackbar(false);
        }, 3000);

        return () => clearTimeout(timer);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setSubmitting(false);
    }
  }, []);

  useEffect(() => {
    // Use Intersection Observer for better performance
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -10% 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("contact-visible");
        }
      });
    }, observerOptions);

    // Observe contact sections
    const contactSections = document.querySelectorAll(
      ".contact-form-container, .contact-info-container, .contact-email-section"
    );
    contactSections.forEach((section) => observer.observe(section));

    // Load GSAP only if needed and after critical content
    const loadGSAPAnimations = async () => {
      try {
        const gsap = await loadGSAP();

        // Simplified GSAP animation
        gsap.fromTo(
          ".contact-form",
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" }
        );

        setGsapLoaded(true);
      } catch (error) {
        console.warn("GSAP failed to load:", error);
      }
    };

    // Delay GSAP loading to prioritize critical content
    const timer = setTimeout(loadGSAPAnimations, 200);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  // Memoized office data
  const officeData = useMemo(
    () => ({
      corporate: {
        title: "Corporate Office",
        icon: <FaBuilding className="contact-office-icon" />,
        locations: ["Chittoor, Andhra Pradesh, India"],
      },
      regional: {
        title: "Regional Offices",
        icon: <FaLocationDot className="contact-office-icon" />,
        locations: [
          "Chennai, Tamil Nadu, India",
          "Hyderabad, Telangana, India",
          "Trivandrum, Kerala, India",
        ],
      },
    }),
    []
  );

  return (
    <div className="contact-container">
      <Helmet>
        {/* Critical meta tags first */}
        <title>Contact DB4Cloud - Get in Touch With Our Team</title>
        <meta
          name="description"
          content="Connect with DB4Cloud. Reach out to our offices in Chennai, Hyderabad, Trivandrum, and Chittoor for business inquiries and support."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://db4cloud.in/contact" />

        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/fonts/main-font.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="//api.web3forms.com" />
        <link rel="preconnect" href="https://api.web3forms.com" />

        {/* Other meta tags */}
        <meta
          name="keywords"
          content="DB4Cloud contact, business inquiries, tech support, Chennai office, Hyderabad office"
        />
        <meta name="author" content="DB4Cloud" />
        <meta name="robots" content="index, follow" />

        {/* Optimized Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Contact DB4Cloud - Reach Out to Us"
        />
        <meta
          property="og:description"
          content="Get in touch with DB4Cloud. Our offices across India are ready to assist you with your technology needs."
        />
        <meta property="og:url" content="https://db4cloud.in/contact" />
        <meta
          property="og:image"
          content="https://db4cloud.in/images/contact-banner.webp"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact DB4Cloud - Let's Connect" />
        <meta
          name="twitter:description"
          content="Reach out to DB4Cloud for innovative technology solutions. Multiple office locations across India."
        />
        <meta
          name="twitter:image"
          content="https://db4cloud.in/images/contact-banner.webp"
        />

        {/* Optimized structured data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="contact-main-container">
        <motion.h1
          className="contact-main-heading"
          initial={animationVariants.containerInitial}
          animate={animationVariants.containerAnimate}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Contact Us
        </motion.h1>

        <div className="contact-content-wrapper">
          <motion.section
            className="contact-form-container"
            initial={animationVariants.formInitial}
            animate={animationVariants.formAnimate}
            transition={{ duration: 0.6, delay: 0.2 }}
            aria-labelledby="contact-form-heading"
          >
            <h2 id="contact-form-heading" className="sr-only">
              Contact Form
            </h2>
            <Formik
              initialValues={{
                name: "",
                countryCode: "+91",
                phone: "",
                email: "",
                message: "",
              }}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="contact-form" noValidate>
                  <div className="contact-form-field">
                    <Field
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="contact-form-input"
                      aria-label="Your name"
                      autoComplete="name"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="contact-error-message"
                      role="alert"
                    />
                  </div>

                  <div className="contact-form-field">
                    <div className="contact-phone-container">
                      <Field
                        as="select"
                        name="countryCode"
                        className="contact-country-select"
                        aria-label="Country code"
                      >
                        {COUNTRY_CODES.map((country) => (
                          <option key={country.code} value={country.code}>
                            {country.code}
                          </option>
                        ))}
                      </Field>
                      <Field
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        className="contact-phone-input"
                        aria-label="Phone number"
                        autoComplete="tel"
                      />
                    </div>
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="contact-error-message"
                      role="alert"
                    />
                  </div>

                  <div className="contact-form-field">
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email@example.com"
                      className="contact-form-input"
                      aria-label="Email address"
                      autoComplete="email"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="contact-error-message"
                      role="alert"
                    />
                  </div>

                  <div className="contact-form-field">
                    <Field
                      as="textarea"
                      name="message"
                      placeholder="Your Message"
                      className="contact-form-textarea"
                      aria-label="Your message"
                      rows="4"
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="contact-error-message"
                      role="alert"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`contact-submit-button ${
                      isSubmitting ? "contact-submit-button-loading" : ""
                    }`}
                    variants={animationVariants}
                    whileHover="buttonHover"
                    whileTap="buttonTap"
                    aria-label={
                      isSubmitting ? "Submitting form" : "Submit contact form"
                    }
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </motion.button>
                </Form>
              )}
            </Formik>
          </motion.section>

          <motion.aside
            className="contact-info-container"
            initial={animationVariants.infoInitial}
            animate={animationVariants.infoAnimate}
            transition={{ duration: 0.6, delay: 0.4 }}
            aria-labelledby="office-info-heading"
          >
            <h2 id="office-info-heading" className="sr-only">
              Office Information
            </h2>

            <motion.div className="contact-office-section">
              <motion.h3 className="contact-office-title">
                {officeData.corporate.icon}
                {officeData.corporate.title}
              </motion.h3>
              <motion.ul className="contact-office-list" role="list">
                {officeData.corporate.locations.map((location, index) => (
                  <li
                    key={`corporate-${index}`}
                    className="contact-office-card"
                    role="listitem"
                  >
                    <div className="contact-office-item">
                      <FaMapMarkerAlt
                        className="contact-office-item-icon"
                        aria-hidden="true"
                      />
                      <span className="contact-office-item-text">
                        {location}
                      </span>
                    </div>
                  </li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div className="contact-office-section">
              <motion.h3 className="contact-office-title">
                {officeData.regional.icon}
                {officeData.regional.title}
              </motion.h3>
              <motion.ul className="contact-office-list" role="list">
                {officeData.regional.locations.map((location, index) => (
                  <li
                    key={`regional-${index}`}
                    className="contact-office-card"
                    role="listitem"
                  >
                    <div className="contact-office-item">
                      <FaMapMarkerAlt
                        className="contact-office-item-icon"
                        aria-hidden="true"
                      />
                      <span className="contact-office-item-text">
                        {location}
                      </span>
                    </div>
                  </li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.aside>
        </div>

        <motion.section
          className="contact-email-section"
          initial={animationVariants.emailInitial}
          animate={animationVariants.emailAnimate}
          transition={{ duration: 0.6, delay: 0.6 }}
          aria-labelledby="email-support-heading"
        >
          <div className="contact-email-container">
            <div className="contact-email-icon-container">
              <FaEnvelope className="contact-email-icon" aria-hidden="true" />
            </div>
            <h3 id="email-support-heading" className="contact-email-title">
              Email Support
            </h3>
            <a
              href="mailto:contact@db4cloud.in"
              className="contact-email-link"
              rel="noopener"
              aria-label="Send email to contact@db4cloud.in"
            >
              contact@db4cloud.in
            </a>
          </div>
        </motion.section>

        {showSnackbar && (
          <motion.div
            initial={animationVariants.snackbarInitial}
            animate={animationVariants.snackbarAnimate}
            exit={animationVariants.snackbarExit}
            className="contact-snackbar"
            role="alert"
            aria-live="polite"
            transition={{ duration: 0.3 }}
          >
            <svg
              className="contact-snackbar-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
              width="20"
              height="20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="contact-snackbar-text">
              Email sent successfully!
            </span>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Contact;
