import React from "react";
import { useQuiz } from "../context/QuizContext";

const Error = () => {
  const { error } = useQuiz();
  return (
    <div className='flex items-center justify-center flex-col gap-2 text-sm mt-20'>
      <p className='text-red-500 font-semibold'>
        There was an error fetching questions.
      </p>
      <span>{error && error}</span>
    </div>
  );
};

export default Error;
