import React, { useState } from 'react'
import { Link } from "react-router-dom";
import  '../style/chair.css'
import QuestionTable from '../teachers/quetable';
const QueList = () => {
  
  const [questions, setQuestions] = useState([]);
  return (
    <div>
        <h3>Here are the questions the teachers submit</h3>
        {/* <QuestionForm questions={questions} setQuestions={setQuestions} /> */}
        <QuestionTable questions={questions} /> 

    </div>
  )
}
export default QueList