import React from 'react';
import ContactForm from './ContactForm';
import '../styles/Contact.css';

export default () => (
    <div className='contact container'>
        <div className='contact-form'>
            <h1 className='contact-title'>Interested to connect? Contact me!</h1>
            <ContactForm />
        </div>
    </div>
)

