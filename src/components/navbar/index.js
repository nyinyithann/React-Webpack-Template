import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TopNavbar = () => (
  <header>
    <Navbar
      collapseOnSelect
      bg="light"
      variant="light"
      expand="lg"
      sticky="top"
    >
      <Navbar.Brand href="/">My App</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Container>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
);
export default TopNavbar;
