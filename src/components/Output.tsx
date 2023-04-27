import React from "react";

const Output = () => {
  const values = [
    { title: "Tip Amount", amount: "$0.00" },
    { title: "Total", amount: "$0.00" },
  ];
  return (
    <div className="md:w-1/2 bg-[#00474B] rounded-2xl text-white font-bold flex flex-col   justify-center p-5">
      {values.map((value, index) => (
        <div key={index} className="flex justify-between my-5">
          <div>
            <h2> {value.title} </h2>
            <h3 className="text-[#77adb0]">/ person</h3>
          </div>
          <h1 className="text-[#26C2AD] text-4xl">{value.amount}</h1>
        </div>
      ))}
      <button className="bg-[#26C2AD] self-center text-[#00474B] rounded-md w-10/12 h-14 text-2xl mt-5 transform hover:scale-110 transition duration-300">
        {" "}
        RESET
      </button>
    </div>
  );
};

export default Output;
