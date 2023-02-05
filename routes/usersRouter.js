const express = require('express');
const router = express.Router();

const {
    updateUserPassword,
    deleteUser
} = require('../controllers/user');

router.post('/update-password', updateUserPassword);
router.delete('/delete', deleteUser);

module.exports = router;