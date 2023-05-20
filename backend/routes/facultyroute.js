const express = require("express");
const { createFaculty } = require("../controller/faculitycontrol");

const router = express.Router();

router.route("/createfaculty").post(createFaculty);

module.exports = router;