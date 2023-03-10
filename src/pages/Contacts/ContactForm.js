import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import  './Contact.css'

const ContactForm = () => {
    const [emailMsg, setEmailMsg] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    const  [loadContact, setLoadContact ] = useState(false)
    const form = useRef();

    const sendEmail = (e) => {
        setLoadContact(true)
        setEmailMsg('')
        e.preventDefault();

        emailjs.sendForm('service_ylwcw0j', 'template_lwp2wca', form.current, 'Kf7PZeVOou3mmlSnn')
            .then((result) => {
                console.log(result);
                if (result.text === 'OK') {
                    setEmailMsg("Thanks for your response. Your email is sent succesfully")
                    setLoadContact(false)
                }
            }, (error) => {
                if (error) {
                    setErrorMsg("Something went wrong!! Can you please try again!!")
                    setLoadContact(false)
                }
            });
        e.target.reset()
        
    };

    useEffect(() => {
        window.scrollTo(0, 0)
    },[])

    
    return (
     
            <div className='bg-white w-full text-secondary'>
                
                <div className=' flex  justify-center  '>
                    <div className='w-full p-1  md:p-10 '>
                        <h1 className='text-4xl underline font-extrabold text-center   mb-6'>Let's Connect</h1>
                        <p className='text-base text-start'>{emailMsg}</p>
                        <p className='text-base'>{errorMsg}</p>
                        <form className="bg-primary rounded-lg p-4 w-full mt-12" ref={form} onSubmit={sendEmail}>
                            <div className="form-control">
                                <label className="label font-bold tracking-wide">
                                    Name:
                                </label>
                                <input required type="text" name='user_name' placeholder="Email" className="input input-bordered bg-[#ffffff] border border-[#ffffff] text-[#1e1e1e] tracking-wider text-semibold py-1 px-4" />
                            </div>
                            <div className="form-control">
                                <label className="label font-bold tracking-wide">
                                    Email:
                                </label>
                                <input required type="email" name='user_email' placeholder="Name" className="input input-bordered bg-[#ffffff] border border-[#f7f7f7] text-[#1e1e1e] tracking-wider text-semibold py-1 px-4" />
                            </div>
                            <div className="form-control">
                                <label className="label font-bold tracking-wide">
                                    Subject:
                                </label>
                                <input required type="text" name='subject' placeholder="Subject" className="input input-bordered bg-[#ffffff] border border-[#f7f7f7] text-[#1e1e1e] tracking-wider text-semibold py-1 px-4" />
                            </div>
                            <div className="form-control">
                                <label className="label font-bold tracking-wide">
                                    Your message
                                </label>
                                <textarea name="message" className="textarea textarea-bordered h-20 w-full mb-3 text-base  bg-[#ffffff] border border-[#f7f7f7] text-[#1e1e1e] tracking-wider text-semibold py-1 px-4" placeholder="Your Message" required></textarea>
                            </div>
                         
                            <div className="form-control flex justify-end items-end  w-full mt-3">
                                <input className="text-sm font-medium bg-secondary  rounded-2xl px-5 py-2 my-1 text-white hover:text-primary" type="submit" value="Send Message" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        
    );
};

export default ContactForm;


