import React from "react";
import { FaLeaf, FaRegCalendarCheck, FaUsers } from "react-icons/fa";
import { FaCar } from "react-icons/fa6";

const NewsLetter = () => {
  return (
    <div className="w-[90%] h-[100%] flex flex-col gap-10 my-16 items-center justify-center mx-auto ">
      <div className=" bg-[#151515]  flex flex-col gap-6 items-center justify-center mx-auto p-7 text-white md:w-[1000px] my-10 py-12">
        <h1 className="text-3xl md:text-4xl font-semibold">
          Keep Up to Date with{" "}
          <span className="logo-name text-yellow-300">BrightSide</span>
        </h1>
        <p className="text-center text-gray-500">
          Sign up to be the first to receive special news and event updates from
          Bright kitchen.
        </p>
        <div className="flex gap-5  flex-col md:flex-row justify-center items-center w-[90%] ">
          <input
            type="text"
            placeholder="Enter Email"
            className="bg-transparent border border-white md:w-[300px]  placeholder:text-center py-2 w-[100%] text-center"
          />
          <button className="uppercase px-7 text-[14px] w-[100%] py-3 md:w-[120px]">
            Sign Up
          </button>
        </div>
      </div>

      <div className="w-[100%] h-[100%] grid grid-cols-1 gap-16 md:gap-3 md:grid-cols-4">
        <div className="w-[100%] h-[100%] flex flex-col items-center justify-center text-white p-4">
          <FaRegCalendarCheck size={50} />
          <h1 className="text-xl font-semibold my-3">Reservation</h1>
          <p className="md:w-[100px] text-center mt-3 text-gray-300 t-[10px] ">
            Are highly recommended
          </p>
        </div>

        <div className="w-[100%] h-[100%] flex flex-col items-center justify-center text-white p-4">
          <FaCar size={50} />
          <h1 className="text-xl font-semibold my-3">Parking</h1>
          <p className="md:w-[100px] text-center mt-3 text-gray-300 t-[10px] ">
            Valet Parking is available
          </p>
        </div>

        <div className="w-[100%] h-[100%] flex flex-col items-center justify-center text-white p-4">
          <FaUsers size={50} />
          <h1 className="text-xl font-semibold my-3">Reservation</h1>
          <p className="w-[100px] text-center mt-3 text-gray-300 t-[10px] ">
            Smart casual
          </p>
        </div>

        <div className="w-[100%] h-[100%] flex flex-col items-center justify-center text-white p-4">
          <FaLeaf size={50} />
          <h1 className="text-xl font-semibold my-3">Vegetarian</h1>
          <p className="md:w-[100px] text-center mt-3 text-gray-300 t-[10px] ">
            Vegetarian on request
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
