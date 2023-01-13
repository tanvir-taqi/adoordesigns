import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.svg'

const Header = () => {
    const [display, setDisplay] = useState(false)
    return (
        <div className='' >
            <div className={`fixed top-0 bg-[#FFDB00] z-50 w-full  header py-4 header-container  flex flex-col md:flex-row justify-between items-center`}>
                <div className=" flex justify-around items-center w-full  md:w-1/6">

                    {/* header logo and name  */}

                    <Link to='/' >
                        <img src={logo} alt="" />
                    </Link>

                    <button className='block md:hidden' onClick={() => setDisplay(!display)}>A</button>
                </div>
                {/* header links  */}
                <div className={`nav-menu flex  md:items-center flex-col md:flex-row   ${display ? 'flex' : 'hidden md:flex'}`} >
                    <div onClick={() => setDisplay(false)} className="nav-menu-link items-start flex flex-col md:flex-row py-12 md:py-1 ">
                        <NavLink className={({ isActive }) => (isActive ? 'mr-4 text-base font-bold   my-2 text-black' : 'mr-4 text-base font-semibold text-[#141414]  my-2')} to='/'>Home</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? 'mr-4 text-base font-bold   my-2 text-black' : 'mr-4 text-base font-semibold text-[#141414]  my-2')} to='/services'>Services</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? 'mr-4 text-base font-bold   my-2 text-black' : 'mr-4 text-base font-semibold text-[#141414]  my-2')} to='/projects'>Projects</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? 'mr-4 text-sm font-medium bg-secondary rounded-2xl px-4 py-1 my-1 text-primary' : 'mr-4 text-sm font-medium bg-secondary rounded-2xl px-4 py-1 my-1 text-white')} to='/contact'>Contact</NavLink>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Header;