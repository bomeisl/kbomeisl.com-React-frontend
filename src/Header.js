import React, { useEffect, useState } from 'react';
import projects from './ProjectApi';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image'
import Figure from 'react-bootstrap/Figure';
import { ListGroup } from 'react-bootstrap';

const Header = () => {

    const [headerInfo,setHeaderInfo] = useState([]);

    const fetchHeader = async () =>{
        const response = await projects.get('/header/')
        setHeaderInfo(response.data)
    };

    
    const renderHeader = () => {
        return(
            <div className="ui three stackable raised cards">
                <Stack direction='vertical' gap={3}>
                <Stack direction='vertical' gap={2}>
                        <h1 class='ui header justify-content-center'>
                            
                                <Stack direction='vertical' gap={3}>
                                    <h1 class="display 1 ">Kyle Bomeisl</h1>
                                    <h2 class="display 3 text-muted">Software Engineer</h2>
                                    <h6 class="display 7">You are viewing a screen rendered by a React frontend I built that is consuming a 
                                    Django REST API backend that I built as well. The static and media assets are served from a PostgreSQL database and a Microsoft
                                    Azure Blob Static Asset Storage Container that I created and configured. The backend and frontend are each hosted at 
                                    different domains, so I configured CORS to allow requests between them.  
                                    
                                    </h6>
                                </Stack>                                  
                        </h1>                       
                <Stack direction='horizontal' gap={3}>
                {headerInfo.map(header => {
                    
                    if(!header){
                        return <div>One moment please...</div>

                    } else {
                        return (
                
                            <div>
            
                            
                                <Figure>
                                    <Figure.Image
                                        width={'25%'}
                                        height={'4%'}
                                        alt={header.name}
                                        src={header.image}/>
                                </Figure>        
                         
                            
            
                        </div> 
                        
                    
                                
                        )
                    }
                })}
                </Stack>
                </Stack>

                <h3>
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
                </h3>
                
                </Stack> 
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

