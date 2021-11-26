import React from 'react';
import ProjectBox from './ProjectBox';
import '../styles/Projects.css';


const Projects = (props) => (
    <div className='projects container'>
        <h1 className='projects-title'>Here are some projects I have done.</h1>
        <div className='projects-items'>
            {props.projects.map((project) => {
                return <ProjectBox
                    name={project.name}
                    desc={project.desc}
                    repo={project.repo}
                    link={project.link}
                />
            })}
        </div>
    </div>
)

// add in more text like this is personal project/ online bootcamp etc.
// add in tech used

Projects.defaultProps = {
    projects: [
        {
            name: 'expensetracker',
            desc: 'A web app for tracking expenditures. The project is part of a React online bootcamp. This web app is build on a combination of React and Redux on the frontend, and Google Firebase for database and user authentication.',
            link: 'https://expensetracker-1.herokuapp.com/',
            repo: 'https://github.com/salmonsashimi/expensetracker'
        },
        {
            name: 'stocktracker',
            desc: 'This was a personal project for users to record and review their stock portfolio. The web app uses MongoDB to store user info, and marketstack API to fetch live stock data. ',
            repo: 'https://github.com/salmonsashimi/stocktracker'
        },
        {
            name: 'blogsite',
            desc: 'This is a personal blog template for users to log posts on their local server. The site is built on HTML, CSS, JavaScript, and MongoDB to store the posts.',
            repo: 'https://github.com/salmonsashimi/blogsite'
        }

    ]
}

export default Projects;