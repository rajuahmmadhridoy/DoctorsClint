import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import imagef from "../../../images/fetureImg.png";
import "./FeaturedServices.scss";
const FeaturedServices = () => {
  return (
    <Container className="featuredServicesCon">
      <Row className="d-flex align-items-center">
        <Col md={6}>
          <img style={{ width: "100%", height: "410px" }} src={imagef} alt="" />
        </Col>
        <Col md={6}>
          <div className="featuredServiceContent">
            <h3>Exceptional Dental Care,On Your Terams</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
              repellat similique ex, cum eligendi harum eaque recusandae
              excepturi eius repudiandae aliquid consequatur maiores enim, a
              molestiae placeat cupiditate odit delectus.iandae aliquid consequatur maiores enim, a
              molestiae placeat cupiditate odit delectus.iandae aliquid consequatur maiores enim, a
              molestiae placeat cupiditate odit delectus.
            </p>
            <button>Learn more</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FeaturedServices;
