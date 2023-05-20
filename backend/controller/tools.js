var UserModel = require("../models/user");
const bcrypt = require('bcrypt');
const saltRounds = 10;


//create admin
var createadmin = () => {
    bcrypt.hash("admin", saltRounds).then((hash) => {
        var tempdata = new UserModel({
            name: 'bebilo',
            password: 1212121,
            email: 'bebiloi@gmail.com',
            contact: '9563152',
            type: 'ADMIN',
        })
        tempdata.save().then(() => {
            console.log("user created")
        }).catch((err) => {
            console.log("err1", err);
        })
    }).catch((err) => {
        console.log("err2", err)
    })
}



var hashPassword = (password) => {
    return (new Promise((resolve, reject) => {
        bcrypt.hash(password, saltRounds).then(function (hash) {
            resolve(hash);
        }).catch((err) => {
            reject(err);
        })
    }))
}

module.exports = { createadmin, hashPassword }