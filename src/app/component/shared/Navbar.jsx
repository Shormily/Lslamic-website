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

const Navbar = () => {
  const placeholderText = "Search for medicines, doctors, and more...";
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');

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

  const handleClickOutside = (event) => {
    if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
      setIsUserMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isUserMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isUserMenuOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().toLowerCase() === 'arrimart') {
      setMessage('Successfully get a 30% discount on this product.');
    } else {
      setMessage('Fail: You are not getting the discount.');
    }
  };

  const [placeholder, setPlaceholder] = useState('');
  const placeholders = ["Search medicines or buy now", "Search healthcare medicine", "Find doctors"];
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      setPlaceholder((prev) =>
        isDeleting
          ? placeholders[index].substring(0, prev.length - 1)
          : placeholders[index].substring(0, prev.length + 1)
      );

      if (!isDeleting && placeholder === placeholders[index]) {
        setTimeout(() => setIsDeleting(true), 1000);
        setSpeed(50);
      } else if (isDeleting && placeholder === '') {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % placeholders.length);
        setSpeed(150);
      }
    };

    const typingInterval = setInterval(handleTyping, speed);
    return () => clearInterval(typingInterval);
  }, [placeholder, isDeleting, speed, index]);

  return (
    <div className='bg-gradient-to-r from-green-900 to-black sticky top-0 z-20'>
      <nav className="flex  justify-between items-center max-container padding-container relative max-w-[1550px] m-auto px-4">
        <Link href="/" className='text-white flex gap-2 justify-center items-center m-auto pl-2'>
          <Image
            src='/asset/logo.png'
            width={50}
            height={50}
            alt="Logo"
            className="py-2"
          />
          <p className='text-bold text-2xl'>BioCare</p>
        </Link>
        {/* Desktop Menu */}
        <ul className="hidden h-full gap-12 lg:flex items-center w-full">
          <form className='flex-grow px-60 py-4' onSubmit={handleSubmit}>
            <div className="relative flex items-center w-full">
              <input
                type="search"
                id="search"
                className="block w-full p-3 outline-none ps-4 text-sm text-gray-900 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
                value={inputValue}
                onChange={handleInputChange}
                placeholder={placeholder}
                required
              />
              <button
                type="submit"
                className="text-[#ea580c] absolute right-2.5 bottom-2.5 bg-[#fff] font-semibold rounded-lg text-sm px-4 mb-1"
                onClick={handleInputChange}
              >
                <IoSearch size={20} />
              </button>
            </div>
            {message && <p style={{ marginTop: '20px', fontSize: '16px', color: '#dc2626' }}>{message}</p>}
          </form>
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
            <div className="relative my-8 items-center w-full">
              <input
                type="search"
                id="search"
                className="block w-full p-3 outline-none ps-4 text-sm text-gray-900 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
                value={inputValue}
                onChange={handleInputChange}
                placeholder={placeholder}
                required
              />
              <button
                type="submit"
                className="text-[#ea580c] absolute right-2.5 bottom-2.5 bg-[#fff] font-semibold rounded-lg text-sm px-4 mb-1"
                onClick={handleInputChange}
              >
                <IoSearch size={20} />
              </button>
            </div>
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
  );
};

export default Navbar;
