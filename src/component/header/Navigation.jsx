import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../assets/css/main.css'
import Logo from '../../assets/images/logo.png'

const Navigation = () => {
    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand><Link to="/"><img src={Logo} height="64px" width="192px" /></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link to="/" className="main-menu">Home</Link></Nav.Link>
                            <Nav.Link><Link to="/menu" className="main-menu">Menu</Link></Nav.Link>
                            <Nav.Link><Link to="/about" className="main-menu">About</Link></Nav.Link>
                            <Nav.Link><Link to="/contact" className="main-menu">Contact</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation;