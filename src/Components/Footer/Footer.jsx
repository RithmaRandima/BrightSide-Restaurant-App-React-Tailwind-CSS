import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-[100%] text-white  bg-[#151515]">
      <div className="grid grid-cols-1 md:grid-cols-4 pb-9 pt-3">
        {/* col-1 */}
        <div className="hidden md:block w-[100%] h-[100%] text-center p-6">
          <h1 className="font-bold md:w-[200px] mx-auto mb-9 text-[18px]">
            WELCOME TO Brightside KITCHEN
          </h1>
          <p className="w-[240px] mx-auto mb-5 text-[15px] text-gray-400">
            Brighrside KITCHEN, founded in 2022, is dedicated to all those who
            love to wander far and wide.
          </p>
          <p className="w-[200px] mx-auto text-[15px] text-gray-400">
            We'd like to invite you on a culinary adventure, where you’ll
            explore undiscovered gourmet experiences.
          </p>
        </div>
        {/*col-2  */}
        <div className="hidden md:block w-[100%] h-[100%] text-center p-6">
          <h1 className="font-bold mb-5 text-[18px]">VISIT</h1>
          <p className="w-[180px] mx-auto text-[14px] text-gray-400">
            317 Pacific C Hwy Huntington, CA 92648
          </p>

          <h1 className="font-bold my-5 text-[18px]">TALK</h1>
          <p className="w-[180px] mx-auto text-[14px] text-gray-400">
            123,456-7
          </p>

          <h1 className="font-bold my-5 text-[18px]">WRITE</h1>
          <p className="w-[180px] mx-auto text-[14px] text-gray-400">
            eat@brightside.com
          </p>
        </div>

        {/* col-3 */}
        <div className="text-center">
          <h1 className="font-bold my-5 text-[18px]">RESERVATIONS</h1>
          <button className="border border-white bg-transparent text-white py-2 px-6 mb-5">
            BOOK YOUR TABLE
          </button>
          <h1 className="font-bold my-5 text-[18px]">Hours</h1>
          <p className="mx-auto text-[14px] text-gray-400">
            MONDAY thru FRIDAY
          </p>
          <p className="mx-auto text-[14px] text-gray-400 mb-5">11am - 9pm</p>
          <p className="mx-auto text-[14px] text-gray-400">SATURDAY/SUNDAY</p>
          <p className="mx-auto text-[14px] text-gray-400"> 10am - 11pm</p>
        </div>
        {/* col-4 */}
        <div className="text-center">
          <h1 className="hidden md:block font-bold my-5 text-[18px]">ABOUT</h1>
          <p className="hidden md:block mx-auto text-[14px] text-gray-400">
            FAQ
          </p>
          <p className="hidden md:block w-[50%] mx-auto text-[14px] text-gray-400 mb-7">
            Reservation Policy Privacy Policy Health & Safety
          </p>
          <h1 className="font-bold my-5 text-[18px]">FOLLOW ALONG</h1>
          <div className="flex gap-6 items-center justify-center">
            <p>
              <FaInstagram size={24} />
            </p>
            <p>
              <FaFacebook size={24} />
            </p>
            <p>
              <FaTwitter size={24} />
            </p>
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="flex flex-row justify-between px-2 md:px-10  items-center py-4 gap-7 pb-[17px]  bg-[#202020] text-white">
        <p className="hidden md:block text-[8px] tracking-[4px]">
          © 2023 BRIGHTSIDE. ALL RIGHTS RESERVED.
        </p>
        <p className="logo-name text-sm md:text-3xl ">BrightSide</p>
        <p className="text-[8px] md:text-[10px] font-bold tracking-[4px]">
          TASTE THE DIFFERENCE
        </p>
      </div>
    </div>
  );
};

export default Footer;
