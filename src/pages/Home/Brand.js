import React from 'react';
import brand1 from '../../assets/brand1.svg'
import brand2 from '../../assets/brand2.svg'
import brand3 from '../../assets/brand3.svg'
import brand4 from '../../assets/brand4.svg'
import brand5 from '../../assets/brand5.svg'
import './Brand.css'

const brands = [
    {
        id: 1,
        brand: brand1
    },
    {
        id: 2,
        brand: brand2
    },
    {
        id: 3,
        brand: brand3
    },
    {
        id: 4,
        brand: brand5
    },
    {
        id: 5,
        brand: brand4
    }
    
]

const Brand = () => {
    return (
        <div>
            <div className='py-20 '>
                <div>
                    <div className='flex w-full px-3 justify-center'>
                        <h1 className='md:w-1/3 text-center text-secondary text-4xl font-extrabold brand-title'>Brands I've worked for </h1>
                    </div>
                    <div className='mt-12 items-center justify-center md:mx-16 lg:24 mx-4 gap-12 md:gap-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
                        {
                            brands.map(brand => <img key={brand.id} className={` ${brand.id === 5 && ' pb-5 pt-3'}`} src={brand.brand} alt="" />
                            )
                        }

                    </div>
                </div>


            </div>
        </div>
    );
};

export default Brand;