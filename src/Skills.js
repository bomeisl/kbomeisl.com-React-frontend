import React, { useEffect, useState } from 'react';
import SkillsList from './SkillsList.js'
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
        {skillInfo.map(skillCluster => {
            if(!skillCluster){
                return <div>One moment please...</div>

            } else {

             <Card style={{ width: '18rem' }}>
                <Card.Header>Web Development</Card.Header>
                <Card.Img variant="top" src={skillCluster.icon} />
                    <SkillsList
                        cluster = {skillCluster.skills}
                    />
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