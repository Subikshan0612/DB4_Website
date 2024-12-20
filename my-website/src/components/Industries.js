import React from "react";
import { motion } from "framer-motion";

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
