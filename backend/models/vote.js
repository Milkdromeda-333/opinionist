const mongoose = require('mongoose');

const voteSchema = {
    vote: {
        type: String,
        enum: ['upvote', 'downvote'],
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }
};

module.exports = mongoose.module('Vote', voteSchema);