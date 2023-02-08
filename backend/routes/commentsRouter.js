const express = require('express');
const router = express.Router();

// controllers
const {
    getAllComments,
    getUserComments
} = require('../controllers/comments');

// all comments of a post
router.get('/:postID', getAllComments)

// get all user comments (untested)
router.get('/:userID/comments', getUserComments)

module.exports = router;