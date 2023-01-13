import React from 'react';
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
           
        </div>
    );
};

export default Home;