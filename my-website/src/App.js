import React from "react";
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
 
const App = () => {
  return (
    <Router>
      <div className="App">
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
        <Footer />
        </div>
      </div>
    </Router>
  );
};
 
export default App;