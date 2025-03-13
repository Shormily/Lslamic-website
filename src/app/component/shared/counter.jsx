"use client"
import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <div className='flex flex-col items-center justify-center h-screen bg-gray-200'>
                <div className='bg-white shadow-md rounded-lg p-6 w-80'>
                    <h1 className='text-2xl font-bold text-center mb-4 text-gray-800'>
                        Simple Counter
                    </h1>
                    <div className='flex items-center justify-center space-x-4'>
                        <button
                            onClick={() => setCount(count - 1)}
                            className='px-4 py-2 bg-red-500 text-white rounded-lg hover-bg-green-300'
                        >
                           - 
                        </button>
                        <span className='text-3xl font-semibold text-gray-800'>{count}</span>
                        <button
                            onClick={() => setCount(count + 1)}
                            className='px-4 py-2 bg-red-500 text-white rounded-lg hover-bg-green-300'
                        >
                           + 
                        </button>
                    </div>
                </div>
            </div>  
        </>
    );
};

export default Counter;