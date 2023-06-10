const express = require("express")
const { loginUser, logoutUser } = require("../controller/usercontroller");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
// const { getAllQuestion } = require("../controller/usercontroller");

const router = express.Router();

// router.route("/registration/student").post(isAuthenticatedUser, authorizeRoles("teacher"), registerStudent);
// router.route("/registration/teacher").post(isAuthenticatedUser, authorizeRoles("admin"), registerTeacher);



// router.route("/seequestionbytwo/:id").post(isAuthenticatedUser, authorizeRoles("teacher" || "admin"), getAllQuestion);

router.route("/login/user").post(loginUser);
router.route("/logout/user").get(isAuthenticatedUser, authorizeRoles("chair", "teacher", "student", "superadmin"), logoutUser);
module.exports = router;