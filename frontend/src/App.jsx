import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './components/Auth/LoginForm';
// import { CheckUserExist } from './components/Examm/helper/helper.jsx';
import QuestionForm from './teachers/upload_que.jsx';
import Home from './components/Auth/home.jsx'
import Main from './components/Examm/main';
import Exam from "./components/Examm/exam.jsx";
import StudRegistrationForm from './stream_chair/addStudent.jsx';
import TeachRegistrationForm from './stream_chair/addTeachers.jsx';
import Chairhome from './stream_chair/chairhome.jsx';
import Nomatch from './components/nomatch'

function App() {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  const isAuthenticated = token && role;
  console.log(isAuthenticated)

  return (
    <Router>
      <Routes>
        <Route path='/login' element={<LoginForm />} />
        <Route path="/teacherdashboard/" element={role === "teacher" ? <QuestionForm /> : <Navigate to='/login' />} />
        <Route path="/chairdashboard/" element={isAuthenticated ? <Chairhome /> : <Navigate to='/login' />} />
        <Route path="/studentdashboard/" element={role === "student" ? <Main /> : <Navigate to='/login' />} />
        <Route path='/chairhome/stud_register' element={role === "chair" ? <StudRegistrationForm /> : <Navigate to='/login' />} />
        <Route path="/chairhome/teach_register" element={role === "chair" ? <TeachRegistrationForm /> : <Navigate to='/login' />} />
        <Route path='/' element={<Home />} />
        <Route path='/*' element={<Nomatch />} />
        <Route path='/studentdashboard/login/main/exa' element={role === "student" ? <Exam /> : <Navigate to='/login' />} />

      </Routes>
    </Router>
  );
}
export default App;
