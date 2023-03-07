const express = require('express');
const router = express.Router();
const Comment = require('../models/comments.js');

// get all comments of a post
router.get('/:postId', (req, res, next) => {
    Comment.find({ post: req.params.postId }, (err, comments) => {
        if (err) {
            res.status(500);
            return next(new Error(err));
        }

        res.status(200);
        return res.send(comments);
    });
});

// create a new comment
router.post('/new-comment', (req, res, next) => {
    // req.body = postId, userId, comment body.

    const comment = new Comment(req.body);
    comment.save((err, response) => {
        if (err) {
            res.status(500);
            return next(new Error(err));
        }

        res.status(201);
        return res.send(response);
    });

});

module.exports = router;