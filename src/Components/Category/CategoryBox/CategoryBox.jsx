import React from "react";

const CategoryBox = (props) => {
  return (
    <div
      key={props.id}
      className="flex flex-col mb-7 md:mb-1 justify-between items-center cursor-pointer hover:translate-y-[-5px] duration-300"
    >
      <div className="w-[100%] h-[240px] m-auto relative">
        <img
          className="w-[100%] h-[100%] object-cover"
          src={props.img}
          alt={props.name}
        />
      </div>
      <p className="text-white my-3">{props.date}</p>
      <h2 className="font-bold sm:text-xl text-white mb-5">{props.name}</h2>
      <p className="text-center text-gray-400">{props.info}</p>
    </div>
  );
};

export default CategoryBox;
