import React, { useEffect } from 'react';
import service1 from '../../assets/services/service1.svg'
import service2 from '../../assets/services/service2.svg'
import service3 from '../../assets/services/service3.svg'
import service4 from '../../assets/services/service4.svg'
import service5 from '../../assets/services/service5.svg'
import './Services.css'


const services = [
    {
        id: 1,
        logo: service1,
        name: 'Brand Guidelines Designing',
        description: 'Defining and documenting brand standards.'
    },
    {
        id: 2,
        logo: service2,
        name: 'Illustrations',
        description: 'Defining and documenting brand standards.'
    },
    {
        id: 3,
        logo: service3,
        name: 'Marketing posts',
        description: 'Defining and documenting brand standards.'
    },
    {
        id: 4,
        logo: service4,
        name: 'UI UX Design',
        description: 'Defining and documenting brand standards.'
    },
    {
        id: 5,
        logo: service5,
        name: 'NFT',
        description: 'Defining and documenting brand standards.'
    }
]

const Services = () => {

    useEffect(()=>{
        window.scrollTo(0,0)
    })
    return (
        <div className='py-32 bg-primary text-secondary'>
            <div className=' '>
                <div className='flex w-full justify-center'>
                    <h1 className='md:w-1/4 text-center text-secondary text-4xl font-extrabold service-title'>My Services</h1>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-10 md:px-16 px-6 py-12 '>
                {
                    services.map(service => {
                        return (
                            <div key={service.id} className='bg-[#F8F8F8]  rounded-lg p-4'>
                                <img src={service.logo} alt="" className='py-2 mx-auto' />
                                <h1 className="py-2  text-center text-2xl font-semibold">{service.name}</h1>
                                <p className='py-2  text-center text-lg font-medium'>{service.description}</p>       
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Services;