import React from "react";

function App() {

  const [questions, setQuestions] = React.useState()
  let [quizReady, setQuizReady] = React.useState(false)

  function getQuestions() {
    const qs = fetch('https://opentdb.com/api.php?amount=5')
      .then(res => res.json())
      .then(response => {
        setQuestions(response.results)
        console.log(response.results);
        setQuizReady(true)
      })
  }


  return (
    <>
      <div className="container">
        <h1>Quizzicle</h1>
        <button className="start-btn" onClick={getQuestions}>Start Quiz</button>
      </div>
    </>
  );
}

export default App;
