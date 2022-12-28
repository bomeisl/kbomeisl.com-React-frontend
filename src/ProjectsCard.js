import React from 'react';

const ProjectCard = (props) => {
    return (
        <div className="green card">    
            <div className="content">
                <div className="header">
                    {props.name}
                </div>
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
