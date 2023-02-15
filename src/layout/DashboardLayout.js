import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Header from '../pages/shared/Header/Header';

const DashboardLayout = () => {
    return (
        <div className='py-32'>
            
            <div className='w-full grid grid-cols-[1fr,6fr]'>
                <div className='bg-primary rounded-tr-full rounded-br-full justify-center flex flex-col items-end'>
                <NavLink className={({ isActive }) => (isActive ? 'mr-6 text-base font-bold   my-2 text-black' : 'mr-6 text-base font-semibold text-[#141414]  my-2')} to='/dashboard/addprojects'>Add Projects</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'mr-6 text-base font-bold   my-2 text-black' : 'mr-6 text-base font-semibold text-[#141414]  my-2')} to='/dashboard/myprojects'>My Projects</NavLink>

                </div>
                <div className=''>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;