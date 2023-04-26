import React, { useRef, useEffect } from "react";
import dollarIcon from "../assets/images/icon-dollar.svg";
import personIcon from "../assets/images/icon-person.svg";

type Props = {
  value: number;
  propType: "bill" | "people";
};

const conditionalImage = (propType: Props["propType"]) => {
  return propType === "bill" ? (
    <img src={dollarIcon} alt="dollar icon" className="h-5" />
  ) : (
    <img src={personIcon} alt="person icon" className="h-5" />
  );
};

const conditionalTitle = (propType: Props["propType"]) => {
  return propType === "bill" ? "Bill" : "Number of People";
};

const MyInput = ({ value, propType }: Props) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-[#616D6D] font-bold self-start">
        {conditionalTitle(propType)}
      </h2>
      <div className=" bg-[#F3F8FB] flex justify-between items-center  w-full h-10 pl-4 rounded-md">
        {conditionalImage(propType)}
        <input
          className="bg-[#F3F8FB] appearance-none text-right text-[#0A4A4A] font-bold"
          type="number"
        />
      </div>
    </div>
  );
};

export default MyInput;
