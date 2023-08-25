import { useState } from "react";

export default function Quiz() {
  const [answered, setAnswered] = useState<Boolean>(false);

  function handleAnswer() {
    setAnswered(true);
  }

  return (
    <div className="my-4">
      <p className="text-xl">Should you become wordpress dev?</p>
      <button
        onClick={handleAnswer}
        className="bg-green-400 px-4 py-2 rounded-md mr-4"
      >
        Yes
      </button>
      <button
        onClick={handleAnswer}
        className="bg-yellow-400 px-4 py-2 rounded-md"
      >
        Why not
      </button>
      {answered && <p>That's a good decision!</p>}
    </div>
  );
}
