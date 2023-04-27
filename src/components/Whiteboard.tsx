import React from "react";
import Input from "./Input.tsx";
import Output from "./Output.tsx";

const Whiteboard = () => {
  return (
    <div className="h-screen bg-white rounded-xl p-10">
      {/* pass dummy props */}
      <Input bill={0} people={0} propType={"bill"} />
      <Output />
    </div>
  );
};

export default Whiteboard;
