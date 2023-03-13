const express = require('express');
const router = express.Router();
const Comment = require('../models/comments.js');
const Post = require('../models/post.js');

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

// deletes a certian comment
router.delete('/delete/:postId', (req, res, next) => {
    Comment.deleteOne({ _id: req.params.postId }, (err, response) => {
        if (err) {
            res.status(500);
            return next(new Error(err));
        }

        res.status(200);
        return res.send(response);
    });
});

// get all posts with comments from logged in user
router.get('/user/:userId', (req, res, next) => {
    Comment.find({ user: req.auth._id }, (err, comments) => {
        if (err) {
            res.status(500);
            return next(new Error(err));
        }

        const ids = comments.map(comment => comment.post);

        Post.find({ isHidden: false }).where('_id').in(ids).exec((err, posts) => {
            if (err) {
                res.status(500);
                return next(new Error(err));
            }

            res.status(200);
            return res.send(posts);
        });
    });
});

module.exports = router;