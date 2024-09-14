import React from "react";
import { categories } from "../../Data/Data";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CategoryBox from "./CategoryBox/CategoryBox";

function Category() {
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
      <div className="w-[100%] h-[100%]">
        <Slider {...settings}>
          {categories.map((item) => (
            <CategoryBox
              key={item.id}
              name={item.name}
              date={item.date}
              img={item.img}
              info={item.info}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Category;
