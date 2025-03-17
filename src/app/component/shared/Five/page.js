"use client"
import Image from "next/image";
import { useEffect, useState } from "react";


const fivePillars = [
  { name: "Salah", image: "/asset/pray.jpg" },
  { name: "Shahadah", image: "/asset/lam.jpg" },
  { name: "Sawm", image: "/asset/pray1.jpg" },
  { name: "Zakah", image: "/asset/slider-1.jpg" },
  { name: "Hajj", image: "/asset/ban.jpg" },
];

export default function FivePillars() {
  return (
    <div className="py-12 bg-[url('/asset/banne3.jpg')] bg-cover">
      {/* Title */}
      <div className="text-center mb-10">
        <p className="text-yellow-600 uppercase tracking-widest">Islam Pillars</p>
        <h2 className="text-3xl md:text-4xl text-white font-bold">Five Pillars of Islam</h2>
      </div>

      {/* Pillars Section */}
      <div className="flex flex-wrap justify-center gap-8">
        {fivePillars.map((pillar, index) => (
          <div 
            key={index} 
            className={`text-center bounce-animation ${index % 2 === 0 ? "animation-delay" : ""}`}
          >
            {/* Circular Image */}
            <div className="w-64 h-64 md:w-64 md:h-64 rounded-full overflow-hidden border-[15px] border-white shadow-lg">
              <Image
                src={pillar.image}
                alt={pillar.name}
                width={300}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
            {/* Label */}
            <p className="mt-4 text-xl font-semibold text-white ">{pillar.name}</p>
          </div>
        ))}
      </div>

      {/* Custom CSS for Animation */}
      <style jsx>{`
        @keyframes bounceUpDown {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .bounce-animation {
          animation: bounceUpDown 3s infinite ease-in-out;
        }
        .animation-delay {
          animation-delay: 5s; /* Delays animation for alternate cards */
        }
      `}</style>
    </div>
  );
}
