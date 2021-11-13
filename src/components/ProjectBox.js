import React from 'react';
import '../styles/ProjectBox.css';

const ProjectBox = (props) => (
    <div className='projectBox'>
        <h3> {props.name}</h3>
        <p>{props.desc}</p>
        <p>{props.repo}</p>
        <a></a>
    // add in external link for repo
    // add in more text like this is personal project/ online bootcamp etc.
    // add in tech used
    </div>
)

export default ProjectBox;