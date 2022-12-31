import React, { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import { CardGroup } from 'react-bootstrap';
import './Skills.css'
import projects from './ProjectApi';


const Skills = () => {

    const [skillInfo,setSkillInfo] = useState([]);

    const fetchSkills = async () =>{
        const response = await projects.get('/skills/')
        setSkillInfo(response.data)
    }

    const renderSkills = () => {
        
    return (
        <div>
        <div class="jumbotron m-3">
                    <h1 id="head-skill">About Me</h1>
                    <h3 id="head-sub-skill">Software projects I've created</h3>
                </div>
        <CardGroup>
        {skillInfo.map(cluster => {

            const skillList = cluster.skills.map((skill)=> 
                <ListGroup.Item>{skill.language}</ListGroup.Item>
            );

            if(!cluster){
                return <div>One moment please...</div>

            } else {

             <Card style={{ width: '18rem' }}>
                <Card.Header>{cluster.category}</Card.Header>
                <Card.Img variant="top" src={cluster.icon} />
                    {skillList}
            </Card>
            }
        })}

        </CardGroup>
        </div>    
    )
    }

    useEffect(()=>{
        fetchSkills()
    },[])

    return (
        <>
            <div>
                
                {renderSkills()}
            </div>
                
        </>
    )
}

export default Skills;