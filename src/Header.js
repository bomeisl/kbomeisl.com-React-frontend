import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <div>
        <h1 class='ui header'>
            <h1 class="display 2 ">Kyle Bomeisl</h1>
            <h2 class="display 4 text-muted">Software Engineer</h2>
        </h1>

        <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
    )
}

export default Header;