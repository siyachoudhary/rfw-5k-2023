import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./myNav.css"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const MyNav = () => {
  return (
    <div>
        <Navbar collapseOnSelect expand="lg" variant="dark" className='myNavbar'>
            <Container>
                <Navbar.Brand href="/rfw-5k-2023/"><img src='' alt='logo goes here'></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto"></Nav>
                <Nav>
                    <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                    Dank memes
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}
