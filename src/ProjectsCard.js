import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import './ProjectsCard.css'

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
                
               
                
            </div>
            <div className="extra content">
                <button className="ui button">
                    <p id="button-text">{props.github}</p>
                </button>
            
            </div>
        </div>
    )
    
}

export default ProjectCard;
