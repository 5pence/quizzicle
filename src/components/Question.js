import React, {useState} from 'react';

const Question = (props) => {

  const [selectedAnswerId, setSelectedAnswerId] = useState(undefined)

  const handleSelectAnswer = (id) => {
     setSelectedAnswerId(id)

  }

  console.log("a", "quiz");

  return (
    <>
      <p className="question">{props.question.question.replace(/&#8212;/gi, '-')}</p>
      <ul className="listAnswers">
      
        <li className={selectedAnswerId === 1 ? "active" : ""} onClick={() => handleSelectAnswer(1)}>{props.correct}</li>
        <li className={selectedAnswerId === 2 ? "active" : ""} onClick={() => handleSelectAnswer(2)}>{props.incorrect_one}</li>
        {props.incorrect_two && <li className={selectedAnswerId === 3 ? "active" : ""} onClick={() => handleSelectAnswer(3)}>{props.incorrect_two}</li>}
        {props.incorrect_three && <li className={selectedAnswerId === 4 ? "active" : ""} onClick={() => handleSelectAnswer(4)}>{props.incorrect_three}</li>}
    
      </ul>
      <hr />
    </>
  );
};

export default Question;
