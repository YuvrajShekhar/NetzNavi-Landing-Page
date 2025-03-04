import React from "react";
import Logo from "../Assets/Logo3.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-logo-container">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="footer-impressum">
          <Link to="/copyright">Impressum</Link>
        </div>
        <div className="footer-section-columns">
          <span>info@netznavi.net</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
