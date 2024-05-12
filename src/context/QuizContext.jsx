import React, { createContext, useEffect, useReducer, useContext } from "react";
export const SECS_PER_QUESTIONS = 30;
const QuizContext = createContext({
  questions: [],
  userName: "",
  status: "",
  index: 0,
  points: 0,
  highestScore: 0,
  answer: null,
  secondsRemaining: null,
  error: "",
});

export const useQuiz = () => useContext(QuizContext);

const QuizReducer = (state, action) => {
  switch (action.type) {
    case "fetchData":
      return { ...state, questions: action.payload, status: "ready" };
    case "error":
      return { ...state, status: "error", error: action.payload };
    case "updateUserName":
      return { ...state, userName: action.payload };
    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * SECS_PER_QUESTIONS,
      };
    case "newAnswer":
      const question = state.questions.at(state.index);
      if (question) {
        return {
          ...state,
          answer: action.payload,
          points:
            action.payload === question.correctOption
              ? state.points + question.points
              : state.points,
        };
      }
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case "finish":
      // set highestScore to localStorage
      localStorage.setItem(
        "highestScore",
        state.points > state.highestScore ? state.points : state.highestScore
      );

      return {
        ...state,
        status: "finished",
        highestScore:
          state.points > state.highestScore ? state.points : state.highestScore,
      };

    case "restart":
      return {
        ...state,
        status: "ready",
        index: 0,
        points: 0,
        answer: null,
        secondsRemaining: null,
        userName: "",
        error: "",
      };
    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };
    case "updateHighestScore":
      return {
        ...state,
        highestScore: action.payload,
      };
    default:
      return state;
  }
};
const QuizContextProvider = ({ children }) => {
  const [quizProcess, dispatchQuizReducer] = useReducer(QuizReducer, {
    questions: [],
    userName: "",
    status: "loading",
    index: 0,
    points: 0,
    highestScore: 0,
    answer: null,
    secondsRemaining: null,
    error: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://65818f8f3dfdd1b11c439954.mockapi.io/questions"
        );
        console.log(response);
        if (!response.ok) {
          throw new Error("Something went wrong! try again later.");
        }
        const data = await response.json();

        if (data) {
          dispatchQuizReducer({ type: "fetchData", payload: data });
        }
      } catch (error) {
        dispatchQuizReducer({ type: "error", payload: error.message });
      }
    };
    const highestScore = localStorage.getItem("highestScore");
    if (highestScore) {
      dispatchQuizReducer({
        type: "updateHighestScore",
        payload: highestScore,
      });
    }
    fetchData();
  }, []);
  function updateUserName(userName) {
    dispatchQuizReducer({ type: "updateUserName", payload: userName });
  }
  const startQuiz = () => {
    if (quizProcess.userName.length > 3) dispatchQuizReducer({ type: "start" });
  };
  const answerQuestion = (answer) => {
    dispatchQuizReducer({ type: "newAnswer", payload: answer });
  };
  const nextQUestion = () => {
    dispatchQuizReducer({ type: "nextQuestion" });
    dispatchQuizReducer({ type: "tick" });
  };
  const finishQuiz = () => {
    dispatchQuizReducer({ type: "finish" });
  };
  const restartQuiz = () => {
    dispatchQuizReducer({ type: "restart" });
  };
  const timeHandler = () => {
    dispatchQuizReducer({ type: "tick" });
    console.log("tick");
  };
  const QuizValue = {
    questions: quizProcess.questions,
    status: quizProcess.status,
    userName: quizProcess.userName,
    index: quizProcess.index,
    points: quizProcess.points,
    highestScore: quizProcess.highestScore,
    answer: quizProcess.answer,
    error: quizProcess.error,
    secondsRemaining: quizProcess.secondsRemaining,
    updateUserName,
    startQuiz,
    answerQuestion,
    nextQUestion,
    finishQuiz,
    restartQuiz,
    timeHandler,
  };
  return (
    <QuizContext.Provider value={QuizValue}>{children}</QuizContext.Provider>
  );
};

export default QuizContextProvider;
