import React from "react";
import { Card } from "react-bootstrap";
import "./CategaryCard.scss";

const CategaryCard = ({ children, category, img, categoryDesign }) => {
  let className = categoryDesign ? "categoryDesign" : "null";

  return (
    <>
      <Card className={`${className}`}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{category}</Card.Title>
          <Card.Text>{children}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CategaryCard;
