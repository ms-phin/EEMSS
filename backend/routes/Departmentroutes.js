const express = require("express");
const { createDepartment } = require("../controller/Department");

const router = express.Router();

router.route("/createDepartment").post(createDepartment);

module.exports = router;