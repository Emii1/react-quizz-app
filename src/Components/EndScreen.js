import React, { useContext } from 'react'
import { QuizContext } from '../Helpers/Contexts'
import {Questions} from '../Helpers/QuestionBank'
import "../App.css"

function EndScreen() {
  //Since we want to display the actual score & we wanna se the length of the list
  const { score, setScore, setGameState } = useContext(QuizContext);
  //Finally we wanna display the main page again & start over
  const restartQuiz =()=>{
    setScore(0);
    setGameState("menu");
  }
  return (
    <div className='EndScreen'>
      <h1>Quiz finished</h1>
      <h3> {score} / {Questions.length} </h3>
      <button onClick={restartQuiz}> Restart Quiz</button>
    </div>
  )
}

export default EndScreen;
