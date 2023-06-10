const express = require("express");
const { createDepartment, getAllDepartment, createCourse, createChair, getAllCourses, createSuperAdmin } = require("../controller/supreadmincontroller");

const router = express.Router();

router.route("/createDepartment").post(createDepartment);
router.route("/getAllDepartment").get(getAllDepartment);
router.route("/createCourse").post(createCourse);
router.route("/createSuperAdmin").post(createSuperAdmin);
router.route("/createChair").post(createChair);

// router.route("/getChairById/:id").get(getChairById);
router.route("/getAllCourses").get(getAllCourses);




module.exports = router;