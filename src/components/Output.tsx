import { useEffect } from "react";
import type { RootState } from "../store/store";
import { useSelector, useDispatch } from "react-redux";
import {
  calculateTotalResult,
  calculatePersonResult,
} from "../features/slices/resultSlice.ts";
import { setBill } from "../features/slices/billSlice.ts";
import { setTip } from "../features/slices/tipSlice.ts";
import { setPeople } from "../features/slices/peopleSlice.ts";
import { setResetTrue } from "../features/slices/resetSlice.ts";

const Output = () => {
  const dispatch = useDispatch();
  // const [totalTip, setTotalTip] = useState(0);
  // const [personTip, setPersonTip] = useState(0);

  const billValue = useSelector((state: RootState) => state.bill.value);
  const tipValue = useSelector((state: RootState) => state.tip.value);
  const peopleValue = useSelector((state: RootState) => state.people.value);
  const totalResult = useSelector(
    (state: RootState) => state.result.totalResult
  );
  const personResult = useSelector(
    (state: RootState) => state.result.personResult
  );

  const handleCalculate = (bill: number, tip: number, people: number) => {
    dispatch(calculateTotalResult({ bill, tip }));
    dispatch(calculatePersonResult({ bill, tip, people }));
  };

  const resetValues = () => {
    dispatch(setBill(0));
    dispatch(setTip(0));
    dispatch(setPeople(0));
    dispatch(setResetTrue());
  };

  const conditionalButton = () => {
    if (billValue === 0 || peopleValue === 0) {
      return (
        <button
          type="button"
          className="bg-[#26C2AD] self-center text-[#00474B] rounded-md w-10/12 h-14 text-2xl mt-5 "
          disabled
        >
          RESET
        </button>
      );
    } else {
      return (
        <button
          onClick={resetValues}
          className="bg-[#26C2AD] self-center text-[#00474B] rounded-md w-10/12 h-14 text-2xl mt-5 transform hover:scale-110 transition duration-300"
        >
          {" "}
          RESET
        </button>
      );
    }
  };

  useEffect(() => {
    handleCalculate(billValue, tipValue, peopleValue);
    console.log(billValue, tipValue, peopleValue);
    console.log(personResult, totalResult);
  });

  const values = [
    { title: "Tip Amount", amount: `$ ${personResult}` },
    { title: "Total", amount: `$ ${totalResult}` },
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
      {conditionalButton()}
    </div>
  );
};

export default Output;
