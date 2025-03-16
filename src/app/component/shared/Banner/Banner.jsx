"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { Crete_Round } from "next/font/google";
import AboutUS from "@/app/about/page";
import History from "../History/page";

const creteRound = Crete_Round({
  subsets: ["latin"],
  weight: ["400"], // Crete Round only has a weight of 400
  variable: "--font-crete-round",
});


const Banner = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);
  const slidesData = [
    { imgSrc: "/asset/slide2.webp" },
    { imgSrc: "/asset/al.png" },
    { imgSrc: "/asset/slide3.webp" },
    { imgSrc: "/asset/slide4.webp" },
  ];
  return (
    <div className={`${creteRound.variable} font-serif`}>

      <div className="relative w-full sm:h-screen  md:h-[750px] bg-green-950 md:bg-[url('/asset/banner-bg.webp')] bg-cover bg-center bg-no-repeat">

        <div className="md:py-16 sm:py-2 px-2">
          <Image src="/asset/kalma.png" alt="Kalma" width={400} height={100} className="text-center items-center m-auto py-2 h-24 " />
          <div className="max-w-[1500px] m-auto flex justify-center items-center">

            <Swiper
              modules={[Navigation, Autoplay, EffectFade]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              onSwiper={setSwiperInstance} // Save Swiper instance for updating refs
              className="py-2"

            >

              <SwiperSlide>
                <div className="grid md:grid-cols-2 sm:grid-cols-1 md:gap-24 sm:gap-2  px-4">
                  <div className="mx-12 ">
                    <Image src="/asset/slide2.webp" alt="" width={300} height={300} className="md:w-3/4 sm:w-40 h-4/4 justify-center items-center md:m-1 sm:m-auto" /></div>

                  <div className="justify-center items-center m-auto md:text-justify sm:text-center">
                    <Image src="/asset/text-img.webp" alt="Kalma" width={1500} height={1500} className="w-64 h-16 justify-center items-center md:m-1 sm:m-auto" />
                    <p className="text-yellow-500 font-bold text-5xl py-4">O’ Allah We Believe</p>
                    <h2 className="text-white font-semibold text-4xl">That Only You Can
                      <br />
                      <span className="my-3"> Save Us</span>
                    </h2>
                    <button type="button" class="text-white bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-yellow-500/50 dark:shadow-lg dark:shadow-yellow-800/80 font-medium rounded-lg text-md px-5 py-1.5 text-center me-2 mb-2 text-[18px] my-3">Learn more</button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="grid md:grid-cols-2 sm:grid-cols-1 md:gap-24 sm:gap-2  px-4">
                  <div className="mx-12 ">
                    <Image src="/asset/al.png" alt="" width={300} height={300} className="md:w-3/4 h-3/4 sm:w-40 justify-center items-center md:m-1 sm:m-auto" /></div>

                  <div className="justify-center items-center m-auto md:text-justify sm:text-center">
                    <Image src="/asset/text-img.webp" alt="Kalma" width={1500} height={1500} className="w-64 h-16 justify-center items-center md:m-1 sm:m-auto" />
                    <p className="text-yellow-500 font-bold text-5xl py-4">O’ Allah We Believe</p>
                    <h2 className="text-white font-semibold text-4xl">That Only You Can
                      <br />
                      <span className="my-3"> Save Us</span>
                    </h2>
                    <button type="button" class="text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-yellow-500/50 dark:shadow-lg dark:shadow-yellow-800/80 font-medium rounded-lg text-md px-5 py-1.5 text-center me-2 mb-2 text-[18px] my-3">Learn more</button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="grid md:grid-cols-2 sm:grid-cols-1 md:gap-24 sm:gap-2 px-4">
                  <div className="mx-12 ">  <Image src="/asset/slide3.webp" alt="" width={300} height={300} className="md:w-2/4 sm:w-40 justify-center items-center md:m-1 sm:m-auto" /></div>

                  <div className="justify-center items-center m-auto md:text-justify sm:text-center">
                    <Image src="/asset/text-img.webp" alt="Kalma" width={1500} height={1500} className="w-64 h-16 justify-center items-center md:m-1 sm:m-auto" />
                    <p className="text-yellow-500 font-bold text-5xl py-4">O’ Allah We Believe</p>
                    <h2 className="text-white font-semibold text-4xl">That Only You Can
                      <br />
                      <span className="my-3"> Save Us</span>
                    </h2>
                    <button type="button" class="text-white bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-yellow-500/50 dark:shadow-lg dark:shadow-yellow-800/80 font-medium rounded-lg text-md px-5 py-1.5 text-center me-2 mb-2 text-[18px] my-3">Learn more</button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="grid md:grid-cols-2 sm:grid-cols-1 md:gap-24 sm:gap-2 px-4">
                  <div className="mx-12 ">
                    <Image src="/asset/slide4.webp" alt="" width={300} height={300} className="md:w-3/4 sm:w-96 md:h-4/4 justify-center items-center md:m-1 sm:m-auto" />
                  </div>
                  <div className="justify-center items-center m-auto md:text-justify sm:text-center">
                    <Image src="/asset/text-img.webp" alt="Kalma" width={1500} height={1500} className="w-64 h-16 justify-center items-center md:m-1 sm:m-auto" />
                    <p className="text-yellow-500 font-bold text-5xl py-4">O’ Allah We Believe</p>
                    <h2 className="text-white font-semibold text-4xl">That Only You Can
                      <br />
                      <span className="my-3"> Save Us</span>
                    </h2>
                    <button type="button" class="text-white bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-yellow-500/50 dark:shadow-lg dark:shadow-yellow-800/80 font-medium rounded-lg text-md px-5 py-1.5 text-center me-2 mb-2 text-[18px] my-3">Learn more</button>
                  </div>
                </div>
              </SwiperSlide>

              {/* Navigation Buttons */}
              <div className="absolute bottom-12 right-8 flex gap-2 z-10 justify-end">
                <button ref={prevRef} className="custom-prev bg-[#E6AC41] text-white w-10 h-10 flex items-center justify-center rounded-sm shadow-md transition-all duration-300 hover:bg-[#D99A2B]">
                  <FaArrowLeftLong size={16} />
                </button>
                <button ref={nextRef} className="custom-next bg-[#E6AC41] text-white w-10 h-10 flex items-center justify-center rounded-sm shadow-md transition-all duration-300 hover:bg-[#D99A2B]">
                  <FaArrowRightLong size={16} />
                </button>
              </div>
            </Swiper>

          </div>

        </div>
      </div>
      <div className="md:-mt-16 sm:-mt-8 relative z-10 ">
        <History />
      </div>
    </div>

  );
};

export default Banner;
