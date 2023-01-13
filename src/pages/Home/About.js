import React from 'react';

const About = () => {
    return (
        <div>
            <div className='w-full bg-primary py-20 text-secondary'>

                <div className='grid grid-cols-1 md:grid-cols-2 md:mx-12 mx-3 '>
                    <div>
                        <h3 className='text-2xl font-semibold '>About</h3>
                    </div>
                    <div className='md:w-2/3'>
                        <p className='text-sm text-start'>Al Ador is a full-stack designer who helps brands to stand out from the crowd and be timeless. He designs logos, illustrations, social media posts, and products that serve the users to solve their problems.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;