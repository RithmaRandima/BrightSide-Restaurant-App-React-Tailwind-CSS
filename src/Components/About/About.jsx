import React from "react";
import img1 from "../../Components/Assest/about1.jpeg";
import img2 from "../../Components/Assest/about2.jpeg";

const About = () => {
  return (
    <div className="max-w-[1140px] mx-auto p-6 flex flex-col gap-6 mt-5 text-white  py-8">
      <div className="text-center">
        <h5 className="text-[12px] tracking-[4px] text-yellow-300 font-semibold uppercase my-4">
          TASTY AND CRUNCHY
        </h5>
        <h1 className="text-4xl md:text-5xl mb-4 font-bold">OUR STORY</h1>
        <p className="max-w-[600px] mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, atque
          expedita, incidunt quam, libero quod consectetur quaerat optio vitae
          fugiat eveniet quisquam vero nostrum qui!lorem
        </p>
      </div>
      <div className="grid grid-cols-1 md:gap-6 md:grid-cols-2 pb-2 md:pb-6 md:p-10 ">
        <div className="about-box w-[100%] h-[300px] mx-auto overflow-hidden relative">
          <div className="bg-gradient-to-t from-black/55 to-black/75 w-[100%] h-[100%] text-white absolute z-10">
            <div className="about-text-container opacity-0 absolute bottom-[50%] left-[50%] translate-x-[-50%] text-center translate-y-[250%] duration-500">
              <h1 className="text-[21px] uppercase my-4 font-bold tracking-[2px]">
                What’s Happening
              </h1>
              <p className="text-yellow-600 text-[12px] tracking-[4px]">
                LATEST NEWS, STORIES AND RECIPES
              </p>
            </div>
          </div>
          <img src={img1} alt="" />
        </div>

        <div className="about-box w-[100%] h-[300px] mx-auto overflow-hidden relative">
          <div className="bg-gradient-to-t from-black/55 to-black/75 w-[100%] h-[100%] text-white absolute z-10">
            <div className="about-text-container opacity-0 absolute bottom-[50%] left-[50%] translate-x-[-50%] text-center translate-y-[250%] duration-500">
              <h1 className="text-[21px] uppercase my-4 font-bold tracking-[2px]">
                About Us
              </h1>
              <p className="text-yellow-600 text-[12px] tracking-[4px]">
                FLAVORS FROM AROUND THE WORLD
              </p>
            </div>
          </div>
          <img src={img2} alt="" />
        </div>
      </div>

      <div className="text-center">
        <h1 className="logo-name text-6xl font-bold md:text-8xl mb-7 text-yellow-600">
          BrightSide
        </h1>
        <p className="w-[60%] mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sed
          recusandae voluptatem! Harum quasi voluptas atque eveniet mollitia ut
          repudiandae.
        </p>
      </div>
    </div>
  );
};

export default About;
