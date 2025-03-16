import AboutUS from '@/app/about/page';
import EventBanner from '@/app/EventBanner/EventBanner';
import Image from 'next/image';
import React from 'react';
import Cards from '../Cards/Cards';

const History = () => {
    const prayerTimes = [
        { name: "FAJAR", time: "5:10 am" },
        { name: "SUNRISE", time: "6:30 am" },
        { name: "ZUHR", time: "12:36 pm" },
        { name: "ASR", time: "4:15 pm" },
        { name: "MAGHRIB", time: "6:15 pm" },
        { name: "ISHA’A", time: "4:10 am" },
    ];
    return (
        <><div className='px-4'>
 <section>
                            <div className="text-white bg-gradient-to-r from-green-950 to-green-900  max-w-[1500px] mx-auto w-full text-white rounded-[30px]  md:py-8 shadow-lg relative">
                                <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-center py-4">
                                    {prayerTimes.map((prayer, index) => (
                                        <div key={index} className="flex flex-col items-center">
                                            <p className="font-serif text-lg md:text-2xl font-bold">{prayer.name}</p>
                                            <p className="text-sm md:text-base font-semibold">{prayer.time}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
            <section>
                <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-24 max-w-[1500px] mx-auto py-12'>
                          
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
                    <div>
                               <Image src="/asset/slide1.webp" alt="" width={4000} height={4000} className="md:w-4/6 sm:w-40  justify-center items-center  m-auto" />
                           </div>
                </div></section>
        </div>
             
               
           
            {/* <EventBanner/> */}
            <Cards />
            <AboutUS />
        </>
    );
};

export default History;
