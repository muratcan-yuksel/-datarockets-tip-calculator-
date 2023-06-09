import { useDispatch } from "react-redux";
import { setTip } from "../features/slices/tipSlice.ts";
import { useSelector } from "react-redux";
import { RootState } from "../store/store.ts";
import { useEffect } from "react";

type Props = {
  tip: number;
  activeTip: number | null;
  setActiveTip: (tip: number | null) => void;
};

const Tipbox = ({ tip, activeTip, setActiveTip }: Props) => {
  const dispatch = useDispatch();

  const resetValue = useSelector((state: RootState) => state.reset.value);

  const handleClick = () => {
    setActiveTip(tip === activeTip ? null : tip);
    console.log(tip);
    dispatch(setTip(tip));
  };

  useEffect(() => {
    if (resetValue) {
      setActiveTip(null);
    }
  }, [resetValue]);

  const isActive = activeTip === tip;

  const buttonClasses = `bg-[#00474B] m-2 p-2 text-white font-bold rounded-md min-w-[35%] h-14 max-w-md hover:bg-[#26C2AD] transition-transform duration-300 transform hover:scale-105 text-xl ${
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
