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
    },
    votes: [{
        vote: {
            type: String,
            enum: ['upvote', 'downvote']
        },
        post: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        },
        voteId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Vote'
        }
    }]
});

// userSchema.pre('save', function (next) {
//     const user = this;
//     if (!user.isModified('password')) return next();

//     try {
//         const hash = argon2.hash(user.password);
//         user.password = hash;
//         next();
//     } catch (err) {
//         return next(err);
//     }
// });

// returns user without password
userSchema.methods.withoutPassword = function () {
    user = this.toObject();
    delete user.password;
    return user;
};

userSchema.methods.checkPassword = function (userAttempt, callback) {

    if (userAttempt !== this.password) {
        return callback(new Error('Username or Passward are incorrect'));
    }
    return callback(null, true);
};

module.exports = mongoose.model('User', userSchema);