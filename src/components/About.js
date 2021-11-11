import React from 'react';
import '../styles/About.css'
import SkillBox from './SkillBox';

export default () => {
    let months = 2000;
    return (
        <div className='about container'>
            <div>
                <h1>As of today, I have been learning for <span className='months'>{months}</span> months.</h1>
                <h1>These are the skills I'm equipped with:</h1>
            </div>
            <div>
                <SkillBox />
            </div>
        </div>
    )
}
