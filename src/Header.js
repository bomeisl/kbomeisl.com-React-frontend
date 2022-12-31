import React, { useEffect, useState } from 'react';
import projects from './ProjectApi';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image'
import Figure from 'react-bootstrap/Figure';
import Alert from 'react-bootstrap/Alert';
import './Header.css'

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
                                    <div id="top">
                                        <h1 class="display 1 " id="name">Kyle Bomeisl</h1>
                                        <h2 class="display 3" id = "occ">Software Engineer</h2>
                                        
                                    </div>
                                    <h6 class="display 7" id="intro">
                                    Behind every great Web app is a great RESTful API with CRUD operations. This one is no exception of course.
                                    You are viewing a screen rendered by a React frontend I built that is consuming a 
                                    Django RESTful API backend with a PostgreSQL database that I lovingly designed and programmed as well. The static and media assets are served from a 
                                    Azure Blob Static Asset Storage Container that I created and configured. The backend and frontend are each hosted at 
                                    different domains, so I configured CORS to allow requests between them. Welcome to the world wide web of world wide
                                    web development! And welcome to the landing screen of my portfolio web app!
                                    <br></br><br></br>
                                    Hi
                                    
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
                        <Navbar bg="light" variant="light" id="nav">
                        
                        <Container>
                
                        <Navbar.Brand id = "nav-logo" href="#home">Kyle's Workshop</Navbar.Brand>
                            <Nav className="me-auto">
                                <Stack direction='horizontal' gap={4}>
                                <Nav.Link id="link" href="#home">About Me</Nav.Link>
                                <Nav.Link id="link" href="#features">My Projects</Nav.Link>
                                <Nav.Link id="link" href="#pricing">My Musings (blog)</Nav.Link>
                                <Nav.Link id="link" href="#pricing">How This Website Works</Nav.Link>
                                </Stack>
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

