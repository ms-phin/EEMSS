
const mongoose = require('mongoose');

const DepartmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 50

    },
    facultyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Faculty'
    },
    chairId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chair'
    },
    teachers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher'
    }],
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    }],
    // questions: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Exam'
    // }]
});

DepartmentSchema.virtual('id').get(function () { return this._id.toHexString(); });
DepartmentSchema.set('toJSON', { virtuals: true });

DepartmentSchema.virtual('faculty', {
    ref: 'Faculty',
    localField: 'facultyId',
    foreignField: '_id',
    justOne: true
});

DepartmentSchema.virtual('chair', {
    ref: 'User',
    localField: '_id',
    foreignField: 'departmentId',
    options: { match: { role: 'Chair' } }
});

DepartmentSchema.virtual('teacher', {
    ref: 'User',
    localField: '_id',
    foreignField: 'departmentId',
    options: { match: { role: 'Teacher' } }
});

const Department = mongoose.model('Department', DepartmentSchema);

module.exports = Department;