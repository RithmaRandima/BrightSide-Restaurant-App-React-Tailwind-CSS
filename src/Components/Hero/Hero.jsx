import React from "react";
import bg_image from "../Assest/hero-background.jpeg";

function Hero() {
  return (
    <div className="max-w-[1640px] mt-16 mx-auto ">
      <div className="max-h-[90vh] relative">
        {/*overlay  */}
        <div className="absolute w-full h-full text-white max-h-[90vh] bg-gradient-to-r from-black/100 to-black/25 flex items-center justify-center md:justify-start z-20">
          <div className=" px-4 w-[80vw]  md:w-[50vw] text-center">
            <h1 className=" text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold my-5">
              The <span className="logo-name text-yellow-600">BrightSide</span>
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold my-5">
              Experience
            </h1>
            <p className="md:w-[40vw] mx-auto my-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Aspernatur quae quas, veritatis magni numquam at.
            </p>
            <button className="border border-white bg-transparent hover:bg-white hover:text-black text-white my-6 py-2 px-10">
              View Menu
            </button>
          </div>
        </div>
        <img
          className="w-full max-h-[90vh] object-cover object-top"
          src={bg_image}
          alt=""
        />

        {/* side box */}
      </div>
    </div>
  );
}

export default Hero;
