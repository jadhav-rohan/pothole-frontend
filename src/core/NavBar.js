import React from "react";
import { Button } from "react-bootstrap";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from "react-router-dom";
import { isAuthenticated, signout } from "../authentication/helper/auth";
// import {toast, ToastContainer} from "react-toastify"

function NavBar() {
  const navigate = useNavigate();
  return (
    <>
    <Navbar collapseOnSelect expand="lg" className="shadow-sm">
      <Container>
       
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <div className="ms-auto">
          <Nav className="">
          <Navbar.Brand href="/" className="text-primary">PotHero</Navbar.Brand>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/allPotholeCards">Find a <span className='text-primary'> PotHole </span></Nav.Link>
            
            <Nav.Link href="/blog">Blogs</Nav.Link>
            <Nav.Link href="/report">Report a <span className='text-primary'> PotHole </span></Nav.Link>
            
            {isAuthenticated() && localStorage.getItem("role") === "94227" && 
              <NavDropdown title="Admin Actions" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/addBlog">Add Blog</NavDropdown.Item>
                  <NavDropdown.Item href="/addAdmin">Add Admin</NavDropdown.Item>
                  <NavDropdown.Item href="/blog">Edit Blog</NavDropdown.Item>
              </NavDropdown>
            }
          </Nav>
          </div>
          <div className="" style={{"marginLeft": "5rem"}}>
          <Nav>
            {!isAuthenticated()
             && <Button href="/sign-in" className="btn-light m-1 btn-outline-primary">Login</Button> 
            }
            {isAuthenticated() &&
            <Button className="btn-light m-1 btn-outline-primary"
            onClick={() => {
              signout(() => {
              navigate("/sign-in") 
              alert("Logout Succesfull!")
              });
            }}
            >Logout</Button>
            }
            {!isAuthenticated() &&
            <Button href="/sign-up" className="m-1">
              Signup    
            </Button>
            }
          </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavBar;