const Questions = require("../model/question")


exports.createQuestion = async (req, res, next) => {
    const { questionText, options, marks, correctOptions } = req.body;

    const question = await Questions.create({
        questionText,
        options,
        marks,
        correctOptions

    })
    res.status(201).json({
        success: true,
        question
    })
}