import React from "react";
import Quiz from "./components/Quiz"

function App() {

  const [questions, setQuestions] = React.useState()

  let [quizReady, setQuizReady] = React.useState(false)

  React.useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5&type=multiple')
    .then(res => res.json())
    .then(response => {
      setQuestions(response.results)
    })}, [])

  function quizToGo() {
    setQuizReady(true)
  }

  function selectHandler(event) {
    event.preventDefault()
    console.log("here");
    console.log(event.target);
    //event.currentTarget.className += "active";
  }

  return (
    <>
      <div className="container">
        {!quizReady && <h1>Quizzicle</h1>}
        {!quizReady && <button className="start-btn" onClick={quizToGo}>Start Quiz</button>}
        {quizReady && 
          <Quiz 
            questions={questions} 
            selectHandler={selectHandler} 
          />}
      </div>
    </>
  );
}

export default App;
