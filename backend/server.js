const express = require("express");

const dotenv = require("dotenv");
const app = express();
app.use(express.json())
//router import 
const product = require("./routes/sample");
const register = require('./routes/uesrrouter');
const question = require('./routes/questionrouter')
const connectBD = require("./database/connection");

dotenv.config({
    path: "backend/.env"
})

connectBD();

app.use("/api", product)
app.use("/api", register)
app.use("/api", question)

const server = app.listen(process.env.PORT, () => {
    console.log(`server is running on http://localhost:${process.env.PORT}`)
})