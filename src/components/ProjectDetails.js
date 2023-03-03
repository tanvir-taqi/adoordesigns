import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { useLoaderData } from 'react-router-dom';
import ContactForm from '../pages/Contacts/ContactForm';

const ProjectDetails = () => {
    const project = useLoaderData()
    const {moreDetails, name, about, clientName, year, coverPicture, categories, picture1, picture2, picture3, picture4, picture5, picture6 } = project

    const openInProject = url => {
        // 👇️ setting target to _blank with window.open
        window.open(url, '_blank', 'noopener,noreferrer');
      };
    return (
        <div className='py-24'>
            <div>

                <img src={coverPicture} className='bg-transparent w-full h-80 ' alt="" />
                <div className=' flex justify-center items-center w-full  '>

                    <div className='flex flex-col justify-center items-center md:w-2/3 my-6 '>
                        <h1 className='text-black font-bold text-3xl text-center my-3 '>{name}</h1>

                        <div className='my-2 flex justify-start items-center'>
                           
                            {
                                categories.map((ct, i) => <p className='mr-2 bg-primary text-black font-semibold text-xs px-3 py-2 rounded-full' key={i}>{ct}</p>)
                            }
                        </div>
                        <div className='my-4 md:w-1/2 flex items-center justify-between text-lg  px-5 py-1 rounded-2xl  bg-[#9696962a]'>
                            <p className='text-secondary font-bold'>Client: <span className='text-[#1e1e1e] font-medium'>{clientName}</span> </p>
                            <p className='text-secondary font-bold'>year: <span className='text-[#1e1e1e] font-medium'>{year}</span></p>
                        </div>

                        <p className='text-justify text-black text-sm my-6 px-3'>{about.slice(0, 500)}</p>
                        {/* <div className='grid grid-cols-1 justify-center items-center md:w-full'>
                            <div className='grid grid-cols-[1fr,1fr] '>
                                {
                                    picture1 ? <PhotoProvider
                                        speed={() => 800}
                                        easing={(type) => (type === 1 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
                                    >
                                        <PhotoView src={picture1} >
                                            <img src={picture1} className='h-full w-full' alt="" />
                                        </PhotoView>
                                    </PhotoProvider > : ""
                                }

                                {
                                    picture2 ? <PhotoProvider
                                        speed={() => 800}
                                        easing={(type) => (type === 1 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
                                    >
                                        <PhotoView src={picture2} >
                                            <img src={picture2} className='h-full w-full' alt="" />
                                        </PhotoView>
                                    </PhotoProvider > : ""
                                }
                            </div>
                            <div className='grid grid-cols-1'>
                                {
                                    picture3 ? <PhotoProvider
                                        speed={() => 800}
                                        easing={(type) => (type === 1 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
                                    >
                                        <PhotoView src={picture3} >
                                            <img src={picture3} className='h-full w-full' alt="" />
                                        </PhotoView>
                                    </PhotoProvider > : ""
                                }
                            </div>
                            <div className='grid grid-cols-[2fr,1fr]'>
                                {
                                    picture4 ? <PhotoProvider
                                        speed={() => 800}
                                        easing={(type) => (type === 1 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
                                    >
                                        <PhotoView src={picture4} >
                                            <img src={picture4} className='h-full w-full' alt="" />
                                        </PhotoView>
                                    </PhotoProvider > : ""
                                }
                                {
                                    picture5 ? <PhotoProvider
                                        speed={() => 800}
                                        easing={(type) => (type === 1 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
                                    >
                                        <PhotoView src={picture5} >
                                            <img src={picture5} className='h-full w-full' alt="" />
                                        </PhotoView>
                                    </PhotoProvider > : ""
                                }

                            </div>
                            <div className='grid grid-cols-1'>
                                {
                                    picture6 ? <PhotoProvider
                                        speed={() => 800}
                                        easing={(type) => (type === 1 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
                                    >
                                        <PhotoView src={picture6} >
                                            <img src={picture6} className='h-full w-full' alt="" />
                                        </PhotoView>
                                    </PhotoProvider > : ""
                                }
                            </div>
                        </div> */}
                        <div className="grid grid-cols-1 justify-center items-center md:w-full">
                            <div>
                            {
                                    picture1 ? <PhotoProvider
                                        speed={() => 800}
                                        easing={(type) => (type === 1 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
                                    >
                                        <PhotoView src={picture1} >
                                            <img src={picture1} className='h-full w-full' alt="" />
                                        </PhotoView>
                                    </PhotoProvider > : ""
                                }
                            </div>
                            <div>
                            {
                                    picture2 ? <PhotoProvider
                                        speed={() => 800}
                                        easing={(type) => (type === 1 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
                                    >
                                        <PhotoView src={picture2} >
                                            <img src={picture2} className='h-full w-full' alt="" />
                                        </PhotoView>
                                    </PhotoProvider > : ""
                                }
                            </div>
                            <div>
                            {
                                    picture3 ? <PhotoProvider
                                        speed={() => 800}
                                        easing={(type) => (type === 1 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
                                    >
                                        <PhotoView src={picture3} >
                                            <img src={picture3} className='h-full w-full' alt="" />
                                        </PhotoView>
                                    </PhotoProvider > : ""
                                }
                            </div>
                            <div>
                            {
                                    picture4 ? <PhotoProvider
                                        speed={() => 800}
                                        easing={(type) => (type === 1 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
                                    >
                                        <PhotoView src={picture4} >
                                            <img src={picture4} className='h-full w-full' alt="" />
                                        </PhotoView>
                                    </PhotoProvider > : ""
                                }
                            </div>
                            <div>
                            {
                                    picture5 ? <PhotoProvider
                                        speed={() => 800}
                                        easing={(type) => (type === 1 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
                                    >
                                        <PhotoView src={picture5} >
                                            <img src={picture5} className='h-full w-full' alt="" />
                                        </PhotoView>
                                    </PhotoProvider > : ""
                                }
                            </div>
                            <div>
                            {
                                    picture6 ? <PhotoProvider
                                        speed={() => 800}
                                        easing={(type) => (type === 1 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
                                    >
                                        <PhotoView src={picture6} >
                                            <img src={picture6} className='h-full w-full' alt="" />
                                        </PhotoView>
                                    </PhotoProvider > : ""
                                }
                            </div>
                        </div>
                        {
                            moreDetails && <div className='my-12  '>
                            <p onClick={()=>openInProject(moreDetails)} className='text-secondary bg-primary py-1 px-4 rounded-lg font-semibold text-lg underline cursor-pointer'> See Full Project</p>
                        </div>
                        }
                        
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