import React from 'react';
import '../App.css';

const SelectedQuiz = ({ Data, setQuiz }) => {
  return (
    <div>
      <h2>Select a Quiz</h2>
      {Data.map((quiz) => (
        <button key={quiz.id} onClick={() => setQuiz(quiz)}>
          {quiz.title}
        </button>
      ))}
    </div>
  );
};

export default SelectedQuiz;