import React, { useState } from "react";
import { useEffect } from "react";

const UseEffectFun = () => {
  const [num, setNum] = useState(0);
  useEffect(() => {
    alert(`You clicked ${num} times`);
  },[num]);
  return (
    <>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        click here{num}
      </button>
    </>
  );
};
export default UseEffectFun;
