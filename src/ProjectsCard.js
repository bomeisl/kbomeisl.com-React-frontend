import React from 'react';
import 'react-multi-carousel/lib/styles.css';

const ProjectCard = (props) => {


    return (
        <div className="green card">    
            <div className="content">
                <h2>
                    {props.name}
                </h2>
                <div className="description">
                    <p>{props.description}</p>
                </div>
               
                
            </div>
            <div className="extra content">
                <button className="ui button">
                    {props.github}
                </button>
            
            </div>
        </div>
    )
    
}

export default ProjectCard;
