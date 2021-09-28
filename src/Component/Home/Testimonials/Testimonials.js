import React from "react";
import { Col } from "react-bootstrap";
import "./Testimonials.scss";
const Testimonials = (props) => {
  const { description, img, name, address } = props.data;
  return (
    <Col md={4}>
      <div className="testimonialsContainer">
        <p>{description}</p>
        <div className="d-flex testimonialPersonData">
          <div className="testimonialPersonThumb">
            <img src={img} alt="" />
          </div>
          <div className="testimonialPersonContractInfo">
            <h5>{name}</h5>
            <p>{address}</p>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default Testimonials;
