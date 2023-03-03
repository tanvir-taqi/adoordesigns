import React from 'react';
import { Link } from 'react-router-dom';

const SingleProject = ({project}) => {
    const {_id, name,about,coverPicture,categories} = project;
    return (
        <div  className='flex w-full justify-center mb-6'>
            <div className=' md:w-3/4   p-2  bg-[#9696962a]  rounded-lg flex flex-col-reverse md:flex-row'>
                <div className='text-black text-start md:p-4 p-2 md:w-1/2'>
                    <h2 className='font-bold text-xl'>{name}</h2>
                     <div className='my-2 mb-6 md:mb-0 flex justify-start items-center'>
                       
                        {
                            categories.map((ct,i)=> <p className='mr-2 bg-primary text-black font-semibold text-xs px-3 py-2 rounded-full' key={i}>{ct}</p>)
                        }
                     </div>
                     <p className='my-3 text-sm font-medium hidden md:block'>{about.slice(0,150)}...</p>
                     <Link to={`/project/${_id}`} className='bg-secondary text-white px-3 py-1 rounded-full mt-6  my-2 md:mt-0'>Read Full Case Study</Link>
                </div>
                <div className='flex md:justify-end md:w-1/2'>
                    <img src={coverPicture} className='h-52 md:w-full w-[300px] rounded-lg' alt="" />
                </div>
            </div>
        </div>
    );
};

export default SingleProject;