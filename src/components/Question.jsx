import React, { memo } from "react";
import { useQuiz } from "../context/QuizContext";
import NextQuestion from "./NextQuestion";
import Timer from "./Timer";

const Question = memo(() => {
  const { answerQuestion, answer, questions, index } = useQuiz();
  const handleAnswerQuestion = (index) => {
    answerQuestion(index);
  };
  const hasAnswered = answer !== null;
  const question = questions.at(index);
  return (
    <div className='w-full space-y-5 md:space-y-10 text-left'>
      <h4 className='md:text-2xl text-zinc-800 '>{question.question}</h4>
      <div className='flex flex-col gap-2 md:gap-3 '>
        {question.options.map((option, index) => (
          <button
            disabled={answer !== null}
            onClick={() => handleAnswerQuestion(index)}
            key={index}
            className={`px-4 py-2 w-full rounded-full text-white bg-gray-400 border-2 border-zinc-400 text-sm md:text-lg transition-all duration-200 hover:translate-x-4 enabled:hover:text-zinc-900 ease-linear cursor-pointer disabled:cursor-not-allowed enabled:hover:bg-transparent ${
              index === answer
                ? "translate-x-4"
                : "disabled:hover:translate-x-0 "
            } ${
              hasAnswered
                ? index === question.correctOption
                  ? "disabled:bg-emerald-500"
                  : "bg-red-400"
                : ""
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      <div className='flex items-center justify-between'>
        <span className='px-2 py-1.5 rounded-full border border-gray-500'>
          {question.points} Point
        </span>
        {/* <NextQuestion /> */}
      </div>
    </div>
  );
});
export default Question;
