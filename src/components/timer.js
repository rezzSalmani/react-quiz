import { useEffect, useState, useMemo } from "react";
import { useQuiz } from "../context/QuizContext";

const SECS_PER_QUESTIONS = 30;

const Timer = () => {
  const { questions, finishTimeHandler } = useQuiz();
  const [secondsRemaining, setSecondsRemaining] = useState(
    questions.length * SECS_PER_QUESTIONS || 0
  );

  const tick = () => {
    if (secondsRemaining === 0) return finishTimeHandler();
    setSecondsRemaining((prev) => prev - 1);
  };

  const timeDisplay = useMemo(() => {
    const mins = Math.floor(secondsRemaining / 60);
    const seconds = secondsRemaining % 60;
    return `${mins < 10 ? "0" : ""}${mins}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  }, [secondsRemaining]);

  useEffect(() => {
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [tick]);

  return <div className='timer'>{timeDisplay}</div>;
};

export default Timer;
