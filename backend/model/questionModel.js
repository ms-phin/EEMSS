const mongoose = require("mongoose")
const { Schema } = mongoose
const QuestionsSchema = new Schema({
    questionText: {
        type: String,
        required: true,
    },
    options: [{
        text: String,
        photo: String,
    }],
    photo: {
        type: String,
    },
    correctAnswerIndex: {
        type: Number,
        required: true
    },
    marks: {
        type: Number,
        required: true
    },
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    },
    addedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher'
    },
    addedAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Question', QuestionsSchema)

