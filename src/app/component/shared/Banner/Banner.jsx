"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-merriweather",
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

  return (
    <div className={`${merriweather.variable} font-sans`}>
      <div className="relative w-full h-[500px] md:h-[600px] bg-[url('/asset/banner-bg.webp')] bg-cover bg-center bg-no-repeat">
        <div className="max-w-[1200px] pt-24 m-auto flex justify-center items-center">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            onSwiper={setSwiperInstance} // Save Swiper instance for updating refs
          >
            {[1, 2, 3].map((slide) => (
              <SwiperSlide key={slide}>
                <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-24 items-center">
                  <Image src={`/asset/slide${slide}.webp`} alt={`Slide ${slide}`} width={300} height={300} />
                  <div>
                    <Image src="/asset/kalma.png" alt="Kalma" width={400} height={100} className="w-full h-auto" />
                    <p className="text-yellow-500 font-bold text-3xl">O’ Allah We Believe</p>
                    <h2 className="text-white font-bold text-5xl">Invited to The Home Of Peace</h2>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute bottom-12 right-8 flex gap-2 z-10 justify-end">
  <button ref={prevRef} className="custom-prev bg-[#E6AC41] text-white w-10 h-10 flex items-center justify-center rounded-sm shadow-md transition-all duration-300 hover:bg-[#D99A2B]">
    <FaArrowLeftLong size={16} />
  </button>
  <button ref={nextRef} className="custom-next bg-[#E6AC41] text-white w-10 h-10 flex items-center justify-center rounded-sm shadow-md transition-all duration-300 hover:bg-[#D99A2B]">
    <FaArrowRightLong size={16} />
  </button>
</div>

      </div>
    </div>
  );
};

export default Banner;
