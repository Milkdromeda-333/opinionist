const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 50
    },
    datePosted: new Date(),
    description: {
        type: String,
        minLength: 5,
        maxLength: 1500
    },
    isUpdated: {
        type: Boolean,
        default: false
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Post', postSchema);