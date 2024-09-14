import React from "react";
import img from "../Assest/happening-img1.jpeg";
import img2 from "../Assest/happening-img2.jpeg";
import img3 from "../Assest/happening-img3.jpeg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Happening() {
  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1600,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,

          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col  mt-16">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
          What’s Happening
        </h1>
        <div className="w-[2px] h-[30px] bg-white m-auto my-5 mb-16"></div>
      </div>

      <div className="w-[100%] h-[100%] overflow-hidden">
        <Slider {...settings}>
          {/* box-1 */}
          <div className=" overflow-hidden md:h-[400px] h-[500px] relative">
            <img
              src={img}
              className="happening-img w-[100%] h-[100%] object-cover object-bottom"
              alt=""
            />
            {/* overlay */}
            <div className="happening-overlay w-[100%] h-[100%] bg-gradient-to-r from-black/45 to-black/80 absolute top-0 left-0 z flex justify-center items-end pb-16">
              <div className="text-center text-white">
                <button className="bg-black uppercase text-white  text-[10px] mb-6 font-semibold tracking-[4px]">
                  Events
                </button>
                <p className="text-[13px] mb-4">DECEMBER 18, 2022</p>
                <h1 className="text-2xl font-bold mb-4">
                  New Year’s Eve at Soul Kitchen
                </h1>
                <p className="underline uppercase ">see more </p>
              </div>
            </div>
          </div>

          {/* box-2 */}
          <div className=" overflow-hidden md:h-[400px] h-[500px] relative">
            <img
              src={img2}
              className="happening-img w-[100%] h-[100%] object-cover object-center md:object-bottom"
              alt=""
            />
            {/* overlay */}
            <div className="happening-overlay w-[100%] h-[100%] bg-gradient-to-r from-black/35 to-black/70 absolute top-0 left-0 z flex justify-center items-end pb-16">
              <div className="text-center text-white">
                <button className="bg-black uppercase text-white    text-[10px] mb-6 font-semibold tracking-[4px] mr-2">
                  Food
                </button>
                <button className="bg-black uppercase text-white    text-[10px] mb-6 font-semibold tracking-[4px]">
                  menu
                </button>
                <p className="text-[13px] mb-4">NOVEMBER 2, 2022</p>
                <h1 className="text-2xl font-bold mb-4">New Winter Menu</h1>
                <p className="underline uppercase ">see more </p>
              </div>
            </div>
          </div>

          {/* box-3 */}
          <div className=" overflow-hidden md:h-[400px] h-[500px] relative">
            <img
              src={img3}
              className="happening-img w-[100%] h-[100%] object-cover object-top"
              alt=""
            />
            {/* overlay */}
            <div className="happening-overlay w-[100%] h-[100%] bg-gradient-to-r from-black/35 to-black/70 absolute top-0 left-0 z flex justify-center items-end pb-16">
              <div className="text-center text-white">
                <button className="bg-black uppercase text-white    text-[10px] mb-6 font-semibold tracking-[4px]">
                  Interview
                </button>
                <p className="text-[13px] mb-4">OCTOBER 21, 2022</p>
                <h1 className="text-2xl font-bold mb-4">
                  An Interview with Chef Rithma Randima
                </h1>
                <p className="underline uppercase ">see more </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Happening;
