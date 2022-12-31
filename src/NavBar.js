import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'
import Stack from 'react-bootstrap/Stack';
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (

<Navbar bg="light" variant="light" id="nav">
                        
                        <Container class="start">
                
                        
                            <Nav class="start">
                                <Stack direction='horizontal' gap={4}>
                                <Nav.Link id="link" href="#home">
                                    <Link id="link" to="/"> 
                                    <p id="link"> Home </p>
                                    </Link>
                                </Nav.Link>
                                <Nav.Link id="link" href="#home">
                                    <Link id="link" to="/Skills"> 
                                    <p id="link"> About Me </p>
                                    </Link>
                                </Nav.Link>
                                <Nav.Link id="link" href="#features">
                                    <Link id="link" to="/projects"> 
                                    <p id="link"> My Projects </p> 
                                    </Link>
                                </Nav.Link>
                                <Nav.Link id="link" href="#features">
                                    <Link id="link" to="/projects"> 
                                    <p id="link"> My Musings (Blog) </p> 
                                    </Link>
                                </Nav.Link>                                
                                </Stack>
                            </Nav>
                
                        </Container>
</Navbar>
    )
}

export default NavBar;