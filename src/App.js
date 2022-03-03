import React from "react";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import 'bootstrap/dist/css/bootstrap.min.css';
import { SocialIcon } from 'react-social-icons';
import {BiMailSend} from "react-icons/bi";
import {BiPhone} from "react-icons/bi";

import "./App.css";

import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";


function App() {
    return (
    <Router>
            
        <div id="page-container">
                <div id="content-wrap">
                    <div className="navbar">
                        <div>Sami Byers's Portfolio</div>
                         <div className="navlinks">
                            <Link to="/">About Me</Link>
                            <Link to="/portfolio">Projects</Link>
                            {/* <Link to="/contact">Contact</Link> */}
                            <Link to="/resume">Resume</Link>
                        </div>
                    </div>
                
                
                    <Routes>
                        <Route path="/" element={<AboutMe/>} />
                        
                        <Route path="/portfolio" element={<Portfolio/>} />
                        
                        {/* <Route path="/contact" element={<Contact/>} /> */}
                        
                        <Route path="/resume" element={<Resume/>} />
                        
                    </Routes>
            
                </div>
        
            <footer id="footer">
                    <div className="iconDiv">
                        <a className="icon" href="tel:3603494582"><BiPhone /></a> 
                        <a className="icon" href="mailto:samtaylor.byers@gmail.com" target="_blank" rel="noreferrer"><BiMailSend /></a> 
                        <SocialIcon className="icons" url="https://github.com/samibyers" target="_blank" rel="noreferrer"/>
                        <SocialIcon className="icons" url="https://www.linkedin.com/in/sami-byers-4693b5134" target="_blank" rel="noreferrer"/>
                    </div>
            </footer>
        </div>
    </Router>
    );
  }
  
  export default App;
