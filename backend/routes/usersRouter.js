const express = require('express');
const router = express.Router();

// controllers
const {
    updateUserPassword,
    deleteUser
} = require('../controllers/user');

// update users password
router.post('/update-password', updateUserPassword);

// delete user account
router.delete('/delete', deleteUser);

module.exports = router;