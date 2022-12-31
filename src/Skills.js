import React, { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import './Skills.css'
import projects from './ProjectApi';


const Skills = () => {

    const [skillInfo,setSkillInfo] = useState([]);

    const fetchSkills = async () =>{
        const response = await projects.get('/skills/')
        setSkillInfo(response.data)
    }

   
        
        
        
        {skillInfo.map(cluster => {

            


            if(!cluster){
                return <div>One moment please...</div>

            } else {
                return (
                    
                <div>
                    <div class="jumbotron m-3">
                        <h1 id="head-skill">About Me</h1>
                        <h3 id="head-sub-skill">Software projects I've created</h3>
                    </div>
                    

             
                </div>  
        )
            }
        })}

        
    
          useEffect(()=>{
            fetchSkills()
        },[])
   

    }

   
    


export default Skills;