import React from 'react';
import '../styles/About.css'
import SkillBox from './SkillBox';

export default () => {
    let months = 2000;

    return (
        <div className='about container'>
            <div>
                <h1>As of today, I have been a self-taught developer for <span className='months'>{months}</span> months.</h1>
            </div>
            <div>
                <h1>I can use:</h1>
                <SkillBox />
            </div>
        </div>
    )
}
