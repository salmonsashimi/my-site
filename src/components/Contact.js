import React from 'react';
import ContactForm from './ContactForm';
import '../styles/Contact.css';

export default () => (
    <div className='contact container'>
        <p>Interested to know more? Drop me a message!</p>

        <a href='https://www.google.com' ><i class="fab fa-github-square fa-2x contact-icons" /></a>
        <a href='https://www.google.com' ><i class="fab fa-linkedin fa-2x contact-icons" /></a>
        <a href='https://www.google.com' ><i class="fas fa-envelope-square fa-2x contact-icons" /></a>
        <ContactForm />
    </div>
)

