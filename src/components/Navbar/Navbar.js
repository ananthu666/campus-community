import React from "react";
import "./navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="light" className="navbar">
      <Container>
        <Navbar.Brand href="#home" className="brand"
        style={{color:"#ff845e"}}
        >
          EETI Foundation
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-left">
            <Nav.Link href="/" className="navText">
              Home
            </Nav.Link>
            <Nav.Link href="/events" className="navText">
              About
            </Nav.Link>
            <Nav.Link href="/aboutus" className="navText">
              Rewards
            </Nav.Link>
            <Nav.Link href="/team" className="navText">
              FAQ
            </Nav.Link>
            <Nav.Link href="/careers" className="navText">
              Contact
            </Nav.Link>

            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
