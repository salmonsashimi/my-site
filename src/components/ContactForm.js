import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../styles/ContactForm.css';

function ContactForm() {
    const [state, handleSubmit] = useForm("xdoyqgbb");
    if (state.succeeded) {
        return <p>Thank you for your message. I will get back the soonest possible!</p>;
    }
    return (
        <div className='contactForm'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Your Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    rows='8'
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <div className='contactForm-button-format'>
                    <button className='contactForm-button' type="submit" disabled={state.submitting}>
                        Submit
                </button>
                </div>
            </form>
        </div>
    );
}

export default ContactForm;