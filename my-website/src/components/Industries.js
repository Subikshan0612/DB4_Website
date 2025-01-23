import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

// Industry categories with respective images
const industries = [
  {
    name: "Technology Industry",
    image: "https://res.cloudinary.com/dplqjwnoc/image/upload/v1732536717/1_eohu8p.jpg",
    subcategories: [
      "Software and IT Services",
      "Hardware Manufacturing",
      "Telecommunications",
      "Electronics",
      "Cloud Computing",
      "Artificial Intelligence (AI)",
      "Cybersecurity"
    ]
  },
  {
    name: "Finance and Insurance",
    image: "https://res.cloudinary.com/dplqjwnoc/image/upload/v1732536763/2_fx0iog.jpg",
    subcategories: [
      "Banking",
      "Investment Services",
      "Insurance",
      "Wealth Management",
      "Fintech (Financial Technology)"
    ]
  },
  {
    name: "Healthcare and Pharmaceuticals",
    image: "https://res.cloudinary.com/dplqjwnoc/image/upload/v1732536794/3_kgcnlf.jpg",
    subcategories: [
      "Hospitals and Clinics",
      "Biotechnology",
      "Pharmaceuticals",
      "Medical Devices",
      "Healthcare IT"
    ]
  },
  {
    name: "Manufacturing",
    image: "https://res.cloudinary.com/dplqjwnoc/image/upload/v1732536821/4_o6dlob.jpg",
    subcategories: [
      "Automotive Manufacturing",
      "Aerospace",
      "Electronics Manufacturing",
      "Machinery and Equipment",
      "Chemical Manufacturing"
    ]
  },
  {
    name: "Energy and Utilities",
    image: "https://res.cloudinary.com/dplqjwnoc/image/upload/v1732536844/5_swhlwx.jpg",
    subcategories: [
      "Oil & Gas",
      "Renewable Energy (solar, wind, hydro)",
      "Electricity",
      "Water Utilities",
      "Nuclear Energy"
    ]
  },
  {
    name: "Retail and Consumer Goods",
    image: "https://res.cloudinary.com/dplqjwnoc/image/upload/v1732536872/6_k9a7ev.jpg",
    subcategories: [
      "E-commerce",
      "Fashion & Apparel",
      "Consumer Electronics",
      "Food & Beverage",
      "Home Goods"
    ]
  },
  {
    name: "Agriculture and Food Production",
    image: "https://res.cloudinary.com/dplqjwnoc/image/upload/v1732536899/7_ptvkev.jpg",
    subcategories: [
      "Farming",
      "Agribusiness",
      "Food Processing",
      "Fisheries",
      "Forestry"
    ]
  },
  {
    name: "Construction and Real Estate",
    image: "https://res.cloudinary.com/dplqjwnoc/image/upload/v1732536925/8_o4esnz.jpg",
    subcategories: [
      "Residential and Commercial Construction",
      "Property Development",
      "Real Estate Services",
      "Architecture and Engineering"
    ]
  },
  {
    name: "Transportation and Logistics",
    image: "https://res.cloudinary.com/dplqjwnoc/image/upload/v1732536950/9_faoxfd.jpg",
    subcategories: [
      "Airlines",
      "Shipping and Freight",
      "Railroads",
      "Trucking",
      "Supply Chain Management"
    ]
  },
  {
    name: "Entertainment and Media",
    image: "https://res.cloudinary.com/dplqjwnoc/image/upload/v1732536981/10_mehyla.jpg",
    subcategories: [
      "Film and Television",
      "Music Industry",
      "Gaming",
      "Publishing",
      "Advertising and Public Relations"
    ]
  },
  {
    name: "Tourism and Hospitality",
    image: "https://res.cloudinary.com/dplqjwnoc/image/upload/v1732537002/11_h8jgui.jpg",
    subcategories: [
      "Hotels and Resorts",
      "Travel Agencies",
      "Restaurants",
      "Cruise Lines"
    ]
  },
  {
    name: "Education",
    image: "https://res.cloudinary.com/dplqjwnoc/image/upload/v1732537028/12_yp59g5.jpg",
    subcategories: [
      "K-12 Schools",
      "Higher Education",
      "EdTech (Educational Technology)",
      "Corporate Training"
    ]
  },
  {
    name: "Financial Services",
    image: "https://res.cloudinary.com/dplqjwnoc/image/upload/v1732537054/13_fpzm0n.jpg",
    subcategories: [
      "Asset Management",
      "Credit Card Services",
      "Mortgages & Loans",
      "Stock Exchanges"
    ]
  }
];

