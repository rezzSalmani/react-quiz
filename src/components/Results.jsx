import React from "react";
import { useQuiz } from "../context/QuizContext";

const Results = () => {
  const { points, questions, highestScore, restartQuiz } = useQuiz();
  const maxPossiblePoints = questions.reduce(
    (prev, cur) => prev + cur.points,
    0
  );
  const percentage = (points / maxPossiblePoints) * 100;
  let resultText;
  if (percentage === 100) resultText = "Perfect! 🥇";
  if (percentage >= 80 && percentage < 100) resultText = "Insanely Good! 👏";
  if (percentage >= 80 && percentage < 100) resultText = "Nice Job! 🎉";
  if (percentage >= 50 && percentage < 80) resultText = "not Bad! 🙃";
  if (percentage >= 0 && percentage < 50) resultText = "Try Harder! 🤨";
  if (percentage === 0) resultText = "awful 🤦‍♂️";
  return (
    <div className='flex flex-col items-center justify-center gap-3'>
      <span className='text-xl font-RocknRoll'>{resultText}</span>
      <p>
        You Scored <span className='text-lg font-bold'>{points}</span> out of{" "}
        {maxPossiblePoints}
      </p>
      <p>
        Your Hightest Score is{" "}
        <span className='text-lg font-bold'>{highestScore}</span>
      </p>
      <button
        onClick={() => restartQuiz()}
        className=' border rounded-3xl px-6 py-1 shadow-md'
      >
        Restart Quiz
      </button>
    </div>
  );
};

export default Results;
