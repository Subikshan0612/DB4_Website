import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = useState("");

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

  const buttonVariant = {
    hover: { scale: 1.1, boxShadow: "0px 0px 8px rgba(255, 215, 0, 0.7)" },
    tap: { scale: 0.95 },
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "af96408c-08c5-4528-a729-9f5dbabad455");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-900 via-black to-black text-gray-100">
      <div className="container mx-auto pt-32 px-4">
        <motion.h1
          className="text-2xl sm:text-3xl font-bold text-yellow-300 mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          Contact Us
        </motion.h1>

        <div className="flex flex-col lg:flex-row justify-center items-start gap-8 max-w-6xl mx-auto">
          {/* Form Section */}
          <motion.div
            className="contact-form w-full lg:w-[500px]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <form onSubmit={onSubmit} className="bg-gray-900 p-8 rounded-lg shadow-lg space-y-6">
              <motion.input
                type="text"
                placeholder="Name"
                name="name"
                required
                className="border rounded-md p-3 w-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                whileFocus={{ scale: 1.02 }}
              />
              <motion.input
                type="email"
                placeholder="Email@example.com"
                name="email"
                required
                className="border rounded-md p-3 w-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                whileFocus={{ scale: 1.02 }}
              />
              <motion.textarea
                placeholder="Your Message"
                name="message"
                required
                className="border rounded-md p-3 w-full h-32 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                whileFocus={{ scale: 1.02 }}
              ></motion.textarea>
              <motion.button
                type="submit"
                className="w-full bg-yellow-500 text-white px-6 py-3 rounded-md hover:bg-yellow-600 transition-all duration-300"
                variants={buttonVariant}
                whileHover="hover"
                whileTap="tap"
              >
                Submit
              </motion.button>
            </form>
            <motion.span className="block text-center mt-4 text-gray-300">
              {result}
            </motion.span>
          </motion.div>

          {/* Map Section */}
          <motion.div
            className="contact-map w-full lg:w-[500px] bg-gray-900 rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <iframe
              title="Db4 Cloud Technologies"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5883697443787!2d80.24189447698326!3d13.061852980073699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52664208764771%3A0x64f4d7900d3c8e3b!2sICICI%20Bank%20Nungambakkam%2C%20Chennai-Branch%20%26%20ATM!5e0!3m2!1sen!2sin!4v1732624324102!5m2!1sen!2sin"
              className="w-full h-[445px]"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
