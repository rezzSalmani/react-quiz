import React, { memo } from "react";
import { useQuiz } from "../context/QuizContext";
import Starter from "./Starter";
import Loader from "./Loader";
import Questions from "./Questions";
import Results from "./Results";
import Error from "./Error";
import Timer from "./Timer";

const Layout = memo(() => {
  const { status } = useQuiz() || {};
  console.log("render");
  if (!status) {
    return null;
  }

  return (
    <div className='p-6'>
      {status === "ready" && <Starter />}
      {status === "loading" && <Loader />}
      {status === "error" && <Error />}
      {status === "active" && <Questions></Questions>}
      {status === "finished" && <Results />}
    </div>
  );
});

export default Layout;
