import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './components/Auth/LoginForm';
// import { CheckUserExist } from './components/Examm/helper/helper.jsx';
import QuestionForm from './teachers/upload_que.jsx';
import Home from './components/Auth/home.jsx'
import Main from './components/Examm/main';
import Exam from "./components/Examm/exam.jsx";
import Result from "./components/Examm/result.jsx";
import { CheckUserExist } from './components/Examm/helper/helper';
import StudRegistrationForm from './stream_chair/addStudent.jsx';
import TeachRegistrationForm from './stream_chair/addTeachers.jsx';
import QueList from './stream_chair/questionlist.jsx';
import Studlist from './stream_chair/studlist.jsx';
import Teachlist from './stream_chair/teachlist.jsx';
import Admindash from './superadmin/admin_dashboard.jsx';
import Chairhome from './stream_chair/chairhome.jsx';
import Teachers from './superadmin/teachlist.jsx';
import Students from './superadmin/studlist.jsx';
import Nomatch from './components/nomatch'

function App() {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  const isAuthenticated = token && role;
  console.log(isAuthenticated)

  return (
    <Router>
      <Routes>

        <Route path="/admindash/" element={role === "superadmin" ? <Admindash /> : <Navigate to='/login' />} />
        <Route path="/admindash/teachers" element={role === "superadmin" ? <Teachers /> : <Navigate to='/login' />} />
        <Route path="/admindash/students" element={role === "superadmin" ? <Students /> : <Navigate to='/login' />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path="/teacherdashboard/" element={role === "teacher" ? <QuestionForm /> : <Navigate to='/login' />} />
        <Route path="/chairdashboard/" element={role === "chair" ? <Chairhome /> : <Navigate to='/login' />} />
        <Route path="/studentdashboard/" element={role === "student" ? <Main /> : <Navigate to='/login' />} />
        <Route path='/chairhome/stud_register' element={role === "chair" ? <StudRegistrationForm /> : <Navigate to='/login' />} />
        <Route path="/chairhome/teach_register" element={role === "chair" ? <TeachRegistrationForm /> : <Navigate to='/login' />} />
        <Route path='/' element={<Home />} />
        <Route path='/*' element={<Nomatch />} />
        <Route path='/studentdashboard/login/main/exa' element={role === "student" ? <Exam /> : <Navigate to='/login' />} />
        <Route path='/studentdashboard/login/main/exa/result' element={role === "student" ? <Result /> : <Navigate to='/login' />} />

        <Route path='/chairhome/list' element={role === "chair" ? <QueList /> : <Navigate to='/login' />} />
        <Route path='/chairhome/listofteach' element={role === "chair" ? <Teachlist /> : <Navigate to='/login' />} />
        <Route path='/chairhome/listofstud' element={role === "chair" ? <Studlist /> : <Navigate to='/login' />} />




      </Routes>
    </Router>
  );
}
export default App;
