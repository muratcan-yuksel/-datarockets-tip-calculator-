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
  const billValue = useSelector((state: RootState) => state.bill.value);
  const peopleValue = useSelector((state: RootState) => state.people.value);
  const dispatch = useDispatch();
  //give red outline if there are 0 people
  const outlineClass =
    propType !== "bill" && peopleValue === 0
      ? "  outline outline-[#d14721] outline-4"
      : "";

  const zeroError = (propType: Props["propType"]) => {
    if (propType !== "bill" && peopleValue === 0) {
      return "Cant be zero";
    }
  };
  return (
    <div className="flex w-full flex-col items-center">
      <h2 className="w-full text-[#616D6D] font-bold self-start mb-2 mt-7">
        <div className="flex justify-between  w-full md:max-w-full    ">
          <div> {conditionalTitle(propType)}</div>

          <div className="ml-12 text-[#d14721]"> {zeroError(propType)}</div>
        </div>
      </h2>
      <div
        className={` bg-[#F3F8FB] flex justify-between items-center  w-full h-14 pl-4 rounded-md mb-7 ${outlineClass} `}
      >
        {conditionalImage(propType)}
        <input
          className="bg-[#F3F8FB] appearance-none text-right text-[#0A4A4A] w-full md:max-w-full font-bold text-xl pr-4"
          type="number"
          placeholder="0"
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
