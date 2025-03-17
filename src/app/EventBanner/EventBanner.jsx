"use client"
import { useEffect, useState } from "react";
import { differenceInSeconds } from "date-fns";

import Image from "next/image";
import { Crete_Round } from "next/font/google";
const creteRound = Crete_Round({
  subsets: ["latin"],
  weight: ["400"], // Crete Round only has a weight of 400
  variable: "--font-crete-round",
});

const EventBanner = () => {
  const eventDate = new Date("2025-12-31T09:30:00"); // Adjust event date/time
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date();
    const diff = differenceInSeconds(eventDate, now);

    return {
      days: Math.floor(diff / (60 * 60 * 24)),
      hours: Math.floor((diff % (60 * 60 * 24)) / (60 * 60)),
      minutes: Math.floor((diff % (60 * 60)) / 60),
      seconds: diff % 60,
    };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`${creteRound.variable} font-serif`}>
      <div className="relative w-full bg-[url('/asset/ok.png')] bg-cover flex flex-col md:flex-row items-center justify-center px-4">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-200 via-yellow-400   to-transparent"></div>

        {/* Left Side - Image Frame */}
        <div className="relative z-10">
          <Image
            src="/asset/event.png"
            alt="Dates and Glass"
            height={4000}
            width={4000}
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Right Side - Event Details */}
        <div className="relative z-10 text-white text-center md:text-left max-w-2xl p-10">
          <p className="text-yellow-400 uppercase tracking-widest">Upcoming Event</p>
          <h2 className="text-4xl font-bold mt-2">
            Grand Islamic Gathering with Chicago Imams
          </h2>
          <p className="mt-2 flex items-center justify-center md:justify-start space-x-2">
            <span className="flex items-center space-x-1">📍 <span>Park Lane, London</span></span>
            <span className="flex items-center space-x-1">⏰ <span>9:30 AM - 1:15 PM</span></span>
          </p>

          {/* Countdown Timer */}
          <div className="mt-6 flex justify-center md:justify-start space-x-6 text-yellow-400 text-xl font-semibold">
            <div><span className="block text-4xl">{timeLeft.days}</span> Days</div>
            <div><span className="block text-4xl">{timeLeft.hours}</span> Hours</div>
            <div><span className="block text-4xl">{timeLeft.minutes}</span> Mins</div>
            <div><span className="block text-4xl">{timeLeft.seconds}</span> Secs</div>
          </div>
        </div>
      </div>
    </div>


  );
};

export default EventBanner;
