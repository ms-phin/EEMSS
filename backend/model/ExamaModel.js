const mongoose = require("mongoose")
const { Schema } = mongoose
const examSchema = new Schema({
    departmentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department',
        required: true
    },
    questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    }],
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    }]

});

module.exports = mongoose.model('Exam', examSchema);

