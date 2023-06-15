import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
      <Navbar.Brand as={Link} to="/">
        MRM Designs
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="https://www.mrmdesigns.ai/">Website</Nav.Link>
          <Nav.Link as={Link} to="/main">CameraKit</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
