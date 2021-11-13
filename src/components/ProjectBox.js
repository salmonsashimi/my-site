import React from 'react';
import '../styles/ProjectBox.css';

export default (props) => (
    <div className='projectBox'>
        <h3> {props.name}</h3>
        <p>{props.desc}</p>
        <p>{props.repo}</p>
    </div>
)