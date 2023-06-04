import React, { useEffect, useState } from 'react'
import Questions from './questions.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { MoveNextQuestion, movePrevQuestion } from './hooks/FetchQuestion.jsx' 
import { PushAnswer } from './hooks/setResult.jsx'

export default function Exam() {

  const state = useSelector(state => state);
  const result = useSelector(state => state.result.result);
  const { queue, trace } = useSelector(state => state.questions);
  const dispatch = useDispatch()
  const [check, setChecked ] = useState()
 
useEffect(() => {
  console.log(state)
  setChecked(undefined)

}, [trace])
 
  function onNext(){
    console.log('next button pressed')
    if(trace < queue.length){
      dispatch(MoveNextQuestion())

// insert a new result on the array

      if(result.length <= trace){
        dispatch(PushAnswer(check))
       }
       setChecked(undefined);

    }
  }
  

  function onPrev(){
    console.log('previous button pressed')
    if (trace > 0){
    dispatch(movePrevQuestion())
    }
    else{
      setChecked(undefined);
    }
  }
  function onChecked(check){
    console.log(check)
    setChecked(check)
  }
  if(result.length && result.length >= queue.length){
    return<Navigate to='./result' replace="true"></Navigate>
  }
  return (
    <div className='contain'>
        <h1 className='title text-light'>Good Luck</h1>
<Questions onChecked={onChecked}></Questions>
<div className='grid'>
{ trace > 0 ? <button className='prev_btn' onClick={onPrev}>Previos</button> : <div></div>}
  <button className='nxt_btn' onClick={onNext}>Next</button>
        </div>
    </div>
  )
}

// The code you provided has a few issues that need to be fixed:

// import React, { useEffect } from 'react'
// import Questions from './questions.jsx'

// /** redux store import */
// import { useSelector, useDispatch } from 'react-redux'
// import { Navigate } from 'react-router-dom'
// import { moveNextQuestion, movePrevQuestion } from '../redux/question_reducer'

// export default function Exam() {
//   const trace = useSelector(state => state.questions.trace);
//   const { queue } = useSelector(state => state.questions);
//   const dispatch = useDispatch()

//   useEffect(() => {
//     console.log(trace)
//   })

//   function onNext() {
//     dispatch(moveNextQuestion())
//   }

//   function onPrev() {
//     dispatch(movePrevQuestion())
//   }

//   return (
//     <div className='contain'>
//       <h1 className='title text-light'>Good Luck</h1>
//       <Questions></Questions>
//       <div className='grid'>
//         <button className='prev_btn' onClick={onPrev}>Prev</button>
//         <button className='nxt_btn' onClick={onNext}>Next</button>
//       </div>
//     </div>
//   )
// }