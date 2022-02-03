import React from 'react';

const Question = (props) => {

  return (
    <>
      <p>{props.question.question}</p>
      <ul>
        <li>{props.correct}</li>
        <li>{props.incorrect_one}</li>
        <li>{props.incorrect_two}</li>
        <li>{props.incorrect_three}</li>
      </ul>
      <hr />
    </>
  );
};

export default Question;
