'use client';
import { LuChevronDown } from "react-icons/lu";
import React, { useState, useEffect, useRef } from 'react';
import { IoSearch } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { IoMdSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';
import { RiMenu2Line } from 'react-icons/ri';
import { Merriweather } from "next/font/google";
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-merriweather", // Custom CSS variable for Tailwind
})

const Navbar = () => {
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  
  return (
<div className={`${merriweather.variable} font-sans`}>
<div className='bg-gradient-to-r from-green-900  to-black sticky top-0 z-20'>
      <nav className="flex max-w-[1200px]  max-container padding-container relative max-w-[1550px] m-auto px-4">
        <Link href="/" className='text-white flex gap-2 justify-center items-center m-auto pl-2'>
          <Image
            src='/asset/icon.png'
            width={50}
            height={50}
            alt="Logo"
            className="py-2"
          />
          <p className='text-bold text-2xl'>Islam</p>
        </Link>
        {/* Desktop Menu */}
        <ul className="hidden h-full gap-12 lg:flex items-center ">
        <li className="">
              <p
                
                to="/"
              >
                About
              </p>
            </li>
        </ul>

        {/* Desktop Icons */}
        <div className="lg:flex text-white items-center justify-center hidden gap-4">
          <button className="hover:text-orange-500">
            <LuShoppingCart size={25} />
          </button>
          <Link href="/login" className="group hover:text-orange-500">
            <button
              id="userButton"
              className=" flex gap-1 items-center"
              onClick={toggleUserMenu}
            >
              <FaRegUser size={20} /> LogIn  <LuChevronDown size={20} />
            </button>
           
            {/* Add your user menu dropdown here */}
          </Link>
         
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden  text-white p-2" onClick={toggleMobileMenu}>
          <RiMenu2Line size={24} />
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 z-20 right-0 w-full h-screen bg-white m-auto pb-5 items-center justify-center lg:hidden transform transition-transform duration-500 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <button className="absolute top-5 right-5" onClick={toggleMobileMenu}>
            <FaTimes size={24} />
          </button>
          <Link href="/" className='text-white flex gap-2 mt-20 justify-center items-center m-auto'>
            <Image
              src='/asset/logo.png'
              width={50}
              height={50}
              alt="Logo"
              className="py-2"
            />
            <p className='text-bold text-2xl text-[#000]'>BioCare</p>
          </Link>
          <div className='px-12'>
           {/* create code */}
          </div>
          <div className="flex gap-4 justify-center items-center m-auto">
            <button className="hover:text-orange-500">
              <IoMdSearch size={24} />
            </button>
            <button className="hover:text-orange-500">
              <LuShoppingCart size={24} />
            </button>
            <div className="relative">
              <button
                id="userButton"
                className="hover:text-orange-500 flex items-center"
                onClick={toggleUserMenu}
              >
                <FaRegUser size={20} /> 
              </button>
              {/* Add your user menu dropdown here */}
            </div>
          </div>
        </div>
      </nav>
    </div>  
</div>
    
  );
};

export default Navbar;
