import { useState } from "react";
import QuestionCard from "./components/questionCard/QuestionCard";

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () => {};

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};

  const TOTAL_QUESTIONS = 10;
  return (
    <div>
      <h1>REACT QUIZ</h1>
      <button onClick={startTrivia}>Start</button>
      <p>Score : </p>
      <p>Loading Questions ...</p>
      <QuestionCard
        questionNumber={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      />
      <button onClick={nextQuestion}>Next Question</button>
    </div>
  );
}

export default App;
