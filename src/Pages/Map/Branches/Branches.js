import React from "react";
import { Container } from "react-bootstrap";
import "./Branches.css";

const Branches = () => {
  return (
    <Container>
      <div data-aos="zoom-out-up">
        <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2631261.7342533898!2d89.14410530442737!3d24.38300352690877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1664218231993!5m2!1sen!2sbd"
        ></iframe>
      </div>
    </Container>
  );
};

export default Branches;
