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
    } else if (question.type === "input") {
        let userInput = "";
        return (
          <div>
            <p>{question.question}</p>
            <input type="text" onChange={(e) => (userInput = e.target.value)}
            />
            <button onClick={() => handleAnswer(userInput)}>Submit</button>
          </div>
        );
      }
};

export default DisplayQuiz;