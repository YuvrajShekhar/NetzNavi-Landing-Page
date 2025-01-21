import React from "react";
import Logo from "../Assets/Logo3.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
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
        </div>
      </div>
    </div>
  );
};

export default Footer;