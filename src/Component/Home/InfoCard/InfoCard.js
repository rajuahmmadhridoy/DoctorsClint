import React from "react";
import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './InfoCard.scss'
const InfoCard = (props) => {
  const { title, description, icon, background } = props.data;
  return (
    <Col md={4}>
      <div className={`d-flex align-items-center justify-content-center infoCardCon info-${background}`}>
        <div>
        <FontAwesomeIcon icon={icon} />
        </div>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </Col>
  );
};

export default InfoCard;
