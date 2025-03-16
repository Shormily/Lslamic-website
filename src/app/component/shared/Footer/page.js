import Image from 'next/image';
import React from 'react';
import { MdOutlineDocumentScanner } from "react-icons/md";
import { SiGmail } from "react-icons/si";
import { MdFormatListNumberedRtl } from "react-icons/md";

const Footer = () => {
    return (
        <>

            <div className="bg-gradient-to-r from-green-900 to-black"

            >
                {/* <div className="absolute inset-0 bg-gradient-to-r from-green-950 via-green-900/50 to-transparent"></div> */}
                <div className='max-w-[1500px] px-4 pt-12 m-auto justify-center items-center'>
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

                    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12 pt-12 mb-8 '>
                        <div className='text-white '>
                            <p className='text-4xl font-bold py-4 text-center'>Information</p>
                            <div className='py-5'>
                                <p className='text-justify'>Assalamu Alaikum (Peace be upon you) and welcome to a place of spiritual enrichment, community connection, and the pursuit of knowledge—welcome to Isteqbal Islamic Center.Isteqbal Islamic Center is dedicated to fostering a strong and vibrant Muslim community..</p>
                                <p className='py-4'>You will be notified when somthing new will be appear.</p>
                                <p className='py-4 text-center'>It's make feel happy.</p>
                            </div>
                           
                           
                           

                        </div>

                        <div className='text-white '>
                            <p className='text-4xl font-bold py-4 text-center'>Salat  Obligation</p>
                            <div className='py-5'>
                            <div className='flex gap-4 items-center m-auto'>
                                <Image src="/asset/Perfume.jpg" alt="Logo" width={80} height={20} />
                                <p className='text-[18px]'>Islamic center Youth

                                    participate</p>
                            </div>
                            <hr className='my-4' />
                            <div className='flex gap-4 items-center m-auto'>
                                <Image src="/asset/f.jpg" alt="Logo" width={80} height={20} />
                                <p className='text-[18px]'>Islamic center Youth

                                    participate</p>
                            </div>
                            </div>
                           
                        </div>
                        <div className='text-white '>
                            <p className='text-4xl font-bold py-4 text-center'>Latest News</p>
                            <div className='py-5'>
                                <p className='text-justify'>Islamic Center is a vibrant and welcoming community hub that serves as a focal point for Muslims seeking spiritual growth, community engagement, and cultural enrichment.</p>
                                <div className='py-5'>
                                <p className='flex gap-4'> <MdOutlineDocumentScanner className='text-yellow-600' size={25} />209, Building - Avenue-02, United states</p>
                                <p className='flex gap-4 py-3'><SiGmail className='text-yellow-600 ' size={23} /> mstshormilyrais@gmail.com</p>
                                <p className='flex gap-4'> <MdFormatListNumberedRtl className='text-yellow-600' size={28} /> + 1 315 - 000 - 6565</p></div>
                            </div>
                           
                        </div>
                    </div>
                    <hr />
                    <p className="text-white  text-center py-8">
                        Copyright © Secondary School. All rights reserved by shormily Raisa
                    </p>
                </div>

            </div>
        </>
    );
};

export default Footer;
