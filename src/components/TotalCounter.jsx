import React from 'react';

const TotalCounter = ({TotalCounter}) => {
    return (
        <div>
            <div className='flex items-center justify-center bg-slate-400 py-8 px-8'>
            <div className='flex flex-col gap-2'>
            <h2>Total Count : {TotalCounter}</h2>
           <div>
           </div>
                </div>          
        </div>
        </div>
    );
};

export default TotalCounter;