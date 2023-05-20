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
    // avatar: {
    //     required: false,
    //     type: String
    // },
    role: {
        type: String,
        required: true,

    },
    blocked: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    departmentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department',
        required: true
    },
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    }],

    resetPasswordToken: String,
    resetPasswordTime: Date,

});

UserSchema.virtual('id').get(function () { return this._id.toHexString(); });
UserSchema.set('toJSON', { virtuals: true });

UserSchema.virtual('department', {
    ref: 'Department',
    localField: 'departmentId',
    foreignField: '_id',
    justOne: true
});

UserSchema.virtual('myStudents', {
    ref: 'User',
    localField: '_id',
    foreignField: 'teacherId',
    options: { match: { role: 'student' } }
});

UserSchema.virtual('myquestions', {
    ref: 'Question',
    localField: '_id',
    foreignField: 'teacherId'
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
UserSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}


module.exports = mongoose.model("User", UserSchema);
