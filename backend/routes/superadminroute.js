const express = require("express");
// const express = require("express")
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const { createDepartment, getAllDepartment, createCourse, createChair, getAllCourses, createSuperAdmin, getFaculties } = require("../controller/supreadmincontroller");

const router = express.Router();

router.route("/createDepartment").post(isAuthenticatedUser, authorizeRoles("superadmin"), createDepartment);
router.route("/getAllDepartment").get(getAllDepartment);
router.route("/createCourse").post(createCourse);
router.route("/createSuperAdmin").post(createSuperAdmin);
router.route("/createChair").post(createChair);
router.route("/getFaculties").get(getFaculties);


// router.route("/getChairById/:id").get(getChairById);
router.route("/getAllCourses").get(getAllCourses);




module.exports = router;