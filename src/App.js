import React from "react";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

import "./App.css";

import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";


function App() {
    return (
    <Router>

        <div>
            <div className="navbar">
                <div>Sami Byers's Portfolio</div>
                <div className="navlinks">
                    <Link to="/">About Me</Link>
                    <Link to="/portfolio">Portfolio</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/resume">Resume</Link>
                </div>
            </div>
            
            
            
            <Routes>
                <Route path="/" element={<AboutMe/>} />
                
                <Route path="/portfolio" element={<Portfolio/>} />
                
                <Route path="/contact" element={<Contact/>} />
                
                <Route path="/resume" element={<Resume/>} />
                
            </Routes>
            
            <Footer />
        
        </div>
    </Router>
    );
  }
  
  export default App;
