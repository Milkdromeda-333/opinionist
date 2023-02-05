const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
    type: String,
    required: [true, 'Please provide a username.'],
    maxlength: 20,
    unique: true,
    trim: true
    },
    memberSince: new Date(),
    isAdmin: {
        type: Boolean,
        default: false
    },
    password: {
        type: String,
        required: [true, 'Please provide a password.']
    },
    email: String
});

module.exports = mongoose.model('User', userSchema);