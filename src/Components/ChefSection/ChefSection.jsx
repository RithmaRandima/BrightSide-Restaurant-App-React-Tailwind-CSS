import React from "react";
import chef_img from "../Assest/chef.jpg";
import dish1 from "../Assest/dish1.jpg";
import dish2 from "../Assest/dish.jpg";

const ChefSection = () => {
  return (
    <div className="text-white flex flex-col md:flex-row bg-red-500 h-[100%] md:h-[500px] md:max-h-[500px] my-24">
      <div className="bg-red-600 w-[100%] h-[100%]">
        <div className="w-[100%] h-[100%] overflow-hidden relative">
          <img
            src={chef_img}
            className="w-[100%] h-[100%] object-cover"
            alt=""
          />
          <div className="w-[100%] h-[100%] bg-gradient-to-r from-black/35 to-black/70 absolute top-0 left-0"></div>
        </div>
      </div>
      <div className="bg-red-300 w-[100%] flex flex-col md:flex-row h-[100%]">
        <div
          style={{ background: "#101010" }}
          className="w-[100%] py-8 px-6 box-border text-center"
        >
          <h1 className="font-bold text-2xl my-5">Rithma Randima</h1>
          <p className="w-[90%] text-gray-500 mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
            deleniti esse accusantium maiores optio quidem minus amet repellat,
            pariatur facilis et eveniet culpa in molestias. Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Autem in animi veritatis
            eligendi dolorem omnis, fuga perferendis nihil reprehenderit hic
            suscipit earum cumque? Mollitia iure numquam asperiores laudantium?
            Eos, temporibus.
          </p>
          <button className="my-7">Meet The Team</button>
        </div>

        <div className="bg-red-300 w-[100%] flex flex-col">
          <div className="flex-1">
            <div className="overflow-hidden w-[100%] h-[100%] relative">
              {/* overlay */}
              <div className="absolute bg-black/40 w-[100%] h-[100%] z-10 top-0 left-0"></div>
              <img
                src={dish1}
                className="w-[100%] h-[100%] object-cover"
                alt=""
              />
            </div>
          </div>
          <div className="flex-1 ">
            <div className="bg-red-300 w-[100%] h-[100%] relative">
              {/* overlay */}
              <div className="absolute bg-black/40 w-[100%] h-[100%] z-10 top-0 left-0"></div>
              <img
                className="w-[100%] h-[100%] object-cover"
                src={dish2}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefSection;
