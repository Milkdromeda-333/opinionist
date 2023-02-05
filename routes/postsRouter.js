const express = require('express')

const router = express.Router();

const {
    getAllPosts,
    getUsersPosts,
    addNewPost
} = require('../controllers/posts');

// all posts for homepage
router.get('/', getAllPosts);

// all comments of given user (untested)
router.get('/:userID/comments', getUsersPosts);

// adds new post
router.post('/new', addNewPost)

module.exports = router