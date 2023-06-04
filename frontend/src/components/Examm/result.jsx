import React, { useEffect } from 'react'
import './styles/result.css';
import { Link } from 'react-router-dom';
import './styles/app.css'
import { useDispatch, useSelector } from 'react-redux'

import resetAllAction from './redux/question_reducer'
import resetResultAction from './redux/result_reducer'
import { attempts_Number, earnPoints_Number, flagResult } from './helper/helper';

export default function Result() {

  const dispatch = useDispatch()
  const { questions : { queue ,answers}, result : { result, userId}}  = useSelector(state => state)
  
  useEffect(() =>{
    console.log(flag)
  })
  const totalPoints = queue.length * 1; 
  const attempts = attempts_Number(result);
  const earnPoints = earnPoints_Number(result, answers, 1)
  const flag = flagResult(totalPoints, earnPoints)
    
  function onRestart(){
    dispatch(resetAllAction())
    dispatch(resetResultAction())

}
  return (
    <div className='container'>
      <h2 className='title text-light'> Result Summary </h2>

      <div className='result flex-center'>
         <div className='flex'>
               <span>UserName :</span>
               <span className='bold'>{userId || ""}</span>

         </div>
         <div className='flex'>
                <span>Total Points : </span>
                <span className='bold'>{totalPoints || 0}</span>
            </div>
            <div className='flex'>
                <span>Total Questions : </span>
                <span className='bold'>{ queue.length || 0}</span>
            </div>
            <div className='flex'>
                <span>Total Attempts : </span>
                <span className='bold'>{attempts || 0}</span>
            </div>
            <div className='flex'>
                <span>Your Score : </span>
                <span className='bold'>{earnPoints || 0}</span>
            </div>
            {/* <div className='flex'>
                <span>Final Result</span>
                <span className='bold'>passed</span>
            </div> */}
         <div className='flex'>
                <span>Final Result</span>
                <span style={{ color : `${flag ? "#2aff95" : "#ff2a66" }` }} className='bold'>{flag ? "Passed" : "Failed"}</span>
            </div>
      </div>
      <div className="start">
            <Link className='btn' to={'/login/main'} onClick={onRestart}>Restart</Link>
        </div>
    </div>
  )
}
