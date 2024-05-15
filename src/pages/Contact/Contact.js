import React from 'react';
import ContactForm from './Components/ContactForm';
import ContactSvg from './Components/ContactSvg';
import styles from './Contact.module.css'

function Contact() {
    return (
        <div className={`${styles['contact-form-ctr']} ${styles['container']} d-flex justify-content-center align-items-center`}>
            <ContactSvg />
            <ContactForm />
        </div>
    );
}

export default Contact;
