import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <>

            <Navbar>
                <Container className="navb">
                <Navbar.Brand href="#home">
                        <img
                            src="https://res.cloudinary.com/dhu8kck7f/image/upload/v1651009439/rz0t4rwlr53svcaf9vrj.png"
                            width="50%"
                            className="d-inline-block align-top"
                            alt="logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-0 nav">
                        <Nav.Link><Link to="/home">Home</Link></Nav.Link>
                        <Nav.Link><Link to="/home">Nosotros</Link></Nav.Link>
                        <Nav.Link><Link to="/login">App</Link></Nav.Link>
                        <Nav.Link><Link to="/home">Contacto</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar