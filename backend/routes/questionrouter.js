const express = require("express")
const { createQuestion } = require("../controller/questioncontroller");

const router = express.Router();

router.route("/questions").post(createQuestion);
module.exports = router;