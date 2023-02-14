const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please provide a username.'],
        maxlength: 20,
        unique: true,
        trim: true
    },
    memberSince: {
        type: Date,
        default: Date.now()
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    password: {
        type: String,
        required: [true, 'Please provide a password.']
    }
});

// returns user without password
userSchema.methods.withoutPassword = function () {
    user = this.toObject();
    // delete removes a property from an object
    delete user.password;
    return user;
};

userSchema.methods.checkPassword = function (userAttempt, callback) {
    if (userAttempt !== this.password) {
        return callback(new Error("Username or Passward are incorrect"));
    }
    return callback(null, true);
};

module.exports = mongoose.model('User', userSchema);