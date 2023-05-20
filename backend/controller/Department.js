const Department = require('../model/Department')
const Faculty = require('../model/Faculty')


exports.createDepartment = async (req, res) => {
  const { name, facultyId, chairId } = req.body;
  const department = new Department({ name, facultyId, chairId });
  await department.save();
  const faculty = await Faculty.findById(facultyId);
  faculty.departments.push(department._id);
  await faculty.save();
  res.status(201).json(department);
};

// exports.createDepartment = async (req, res) => {
//   try {
//     const department = new Department({
//       name: req.body.name,
//       chair: req.body.chair,
//       teachers: req.body.teachers,
//       students: req.body.students
//     });
//     await department.save();
//     res.status(201).json(department);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

