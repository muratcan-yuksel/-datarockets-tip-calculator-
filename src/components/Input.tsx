import React from "react";
import UserInput from "./UserInput.tsx";
import SelectTip from "./SelectTip.tsx";

type Props = {
  bill: number;
  people: number;
  propType: "bill" | "people";
};

const Input = ({ bill, people }: Props) => {
  return (
    <div className="">
      {" "}
      <UserInput value={bill} propType="bill" />
      <SelectTip />
      <UserInput value={people} propType="people" />
    </div>
  );
};

export default Input;
