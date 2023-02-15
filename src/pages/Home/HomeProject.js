import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SingleProject from '../../components/SingleProject';

const HomeProject = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/projects')
            .then(res => res.json())
            .then(data => {
                setProjects(data)
            })
    }, [])
    return (
        <div className='py-12'>
            <div>
                <div className='flex w-full justify-center mb-6'>
                    <h1 className='md:w-1/3 text-center text-secondary text-4xl font-extrabold brand-title'>Recent Projects</h1>
                </div>
                <div className='grid grid-cols-1 gap-2 justify-center items-center'>
                    {
                        projects.map(project=> <SingleProject
                        key={project._id}
                        project={project}
                        ></SingleProject>)
                    }
                </div>
                <Link to='/projects/all'>
                    <button className='text-black underline border-none outline-none font-bold text-lg'>See More</button>
                </Link>

            </div>

        </div>
    );
};

export default HomeProject;