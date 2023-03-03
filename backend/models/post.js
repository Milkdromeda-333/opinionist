const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 50
    },
    datePosted: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String,
        required: true,
        maxLength: 1500
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    username: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Post', postSchema);