const express = require('express');
const router = express.Router();
const Post = require('../models/post.js');

// all posts for homepage
router.get('/', (req, res, next) => {
    Post.find((err, posts) => {
        if (err) {
            res.status(500);
            return next(new Error('Sorry, there was a server error.'));
        }

        res.status(200);
        return res.json(posts);
    });

});

// all posts of given user
router.get('/:userID/posts', (req, res, next) => {
    res.send('all users posts');
});

// adds new post
router.post('/new', (req, res, next) => {
    res.send('add new post');
});

module.exports = router;