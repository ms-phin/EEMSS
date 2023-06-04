const express = require("express");
const { createDepartment, getAllDepartment } = require("../controller/Department");

const router = express.Router();

router.route("/createDepartment").post(createDepartment);
router.route("/getAllDepartment").get(getAllDepartment);



module.exports = router;