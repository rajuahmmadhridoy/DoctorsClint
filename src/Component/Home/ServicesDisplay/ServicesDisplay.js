import React from "react";
import { Col } from "react-bootstrap";
import "./ServicesDisplay.scss";
const ServicesDisplay = (props) => {
  const { title, description, icon } = props.data;
  return (
    <Col>
      <div className="servicesDisContainer">
        <div className="serviceDisThumb">
          <img src={icon} alt="" />
        </div>
        <div className="servicesDisContent">
          <h5>{title}</h5>
          <p>{description}</p>
        </div>
      </div>
    </Col>
  );
};

export default ServicesDisplay;
