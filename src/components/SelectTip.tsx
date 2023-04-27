import { useState } from "react";
import Tipbox from "./Tipbox";
import { useDispatch } from "react-redux";
import { setTip } from "../features/slices/tipSlice.ts";

const tips: number[] = [5, 10, 15, 25, 50];

const SelectTip = () => {
  const dispatch = useDispatch();

  const [activeTip, setActiveTip] = useState<number | null>(null);
  return (
    <div>
      {" "}
      <h2 className="text-[#616D6D] font-bold self-start">Select Tip %</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {" "}
        {tips.map((tip) => (
          <Tipbox
            key={tip}
            tip={tip}
            activeTip={activeTip}
            setActiveTip={setActiveTip}
          />
        ))}
        {/* custom tip  */}
        <input
          type="number"
          placeholder="Custom"
          className="border-2 border-[#616D6D] rounded-md text-right mt-2 pr-2 h-[55px] text-[#616D6D] font-bold text-2xl md:text-sm lg:text-lg self-start hover:outline hover:outline-[#5DAAA2]"
          onChange={(e) => {
            dispatch(setTip(Number(e.target.value)));
            setActiveTip(null);
          }}
        />
      </div>
    </div>
  );
};

export default SelectTip;
