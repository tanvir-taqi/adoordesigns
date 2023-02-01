import React, { useEffect, useState } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import SingleProject from '../../components/SingleProject';

const Projects = () => {
    // const [projects, setProjects] = useState([])
    // useEffect(() => {
    //     fetch('http://localhost:5000/allprojects')
    //         .then(res => res.json())
    //         .then(data => {
    //             setProjects(data)
    //         })
    // }, [])
    const projects = useLoaderData()
    return (
        <div className='py-32'>
            <div>
                <div className='flex w-full justify-center mb-6'>
                    <h1 className='md:w-1/3 text-center text-secondary text-4xl font-extrabold brand-title'>Recent Projects</h1>
                </div>
                <div>
                    <NavLink to={`/projects/${'all'}`} className={({ isActive }) => (isActive ? 'mx-2 text-base font-bold text-black px-3 py-1 rounded-full bg-primary' : 'mx-2 text-base font-medium text-secondary')} >All</NavLink>
                    <NavLink to={`/projects/${'Branding'}`} className={({ isActive }) => (isActive ? 'mx-2 text-base font-bold text-black px-3 py-1 rounded-full bg-primary' : 'mx-2 text-base font-medium text-secondary')} >Branding</NavLink>
                    <NavLink to={`/projects/${'Marketing'}`} className={({ isActive }) => (isActive ? 'mx-2 text-base font-bold text-black px-3 py-1 rounded-full bg-primary' : 'mx-2 text-base font-medium text-secondary')} >Marketing</NavLink>
                    <NavLink to={`/projects/${'UIUX'}`} className={({ isActive }) => (isActive ? 'mx-2 text-base font-bold text-black px-3 py-1 rounded-full bg-primary' : 'mx-2 text-base font-medium text-secondary')} >UI/UX</NavLink>
                    <NavLink to={`/projects/${'NFT'}`} className={({ isActive }) => (isActive ? 'mx-2 text-base font-bold text-black px-3 py-1 rounded-full bg-primary' : 'mx-2 text-base font-medium text-secondary')} >NFT</NavLink>
                </div>
                <div className='grid grid-cols-1  justify-center items-center'>
                    {
                        projects.map(project=> <SingleProject
                        key={project._id}
                        project={project}
                        ></SingleProject>)
                    }
                </div>

            </div>

        </div>
    );
};

export default Projects;