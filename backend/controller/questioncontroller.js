// const Question = require("../model/questtion");
// const { promisify } = require('util');


// exports.createQuestion = async (req, res, next) => {
//     const { questiont, options, answer } = req.body;

//     const question = await Question.create({
//         questiont,
//         options,
//         answer
//     })
//     res.status(201).json({
//         success: true,
//         question
//     })
// }
exports.createQuestion = async (req, res, next) => {
    try {
        const questions = req.body; // Get the array of questions from the request body
        const newQuestions = await Question.insertMany(questions); // Create new questions in the database
        res.status(201).json({
            success: true,
            questions: newQuestions
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};

exports.generateaRandomQuestion = async (req, res) => {
    try {
        const questions = await Question.find({});

        const randomIndex = Math.floor(Math.random() * questions.length);
        const randomQuestion = questions[randomIndex];
        res.send(randomQuestion);
    } catch (error) {
        console.log(error);
    }

}

//   (req, res) =>
// {
//     Question.countDocuments((err, count) => {
//         if (err)
//             return res.status(400).send(err);
//         const randomIndex = Math.floor(Math.random() * count);
//         Question.findOne().skip(randomIndex).exec((err, question) => {
//             if (err)
//                 return res.status(400).send(err);
//             res.send(question);
//         });
//     });
// }

// exports.generateaRandomQuestion = async (req, res) => {
//     const numQuestions = parseInt(req.query.numQuestions);
//     const expirationTime = parseInt(req.query.expirationTime); // in seconds

//     try {
//         const cachedQuestions = await promisify(client.get).bind(client)('Questions');

//         if (cachedQuestions) {
//             const { questionSetId, Questions, expiration } = JSON.parse(cachedQuestions);

//             if (Date.now() < expiration) {
//                 // Return cached questions
//                 return res.json({ questionSetId, Questions });
//             } else {
//                 // Clear expired cache
//                 await promisify(client.del).bind(client)('Questions');
//             }
//         }

//         // Generate new set of questions
//         const randomQuestions = await getRandomQuestions(4);
//         const questionSetId = Math.random().toString(36).substring(7); // Generate unique ID
//         const expiration = Date.now() + expirationTime * 1000; // Convert to milliseconds

//         // Cache questions
//         await promisify(client.set).bind(client)('questions', JSON.stringify({
//             questionSetId,
//             questions: randomQuestions,
//             expiration
//         }));

//         res.json({ questionSetId, Questions: randomQuestions });
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Internal server error');
//     }
// };

