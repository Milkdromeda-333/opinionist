const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    comment: {
        type: String,
        maxLength: 1500
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    },
    isUpdated: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Commment', commentSchema);