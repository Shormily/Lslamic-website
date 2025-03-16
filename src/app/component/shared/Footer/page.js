import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <>

            <div className="bg-gradient-to-r from-green-900 to-black"
               
            >
                {/* <div className="absolute inset-0 bg-gradient-to-r from-green-950 via-green-900/50 to-transparent"></div> */}
                <div className='max-w-[1500px] py-12 m-auto justify-center items-center'>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 my-8">
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-12">
                            <div className="text-yellow-400">
                                <Image src="/asset/icon.png" alt="Logo" width={100} height={100} />
                            </div>
                            <div className="text-center sm:text-left text-white">
                                <p className="text-[18px]  mt-2">Become a Part of Our Community</p>
                                <p className="font-bold text-4xl">Inspired? Join Us Right Now!</p>
                            </div>
                        </div>

                        {/* Button aligned to the right on larger screens */}
                        <div className="flex justify-center md:justify-end">
                        <button type="button" class="text-white bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 hover:bg-gradient-to-br shadow-lg shadow-yellow-500/50 dark:shadow-lg dark:shadow-yellow-800/80 font-medium rounded-full text-md px-5  text-center me-2 mb-2 text-[18px] my-3">Join Our Community</button>
                        </div>
                    </div>
                    <hr />
                    
                    <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-12 pt-12 mb-8'>
                        <div className='text-white '>
                            <p className='text-4xl font-bold py-4 '>Information</p>
                            <p className=''>Assalamu Alaikum (Peace be upon you) and welcome to a place of spiritual enrichment, community connection, and the pursuit of knowledge—welcome to Isteqbal Islamic Center.Isteqbal Islamic Center is dedicated to fostering a strong and vibrant Muslim community.</p>
                        </div>
                        <div>
                        <div className='text-white text-center'>
                            <p className='text-4xl font-bold py-4'>NewerList</p>
                            <p>Home</p>
                            <p>Event</p>
                            <p>Service</p>
                            <p>Shop</p>
                            <p>Contact</p>
                        </div>   
                        </div>
                        <div className='text-white '>
                            <p className='text-4xl font-bold py-4 '>Salat  Obligation</p>
                            <p className=''>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,</p>
                        </div>
                        <div className='text-white text-center'>
                            <p className='text-4xl font-bold py-4 '>Information</p>
                            <p className=''>Assalamu Alaikum (Peace be upon you) and welcome to a place of spiritual enrichment, community connection, and the pursuit of knowledge—welcome to Isteqbal Islamic Center.Isteqbal Islamic Center is dedicated to fostering a strong and vibrant Muslim community.</p>
                        </div>
                    </div>
                    <hr /> 
                </div>

            </div>
        </>
    );
};

export default Footer;
