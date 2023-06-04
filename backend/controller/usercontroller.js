// const User = require("../model/user");
const Chair = require("../model/chairModel")
const Teacher = require("../model/teacherModel")
const { sendTokenUser } = require("../utils/jwtToken");
const ErrorHandler = require("../utils/ErrorHandler");
const Department = require('../model/Department')
const Student = require("../model/student")
const Course = require("../model/CourseModel")


exports.createChair = async (req, res) => {
    const { name, email, password, departmentId } = req.body;
    const chair = new Chair({
        name,
        email,
        password,
        role: 'chair',
        departmentId
    });
    await chair.save();
    await Department.findByIdAndUpdate(departmentId, { $push: { chairs: chair._id } });
    res.status(201).json(chair);

};

//GETCHAIREBYID
exports.getChairById = async (req, res) => {
    try {
        const chair = await Chair.findById(req.params.id)
        // .populate('department');
        if (!chair) {
            return res.status(404).json({ message: 'Chair not found' });
        }
        res.json(chair);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


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




exports.createCourse = (req, res) => {
    const { name, departmentId } = req.body;
    const course = new Course({
        name,
        departmentId
    });
    course.save()
        .then(result => {
            res.status(201).json({
                message: 'Course created successfully',
                course: result
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
};

exports.getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json({
            message: 'Courses fetched successfully',
            courses: courses
        });
    } catch (error) {
        res.status(500).json({
            error: error
        });
    }
};







// exports.loginUser = async (req, res, next) => {
//     const { email, password } = req.body;


//     if (!email || !password) {
//         return next(new ErrorHandler("please enter email and password", 400))
//     }
//     else :
//     {
//         const chair = await Chair.findOne({ email }).select("+password");
//     console.log(chair)
//     if (!chair) {
//         return next(new ErrorHandler("user is not found with email and password"))
//     }
//     const ispasswordMatched = await chair.comparePassword(password);
//     if (!ispasswordMatched) {
//         return next(new ErrorHandler("user is not found with this email and password", 401))
//     }
//     sendTokenUser(chair, 200, res)

//     }
//     else:{
//         const chair = await Chair.findOne({ email }).select("+password");
//     console.log(chair)
//     if (!chair) {
//         return next(new ErrorHandler("user is not found with email and password"))
//     }
//     const ispasswordMatched = await chair.comparePassword(password);
//     if (!ispasswordMatched) {
//         return next(new ErrorHandler("user is not found with this email and password", 401))
//     }
//     sendTokenUser(chair, 200, res)

//     }
//     // const teacher = await Teacher.findOne({ email }.select("+password"));


// }

exports.loginUser = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return next(new ErrorHandler("Please enter email and password", 400));
    }

    try {
        let user = await Chair.findOne({ email }).select("+password");
        if (!user) {
            user = await Teacher.findOne({ email }).select("+password");
        }
        if (!user) {
            user = await Student.findOne({ email }).select("+password");
        }
        if (!user) {
            return next(new ErrorHandler("Invalid credentials", 401));
        }
        const isPasswordMatched = await user.comparePassword(password);
        if (!isPasswordMatched) {
            return next(new ErrorHandler("Invalid credentials", 401));
        }
        // console.log(user)
        sendTokenUser(user, 200, res);
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
};

//logout USER
exports.logoutUser = async (req, res, next) => {
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    });
    res.status(200).json({
        success: true,
        message: "log out success"
    })

}