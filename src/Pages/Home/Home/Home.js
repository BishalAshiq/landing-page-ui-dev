import React from "react";
import Branches from "../../Map/Branches/Branches";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import Navigation from "../Navigation/Navigation";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <About></About>
      <Blog></Blog>
      <Branches></Branches>
    </div>
  );
};

export default Home;
