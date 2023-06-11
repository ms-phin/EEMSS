// import React, { useEffect, useState } from 'react'
// import Questions from './questions.jsx'
// import { useSelector, useDispatch } from 'react-redux'
// import { Navigate, useNavigate } from 'react-router-dom'
// import { MoveNextQuestion, movePrevQuestion } from './hooks/FetchQuestion.jsx'
// import { PushAnswer } from './hooks/setResult.jsx'

// export default function Exam() {

//   const state = useSelector(state => state);
//   const result = useSelector(state => state.result.result);
//   const { queue, trace } = useSelector(state => state.questions);
//   const dispatch = useDispatch()
//   const [check, setChecked] = useState();
//   const [duration, setDuration] = useState(null)
//   const [time, setTime] = useState(duration);
//   const [answeredQuestions, setAnsweredQuestions] = useState([]);
//   const navigate = useNavigate();


//   useEffect(() => {
//     fetch('http://localhost:5000/api/getActiveExamsDuration')
//       .then(response => response.json())
//       .then(data => {
//         const durationInSeconds = data[0] * 60; // duration is returned in minutes, convert to seconds
//         setDuration(durationInSeconds);
//         console.log(durationInSeconds); // log the duration value
//         setTime(durationInSeconds)
//       })
//       .catch(error => console.error(error));
//   }, []);

//   useEffect(() => {
//     console.log(state)
//     setChecked(undefined)

//   }, [trace])
//   // useEffect(() => {
//   //   const interval = setInterval(() => {
//   //     setTime(prevTime => prevTime - 1);
//   //   }, 1000);
//   //   return () => clearInterval(interval);
//   // }, []);
//   // // useEffect(() => {
//   // //   const interval = setInterval(() => {
//   // //     if (time > 0) {
//   // //       setTime((prevTime) => prevTime - 1);
//   // //     }
//   // //   }, 1000);
//   // //   return () => clearInterval(interval);
//   // // }, []);
//   // useEffect(() => {
//   //   if (time === 0) {
//   //     // Time is up, navigate to the result page
//   //     // <Navigate to='./result' replace="true"></Navigate>
//   //     navigate('/result');
//   //   }
//   // }, [time]);
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTime(prevTime => prevTime - 1);
//     }, 1000);

//     if (time === 0) {
//       clearInterval(interval);
//       navigate('/studentdashboard/login/main/exa/result', { replace: true });
//     }

//     return () => clearInterval(interval);
//   }, [time]);


















//   function onNext() {
//     console.log('next button pressed')
//     if (trace < queue.length) {
//       dispatch(MoveNextQuestion())

//       // insert a new result on the array

//       if (result.length <= trace) {
//         dispatch(PushAnswer(check))
//         setAnsweredQuestions([...answeredQuestions, trace]);
//         setChecked(undefined);
//       }

//     }
//   }


//   function onPrev() {
//     console.log('previous button pressed')
//     if (trace > 0) {
//       dispatch(movePrevQuestion())
//     }
//     else {
//       setChecked(undefined);
//     }
//   }
//   function onChecked(check) {
//     console.log(check)
//     setChecked(check)
//   }
//   if (result.length && result.length >= queue.length) {
//     return <Navigate to='./result' replace="true"></Navigate>
//   }

//   const minutes = Math.floor(time / 60);
//   const seconds = time % 60;
//   const formattedTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;
//   return (
//     <div className='contain'>

//       {/* <h1 className='title text-light'>Good Luck</h1> */}
//       <div className='timer'>Time left: {formattedTime}</div>
//       <Questions onChecked={onChecked}></Questions>
//       <div className='grid'>
//         {trace > 0 ? <button className='prev_btn' onClick={onPrev}>Previos</button> : <div></div>}
//         <button className='nxt_btn' onClick={onNext}>Next</button>
//       </div>

//       <div className='question-list'>
//         {queue.map((_, index) => (
//           <button
//             key={index}
//             className={`question-button ${answeredQuestions.includes(index) ? 'answered' : ''}`}
//             onClick={() => dispatch({ type: 'SET_TRACE', payload: index })}
//           >
//             {index + 1}
//           </button>
//         ))}
//       </div>
//     </div>
//   )
// }

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






// import React, { useEffect, useState } from 'react'
// import Questions from './questions.jsx'
// import { useSelector, useDispatch } from 'react-redux'
// // import { useHistory } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
// import { MoveNextQuestion, movePrevQuestion } from './hooks/FetchQuestion.jsx'
// import { PushAnswer } from './hooks/setResult.jsx'

// export default function Exam() {

//   const state = useSelector(state => state);
//   const result = useSelector(state => state.result.result);
//   const { queue, trace } = useSelector(state => state.questions);
//   const dispatch = useDispatch()
//   const [check, setChecked] = useState();
//   const [duration, setDuration] = useState(0);
//   const [time, setTime] = useState(duration);
//   const [answeredQuestions, setAnsweredQuestions] = useState([]);
//   // const history = useHistory();
//   const Navigate = useNavigate();

