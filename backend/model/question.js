const mongoose = require("mongoose");
// const optionSchema = mongoose.Schema({
//     text: {
//         type: String,
//         required: true
//     },
//     isCorrect: {
//         type: Boolean,
//         required: true
//     }
// });

// const questionSchema = mongoose.Schema({
//     text: {
//         type: String,
//         required: true
//     },
//     options: [optionSchema],
//     createdAt: {
//         type: Date,
//         default: Date.now()
//     },
//     updatedAt: {
//         type: Date,
//         default: Date.now()
//     }
// });

// module.exports = mongoose.model('Question', questionSchema);


const { Schema } = mongoose;

const QuestionsSchema = new Schema({
    questionText: {
        type: String,
        required: true,
        unique: true
    },
    options: {
        type: Array,
        required: true
    },
    marks: {
        type: Number,
        required: true
    },
    correctOptions: {
        type: Array,
        required: true
    },
    addedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Questions", QuestionsSchema);
