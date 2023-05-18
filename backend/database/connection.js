const mongoose = require("mongoose");


const connectBD = async () => {
    await mongoose.connect(process.env.DATABASE_URL)
    console.log("database is connected")

}
module.exports = connectBD
