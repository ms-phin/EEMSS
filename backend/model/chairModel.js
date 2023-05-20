const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");


const chairSchema = new mongoose.Schema({
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
    role: {
        type: String,
        required: true,
        default: "chair"
    },
    departmentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department',
        required: true
    }
});
// departmentSchema.virtual('chairs', {
//     ref: 'Chair',
//     localField: '_id',
//     foreignField: 'departmentId',
//     justOne: false
// });

chairSchema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password, 10);
});
chairSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRES
    })
}
chairSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

const Chair = mongoose.model('Chair', chairSchema);

module.exports = Chair;
