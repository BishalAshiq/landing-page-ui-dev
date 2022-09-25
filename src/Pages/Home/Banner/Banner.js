import React from 'react';
import './Banner.css';
import Carousel from 'react-bootstrap/Carousel';
import b1 from '../../../images/B-1.jpg';
import b2 from '../../../images/B-2.jpg';
import b3 from '../../../images/B-3.jpg';
import Button from 'react-bootstrap/Button';

const Banner = () => {
    return (
       <div className='banner'>
         <Carousel fade>
        <Carousel.Item>
          <img
            className="banner-image"
            src={b1}
            alt="First slide"
          />
          <Carousel.Caption className='caption'>
            <h1>Modern elegance</h1>
            <p>Our most popular bifold. Perfect for thermal efficiency.</p>
            <Button variant="danger">Our Services</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="banner-image"
            src={b2}
            alt="Second slide"
          />
  
          <Carousel.Caption className='caption'>
          <h1>Modern elegance</h1>
            <p>Our most popular bifold. Perfect for thermal efficiency.</p>
            <Button variant="danger">Our Services</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="banner-image"
            src={b3}
            alt="Third slide"
          />
  
          <Carousel.Caption className='caption'>
          <h1>Modern elegance</h1>
            <p>Our most popular bifold. Perfect for thermal efficiency.</p>
            <Button variant="danger">Our Services</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
       </div>
    );
};

export default Banner;