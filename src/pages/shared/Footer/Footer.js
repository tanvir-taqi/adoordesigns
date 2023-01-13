import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import footerlogo from '../../../assets/footerlogo.svg'

const Footer = () => {
    return (
        <div className='w-full pb-8 bg-secondary'>
        <div className='footer-container h-[272px] grid grid-cols-1 md:grid-cols-2 w-full bg-secondary text-primary'>
            <div className='flex flex-col md:flex-row justify-around items-center'>
                <Link to='/' >
                   <img src={footerlogo} alt="" />
                </Link>
                <div className="footer-menu">
                        <ul className='list-none text-left'>
                      <li><NavLink className={({ isActive }) => (isActive ? ' text-base font-medium   my-2 ' : ' text-base font-medium  my-2')} to='/'>Home</NavLink></li>
                      <li><NavLink className={({ isActive }) => (isActive ? ' text-base font-medium   my-2 ' : ' text-base font-medium  my-2')} to='/contact'>Contact</NavLink></li>
                      <li><NavLink className={({ isActive }) => (isActive ? ' text-base font-medium   my-2 ' : ' text-base font-medium  my-2')} to='/projects'>Projects</NavLink></li>      
                        </ul>
                </div>
            </div>
            <div className='flex justify-center items-center'>
            <h1>Social link</h1>
            </div>
        </div>
            <p className='text-white text-center text-xs'>© 2023 adoordesigns </p>
        </div>
    );
};

export default Footer;