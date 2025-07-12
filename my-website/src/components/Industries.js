// import React from "react";
// import { motion } from "framer-motion";
// import { Helmet } from "react-helmet";
// import './Industries.css'; // Import the specific CSS file

// // Industry categories with respective images
// const industries = [
//   {
//     name: "Technology Industry",
//     image: "https://res.cloudinary.com/dplqjwnoc/image/upload/v1732536717/1_eohu8p.jpg",
//     subcategories: [
//       "Software and IT Services",
//       "Hardware Manufacturing",
//       "Telecommunications",
//       "Electronics",
//       "Cloud Computing",
//       "Artificial Intelligence (AI)",
//       "Cybersecurity"
//     ]
//   },
//   {
//     name: "Finance and Insurance",
//     image: "https://res.cloudinary.com/dplqjwnoc/image/upload/v1732536763/2_fx0iog.jpg",
//     subcategories: [
//       "Banking",
//       "Investment Services",
//       "Insurance",
//       "Wealth Management",
//       "Fintech (Financial Technology)"
//     ]
//   },
//   {
//     name: "Healthcare and Pharmaceuticals",
//     image: "https://res.cloudinary.com/dplqjwnoc/image/upload/v1732536794/3_kgcnlf.jpg",
//     subcategories: [
//       "Hospitals and Clinics",
//       "Biotechnology",
//       "Pharmaceuticals",
//       "Medical Devices",
//       "Healthcare IT"
//     ]
//   },
//   {
//     name: "Manufacturing",
//     image: "https://res.cloudinary.com/dplqjwnoc/image/upload/v1732536821/4_o6dlob.jpg",
//     subcategories: [
//       "Automotive Manufacturing",
//       "Aerospace",
//       "Electronics Manufacturing",
//       "Machinery and Equipment",
//       "Chemical Manufacturing"
//     ]
//   },
//   {
//     name: "Energy and Utilities",
//     image: "https://res.cloudinary.com/dplqjwnoc/image/upload/v1732536844/5_swhlwx.jpg",
//     subcategories: [
//       "Oil & Gas",
//       "Renewable Energy (solar, wind, hydro)",
//       "Electricity",
//       "Water Utilities",
//       "Nuclear Energy"
//     ]
//   },
//   {
//     name: "Retail and Consumer Goods",
//     image: "https://res.cloudinary.com/dplqjwnoc/image/upload/v1732536872/6_k9a7ev.jpg",
//     subcategories: [
//       "E-commerce",
//       "Fashion & Apparel",
//       "Consumer Electronics",
//       "Food & Beverage",
//       "Home Goods"
//     ]
//   },
//   {
//     name: "Agriculture and Food Production",
//     image: "https://res.cloudinary.com/dplqjwnoc/image/upload/v1732536899/7_ptvkev.jpg",
//     subcategories: [
//       "Farming",
//       "Agribusiness",
//       "Food Processing",
//       "Fisheries",
//       "Forestry"
//     ]
//   },
//   {
//     name: "Construction and Real Estate",
//     image: "https://res.cloudinary.com/dplqjwnoc/image/upload/v1732536925/8_o4esnz.jpg",
//     subcategories: [
//       "Residential and Commercial Construction",
//       "Property Development",
//       "Real Estate Services",
//       "Architecture and Engineering"
//     ]
//   },
//   {
//     name: "Transportation and Logistics",
//     image: "https://res.cloudinary.com/dplqjwnoc/image/upload/v1732536950/9_faoxfd.jpg",
//     subcategories: [
//       "Airlines",
//       "Shipping and Freight",
//       "Railroads",
//       "Trucking",
//       "Supply Chain Management"
//     ]
//   },
//   {
//     name: "Entertainment and Media",
//     image: "https://res.cloudinary.com/dplqjwnoc/image/upload/v1732536981/10_mehyla.jpg",
//     subcategories: [
//       "Film and Television",
//       "Music Industry",
//       "Gaming",
//       "Publishing",
//       "Advertising and Public Relations"
//     ]
//   },
//   {
//     name: "Tourism and Hospitality",
//     image: "https://res.cloudinary.com/dplqjwnoc/image/upload/v1732537002/11_h8jgui.jpg",
//     subcategories: [
//       "Hotels and Resorts",
//       "Travel Agencies",
//       "Restaurants",
//       "Cruise Lines"
//     ]
//   },
//   {
//     name: "Education",
//     image: "https://res.cloudinary.com/dplqjwnoc/image/upload/v1732537028/12_yp59g5.jpg",
//     subcategories: [
//       "K-12 Schools",
//       "Higher Education",
//       "EdTech (Educational Technology)",
//       "Corporate Training"
//     ]
//   },
//   {
//     name: "Financial Services",
//     image: "https://res.cloudinary.com/dplqjwnoc/image/upload/v1732537054/13_fpzm0n.jpg",
//     subcategories: [
//       "Asset Management",
//       "Credit Card Services",
//       "Mortgages & Loans",
//       "Stock Exchanges"
//     ]
//   }
// ];

