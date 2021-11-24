import React from "react";
import { SocialIcon } from 'react-social-icons';
import "../Footer.css";
import {BiMailSend} from "react-icons/bi";
import {BiPhone} from "react-icons/bi";

function Footer() {
    return (
    // <!--Contact me section-->
         <div className="footer">
              <a href="tel:3603494582"><BiPhone className="icon"/></a> 
              <a href="mailto:samtaylor.byers@gmail.com" target="_blank"><BiMailSend className="icon"/></a> 
             <SocialIcon className="icon" url="https://github.com/samibyers" target="_blank"/>
             <SocialIcon className="icon" url="https://www.linkedin.com/in/sami-byers-4693b5134" target="_blank"/>
        </div>
    
    );
}

export default Footer;

