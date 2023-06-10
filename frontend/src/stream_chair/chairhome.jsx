// import React, { useState } from 'react'
// import { useNavigate } from "react-router-dom";
// const Chairhome = () => {
//   const navigate = useNavigate()

//   return (
//     <div>
//       <button type="submit" className="log_btn" onClick={() => navigate("/chairhome/teach_register")}>add Teachers</button>
//       <button type="submit" className="log_btn" onClick={() => navigate("/chairhome/stud_register")}>add Students</button>


//     </div>
//   )
// }

// export default Chairhome




import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import '../style/chair.css'
// import QuestionForm from '../teachers/upload_que';
// import ListofUsers from './listofusers';
// import QuestionTable from '../teachers/quetable';
// import Header from '../components/Auth/header';
// npm install react-router-dom
import { useNavigate } from "react-router-dom";

import { Visibility } from "@material-ui/icons";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";

const Chairhome = () => {
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate()
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  const isAuthenticated = token && role;

  useEffect(() => {
    // console.log(isAuthenticated)
    if (!isAuthenticated) {
      navigate('/login')
    }

  }, [token, role])

  return (
    <>
      <div className="profile_container">
        <div className="image_container">
          <img
            src=""
            className="student_image"
          />
        </div>
        <div className="data_container">
          <span className="">Name: Abebe Kebede</span>
          <span className="">Department: COED</span>
          <Link className='logout'>Log out</Link>
        </div>
      </div>
      {/* <Header/> */}

      <div className="home">
        {/* <FeaturedInfo /> */}
        <div className="homeWidgets">
          <div className="sidebar">
            <div className="sidebarWrapper">
              <div className="sidebarMenu">
                <h3 className="sidebarTitle">Stream Chair Dashboard</h3>
                <ul className="sidebarList">
                  <Link to="/" className="link">
                    <li className="sidebarListItem active">
                      <LineStyle className="sidebarIcon" />
                      Home
                    </li>
                  </Link>
                  <Link to="/chairhome/teach_register" className="link">
                    <li className="sidebarListItem">
                      <PermIdentity className="sidebarIcon" />
                      Add teachers
                    </li>
                  </Link>
                  <Link to="/chairhome/stud_register" className="link">
                    <li className="sidebarListItem">
                      <PermIdentity className="sidebarIcon" />
                      Add Students
                    </li>
                  </Link>
                  <Link to="/chairhome/list" className="link">
                    <li className="sidebarListItem">
                      <DynamicFeed className="sidebarIcon" />
                      List of Added Questions
                    </li>
                  </Link>
                  <Link to="/chairhome/examform" className="link">
                    <li className="sidebarListItem">
                      <Storefront className="sidebarIcon" />
                      Set Exam
                    </li>
                  </Link>
                  <Link to="/chairhome/listofteach" className="link">
                    <li className="sidebarListItem">
                      <Visibility className="widgetSmIcon" />
                      See Teacher's List
                    </li>
                  </Link>
                  <Link to="/chairhome/listofstud" className="link">
                    <li className="sidebarListItem">
                      <Visibility className="widgetSmIcon" />
                      See Student's List
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
          {/* <ListofUsers/> */}

        </div>
      </div>
    </>

  );
}
export default Chairhome

// import React, { useState } from 'react';
// import QuestionForm from '../teachers/upload_que';

// const Chairhome = () => {
// const [question, setQuestion] = useState({ text: '', isImage: false });
// const [correctAnswer, setCorrectAnswer] = useState('');
// const [options, setOptions] = useState([
//   { text: '', isImage: false },
//   { text: '', isImage: false },
//   { text: '', isImage: false },
//   { text: '', isImage: false }
// ]);
//   const [questions, setQuestions] = useState([]);
//   const handleEditQuestion = (index) => {
//     const questionToEdit = questions[index];
//     setQuestion(questionToEdit.question);
//     setOptions(questionToEdit.options);
//     setCorrectAnswer(questionToEdit.correctAnswer);
//     setQuestions(questions.filter((_, i) => i !== index));
//   };

//   const handleDeleteQuestion = (index) => {
//     if (window.confirm('Are you sure you want to delete the question?')) {
//       setQuestions(questions.filter((_, i) => i !== index));
//     }
//   };
//   return (
//     <div>
//       <h1>Chairperson Page</h1>
//     <QuestionTable questions={questions} /> 

//       {/* <QuestionForm questions={questions} setQuestions={setQuestions} /> */}
//       <hr />
//       <h2>Added Questions</h2>
//       {questions.length === 0 ? (
//         <p>No questions added yet.</p>
//       ) : (
//         <table>
//           <thead>
//             <tr>
//               <th>Question Number</th>
//               <th>Question</th>
//               <th>Option 1</th>
//               <th>Option 2</th>
//               <th>Option 3</th>
//               <th>Option 4</th>
//               <th>Answer</th>
//             </tr>
//           </thead>
//           <tbody>
//             {questions.map((question, index) => (
//               <tr key={index}>
//                 <td>{index + 1}</td>
//                 <td>{question.question.text}</td>
//                 {question.options.map((option, index) => (
//                   <td key={index}>
//                     {option.isImage ? (
//                       <img src={option.text} alt={`Option ${index + 2}`} />
//                     ) : (
//                       <p>{option.text}</p>
//                     )}
//                   </td>
//                 ))}
//                 <td>{question.options[parseInt(question.correctAnswer.charAt(6)) - 1].text}</td>
//                 <td></td>
//                 <td>
//                   <button onClick={() => handleEditQuestion(index)}>Edit</button>
//                 </td>
//                 <td>
//                   <button onClick={() => handleDeleteQuestion(index)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default Chairhome;


