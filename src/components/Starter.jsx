import React, { useEffect, useState } from "react";
import { useQuiz } from "../context/QuizContext";
import { SECS_PER_QUESTIONS } from "../context/QuizContext";
const Starter = () => {
  const { userName, updateUserName, startQuiz, questions } = useQuiz();
  const [isValid, setIsValid] = useState(false);
  const changeUserName = (event) => {
    updateUserName(event.target.value);
  };
  useEffect(() => {
    if (userName.length > 3) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [userName]);
  const [mins, setMins] = useState("00");
  const [seconds, setSeconds] = useState("00");
  useEffect(() => {
    const time = questions.length * SECS_PER_QUESTIONS;
    setMins(Math.floor(time / 60));
    setSeconds(time % 60);
  }, [questions]);

  return (
    <div className='flex items-center justify-center flex-col gap-6 text-center mt-5 md:mt-10'>
      <p className='text-xl'>Please Enter Your Name To Start Quiz</p>
      <input
        type='text'
        name='userName'
        id='userName'
        placeholder='User Name'
        autoComplete='off'
        value={userName}
        onChange={changeUserName}
        className={`w-1/2 py-2 px-2 border border-zinc-400 rounded-lg outline-none   ${
          isValid ? "focus:border-emerald-400" : "focus:border-red-500"
        }`}
      />

      <span>
        Total time: {mins}:{seconds} minutes
      </span>
      <button
        className='px-6 py-1 bg-gray-500 text-white rounded-full text-lg hover:bg-transparent hover:text-black border border-gray-400 active:translate-y-1 active:scale-95 transition-all'
        onClick={startQuiz}
      >
        Start
      </button>
    </div>
  );
};

export default Starter;
