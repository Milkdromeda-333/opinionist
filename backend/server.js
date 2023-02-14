const express = require('express');
require('dotenv').config();
const app = express();
const PORT = 8080;
const mongoose = require('mongoose');
const morgan = require('morgan');

//  ROUTES
const postsRouter = require('./routes/postsRouter');
const commentsRouter = require('./routes/commentsRouter');
const usersRouter = require('./routes/usersRouter');
const authRouter = require('./routes/authRouter');

// MIDDLEWARE

app.use(morgan('dev'));
app.use(express.json()); // parses requests for JSON

// routing
app.use('/auth', authRouter);
app.use('/posts', postsRouter);
app.use('/comments', commentsRouter);
app.use('/user', usersRouter);

// error handler
app.use((err, req, res, next) => {
    console.log(err);
    if (err.name === "UnauthorizedError") {
        res.status(err.status);
    }
    return res.send({ errMsg: err.message });
});

// START SERVER

// attempts to connect to db and then to port, if theres any error it will be logged
// function start() {
//     try {

//         mongoose.set("strictQuery", false);
//         mongoose.connect(process.env.MONGO_URI, () => console.log("Connected to database"));

//         app.listen(PORT, (error) => {
//             if (!error)
//                 console.log("Server is Successfully Running, and App is listening on port " + PORT);
//             else
//                 console.log("Error occurred, server can't start: ", error);
//         }
//         );
//     }
//     catch (err) {
//         console.log(err);
//     }
// }
// start()

app.listen(PORT, (err) => {
    if (err) {
        throw new Error(err);
    }
    // connect to db
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.MONGO_URI, (err) => {
        if (err) {
            throw err;
        }
        console.log("Connected to database");
    });
    console.log("Server is Successfully Running, and App is listening on port " + PORT);
})

