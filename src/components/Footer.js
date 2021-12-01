import React from 'react';
import '../styles/Footer.css';

export default () => (
    <div className='footer container container-content'>
        <div className='footer-icons'>
            <a href='https://www.linkedin.com/in/samuel-cheungyc/' ><i class="fab fa-linkedin fa-3x footer-icon" /></a>
            <a href='https://github.com/salmonsashimi' ><i class="fab fa-github-square fa-3x footer-icon" /></a>
            <a href='https://www.google.com' ><i class="fas fa-envelope-square fa-3x footer-icon" /></a>
        </div>
        <p className='footer-text'>Created by Samuel Cheung</p>
    </div>
)