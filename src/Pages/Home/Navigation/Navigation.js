import React from "react";
import "./Navigation.css";
import imgNav from "../../../images/clay-leconey-XSONkHbAHkU-unsplash.jpg";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="first-nav">
        <div className="h5">
          <h5
          data-aos="zoom-out-right"
            style={{
              marginLeft: 20,
              borderRight: "1px solid gray",
              borderLeft: "1px solid gray",
              padding: 10,
              fontSize: 13,
            }}
          >
            Call us: 783 367 2678
          </h5>
        </div>
        <div style={{ display: "flex" }}>
          <h6
           data-aos="zoom-out-left"
            className="h6"
            style={{
              marginRight: 20,
              borderRight: "1px solid gray",
              borderLeft: "1px solid gray",
              padding: 10,
              fontSize: 13,
            }}
          >
            Free brochure
          </h6>
          <h6
            data-aos="zoom-out-left"
            className="h6"
            style={{
              marginRight: 50,
              borderRight: "1px solid gray",
              borderLeft: "1px solid gray",
              padding: 10,
              fontSize: 13,
            }}
          >
            Help centre
          </h6>
        </div>
      </div>
      <div className="sec-nav">
        <div 
         data-aos="fade-right"
         data-aos-offset="300"
         data-aos-easing="ease-in-sine"
        className="logo">
          <a href="/">LOGO</a>
        </div>
        <ul className="nav-link">
          <li>
            {" "}
            <a href="/">Home</a>{" "}
          </li>
          <li>
            {" "}
            <a href="/">About</a>{" "}
          </li>
          <li>
            <a href="/">Products</a>
            <div className="mega-menu">
              <div className="content">
                <div className="row">
                  <header>By Size</header>
                  <ul className="mega-links">
                    <li>
                      <a href="/">Small Bifolds</a>
                    </li>
                    <li>
                      <a href="/">Medium Bifolds</a>
                    </li>
                    <li>
                      <a href="/">Large Bifolds</a>
                    </li>
                    <li>
                      <a href="/">All Stock Bifolds</a>
                    </li>
                  </ul>
                </div>
                <div className="row">
                  <header>By Types</header>
                  <ul className="mega-links">
                    <li>
                      <a href="/">Stock Bifolds</a>
                    </li>
                    <li>
                      <a href="/">Corner Bifolds</a>
                    </li>
                    <li>
                      <a href="/">Bespoke Bifolds</a>
                    </li>
                  </ul>
                </div>
                <div className="row">
                  <header>By Panel</header>
                  <ul className="mega-links">
                    <li>
                      <a href="/">2 Panel Bifolds</a>
                    </li>
                    <li>
                      <a href="/">3 Panel Bifolds</a>
                    </li>
                    <li>
                      <a href="/">4 Panel Bifolds</a>
                    </li>
                    <li>
                      <a href="/">5 Panel Bifolds</a>
                    </li>
                    <li>
                      <a href="/">6 Panel Bifolds</a>
                    </li>
                    <li>
                      <a href="/">7 Panel Bifolds</a>
                    </li>
                  </ul>
                </div>
                <div
                  className="row"
                  id="img-nav"
                  style={{
                    backgroundImage: `url(${imgNav})`,
                    backgroundRepeat: "no-repeat",
                    marginLeft: -40,
                  }}
                >
                  <h3>Bespoke Bifolds</h3>
                  <p
                    style={{
                      lineHeight: "20px",
                    }}
                  >
                    Our most popular bifold. Perfect for thermal efficiency.
                  </p>
                  <a style={{ borderBottom: "1px solid black" }} href="/">
                    Create your own
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a href="/">Projects</a>
            <ul className="drop-menu">
              <li>
                <a href="/">Project 1</a>
              </li>
              <li>
                <a href="/">Project 2</a>
              </li>
              <li>
                <a href="/">Project 3</a>
              </li>
              <li>
                <a href="/">Project 4</a>
              </li>
            </ul>
          </li>
          <li>
            {" "}
            <a href="/">Sustainability</a>{" "}
          </li>
          <li>
            {" "}
            <a href="/">More</a>{" "}
          </li>
        </ul>

        <div>
          <h5 style={{ color: "#fff" }}>Search</h5>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
