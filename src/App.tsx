import QuestionCard from "./components/questionCard/QuestionCard";

function App() {
  const startTrivia = async () => {};

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};
  return (
    <div>
      <h1>REACT QUIZ</h1>
      <button onClick={startTrivia}>Start</button>
      <p>Score : </p>
      <p>Loading Questions ...</p>
      <QuestionCard />
      <button onClick={nextQuestion}>Next Question</button>
    </div>
  );
}

export default App;
