import React from 'react';

const SpinningImage = () => {
    return (
        <div>
             <div className='text-center'>
            <div className="flex items-center justify-center ">
                <div className="w-8 h-8 border-b-4 border-t-8 border-white rounded-full animate-spin"></div>
            </div>
        </div>
        </div>
    );
};

export default SpinningImage;