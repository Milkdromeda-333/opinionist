const express = require('express');
const router = express.Router();
const Post = require('../models/post.js');

// all posts for homepage
router.get('/', (req, res, next) => {
    Post.find({ isHidden: false }, null, { sort: { datePosted: "desc" } }, (err, posts) => {
        if (err) {
            res.status(500);
            return next(new Error(err));
        }

        res.status(200);
        return res.send(posts);
    });

});

// gets a singular post
router.get('/:postId', (req, res, next) => {
    Post.findOne({ _id: req.params.postId, isHidden: false }, (err, post) => {
        if (err) {
            res.status(500);
            return next(new Error(err));
        }

        res.status(200);
        return res.send(post);
    });
});

// all posts of given user
router.get('/user/:userId', (req, res, next) => {

    Post.find({ user: req.params.userId, isHidden: false }, (err, posts) => {

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

    req.body.user = id;

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

    Post.updateOne({ _id: req.params.postId }, { isHidden: true }, (err, response) => {
        if (err) {
            console.log(err);
            res.status(500);
            return next(new Error("There was a server error."));
        }
        res.status(200);
        return res.send(response);
    });
});

// votes on posts
router.put('/vote/:postId/:vote', (req, res, next) => {

    const userId = req.auth._id;

    Post.findOne({ _id: req.params.postId }, (err, foundPost) => {
        if (err) {
            res.status(500);
            return next(err);
        }

        const removeUpvote = () => {
            foundPost.upvotes = foundPost.upvotes.filter(id => id === userId);
        };

        const removeDownvote = () => {
            foundPost.downvotes = foundPost.downvotes.filter(id => id === userId);
        };

        if (req.params.vote === 'upvote') {
            if (foundPost.upvotes.includes(userId)) {
                removeUpvote();
            } else {
                foundPost.upvotes.push(userId);
                removeDownvote();

            }
        } else if (req.params.vote === 'downvote') {
            if (foundPost.downvotes.includes(userId)) {
                removeDownvote();
            } else {
                foundPost.downvotes.push(userId);
                removeUpvote();
            }
        }

        foundPost.save((err, result) => {
            if (err) {
                res.status(500);
                return next(err);
            };

            res.status(200);
            return res.send(result);
        });
    });
});

// sorts posts
router.get('/sort/:sortType', (req, res, next) => {

    switch (req.params.sortType) {
        case 'newest-first':
            Post.find({ isHidden: false }).sort({ datePosted: -1 }).exec((err, posts) => {
                if (err) {
                    res.status(500);
                    return next(err);
                }

                res.status(200);
                return res.json(posts);
            });
            break;
        case 'oldest-first':
            Post.find({ isHidden: false }).sort({ datePosted: 1 }).exec((err, posts) => {
                if (err) {
                    res.status(500);
                    return next(err);
                }

                res.status(200);
                return res.json(posts);
            });
            break;
        case 'popular-first':
            Post.find({ isHidden: false }).sort({ upvotes: -1 }).exec((err, posts) => {
                if (err) {
                    res.status(500);
                    return next(err);
                }

                res.status(200);
                return res.json(posts);
            });
            break;
        case 'most-controversial':
            Post.find({ isHidden: false }).sort({ downvotes: -1 }).exec((err, posts) => {
                if (err) {
                    res.status(500);
                    return next(err);
                }

                res.status(200);
                return res.send(posts);
            });
    }


});

module.exports = router;