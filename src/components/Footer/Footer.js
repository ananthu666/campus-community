import React from "react";
import "./footer.css";
import logo from "../../images/eeti-logo.png";
import logo1 from "../../images/logo-eeti.svg"
import {
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoInstagram,
} from "react-icons/io"


const Footer = () => {
  return (
    <div id="footer" className="text-center bg-dark ">
      
    <div className="f-container">
      <div className="copyright  container justify text-white py-lg-4">
        <div className="logo">
          
          <img
            className="f-logo"
            src={logo1}
          />
        </div>
        <ul className=" list-inline social-media" >
          <li className="list-inline-item social-media-item">
            <a href="">
              <IoLogoLinkedin size="1.7rem" color="grey" />
            </a>
          </li>
          
          <li className="list-inline-item social-media-item">
            <a href="">
              <IoLogoInstagram size="1.7rem" color="grey" />
            </a>
          </li>
          <li className="list-inline-item social-media-item">
            <a href="">
              <IoLogoTwitter size="1.7rem" color="grey" />
            </a>
          </li>
        </ul>
        <p className="text-muted mb-0"> © 2023 EETI Foundation-All Rights Reserved </p>
      </div>
    </div>
  </div>

  );
};

export default Footer;
