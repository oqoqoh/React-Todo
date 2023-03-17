import { useEffect, useState } from "react";

const TestCompo = () => {
  let [count, setCount] = useState(0);
  let [age, setAge] = useState(20);
  useEffect(() => {
    if (count != 0 && count < 3) {
      setAge(age + 1);
    }
  }, [count]);
  return (
    <div>
      <div>age : {age}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        up
      </button>
    </div>
  );
};

export default TestCompo;
