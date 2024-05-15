import React from 'react';
import styles from './ContactForm.module.css'
function ContactForm() {
    return (
        <form>
            <h1 className= {`${styles['title']} ${styles['text-center']} ${styles['mb-4']}`} >Talk to Us</h1>

            
            <div className={`${styles['form-group']} ${styles['position-relative']}`}>
                <label htmlFor="formName" className={styles['d-block']}>
                    <i className={styles['icon']}data-feather="user"></i>
                </label>
                <input type="text" id="formName" className={`${styles['form-control']} ${styles['form-control-lg']} ${styles['thick']}`} placeholder="Name" />
            </div>

            
            <div className={`${styles['form-group']} ${styles['position-relative']}`}>
                <label htmlFor="formEmail" className={styles['d-block']}>
                    <i className={styles['icon']} data-feather="mail"></i>
                </label>
                <input type="email" id="formEmail" className={`${styles['form-control']} ${styles['form-control-lg']} ${styles['thick']}`} placeholder="E-mail" />
            </div>

            
            <div className={`${styles['form-group']} ${styles['message']}`}>
                <textarea id="formMessage" className={`${styles['form-control']} ${styles['form-control-lg']}`} rows="7" placeholder="Message"></textarea>
            </div>

            
            <div className={styles['text-center']}>
                <button type="submit" className={`${styles['btn']} ${styles['btn-primary']}`} tabIndex="-1">Send message</button>
            </div>
        </form>  
    );
}

export default ContactForm;