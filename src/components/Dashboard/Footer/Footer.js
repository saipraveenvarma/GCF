import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-sections">
        <div className="footer-section">
          <h3>Links for all DSS products</h3>
          <p>
            Health DSS
            <br />
            Agriculture DSS
            <br />
            Ocean DSS
            <br />
            CDIS
          </p>
        </div>
        <div className="vertical-line"></div> {/* Thin line between sections */}
        <div className="footer-section">
          <h3>Response</h3>
          <p>
            Our team works with communities to provide rapid, life-saving
            interventions when disaster strikes, ensuring quick relief.
          </p>
        </div>
        <div className="vertical-line"></div> {/* Thin line between sections */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>
            Regional Integrated Multi-Hazard Early Warning System for Africa and
            Asia (RIMES) 2nd Floor, <br />
            Outreach Building Asian Institute of Technology Campus 58 Moo 9
            Paholyothin Road, <br />
            Klong Nueng Klong Luang, <br />
            Pathumthani 12120 Thailand <br />
            Tel: +66 25165900 to 01
            <br />
            Email:sahfhydromet@gmail.com <br />
            Website: www.rimes.int
          </p>
        </div>
      </div>
      <img src="./rimes-logo.svg" alt="RIMES Logo" />
            <div className="social-media">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube />
        </a>
      </div>

      <div className="footer-text">
        <p>
          © 2024 Disaster Risk Reduction and Decision Support System. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
