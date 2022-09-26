import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import about1 from "../../../images/About-1.png";
import about2 from "../../../images/About-2.png";
import about3 from "../../../images/About-3.png";
import about4 from "../../../images/About-4.png";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <Container>
        <h1>About US</h1>
        <p className="p1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut
          <br />
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation.
        </p>
        <Row>
          <Col xs={6}>
            <Carousel slide={true}>
              <Carousel.Item>
                <img className="imgAbout" src={about1} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="imgAbout" src={about2} alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="imgAbout" src={about3} alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="imgAbout" src={about4} alt="Third slide" />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col xs={6} className="about-text">
            <h5>
              Consectetur adipiscing elit, sed <br />
              do eiusmod tempor incididunt ut
              <br />
              labore et dolore magna aliqua.
            </h5>
            <p className="p2">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
              sed do eiusmod tempor <br /> incididunt ut labore et dolore magna
              aliqua.
              <br /> Ut enim ad minim veniam, quis nostrud <br /> exercitation.
            </p>
            <Button className="button" variant="dark">
              Learn More
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
