const User = require("../model/user");
// const Question = require("../model/questtion");
const Department = require('../model/Department')
const Teacher = require('../model/teacherModel');
const Student = require("../model/student");
const Course = require("../model/CourseModel");
const Exam = require('../model/ExamaModel');
const Question = require('../model/questionModel');
const StudentExam = require("../model/StudentExam");
// const StudentExam = require('../model/studentExam');



// const { sendTokenUser } = require("../utils/jwtToken");


exports.registerStudent = async (req, res) => {
    try {

        const body = req.body;
        // console.log(body);

        if (!body) {
            return res.status(400).json({
                success: false,
                error: "Fill Required Details",
            });
        }
        var user = new User({
            name: req.body.name,
            email: req.body.email,
            contact: req.body.contact,
            password: req.body.password,
            role: "student",
            faculty: req.body.faculty


        });


        const users = await User.find({ email: req.body.email });

        if (users.length != 0) {
            console.log("already user with this email");
            res.json({ msg: "already user exist with this email!" });
        }
        else {
            const registeredUser = await user.save()
            // sendTokenUser(registeredUser, 201, res)

            res.status(201).json({
                success: true,
                user
            })


        }
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error in Saving");

    }
}


// exports.createChair = async (req, res) => {
//     const { name, email, password, contact, departmentId } = req.body;
//     const chair = new User({ name, email, password, contact, role: 'Chair', departmentId });
//     await chair.save();
//     await Department.findByIdAndUpdate(departmentId, { $push: { chairs: chair._id } });
//     res.status(201).json(chair);

// };
// exports.registerTeacher = async (req, res) => {
//     // var x = await check(req,res,req.body.email);

//     try {

//         const body = req.body;
//         console.log(body);

//         if (!body) {
//             return res.status(400).json({
//                 success: false,
//                 error: "Fill Required Details",
//             });
//         }
//         const user = new User({
//             name: req.body.name,
//             email: req.body.email,
//             contact: req.body.contact,
//             password: req.body.password,
//             role: "teacher",
//             departmentId: req.body.departmentId


//         });
//         await user.save();
//         await Department.findByIdAndUpdate(departmentId, { $push: { teachers: user._id } });
//         // res.status(201).json(user);

//         const users = await User.find({ email: req.body.email });


//         if (users.length != 0) {
//             console.log("already user with this email");
//             res.json({ msg: "already user exist with this email!" });
//         }
//         else {
//             // const registeredUser = await user.save()
//             // sendTokenUser(registeredUser, 201, res)

//             res.status(201).json({
//                 success: true,
//                 user
//             })

//         }
//     } catch (err) {
//         console.log(err.message);
//         res.status(500).send("Error in Saving");

//     }
// }



