

// create token and saving that in cookies

// exports.sendToken = (teacher, statusCode, res) => {

//     const token = teacher.getJwtToken();
//     // it works when we logout
//     // Options for cookies
//     const options = {
//         expires: new Date(
//             Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
//         ),
//         httpOnly: true
//     };

//     res.status(statusCode).cookie("token", token).json({
//         success: true,
//         teacher,
//         token
//     });
// }

// module.exports = sendToken;
exports.sendTokenUser = (user, statusCode, res) => {
    console.log(user)
    const token = user.getJwtToken();

    // Options for cookies
    const options = {
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
        ),
        httpOnly: true
    };

    res.status(statusCode).cookie("token", token).json({
        success: true,
        user,
        token,
        role: user.role,
        // blocked: user.blocked
    });
}