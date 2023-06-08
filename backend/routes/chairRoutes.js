const express = require("express");
const { seeStudent,
    seeTeacher,
    deleteTeacher,
    deleteStudent,
    updateTeacher,
    registerTeacher,
    getAllQuestion,
    registerStudent,
    updateStudent,
    UpdateTeacher,
    blockStudent,
    createExam,
    getExams,
    createStudentExam,
    updateStudentExam,
    getStudentExamById,
    getExamById,
    updateExam } = require("../controller/chaircontroller");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
// const { registerTeacher } = require("../controller/usercontroller");

const router = express.Router();
createExam
// seeStudent
router.route("/seeteacher").get(seeTeacher);
router.route("/deleteStudent/:id").delete(isAuthenticatedUser, authorizeRoles("chair"), deleteStudent)
router.route("/seestudent").get(isAuthenticatedUser, authorizeRoles("chair", "teacher"), seeStudent);
router.route("/updateStudent/:id").put(isAuthenticatedUser, authorizeRoles("chair"), updateStudent)
router.route("/UpdateTeacher/:id").put(isAuthenticatedUser, authorizeRoles("chair"), UpdateTeacher);
router.route("/blockStudent/:id").delete(isAuthenticatedUser, authorizeRoles("chair"), blockStudent);
router.route("/deleteTeacher/:id").delete(isAuthenticatedUser, authorizeRoles("chair"), deleteTeacher);
router.route("/updateTeacher").put(isAuthenticatedUser, authorizeRoles("chair"), updateTeacher);
router.route("/registerTeacher").post(registerTeacher);
router.route("/registerStudent").post(registerStudent);
router.route("/getAllQuestion/:id").get(isAuthenticatedUser, authorizeRoles("chair"), getAllQuestion);
router.route("/createExam").post(isAuthenticatedUser, authorizeRoles("chair"), createExam);
router.route("/getExams").get(isAuthenticatedUser, authorizeRoles("chair"), getExams);
router.route("/updateExam/:id").put(isAuthenticatedUser, authorizeRoles("chair"), updateExam);
router.route("/getExamById/:id").get(isAuthenticatedUser, authorizeRoles("chair"), getExamById);
router.route("/createStudentExam").post(isAuthenticatedUser, authorizeRoles("chair"), createStudentExam);
router.route("/updateStudentExam/:id").put(isAuthenticatedUser, authorizeRoles("chair"), updateStudentExam);
router.route("/getStudentExamById/:id").get(isAuthenticatedUser, authorizeRoles("chair"), getStudentExamById);




module.exports = router;









