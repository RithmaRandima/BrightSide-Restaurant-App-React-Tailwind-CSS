import React from "react";
import { categories } from "../../Data/Data";

function Category() {
  return (
    <div className="max-w-[1540px] m-auto px-4 py-12">
      <p className="text-center text-white mb-4">TASTY AND CRUNCHY</p>
      <h1 className="text-white font-bold text-center text-4xl">
        SPECIAL RECIPES
      </h1>
      <div className="w-[2px] h-[30px] bg-white m-auto my-5"></div>

      <p className="text-center mb-16 text-white md:w-[600px] mx-auto">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore vel,
        magni quisquam, sint tempora incidunt cupiditate ipsum aut, eum quod
        optio amet harum. Provident, veniam praesentium eligendi amet culpa
        distinctio.
      </p>
      {/*Categories  */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1 py-6">
        {categories.map((item, index) => (
          <div
            key={index}
            className="flex flex-col mb-7 md:mb-1 justify-between items-center cursor-pointer hover:translate-y-[-5px] duration-300"
          >
            <div className="w-[100%] h-[240px] m-auto relative">
              <img
                className="w-[100%] h-[100%] object-cover"
                src={item.img}
                alt={item.name}
              />
            </div>
            <p className="text-white my-3">APRIL 11, 2016</p>
            <h2 className="font-bold sm:text-xl text-white mb-5">
              {item.name}
            </h2>
            <p className="text-center text-gray-400">{item.info}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
