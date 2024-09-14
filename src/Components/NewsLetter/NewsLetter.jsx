import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { newsLetterBoxData } from "../../Data/Data";
import BottomBox from "./BottomBox/BottomBox";

const NewsLetter = () => {
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

      <div className="w-[100%] h-[100%]">
        <Slider {...settings}>
          {newsLetterBoxData.map((data) => {
            return (
              <BottomBox
                key={data.id}
                icon={data.icon}
                title={data.title}
                subTitle={data.subTitle}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default NewsLetter;
