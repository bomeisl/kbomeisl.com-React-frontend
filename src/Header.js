import React from 'react'
import React, { useEffect, useState } from 'react';
import projects from './ProjectApi';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Stack from 'react-bootstrap/Stack';

const Header = () => {

    const [headerInfo,setHeaderInfo] = useState([]);

    const fetchHeader = async () =>{
        const response = await projects.get('/header/')
        setHeaderInfo(response.data)
    };

    const icons = headerInfo.map((icon) => 
        <Stack direction='horizontal' gap={4}>
            <img src={icon.image} alt={icon.name}/>
        </Stack>

    );

    const renderHeader = () => {
    return (
        <div>
            <Stack direction='horizontal' gap={6}>
                {icons}
                <h1 class='ui header justify-content-center'>
                    <Stack direction='vertical' gap={3}>
                        <h1 class="display 2 ">Kyle Bomeisl</h1>
                        <h2 class="display 4 text-muted">Software Engineer</h2>
                    </Stack>  

                </h1>
            </Stack>
            
            
            <Navbar bg="light" variant="light">
            
                <Container>
                
                <Navbar.Brand href="#home">Kyle's Workshop</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">About Me</Nav.Link>
                    <Nav.Link href="#features">My Projects</Nav.Link>
                    <Nav.Link href="#pricing">Musings (blog)</Nav.Link>
                    <Nav.Link href="#pricing">How This Website Works</Nav.Link>
                </Nav>
                
                </Container>
            </Navbar>
       
        </div>
    )
    }

    useEffect(()=>{
        fetchHeader()
    },[])

    return (
        <>
            <div>
                
                {renderHeader()}
            </div>
                
        </>
    )
}

export default Header;

