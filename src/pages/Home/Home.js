import React, { useEffect } from 'react';
import ContactForm from '../Contacts/ContactForm';
import Services from '../Services/Services';
import About from './About';
import Brand from './Brand';
import Hero from './Hero';
import HomeProject from './HomeProject';

const Home = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    })
    return (
        <div>
            <Hero></Hero>
            <About></About>
            <Brand></Brand>
            <Services></Services>
            <HomeProject></HomeProject>
            <div className='flex justify-center items-center w-full my-12'>
                <div className='w-5/6 md:w-1/2'>
                    <ContactForm></ContactForm>
                </div>
            </div>

        </div>
    );
};

export default Home;