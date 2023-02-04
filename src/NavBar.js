import React from "react";
import { Button } from "react-bootstrap";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="" className="text-black">
      <Container>
        <Navbar.Brand href="/">PotHero</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#pricing">Find a Pothole</Nav.Link>
            <NavDropdown title="Report" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/report">Report a Pothole</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Blogs
              </NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
              {/* <NavDropdown.Divider /> */}
              {/* <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
          <Nav>
            <Button href="/sign-in" className="btn-light m-1 btn-outline-primary">Login</Button>
            <Button href="/sign-up" className="m-1">
              Signup    
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;