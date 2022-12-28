import React from 'react'
import SkillsList from './SkillsList.js'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { CardGroup } from 'react-bootstrap';


const Skills = () => {

    const Web = ['HTML','CSS','JavaScript','Bootstrap', 'SemanticUI']
    const Android = ['Kotlin', 'Java', 'Compose', "C++"]
    const Sci = ['Julia','Python','Numpy','Pandas','scikit-learn']

    const Web_inp = Web.map((skill)=> 
        <ListGroup.Item>{skill}</ListGroup.Item>
    );

    const Android_inp = Android.map((skill)=> 
        <ListGroup.Item>{skill}</ListGroup.Item>
    );

    const Sci_inp = Sci.map((skill)=> 
        <ListGroup.Item>{skill}</ListGroup.Item>
    );

    return (
        <CardGroup>
             <Card style={{ width: '18rem' }}>
                <Card.Header>Web Development</Card.Header>
                <Card.Img variant="top" src="holder.js/100px160" />
                    <ListGroup variant="flush">
                        {Web_inp}
                    </ListGroup>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Header>Android Development</Card.Header>
                <Card.Img variant="top" src="holder.js/100px160" />
                    <ListGroup variant="flush">
                        {Android_inp}
                    </ListGroup>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Header>Scientific Computing</Card.Header>
                <Card.Img variant="top" src="holder.js/100px160" />
                    <ListGroup variant="flush">
                        {Sci_inp}
                    </ListGroup>
            </Card>
        </CardGroup>
            
    )
}

export default Skills;