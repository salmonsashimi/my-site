import React from 'react';
import moment from 'moment';
import SkillBox from './SkillBox';
import '../styles/About.css'


export default () => {
    let today = moment();
    let start = moment([2020, 10, 1]);
    let difference = today.diff(start, 'months');
    return (
        <div className='about container container-content'>
            <h1 className='about-title'>About Me</h1>
            <p>I first stumbled onto programming through an online Python course, with the intention of equiping myself with data analysis skills.</p>
            <p>But we all know that Python is far more capable than just data analytics. I went from creating CLI functions and GUIs, to building live websites. The enjoyable process made me realise I want to pursue a career in software development.</p>
            <p>I am a firm believer that nothing is impossible as long as you put your mind to it. I was able to upgrade myself through the wide variety of learning resources available online, with many thanks to platforms such as Udemy, Harvard/edX and Stack Overflow. </p>
            <p>As of today, I have been programming for <span className='months'>{difference}</span> months. Currently, I am working on a online ecommerce application to hone my skills in React.</p>
            <h1>Technologies I frequent:</h1>
            <SkillBox />
        </div>
    )
}