// exports.registerTeacher = async (req, res) => {
//     try {
//         const { name, email, password, contact, departmentId } = req.body;
//         const teacher = new User({
//             name,
//             email,
//             password,
//             contact,
//             role: 'teacher',
//             departmentId
//         });
//         await teacher.save();
//         await Department.findByIdAndUpdate(departmentId, { $push: { teachers: teacher._id } });
//         res.status(201).json({
//             success: true,
//             teacher
//         });
//     } catch (err) {
//         console.log(err.message);
//         res.status(500).send("Error in Saving");
//     }
// }
///REGISRATIN OF TEACHER
exports.registerTeacher = async (req, res) => {
    try {
        const { name, email, contact, password, departmentId, courseId } = req.body;

        // Check if department exists
        const existingDepartment = await Department.findById(departmentId);
        if (!existingDepartment) {
            return res.status(404).json({ error: 'Department not found' });
        }
        const existingCourse = await Course.findById(courseId);
        if (!existingCourse) {
            return res.status(404).json({ error: 'course not found' });

        }

        // Create new teacher
        const teacher = new Teacher({
            name,
            email,
            contact,
            password,
            role: 'teacher',
            departmentId,
            courseId
        });

        // Save teacher to database
        await teacher.save();

        // Add teacher to department
        // await User.findByIdAndUpdate(departmentId, { $push: { students: student._id } });
        existingDepartment.teachers.push(teacher._id);
        await existingDepartment.save();
        existingCourse.teachers.push(teacher._id);
        await existingCourse.save();


        res.status(201).json({
            message: 'Teacher created successfully',
            teacher
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};



///REGISTRATION STUDENT
exports.registerStudent = async (req, res) => {
    try {
        const { name, email, password, contact, departmentId } = req.body;
        const student = new Student({
            name,
            email,
            password,
            contact,
            role: 'student',
            departmentId
        });
        await student.save();
        await Student.findByIdAndUpdate(departmentId, { $push: { students: student._id } });
        res.status(201).json({
            success: true,
            student
        });
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error in Saving");
    }
}

//UPDATING STUDENT 

exports.updateStudent = async (req, res) => {
    try {
        const user = await Student.findById(req.params.id);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "Student not found",
            });
        }
        if (user.role !== "student") {
            return res.status(403).json({
                success: false,
                message: "You do not have permission to perform this action",
            });
        }

        const updatedUser = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        res.status(200).json({
            success: true,
            message: "Student profile updated",
            user: updatedUser,
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }


}
exports.UpdateTeacher = async (req, res) => {
    try {
        const user = await Teacher.findById(req.params.id);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "teacher not found",
            });
        }
        if (user.role !== "teacher") {
            return res.status(403).json({
                success: false,
                message: "You do not have permission to perform this action",
            });
        }

        const updatedUser = await Teacher.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        res.status(200).json({
            success: true,
            message: "teacehr profile updated",
            user: updatedUser,
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }


}

//UPDATING TAECHER


exports.seeStudent = async (req, res) => {
    try {
        const usr = await Student.find({ role: "student" });
        if (!usr) {
            res.status(404).json({ msg: "No student found" });
        }
        else {
            res.json({ students: usr });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Server Error" });
    }
}

exports.seeTeacher = async (req, res) => {
    const usr = await Teacher.find({ role: "teacher" })
    if (!usr) {
        console.log(error);
        res.json({ msg: "some error!" });
    }
    else {
        res.json({ user: usr });
    }

}

exports.deleteStudent = async (req, res) => {
    try {
        const usr = await Student.findOneAndDelete({ _id: req.params.id, role: "student" });

        if (!usr) {
            return res.status(404).json({ msg: "User not found" });
        }

        res.json({ msg: "Deleted Success!" });
    } catch (err) {
        return res.status(500).json({ msg: err.message });
    }
};

//deleting teacher
exports.deleteTeacher = async (req, res) => {
    try {
        const usr = await Teacher.findOneAndDelete({ _id: req.params.id, role: "teacher" });

        if (!usr) {
            return res.status(404).json({ msg: "User not found" });
        }

        res.json({ msg: "Deleted Success!" });
    } catch (err) {
        return res.status(500).json({ msg: err.message });
    }
};



exports.updateTeacher = async (req, res) => {
    let user = await User.findById(req.params.id,);
    if (!user) {
        return res.status(500).json({
            success: false,
            meassage: "teacher is not found with this id "
        })
    }
    if (user.role !== "teacher") {
        return res.status(403).json({
            success: false,
            message: "You do not have permission to perform this action"
        });
    }
    user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useUnified: false
    });
    res.status(200).json({
        success: true,
        user

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


//BLOCKING THE STUDENT 
exports.blockStudent = (req, res) => {
    var id = req.params.id
    const user = User.updateOne({ _id: id }, { blocked: true })
    if (!user) {
        return res.status(500).json({
            success: false,
            meassage: "student is not found with this id "
        })
    }
    else {
        res.status(201).json({
            message: "blocked user!"
        });

    }



}



exports.createExam = async (req, res) => {
    try {
        const { departmentId } = req.body;
        const department = await Department.findById(departmentId);

        const courses = await Course.find({ departmentId: departmentId });
        if (courses.length === 0) {
            return res.status(400).json({ message: 'No courses found for the specified department' });
        }

        const selectedQuestions = [];
        for (const course of courses) {
            const questions = course.questions.slice(0, 5); // select 5 questions from each course
            selectedQuestions.push(...questions);
        }
        const exam = new Exam({
            departmentId: department._id,
            questions: selectedQuestions,
        });

        await exam.save();

        res.status(201).json({ exam });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
exports.getExams = async (req, res) => {
    try {
        const exams = await Exam.find({}).populate('departmentId').populate('questions').exec();
        res.json({ exams });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}



// exports.createStudentExam = (req, res, next) => {
//     const studentExam = new StudentExam({
//         studentId: req.body.studentId,
//         examId: req.body.examId,
//         startTime: req.body.startTime,
//         endTime: req.body.endTime,
//         answers: req.body.answers,
//         score: req.body.score,
//     });
//     studentExam.save()
//         .then(result => {
//             res.status(201).json({
//                 message: 'Student exam created successfully',
//                 studentExam: result
//             });
//         })
//         .catch(error => {
//             res.status(500).json({
//                 message: 'Failed to create student exam',
//                 error: error
//             });
//         });
// // };

exports.getStudentExamById = (req, res, next) => {
    const id = req.params.studentExamId;
    StudentExam.findById(id)
        .populate('studentId')
        .populate('examId')
        .exec()
        .then((studentExam) => {
            if (studentExam) {
                res.status(200).json(studentExam);
            } else {
                res.status(404).json({ message: 'No valid entry found for provided ID' });
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: err });
        });
};

// Create a new student exam
exports.createStudentExam = (req, res, next) => {
    const studentExam = new StudentExam({
        title: req.body.title,
        totalMarks: req.body.totalMarks,
        marks_per_right_answer: req.body.marks_per_right_answer,
        studentId: req.body.studentId,
        examId: req.body.examId,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        pending: req.body.pending,
    });

    studentExam
        .save()
        .then((result) => {
            res.status(201).json({
                message: 'Created student exam successfully',
                createdStudentExam: {
                    title: result.title,
                    totalMarks: result.totalMarks,
                    marks_per_right_answer: result.marks_per_right_answer,
                    studentId: result.studentId,
                    examId: result.examId,
                    startTime: result.startTime,
                    endTime: result.endTime,
                    pending: result.pending,
                    _id: result._id,
                },
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: err });
        });
};



exports.updateStudentExam = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, totalMarks, marks_per_right_answer, studentId, examId, startTime, endTime, pending } = req.body;

        const studentExam = await StudentExam.findById(id);

        if (!studentExam) {
            return res.status(404).json({ message: 'Student exam not found' });
        }

        studentExam.title = title || studentExam.title;
        studentExam.totalMarks = totalMarks || studentExam.totalMarks;
        studentExam.marks_per_right_answer = marks_per_right_answer || studentExam.marks_per_right_answer;
        studentExam.studentId = studentId || studentExam.studentId;
        studentExam.examId = examId || studentExam.examId;
        studentExam.startTime = startTime || studentExam.startTime;
        studentExam.endTime = endTime || studentExam.endTime;
        studentExam.pending = pending || studentExam.pending;

        const updatedStudentExam = await studentExam.save();

        res.status(200).json(updatedStudentExam);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



// Get a specific student exam by ID
exports.getStudentExamById = (req, res, next) => {
    const id = req.params.id;
    StudentExam.findById(id)
        .populate('studentId')
        .populate('examId')
        .exec()
        .then((studentExam) => {
            if (studentExam) {
                res.status(200).json(studentExam);
            } else {
                res.status(404).json({ message: 'No valid entry found for provided ID' });
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: err });
        });
};
