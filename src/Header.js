import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';

const Header = () => {
    return (
        <div>
            
                <h1 class='ui header'>
                    
                    <Stack direction='vertical' gap={3}>
                        <h1 class="display 2 ">Kyle Bomeisl</h1>
                        <h2 class="display 4 text-muted">Software Engineer</h2>
                    </Stack>
                   
                </h1>
            
            
            <Navbar bg="light" variant="light">
            
                <Container>
                <Card border="primary" style={{ width: '18rem' }}>
                <Navbar.Brand href="#home">Kyle's Workshop</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">About Me</Nav.Link>
                    <Nav.Link href="#features">My Projects</Nav.Link>
                    <Nav.Link href="#pricing">Musings (blog)</Nav.Link>
                    <Nav.Link href="#pricing">How This Website Works</Nav.Link>
                </Nav>
                </Card>
                </Container>
            </Navbar>
       
        </div>
    )
}

export default Header;