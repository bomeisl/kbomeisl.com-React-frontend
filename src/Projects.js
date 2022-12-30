import React, { useEffect, useState } from 'react'
import projects from './ProjectApi'
import 'react-multi-carousel/lib/styles.css';
import UncontrolledExample from './Carousel'
import ProjectCard from './ProjectsCard'


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
    
                    <div>
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
                    </div>
                                
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
            <div className='ui center aligned container'>
                <h1>Projects</h1>
                <spacer type="vertical" width = "20" height="200"> ♢ </spacer>
            </div>
                
                {renderCarousel()}
                <spacer type="horizontal" width="20" height="100"> ♢ </spacer>
        </>
    )
}

export default Projects;