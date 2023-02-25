import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import footerlogo from '../../../assets/footerlogo.svg'
import { FaBehance, FaDribbble, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    const openInProject = url => {
        // 👇️ setting target to _blank with window.open
        window.open(url, '_blank', 'noopener,noreferrer');
      };
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
                            <li><NavLink className={({ isActive }) => (isActive ? ' text-base font-medium   my-2 ' : ' text-base font-medium  my-2')} to='/projects/all'>Projects</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <p className='mx-3 cursor-pointer' onClick={()=>openInProject('https://www.facebook.com/adoordesigns/')} ><FaFacebook></FaFacebook></p>
                    <p className='mx-3 cursor-pointer' onClick={()=>openInProject('https://www.instagram.com/adoor.designs/')} ><FaInstagram></FaInstagram></p>
                    <p className='mx-3 cursor-pointer' onClick={()=>openInProject('https://www.behance.net/alaminador')} ><FaBehance></FaBehance></p>
                    <p className='mx-3 cursor-pointer' onClick={()=>openInProject('https://dribbble.com/adoor')} ><FaDribbble></FaDribbble></p>
                    <p className='mx-3 cursor-pointer' onClick={()=>openInProject('https://www.linkedin.com/in/adoordesigns/')} ><FaLinkedin></FaLinkedin></p>
                </div>
            </div>
            <p className='text-white text-center text-xs'>© 2023 adoordesigns </p>
        </div>
    );
};

export default Footer;