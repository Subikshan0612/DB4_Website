import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Industries from "./components/Industries";
import Services from "./components/Services";
import Careers from "./components/Careers";
import Logo from "./components/Logo"; // Import the Logo component
import Footer from "./components/Footer"; // Import Footer component
import './App.css'; // Import the updated CSS

const App = () => {
  return (
    <Router>
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
        ` zxcvbnm,./`
        <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
