import React from 'react';
import ContactForm from '../Contacts/ContactForm';
import Services from '../Services/Services';
import About from './About';
import Brand from './Brand';
import Hero from './Hero';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <About></About>
            <Brand></Brand>
            <Services></Services>
            <div className='flex justify-center items-center w-full my-12'>
                <div className='w-2/3'>
                    <ContactForm></ContactForm>
                </div>
            </div>

        </div>
    );
};

export default Home;