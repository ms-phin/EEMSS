// const _ = require('lodash');
// const Question = require("../model/questtion");
// const Test = require("../model/Test")
// const Exam = require("../model/ExamaModel")


// const QuestionBank = require('../models/questionBank');

// function generateRandomQuestions(numQuestions) {
//     const questions = [];
//     const totalQuestions = Question.length;
//     while (questions.length < numQuestions) {
//         const randomIndex = Math.floor(Math.random() * totalQuestions);
//         const selectedQuestion = Question[randomIndex];
//         if (!questions.includes(selectedQuestion)) {
//             questions.push(selectedQuestion);
//         }
//     }
//     return questions;
// }

// const QuestionController = {};

// QuestionController.getRandomQuestions = (req, res) => {
//     const numQuestions = 10;
//     const students = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace', 'Henry', 'Ivy', 'Jack'];
//     const questionsByStudent = {};
//     students.forEach((student) => {
//         const questions = generateRandomQuestions(numQuestions);
//         questionsByStudent[student] = questions;
//     });
//     res.json(questionsByStudent);
// };

// module.exports = QuestionController;
// exports.getTestQuestions = async (req, res) => {
//     const { testId } = req.params;
//     const student = req.user;

//     try {
//         const test = await Test.findById(testId).populate('questions');
//         const assignedQuestions = student.tests.find(test => test.test.toString() === testId);
//         const questions = test.questions.filter(question => assignedQuestions.questions.includes(question._id.toString()));

//         console.log('Assigned Questions:', questions);
//         res.status(200).json({ questions });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Error getting test questions' });
//     }
// };

// Route to get an exam for a student
// app.get('/students/:studentId/exams/:examId', async (req, res) => {
//     const studentId = req.params.studentId;
//     const examId = req.params.examId;

//     try {
//       const exam = await Exam.findById(examId).populate('questions');
//       const shuffledQuestions = shuffleQuestions(exam.questions); // Shuffle the questions
//       res.json({ success: true, exam: { ...exam.toObject(), questions: shuffledQuestions } });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ success: false, message: 'Error getting exam' });
//     }
//   });


// exports.getExam = async (req, res) => {
//     try {
//         const { examId } = req.params;
//         const exam = await Exam.findById(examId).populate('questions');

//         if (!exam) {
//             return res.status(404).json({ message: 'Exam not found' });
//         }

//         const currentTime = new Date();
//         const startTime = new Date(exam.startTime);
//         const endTime = new Date(startTime.getTime() + exam.duration * 60000);

//         if (currentTime < startTime) {
//             return res.status(403).json({ message: 'Exam session has not started yet' });
//         }

//         if (currentTime > endTime) {
//             return res.status(403).json({ message: 'Exam session has ended' });
//         }

//         const questions = exam.questions.map(question => {
//             const { _id, title, options } = question;
//             return { _id, title, options };
//         });

//         res.status(200).json({ questions });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// }


// if (currentTime < startTime) {
//     return res.status(403).json({ message: 'Exam session has not started yet' });
// }

const Question = require("../model/questionModel");
const StudentExam = require("../model/StudentExam")

exports.getActiveExams = async (req, res, next) => {
    try {
        const { departmentId } = req.user; // Assuming the student's department ID is stored in the req.user object

        // Find all exams that belong to the student's department and have ActivateExam set to true
        const exams = await StudentExam.find({
            departmentId,
            ActivateExam: true
        }).select('totalQuestion');
        console.log(exams)
        // Get the question text for each question ID in the active exams
        const questionIds = exams.reduce((acc, exam) => [...acc, ...exam.totalQuestion], []);
        const questions = await Question.find({ _id: { $in: questionIds } });
        console.log("questions", questions)

        // Map the question text to each active exam's totalQuestion array
        // const activeExams = exams.map(exam => ({
        //     _id: exam._id,
        //     totalQuestion: exam.totalQuestion.map(questionId =>
        //         questions.find(q => q._id.equals(questionId)))
        // }));
        // console.log(_id)

        return res.json(questions);
    } catch (error) {
        return next(error);
    }
};