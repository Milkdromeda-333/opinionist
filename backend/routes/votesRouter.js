const express = require('express');
const router = express.Router();
const Vote = require('../models/vote');
const Post = require('../models/post');
const User = require('../models/user');

// gets all votes
router.get('/', (req, res, next) => {

    Vote.find((err, votes) => {

        if (err) {
            console.log(err);
            res.status(500);
            return next(new Error("There was a server error."));
        }

        res.status(200);
        return res.send(votes);

    });

});

// gets all votes for a post
router.get('/:postId', (req, res, next) => {

    const postId = req.params.postId;

    Vote.find({ post: postId }, (err, votes) => {

        if (err) {
            console.log(err);
            res.status(500);
            return next(new Error("There was a server error."));
        }

        res.status(200);
        return res.send(votes);

    });

});

// posts a new vote
router.post('/add-new-vote', (req, res, next) => {
    // const newVote = new Vote(req.body);
    // console.log(newVote);
    // newVote.save((err, response) => {

    //     if (err) {
    //         console.log(err);
    //         res.status(500);
    //         return next(new Error("There was a server error."));
    //     }

    //     console.log(response);
    //     res.status(201);
    //     return res.send(response);

    // });

    // update post and update user 
    // i am recieving postid, userId, and vote.



});

module.exports = router;