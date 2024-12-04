import React,{useState} from 'react';
import './App.css';
import SelectedQuiz from './components/SelectedQuiz';
import DisplayQuiz from './components/DisplayQuiz';
import Data from './data/data';
const App = () => {
  const [Quiz, setQuiz] = useState(null);

  return (
    <div className="App">
      <h1>Quiz App</h1>
        <SelectedQuiz Data={Data} setQuiz={setQuiz} />
        <DisplayQuiz Quiz={Quiz} setQuiz={setQuiz} />
    </div>
  );
};
export default App;
