const express = require('express');
const router = express.Router();

// controllers
const {
    getAllVotes
} = require('../controllers/votes.js')

// gets all votes for a post
router.get('/:postID', getAllVotes);

module.exports = router