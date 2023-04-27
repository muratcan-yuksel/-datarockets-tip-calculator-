import React, { useRef, useEffect } from "react";
import dollarIcon from "../assets/images/icon-dollar.svg";
import personIcon from "../assets/images/icon-person.svg";
import type { RootState } from "../store/store";
import { useSelector, useDispatch } from "react-redux";
import { setBill } from "../features/slices/billSlice.ts";
import { setPeople } from "../features/slices/peopleSlice.ts";

type Props = {
  value: number;
  propType: "bill" | "people";
};

const conditionalImage = (propType: Props["propType"]) => {
  return propType === "bill" ? (
    <img src={dollarIcon} alt="dollar icon" className="h-6" />
  ) : (
    <img src={personIcon} alt="person icon" className="h-6" />
  );
};

const conditionalTitle = (propType: Props["propType"]) => {
  return propType === "bill" ? "Bill" : "Number of People";
};

const UserInput = ({ value, propType }: Props) => {
  const count = useSelector((state: RootState) => state.bill.value);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-[#616D6D] font-bold self-start mb-2 mt-7">
        {conditionalTitle(propType)}
      </h2>
      <div className=" bg-[#F3F8FB] flex justify-between items-center  w-full h-14 pl-4 rounded-md mb-7">
        {conditionalImage(propType)}
        <input
          className="bg-[#F3F8FB] appearance-none text-right text-[#0A4A4A] w-full md:max-w-full font-bold text-xl pr-4"
          type="number"
          onChange={(e) => {
            if (propType === "bill") {
              dispatch(setBill(Number(e.target.value)));
            } else if (propType === "people") {
              dispatch(setPeople(Number(e.target.value)));
            }
          }}
        />
      </div>
    </div>
  );
};

export default UserInput;
