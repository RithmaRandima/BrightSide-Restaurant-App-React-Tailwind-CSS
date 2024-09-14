import React, { useState } from "react";
import { foodData, foodDataata } from "../../Data/Data";

function Food() {
  const [foods, setFoods] = useState(foodData);

  // filter by type
  const filterType = (category) => {
    setFoods(
      foodData.filter((item) => {
        return item.Category === category;
      })
    );
  };

  // filter by price

  const filterPrice = (price) => {
    setFoods(
      foodData.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <p className="text-center text-white mb-4">TASTY AND CRUNCHY</p>
      <h1 className="text-white font-bold text-center text-4xl">Food Menu</h1>
      <div className="w-[2px] h-[30px] bg-white m-auto my-5"></div>

      <p className="text-center mb-16 text-gray-500 md:w-[600px] mx-auto">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore vel,
        magni quisquam, sint tempora incidunt cupiditate ipsum aut, eum quod
        optio amet harum. Provident, veniam praesentium eligendi amet culpa
        distinctio.
      </p>
      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Filter Type */}
        <div>
          <p className="font-bold text-gray-700 text-center mb-3">
            Filter Type
          </p>
          <div className="flex justify-between flex-wrap">
            <button
              onClick={() => setFoods(foodData)}
              className="m-1 text-black hover:bg-transparent hover:text-white"
            >
              All
            </button>
            <button
              onClick={() => filterType("burger")}
              className="m-1 text-black hover:bg-transparent hover:text-white"
            >
              Burgers
            </button>
            <button
              onClick={() => filterType("pizza")}
              className="m-1 text-black hover:bg-transparent hover:text-white"
            >
              Pizza
            </button>
            <button
              onClick={() => filterType("salad")}
              className="m-1 text-black hover:bg-transparent hover:text-white"
            >
              Salads
            </button>
            <button
              onClick={() => filterType("chicken")}
              className="m-1 text-black hover:bg-transparent hover:text-white"
            >
              Chicken
            </button>
          </div>
        </div>
        {/* Filter Price */}
        <div>
          <p className="font-bold text-gray-700 text-center mb-3">
            Filter Price
          </p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button
              onClick={() => filterPrice("$")}
              className="m-1 text-black hover:bg-transparent hover:text-white"
            >
              $
            </button>
            <button
              onClick={() => filterPrice("$$")}
              className="m-1 text-black hover:bg-transparent hover:text-white"
            >
              $$
            </button>
            <button
              onClick={() => filterPrice("$$$")}
              className="m-1 text-black hover:bg-transparent hover:text-white"
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice("$$$$")}
              className="m-1 text-black hover:bg-transparent hover:text-white"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>
      {/* Display Food */}

      <div className="grid grid-cols-2  text-white lg:grid-cols-4 gap-4 pt-4">
        {foods.map((item, index) => {
          return (
            <div
              key={index}
              className="foods-menu-items shadow-lg hover:scale-105 duration-300 cursor-pointer relative"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-[230px] object-cover"
              />
              {/* overlay */}
              <div className="overlay flex flex-col justify-center items-center px-2 py-4 absolute z-10 bottom-0 w-[100%] h-[0%] duration-300 opacity-0 left-0 bg-black/60">
                <div className="text-center">
                  <p className="font-bold text-[20px]">{item.name}</p>
                  <p>
                    <span className="text-yellow-200 font-bold px-2 py-1 text-[30px]">
                      {item.price}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Food;
