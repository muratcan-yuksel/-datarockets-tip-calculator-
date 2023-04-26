import React, { useRef, useEffect } from "react";
import dollarIcon from "../assets/images/icon-dollar.svg";

const MyInput = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-[#616D6D] font-bold self-start">Bill</h2>
      <div className=" bg-[#F3F8FB] flex justify-between items-center  w-full h-10 pl-4 rounded-md">
        <img src={dollarIcon} alt="dollar icon" className="h-5" />
        <input
          className="bg-[#F3F8FB] appearance-none text-right text-[#0A4A4A] font-bold"
          type="number"
        />
      </div>
    </div>
  );
};

export default MyInput;
