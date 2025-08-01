import React, {useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Industries from "./components/Industries";
import Services from "./components/Services";
import Careers from "./components/Careers";
import Logo from "./components/Logo"; 
import Footer from "./components/Footer"; 
import './App.css'; 
import { useLocation } from "react-router-dom";

// Google Analytics configuration
const GA_MEASUREMENT_ID = 'G-499C6CBHWL';

// Google Analytics tracking component
const GoogleAnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page views with gtag
    if (window.gtag) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location.pathname, location.search]);

  return null;
};

// Facebook Pixel tracking component
const FacebookPixelTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.fbq) {
      window.fbq('track', 'PageView');
    }
  }, [location]);

  return null;
};
 
const App = () => {
  return (
    <Router>
      <GoogleAnalyticsTracker />
      <FacebookPixelTracker />
      <div className="App">
        {/* Add the logo outside the Navbar */}
         <Logo />
        <Navbar />
        <div className="App-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/services" element={<Services />} />
            <Route path="/careers" element={<Careers />} />
          </Routes>
        </div>
        <div className="App-footer">
        {/* Add Footer component */}
        <Footer />
        </div>
      </div>
    </Router>
  );
};
 
export default App;

