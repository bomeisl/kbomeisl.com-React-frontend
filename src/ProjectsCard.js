import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import './ProjectsCard.css'
import Button from 'react-bootstrap/Button';

const ProjectCard = (props) => {

    


    return (
        <div className="green card">    
            <div className="content">
                <h2 class="center" id="proj-name">
                    {props.name}
                </h2>
                <div className="description">
                    <p id="proj-des">{props.description}</p>
                </div>
                
               
                
                <div className="d-grid gap-2">
                    <Button href={props.github} variant="secondary" size="lg">
                        {props.github}
                    </Button>
                </div>
            </div>
        </div>
    )
    
}

export default ProjectCard;
