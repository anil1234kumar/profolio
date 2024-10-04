import React from "react";
import { Card, Col } from "react-bootstrap";

const ServiceCard = () => {
  return (
    <>
      <Col lg={4}>
        <div div className="serviceCard">
          <div className="serviceCard_img">
            <img
              src="https://images.pexels.com/photos/417083/pexels-photo-417083.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="nature-pic-CSSnippets"
            />
          </div>
          <div className="serviceCard_details">
            <span className="serviceCard_title">Title</span>
            <span className="serviceCard_subtitle">
              Hover over this card to see the effect.
            </span>
            <p className="serviceCard_description">
              Lorem ipsum dolor, sit amet expedita exercitationem recusandae aut
              dolor tempora aperiam itaque possimus at, cupiditate earum, quae
              repudiandae aspernatur.
            </p>
          </div>
        </div>
      </Col>
    </>
  );
};

export default ServiceCard;
