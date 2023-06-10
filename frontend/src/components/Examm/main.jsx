import React, { useRef } from 'react'
import { Link } from "react-router-dom";
import "./styles/main.css";
import { useDispatch } from 'react-redux';
import { setUserId } from './redux/result_reducer';
export default function Main() {

  const inputRef = useRef(null)
  const dispatch = useDispatch()

  function startQuiz() {
    if (inputRef.current?.value) {
      dispatch(setUserId((inputRef.current?.value)))
    }
  }
  return (
    <div className='container'>
      <div className="profile_container">
        <div className="image_container">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfTV5-2c0LEzIcl0pXbCtZHALVR1QwXEgjyQ&usqp=CAU"
            className="student_image"
          />
        </div>
        <div className="data_container">
          <span className="">Name: Abebech Seid</span>
          <span className="">Id: 11031234</span>
          <Link className='logout'>Log out</Link>
        </div>
      </div>
      <h1 className='title text-light'>Instructions you should follow</h1>

      <ol>
        <li>You will be asked 100 questions one after another.</li>
        <li>100 points are awarded for the correct answer.</li>
        <li>Each question has four options. You can choose only one option.</li>
        <li>You can review and change answers before the exam is finished.</li>
        <li>The result will be declared at the end of the exam.</li>
        <li>If you face any problems during the exam , you are allowed to ask only the instructor in the exam hall</li>

      </ol>
      <form id="form">
        <input ref={inputRef} className="userid" type="text" placeholder='ID*' />
      </form>
      <div className='start'>
        <Link className='butn' to={'login/main/exa'} onClick={startQuiz} >Start Exam</Link>
      </div>

    </div>
  )
}
