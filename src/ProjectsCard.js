import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const ProjectCard = (props) => {

    const reel = props.images.map((pic) => 
        <img src={pic.image} alt={props.name} key={pic.id}/>
    );


    return (
        <div className="green card">    
            <div className="content">
                <div className="header">
                    {props.name}
                </div>
                <div className="description">
                    <p>{props.description}</p>
                </div>
               {reel}
                
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
