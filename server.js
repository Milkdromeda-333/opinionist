const express = require('express');
require('dotenv').config();
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const { expressjwt } = require('express-jwt');
const cors = require('cors');
const path = require("path");

//  ROUTES
const postsRouter = require('./routes/postsRouter');
const commentsRouter = require('./routes/commentsRouter');
const authRouter = require('./routes/authRouter');

// MIDDLEWARE

app.use(express.static(path.join(__dirname, "client", "build")));

// CORS
app.use(cors());

app.use(morgan('dev'));
app.use(express.json());

// routing
app.use('/auth', authRouter);
app.use('/api', expressjwt({ secret: process.env.JWT_SECRET_KEY, algorithms: ['HS256'] }));
app.use('/api/posts', postsRouter);
app.use('/api/comments', commentsRouter);

// error handler
app.use((err, req, res, next) => {
    console.log(err);
    if (err.name === 'UnauthorizedError') {
        res.status(err.status);
    }
    return res.send({ errMsg: err.message });
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(process.env.PORT, (err) => {
    if (err) {
        throw new Error(err);
    }
    // connect to db
    mongoose.set('strictQuery', false);
    mongoose.connect(process.env.MONGO_URI, (err) => {
        if (err) {
            throw err;
        }
        console.log('Connected to database');
        console.log('Server is Successfully Running, and App is listening on http://localhost:' + process.env.PORT);
    });
});