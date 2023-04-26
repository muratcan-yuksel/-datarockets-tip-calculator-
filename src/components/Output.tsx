import React from "react";

const Output = () => {
  const values = [
    { title: "Tip Amount", amount: "$0.00" },
    { title: "Total", amount: "$0.00" },
  ];
  return (
    <div className="bg-[#00474B] text-white font-bold flex flex-col  justify-center p-5">
      {values.map((value) => (
        <div className="flex justify-between">
          <div>
            <h2> {value.title} </h2>
            <h3 className="text-[#77adb0]">/ person</h3>
          </div>
          <h1 className="text-[#26C2AD] text-4xl">{value.amount}</h1>
        </div>
      ))}
      <button className="bg-[#26C2AD] self-center text-[#00474B] rounded-md w-10/12 h-10 mt-5">
        RESET
      </button>
    </div>
  );
};

export default Output;
