import React from "react";
import { Card } from "react-bootstrap";
import './Blog.css'

const BlogCard = (props) => {
    let {imgSrc, text, title}=props.data;
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={imgSrc} />
        <Card.Body>
        <Card.Title>{title}</Card.Title>
          <Card.Text>
          {text}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BlogCard;
