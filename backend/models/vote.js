const mongoose = require('mongoose');

const voteSchema = {
    vote: {
        type: String,
        enum: ['upvote', 'downvote'],
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }
};

module.exports = mongoose.module('Vote', voteSchema);