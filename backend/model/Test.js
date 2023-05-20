// const mongoose = require("mongoose");

// const { Schema } = mongoose;

// const QuestionsSchema = new Schema({
//     testid: {
//         type: String,
//         required: true
//     },
//     questiont: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     options: {
//         type: [String],
//         required: true
//     },
//     answer: {
//         type: String,
//         required: true

//     },
//     questionText: {
//         type: String,
//         required: true
//     },
//     addedAt: {
//         type: Date,
//         default: Date.now
//     }
// });


// module.exports = mongoose.model('Question', QuestionsSchema);

// // const optionSchema = mongoose.Schema({
// //     text: {
// //         type: String,
// //         required: true
// //     },
// //     isCorrect: {
// //         type: Boolean,
// //         required: true
// //     }
// // });

// // const questionSchema = mongoose.Schema({
// //     text: {
// //         type: String,
// //         required: true
// //     },
// //     options: [optionSchema],
// //     createdAt: {
// //         type: Date,
// //         default: Date.now()
// //     },
// //     updatedAt: {
// //         type: Date,
// //         default: Date.now()
// //     }
// // });

// // module.exports = mongoose.model('Question', questionSchema);









// const testSchema = new Schema({
//     title: {
//         type: String,
//         required: true
//     },
//     department: {
//         type: String,
//         required: true
//     },
//     startTime: {
//         type: Date,
//         required: true
//     },
//     endTime: {
//         type: Date,
//         required: true
//     },
//     questions: [{
//         type: Schema.Types.ObjectId,
//         ref: 'Question'
//     }],
//     students: [{
//         type: Schema.Types.ObjectId,
//         ref: 'User'
//     }],
//     createdBy: {
//         type: Schema.Types.ObjectId,
//         ref: 'User'
//     }
// });

// module.exports = {
//     Test: mongoose.model('Test', testSchema)
// };

// const mongoose = require('mongoose');
const mongoose = require("mongoose")
const { Schema } = mongoose
const testSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true
    },
    questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    }],
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
});

const Test = mongoose.model('Test', testSchema);

module.exports = Test;