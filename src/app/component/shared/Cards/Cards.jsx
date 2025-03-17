import Image from 'next/image';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const Cards = () => {
    const data = [
        {
            _id: 1,
            date: "AUG 04, 2018",
            topic: "MATERIAL ENGINEERING",
            title: "Commercial Ministry to Hike Import Duty on Aluminium",
            des: "The commerce ministry is in favour of hiking import duty on aluminium…",
            img: "/asset/eid.webp",
        },
        {
            _id: 2,
            date: "AUG 04, 2018",
            topic: "POWER AND ENERGY",
            title: "Steels’ Safety: India Appeals Against WTO’s Panel Ruling",
            des: "New Delhi: India has challenged the WTO dispute panel's ruling that …",
            img: "/asset/Perfume.jpg",
        },
        {
            _id: 3,
            date: "AUG 04, 2018",
            topic: "POWER AND ENERGY",
            title: "Steels’ Safety: India Appeals Against WTO’s Panel Ruling",
            des: "New Delhi: India has challenged the WTO dispute panel's ruling that …",
            img: "/asset/okey.jpg",
        },
        {
            _id: 3,
            date: "AUG 04, 2018",
            topic: "POWER AND ENERGY",
            title: "Steels’ Safety: India Appeals Against WTO’s Panel Ruling",
            des: "New Delhi: India has challenged the WTO dispute panel's ruling that …",
            img: "/asset/lam.jpg",
        },
    ];
    return (
        <>
            <div className="relative w-full py-24 px-2 md:bg-[url('/asset/part3.jpg')] bg-cover bg-center bg-no-repeat ">
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 items-center justify-center m-auto gap-8 max-w-[1500px]'>
            {data.map((d) => (
                <div className="py-10 ">
                    <div className="shadow-lg pb-7 bg-amber-50  transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30">
                        <Image src={d.img} alt="" width={4000} height={4000} className='w-full h-64' />
                        <div className="px-5 ">
                            <p className="font-bold flex justify-between text-xs my-5">
                                <span className="text-[#B6B6B6]">{d.date}</span>
                                <span className="text-[#D0011C]">{d.topic}</span>
                            </p>
                            <h3 className="text-xl font-bold my-5">{d.title}</h3>
                            <hr />
                            <p className="text-[#878787] my-5 text-sm " >{d.des}</p>
                        </div>
                        <div className="h-14 w-14  rounded-full border-2 flex justify-center items-center border-[#D0011C] mx-auto  bg-gray-100 cursor-pointer">
                            <BsArrowRight className="text-[#D0011C] text-xl" />
                        </div>
                    </div>
                </div>
            ))}
            </div>
            </div>
           
        </>
    );
};

export default Cards;