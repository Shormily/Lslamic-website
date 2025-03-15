"use client";
import React from 'react';
import "./ico.css";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { motion } from "framer-motion"
import { MdWhatsapp } from "react-icons/md";

const Icons = () => {
  return (
    <>
      <motion.div
        initial={{ y: -750 }}
        animate={{ y: -10 }}
        transition={{ delay: 4, duration: 2, type: 'spring', stiffness: 500 }}
        className=" lg:flex fixed flex-col top-[30%] left-0"
      >
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 rounded-l-lg github-style">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-center w-full text-gray-300 px-4"
              href="https://www.linkedin.com/in/shormily-raisa-aa1992216/"
            >
              Linkedin <FaLinkedin className="text-[#0072b1]" size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 rounded-l-lg  github-style ">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-center w-full text-gray-300 px-4"
              href="https://github.com/Shormily"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 rounded-l-lg github-style">
            [9:03 AM]
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-center w-full text-gray-300 px-4  "
              href="mailto:shormilyrais@gmail.com"
            >
              Email <HiOutlineMail className="text-red-700" size={30} />
            </a>
          </li>
          {/* <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 rounded-l-lg email-style">
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-between items-center w-full text-gray-300 px-4 "
        href="https://www.facebook.com/profile.php?id=100013452185380"
      >
        Facebook <FaFacebook className="text-[#1877F2]" size={30} />
      </a>
    </li> */}
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 rounded-l-lg github-style">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-center w-full text-gray-300 px-4 "
            // href={link}
            >
              Resume <BsFillPersonLinesFill className="text-white" size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 rounded-l-lg github-style">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-center w-full text-gray-300 px-4 "
              href="https://wa.me/8801312155566"
            >
              WhatsApp <MdWhatsapp className="text-green-500" size={30} />
            </a>
          </li>
        </ul>
      </motion.div>
    </>
  );
};

export default Icons;