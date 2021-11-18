import React from 'react';
import ContactForm from './ContactForm';
import '../styles/Contact.css';

export default () => (
    <div className='contact container'>
        <div className='contact-form'>
            <h1 className='contact-title'>Drop me a message below!</h1>
            <ContactForm />
        </div>
        <div className='contact-icons'>
            <a href='https://www.linkedin.com/in/samuel-cheungyc/' ><i class="fab fa-linkedin fa-3x contact-icon" /></a>
            <a href='https://github.com/salmonsashimi' ><i class="fab fa-github-square fa-3x contact-icon" /></a>
            <a href='https://www.google.com' ><i class="fas fa-envelope-square fa-3x contact-icon" /></a>
        </div>
    </div>
)

