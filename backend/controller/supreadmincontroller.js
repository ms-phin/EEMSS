const Department = require('../model/Department')
const Faculty = require('../model/Faculty')
const Chair = require("../model/chairModel")
// const Teacher = require("../model/teacherModel")
// const { sendTokenUser } = require("../utils/jwtToken");
// const ErrorHandler = require("../utils/ErrorHandler");
// const Department = require('../model/Department')
const SuperAdmin = require("../model/superadimn")
const Student = require("../model/student")
const Course = require("../model/CourseModel")
// const Faculty = require('../model/Faculty');


exports.createDepartment = async (req, res) => {
    const { name, facultyId, chairId } = req.body;
    const department = new Department({ name, facultyId, chairId });
    await department.save();
    const faculty = await Faculty.findById(facultyId);
    faculty.departments.push(department._id);
    await faculty.save();
    res.status(201).json(department);
};

exports.getAllDepartment = async (req, res, next) => {
    try {
        const departments = await Department.find();
        console.log(departments[0].name);

        if (departments.length === 0) {
            return res.status(404).json({ message: 'No departments found' });
        }
        // res.json(departments);
        res.status(200).json({
            message: 'departments fetched successfully',
            departments: departments
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
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
exports.createSuperAdmin = async (req, res) => {
    const { name, email, password } = req.body;
    const superAdmin = new SuperAdmin({
        name,
        email,
        password,
        role: 'superadmin'
    });
    await superAdmin.save();
    // await Department.findByIdAndUpdate(departmentId, { $push: { chairs: chair._id } });
    res.status(201).json(superAdmin);

};

// Create a new Faculty
exports.createFaculty = async (req, res) => {
    const { name } = req.body;
    const faculty = new Faculty({ name });
    try {
        await faculty.save();
        res.status(201).json(faculty);
    } catch (err) {
        if (err.code === 11000 && err.keyValue.name === name) {
            res.status(400).json({ message: "Faculty with this name already exists." });
        } else {
            res.status(500).json({ message: "An error occurred while creating the faculty." });
        }
    }
};

exports.getFaculties = async (req, res) => {
    try {
        const faculties = await Faculty.find();
        res.status(200).json(faculties);
    } catch (err) {
        res.status(500).json({ message: "An error occurred while getting faculties." });
    }
};