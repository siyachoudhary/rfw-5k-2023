import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import "./MyNav.css"

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export const MyNav = () => {

  return (

    <div>
      
        <Navbar collapseOnSelect expand = "lg" variant = "dark" className = "myNavbar fixed-top" >

          <Container>

            <Navbar.Brand href = "/rfw-5k-2023/"> <img src = "" alt = "RFW" /> </Navbar.Brand>
            <Navbar.Toggle aria-controls = "responsive-navbar-nav" className = "toggleBtn"/>

            <Navbar.Collapse id = "responsive-navbar-nav" className = "navbar-collapse">

              <Nav className = "me-auto" />

              <Nav className = "links">

                <Nav.Link href = "/rfw-5k-2023/" className = "navItem">Home</Nav.Link>
                <Nav.Link href = "/rfw-5k-2023/about" className = "navItem">About</Nav.Link>
                <Nav.Link href = "/rfw-5k-2023/impact" className = "navItem">Impact</Nav.Link>
                <Nav.Link href = "/rfw-5k-2023/team" className = "navItem">Team</Nav.Link>
                <Nav.Link href = "/rfw-5k-2023/contribute" className = "navItem">Contribute</Nav.Link>

              </Nav>

            </Navbar.Collapse>

          </Container>

        </Navbar>   

    </div>

  )

}
