import React from 'react';
import '../styles/About.css'

export default () => (
    <div className='about'>
        <div className='about-container about-left'>
            <h1>As of today, I have been a self-taught developer for <span className='months'>{1000}</span> months.</h1>
        </div>
        <div className=' about-container about-right'>
            <h1>I can use:</h1>
        </div>
    </div>
)