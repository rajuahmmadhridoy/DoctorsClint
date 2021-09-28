import React from "react";
import "./Doctors.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col } from "react-bootstrap";
const Doctors = (props) => {
  const { name, img, icon, number } = props.data;
  return (
    <Col md={4}>
      <div className="doctorsContainer">
        <div className="doctorsThumb">
          <img style={{ width: "400px" }} src={img} alt="" />
        </div>
        <div className="doctorsContent">
          <h5>{name}</h5>
          <p>
            <FontAwesomeIcon icon={icon} />
            <span>{number}</span>
          </p>
        </div>
      </div>
    </Col>
  );
};

export default Doctors;