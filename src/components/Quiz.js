import React from 'react';
import Question from './Question';

const Quiz = (props) => {

  console.log(props, "quizes");

  const question = props.questions.map(q => {
    return (
      <Question 
        question={q} 
        key={Math.random()}
        id={Math.random()}
        correct={q.correct_answer}
        incorrect_one = {q.incorrect_answers[0]}
        incorrect_two = {q.incorrect_answers[1]}
        incorrect_three = {q.incorrect_answers[2]}
        selectHandler = {props.selectHandler}
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
