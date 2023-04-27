import React from "react";
import Whiteboard from "./components/Whiteboard";
import logo from "./assets/images/logo.svg";

const index = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <img className="m-10" src={logo} alt="logo" />
      <Whiteboard />
    </div>
  );
};

export default index;
