import { useState, useEffect } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    setCounter(
      localStorage.getItem("counter")
        ? parseInt(localStorage.getItem("counter"))
        : 0
    );
  }, []);
  return (
    <div className="Counter">
      <br />
      <button
        onClick={() =>
          setCounter((prevCounter) => {
            localStorage.setItem("counter", prevCounter - 1);
            return prevCounter - 1;
          })
        }
      >
        -
      </button>
      <h1>{counter}</h1>
      <button
        onClick={() =>
          setCounter((prevCounter) => {
            localStorage.setItem("counter", prevCounter + 1);
            return prevCounter + 1;
          })
        }
      >
        +
      </button>
    </div>
  );
};

export default Counter;
