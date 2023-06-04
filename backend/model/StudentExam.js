const mongoose = require('mongoose');

const studentExamSchema = new mongoose.Schema({

    totalMarks: {
        type: Number,
        required: true
    },
    marks_per_right_answer:
    {
        type: String,
        required: true
    },
    departmentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department',
        required: true,
    },
    duration: {
        type: Number,
        required: true
    },
    startTime: {
        type: Date,
        required: true,
    },
    ActivateExam: {
        required: true,
        default: 1,
        type: Boolean
    },
    totalQuestion: [{
        type: Array,
        required: false
    }]


});

module.exports = mongoose.model('StudentExam', studentExamSchema);



// const studentExamSchema = new mongoose.Schema({


//     totalMarks: {
//         type: Number,
//         required: true
//     },
//     marks_per_right_answer:
//     {
//         type: String,
//         required: true
//     },
//    tudentId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Student',
//         required: true,
//     }, s
//     examId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Exam',
//         required: true,
//     },
//     duration: {
//         type: Number,
//         required: true
//     },
//     startTime: {
//         type: Date,
//         required: true,
//     },


