import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.svg'
import { AuthContext } from '../../../UserContext/UserContext';
import { FaBars } from 'react-icons/fa';


const Header = () => {
    const [display, setDisplay] = useState(false)
    const { user , logOut} = useContext(AuthContext)
    const handleSignOut=()=>{
        
        logOut()
        .then(()=>{
            alert("signed out")
        })
        .catch(error => console.log(error))
    }
    return (
        <div className='' >
            <div className={`fixed top-0 bg-[#FFDB00] z-50 w-full   py-4  flex flex-col md:flex-row justify-between items-center `}>
                <div className=" flex justify-between px-6 md:justify-around items-center w-full  md:w-1/6">

                    {/* header logo and name  */}

                    <Link to='/' >
                        <img src={logo} alt="" />
                    </Link>

                    <button className='block md:hidden text-black font-bold' onClick={() => setDisplay(!display)}><FaBars></FaBars></button>
                </div>
                {/* header links  */}
                <div className={`nav-menu flex  md:items-center flex-col md:flex-row   ${display ? 'flex' : 'hidden md:flex'}`} >
                    <div onClick={() => setDisplay(false)} className=" items-center flex flex-col md:flex-row py-12 md:py-1 ">
                        <NavLink className={({ isActive }) => (isActive ? 'mr-6 text-base font-bold   my-2 text-black' : 'mr-6 text-base font-normal text-[#141414]  my-2')} to='/'>Home</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? 'mr-6 text-base font-bold   my-2 text-black' : 'mr-6 text-base font-normal text-[#141414]  my-2')} to='/services'>Services</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? 'mr-6 text-base font-bold   my-2 text-black' : 'mr-6 text-base font-normal text-[#141414]  my-2')} to={`/projects/${'all'}`}>Projects</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? 'mr-6 text-base font-bold   my-2 text-black' : 'mr-6 text-sm font-medium bg-secondary rounded-2xl px-5 py-1 my-1 text-white')} to='/contact'>Contact</NavLink>
                        {
                            user && <>
                                <NavLink className={({ isActive }) => (isActive ? 'mr-6 text-sm font-medium bg-secondary rounded-2xl px-4 py-1 my-1 text-primary' : 'mr-6 text-sm font-medium bg-secondary rounded-2xl px-4 py-1 my-1 text-white')} to='/dashboard'>Dashboard</NavLink>
                                <button className='mr-6 text-sm font-medium bg-rose-900 rounded-2xl px-4 py-1 my-1 text-white' onClick={handleSignOut} >Sign Out</button>

                            </>

                        }
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Header;