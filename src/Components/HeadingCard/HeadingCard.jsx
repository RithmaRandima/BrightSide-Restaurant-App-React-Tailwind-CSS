import React from "react";
import box_image1 from "../Assest/tea.jpeg";
import box_image2 from "../Assest/delights.jpeg";
import box_image3 from "../Assest/drinks-bg.jpeg";

function HeadingCard() {
  return (
    <div className="max-w-[1200px] mx-auto flex flex-col">
      {/* top */}
      <div className=" text-white p-7">
        <div className="text-center">
          <h5 className="text-[16px]">
            QUALITY IS AT HEART OF EVERYTHING WE DO
          </h5>
          <h1 className="text-3xl md:text-4xl font-bold my-6">
            The BrightSide Kitchen Food Philosophy
          </h1>
          <div className="w-[2px] h-[30px] bg-white m-auto my-5"></div>
          <p className="w-[86%] md:w-[70%] m-auto">
            Our daily changing menu represents the best of what our local
            markets have to offer. Our passion for sourcing fresh ingredients
            from farmers and suppliers we know, combining with traditional
            flavors and rewriting
          </p>
        </div>
      </div>

      {/* bottom */}
      <div className="w-[100%] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
        {/* card-1 */}
        <div className="heading-box-container  h-[200px] md:h-[500px] max-h-[500px] w-[100%] relative ">
          {/* overlay */}
          <div className="absolute h-[100%] w-[100%] z-20 text-white bg-gradient-to-t from-black/55 to-black/75 flex items-center md:items-end md:justify-center pb-10">
            <div className=" md:text-center ml-6 md:ml-0">
              <h1 className="font-bold text-2xl mb-3  text-yellow-300">
                Our Tea Selection
              </h1>
              <p className="text-1xl ">
                Tea rituals for health, focus & relaxation
              </p>
            </div>
          </div>
          {/* img-container */}
          <div className="w-[100%] h-[100%] overflow-hidden z-10">
            <img
              src={box_image1}
              className="w-[100%] h-[100%] object-cover duration-300"
              alt=""
            />
          </div>
        </div>

        {/* card-2 */}
        <div className="heading-box-container  h-[200px] md:h-[500px] max-h-[500px] w-[100%] relative ">
          {/* overlay */}
          <div className="absolute h-[100%] w-[100%] z-20 text-white bg-gradient-to-t from-black/55 to-black/75 flex items-center md:items-end md:justify-center pb-10">
            <div className=" md:text-center ml-6 md:ml-0">
              <h1 className="font-bold text-2xl mb-3  text-yellow-300">
                Vegan Delights
              </h1>
              <p className="text-1xl ">Our plant based desserts</p>
            </div>
          </div>
          {/* img-container */}
          <div className="w-[100%] h-[100%] overflow-hidden z-10">
            <img
              src={box_image2}
              className="w-[100%] h-[100%] object-cover duration-300"
              alt=""
            />
          </div>
        </div>

        {/* card-3 */}
        <div className="heading-box-container  h-[200px] md:h-[500px] max-h-[500px] w-[100%] relative ">
          {/* overlay */}
          <div className="absolute h-[100%] w-[100%] z-20 text-white bg-gradient-to-t from-black/55 to-black/75 flex items-center md:items-end md:justify-center pb-10">
            <div className=" md:text-center ml-6 md:ml-0">
              <h1 className="font-bold text-2xl mb-3  text-yellow-300">
                Signature Drinks
              </h1>
              <p className="text-1xl ">Explore the bar</p>
            </div>
          </div>
          {/* img-container */}
          <div className="w-[100%] h-[100%] overflow-hidden z-10">
            <img
              src={box_image3}
              className="w-[100%] h-[100%] object-cover duration-300"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeadingCard;
