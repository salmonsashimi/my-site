import React from 'react';
import ProjectBox from './ProjectBox';
import '../styles/Projects.css';


const Projects = (props) => (
    <div className='projects container container-content'>
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
// add in tech used

Projects.defaultProps = {
    projects: [
        {
            name: 'Expensetracker',
            desc: 'A web app for tracking expenditures. This project is part of a React online bootcamp. The web app is build on a combination of React and Redux on the frontend, and Google Firebase for database and user authentication.',
            link: 'https://expensetracker-1.herokuapp.com/',
            repo: 'https://github.com/salmonsashimi/expensetracker'
        },
        {
            name: 'Stocktracker',
            desc: 'This is a personal project for users to record and review their stock portfolio. The web app uses MongoDB to store user info, and marketstack API to fetch live stock data. ',
            repo: 'https://github.com/salmonsashimi/stocktracker'
        },
        {
            name: 'Blogsite',
            desc: 'This is a personal blog template for users to log posts on their local server. The site is built on HTML, CSS, JavaScript, and MongoDB to store the posts.',
            repo: 'https://github.com/salmonsashimi/blogsite'
        },
        {
            name: 'Ecommerce site',
            desc: 'An ecommerce site built using React. Project is still ongoing, stay tuned for updates!',
            repo: 'https://github.com/salmonsashimi/ecommerce-site'
        }

    ]
}

export default Projects;