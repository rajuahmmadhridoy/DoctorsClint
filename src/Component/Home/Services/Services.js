import React from "react";
import { Container, Row } from "react-bootstrap";
import ServicesDisplay from "../ServicesDisplay/ServicesDisplay";
import { servicesData } from "./ServicesData";
import './Services.scss'
const Services = () => {
  return (
    <Container className="servicesContainer">
      <h4>OUR SERVICES</h4>
      <h3>Services We Provide</h3>
      <Row>
        {servicesData.map((data) => (
          <ServicesDisplay data={data} />
        ))}
      </Row>
    </Container>
  );
};

export default Services;
