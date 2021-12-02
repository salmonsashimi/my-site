import React from 'react';
import '../styles/Intro.css';

export default () => (
    <div className='intro container'>
        <div className='css-typing'>
            <h1>Hello!</h1>
            <h1>I'm Samuel Cheung,</h1>
            <h1>an aspiring software <span className='web'>developer.</span></h1>
            <h1 className='mobile'>developer.</h1>
            <div className='intro-icons'>
                <a href='https://www.linkedin.com/in/samuel-cheungyc/' ><i class="fab fa-linkedin fa-2x intro-icon" /></a>
                <a href='https://github.com/salmonsashimi' ><i class="fab fa-github-square fa-2x intro-icon" /></a>
                <a href='https://www.google.com' ><i class="fas fa-envelope-square fa-2x intro-icon" /></a>
            </div>
        </div>
    </div>
)