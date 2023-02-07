import { useState } from "react";
import s from "./Counter.module.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      {/* TODO: настроить автокомплит */}
      <h1 className={s.header}>{count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
