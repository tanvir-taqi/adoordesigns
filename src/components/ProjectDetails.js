import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { useLoaderData } from 'react-router-dom';
import ContactForm from '../pages/Contacts/ContactForm';

const ProjectDetails = () => {
    const project = useLoaderData()
    const { name, about, coverPicture,categories, picture1, picture2, picture3, picture4, picture5, picture6 } = project
    return (
        <div className=''>
            <div>
               
                <img src={coverPicture} className='bg-transparent w-full h-80 ' alt="" />
                <div className=' flex justify-center items-center w-full  '>

                    <div className='flex flex-col justify-center items-center md:w-2/3 my-6 '>
                        <h1 className='text-black font-bold text-3xl text-center my-3 '>{name}</h1>
                        <div className='my-2 flex justify-start items-center'>
                        <p className='mr-2 bg-primary text-black font-semibold text-xs  px-3 py-2 rounded-full'>Logo</p>
                        {
                            categories.map((ct,i)=> <p className='mr-2 bg-primary text-black font-semibold text-xs px-3 py-2 rounded-full' key={i}>{ct}</p>)
                        }
                     </div>
                        <p className='text-justify text-black text-sm my-3 px-3'>{about.slice(0, 500)}</p>
                        <div className='grid grid-cols-1 justify-center items-center md:w-2/3'>
                            <div className='grid grid-cols-[1fr,1fr] '>
                                <PhotoProvider
                                    speed={() => 800}
                                    easing={(type) => (type === 1 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
                                >
                                    <PhotoView src={picture1} >
                                        <img src={picture1} className='h-48 w-full' alt="" />
                                    </PhotoView>
                                </PhotoProvider >
                                <PhotoProvider speed={() => 800}
                                    easing={(type) => (type === 1 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
                                >
                                    <PhotoView src={picture1} >
                                        <img src={picture1} className='h-48 w-full' alt="" />
                                    </PhotoView>
                                </PhotoProvider>
                            </div>
                            <div className='grid grid-cols-1'>
                                <PhotoProvider speed={() => 800}
                                    easing={(type) => (type === 1 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
                                >
                                    <PhotoView src={picture1} >
                                        <img src={picture1} className='h-48 w-full' alt="" />
                                    </PhotoView>
                                </PhotoProvider>
                            </div>
                            <div className='grid grid-cols-[2fr,1fr]'>
                                <PhotoProvider speed={() => 800}
                                    easing={(type) => (type === 1 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
                                >
                                    <PhotoView src={picture1} >
                                        <img src={picture1} className='h-48 w-full' alt="" />
                                    </PhotoView>
                                </PhotoProvider>
                                <PhotoProvider speed={() => 800}
                                    easing={(type) => (type === 1 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
                                >
                                    <PhotoView src={picture1} >
                                        <img src={picture1} className='h-48 w-full' alt="" />
                                    </PhotoView>
                                </PhotoProvider>

                            </div>
                            <div className='grid grid-cols-1'>
                                <PhotoProvider speed={() => 800}
                                    easing={(type) => (type === 1 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
                                >
                                    <PhotoView src={picture1} >
                                        <img src={picture1} className='h-72 w-full' alt="" />
                                    </PhotoView>
                                </PhotoProvider>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div>
            <div className='flex justify-center items-center w-full my-12'>
                <div className='md:w-1/2'>
                    <ContactForm></ContactForm>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ProjectDetails;