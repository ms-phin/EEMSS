const User = require("../model/user")



    const { name, email, role, contact, password } = req.body;
    try {
        let user = await User.findOne({
            email,
        });
        if (user) {
            return res.status(400).json({
                msg: "User Already Exists",
            });
        }

        user = new User({
            name,
            email,
            contact,
            password,
            role

        });

        const userData = await user.save();
        console.log(userData.role);


        switch (userData.role) {
            case STUDENT:
                try {
                    student = Student({
                        profileInfo: userData._id,
                        attemptedTests: [],
                    });
                    await student.save();
                } catch (err) {
                    console.log(err.message);
                    return res.status(500).send("Error in Saving Student");
                }
                break;

            case TEACHER:
                try {
                    teacher = Teacher({
                        profileInfo: userData._id,
                        assignedTests: [],
                    });
                    // console.log(teacher)
                    await teacher.save();
                } catch (err) {
                    console.log(err.message);
                    return res.status(500).send("Error in Saving Teacher");
                }
                break;

            default:
                console.log("OK 200");
        }
        const token = user.getJwtToken();

        res.status(201).json({
            success: true,
            token,
            user
        })

    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error in Saving");
    }

}