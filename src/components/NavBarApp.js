import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutAsync } from '../redux/actions/actionLogin';



const NavBarApp = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const logout = () => {
        dispatch(logoutAsync())
        navigate("/login")
    }
    return (
        <>

            <Navbar>
                <Container className="navb">
                    <Navbar.Brand href="#home">
                        <img
                            src="https://res.cloudinary.com/dhu8kck7f/image/upload/v1651009439/rz0t4rwlr53svcaf9vrj.png"
                            width="50%"
                            className="d-inline-block align-top logoNavDentro"
                            alt="logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-0 nav">
                            <Nav.Link><Link className="linkDentro" to="/logout">Tareas</Link></Nav.Link>
                            <Nav.Link><Link className="linkDentro" to="/aprende">Aprende</Link></Nav.Link>
                            <Nav.Link className="linkDentro" onClick={logout}>Cerrar Sesión</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBarApp