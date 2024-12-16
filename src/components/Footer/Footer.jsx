import React from "react";
import "./Footer.css";
import Verified from "../../../public/not-verified.png";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Contact Section */}
      <div className="contact-section">
        <div className="contact-box">
          <div className="contact-button">Customer support1 | support2</div>
          <div className="contact-button">WhatsApp 3 | WhatsApp 4</div>
        </div>
        <div className="contact-button"></div>
        <div className="contact-box contact-box2">
        <div className="contact-button">Skype</div>
        <div className="contact-button">Email</div>
        <div className="contact-button">skyexchindia</div>
        </div>
      </div>

      {/* Disclaimer Section */}
      <div className="disclaimer-section">
        <div className="disclaimer-logo">
          <img src={Verified} alt="Logo" />
        </div>
        <div>
          <p>
            Skyexch.art is operated by Sky Infotech N.V. a limited liability
            company incorporated under the laws of Curacao with company
            Registration number 152377 with registered office at Abraham de
            Veerstraat 9 , Curacao P.O Box 3421 and is licensed and regulated by
            the Curacao authority as the regulatory body responsible holding a
            (Sub-license with License number 365/JAZ Sub-License GLH-
            OCCHKTW0707072017 granted on 6.07.2017).
          </p>
          <div className="disclaimer-contact">
            <div>
              <p>+351926917651 / +351926917279</p>
              <p>support@skyexch.art</p>
            </div>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="links-section">
        <a href="#">Privacy Policy</a> -<a href="#">Terms and Conditions</a> -
        <a href="#">Rules and Regulations</a> -<a href="#">KYC</a> -
        <a href="#">Responsible Gaming</a> -<a href="#">About Us</a> -
        <a href="#">Self-exclusion Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
