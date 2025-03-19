import React from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi";
import Link from "next/link";

const Sidebar = ({ isOpen, toggleSidebar }: { isOpen: boolean, toggleSidebar: () => void }) => {
  const menus = [
    { name: "Dashboard", link: "/dashboard", icon: MdOutlineDashboard },
    { name: "Home", link: "/", icon: AiOutlineUser },
    { name: "Messages", link: "#", icon: FiMessageSquare },
    { name: "Settings", link: "#", icon: RiSettings4Line },
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-64 h-full bg-gray-800 text-white transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0`}
    >
      <div className="flex justify-between items-center p-5 border-b border-gray-700">
        <h2 className="text-2xl font-semibold">My App</h2>
        <HiMenuAlt3
          size={30}
          className="cursor-pointer md:hidden"
          onClick={toggleSidebar}
        />
      </div>
      <ul className="space-y-4 mt-5 px-6">
        {menus.map((menu, i) => (
          <li key={i}>
            <Link href={menu.link}>
              <p className="text-lg hover:text-gray-400 flex items-center gap-3">
                {React.createElement(menu.icon, { size: "25" })}
                {isOpen && <span>{menu.name}</span>}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
