import Image from 'next/image';
import React from 'react';

const History = () => {
    return (
        <>
            <section><div className='grid md:grid-cols-2 sm:grid-cols-1 gap-24 max-w-[1500px] mx-auto'>
                           <div>
                               <Image src="/asset/slide3.png" alt="" width={4000} height={4000} className="md:w-3/4 sm:w-40 h-4/4 justify-center items-center md:m-1 sm:m-auto" />
                           </div>
                           <div className='justify-center items-center m-auto py-2'>
                               <p className='text-yellow-500 text-2xl '>Welcome To Islam</p>
                               <h1 className='text-5xl mt-8 font-bold'>History of islam</h1>
                               <p className='text-[18px] text-gray-600 py-4'>
                               Islam had a tremendous impact on world history as well as the present-day, Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
                               </p>
                               <p className='text-[18px] text-gray-600'>
                               The larger community turns to us as a trusted source of accurate information on Islam and Muslims. Our doors are open to our neighbors.
                               </p>
                               <div className='grid grid-cols-2 gap-12 my-8'>
                                   <div >
                                       
                                       <button type="button" class="text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-yellow-500/50 dark:shadow-lg dark:shadow-yellow-800/80 font-medium rounded-lg text-md px-5 py-3 text-center me-2 mb-2 text-[18px] my-3 ">More About Us</button>
                                   </div>
                                
           
                               </div>
           
           
                           </div>
                       </div></section> 
        </>
    );
};

export default History;
