import React from "react";
import { useQuiz } from "../context/QuizContext";

const NextQuestion = () => {
  const { index, answer, nextQUestion, questions, finishQuiz } = useQuiz();
  let classes =
    "px-8 p-1.5 rounded-full border font-RocknRoll border-gray-500 transition-all";
  // if (answer === null) return null;
  const numQuestions = questions.length;
  if (index < numQuestions - 1)
    return (
      <button
        onClick={() => nextQUestion()}
        className={`disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-white ${classes}`}
        disabled={answer === null}
      >
        Next
      </button>
    );

  if (index === numQuestions - 1)
    return (
      <button className={classes} onClick={() => finishQuiz()}>
        Finish
      </button>
    );
};

export default NextQuestion;
