import React, { useEffect, useState } from 'react';
import projects from './ProjectApi';
import 'react-multi-carousel/lib/styles.css';
import UncontrolledExample from './Carousel';
import ProjectCard from './ProjectsCard';
import Card from 'react-bootstrap/Card';


const Projects = () => {
    const [projectInfo,setProjectInfo] = useState([]);

    const fetchProjects = async () =>{
        const response = await projects.get('/projects/')
        setProjectInfo(response.data)
    }



    const renderCarousel = () => {
        return(
            <div className="ui three stackable raised cards">
                {projectInfo.map(project => {

                    if(!project){
                        return <div>One moment please...</div>

                    } else {
                        return (
                    <Stack direction='vertical' gap={3}>
                    <Card border="primary" style={{ width: '100%' }}>
                        <ProjectCard
                            key = {project.name}
                            name = {project.name}
                            description = {project.description}
                            github = {project.github}
                            demo = {project.demo}
                            images = {project.images}
                        />
                        <UncontrolledExample
                            key = {project.name}
                            name = {project.name}
                            description = {project.description}
                            github = {project.github}
                            demo = {project.demo}
                            images = {project.images}
                        />
                    </Card>
                    </Stack>
                                
                        )
                    }
                })}

            </div>
        )
    }

    useEffect(()=>{
        fetchProjects()
    },[])

    return (
        <>
            <div>
                
                {renderCarousel()}
            </div>
                
        </>
    )
}

export default Projects;