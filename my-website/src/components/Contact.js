import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import Map from "./Map"; // Importing Map component

const Contact = () => {
  const [result, setResult] = useState(""); // State to hold form submission result message

  useEffect(() => {
    gsap.fromTo(
      ".contact-form",
      { scale: 0 },
      { scale: 1, duration: 1, ease: "elastic.out(1, 0.5)" }
    );
    gsap.fromTo(
      ".contact-map",
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1, ease: "power2.out", delay: 0.5 }
    );
  }, []);

  // Framer Motion Variants for button hover and tap
  const buttonVariant = {
    hover: { scale: 1.1, boxShadow: "0px 0px 8px rgba(255, 215, 0, 0.7)" },
    tap: { scale: 0.95 },
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    // Create FormData from the form
    const formData = new FormData(event.target);
    formData.append("access_key", "af96408c-08c5-4528-a729-9f5dbabad455");

    // Send form data to Web3Forms API
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset(); // Reset form after successful submission
    } else {
      console.log("Error", data);
      setResult(data.message); // Display error message
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-900 via-black to-black text-gray-100">
      {/* Container with adjusted padding and max width */}
      <div className="container mx-auto pt-32 px-4 max-w-4xl">
        {/* Heading */}
        <motion.h1
          className="text-2xl sm:text-3xl font-bold text-yellow-300 mb-6 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          Contact Us
        </motion.h1>

        {/* Content Section with Flex Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-6 lg:gap-12">
          {/* Form Section */}
          <motion.form
            className="contact-form bg-gray-900 p-6 rounded-lg shadow-lg w-full lg:w-[45%] space-y-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            onSubmit={onSubmit} // Attach onSubmit handler
            style={{ maxWidth: "500px", margin: "0 auto" }} // Center form with max width
          >
            <motion.input
              type="text"
              placeholder="Name"
              name="name"
              required
              className="border rounded-md p-2 w-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              whileFocus={{ scale: 1.05 }}
            />
            <motion.input
              type="email"
              placeholder="Email@example.com"
              name="email"
              required
              className="border rounded-md p-2 w-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              whileFocus={{ scale: 1.05 }}
            />
            <motion.textarea
              placeholder="Your Message"
              name="message"
              required
              className="border rounded-md p-2 w-full h-24 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              whileFocus={{ scale: 1.05 }}
            ></motion.textarea>
            <motion.button
              type="submit"
              className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition-all duration-300"
              variants={buttonVariant}
              whileHover="hover"
              whileTap="tap"
            >
              Submit
            </motion.button>
          </motion.form>

          {/* Map Section */}
          <motion.div
            className="contact-map w-full lg:w-[55%] h-[400px] mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{
              maxWidth: "70vw", // Set map width to 70vw
              maxHeight: "70vh", // Set map height to 70vh
              marginLeft: "0", // Align map to the left side
              marginRight: "0", // Remove any right margin
              margin: "0 auto", // Center map vertically and horizontally
            }}
          >
            <Map /> {/* Using Map component here */}
          </motion.div>
        </div>

        {/* Result Message */}
        <motion.span
          className="text-gray-300 mt-4 text-center text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {result} {/* Displaying the form submission result */}
        </motion.span>

        {/* Footer Animation */}
        <motion.p
          className="text-gray-400 mt-8 text-center text-sm"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          Reach out to us or find us on the map!
        </motion.p>
      </div>
    </div>
  );
};

export default Contact;
