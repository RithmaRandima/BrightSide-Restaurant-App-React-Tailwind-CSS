import React, { useState } from "react";
import {
  AiFillTag,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

function Navbar() {
  const [nav, setNav] = useState(false);

  return (
    <div className=" w-full fixed top-0 z-50 left0 right-0  bg-black/70 mx-auto flex justify-between items-center p-4 box-border px-10">
      {/* left side */}
      <div className="flex items-center">
        <h1 className="text-1xl sm:text-2xl lg:text-2xl px-2 text-yellow-400 logo-name ">
          BrightSide
        </h1>
      </div>
      {/* search input */}
      <div className="bg-[rgb(20,20,20)] rounded-full hidden md:flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} className="text-white" />
        <input
          className="bg-transparent p-2 w-full outline-none text-white placeholder:text-gray-600"
          type="text"
          placeholder="Search foods'"
        />
      </div>

      {/*cart button  */}
      <div className="flex items-center gap-7 ">
        <div className="hidden lg:flex items-center text-white pr-3 bg-white/10 font-bold px-1 text-[14px]">
          <p className="  bg-black text-white p-1 px-4">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>

        <div className=" text-white hidden md:flex items-center">
          <BsFillCartFill className="hover:text-yellow-300" size={24} />
        </div>

        <div onClick={() => setNav(!nav)} className="cursor-pointer text-white">
          <AiOutlineMenu size={25} className="hover:text-yellow-300" />
        </div>
      </div>

      {/* Mobile menu */}
      {/* overlay */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-20 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* side menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-20 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          Best <span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul className=" flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex cursor-pointer">
              <TbTruckDelivery size={25} className="mr-4" />
              Orders
            </li>
            <li className="text-xl py-4 flex cursor-pointer">
              <MdFavorite size={25} className="mr-4" />
              Favorites
            </li>
            <li className="text-xl py-4 flex cursor-pointer">
              <FaWallet size={25} className="mr-4" />
              Wallet
            </li>
            <li className="text-xl py-4 flex cursor-pointer">
              <MdHelp size={25} className="mr-4" />
              Help
            </li>
            <li className="text-xl py-4 flex cursor-pointer">
              <AiFillTag size={25} className="mr-4" />
              Promotions
            </li>
            <li className="text-xl py-4 flex cursor-pointer">
              <BsFillSaveFill size={25} className="mr-4" />
              Best One
            </li>
            <li className="text-xl py-4 flex cursor-pointer">
              <FaUserFriends size={25} className="mr-4" />
              Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
