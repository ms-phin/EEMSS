const express = require("express")
const { createQuestion, logoutTeacher, getAllQuestion, assignTest
    // seeStudent,
} = require("../controller/teachercontroller");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();
router.route("/createQuestion").post(isAuthenticatedUser, authorizeRoles("teacher"), createQuestion);
router.route("/assignTest").post(isAuthenticatedUser, authorizeRoles("teacher"), assignTest);
router.route("/logoutTeacher").get(isAuthenticatedUser, authorizeRoles("teacher"), logoutTeacher);
router.route("/seeallquestion/:id").get(isAuthenticatedUser, authorizeRoles("teacher"), getAllQuestion)



module.exports = router;