const Industries = () => {
  // Motion animations for hover effects
  const hoverAnimation = {
    scale: 1.05,
    transition: { duration: 0.3 },
  };

  const tapAnimation = {
    scale: 0.95,
    transition: { duration: 0.2 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 via-black to-black text-gray-100 py-16 px-4 pt-32">

<Helmet>
  {/* Basic Meta Tags */}
  <title>Industries We Serve | DB4Cloud - Technology Solutions Across Sectors</title>
  <meta name="description" content="DB4Cloud delivers specialized technology solutions across multiple industries including Finance, Healthcare, Manufacturing, Retail, Technology, Energy, and more. Transform your industry-specific challenges into opportunities." />
  <meta name="keywords" content="DB4Cloud industries, technology solutions, finance tech, healthcare IT, manufacturing technology, retail solutions, energy sector IT, education technology, entertainment solutions" />
  <meta name="author" content="DB4Cloud" />
  <link rel="canonical" href="https://db4cloud.in/industries" />

  {/* Open Graph Meta Tags */}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="DB4Cloud Technologies" />
  <meta property="og:title" content="Industry Solutions - DB4Cloud Technologies" />
  <meta property="og:description" content="Discover how DB4Cloud's technology solutions are transforming various industries. From Finance to Healthcare, Manufacturing to Retail - we deliver industry-specific excellence." />
  <meta property="og:url" content="https://db4cloud.in/industries" />
  <meta property="og:image" content="https://db4cloud.in/images/industries-banner.jpg" />

  {/* Twitter Card Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@DB4Cloud" />
  <meta name="twitter:title" content="Industry-Specific Technology Solutions | DB4Cloud" />
  <meta name="twitter:description" content="Expert technology solutions tailored for Finance, Healthcare, Manufacturing, Retail, Energy, and more. Transform your industry with DB4Cloud." />
  <meta name="twitter:image" content="https://db4cloud.in/images/industries-banner.jpg" />

  {/* Additional Meta Tags */}
  <meta name="robots" content="index, follow" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="language" content="English" />
  <meta name="revisit-after" content="7 days" />
  <meta name="generator" content="React" />

  {/* Schema.org Industry Solutions Structured Data */}
  <script type="application/ld+json">
    {`
      {
        "@context": "http://schema.org",
        "@type": "WebPage",
        "name": "Industries We Serve - DB4Cloud Technologies",
        "description": "Industry-specific technology solutions across multiple sectors",
        "provider": {
          "@type": "Organization",
          "name": "DB4Cloud Technologies",
          "url": "https://db4cloud.in"
        },
        "offers": {
          "@type": "AggregateOffer",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Technology Industry Solutions",
                "description": "Software, IT Services, Cloud Computing, AI Solutions"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Finance and Insurance Solutions",
                "description": "Banking, Investment Services, Fintech Solutions"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Healthcare Solutions",
                "description": "Healthcare IT, Medical Systems, Pharmaceutical Technology"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Manufacturing Solutions",
                "description": "Industrial IoT, Automation, Supply Chain Technology"
              }
            }
          ]
        }
      }
    `}
  </script>
</Helmet>



      {/* pt-32 adds padding-top to push the content down */}
      <div className="container mx-auto">
        <h2 className="text-4xl font-semibold text-yellow-300 mb-12 text-center">
          Industries We Serve
        </h2>
        {/* Industry categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className="industry-card bg-gray-900 p-6 rounded-lg shadow-lg"
              whileHover={hoverAnimation}
              whileTap={tapAnimation}
            >
              <img
                src={industry.image}
                alt={industry.name}
                className="w-full h-40 object-cover rounded-t-lg mb-6"
              />
              <h3 className="text-2xl font-bold text-yellow-300 mb-4">{industry.name}</h3>
              <ul className="text-gray-200">
                {industry.subcategories.map((subcategory, subIndex) => (
                  <li key={subIndex} className="mb-2">{subcategory}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;
