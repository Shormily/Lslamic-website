import Image from 'next/image';
import React from 'react';
import { MdOutlineWifiCalling3 } from "react-icons/md";

const AboutUS = () => {
    return (
        <>
            {/* About us section */}
            <section><div className='grid md:grid-cols-2 sm:grid-cols-1 gap-24 max-w-[1500px] py-16 mx-auto'>
                <div>
                    <Image src="/asset/slide3.png" alt="" width={4000} height={4000} className="md:w-3/4 sm:w-40 h-4/4 justify-center items-center md:m-1 sm:m-auto" />
                </div>
                <div className='justify-center items-center m-auto py-2'>
                    <p className='text-yellow-500 text-2xl '>About Us</p>
                    <h1 className='text-5xl mt-8 font-bold'>We Can Work Together For Create a Better Future..</h1>
                    <p className='text-[18px] text-gray-600 py-4'>
                        Assalamu Alaikum (Peace be upon you) and welcome to a place of spiritual enrichment, community connection, and the pursuit of knowledge—welcome to Isteqbal Islamic Center.Isteqbal Islamic Center is dedicated to fostering a strong and vibrant Muslim community.
                    </p>
                    <p className='text-[18px] text-gray-600'>
                        At Isteqbal, we strive to create an inclusive and nurturing environment for Muslims from all walks of life. Our center is a sanctuary for those seeking a deeper connection.
                    </p>
                    <div className='grid grid-cols-2 gap-12 my-8'>
                        <div >
                            
                            <button type="button" class="text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-yellow-500/50 dark:shadow-lg dark:shadow-yellow-800/80 font-medium rounded-lg text-md px-5 py-3 text-center me-2 mb-2 text-[18px] my-3 ">More About Us</button>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                            <div className="text-yellow-400">
                                <MdOutlineWifiCalling3 size={60} />
                            </div>
                            <div className="text-center ">
                                <p className="text-xl sm:text-2xl">Call Us</p>
                                <p className="font-bold text-lg">+(684) 555-0102</p>
                            </div>
                        </div>

                    </div>


                </div>
            </div></section>
        </>


    );
};

export default AboutUS;
