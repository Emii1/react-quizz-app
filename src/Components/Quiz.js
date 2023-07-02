import React, { useState, useContext } from 'react'
import {QuizContext} from '../Helpers/Contexts'
import { Questions } from '../Helpers/QuestionBank'
import  '../App.css'


function Quiz() {
    //5. The pieces of info we wanna use
    const { score, setScore, setGameState } = useContext(QuizContext);
    //1.We start from the first one: reference to the array in question bank
    const [currQuestion, setCurrQuestion]= useState(0);
    //2.For the button that goes to the next question
    const [optionChosen, setOptionChosen] = useState("");

    //3.How do we move to the next question?
    const nextQuestion = ()=>{
        if (Questions[currQuestion].answer === optionChosen){
            setScore(score +1);
         }
         
        setCurrQuestion(currQuestion +1);
    };
    const finishQuiz = ()=>{
        if (Questions[currQuestion].answer === optionChosen){
            setScore(score +1);
         }
         setGameState("endScreen");

    };
//I wanna access the questionsArray:Questions[] and then the current elem(init=0)
//-> Questions[currQuestion] and then access the prompt: .prompt
//Then inside div: i wanna get all the opions displayed:each option is a button {Questions[currQuestion].opt...}
  return (
    <div className='Quiz'>
      
      <h1>{Questions[currQuestion].prompt}</h1>
      <div className='options'>
          <button onClick={()=>setOptionChosen("A")}> {Questions[currQuestion].optionA}</button>
          <button onClick={()=>setOptionChosen("B")}> {Questions[currQuestion].optionB}</button>
          <button onClick={()=>setOptionChosen("C")}> {Questions[currQuestion].optionC}</button>
          <button onClick={()=>setOptionChosen("D")}> {Questions[currQuestion].optionD}</button>
      </div>
      {currQuestion === Questions.length - 1 ? (
          <button onClick={finishQuiz}> Finish Quiz</button>
      ): <button onClick={nextQuestion}> Next Question </button>}
      
    </div>
  );
}

export default Quiz
