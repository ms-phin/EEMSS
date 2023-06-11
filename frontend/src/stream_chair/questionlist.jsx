// import React, { useState } from 'react'
// import { Link } from "react-router-dom";
// import '../style/chair.css'
// import QuestionTable from '../teachers/quetable';

// const QueList = () => {

//   const [questions, setQuestions] = useState([]);
//   return (
//     <div>
//       <h3>Here are the questions the teachers submit</h3>
//       {/* <QuestionForm questions={questions} setQuestions={setQuestions} /> */}
//       <QuestionTable questions={questions} />

//     </div>
//   )
// }
// export default QueList


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuestionTable from '../teachers/quetable';


const QueList = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Make a GET request to the API endpoint to retrieve the questions data
    axios.get('http://localhost:5000/api/active-exams')
      .then(response => {
        setQuestions(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h3>Here are the questions the teachers submit</h3>
      <QuestionTable questions={questions} />
    </div>
  );
};

export default QueList;