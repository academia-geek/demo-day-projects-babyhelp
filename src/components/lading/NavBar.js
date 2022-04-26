import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
const NavBar = () => {
    return (
        <>
            {/* <Navbar>
                <Container className="navb">
                    <Navbar.Brand href="#home">
                        <img
                            src="https://res.cloudinary.com/dhu8kck7f/image/upload/v1650953597/ppmqr4isrdstuw3zgqvc.png"
                            width="40%"
                            className="d-inline-block align-top"
                            alt="logo"
                        />
                    </Navbar.Brand>
                    <Nav className="me-0 nav">
                        <Nav.Link to="#features">Features</Nav.Link>
                        <Nav.Link to="#team">Team</Nav.Link>
                        <Nav.Link to="#sing">Sign In</Nav.Link>
                    </Nav>
                </Container>
            </Navbar> */}

            <Navbar>
                <Container className="navb">
                <Navbar.Brand href="#home">
                        <img
                            src="https://res.cloudinary.com/dhu8kck7f/image/upload/v1650956989/ckmbzwlkjyflf4geksva.png"
                            width="50%"
                            className="d-inline-block align-top"
                            alt="logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-0 nav">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar