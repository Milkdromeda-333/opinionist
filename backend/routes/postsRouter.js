const express = require('express');
const router = express.Router();
const Post = require('../models/post.js');


// all posts for homepage
router.get('/', (req, res, next) => {
    Post.find({ isHidden: false }, (err, posts) => {
        if (err) {
            res.status(500);
            return next(new Error(err));
        }

        res.status(200);
        return res.json(posts);
    });

});

// all posts of given user
router.get('/user', (req, res, next) => {

    const id = req.auth._id;

    // may be broken
    Post.find({ id, isHidden: false }, (err, posts) => {
        if (err) {
            res.status(500);
            return next(new Error(err));
        }

        res.status(200);
        return res.send(posts);

    });

});

// adds new post
router.post('/new', (req, res, next) => {

    const id = req.auth._id;

    // this saves id to user for the new Post
    req.body.user = id;

    // creates new post insatnce and saves it after
    const newPost = new Post(req.body);

    newPost.save((err, post) => {
        if (err) {
            res.status(500);
            return next(new Error(err));
        }
        res.status(201);
        return res.send(post);
    });

});

// hides posts
router.delete('/delete/:postId', (req, res, next) => {

    console.log("params: " + req.params.postId);

    Post.updateOne({ _id: req.params.postId }, { isHidden: true }, (err, response) => {
        if (err) {
            console.log(err);
            res.status(500);
            return next(new Error("There was a server error."));
        }

        // console.log(response);
        res.status(200);
        return res.send(response);
    });
});

module.exports = router;