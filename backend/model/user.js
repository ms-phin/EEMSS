const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");


const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "please enter the name of youself"],
        minLength: [3, "please enter alist 3 characters"],
        maxLength: [20, "name can not be biger than 20 characters"]
    },
    email: {
        type: String,
        required: [true, "please enter your email"],
        unique: true
    },

    password: {
        type: String,
        required: [true, "please enter your password password "],
        minLength: [8, "please enter atleast 8 nnumber"]

    },

    contact: {
        required: true,
        type: String,
        unique: true
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    avatar: {
        required: false,
        type: String
    },
    role: {
        type: String,
        required: true,
        default: "STUDENT",
    },

    createdAt: {
        type: Date,
        default: Date.now(),
    },
    resetPasswordToken: String,
    resetPasswordTime: Date,
});

//hash password 
UserSchema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password, 10);
});
UserSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRES
    })
}

module.exports = mongoose.model("User", UserSchema);
