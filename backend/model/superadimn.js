const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");


const superadminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 50
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
        default: "superadmin"
    },

});
// departmentSchema.virtual('chairs', {
//     ref: 'Chair',
//     localField: '_id',
//     foreignField: 'departmentId',
//     justOne: false
// });

superadminSchema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password, 10);
});
superadminSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRES
    })
}
superadminSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

const Admin = mongoose.model('admin', superadminSchema);

module.exports = Admin;
