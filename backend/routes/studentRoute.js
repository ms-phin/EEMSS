const express = require("express")
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
// const { getRandomQuestions } = require("../controller/studentController");
const QuestionController = require('../controller/studentController');



const router = express.Router();

router.route("/getTestQuestions/:id").get(isAuthenticatedUser, authorizeRoles("student", "admin", "teacher"));