//   useEffect(() => {
//     fetch('http://localhost:5000/api/getActiveExamsDuration')
//       .then(response => response.json())
//       .then(data => {
//         const durationInSeconds = data[0] * 60; // duration is returned in minutes, convert to seconds
//         setDuration(durationInSeconds);
//         console.log(durationInSeconds); // log the duration value
//         setTime(durationInSeconds)
//       })
//       .catch(error => console.error(error));
//   }, []);

//   // ...

//   // ...

//   useEffect(() => {
//     console.log(state)
//     setChecked(undefined)

//   }, [trace])
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTime(prevTime => prevTime - 1);
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);
//   // useEffect(() => {
//   //   if (time === 0) {
//   //     // Time is up, navigate to the result page
//   //     navigate('/result');
//   //   }
//   // }, [time]);


//   function onNext() {
//     console.log('next button pressed')
//     if (trace < queue.length) {
//       dispatch(MoveNextQuestion())

//       // insert a new result on the array

//       if (result.length <= trace) {
//         dispatch(PushAnswer(check))
//         setAnsweredQuestions([...answeredQuestions, trace]);
//         setChecked(undefined);
//       }

//     }
//   }


//   function onPrev() {
//     console.log('previous button pressed')
//     if (trace > 0) {
//       dispatch(movePrevQuestion())
//     }
//     else {
//       setChecked(undefined);
//     }
//   }
//   function onChecked(check) {
//     console.log(check)
//     setChecked(check)
//   }
//   if (result.length && result.length >= queue.length) {
//     return <Navigate to={'/result'} replace={true}></Navigate>
//   }

//   const minutes = Math.floor(time / 60);
//   const seconds = time % 60;
//   const formattedTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;
//   return (
//     <div className='contain'>

//       {/* <h1 className='title text-light'>Good Luck</h1> */}
//       <div className='timer'>Time left: {formattedTime}</div>
//       <Questions onChecked={onChecked}></Questions>
//       <div className='grid'>
//         {trace > 0 ? <button className='prev_btn' onClick={onPrev}>Previos</button> : <div></div>}
//         <button className='nxt_btn' onClick={onNext}>Next</button>
//       </div>

//       <div className='question-list'>
//         {queue.map((_, index) => (
//           <button
//             key={index}
//             className={`question-button ${answeredQuestions.includes(index) ? 'answered' : ''}`}
//             onClick={() => dispatch({ type: 'SET_TRACE', payload: index })}
//           >
//             {index + 1}
//           </button>
//         ))}
//       </div>
//     </div>
//   )
// }




















// import React, { useEffect, useState } from "react";
// import Questions from "./questions.jsx";
// import { useSelector, useDispatch } from "react-redux";
// import { Navigate, useNavigate } from "react-router-dom";
// import { MoveNextQuestion, movePrevQuestion } from "./hooks/FetchQuestion.jsx";
// import { PushAnswer } from "./hooks/setResult.jsx";
// import ReactPaginate from "react-paginate";

// export default function Exam() {
//   const state = useSelector((state) => state);
//   const result = useSelector((state) => state.result.result);
//   const { queue, trace } = useSelector((state) => state.questions);
//   const dispatch = useDispatch();
//   const [check, setChecked] = useState();
//   const [duration, setDuration] = useState(15 * 1);
//   const [time, setTime] = useState(duration);
//   const [answeredQuestions, setAnsweredQuestions] = useState([]);
//   const navigate = useNavigate();
//   const [currentPage, setCurrentPage] = useState(0);
//   const questionsPerPage = 1;

