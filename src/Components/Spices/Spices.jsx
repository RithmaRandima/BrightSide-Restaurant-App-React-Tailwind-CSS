import React from "react";
import top_img from "../Assest/spices-top.png";

function Spices() {
  return (
    <div className="my-15 mb-[50px] spices-bg-container w-full my-7 h-[600px] md:h-[400px] grid grid-cols-1 md:grid-cols-2">
      <div className=" text-white mx-7 pl-5 flex items-center">
        <div>
          <p className="text-[12px] tracking-[4px] text-yellow-300 font-semibold uppercase my-4">
            Tasty And Crunchy
          </p>
          <h1 className="text-3xl md:text-4xl my-4">INGREDIENTS</h1>
          <p className="my-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            dolores, sunt voluptatum maiores hic non? Velit placeat minus
            provident, repellendus esse necessitatibus sequi expedita qui nam
            ipsa sint perferendis omnis quo enim saepe odio animi fugiat ullam.
          </p>
          <button>VIEW OUR MENU</button>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className=" w-[350px] h-[310px]">
          <img
            src={top_img}
            alt=""
            className="w-[100%] h-[100%] object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Spices;
