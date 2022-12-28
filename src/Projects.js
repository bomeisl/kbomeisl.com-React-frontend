import React, { useEffect, useState } from 'react'
import projects from './ProjectApi'
import 'react-multi-carousel/lib/styles.css';
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
                        <ProjectCard
                            key = {project.name}
                            name = {project.name}
                            description = {project.description}
                            github = {project.github}
                            demo = {project.demo}
                            images = {project.images}
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
            
            {renderCarousel()}
            
           
            
        </>
    )
}

export default Projects;