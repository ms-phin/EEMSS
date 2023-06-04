const express = require("express");
const router = express.Router();
const cors = require('cors');

const cookieParser = require("cookie-parser")

const dotenv = require("dotenv");
const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());


const chair = require("./routes/chairRoutes");
const register = require("./routes/uesrrouter");
const faculty = require("./routes/facultyroute");
const department = require("./routes/Departmentroutes");
const registerteacher = require("./routes/teacherroute");
const Student = require("./routes/studentRoute")
const connectBD = require("./database/connection");



dotenv.config({
    path: "backend/.env"
})

connectBD();

app.use("/api", chair);
app.use("/api", registerteacher);
app.use("/api", register);
app.use("/api", Student);
app.use("/api", faculty);
app.use("/api", department);
// app.use("/api", question);


const server = app.listen(process.env.PORT, () => {
    console.log(`server is running on http://localhost:${process.env.PORT}`)
})