const mongoose = require('mongoose');

const studentExamSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    totalMarks: {
        type: Number,
        required: true
    },
    marks_per_right_answer:
    {
        type: String,
        required: true
    },
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true,
    },
    examId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Exam',
        required: true,
    },
    startTime: {
        type: Date,
        required: true,
    },
    endTime: {
        type: Date,
        required: true,
    },
    pending: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('StudentExam', studentExamSchema);


// resultId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Result',
//     required: false
// }



// answers: [{
//     questionId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Question',
//         required: true,
//     },
//     answer: {
//         type: String,
//         required: true,
//     },
// }],