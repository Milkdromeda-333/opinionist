const express = require("express");
const authRouter = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');


// create token
function createToken(payload) {
    // payload needs to be an object
    return jwt.sign(payload, process.env.JWT_SECRET_KEY);
}

// ROUTE HANDLERS

// signup
authRouter.post('/signup', (req, res, next) => {
    User.findOne({ username: req.body.username }, (err, user) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        if (user) {
            res.status(403);
            return next(new Error('That username already exists'));
        }

        const newUser = new User(req.body);
        newUser.save((err, savedUser) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            const token = createToken(newUser.withoutPassword());
            res.status(201);
            return res.send({ token: token, user: savedUser.username });
        });
    });
});

// login
authRouter.post('/login', (req, res, next) => {
    User.findOne({ username: req.body.username }, (err, user) => {
        if (err) {
            res.status(500);
            return next(err);
        }

        if (!user) {
            res.status(403);
            return next(new Error('Incorrect username or password.'));
        }

        user.checkPassword(req.body.password, (err, isMatch) => {
            if (err) {
                res.status(500);
                return next(err);
            }

            if (!isMatch) {
                res.status(403);
                return next(new Error('Incorrect username or password.'));
            }

            const token = createToken(user.withoutPassword());
            res.status(200);
            return res.send(token);
        });

    });
});

module.exports = authRouter;