import React from 'react'

const ProjectCard = (props) => {
    return (
        <div className="green card"> 
            <div className= "image">
                <img></img>
            </div>
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
                <button className="ui button">
                    {props.demo}
                </button>
            </div>
        </div>
    )
    
}

export default ProjectCard;
