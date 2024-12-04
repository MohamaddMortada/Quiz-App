import React, { useState } from 'react';

const DisplayQuiz = ({ Quiz, setQuiz}) => {

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const handleAnswer = (answer) => {};
  const question = Quiz.questions[currentQuestionIndex];

    if (question.type === "mcq") {
      return (
        <div>
          <p>{question.question}</p>
          {question.options.map((option, index) => (
            <button key={index} onClick={() => handleAnswer(option)}>
              {option}
            </button>
          ))}
        </div>
      );
    } 
};

export default DisplayQuiz;