//   useEffect(() => {
//     console.log(state);
//     setChecked(undefined);
//   }, [trace]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (time > 0) {
//         setTime((prevTime) => prevTime - 1);
//       }
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     if (time === 0) {
//       // Time is up, navigate to the result page
//       navigate("/studentdashboard/login/main/exa/result");
//     }
//   }, [time]);

//   useEffect(() => {
//     fetch('http://localhost:5000/api/getActiveExamsDuration')
//       .then(response => response.json())
//       .then(data => {
//         const durationInSeconds = data[0] * 60; // duration is returned in minutes, convert to seconds
//         setDuration(durationInSeconds);
//         console.log(durationInSeconds); // log the duration value
//         setTime(durationInSeconds)
//       })
//       .catch(error => console.error(error));
//   }, []);

//   function onNext() {
//     console.log("next button pressed");
//     if (trace < queue.length) {
//       dispatch(MoveNextQuestion());
//       // insert a new result on the array
//       if (result.length <= trace) {
//         dispatch(PushAnswer(check));
//         setAnsweredQuestions([...answeredQuestions, trace]);
//         setChecked(undefined);
//       }
//     }
//   }

//   function onPrev() {
//     console.log("previous button pressed");
//     if (trace > 0) {
//       dispatch(movePrevQuestion());
//     } else {
//       setChecked(undefined);
//     }
//   }

//   function onChecked(check) {
//     console.log(check);
//     setChecked(check);
//   }

//   const minutes = Math.floor(time / 60);
//   const seconds = time % 60;
//   const formattedTime = `${minutes}:${seconds.toString().padStart(2, "0")}`;

//   const indexOfLastQuestion = (currentPage + 1) * questionsPerPage;
//   const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
//   const currentQuestions = queue.slice(
//     indexOfFirstQuestion,
//     indexOfLastQuestion
//   );

//   const pageCount = Math.ceil(queue.length / questionsPerPage);

//   const handlePageClick = ({ selected }) => {
//     setCurrentPage(selected);
//     if (selected > currentPage) {
//       onNext();
//     } else if (selected < currentPage) {
//       onPrev();
//     }
//   };

//   if (result.length && result.length >= queue.length) {
//     return <Navigate to="./result" replace="true"></Navigate>;
//   }

//   return (
//     <div className="contain">
//       {/* <h1 className='title text-light'>Good Luck</h1> */}
//       <div className="timer">Time left: {formattedTime}</div>
//       <Questions onChecked={onChecked} questions={currentQuestions}></Questions>
//       {/* <div className="grid">
//         {trace > 0 ? (
//           <button className="prev_btn" onClick={onPrev}>
//             Previos
//           </button>
//         ) : (
//           <div></div>
//         )}
//         <button className="nxt_btn" onClick={onNext}>
//           Next
//         </button>
//       </div> */}
//       <ReactPaginate
//         previousLabel={"Prev"}
//         nextLabel={"Next"}
//         pageCount={pageCount}
//         onPageChange={handlePageClick}
//         containerClassName={"pagination"}
//         previousLinkClassName={"pagination__link"}
//         nextLinkClassName={"pagination__link"}
//         disabledClassName={"pagination__link--disabled"}
//         activeClassName={"pagination__link--active"}
//       />
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import Questions from "./questions.jsx";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { MoveNextQuestion, movePrevQuestion } from "./hooks/FetchQuestion.jsx";
import { PushAnswer } from "./hooks/setResult.jsx";
import ReactPaginate from "react-paginate";

export default function Exam() {
  const state = useSelector((state) => state);
  const result = useSelector((state) => state.result.result);
  const { queue, trace } = useSelector((state) => state.questions);
  const dispatch = useDispatch();
  const [check, setChecked] = useState();
  const [duration, setDuration] = useState(15 * 10);
  const [time, setTime] = useState(duration);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [showSubmit, setShowSubmit] = useState(false);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const questionsPerPage = 1;

  useEffect(() => {
    console.log("here", trace, queue.length);
    setChecked(undefined);

    let currQn = currentPage + 1;

    if (currQn === queue.length) {
      setShowSubmit(true);
    } else {
      setShowSubmit(false);
    }

    console.log(answeredQuestions);
  }, [trace]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (time > 0) {
        setTime((prevTime) => prevTime - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (time === 0) {
      // Time is up, navigate to the result page
      navigate("/studentdashboard/login/main/exa/result");
    }
  }, [time]);

  function onNext() {
    console.log("next button pressed");
    if (trace < queue.length) {
      dispatch(MoveNextQuestion());
      // insert a new result on the array
      if (result.length <= trace) {
        dispatch(PushAnswer(check));
        setAnsweredQuestions([...answeredQuestions, trace]);
        setChecked(undefined);
      }
    }
  }

  function onPrev() {
    console.log("previous button pressed");
    if (trace > 0) {
      dispatch(movePrevQuestion());
    } else {
      setChecked(undefined);
    }
  }

  function onChecked(check) {
    console.log(check);
    setChecked(check);
  }

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const formattedTime = `${minutes}:${seconds.toString().padStart(2, "0")}`;

  const indexOfLastQuestion = (currentPage + 1) * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = queue.slice(
    indexOfFirstQuestion,
    indexOfLastQuestion
  );

  const pageCount = Math.ceil(queue.length / questionsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
    console.log(selected);
    if (selected > currentPage) {
      onNext();
    } else if (selected < currentPage) {
      onPrev();
    }
  };

  if (result.length && result.length >= queue.length) {
    return <Navigate to="./result" replace="true"></Navigate>;
  }

  const submitExam = () => {
    //check if all questions are answered
    navigate("/studentdashboard/login/main/exa/result");
  };
  return (
    <div className="contain">
      {/* <h1 className='title text-light'>Good Luck</h1> */}
      <div className="timer">Time left: {formattedTime}</div>
      <Questions onChecked={onChecked} questions={currentQuestions}></Questions>

      <ReactPaginate
        previousLabel={"Prev"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
        className="question-button"
      />

      <div className="submit_container">
        {/* {trace > 0 ? (
          <button className="prev_btn" onClick={onPrev}>
            Previos
          </button>
        ) : (
          <div></div>
        )} */}
        {showSubmit && (
          <button className="nxt_btn" onClick={submitExam}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
}
