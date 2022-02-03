import React from 'react';
import Question from './Question';

const Quiz = (props) => {

  const question = props.questions.map(q => {
    return (
      <Question 
        className="question" 
        question={q} 
        key={Math.random()}
        correct={q.correct_answer}
        incorrect_one = {q.incorrect_answers[0]}
        incorrect_two = {q.incorrect_answers[1]}
        incorrect_three = {q.incorrect_answers[2]}
      />
    )
  })

  return (
    <>
      {question}
    </>
  );
};

export default Quiz;
