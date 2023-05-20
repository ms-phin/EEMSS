const express = require("express")
const { createQuestion, generateaRandomQuestion } = require("../controller/questioncontroller");

const router = express.Router();

router.route("/questions").post(createQuestion);
router.route("/question/random").get(generateaRandomQuestion)

module.exports = router;