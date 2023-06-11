// const _ = require('lodash');
// const Question = require("../model/questtion");
// const Test = require("../model/Test")
const Result = require("../model/resultModel")

const _ = require('lodash');
const Question = require("../model/questionModel");
const StudentExam = require("../model/StudentExam")

exports.getActiveExams = async (req, res, next) => {
    try {
        // const { departmentId } = req.user; // Assuming the student's department ID is stored in the req.user object

        // Find all exams that belong to the student's department and have ActivateExam set to true
        const exams = await StudentExam.find({
            // departmentId,
            ActivateExam: true
        }).select('totalQuestion');
        console.log(exams)
        // Get the question text for each question ID in the active exams
        const questionIds = exams.reduce((acc, exam) => [...acc, ...exam.totalQuestion], []);
        const question = await Question.find({ _id: { $in: questionIds } });
        // Shuffle the questions using the shuffle function from the lodash library

        const questions = _.shuffle(question);
        console.log("questions", questions)
        // console.log("questions", duration)



        return res.json(questions);
    } catch (error) {
        return next(error);
    }
};

// Map the question text to each active exam's totalQuestion array
// const activeExams = exams.map(exam => ({
//     _id: exam._id,
//     totalQuestion: exam.totalQuestion.map(questionId =>
//         questions.find(q => q._id.equals(questionId)))
// }));
// console.log(_id)

exports.getActiveExamsDuration = async (req, res) => {
    try {
        const exams = await StudentExam.find({
            ActivateExam: true
        }).select('duration');
        return res.status(200).json(exams.map(exam => exam.duration));
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};


// module.exports = { getActiveExamsDuration };
// ** get all result * 
exports.getResult = async (req, res) => {
    try {
        const r = await Result.find();
        res.json(r)
    } catch (error) {
        res.json({ error })
    }
}

/** post all result */
exports.storeResult = async (req, res) => {
    try {
        const { username, result, attempts, points, achived } = req.body;
        if (!username && !result) throw new Error('Data Not Provided...!');

        Result.create({ username, result, attempts, points, achived }, function (err, data) {
            res.json({ msg: "Result Saved Successfully...!" })
        })

    } catch (error) {
        res.json({ error })
    }
}

/** delete all result */
exports.dropResult = async (req, res) => {
    try {
        await Result.deleteMany();
        res.json({ msg: "Result Deleted Successfully...!" })
    } catch (error) {
        res.json({ error })
    }
}