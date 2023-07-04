import { useState, useEffect } from "react";
import CounterDisplay from "./CounterDisplay";

function ClickCounter() {
  const [count, setCount] = useState(0);

  const handleCounterIncrement = () => {
    setCount((value) => value + 1);
  };

  return (
    <div>
      <CounterDisplay count={count} />
      <button onClick={handleCounterIncrement}>Click me!</button>
    </div>
  );
}

export default ClickCounter;
