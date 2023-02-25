import React, { useEffect } from 'react';
import contactLogo from '../../assets/contact/contact.svg'
import ContactForm from './ContactForm';

const Contact = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    return (
        <div className='py-24'>
            <div className='flex flex-col-reverse md:flex-row justify-center items-center'>
                <div className='w-full'>
                    <img src={contactLogo} alt="" />
                </div>
                <div className='w-full'>
                    <ContactForm></ContactForm>
                </div>
            </div>
        </div>
    );
};

export default Contact;