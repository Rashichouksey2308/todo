import React, { useState } from "react";

function CountApp() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState("Rashi");

  return (
    <div>
      <h1> {count} </h1>
      <button onClick={() => setCount("Rashi Chouksey")}>Click me</button>
    </div>
  );
}
export default CountApp;
