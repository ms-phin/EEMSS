const ErrorHandler = require("../utils/ErrorHandler");
// const Question = require("../model/questionModel");
const Question = require("../model/questionModel");
const User = require("../model/user");
const Test = require("../model/Test");
const Course = require("../model/CourseModel");




// exports.createQuestion = async (req, res, next) => {
//     const test = Question.find({ testid: req.body.testid })
//     if (!test) {
//         return res.status(500).json({
//             success: false,
//             meassage: "question is not found with this id "
//         })
//     }
//     else {
//         try {
//             const questions = req.body; // Get the array of questions from the request body
//             const newQuestions = await Question.insertMany(questions); // Create new questions in the database
//             res.status(201).json({
//                 success: true,
//                 questions: newQuestions
//             });
//         } catch (error) {
//             res.status(400).json({
//                 success: false,
//                 error: error.message
//             });
//         }
//     }

// };

exports.createQuestion = async (req, res) => {
    const { questionText, options, photo, correctAnswerIndex, marks, courseId } = req.body;
    const addedBy = req.user._id; // Assuming the authenticated user is a teacher, we can get their ID from the request object

    try {
        const question = new Question({
            questionText,
            options,
            photo,
            correctAnswerIndex,
            marks,
            courseId,
            addedBy
        });
        await question.save();
        const course = await Course.findById(courseId);
        course.questions.push(question._id);
        await course.save();
        res.status(201).json({
            success: true,
            message: 'Question created successfully',
            data: question
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Error creating question'
        });
    }
};





// // logout teacher

exports.logoutTeacher = async (req, res, next) => {
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    });
    res.status(200).json({
        success: true,
        message: "log out success"
    })

}



exports.getAllQuestion = async (req, res) => {
    try {
        const questions = await Question.find({ testid: req.params.id });

        if (!questions || questions.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Questions not found"
            });
        }

        res.status(200).json({
            success: true,
            questions
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error finding questions"
        });
    }
};


exports.assignTest = async (req, res) => {
    const { department, startTime, endTime } = req.body;
    const createdBy = req.user._id;
    console.log('Request Body:', req.body);

    try {
        const test = new Test({
            title: 'Test Title',
            department,
            startTime,
            endTime,
            createdBy,
            questions: [],
            students: [],
        });
        await test.save();

        const questions = await Question.find({ department });
        const shuffledQuestions = questions.sort(() => Math.random() - 0.5);

        const students = await User.find({ role: 'student' });
        for (const student of students) {
            const assignedQuestions = shuffledQuestions.slice(0, 20); // Assuming you want to assign 20 questions per student
            const testQuestions = [];
            for (const question of assignedQuestions) {
                const savedQuestion = await question.save();
                testQuestions.push(savedQuestion._id);
            }
            if (!student.tests) {
                student.tests = [];
            }
            console.log(" student ", student.tests)
            student.tests.push({
                test: test._id,
                questions: testQuestions,
            });
            await student.save();
        }

        test.questions = shuffledQuestions.slice(0, 100); // Assuming you want to assign 100 questions to the test
        test.students = students.map(student => student._id);
        await test.save();

        console.log('Test:', test);
        res.status(201).json({ test });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error creating test' });
    }
};
