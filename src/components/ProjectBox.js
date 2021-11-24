import React from 'react';
import '../styles/ProjectBox.css';

const ProjectBox = (props) => (
    <div className='projectBox'>
        <div className='projectBox-text'>
            <h3> {props.name}</h3>
            <p>{props.desc}</p>
        </div>
        <div className='projectBox-icons'>
            {props.link && <a href={props.link} ><i class="fas fa-external-link-square-alt fa-2x projectBox-icon" /></a>}
            {props.repo && <a href={props.repo} ><i class="fab fa-github-square fa-2x projectBox-icon" /></a>}

        </div>
    </div>
)

export default ProjectBox;