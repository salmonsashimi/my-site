import React from 'react';
import SkillBox from './SkillBox';
import '../styles/About.css'

export default () => {
    let months = 2000;
    return (
        <div className='about container'>
            <div className='half-container'>
                <h1>As of today, I have been learning to code for <span className='months'>{months}</span> months.</h1>
                <h1>These are the skills I'm equipped with:</h1>
                <h1>Lengends:</h1>
            </div>
            <div className='half-container'>
                <SkillBox />
            </div>
        </div>
    )
}
