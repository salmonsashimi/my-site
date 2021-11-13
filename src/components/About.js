import React from 'react';
import SkillBox from './SkillBox';
import '../styles/About.css'

export default () => {
    let months = 2000;
    return (
        <div className='about container'>
            <h1>About Me</h1>
            <p>I first stumbled onto programming when I decided to learn data analytics for self-development. Python was my language of choice then, and I started by purchase an online course to learn it.</p>
            <p>But we all know that Python is far more capable than just data analytics. I learned to create CLI functions and GUIs, to building live websites. The enjoyable process made me realise I want to persue a career in this field.</p>

            <p>I am a firm believer that anyone can learn something as long as they put their mind to it. From then on, I went through a variety of learning resources from platforms such as Udemy, Harvard/edX Stack Overflowduring my spare time. </p>
            <p>As of today, I have been self-learning to code for <span className='months'>{months}</span> months.</p>
            <h1>These are the technologies I frequent:</h1>
            <SkillBox />
            <h1>Lengends:</h1>

        </div>
    )
}