// const Industries = () => {
//   // Motion animations for hover effects
//   const hoverAnimation = {
//     scale: 1.05,
//     transition: { duration: 0.3 },
//   };

//   const tapAnimation = {
//     scale: 0.95,
//     transition: { duration: 0.2 },
//   };

//   return (
//     <div className="industries-container">

// <Helmet>
//   {/* Basic Meta Tags */}
//   <title>Industries We Serve | DB4Cloud - Technology Solutions Across Sectors</title>
//   <meta name="description" content="DB4Cloud delivers specialized technology solutions across multiple industries including Finance, Healthcare, Manufacturing, Retail, Technology, Energy, and more. Transform your industry-specific challenges into opportunities." />
//   <meta name="keywords" content="DB4Cloud industries, technology solutions, finance tech, healthcare IT, manufacturing technology, retail solutions, energy sector IT, education technology, entertainment solutions" />
//   <meta name="author" content="DB4Cloud" />
//   <link rel="canonical" href="https://db4cloud.in/industries" />

//   {/* Open Graph Meta Tags */}
//   <meta property="og:type" content="website" />
//   <meta property="og:site_name" content="DB4Cloud Technologies" />
//   <meta property="og:title" content="Industry Solutions - DB4Cloud Technologies" />
//   <meta property="og:description" content="Discover how DB4Cloud's technology solutions are transforming various industries. From Finance to Healthcare, Manufacturing to Retail - we deliver industry-specific excellence." />
//   <meta property="og:url" content="https://db4cloud.in/industries" />
//   <meta property="og:image" content="https://db4cloud.in/images/industries-banner.jpg" />

//   {/* Twitter Card Meta Tags */}
//   <meta name="twitter:card" content="summary_large_image" />
//   <meta name="twitter:site" content="@DB4Cloud" />
//   <meta name="twitter:title" content="Industry-Specific Technology Solutions | DB4Cloud" />
//   <meta name="twitter:description" content="Expert technology solutions tailored for Finance, Healthcare, Manufacturing, Retail, Energy, and more. Transform your industry with DB4Cloud." />
//   <meta name="twitter:image" content="https://db4cloud.in/images/industries-banner.jpg" />

//   {/* Additional Meta Tags */}
//   <meta name="robots" content="index, follow" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <meta name="language" content="English" />
//   <meta name="revisit-after" content="7 days" />
//   <meta name="generator" content="React" />

