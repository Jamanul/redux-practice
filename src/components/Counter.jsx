import React, { useState } from 'react';

const Counter = ({handleDec,handleInc,counter}) => {
   
   
    return (
        <div className='flex items-center justify-center bg-slate-400 py-8 px-8'>
            <div className='flex flex-col gap-2'>
            <h2>Count : {counter}</h2>
           <div>
           <button onClick={handleInc} className='btn mr-6 btn-primary'>Inc</button>            
            <button onClick={handleDec} className='btn btn-warning'>Dec</button>  
           </div>
                </div>          
        </div>
    );
};

export default Counter;