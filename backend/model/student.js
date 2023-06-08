const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confrimepassword: {
        type: String,
        required: true,
        unique: true
    },
    department: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    ActivateStudent: {
        required: true,
        default: 1,
        type: Boolean
    },
    departmentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department'
    },
    exam: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Exam'
    }]
});
studentSchema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password, 10);
});
studentSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRES
    })
}
studentSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

// export model user with UserSchema
module.exports = mongoose.model("Student", studentSchema);
