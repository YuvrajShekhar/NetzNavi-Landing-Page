import React from "react";
import Logo from "../Assets/Logo3.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
      </div>
      <div className="footer-section-two">
        {/* <div className="footer-section-columns">
          <span>Qualität</span>
          <span>helfen</span>
          <span>Aktie</span>
          <span>Erfahrungsberichte</span>
        </div>
        <div className="footer-section-columns">
          <span>244-5333-7783</span>
          <span>hello@netznavi.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Geschäftsbedingungen</span>
          <span>Datenschutzrichtlinie</span>
        </div> */}
        <div className="footer-section-columns">
          <span>info@netznavi.net</span>
        </div>
      </div>
    </div>
    <div className="footer-impressum">
    <Link to="/copyright">Impressum</Link> 
      </div>
    </div>
  );
};

export default Footer;