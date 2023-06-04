const examResultSchema = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true
    },
    examId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Exam',
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
    answers: [
        {
            questionId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Question',
                required: true
            },
            answer: {
                type: String,
                required: true
            }
        }
    ],
    score: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('ExamResult', examResultSchema);

