import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css"; // Import the CSS file
import eisenlogo from '../logos/eisenlogo.jpg'
export const Footer = (props) => {
  
  return (
    <div>
      <div id='footer'>
      


    <footer className="footer">
      <div className="footer-container">
        
        {/* Logo & Description */}
        <div className="footer-column">
          <div className="footer-logo">
            <img src={eisenlogo} alt="eisenlogo.jpg" />
            <span className="brand-name">EISEN GROUP</span>
          </div>
          <p className="description">
           SURVEY NO: 25/11, NEAR PRABHAT PRESS,NARHE, BEHIND DHIRAJ COMPANY,

TRIMURTI COMPANY LANE, NARHE

PUNE-411041
          </p>
          <p className="description">
           S-31, MIDC, CHIKALTHANA, CHATRAPATI SAMBHAJI NAGAR 
          </p>
          <p className="contact-number">MR.DIGVIJAY DEEPAK JOSHI

+918551-031100</p>
<p className="contact-number">MR.SHRIPAD DESHPANDE

+9195955-95097</p>
        </div>

        {/* Resources */}
        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li><a href="#">Design Development</a></li>
            <li><a href="#">Our Products</a></li>
            <li><a href="#">User Flow</a></li>
            <li><a href="#">User Strategy</a></li>
          </ul>
        </div>

        {/* Company */}
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About Eisen Group</a></li>
            <li><a href="#">Contact & Support</a></li>
            <li><a href="#">Success History</a></li>
            <li><a href="#">Setting & Privacy</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Premium Support</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Know Our Team</a></li>
            <li><a href="#">Download App</a></li>
          </ul>
        </div>

        {/* Social */}
        <div className="footer-column">
          <h4>Follow Us On</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer"><FaYoutube /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
          </div>
       
        </div>
      </div>
    </footer>
    <div className='container font-[20] text-center'>
          <p>
            &copy;  Design by {'Ajay Kulkarni '}
            <a href='' rel='nofollow'>
            Copyright © 1992 - 2025 EISEN GROUP®. All rights reserved.
            </a>
          </p>
        </div>
  
      </div>
    </div>
  )
}
