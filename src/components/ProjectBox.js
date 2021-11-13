import React from 'react';
import '../styles/ProjectBox.css';

const ProjectBox = (props) => (
    <div className='projectBox' onClick={() => { console.log('helo') }}>
        <h3> {props.name}</h3>
        <p>{props.desc}</p>
        <p>{props.repo}</p>
    // add in external link for repo
    </div>
)

export default ProjectBox;