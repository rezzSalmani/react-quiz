import React, { memo } from "react";
import { useQuiz } from "../context/QuizContext";
import Question from "./Question";
import Timer from "./Timer";
import NextQuestion from "./NextQuestion";

const Questions = memo(() => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full gap-4'>
      {<Question />}
      <div className='flex w-full items-center justify-between mx-2'>
        {/* <span>
          Question {index + 1} of {questions.length}
        </span> */}
        <NextQuestion />
      </div>
    </div>
  );
});

export default Questions;
