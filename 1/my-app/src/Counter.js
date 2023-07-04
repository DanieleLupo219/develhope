import { useState, useEffect } from "react";
import CounterDisplay from "./CounterDisplay";

function Counter(props) {
  const [count, setCount] = useState(props.initial);

  useEffect(() => {
    const intervalFunc = setInterval(() => {
      setCount((value) => value + props.increment);
    }, props.interval);

    return () => {
      clearInterval(intervalFunc);
    };
  }, []);

  return <CounterDisplay count={count} />;
}

export default Counter;
