// let UserModel = require("../models/user");
// var passport = require("../controller/passportconf");
// var jwt = require('jsonwebtoken');
// var config = require('config');



// let userlogin = (req, res, next) => {
//     req.check('emailid', ` Invalid email address`).isEmail().notEmpty();
//     req.check('password', 'Invalid password').isLength({ min: 5, max: 6 });
//     var errors = req.validationErrors()
//     if (errors) {
//         res.json({
//             success: false,
//             message: 'Invalid inputs',
//             errors: errors
//         })
//     } else {
//         passport.authenticate('login', { session: false }, (err, user, info) => {
//             if (err || !user) {
//                 res.json(info);
//             }
//             else {
//                 req.login({ _id: user._id }, { session: false }, (err) => {
//                     if (err) {
//                         res.json({
//                             success: false,
//                             message: "Server Error"
//                         });
//                     }

//                     var token = jwt.sign({ _id: user._id }, config.get('jwt.secret'), { expiresIn: 5000000 });
//                     res.json({
//                         success: true,
//                         message: "login successful",
//                         user: {
//                             name: user.name,
//                             type: user.type,
//                             _id: user._id,
//                             emailid: user.emailid,
//                             contact: user.contact
//                         },
//                         token: token
//                     });
//                 });
//             }
//         })(req, res, next);
//     }

// }




// module.exports = { userlogin };











import React, { useState } from 'react';
import { TextField, Checkbox, Button } from '@material-ui/core';
import axios from 'axios';

const CreateStudentExamForm = () => {
  const [title, setTitle] = useState('');
  const [totalMarks, setTotalMarks] = useState('');
  const [marksPerRightAnswer, setMarksPerRightAnswer] = useState('');
  const [studentId, setStudentId] = useState('');
  const [examId, setExamId] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [pending, setPending] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/createStudentExam', {
        title,
        totalMarks,
        marks_per_right_answer: marksPerRightAnswer,
        studentId,
        examId,
        startTime,
        endTime,
        pending,
      });
      console.log(response.data);
      // Redirect to success page or display success message
    } catch (error) {
      console.error(error);
      // Display error message
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Total Marks"
        value={totalMarks}
        onChange={(event) => setTotalMarks(event.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Marks per Right Answer"
        value={marksPerRightAnswer}
        onChange={(event) => setMarksPerRightAnswer(event.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Student ID"
        value={studentId}
        onChange={(event) => setStudentId(event.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Exam ID"
        value={examId}
        onChange={(event) => setExamId(event.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Start Time"
        type="datetime-local"
        value={startTime}
        onChange={(event) => setStartTime(event.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="End Time"
        type="datetime-local"
        value={endTime}
        onChange={(event) => setEndTime(event.target.value)}
        fullWidth
        margin="normal"
      />
      <Checkbox
        label="Pending"
        checked={pending}
        onChange={(event) => setPending(event.target.checked)}
      />
      <Button type="submit" variant="contained" color="primary">
        Create
      </Button>
    </form>
  );
};

export default CreateStudentExamForm;
