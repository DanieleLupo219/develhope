import { useState, useEffect } from "react";

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

  return <h1>{count}</h1>;
}

export default Counter;
