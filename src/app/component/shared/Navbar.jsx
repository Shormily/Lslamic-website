'use client';
import { LuChevronDown } from "react-icons/lu";
import React, { useState, useRef } from 'react';
import { IoSearch } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegUser, FaTimes, FaBars } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';
import { RiMenu2Line } from 'react-icons/ri';
import { Crete_Round } from "next/font/google";

const creteRound = Crete_Round({
  subsets: ["latin"],
  weight: ["400"], // Crete Round only has a weight of 400
  variable: "--font-crete-round",
});

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={`${creteRound.variable} font-serif`}> <div className='bg-gradient-to-r from-green-900 to-black sticky top-0 z-20'>
    <nav className="flex max-w-[1500px] m-auto px-4 py-3 justify-between items-center">
      {/* Logo */}
      <Link href="/" className='flex items-center gap-2 text-white'>
        <Image src='/asset/icon.png' width={50} height={50} alt="Logo" />
        <p className='text-bold text-2xl'>ISTIQBAL</p>
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex gap-8 text-white text-[18px] ">
        <li><Link href="/" className="hover:text-yellow-500">Home</Link></li>
        <li><Link href="/event" className="hover:text-yellow-500">Event</Link></li>
        <li><Link href="/service" className="hover:text-yellow-500">Service</Link></li>
        <li><Link href="/contact" className="hover:text-yellow-500">Contact</Link></li>
      </ul>

      {/* Icons */}
      <div className="hidden lg:flex items-center gap-4 text-white">
        <IoSearch size={24} className="cursor-pointer hover:text-yellow-500" />
        <LuShoppingCart size={24} className="cursor-pointer hover:text-yellow-500" />
        <FaRegUser size={20} className="cursor-pointer hover:text-yellow-500" />
      </div>

      {/* Mobile Menu Button */}
      <button className="lg:hidden text-white" onClick={toggleMobileMenu}>
        <RiMenu2Line size={24} />
      </button>
    </nav>

    {/* Mobile Menu */}
    <div className={`fixed top-0 right-0 w-3/4 h-full bg-white text-black p-6 transform transition-transform ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
      <button className="absolute top-5 right-5" onClick={toggleMobileMenu}>
        <FaTimes size={24} />
      </button>
      <ul className="mt-16 space-y-4 text-lg font-semibold">
        <li><Link href="/" className="block hover:text-green-700">Home</Link></li>
        <li><Link href="/event" className="block hover:text-green-700">Event</Link></li>
        <li><Link href="/service" className="block hover:text-green-700">Service</Link></li>
        <li><Link href="/shop" className="block hover:text-green-700">Shop</Link></li>
        <li><Link href="/pages" className="block hover:text-green-700">Pages</Link></li>
        <li><Link href="/blog" className="block hover:text-green-700">Blog</Link></li>
        <li><Link href="/contact" className="block hover:text-green-700">Contact</Link></li>
      </ul>
    </div>
  </div></div>
   
  );
};

export default Navbar;