//   {/* Schema.org Industry Solutions Structured Data */}
//   <script type="application/ld+json">
//     {`
//       {
//         "@context": "http://schema.org",
//         "@type": "WebPage",
//         "name": "Industries We Serve - DB4Cloud Technologies",
//         "description": "Industry-specific technology solutions across multiple sectors",
//         "provider": {
//           "@type": "Organization",
//           "name": "DB4Cloud Technologies",
//           "url": "https://db4cloud.in"
//         },
//         "offers": {
//           "@type": "AggregateOffer",
//           "itemListElement": [
//             {
//               "@type": "Offer",
//               "itemOffered": {
//                 "@type": "Service",
//                 "name": "Technology Industry Solutions",
//                 "description": "Software, IT Services, Cloud Computing, AI Solutions"
//               }
//             },
//             {
//               "@type": "Offer",
//               "itemOffered": {
//                 "@type": "Service",
//                 "name": "Finance and Insurance Solutions",
//                 "description": "Banking, Investment Services, Fintech Solutions"
//               }
//             },
//             {
//               "@type": "Offer",
//               "itemOffered": {
//                 "@type": "Service",
//                 "name": "Healthcare Solutions",
//                 "description": "Healthcare IT, Medical Systems, Pharmaceutical Technology"
//               }
//             },
//             {
//               "@type": "Offer",
//               "itemOffered": {
//                 "@type": "Service",
//                 "name": "Manufacturing Solutions",
//                 "description": "Industrial IoT, Automation, Supply Chain Technology"
//               }
//             }
//           ]
//         }
//       }
//     `}
//   </script>
// </Helmet>

//       <div className="industries-main-container">
//         <h2 className="industries-main-heading">
//           Industries We Serve
//         </h2>

//         {/* Industry categories */}
//         <div className="industries-grid">
//           {industries.map((industry, index) => (
//             <motion.div
//               key={index}
//               className="industries-card industries-motion-card"
//               whileHover={hoverAnimation}
//               whileTap={tapAnimation}
//             >
//               <div className="industries-card-image-container">
//                 <img
//                   src={industry.image}
//                   alt={industry.name}
//                   className="industries-card-image"
//                 />
//                 <div className="industries-card-image-overlay"></div>
//               </div>

//               <div className="industries-card-content">
//                 <h3 className="industries-card-title">{industry.name}</h3>
//                 <ul className="industries-card-list">
//                   {industry.subcategories.map((subcategory, subIndex) => (
//                     <li key={subIndex} className="industries-card-list-item">
//                       {subcategory}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Industries;

