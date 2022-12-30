import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <div>
        <h1 class='ui header'>
            <h1 class="display 2 ">Kyle Bomeisl</h1>
            <h2 class="display 4 text-muted">Software Engineer</h2>
        </h1>

        <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Kyle's Workshop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">About Me</Nav.Link>
            <Nav.Link href="#features">My Projects</Nav.Link>
            <Nav.Link href="#pricing">Musings (blog)</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
    )
}

export default Header;