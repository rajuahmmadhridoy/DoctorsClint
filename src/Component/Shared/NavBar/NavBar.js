import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import './NavBar.scss'
const NavBar = () => {
  return (
    <div className="navBar">
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Doctors Portal</Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
          {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
            <Nav className="ml-auto navMenu">
              <Nav.Link className="navItems" href="#home">Home</Nav.Link>
              <Nav.Link className="navItems" href="#features">About</Nav.Link>
              <Nav.Link className="navItems" href="#features">Dental Service</Nav.Link>
              <Nav.Link className="navItems" href="#features">Review</Nav.Link>
              <Nav.Link className="navItems" href="#pricing">Blog</Nav.Link>
              <Nav.Link className="navItems" href="#pricing">Contract Us</Nav.Link>
            </Nav>
          {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