import React, { useMemo, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import "./Industries.css";

// Memoized industry data to prevent recreation on every render
const INDUSTRIES_DATA = [
  {
    name: "Technology Industry",
    image:
      "https://res.cloudinary.com/dplqjwnoc/image/upload/v1732536717/1_eohu8p.jpg",
    subcategories: [
      "Software and IT Services",
      "Hardware Manufacturing",
      "Telecommunications",
      "Electronics",
      "Cloud Computing",
      "Artificial Intelligence (AI)",
      "Cybersecurity",
    ],
  },
  {
    name: "Finance and Insurance",
    image:
      "https://res.cloudinary.com/dplqjwnoc/image/upload/v1732536763/2_fx0iog.jpg",
    subcategories: [
      "Banking",
      "Investment Services",
      "Insurance",
      "Wealth Management",
      "Fintech (Financial Technology)",
    ],
  },
  {
    name: "Healthcare and Pharmaceuticals",
    image:
      "https://res.cloudinary.com/dplqjwnoc/image/upload/v1732536794/3_kgcnlf.jpg",
    subcategories: [
      "Hospitals and Clinics",
      "Biotechnology",
      "Pharmaceuticals",
      "Medical Devices",
      "Healthcare IT",
    ],
  },
  {
    name: "Manufacturing",
    image:
      "https://res.cloudinary.com/dplqjwnoc/image/upload/v1732536821/4_o6dlob.jpg",
    subcategories: [
      "Automotive Manufacturing",
      "Aerospace",
      "Electronics Manufacturing",
      "Machinery and Equipment",
      "Chemical Manufacturing",
    ],
  },
  {
    name: "Energy and Utilities",
    image:
      "https://res.cloudinary.com/dplqjwnoc/image/upload/v1732536844/5_swhlwx.jpg",
    subcategories: [
      "Oil & Gas",
      "Renewable Energy (solar, wind, hydro)",
      "Electricity",
      "Water Utilities",
      "Nuclear Energy",
    ],
  },
  {
    name: "Retail and Consumer Goods",
    image:
      "https://res.cloudinary.com/dplqjwnoc/image/upload/v1732536872/6_k9a7ev.jpg",
    subcategories: [
      "E-commerce",
      "Fashion & Apparel",
      "Consumer Electronics",
      "Food & Beverage",
      "Home Goods",
    ],
  },
  {
    name: "Agriculture and Food Production",
    image:
      "https://res.cloudinary.com/dplqjwnoc/image/upload/v1732536899/7_ptvkev.jpg",
    subcategories: [
      "Farming",
      "Agribusiness",
      "Food Processing",
      "Fisheries",
      "Forestry",
    ],
  },
  {
    name: "Construction and Real Estate",
    image:
      "https://res.cloudinary.com/dplqjwnoc/image/upload/v1732536925/8_o4esnz.jpg",
    subcategories: [
      "Residential and Commercial Construction",
      "Property Development",
      "Real Estate Services",
      "Architecture and Engineering",
    ],
  },
  {
    name: "Transportation and Logistics",
    image:
      "https://res.cloudinary.com/dplqjwnoc/image/upload/v1732536950/9_faoxfd.jpg",
    subcategories: [
      "Airlines",
      "Shipping and Freight",
      "Railroads",
      "Trucking",
      "Supply Chain Management",
    ],
  },
  {
    name: "Entertainment and Media",
    image:
      "https://res.cloudinary.com/dplqjwnoc/image/upload/v1732536981/10_mehyla.jpg",
    subcategories: [
      "Film and Television",
      "Music Industry",
      "Gaming",
      "Publishing",
      "Advertising and Public Relations",
    ],
  },
  {
    name: "Tourism and Hospitality",
    image:
      "https://res.cloudinary.com/dplqjwnoc/image/upload/v1732537002/11_h8jgui.jpg",
    subcategories: [
      "Hotels and Resorts",
      "Travel Agencies",
      "Restaurants",
      "Cruise Lines",
    ],
  },
  {
    name: "Education",
    image:
      "https://res.cloudinary.com/dplqjwnoc/image/upload/v1732537028/12_yp59g5.jpg",
    subcategories: [
      "K-12 Schools",
      "Higher Education",
      "EdTech (Educational Technology)",
      "Corporate Training",
    ],
  },
  {
    name: "Financial Services",
    image:
      "https://res.cloudinary.com/dplqjwnoc/image/upload/v1732537054/13_fpzm0n.jpg",
    subcategories: [
      "Asset Management",
      "Credit Card Services",
      "Mortgages & Loans",
      "Stock Exchanges",
    ],
  },
];

const Industries = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());

  // Memoized animation variants to prevent recreation
  const animationVariants = useMemo(
    () => ({
      hoverAnimation: {
        scale: 1.05,
        transition: { duration: 0.2 },
      },
      tapAnimation: {
        scale: 0.95,
        transition: { duration: 0.1 },
      },
      cardInitial: { opacity: 0, y: 20 },
      cardAnimate: { opacity: 1, y: 0 },
      cardTransition: { duration: 0.4 },
    }),
    []
  );

  // Memoized structured data
  const structuredData = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Industries We Serve - DB4Cloud Technologies",
      description:
        "Industry-specific technology solutions across multiple sectors",
      provider: {
        "@type": "Organization",
        name: "DB4Cloud Technologies",
        url: "https://db4cloud.in",
      },
      offers: {
        "@type": "AggregateOffer",
        itemListElement: INDUSTRIES_DATA.slice(0, 4).map((industry) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: `${industry.name} Solutions`,
            description: industry.subcategories.join(", "),
          },
        })),
      },
    }),
    []
  );

  useEffect(() => {
    // Use Intersection Observer for better performance
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -10% 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cardIndex = parseInt(entry.target.dataset.cardIndex);
          if (!isNaN(cardIndex)) {
            setVisibleCards((prev) => new Set([...prev, cardIndex]));
          }
        }
      });
    }, observerOptions);

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const industryCards = document.querySelectorAll(".industries-card");
      industryCards.forEach((card, index) => {
        card.dataset.cardIndex = index;
        observer.observe(card);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  // Render industry card directly in component to avoid memoization issues
  const renderIndustryCard = (industry, index) => {
    const isVisible = visibleCards.has(index);

    return (
      <motion.article
        key={`industry-${index}`}
        className="industries-card industries-motion-card"
        whileHover={animationVariants.hoverAnimation}
        whileTap={animationVariants.tapAnimation}
        initial={animationVariants.cardInitial}
        animate={
          isVisible
            ? animationVariants.cardAnimate
            : animationVariants.cardInitial
        }
        transition={{
          ...animationVariants.cardTransition,
          delay: index * 0.05,
        }}
        role="article"
        aria-labelledby={`industry-title-${index}`}
      >
        <div className="industries-card-image-container">
          <img
            src={industry.image}
            alt={`${industry.name} industry solutions`}
            className="industries-card-image"
            loading={index < 4 ? "eager" : "lazy"}
            decoding="async"
            width="300"
            height="200"
          />
          <div className="industries-card-image-overlay"></div>
        </div>

        <div className="industries-card-content">
          <h3 id={`industry-title-${index}`} className="industries-card-title">
            {industry.name}
          </h3>
          <ul className="industries-card-list" role="list">
            {industry.subcategories.map((subcategory, subIndex) => (
              <li
                key={`${subcategory}-${subIndex}`}
                className="industries-card-list-item"
                role="listitem"
              >
                {subcategory}
              </li>
            ))}
          </ul>
        </div>
      </motion.article>
    );
  };

  return (
    <div className="industries-container">
      <Helmet>
        {/* Critical meta tags first */}
        <title>
          Industries We Serve | DB4Cloud - Technology Solutions Across Sectors
        </title>
        <meta
          name="description"
          content="DB4Cloud delivers specialized technology solutions across multiple industries including Finance, Healthcare, Manufacturing, Retail, Technology, Energy, and more. Transform your industry-specific challenges into opportunities."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://db4cloud.in/industries" />

        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/fonts/main-font.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="//res.cloudinary.com" />
        <link rel="preconnect" href="https://res.cloudinary.com" />

        {/* Preload first few critical images */}
        <link
          rel="preload"
          href="https://res.cloudinary.com/dplqjwnoc/image/upload/v1732536717/1_eohu8p.jpg"
          as="image"
        />
        <link
          rel="preload"
          href="https://res.cloudinary.com/dplqjwnoc/image/upload/v1732536763/2_fx0iog.jpg"
          as="image"
        />

        {/* Other meta tags */}
        <meta
          name="keywords"
          content="DB4Cloud industries, technology solutions, finance tech, healthcare IT, manufacturing technology, retail solutions, energy sector IT, education technology, entertainment solutions"
        />
        <meta name="author" content="DB4Cloud" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="generator" content="React" />

        {/* Optimized Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="DB4Cloud Technologies" />
        <meta
          property="og:title"
          content="Industry Solutions - DB4Cloud Technologies"
        />
        <meta
          property="og:description"
          content="Discover how DB4Cloud's technology solutions are transforming various industries. From Finance to Healthcare, Manufacturing to Retail - we deliver industry-specific excellence."
        />
        <meta property="og:url" content="https://db4cloud.in/industries" />
        <meta
          property="og:image"
          content="https://db4cloud.in/images/industries-banner.webp"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@DB4Cloud" />
        <meta
          name="twitter:title"
          content="Industry-Specific Technology Solutions | DB4Cloud"
        />
        <meta
          name="twitter:description"
          content="Expert technology solutions tailored for Finance, Healthcare, Manufacturing, Retail, Energy, and more. Transform your industry with DB4Cloud."
        />
        <meta
          name="twitter:image"
          content="https://db4cloud.in/images/industries-banner.webp"
        />

        {/* Optimized Schema.org Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="industries-main-container">
        <motion.h1
          className="industries-main-heading"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Industries We Serve
        </motion.h1>

        {/* Industry categories */}
        <section
          className="industries-grid"
          aria-labelledby="industries-heading"
        >
          <h2 id="industries-heading" className="sr-only">
            Industry Solutions
          </h2>
          {INDUSTRIES_DATA.map((industry, index) =>
            renderIndustryCard(industry, index)
          )}
        </section>
      </div>
    </div>
  );
};

export default Industries;
