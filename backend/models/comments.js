const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    comment: {
        type: String,
        maxLength: 1500
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    username: {
        type: String,
        required: true
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Commment', commentSchema);