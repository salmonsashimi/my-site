import React from 'react';
import ProjectBox from './ProjectBox';
import '../styles/Projects.css';


const Projects = (props) => (
    <div className='projects container'>
        <h1>Here are some projects I have done.</h1>
        <div>
            {props.projects.map((project) => {
                return <ProjectBox name={project.name} desc={project.desc} repo={project.repo} />
            })}
        </div>
    </div>
)

Projects.defaultProps = {
    projects: [
        {
            name: 'expensetracker',
            desc: 'A web app for users to keep track of their expenditures.',
            link: 'expensetracker-1.herokuapp.com/',
            repo: 'https://github.com/salmonsashimi/expensetracker'
        },
        {
            name: 'stocktracker',
            desc: 'A web app for users to log and review their stock portfolio.',
            repo: 'https://github.com/salmonsashimi/stocktracker'
        },
        {
            name: 'blogsite',
            desc: 'A blog template for users to blog on their local server.',
            repo: 'https://github.com/salmonsashimi/blogsite'
        }

    ]
}

export default Projects;