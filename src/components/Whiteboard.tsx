import Input from "./Input.tsx";
import Output from "./Output.tsx";

const Whiteboard = () => {
  return (
    <div className="h-screen md:h-full flex flex-col md:flex-row md:justify-center md:items-center bg-white rounded-xl p-10">
      {/* pass dummy props */}
      <Input bill={0} people={0} propType={"bill"} />
      <Output />
    </div>
  );
};

export default Whiteboard;
