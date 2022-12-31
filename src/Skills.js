import React, { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import './Skills.css'
import projects from './ProjectApi';
import CardGroup from 'react-bootstrap/CardGroup';


const Projects = () => {
    const [projectInfo,setProjectInfo] = useState([]);

    const fetchProjects = async () =>{
        const response = await projects.get('/skills/')
        setProjectInfo(response.data)
    }

    const renderCarousel = () => {

        const styles = {
            card: {
              backgroundColor: '#B7E0F2',
              borderRadius: 55,
              padding: '3rem'
            },
            cardImage: {
              objectFit: 'cover',
              width: '30vw',
            height: '30vh'
            }
          }
          

        return(
            <div className="ui three stackable raised cards">
                <div class="jumbotron m-3">
                    <h1 id="head-skill">About Me</h1>
                    <h3 id="head-sub"></h3>
                </div>
                <CardGroup>

                {projectInfo.map(project => {

                    if(!project){
                        return <div>One moment please...</div>

                    } else {
                        return (
                            
                            <Card style={styles.card}>
                              <Card.Img src={project.icon} variant="top" style={styles.cardImage} />

                              <Card.Body>
                                <Card.Title>{project.category}</Card.Title>
                                <ListGroup variant="flush">

                                    {project.skills.map(skill =>
                                    <ListGroup.Item>{skill.language}</ListGroup.Item>
                                    )}
       
                                </ListGroup>
                              </Card.Body>
                              
                            </Card>
                            
                         
                                
                        )
                    }
                })}
                 </CardGroup>

            </div>
        )
    }

    useEffect(()=>{
        fetchProjects()
    },[])

    return (
        <>
            <div>
                
                {renderCarousel()}
            </div>
                
        </>
    )
}

export default Projects;