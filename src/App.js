import React,{useState} from 'react';
import './App.css';
import SelectedQuiz from './components/SelectedQuiz';
import DisplayQuiz from './components/DisplayQuiz';
import Data from './data/data';
const App = () => {
  const [Quiz, setQuiz] = useState(null);
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <h1>Quiz App</h1>

      {!Quiz ? (
        <SelectedQuiz Data={Data} setQuiz={setQuiz} />
      ):(
      <DisplayQuiz Quiz={Quiz} setQuiz={setQuiz} score={score} setScore={setScore} />
      )}

    </div>
  );
};
export default App;
