import React from 'react';

const Spinning = () => {
    return (
        <div>
             <div className='py-40 text-center'>
            <div className="flex items-center justify-center ">
                <div className="w-16 h-16 border-b-4 border-primary rounded-full animate-spin"></div>
            </div>
        </div>
        </div>
    );
};

export default Spinning;