const ErrorHandler = require("../utils/ErrorHandler");
const jwt = require("jsonwebtoken");
const Teacher = require("../model/teacherModel");
const Student = require("../model/student")
const Chair = require("../model/chairModel");




exports.isAuthenticatedUser = async (req, res, next) => {
    // const { token } = req.cookies;
    // console.log(req.headers);
    // const token = req.headers.authorization.split(" ")[1];
    const token = req.cookies.token;
    
    if (!token) {
        return next(new ErrorHandler("Please Login for access this resource", 401));
    }

    const decodedData = jwt.verify(token, process.env.JWT_SECRET_KEY);

    let user;
    if (decodedData && decodedData.id) {
        user = await Teacher.findById(decodedData.id);
        if (!user) {
            user = await Chair.findById(decodedData.id);
        }
        if (!user) {
            user = await Student.findById(decodedData.id);
        }
    }

    if (!user) {
        return next(new ErrorHandler("User not found", 401));
    }

    req.user = user;

    next();
};
// exports.isAuthenticatedUser = async (req, res, next) => {
//     const token = req.headers.authorization.split(" ")[1];
    
//     if (!token) {
//         return next(new ErrorHandler("Please Login for access this resource", 401));
//     }

//     const decodedData = jwt.verify(token, process.env.JWT_SECRET_KEY);

//     let user;
//     if (decodedData && decodedData.id) {
//         user = await Teacher.findById(decodedData.id);
//         if (!user) {
//             user = await Chair.findById(decodedData.id);
//         }
//         if (!user) {
//             user = await Student.findById(decodedData.id);
//         }
//     }

//     if (!user) {
//         return next(new ErrorHandler("User not found", 401));
//     }

//     req.user = user;

//     next();
// };

exports.authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return next(new ErrorHandler(`Forbidden: ${req.user.role} cannot access this resource`, 403));
        }
        next();
    };
};







// exports.authorizeRoles = (...roles) => {
//     return (req, res) => {
//         if (!roles.includes(req.user.role)) {
//             res.status(403).json({ error: `Forbidden: ${req.user.role} cannot access this resource` });
//             return;
//         }
    // // exports.isAuthenticatedUser = async (req, res, next) => {
    // //     const { token } = req.cookies;
    
    // //     if (!token) {
    // //         return next(new ErrorHandler("Please Login for access this resource", 401));
    // //     }
    
    // //     const decodedData = jwt.verify(token, process.env.JWT_SECRET_KEY);
    
    // //     req.user = await Teacher.findById(decodedData.id);
    // //     req.user = await Chair.findById(decodedData.id);
    
    // //     next();
    // // }
//         // User has the necessary role, continue with the request
//         // ...
//     };
// };

