import React from "react";
import "./navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar(){
  return (
    <Navbar collapseOnSelect expand="lg" variant="light" className="navbar">
      <Container className="Container">
        <Navbar.Brand
         href="/"
        className="brand"
        style={{color:"#ff845e"}}
        >
          EETI Foundation
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-left">
            <Nav.Link href="/#home" className="navText">
              Home
            </Nav.Link>
            <Nav.Link href="/#about" className="navText">
              About
            </Nav.Link>
            <Nav.Link href="/resources" className="navText">
              Resources
            </Nav.Link>

            <Nav.Link href="/#benefits" className="navText">
              Rewards
            </Nav.Link>
            <Nav.Link href="/#faq" className="navText">
              FAQ
            </Nav.Link>
            {/* <Nav.Link href="/#" className="navText">
              Contact
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;