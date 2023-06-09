const express = require("express")
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const { getActiveExams, getActiveExamsDuration } = require("../controller/studentController");
// const { getActiveExams } = require('../controller/studentController');




const router = express.Router();

router.route("/active-exams").get(getActiveExams);
router.route("/getActiveExamsDuration").get(getActiveExamsDuration);
router.route("/storeResult").post(getActiveExamsDuration);



// getActiveExamsDuration

// router.get('/active-exams', getActiveExams);
// router.route("/updateExam/:id").put(isAuthenticatedUser, authorizeRoles("chair"), updateExam);

module.exports = router;