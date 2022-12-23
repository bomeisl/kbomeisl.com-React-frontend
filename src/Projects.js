import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectsCard'
import projects from './ProjectApi'

const Projects = () => {
    const [projectInfo,setProjectInfo] = useState([]);

    const fetchProjects = async () =>{
        const response = await projects.get('/projects/')
        setProjectInfo(response.data)
    }

    const renderProjectCards = () => {
        return(
            <div className="ui three stackable raised cards">
                {projectInfo.map(project => {

                    if(!project){
                        return <div>One moment please...</div>

                    } else {
                        return (
                            <ProjectCard
                                name={project.name}
                                description={project.description}
                                image={project.image}
                                github={project.github}
                                demo={project.demo}
                                key={project.name}
                            />
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
            </div>
            {renderProjectCards()}
        </>
    )
}

export default Projects;