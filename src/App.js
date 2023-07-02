import './App.css';
import React, { useState, useContext } from 'react'
import MainMenu from './Components/MainMenu';
import Quiz from './Components/Quiz';
import EndScreen from './Components/EndScreen';

import {QuizContext} from './Helpers/Contexts'

function App() {
  const[gameState, setGameState] = useState("menu");
  //4.From Quiz->To keep state of the score: global state-> bc we use it to the other components
  const [score, setScore] = useState(0);

  return (
    <div className="App"><h1>Quiz App</h1> 
    <QuizContext.Provider value={{gameState, setGameState, score, setScore}}>

    {gameState === "menu" && <MainMenu />}
    {gameState === "quiz" && <Quiz />}
    {gameState === "endScreen" && <EndScreen />}
    </QuizContext.Provider>
    </div>
  );
}

export default App;
