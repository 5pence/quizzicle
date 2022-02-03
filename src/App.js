import React from "react";
import Quiz from "./components/Quiz"

function App() {

  const [questions, setQuestions] = React.useState()
  let [quizReady, setQuizReady] = React.useState(false)

  React.useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5')
    .then(res => res.json())
    .then(response => {
      setQuestions(response.results)
    })}, [])

  function quizToGo() {
    setQuizReady(true)
  }

  return (
    <>
      <div className="container">
        {!quizReady && <h1>Quizzicle</h1>}
        {!quizReady && <button className="start-btn" onClick={quizToGo}>Start Quiz</button>}
        {quizReady && <Quiz questions={questions} />}
      </div>
    </>
  );
}

export default App;
