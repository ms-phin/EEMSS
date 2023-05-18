const express = require("express");
const router = express.Router();
const { getAllvalue } = require("../controller/smaplecontroll");
// const { modelNames } = require("mongoose");


router.route("/samples").get(getAllvalue);

module.exports = router