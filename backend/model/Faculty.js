// models/Faculty.js
const mongoose = require('mongoose');

const FacultySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please enter your faculty"],
        unique: true,
        minlength: 3,
        maxlength: 50
    },
    departments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department'
    }]
});

FacultySchema.virtual('id').get(function () { return this._id.toHexString(); });
FacultySchema.set('toJSON', { virtuals: true });

FacultySchema.virtual('mydepartments', {
    ref: 'Department',
    localField: '_id',
    foreignField: 'facultyId'
});

const Faculty = mongoose.model('Faculty', FacultySchema);

module.exports = Faculty;
