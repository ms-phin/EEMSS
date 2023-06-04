const mongoose = require("mongoose")
const { Schema } = mongoose
const examSchema = new Schema({
    departmentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department'
    },
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    },
    numberofquestion: {
        type: Number,
        required: true
    },
    questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    }],
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: false
    }]

});

module.exports = mongoose.model('Exam', examSchema);


        // departmentID: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: 'Department',
        //     required: true
        // },