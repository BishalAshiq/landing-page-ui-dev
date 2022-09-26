import React from "react";
import "./Footer.css";
import { Button } from "react-bootstrap";

const Footer = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="3000" className="footer">
      <div>
        <h2 className="f-h1">LET’S CONTACT</h2>
        <p className="f-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut
          <br /> labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation.
        </p>
      </div>
      <Button variant="danger">CONTACT US</Button>
    </div>
  );
};

export default Footer;
