import UserInput from "./UserInput.tsx";
import SelectTip from "./SelectTip.tsx";

type Props = {
  bill: number;
  people: number;
  propType: "bill" | "people";
};

const Input = ({ bill, people }: Props) => {
  return (
    <div className="md:w-1/2 md:mr-16">
      {" "}
      <UserInput userValue={bill} propType="bill" />
      <SelectTip />
      <UserInput userValue={people} propType="people" />
    </div>
  );
};

export default Input;
