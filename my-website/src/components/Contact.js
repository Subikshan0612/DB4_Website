import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { FaBuilding, FaMapMarkerAlt, FaPhone, FaEnvelope, FaComments } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
  const countryCodes = [
    { code: '+91', country: 'India' },
    { code: '+1', country: 'USA/Canada' },
    { code: '+44', country: 'UK' },
    { code: '+61', country: 'Australia' },
    { code: '+65', country: 'Singapore' },
    { code: '+971', country: 'UAE' },    
    { code: '+81', country: 'Japan' },
    { code: '+353', country: 'Ierland' },
    { code: '+64', country: 'New Zealand' },
  ];

  const phoneRegexPatterns = {
    '+91': /^(\+91)?[6-9]\d{9}$/, // India
    '+1': /^(\+1)?[2-9]\d{9}$/, // USA/Canada
    '+44': /^(\+44)?[1-9]\d{9}$/, // UK
    '+61': /^(\+61)?[4]\d{8}$/, // Australia
    '+65': /^(\+65)?[689]\d{7}$/, // Singapore
    '+971': /^(\+971)?[0-9]\d{8}$/, // UAE
    '+81': /^(\+81)?[0-9]\d{9}$/, // Japan
    '+353': /^(\+353)?[0-9]\d{8}$/, // Ireland
    '+64': /^(\+64)?[0-9]\d{7}$/, // New Zealand
  };

  const validationSchema = Yup.object({
    countryCode: Yup.string().required('Country code is required'),
    phone: Yup.string()
      .required('Phone number is required')
      .test('phone', 'Invalid phone number for selected country', function(value) {
        const countryCode = this.parent.countryCode;
        const pattern = phoneRegexPatterns[countryCode];
        if (!pattern) return true; // If pattern not found, skip validation
        return pattern.test(value);
      }),
    name: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    message: Yup.string()
      .min(10, 'Message must be at least 10 characters')
      .required('Message is required'),
  });
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

    const onSubmit = async (values, { setSubmitting, resetForm }) => {
      setResult("Sending....");

      const formData = new FormData();
      Object.keys(values).forEach(key => formData.append(key, values[key]));
      formData.append("access_key", "af96408c-08c5-4528-a729-9f5dbabad455");

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        });

        const data = await response.json();

        if (data.success) {
          setResult("Form Submitted Successfully");
          resetForm();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setResult("An error occurred while submitting the form");
      }

      setSubmitting(false);
    };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-900 via-black to-black text-gray-100">
      <div className="container mx-auto pt-32 px-4">
        <motion.h1
          className="text-4xl font-bold text-yellow-300 mb-16 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          Contact Us
        </motion.h1>

        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-10 max-w-7xl mx-auto">
          {/* Form Section */}
          <motion.div
            className="contact-form w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
          >
            <Formik
              initialValues={{
                name: '',
                phone: '',
                email: '',
                message: ''
              }}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="bg-gray-900 p-10 rounded-xl shadow-2xl space-y-8 h-full flex flex-col">
                  <div className="space-y-2">
                    <Field
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="border rounded-md p-4 w-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                    />
                    <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
                  </div>
                    <div className="space-y-2">
                      <div className="relative flex items-center">
                        <Field
                          as="select"
                          name="countryCode"
                          className="absolute left-0 w-24 h-full pl-3 pr-2 border-r bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-300 rounded-l-md"
                        >
                          {countryCodes.map((country) => (
                            <option key={country.code} value={country.code}>
                              {country.code}
                            </option>
                          ))}
                        </Field>
                        <Field
                          type="text"
                          name="phone"
                          placeholder="Phone Number"
                          className="border rounded-md p-4 w-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300 pl-24"
                        />
                      </div>
                      <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
                    </div>
                  <div className="space-y-2">
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email@example.com"
                      className="border rounded-md p-4 w-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                  </div>

                  <div className="space-y-2">
                    <Field
                      as="textarea"
                      name="message"
                      placeholder="Your Message"
                      className="border rounded-md p-4 w-full h-48 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                    />
                    <ErrorMessage name="message" component="div" className="text-red-500 text-sm" />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-yellow-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition-all duration-300 mt-auto shadow-lg disabled:opacity-50"
                    variants={buttonVariant}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </motion.button>
                </Form>
              )}
            </Formik>
          </motion.div>

          {/* Location Section */}          <motion.div 
            className="contact-container w-full lg:w-1/2 p-10 bg-gray-900 rounded-xl shadow-2xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div className="office-section mb-10">
              <motion.h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <FaBuilding className="mr-3 text-yellow-400" />
                Corporate Office
              </motion.h2>
              <motion.ul 
                className="space-y-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <li className="office-card p-6 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all duration-300">
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="text-2xl text-yellow-400 mr-4" />
                    <span className="text-xl text-gray-200">                      
                      Chittor, Andhra Pradesh, India
                    </span>
                  </div>
                </li>
              </motion.ul>
            </motion.div>

            <motion.div className="office-section">
              <motion.h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <FaLocationDot className="mr-3 text-yellow-400" />
                Regional Offices
              </motion.h2>
              <motion.ul 
                className="space-y-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <li className="office-card p-6 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all duration-300">
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="text-2xl text-yellow-400 mr-4" />
                    <span className="text-xl text-gray-200">Chennai, Tamil Nadu, India</span>
                  </div>
                </li>
                <li className="office-card p-6 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all duration-300">
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="text-2xl text-yellow-400 mr-4" />
                    <span className="text-xl text-gray-200">Hyderabad, Telangana, India</span>
                  </div>
                </li>
                <li className="office-card p-6 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all duration-300">
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="text-2xl text-yellow-500 mr-4" />
                    <span className="text-xl text-gray-200">Trivandrum, Kerala, India</span>
                  </div>
                </li>
              </motion.ul>
            </motion.div>
          </motion.div>
        </div>

        {/* Additional Features */}
        <motion.div 
          className="mt-16 flex justify-center items-center w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          whileHover={{ scale: 1.02 }}
          
        >          
          <div className="bg-gray-900 p-8 rounded-xl shadow-xl">
            <div className="text-blue-400 text-4xl mb-4"
            textalign="center">
            
              <FaEnvelope className="text-2xl text-yellow-500 mr-4" />
            
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Email Support</h3>
            <p className="text-gray-300">Contact : contact@db4cloud.in </p>
          </div>        
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
