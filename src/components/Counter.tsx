import { useState } from "react";

function Counter() {
  const [count, setCount] = useState<number>(0);

  function handleClick() {
    setCount((count) => count + 1);
  }

  return (
    <button
      className="py-3 px-6 bg-yellow-400 rounded-md w-fit"
      onClick={handleClick}
    >
      Clicks: {count}
    </button>
  );
}

export default Counter;
