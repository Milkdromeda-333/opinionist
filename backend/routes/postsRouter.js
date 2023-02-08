const express = require('express')

const router = express.Router();

// controllers
const {
    getAllPosts,
    getUsersPosts,
    addNewPost
} = require('../controllers/posts');

// all posts for homepage
router.get('/', getAllPosts);

// all posts of given user (untested)
router.get('/:userID/posts', getUsersPosts);

// adds new post
router.post('/new', addNewPost)

module.exports = router