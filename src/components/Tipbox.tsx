import React, { useState } from "react";

type Props = {
  tip: number;
  activeTip: number | null;
  setActiveTip: (tip: number | null) => void;
};

const Tipbox = ({ tip, activeTip, setActiveTip }: Props) => {
  const handleClick = () => {
    setActiveTip(tip === activeTip ? null : tip);
  };

  const isActive = activeTip === tip;

  const buttonClasses = `bg-[#00474B] m-2 p-2 text-white font-bold rounded-md min-w-[35%] max-w-md hover:bg-[#26C2AD] transition-transform duration-300 transform hover:scale-105 ${
    isActive ? "bg-[#26C2AD]" : ""
  }`;

  return (
    <button className={buttonClasses} onClick={handleClick}>
      {" "}
      {tip}%
    </button>
  );
};

export default Tipbox;
