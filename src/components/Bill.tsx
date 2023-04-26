import React, { useRef, useEffect } from "react";
import dollarIcon from "../assets/images/icon-dollar.svg";

const MyInput = () => {
  const editableDiv: React.MutableRefObject<null> = useRef(null);

  return (
    // <div contentEditable={true} className="border border-s-black bg-#F3F8FB">
    //   hey
    //   <img src={dollarIcon} alt="dollar icon" />
    // </div>

    <div>
      <div className="border border-s-black bg-#F3F8FB flex  items-center w-full h-10 pl-4">
        <img src={dollarIcon} alt="dollar icon" className="h-5" />
        <input type="text" />
      </div>
    </div>
  );
};

export default MyInput;
