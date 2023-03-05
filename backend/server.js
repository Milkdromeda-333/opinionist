const express = require('express');
require('dotenv').config();
const app = express();
const PORT = 8080;
const mongoose = require('mongoose');
const morgan = require('morgan');
const { expressjwt } = require('express-jwt');
const cors = require('cors');

//  ROUTES
const postsRouter = require('./routes/postsRouter');
const commentsRouter = require('./routes/commentsRouter');
const usersRouter = require('./routes/usersRouter');
const authRouter = require('./routes/authRouter');
const votesRouter = require('./routes/votesRouter');

// MIDDLEWARE

// CORS
app.use(cors());

app.use(morgan('dev'));
app.use(express.json()); // parses requests for JSON

// routing
app.use('/auth', authRouter);
app.use('/api', expressjwt({ secret: process.env.JWT_SECRET_KEY, algorithms: ['HS256'] }));
app.use('/api/posts', postsRouter);
app.use('/api/comments', commentsRouter);
app.use('/api/user', usersRouter);
app.use('/api/votes', votesRouter);

// error handler
app.use((err, req, res, next) => {
    console.log(err);
    if (err.name === 'UnauthorizedError') {
        res.status(err.status);
    }
    return res.send({ errMsg: err.message });
});

app.listen(PORT, (err) => {
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
    });
    console.log('Server is Successfully Running, and App is listening on port ' + PORT);
});