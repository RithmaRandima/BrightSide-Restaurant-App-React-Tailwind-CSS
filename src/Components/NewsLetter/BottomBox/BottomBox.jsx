import React from "react";

const BottomBox = (props) => {
  return (
    <div className="w-[100%] h-[100%] flex flex-col text-center items-center justify-center text-white p-4">
      <h1 className="mx-auto text-[50px]">{props.icon}</h1>
      <h1 className="text-xl font-semibold my-3">{props.title}</h1>
      <p className="text-center mt-3 text-gray-300 t-[10px] ">
        {props.subTitle}
      </p>
    </div>
  );
};

export default BottomBox;
