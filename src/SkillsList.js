import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import './Skills.css'

const SkillsList = (props) => {

    const skillList = props.cluster.map(skill=> 
        <ListGroup.Item>
            <h3 id="lang">{skill.language}</h3>
        </ListGroup.Item>
    );

    return (
        skillList
    )
}

export default SkillsList;