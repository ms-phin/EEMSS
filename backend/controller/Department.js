// const Department = require('../model/Department')
// const Faculty = require('../model/Faculty')


// exports.createDepartment = async (req, res) => {
//   const { name, facultyId, chairId } = req.body;
//   const department = new Department({ name, facultyId, chairId });
//   await department.save();
//   const faculty = await Faculty.findById(facultyId);
//   faculty.departments.push(department._id);
//   await faculty.save();
//   res.status(201).json(department);
// };

// exports.getAllDepartment = async (req, res, next) => {
//   try {
//     const departments = await Department.find();
//     console.log(departments[0].name);

//     if (departments.length === 0) {
//       return res.status(404).json({ message: 'No departments found' });
//     }
//     // res.json(departments);
//     res.status(200).json({
//       message: 'departments fetched successfully',
//       departments: departments
//     });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };
// exports.getAllCourses = async (req, res) => {
//   try {
//     const courses = await Course.find();
//     res.status(200).json({
//       message: 'Courses fetched successfully',
//       courses: courses
//     });
//   } catch (error) {
//     res.status(500).json({
//       error: error
//     });
//   }
// };

// exports.getAllDepartment = async (req, res) => {
//   try {
//     const department = await Department.find();
//     res.status(200).json({
//       message: 'Courses fetched successfully',
//       departments: department
//     });
//   } catch (error) {
//     res.status(500).json({
//       error: error
//     });
//   }
// };

// exports.getAllDepartment = async (req, res) => {
//   try {
//     const limit = parseInt(req.query.limit) || 10;
//     const page = parseInt(req.query.page) || 1;
//     const offset = (page - 1) * limit;

//     const departmentCount = await Department.countDocuments();
//     const department = await Department.find()
//       .skip(offset)
//       .limit(limit);

//     res.status(200).json({
//       message: 'Departments fetched successfully',
//       departments: department,
//       totalDepartments: departmentCount,
//       currentPage: page,
//       totalPages: Math.ceil(departmentCount / limit)
//     });
//   } catch (error) {
//     res.status(500).json({
//       error: error
//     });
//   }
// };



