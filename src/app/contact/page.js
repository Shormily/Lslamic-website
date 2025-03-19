import Image from 'next/image';
import React from 'react';
import Footer from '../component/shared/Footer/page';
import { Crete_Round } from "next/font/google";
const creteRound = Crete_Round({
  subsets: ["latin"],
  weight: ["400"], // Crete Round only has a weight of 400
  variable: "--font-crete-round",
});

const page = () => {
    return (
        <div className={`${creteRound.variable} font-serif`}>
            <div className='py-16'>
                <div className='mt-4'>
                <Image
                    src="/asset/post-list.jpg"
                    alt="Kalma"
                    width={4000}
                    height={4000}
                    className="w-2/4 h-2/4 p-2 border-8 border-gray-100 shadow-lg justify-center items-center m-auto"

                />
               
            </div>
            <h1 className='text-5xl text-center pt-8'> Contact US</h1>
            <div className='max-w-[1200px] m-auto'>
            <div className="lg:col-span-2 md:col-span-2 mx-3  pt-12  animate__animated animate__fadeInRight">
            <div className="flex gap-4">
              <div className="w-full mt-2  ">
                <label
                  className="block text-gray-950 font-medium text-[12px]  mb-2 "
                  placeholder="grid-password"
                  type="text"
                >
                  Subject :
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border  border-gray-200  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  name="subject"
                  placeholder=""
                  //   onChange={handleInputChange}
                  required
                />
              </div>
              <div className="w-full mt-2  ">
                <label
                  className="block text-gray-950 font-medium text-[12px]  mb-2 "
                  placeholder="grid-password"
                  type="text"
                >
                  Email Address :
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border  border-gray-200  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="email"
                  placeholder=""
                  id="recipientEmail"
                  //   onChange={handleInputChange}
                  name="email"
                  required
                />
              </div>
            </div>

            <div className="w-full mt-2 ">
              <label className="block text-gray-950 font-medium text-[12px]  mb-2 ">
                Phone Number :
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="number"
                name="phone"
                //   onChange={handleInputChange}
                required
              />
            </div>
            <div className="w-full mt-2 ">
              <label className="block text-gray-950 font-medium text-[12px]  mb-2">
                Tell us a bit about your project:
              </label>
              <textarea
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  py-3 pb-12 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="text"
                name="message"
                placeholder=""
                //   onChange={handleInputChange}
                required
              />
              <div className="flex mb-8 mt-4  m-auto ">
                <input
                  className="text-white bg-gradient-to-br  from-green-900 to-green-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-900 dark:focus:ring-green-900 font-semibold rounded-sm text-sm px-5 py-2.5 text-center mb-2 bg-green-900"
                  type="submit"
                  name="submit"
                  style={{
                    paddingRight: "55px",
                    paddingLeft: "55px",
                    color: "#fff",
                  }}
                />
              </div>
            </div>
          </div>  
                </div>
            </div>
           
<Footer/>
        </div>
    );
};

export default page;
